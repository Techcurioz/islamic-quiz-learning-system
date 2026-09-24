export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-slate-900">Islamic Quiz & Knowledge Assessment</p>
          <p>Building stronger understanding through guided Islamic learning.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="/quizzes" className="hover:text-brand-700">Quizzes</a>
          <a href="/dashboard" className="hover:text-brand-700">Dashboard</a>
          <a href="/admin" className="hover:text-brand-700">Admin</a>
        </div>
      </div>
    </footer>
  );
}
