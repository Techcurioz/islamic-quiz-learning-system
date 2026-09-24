import { NextResponse } from 'next/server';
import { demoQuizzes } from '@/lib/demo-data';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const quiz = demoQuizzes.find((item) => item.id === params.id);

  if (!quiz) {
    return NextResponse.json({ message: 'Quiz not found' }, { status: 404 });
  }

  return NextResponse.json({ quiz });
}
