import Link from 'next/link';
import { dashboardStats, demoQuizzes, quizCategories, siteFeatures } from '@/lib/demo-data';
import { QuizCard } from '@/components/quiz-card';

export default function HomePage() {
  return (
    <div>
      <section className="container-shell py-16 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Trusted learning platform
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              Learn Islam with confidence through smart, structured quizzes.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Test understanding of Qur’an, Hadith, Seerah, and Fiqh with interactive questions, explanation-based feedback, and progress tracking for every learner.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quizzes" className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white shadow-soft hover:bg-brand-700">
                Explore quizzes
              </Link>
              <Link href="/register" className="rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 hover:border-brand-500 hover:text-brand-700">
                Create account
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="rounded-2xl bg-slate-900 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Today’s learning</p>
              <h2 className="mt-3 text-3xl font-bold">Qur’an Basics</h2>
              <p className="mt-3 text-slate-200">Complete your daily challenge and improve your understanding of Islamic guidance.</p>
              <div className="mt-6 flex items-center justify-between rounded-xl bg-white/10 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-300">Progress</p>
                  <p className="mt-1 text-2xl font-bold">82%</p>
                </div>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-white/20">
                  <div className="h-full w-[82%] rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-12 text-white">
        <div className="container-shell grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {Object.entries(dashboardStats).map(([key, value]) => (
            <div key={key} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="mt-4 text-3xl font-bold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Categories</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Explore Islamic learning paths</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quizCategories.map((category) => (
            <div key={category.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-700">{category.slug}</p>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{category.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
              <p className="mt-5 text-sm font-medium text-slate-500">{category.quizCount} quizzes</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell pb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Popular modules</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Featured assessments</h2>
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
      </section>

      <section className="border-y border-slate-200 bg-white py-16">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Why this system matters</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Designed to improve Islamic learning and self-assessment</h2>
            </div>
            <div className="space-y-4">
              {siteFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">✓</div>
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
