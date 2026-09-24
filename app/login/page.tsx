export default function LoginPage() {
  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Welcome back</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Sign in</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" defaultValue="aisha@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" defaultValue="password123" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" />
          </div>

          <button type="submit" className="w-full rounded-full bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-700">
            Login
          </button>
        </form>

        <p className="mt-5 text-sm text-slate-500">
          Don’t have an account? <a href="/register" className="font-semibold text-brand-700">Create one</a>
        </p>
      </div>
    </div>
  );
}
