import JobCard from './JobCard';

type Job = {
  id: string;
  title: string;
  organization: string | null;
  last_date: string | null;
};

type RelatedPostsSectionProps = {
  jobs: Job[];
  title?: string;
};

export default function RelatedPostsSection({ jobs, title = 'Related Job Postings' }: RelatedPostsSectionProps) {
  if (jobs.length === 0) return null;

  return (
    <div className="rounded-lg bg-slate-50 p-6 mb-6">
      <h3 className="mb-6 text-xl font-bold text-slate-900">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {jobs.slice(0, 4).map((job) => (
          <JobCard
            key={job.id}
            title={job.title}
            organization={job.organization}
            lastDate={job.last_date}
            link={`/jobs/${job.id}`}
          />
        ))}
      </div>
    </div>
  );
}
