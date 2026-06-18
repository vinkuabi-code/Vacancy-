'use client';

import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Latest Jobs', href: '/#latest' },
  { label: 'Admit Cards', href: '/#admit-cards' },
  { label: 'Results', href: '/#results' }
];

const WHATSAPP_LINK = 'https://wa.me/919000000000?text=Hi!%20I%20need%20help%20with%20government%20jobs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="text-xl font-semibold text-brand">
          Vacancy Walla
        </a>

        <button
          type="button"
          className="inline-flex items-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-accent md:hidden"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Open navigation menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-600"
          >
            WhatsApp Help
          </a>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden" id="mobile-menu">
          <div className="space-y-2 px-6 py-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-600"
            >
              WhatsApp Help
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
