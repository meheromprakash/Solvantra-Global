"use client";

import React, { useState } from "react";
import { ArrowRight, Check, User } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

export default function ServicesGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 24 waveform bar heights for Tile 1 audio animation
  const WAVE_BARS = [
    8, 14, 20, 12, 26, 18, 22, 10, 16, 28, 20, 14, 24, 18, 12, 22, 16, 26, 14,
    18, 10, 15, 12, 8,
  ];

  return (
    <>
      <section className="w-full py-16 md:py-24 bg-[var(--bg)] relative overflow-hidden">
        {/* 1. Faint dot-grid texture (ink at 5%, 24px spacing) masked to top-left corner only */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(51, 36, 25, 0.05) 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 0% 0%, black 25%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 0% 0%, black 25%, transparent 75%)",
          }}
        />

        {/* 2. Very soft accent radial glow (accent at 12%) behind the large 24/7 Call & Chat Support tile */}
        <div
          aria-hidden="true"
          className="absolute -top-12 -left-12 w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full pointer-events-none select-none z-0 blur-[80px] sm:blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.12) 0%, rgba(185, 138, 62, 0.03) 55%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Header: mono "02 / OPERATIONS", H2, subline */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] mb-3">
              <span className="text-[var(--accent)] font-bold">02</span>
              <span>/ OPERATIONS</span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)] mb-2">
              Comprehensive Operational Support
            </h2>
            <p className="text-[16px] md:text-[17px] text-[var(--ink-80)] max-w-[560px] leading-[1.6] font-sans">
              Turnkey operational capabilities engineered to integrate smoothly with your existing stack.
            </p>
          </div>

          {/* 12-Column Bento Grid: 20px gap, rows of 240px */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-auto lg:auto-rows-[240px]">
            {/* TILE 1: 24/7 Call & Chat Support (LARGE: span 6 cols, 2 rows) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-6 lg:row-span-2 bg-[rgba(248,241,229,0.85)] backdrop-blur-sm border border-[var(--ink-12)] rounded-[16px] p-6 lg:p-[28px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] relative overflow-hidden min-h-[380px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] block mb-2">
                  01
                </span>
                <h3 className="text-[24px] sm:text-[26px] font-serif font-medium text-[var(--ink)] leading-snug mb-2">
                  24/7 Call &amp; Chat Support
                </h3>
                <p className="text-[14px] text-[var(--ink-80)] leading-[1.6] max-w-md font-sans mb-6">
                  Around-the-clock inbound call handling, live chat triage, and enquiry queue management in your company name.
                </p>

                {/* Mini illustration: chat/call UI with 3 message bubbles + 24-bar waveform */}
                <div
                  aria-hidden="true"
                  className="space-y-2.5 my-2 w-full max-w-sm select-none"
                >
                  <div className="rounded-[10px] rounded-bl-[2px] bg-[var(--ink-6)] border border-[var(--ink-12)] px-3 py-2 text-[14px] font-sans text-[var(--ink-80)] max-w-[280px]">
                    Incoming enquiry: Emergency HVAC dispatch requested.
                  </div>
                  <div className="rounded-[10px] rounded-br-[2px] bg-[var(--accent)] text-[var(--ink)] px-3 py-2 text-[14px] font-sans font-medium max-w-[260px] ml-auto">
                    Agent connected live. Work order created.
                  </div>
                  <div className="rounded-[10px] rounded-bl-[2px] bg-[var(--ink-6)] border border-[var(--ink-12)] px-3 py-2 text-[14px] font-sans text-[var(--ink-80)] max-w-[240px]">
                    Ticket #OP-941 confirmed in schedule.
                  </div>

                  {/* Audio waveform: 24 vertical bars */}
                  <div className="flex items-center gap-[3px] h-9 px-3 py-1 rounded-[8px] bg-[var(--ink-6)] border border-[var(--ink-12)] mt-3">
                    <span className="font-mono text-[14px] text-[var(--ink-65)] mr-2 shrink-0">
                      LIVE AUDIO
                    </span>
                    <div className="flex items-center gap-[3px] flex-1">
                      {WAVE_BARS.map((height, i) => (
                        <span
                          key={i}
                          className="w-[3px] rounded-full bg-[var(--ink-30)]"
                          style={{
                            height: `${height}px`,
                            animation: `waveBar 1.2s ease-in-out infinite alternate ${
                              (i * 0.05).toFixed(2)
                            }s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TILE 2: Intelligent Scheduling & Dispatch (span 3 cols, 1 row) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-1 bg-[rgba(248,241,229,0.85)] backdrop-blur-sm border border-[var(--ink-12)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] block mb-1">
                  02
                </span>
                <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug mb-1">
                  Intelligent Scheduling
                </h3>
                <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                  Real-time calendar slot coordination and field dispatch.
                </p>

                {/* Mini illustration: 7x3 calendar grid of small squares with 3 highlighted in accent */}
                <div
                  aria-hidden="true"
                  className="grid grid-cols-7 gap-1.5 w-fit my-1 select-none"
                >
                  {Array.from({ length: 21 }).map((_, i) => {
                    const isAccent = i === 3 || i === 11 || i === 17;
                    return (
                      <span
                        key={i}
                        className={`w-3.5 h-3.5 rounded-[3px] border ${
                          isAccent
                            ? "bg-[var(--accent)] border-[var(--accent)] shadow-sm"
                            : "bg-[var(--ink-6)] border-[var(--ink-12)]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TILE 3: Claims & Revenue Operations (span 3 cols, 1 row) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-1 bg-[rgba(248,241,229,0.85)] backdrop-blur-sm border border-[var(--ink-12)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] block mb-1">
                  03
                </span>
                <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug mb-1">
                  Claims &amp; Revenue Ops
                </h3>
                <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                  End-to-end billing, clean claims, and denial resolution.
                </p>

                {/* Mini illustration: three status chips ("Submitted", "In review", "Paid") stacked */}
                <div
                  aria-hidden="true"
                  className="flex items-center gap-1.5 my-1 flex-wrap select-none"
                >
                  <span className="text-[14px] font-mono px-2 py-0.5 rounded-full bg-[var(--ink-6)] text-[var(--ink-70)] border border-[var(--ink-12)]">
                    Submitted
                  </span>
                  <span className="text-[14px] font-mono px-2 py-0.5 rounded-full bg-[var(--ink-6)] text-[var(--ink-70)] border border-[var(--ink-12)]">
                    In review
                  </span>
                  <span className="text-[14px] font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent)] text-[var(--ink)] font-bold border border-[var(--accent)] shadow-sm">
                    Paid
                  </span>
                </div>
              </div>
            </div>

            {/* TILE 4: Administrative Support (span 3 cols, 1 row) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-1 bg-[rgba(248,241,229,0.85)] backdrop-blur-sm border border-[var(--ink-12)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] block mb-1">
                  04
                </span>
                <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug mb-1">
                  Administrative Support
                </h3>
                <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                  Back-office assistance, data verification, and CRM hygiene.
                </p>

                {/* Mini illustration: 3 horizontal progress bars at different fills */}
                <div
                  aria-hidden="true"
                  className="space-y-1.5 my-1.5 w-full max-w-[170px] select-none"
                >
                  <div className="h-1.5 rounded-full bg-[var(--ink-6)] border border-[var(--ink-12)] overflow-hidden">
                    <div className="h-full bg-[var(--ink-30)] w-[85%]" />
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--ink-6)] border border-[var(--ink-12)] overflow-hidden">
                    <div className="h-full bg-[var(--ink-30)] w-[65%]" />
                  </div>
                  <div className="h-1.5 rounded-full bg-[var(--ink-6)] border border-[var(--ink-12)] overflow-hidden">
                    <div className="h-full bg-[var(--accent)] w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* TILE 5: Compliance & Process Admin (span 3 cols, 1 row) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-3 lg:row-span-1 bg-[rgba(248,241,229,0.85)] backdrop-blur-sm border border-[var(--ink-12)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] block mb-1">
                  05
                </span>
                <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug mb-1">
                  Compliance &amp; Process
                </h3>
                <p className="text-[14px] text-[var(--ink-80)] leading-[1.45] font-sans mb-2">
                  Structured workflow governance and audit-ready records.
                </p>

                {/* Mini illustration: checklist of 3 rows with check icons */}
                <div
                  aria-hidden="true"
                  className="space-y-1 mt-1.5 text-[13px] font-mono text-[var(--ink-80)] select-none"
                >
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" strokeWidth={3} />
                    <span>Script verified</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" strokeWidth={3} />
                    <span>Audit-ready logs</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" strokeWidth={3} />
                    {/* TODO: confirm certifications with client */}
                    <span>Regulatory audit prep</span>
                  </div>
                </div>
              </div>
            </div>

            {/* TILE 6: Lead Management & Follow-Up (span 4 cols, 1 row) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 bg-[rgba(248,241,229,0.85)] backdrop-blur-sm border border-[var(--ink-12)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] block mb-1">
                  06
                </span>
                <h3 className="text-[22px] font-serif font-medium text-[var(--ink)] leading-snug mb-1">
                  Lead Management
                </h3>
                <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                  Rapid qualification, booking, and proactive customer follow-through.
                </p>

                {/* Mini illustration: 4-step funnel of 4 horizontally stacked shrinking bars */}
                <div
                  aria-hidden="true"
                  className="flex flex-col items-center gap-1 my-1 w-full max-w-[150px] select-none"
                >
                  <div className="w-full h-1.5 rounded-[2px] bg-[var(--ink-25)]" />
                  <div className="w-[75%] h-1.5 rounded-[2px] bg-[var(--ink-35)]" />
                  <div className="w-[50%] h-1.5 rounded-[2px] bg-[var(--ink-50)]" />
                  <div className="w-[28%] h-1.5 rounded-[2px] bg-[var(--accent)]" />
                </div>
              </div>
            </div>

            {/* TILE 7: Dedicated Operational Pods (span 4 cols, 1 row, INK background with bg text) */}
            <div className="col-span-1 md:col-span-1 lg:col-span-4 lg:row-span-1 bg-[var(--ink)] text-[var(--bg)] border border-[var(--ink-15)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-bold text-[var(--accent)] block mb-1">
                  07
                </span>
                <h3 className="text-[22px] font-serif font-medium text-[var(--bg)] leading-snug mb-1">
                  Dedicated Operational Pods
                </h3>
                <p className="text-[14px] text-[var(--bg-70)] leading-[1.5] font-sans mb-3">
                  Full-time specialist teams trained on your workflows and brand voice.
                </p>

                {/* Mini illustration: row of 5 avatar circles (initial-less, line style) overlapping */}
                <div
                  aria-hidden="true"
                  className="-space-x-2 flex items-center my-1 select-none"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full border-2 border-[var(--ink)] bg-[var(--bg-12)] flex items-center justify-center text-[var(--bg-70)]"
                    >
                      <User className="w-3.5 h-3.5 stroke-[1.5]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TILE 8: CTA Tile "Not sure what you need?" (span 4 cols, 1 row, ACCENT background, ink text, button ink bg) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1 bg-[var(--accent)] text-[var(--ink)] border border-[var(--accent)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-bold text-[var(--ink)] block mb-1">
                  08 / CUSTOM POD
                </span>
                <h3 className="text-[22px] font-serif font-medium text-[var(--ink)] leading-snug mb-1">
                  Not sure what you need?
                </h3>
                <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans">
                  Talk to our solutions team to analyze your workflow requirements and size a custom operational pod.
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="h-[40px] px-6 rounded-[8px] bg-[var(--ink)] text-[var(--bg)] font-semibold text-[14px] hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg)] focus-visible:ring-offset-2"
                >
                  <span>Talk to our team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wavebar animation style */}
      <style jsx>{`
        @keyframes waveBar {
          from {
            transform: scaleY(0.5);
          }
          to {
            transform: scaleY(1.2);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          span[style*="waveBar"] {
            animation: none !important;
          }
        }
      `}</style>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
