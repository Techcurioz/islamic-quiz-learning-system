import { NextResponse } from 'next/server';
import { z } from 'zod';

const attemptSchema = z.object({
  quizId: z.string(),
  answers: z.record(z.string()),
  userId: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = attemptSchema.parse(body);

    return NextResponse.json({
      message: 'Attempt recorded successfully',
      data: {
        quizId: parsed.quizId,
        answers: parsed.answers,
        userId: parsed.userId ?? 'guest'
      }
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Failed to record attempt',
      error: error instanceof Error ? error.message : 'unknown error'
    }, { status: 400 });
  }
}
