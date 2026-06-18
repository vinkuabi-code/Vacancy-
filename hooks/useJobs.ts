'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export type Job = {
  id: string;
  title: string;
  category: 'Latest Job' | 'Admit Card' | 'Result';
  organization: string | null;
  last_date: string | null;
  official_link: string | null;
  is_active: boolean;
};

const sampleJobs: Job[] = [
  {
    id: 'ssc-cgl-2024',
    title: 'SSC CGL 2024',
    category: 'Latest Job',
    organization: 'Staff Selection Commission',
    last_date: '2024-10-15',
    official_link: 'https://ssc.gov.in',
    is_active: true
  },
  {
    id: 'ibps-po-xiv',
    title: 'IBPS PO XIV 2024 Admit Card',
    category: 'Admit Card',
    organization: 'IBPS',
    last_date: '2024-09-28',
    official_link: 'https://ibps.in',
    is_active: true
  },
  {
    id: 'railways-constable',
    title: 'Railways Constable Result',
    category: 'Result',
    organization: 'Indian Railways',
    last_date: '2024-11-04',
    official_link: 'https://indianrailways.gov.in',
    is_active: true
  }
];

export function useJobs(category?: 'Latest Job' | 'Admit Card' | 'Result') {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJobs = async () => {
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || !supabase) {
        const filtered = category ? sampleJobs.filter(j => j.category === category) : sampleJobs;
        setJobs(filtered);
        setLoading(false);
        return;
      }

      let query = supabase.from('jobs').select('id, title, category, organization, last_date, official_link, is_active').eq('is_active', true);
      
      if (category) {
        query = query.eq('category', category);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) {
        setError('Unable to load jobs. Showing demo listings.');
        const filtered = category ? sampleJobs.filter(j => j.category === category) : sampleJobs;
        setJobs(filtered);
      } else if (data) {
        setJobs(data as Job[]);
      } else {
        const filtered = category ? sampleJobs.filter(j => j.category === category) : sampleJobs;
        setJobs(filtered);
      }

      setLoading(false);
    };

    loadJobs();
  }, [category]);

  return { jobs, loading, error };
}

export default useJobs;
