import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Vacancy Walla | Job Portal',
  description: 'Professional government job portal built with Next.js, Tailwind CSS, and Firebase.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-textPrimary">{children}</body>
    </html>
  );
}
