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
  }
];

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Latest Jobs</p>
          <h1 className="mt-4 text-3xl font-semibold text-textPrimary sm:text-4xl">Latest vacancies from all sectors</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-textSecondary">
            Browse the most recent active government openings with important deadlines and direct detail links.
          </p>
        </div>
        <JobListingPage fallbackJobs={sampleJobs} />
      </section>
    </main>
  );
}
