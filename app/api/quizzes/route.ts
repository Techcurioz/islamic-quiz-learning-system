import { NextResponse } from 'next/server';
import { demoQuizzes } from '@/lib/demo-data';

export async function GET() {
  return NextResponse.json({ quizzes: demoQuizzes });
}
