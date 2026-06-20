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
      className="group block rounded-lg border-2 border-slate-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50"
    >
      <h3 className="font-semibold text-slate-900 group-hover:text-blue-700 line-clamp-2">{title}</h3>
      {organization && (
        <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-700">🏢 {organization}</p>
      )}
      {lastDate && (
        <p className="mt-2 text-xs text-slate-500 group-hover:text-slate-600">📅 Last Date: {lastDate}</p>
      )}
      <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:text-blue-700">
        View Details
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </a>
  );
}
