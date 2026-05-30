import Navbar from '@/components/Navbar';

const admitCards = [
  { title: 'SSC CGL 2024 Admit Card', exam: 'SSC CGL', releaseDate: 'September 20, 2024' },
  { title: 'IBPS PO XIV Admit Card', exam: 'IBPS PO', releaseDate: 'September 05, 2024' },
  { title: 'Railways Constable Hall Ticket', exam: 'Indian Railways', releaseDate: 'October 12, 2024' }
];

export default function AdmitCardsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 rounded-3xl bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Admit Cards</p>
          <h1 className="mt-4 text-4xl font-semibold text-textPrimary">Download your latest hall tickets</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-textSecondary">
            Stay ready for upcoming government exams by downloading admit cards from the most recent recruitment drives.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {admitCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">{card.exam}</p>
              <h2 className="mt-4 text-xl font-semibold text-textPrimary">{card.title}</h2>
              <p className="mt-3 text-sm leading-6 text-textSecondary">Release date: {card.releaseDate}</p>
              <a href="#" className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brandLight">
                Download now
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
