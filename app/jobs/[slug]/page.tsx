'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';

type JobDetail = {
  id: string;
  title: string;
  category: string;
  organization: string | null;
  last_date: string | null;
  official_link: string | null;
  eligibility: string | null;
  important_dates: string | null;
  exam_news: string | null;
  syllabus_text: string | null;
  fee: string | null;
  vacancies: string | null;
};

const sampleJob: JobDetail = {
  id: 'sample',
  title: 'SSC CGL 2024',
  category: 'Latest Job',
  organization: 'Staff Selection Commission',
  last_date: '2024-10-15',
  official_link: 'https://ssc.gov.in',
  eligibility: 'Any Graduate',
  important_dates: 'Exam Date: November 2024 | Admit Card: October 2024',
  exam_news: 'Latest notification released on official website',
  syllabus_text: 'Quantitative Aptitude, General Intelligence, English Language, General Awareness',
  fee: '₹100 (Gen/OBC)',
  vacancies: '17,727 Posts'
};

export default function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const [slug, setSlug] = useState<string | null>(null);
  const [job, setJob] = useState<JobDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getParams = async () => {
      const { slug: paramSlug } = await params;
      setSlug(paramSlug);
      loadJobDetail(paramSlug);
    };
    getParams();
  }, [params]);

  const loadJobDetail = async (jobId: string) => {
    if (!supabase) {
      setJob(sampleJob);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', jobId)
      .single();

    if (error || !data) {
      setJob(sampleJob);
    } else {
      setJob(data as JobDetail);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <p className="text-slate-600">Loading job details...</p>
        </div>
      </main>
    );
  }

  if (!job) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
          <p className="text-slate-600">Job not found</p>
          <Link href="/jobs" className="text-brand hover:underline">← Back to Jobs</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-blue-50 to-white px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/jobs" className="text-sm font-semibold text-brand hover:underline">← Back to Jobs</Link>
          <h1 className="mt-4 text-4xl font-bold text-slate-900">{job.title}</h1>
          <p className="mt-2 text-lg text-slate-600">{job.organization}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left Column - Main Info */}
          <div className="md:col-span-2 space-y-8">
            
            {/* Quick Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {job.vacancies && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-600">Vacancies</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{job.vacancies}</p>
                </div>
              )}
              {job.fee && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-600">Application Fee</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{job.fee}</p>
                </div>
              )}
              {job.last_date && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-600">Last Date</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{job.last_date}</p>
                </div>
              )}
              {job.eligibility && (
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-600">Eligibility</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">{job.eligibility}</p>
                </div>
              )}
            </div>

            {/* Eligibility Section */}
            {job.eligibility && (
              <div className="rounded-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-900">Eligibility Criteria</h2>
                <p className="mt-4 text-slate-700 leading-relaxed">{job.eligibility}</p>
              </div>
            )}

            {/* Important Dates Section */}
            {job.important_dates && (
              <div className="rounded-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-900">Important Dates</h2>
                <div className="mt-4 space-y-3">
                  {job.important_dates.split('|').map((date, idx) => (
                    <p key={idx} className="text-slate-700">
                      <span className="font-semibold">{date.trim()}</span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Exam News Section */}
            {job.exam_news && (
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-6">
                <h2 className="text-2xl font-bold text-blue-900">Latest News</h2>
                <p className="mt-4 text-blue-800 leading-relaxed">{job.exam_news}</p>
              </div>
            )}

            {/* Syllabus Section */}
            {job.syllabus_text && (
              <div className="rounded-lg border border-slate-200 p-6">
                <h2 className="text-2xl font-bold text-slate-900">Syllabus</h2>
                <p className="mt-4 text-slate-700 leading-relaxed whitespace-pre-wrap">{job.syllabus_text}</p>
              </div>
            )}
          </div>

          {/* Right Column - CTA Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-20 space-y-4 rounded-lg border border-slate-200 bg-slate-50 p-6">
              {job.official_link && (
                <a
                  href={job.official_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Apply Now
                </a>
              )}
              
              <a
                href="https://wa.me/919399159047?text=Hi!%20I%20have%20questions%20about%20this%20job"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-green-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-600"
              >
                WhatsApp Help
              </a>

              <div className="rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
                <p className="font-semibold">💡 Tip</p>
                <p className="mt-2">Save this page for future reference. Check for exam date updates regularly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
