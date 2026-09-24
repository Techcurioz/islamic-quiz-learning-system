import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white">
            I
          </div>
          <div>
            <p className="text-lg font-bold text-slate-900">Islamic Quiz</p>
            <p className="text-xs text-slate-500">Knowledge Assessment</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/">Home</Link>
          <Link href="/quizzes">Quizzes</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-500 hover:text-brand-700">
            Login
          </Link>
          <Link href="/register" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
