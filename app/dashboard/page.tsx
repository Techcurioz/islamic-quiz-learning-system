import { dashboardStats, exampleAttempt } from '@/lib/demo-data';

export default function DashboardPage() {
  return (
    <div className="container-shell py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Learner dashboard</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Your learning overview</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(dashboardStats).map(([key, value]) => (
          <div key={key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-sm text-slate-500">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-xl font-bold text-slate-900">Recent performance</h2>
          <div className="mt-6 space-y-4">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>Qur’an Basics</span>
                <span>82%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[82%] rounded-full bg-brand-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
                <span>Hadith Essentials</span>
                <span>76%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-[76%] rounded-full bg-amber-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-brand-50 p-6 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Latest attempt</p>
          <p className="mt-5 text-4xl font-black text-slate-900">{exampleAttempt.score}/{exampleAttempt.totalQuestions}</p>
          <p className="mt-2 text-lg text-slate-700">{exampleAttempt.percentage}% score</p>
          <span className="mt-5 inline-flex rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700">
            {exampleAttempt.level}
          </span>
        </div>
      </div>
    </div>
  );
}
