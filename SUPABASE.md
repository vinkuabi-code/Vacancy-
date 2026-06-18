# Supabase Setup and Data Schema

## Required environment variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://loqquojtcseclovawyii.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable__jplPI9NSrcFGP-QPD_Pqw_2-m_IHmf
```

## Supabase table: `jobs`

Use this SQL in the Supabase SQL editor:

```sql
CREATE TABLE jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  title TEXT NOT NULL,
  category TEXT NOT NULL, -- 'Latest Job', 'Admit Card', 'Result'
  organization TEXT,       -- e.g., 'SSC', 'UPSC', 'Railway'
  last_date DATE,
  official_link TEXT,      -- Link to the govt site
  syllabus_text TEXT,      -- Heavy content (fetched only on detail page)
  is_active BOOLEAN DEFAULT true
);
```

## Sample data

```sql
insert into jobs (id, title, organization, lastDate, link, description, vacancies, fee, eligibility)
values
('ssc-cgl-2024', 'SSC CGL 2024', 'Staff Selection Commission', 'October 15, 2024', '/jobs/ssc-cgl-2024', 'Combined Graduate Level Examination for central government recruitment.', '17,727 Posts', '₹100 (Gen/OBC)', 'Any Graduate'),
('ibps-po-xiv', 'IBPS PO XIV 2024', 'Institute of Banking Personnel Selection', 'September 28, 2024', '/jobs/ibps-po-xiv', 'Probationary Officer recruitment for participating banks.', '4,500+ Posts', '₹850 (Gen/OBC)', 'Graduate in any discipline'),
('railways-constable', 'Railways Constable Recruitment', 'Indian Railways', 'November 04, 2024', '/jobs/railways-constable', 'A large-scale recruitment drive for railway constables.', '10,000+ Posts', '₹250 (Gen/OBC)', '10th Pass');
```

## How the app uses Supabase

- `lib/supabase.ts` initializes the Supabase client
- `hooks/useJobs.ts` fetches jobs from the `jobs` table
- If Supabase is not configured, the app falls back to demo data

## Next phases for the website

1. **Real job data & dynamic details**
   - Store job listings in the Supabase `jobs` table
   - Load job detail content from Supabase instead of hardcoded sample data

2. **Search, filter, and categories**
   - Add job search by title/organization
   - Add filters for sector, deadline, eligibility, or featured listings

3. **Authentication & personalization**
   - Add Supabase Auth for user sign-in
   - Allow users to save jobs, track applications, or subscribe to alerts

4. **Admin / content management**
   - Build a dashboard to create and edit job listings
   - Manage announcements, admit card links, and result updates

5. **Add storage and documents**
   - Use Supabase Storage for admit cards, result documents, PDFs, and notifications
   - Link stored files to job records and candidate resources

6. **Polish and launch**
   - Improve SEO, mobile UX, and performance
   - Add analytics, email/contact forms, and production deployment
   - Secure the app with proper access rules and policies
