'use client';

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQItem[];
};

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) return null;

  return (
    <div className="rounded-lg bg-slate-50 p-6 mb-6">
      <h3 className="mb-6 text-xl font-bold text-slate-900">Frequently Asked Questions</h3>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="rounded-lg border border-slate-200 bg-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-4 py-4 flex items-center justify-between hover:bg-slate-50 transition"
            >
              <h4 className="font-semibold text-slate-900 text-left">{faq.question}</h4>
              <span className={`text-blue-600 font-bold transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-4 border-t border-slate-200 bg-slate-50 text-slate-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
