type JobCardProps = {
  title: string;
  organization: string;
  lastDate: string;
  link: string;
};

export default function JobCard({ title, organization, lastDate, link }: JobCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-brandLight/10 px-3 py-1 text-sm font-semibold text-brand">Active</span>
        <span className="text-sm text-slate-500">Apply by {lastDate}</span>
      </div>
      <h2 className="text-xl font-semibold text-textPrimary">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-textSecondary">{organization}</p>
      <div className="mt-6 flex items-center justify-between gap-4">
        <a
          href={link}
          className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brandLight"
        >
          View Details
        </a>
      </div>
    </article>
  );
}
