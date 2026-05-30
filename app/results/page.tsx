import Navbar from '@/components/Navbar';

const results = [
  { title: 'SSC CGL 2024 Result', exam: 'SSC CGL', published: 'October 28, 2024' },
  { title: 'IBPS PO XIV Result', exam: 'IBPS PO', published: 'October 10, 2024' },
  { title: 'Railways Constable Result', exam: 'Indian Railways', published: 'November 16, 2024' }
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 rounded-3xl bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Results</p>
          <h1 className="mt-4 text-4xl font-semibold text-textPrimary">Check the latest exam outcomes</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-textSecondary">
            Access the newest government exam result announcements and follow the next steps for merit lists and selection rounds.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((result) => (
            <article key={result.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{result.exam}</p>
              <h2 className="mt-4 text-xl font-semibold text-textPrimary">{result.title}</h2>
              <p className="mt-3 text-sm leading-6 text-textSecondary">Published: {result.published}</p>
              <a href="#" className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brandLight">
                View result
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
