import { NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { signToken } from '@/lib/auth';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: parsed.email }
    });

    if (!user) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isValid = await bcrypt.compare(parsed.password, user.passwordHash);

    if (!isValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = signToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });

    return NextResponse.json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Login failed',
      error: error instanceof Error ? error.message : 'unknown error'
    }, { status: 400 });
  }
}
