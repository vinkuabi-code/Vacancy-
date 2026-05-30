'use client';

import JobCard from './JobCard';
import useJobs from '@/hooks/useJobs';

type JobItem = {
  id: string;
  title: string;
  organization: string;
  lastDate: string;
  link: string;
};

type JobListingPageProps = {
  fallbackJobs?: JobItem[];
};

export default function JobListingPage({ fallbackJobs = [] }: JobListingPageProps) {
  const { jobs, loading, error } = useJobs();
  const displayJobs = jobs.length > 0 ? jobs : fallbackJobs;

  return (
    <section id="jobs" className="space-y-8">
      <div className="flex flex-col gap-3 rounded-3xl bg-white px-6 py-6 shadow-sm sm:px-8 sm:py-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Latest Vacancies</p>
          <h2 className="mt-3 text-3xl font-semibold text-textPrimary sm:text-4xl">Explore live government openings</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-textSecondary">
            Smart, professional job cards help your users find application deadlines quickly and jump straight to details.
          </p>
        </div>
        <a
          href="/jobs"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brandLight/10"
        >
          View All Jobs
        </a>
      </div>

      {loading && (
        <div className="rounded-3xl bg-white p-8 text-center text-sm text-slate-600 shadow-sm">
          Loading latest vacancies...
        </div>
      )}

      {error && (
        <div className="rounded-3xl bg-rose-50 p-8 text-center text-sm text-rose-700 shadow-sm">
          {error}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {displayJobs.map((job) => (
          <JobCard key={job.id} title={job.title} organization={job.organization} lastDate={job.lastDate} link={job.link} />
        ))}
      </div>

      {!loading && displayJobs.length === 0 && (
        <div className="rounded-3xl bg-white p-8 text-center text-sm text-slate-600 shadow-sm">
          No active listings are available right now. Please check back later.
        </div>
      )}
    </section>
  );
}
