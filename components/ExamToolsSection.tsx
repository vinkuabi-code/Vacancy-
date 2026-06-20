const examCategories = [
  { name: 'SSC', color: 'bg-blue-500', href: '/jobs?exam=ssc' },
  { name: 'RRB', color: 'bg-red-500', href: '/jobs?exam=rrb' },
  { name: 'UPSSSC', color: 'bg-green-500', href: '/jobs?exam=upsssc' },
  { name: 'DSSSB', color: 'bg-purple-500', href: '/jobs?exam=dsssb' },
  { name: 'Bank', color: 'bg-indigo-500', href: '/jobs?exam=bank' },
  { name: 'IBPS', color: 'bg-pink-500', href: '/jobs?exam=ibps' },
  { name: 'Insurance', color: 'bg-yellow-500', href: '/jobs?exam=insurance' },
  { name: 'State Jobs', color: 'bg-teal-500', href: '/jobs?exam=state' },
];

export default function ExamToolsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">Explore by Exam</h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
        {examCategories.map((exam) => (
          <a
            key={exam.name}
            href={exam.href}
            className={`${exam.color} group rounded-lg px-6 py-8 text-center text-white shadow-md transition hover:shadow-xl hover:-translate-y-1`}
          >
            <h3 className="text-xl font-bold group-hover:scale-110 transition-transform">{exam.name}</h3>
            <p className="mt-2 text-sm opacity-90">View Jobs →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
