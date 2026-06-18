'use client';

import JobCard from './JobCard';
import { useJobs } from '@/hooks/useJobs';

export default function JobListingPage() {
  const { jobs, loading, error } = useJobs('Latest Job');

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
        {jobs.map((job) => (
          <JobCard key={job.id} title={job.title} organization={job.organization} lastDate={job.last_date} link={job.official_link || '#'} />
        ))}
      </div>

      {!loading && jobs.length === 0 && (
        <div className="rounded-3xl bg-white p-8 text-center text-sm text-slate-600 shadow-sm">
          No active listings are available right now. Please check back later.
        </div>
      )}
    </section>
  );
}
