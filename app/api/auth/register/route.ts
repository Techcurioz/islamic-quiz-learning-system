import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { signToken } from '@/lib/auth';
import bcrypt from 'bcryptjs';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerSchema.parse(body);

    const existingUser = await prisma.user.findUnique({
      where: { email: parsed.email }
    });

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(parsed.password, 10);
    const user = await prisma.user.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        passwordHash,
        role: 'USER'
      }
    });

    const token = signToken({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    });

    return NextResponse.json({
      token,
      user: { id: user.id, name: user.name, email: user.email }
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: 'Registration failed',
      error: error instanceof Error ? error.message : 'unknown error'
    }, { status: 400 });
  }
}
