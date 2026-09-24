import Link from 'next/link';

type QuizCardProps = {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  attempts: number;
  rating: number;
  reviewCount: number;
};

export function QuizCard({
  id,
  title,
  description,
  category,
  difficulty,
  attempts,
  rating,
  reviewCount
}: QuizCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-200">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
          {category}
        </span>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
          {difficulty}
        </span>
      </div>

      <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="mb-5 text-sm leading-6 text-slate-600">{description}</p>

      <div className="mb-5 flex items-center justify-between text-xs text-slate-500">
        <span>{attempts} attempts</span>
        <span>{rating.toFixed(1)} ★ ({reviewCount})</span>
      </div>

      <Link href={`/quizzes/${id}`} className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
        Start quiz
      </Link>
    </div>
  );
}
