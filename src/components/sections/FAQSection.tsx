"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How quickly can a pod go live?",
    // TODO: confirm with client
    answer:
      "Most dedicated pods are fully trained and operational within two to three weeks. This includes system access setup, workflow and SOP review, brand voice coaching, and supervisor-monitored pilot calls before complete handover.",
  },
  {
    question: "Do you work in our systems?",
    // TODO: confirm with client
    answer:
      "Yes. Our specialists operate directly within your existing CRMs, ticketing portals, scheduling software, and communication tools. We adapt to your tech stack so there is zero duplicate data entry and total workflow continuity.",
  },
  {
    question: "How do you handle compliance?",
    // TODO: confirm with client
    answer:
      "We maintain strict adherence to your approved scripts, role-based access controls, and data confidentiality standards. For healthcare clients, all processes align with HIPAA protocols, while home services and real estate teams follow sector-specific compliance checklists.",
  },
  {
    question: "What time zones do you cover?",
    // TODO: confirm with client
    answer:
      "We provide true 24/7/365 coverage across all US, UK, and global time zones. Our follow-the-sun operational model ensures your customers receive prompt, live responses whether they reach out during peak business hours, evenings, or weekends.",
  },
  {
    question: "How is pricing structured?",
    // TODO: confirm with client
    answer:
      "Pricing is transparent and based on your required pod size, coverage hours, and operational scope. We offer predictable monthly rates with dedicated specialists, supervisor oversight, and QA governance included—with no hidden setup fees.",
  },
  {
    question: "Can we start with one service?",
    // TODO: confirm with client
    answer:
      "Absolutely. Many clients start with high-friction bottlenecks like after-hours call handling or schedule dispatch. As trust and operational rhythms are established, you can expand seamlessly into back-office admin, compliance, or full revenue operations.",
  },
];

export default function FAQSection() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className="w-full py-16 md:py-24 border-t border-b border-[rgba(185,138,62,0.30)] relative overflow-hidden"
      style={{
        backgroundColor: "color-mix(in srgb, var(--accent) 6%, var(--bg))",
      }}
    >
      {/* Fine grid pattern (1px lines, ink at 4%, 48px squares) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(51, 36, 25, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(51, 36, 25, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 90%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Header left: mono "05 / FAQ", H2 "Questions, answered." */}
          <div data-reveal className="lg:col-span-5 lg:sticky lg:top-28 self-start">
            <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] mb-3">
              <span className="text-[var(--accent)] font-bold">05</span>
              <span>/ FAQ</span>
            </div>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[54px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)] mb-4">
              Questions, answered.
            </h2>
            <p className="text-[16px] text-[var(--ink-80)] font-sans max-w-sm leading-[1.6]">
              Clear answers on operational pod onboarding, system integration, compliance protocols, and 24/7 coverage.
            </p>
          </div>

          {/* Right: accordion of 6 items */}
          <div data-reveal className="lg:col-span-7 border-t border-[var(--ink-15)]">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className="border-b border-[var(--ink-15)] transition-colors duration-200"
                >
                  <button
                    type="button"
                    id={`faq-question-${idx}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    onClick={() => toggleItem(idx)}
                    className="w-full py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]"
                  >
                    <span className="font-serif text-[20px] sm:text-[22px] font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors duration-200 leading-snug">
                      {item.question}
                    </span>

                    {/* + / - icon that rotates */}
                    <span
                      aria-hidden="true"
                      className={`relative w-6 h-6 flex items-center justify-center shrink-0 text-[var(--accent)] transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      {/* Horizontal bar */}
                      <span className="absolute w-4 h-[2px] bg-[var(--accent)] rounded-full" />
                      {/* Vertical bar (fades & collapses when open to leave minus sign) */}
                      <span
                        className={`absolute w-4 h-[2px] bg-[var(--accent)] rounded-full transition-all duration-300 ease-out ${
                          isOpen
                            ? "rotate-0 scale-y-0 opacity-0"
                            : "rotate-90 scale-y-100 opacity-100"
                        }`}
                      />
                    </span>
                  </button>

                  {/* Smooth height animation using grid-template-rows */}
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className={`grid transition-[grid-template-rows] duration-250 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className={`pb-6 pr-4 sm:pr-8 text-[15px] sm:text-[16px] text-[var(--ink-80)] leading-[1.65] font-sans transition-all duration-250 ease-out ${
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                      }`}>
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
