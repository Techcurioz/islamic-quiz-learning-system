import { notFound } from 'next/navigation';
import { demoQuizzes } from '@/lib/demo-data';
import { QuizTaker } from '@/components/quiz-taker';

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  const quiz = demoQuizzes.find((item) => item.id === params.id);

  if (!quiz) {
    notFound();
  }

  return (
    <div className="container-shell py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Assessment</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">{quiz.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600">{quiz.description}</p>
      </div>

      <QuizTaker title={quiz.title} questions={quiz.questions} />
    </div>
  );
}
