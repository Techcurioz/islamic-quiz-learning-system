import { demoQuizzes } from '@/lib/demo-data';
import { QuizCard } from '@/components/quiz-card';

export default function QuizzesPage() {
  return (
    <div className="container-shell py-16">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Quiz library</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">Choose your next assessment</h1>
        </div>

        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">
          {demoQuizzes.length} available quizzes
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {demoQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            id={quiz.id}
            title={quiz.title}
            description={quiz.description}
            category={quiz.category}
            difficulty={quiz.difficulty}
            attempts={quiz.attempts}
            rating={quiz.rating}
            reviewCount={quiz.reviewCount}
          />
        ))}
      </div>
    </div>
  );
}
