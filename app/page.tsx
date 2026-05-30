import Navbar from '@/components/Navbar';
import JobListingPage from '@/components/JobListingPage';

const sampleJobs = [
  {
    id: 'ssc-cgl-2024',
    title: 'SSC CGL 2024',
    organization: 'Staff Selection Commission',
    lastDate: 'October 15, 2024',
    link: '/jobs/ssc-cgl-2024'
  },
  {
    id: 'ibps-po-xiv',
    title: 'IBPS PO XIV 2024',
    organization: 'Institute of Banking Personnel Selection',
    lastDate: 'September 28, 2024',
    link: '/jobs/ibps-po-xiv'
  },
  {
    id: 'railways-constable',
    title: 'Railways Constable Recruitment',
    organization: 'Indian Railways',
    lastDate: 'November 04, 2024',
    link: '/jobs/railways-constable'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <section className="bg-brand text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <p className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">
              Government Job Portal
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Find verified vacancy alerts with a trust-first experience.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-slate-200/90">
              Vacancy Walla brings professional job listings, admit card notifications, and result updates into one clean, responsive portal designed for fast decision making.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="/jobs" className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-brand transition hover:bg-yellow-500">
                Explore Jobs
              </a>
              <a href="mailto:hello@vacancywalla.com" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/20">
                Request Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <JobListingPage fallbackJobs={sampleJobs} />
      </section>
    </main>
  );
}
