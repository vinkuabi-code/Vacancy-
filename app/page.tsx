'use client';

import { useJobs } from '@/hooks/useJobs';
import Navbar from '@/components/Navbar';
import JobCard from '@/components/JobCard';

export default function HomePage() {
  const latestJobs = useJobs('Latest Job');
  const admitCards = useJobs('Admit Card');
  const results = useJobs('Result');

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm font-semibold">🔔 Latest Vacancy Alerts</span>
          </div>
          <h1 className="text-5xl font-bold sm:text-6xl">
            Government Job Alerts
          </h1>
          <p className="mt-4 text-xl text-blue-50">
            Find verified job openings, admit cards & results in one place
          </p>
          <p className="mt-6 inline-block rounded-full bg-yellow-400 px-6 py-2 font-semibold text-slate-900">
            Latest Jobs | Admit Cards | Results
          </p>
        </div>
      </section>

      {/* 3-Column Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Latest Jobs Column */}
          <div id="latest" className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-6">
            <div className="mb-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-bold text-white">
              Latest Jobs
            </div>
            <h2 className="mb-6 text-2xl font-bold text-blue-900">New Openings</h2>
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
                <p className="text-blue-600">No jobs available yet</p>
              )}
            </div>
          </div>

          {/* Admit Cards Column */}
          <div id="admit-cards" className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-100/50 p-6">
            <div className="mb-2 inline-block rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
              Admit Cards
            </div>
            <h2 className="mb-6 text-2xl font-bold text-green-900">Hall Tickets</h2>
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
                <p className="text-green-600">No admit cards available yet</p>
              )}
            </div>
          </div>

          {/* Results Column */}
          <div id="results" className="rounded-xl bg-gradient-to-br from-orange-50 to-red-100/50 p-6">
            <div className="mb-2 inline-block rounded-full bg-orange-500 px-3 py-1 text-sm font-bold text-white">
              Results
            </div>
            <h2 className="mb-6 text-2xl font-bold text-orange-900">Exam Results</h2>
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
                <p className="text-orange-600">No results available yet</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-12 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <p className="text-lg font-bold">Vacancy Walla</p>
              <p className="text-sm text-slate-400">Government Job Alerts | Admit Cards | Results</p>
            </div>
            <a
              href="https://wa.me/919399159047?text=Hi!%20I%20need%20help%20with%20government%20jobs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 px-6 py-3 font-semibold text-slate-900 transition hover:from-green-300 hover:to-green-400"
            >
              <span>💬</span> WhatsApp Support
            </a>
          </div>
          <div className="mt-8 border-t border-slate-700 pt-8 text-center">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} Vacancy Walla. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
