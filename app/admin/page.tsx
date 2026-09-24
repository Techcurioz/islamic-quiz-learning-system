export default function AdminPage() {
  return (
    <div className="container-shell py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-700">Admin control panel</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Quiz verification and moderation</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { title: 'Pending quiz review', value: '18' },
          { title: 'Approved content', value: '132' },
          { title: 'Flagged reports', value: '4' }
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm text-slate-500">{item.title}</p>
            <p className="mt-3 text-3xl font-bold text-slate-900">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <h2 className="text-xl font-bold text-slate-900">Recent moderation activity</h2>
        <div className="mt-6 space-y-4">
          {[
            'Qur’an Basics reviewed and approved',
            'Hadith Essentials flagged for source verification',
            'New Seerah quiz submitted by contributor'
          ].map((entry) => (
            <div key={entry} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-slate-700">
              <div className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              <span>{entry}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
