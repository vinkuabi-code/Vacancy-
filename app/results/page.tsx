'use client';

import Navbar from '@/components/Navbar';
import { useJobs } from '@/hooks/useJobs';
import JobCard from '@/components/JobCard';

export default function ResultsPage() {
  const { jobs, loading } = useJobs('Result');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Results</h1>
          <p className="mt-2 text-slate-600">Check the latest exam results and announcements</p>
        </div>

        {loading ? (
          <p className="text-slate-600">Loading results...</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.id} title={job.title} organization={job.organization} lastDate={job.last_date} link={job.official_link || '#'} />
            ))}
            {jobs.length === 0 && <p className="text-slate-600">No results available</p>}
          </div>
        )}
      </section>
    </main>
  );
}
