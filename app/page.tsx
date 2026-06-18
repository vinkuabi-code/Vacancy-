'use client';

import { useJobs } from '@/hooks/useJobs';
import Navbar from '@/components/Navbar';
import JobCard from '@/components/JobCard';

export default function HomePage() {
  const latestJobs = useJobs('Latest Job');
  const admitCards = useJobs('Admit Card');
  const results = useJobs('Result');

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
            Government Job Alerts
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Latest Jobs | Admit Cards | Results
          </p>
        </div>
      </section>

      {/* 3-Column Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Latest Jobs Column */}
          <div id="latest">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Latest Jobs</h2>
            <div className="space-y-3">
              {latestJobs.jobs.length > 0 ? (
                latestJobs.jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    organization={job.organization}
                    lastDate={job.last_date}
                    link={job.official_link || '#'}
                  />
                ))
              ) : (
                <p className="text-slate-600">No jobs available yet</p>
              )}
            </div>
          </div>

          {/* Admit Cards Column */}
          <div id="admit-cards">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Admit Cards</h2>
            <div className="space-y-3">
              {admitCards.jobs.length > 0 ? (
                admitCards.jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    organization={job.organization}
                    lastDate={job.last_date}
                    link={job.official_link || '#'}
                  />
                ))
              ) : (
                <p className="text-slate-600">No admit cards available yet</p>
              )}
            </div>
          </div>

          {/* Results Column */}
          <div id="results">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">Results</h2>
            <div className="space-y-3">
              {results.jobs.length > 0 ? (
                results.jobs.map((job) => (
                  <JobCard
                    key={job.id}
                    title={job.title}
                    organization={job.organization}
                    lastDate={job.last_date}
                    link={job.official_link || '#'}
                  />
                ))
              ) : (
                <p className="text-slate-600">No results available yet</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Vacancy Walla. All rights reserved.
            </p>
            <a
              href="https://wa.me/919000000000?text=Hi!%20I%20need%20help%20with%20government%20jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              <span>💬</span> WhatsApp Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
