type JobCardProps = {
  title: string;
  organization: string | null;
  lastDate: string | null;
  link: string;
};

export default function JobCard({ title, organization, lastDate, link }: JobCardProps) {
  return (
    <a
      href={link || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {organization && <p className="mt-1 text-sm text-slate-600">{organization}</p>}
      {lastDate && <p className="mt-2 text-xs text-slate-500">Deadline: {lastDate}</p>}
    </a>
  );
}
