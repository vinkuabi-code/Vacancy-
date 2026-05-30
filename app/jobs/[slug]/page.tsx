import Link from 'next/link';
import Navbar from '@/components/Navbar';

const jobDetails: Record<string, { title: string; organization: string; lastDate: string; vacancies: string; fee: string; eligibility: string; description: string; }> = {
  'ssc-cgl-2024': {
    title: 'SSC CGL 2024',
    organization: 'Staff Selection Commission',
    lastDate: 'October 15, 2024',
    vacancies: '17,727 Posts',
    fee: '₹100 (Gen/OBC)',
    eligibility: 'Any Graduate',
    description: 'Combined Graduate Level Examination for central government recruitment. Prepare for Tier I and Tier II with detailed vacancy information and official notification links.'
  },
  'ibps-po-xiv': {
    title: 'IBPS PO XIV 2024',
    organization: 'Institute of Banking Personnel Selection',
    lastDate: 'September 28, 2024',
    vacancies: '4,500+ Posts',
    fee: '₹850 (Gen/OBC)',
    eligibility: 'Graduate in any discipline',
    description: 'Probationary Officer recruitment for participating banks with a focus on finance and customer service roles. Includes prelims, mains, and interview stages.'
  },
  'railways-constable': {
    title: 'Railways Constable Recruitment',
    organization: 'Indian Railways',
    lastDate: 'November 04, 2024',
    vacancies: '10,000+ Posts',
    fee: '₹250 (Gen/OBC)',
    eligibility: '10th Pass',
    description: 'A large-scale recruitment drive for railway constables. The page includes exam dates, eligibility criteria and application instructions for aspirants.'
  }
};

export default function JobDetailPage(props: any) {
  const { params } = props;
  const job = jobDetails[params?.slug] || {
    title: 'Job details',
    organization: 'Vacancy Walla',
    lastDate: 'TBA',
    vacancies: 'TBA',
    fee: 'TBA',
    eligibility: 'TBA',
    description: 'This job detail page is a sample layout. Replace with Firestore-driven content for real vacancies.'
  };

  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <Link href="/jobs" className="text-sm font-semibold text-brand hover:underline">
          ← Back to listings
        </Link>
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Job Details</p>
              <h1 className="mt-4 text-4xl font-semibold text-textPrimary">{job.title}</h1>
              <p className="mt-3 text-sm leading-7 text-textSecondary">{job.organization}</p>
            </div>
            <div className="space-y-3 rounded-3xl bg-surface-container-low p-6 text-sm text-textSecondary">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">Apply by</p>
                <p className="mt-2 font-semibold text-textPrimary">{job.lastDate}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">Vacancies</p>
                <p className="mt-2 font-semibold text-textPrimary">{job.vacancies}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">Application Fee</p>
                <p className="mt-2 font-semibold text-textPrimary">{job.fee}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-accent">Eligibility</p>
                <p className="mt-2 font-semibold text-textPrimary">{job.eligibility}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <article className="rounded-3xl bg-surface p-6">
                <h2 className="text-2xl font-semibold text-textPrimary">About this vacancy</h2>
                <p className="mt-4 text-sm leading-7 text-textSecondary">{job.description}</p>
              </article>
              <article className="rounded-3xl bg-white border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-textPrimary">How to apply</h3>
                <ul className="mt-4 space-y-3 text-sm text-textSecondary">
                  <li>1. Read the official notification.</li>
                  <li>2. Complete the online application form.</li>
                  <li>3. Upload documents and pay the fee.</li>
                  <li>4. Submit before the deadline.</li>
                </ul>
              </article>
            </div>
            <aside className="rounded-3xl bg-brand text-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.24em] text-brandLight/80">Quick actions</p>
              <div className="mt-6 space-y-4">
                <a href="#" className="block rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                  Download notification
                </a>
                <a href="#" className="block rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand transition hover:bg-slate-100">
                  Save this job
                </a>
                <a href="mailto:hello@vacancywalla.com" className="block rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  Request help
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
