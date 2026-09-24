export default function RegisterPage() {
  return (
    <div className="container-shell py-16">
      <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Join us</p>
        <h1 className="mt-3 text-3xl font-bold text-slate-900">Create your account</h1>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
            <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" placeholder="Create password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-500" />
          </div>

          <button type="submit" className="w-full rounded-full bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-700">
            Register now
          </button>
        </form>
      </div>
    </div>
  );
}
