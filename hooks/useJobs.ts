'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export type Job = {
  id: string;
  title: string;
  organization: string;
  lastDate: string;
  link: string;
};

const sampleJobs: Job[] = [
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

export default function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        setJobs(sampleJobs);
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from('jobs')
        .select('id, title, organization, lastDate, link');

      if (fetchError) {
        setError('Unable to load jobs from Supabase. Showing demo listings.');
        setJobs(sampleJobs);
      } else if (data) {
        setJobs(data as Job[]);
      } else {
        setJobs(sampleJobs);
      }

      setLoading(false);
    };

    loadJobs();
  }, []);

  return { jobs, loading, error };
}
