"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check, User, ChevronDown } from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

export default function ServicesGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(true);

  // First row ("24/7 Call & Chat Support") open by default on mobile
  const [openRow, setOpenRow] = useState<string | null>("01");

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleRow = (id: string) => {
    setOpenRow((prev) => (prev === id ? null : id));
  };

  // 24 waveform bar heights for Tile 1 audio animation
  const WAVE_BARS = [
    8, 14, 20, 12, 26, 18, 22, 10, 16, 28, 20, 14, 24, 18, 12, 22, 16, 26, 14,
    18, 10, 15, 12, 8,
  ];

  return (
    <>
      <section ref={sectionRef} className="w-full py-14 md:py-24 bg-[var(--bg)] relative overflow-hidden">
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
          <div data-reveal className="mb-8 md:mb-12 lg:mb-16">
            <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] mb-2.5">
              <span className="text-[var(--accent)] font-bold">02</span>
              <span>/ OPERATIONS</span>
            </div>
            <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-serif font-medium leading-[1.08] tracking-[-0.03em] text-[var(--ink)] mb-2">
              Comprehensive Operational Support
            </h2>
            <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[var(--ink-80)] max-w-[560px] leading-[1.5] font-sans line-clamp-2 md:line-clamp-none">
              Turnkey operational capabilities engineered to integrate smoothly with your existing stack.
            </p>
          </div>

          {/* =========================================================================
              MOBILE COMPACT ACCORDION LIST (Under 768px: block md:hidden)
              8 compact rows with 1px hairlines, min 56px tap target, smooth height animation
             ========================================================================= */}
          <div data-reveal className="block md:hidden w-full">
            <div className="border-t border-[var(--ink-15)]">
              {/* ROW 01: 24/7 Call & Chat Support */}
              <div className="border-b border-[var(--ink-15)]">
                <button
                  type="button"
                  id="accordion-btn-01"
                  aria-expanded={openRow === "01"}
                  aria-controls="accordion-panel-01"
                  onClick={() => toggleRow("01")}
                  className="w-full min-h-[56px] py-4 px-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] shrink-0">
                      01
                    </span>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug">
                      24/7 Call &amp; Chat Support
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-65)] shrink-0 transition-transform duration-200 ${
                      openRow === "01" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="accordion-panel-01"
                  role="region"
                  aria-labelledby="accordion-btn-01"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openRow === "01" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1 pb-5 px-3">
                      <p className="text-[14px] text-[var(--ink-80)] leading-[1.6] font-sans mb-3">
                        Around-the-clock inbound call handling, live chat triage, and enquiry queue management in your company name.
                      </p>

                      {/* Scaled-down illustration: 2 bubbles + shortened waveform (max-height 72px) */}
                      <div aria-hidden="true" className="space-y-2 select-none max-h-[72px] overflow-hidden my-2">
                        <div className="rounded-[8px] rounded-bl-[2px] bg-[var(--ink-6)] border border-[var(--ink-12)] px-2.5 py-1 text-[14px] font-sans text-[var(--ink-80)] max-w-[280px] truncate">
                          Incoming enquiry: Emergency HVAC dispatch requested.
                        </div>
                        <div className="rounded-[8px] rounded-br-[2px] bg-[var(--accent)] text-[var(--ink)] px-2.5 py-1 text-[14px] font-sans font-medium max-w-[240px] ml-auto truncate">
                          Agent connected live. Work order created.
                        </div>
                        <div className="flex items-center gap-[3px] h-6 px-2.5 py-0.5 rounded-[6px] bg-[var(--ink-6)] border border-[var(--ink-12)]">
                          <span className="font-mono text-[14px] text-[var(--ink-65)] mr-2 shrink-0">
                            LIVE AUDIO
                          </span>
                          <div className="flex items-center gap-[3px] flex-1">
                            {WAVE_BARS.slice(0, 14).map((height, i) => (
                              <span
                                key={i}
                                className="w-[2.5px] rounded-full bg-[var(--ink-30)]"
                                style={{
                                  height: `${Math.round(height * 0.55)}px`,
                                  animation: `waveBar 1.2s ease-in-out infinite alternate ${(i * 0.05).toFixed(2)}s`,
                                  animationPlayState: isInView ? "running" : "paused",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[14px] font-sans font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 02: Intelligent Scheduling */}
              <div className="border-b border-[var(--ink-15)]">
                <button
                  type="button"
                  id="accordion-btn-02"
                  aria-expanded={openRow === "02"}
                  aria-controls="accordion-panel-02"
                  onClick={() => toggleRow("02")}
                  className="w-full min-h-[56px] py-4 px-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] shrink-0">
                      02
                    </span>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug">
                      Intelligent Scheduling
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-65)] shrink-0 transition-transform duration-200 ${
                      openRow === "02" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="accordion-panel-02"
                  role="region"
                  aria-labelledby="accordion-btn-02"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openRow === "02" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1 pb-5 px-3">
                      <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                        Real-time calendar slot coordination and field dispatch.
                      </p>

                      {/* Scaled-down calendar grid */}
                      <div aria-hidden="true" className="grid grid-cols-7 gap-1.5 w-fit my-2 select-none max-h-[72px]">
                        {Array.from({ length: 14 }).map((_, i) => {
                          const isAccent = i === 3 || i === 9 || i === 12;
                          return (
                            <span
                              key={i}
                              className={`w-3 h-3 rounded-[2px] border ${
                                isAccent
                                  ? "bg-[var(--accent)] border-[var(--accent)] shadow-sm"
                                  : "bg-[var(--ink-6)] border-[var(--ink-12)]"
                              }`}
                            />
                          );
                        })}
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[14px] font-sans font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 03: Claims & Revenue Ops */}
              <div className="border-b border-[var(--ink-15)]">
                <button
                  type="button"
                  id="accordion-btn-03"
                  aria-expanded={openRow === "03"}
                  aria-controls="accordion-panel-03"
                  onClick={() => toggleRow("03")}
                  className="w-full min-h-[56px] py-4 px-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] shrink-0">
                      03
                    </span>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug">
                      Claims &amp; Revenue Ops
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-65)] shrink-0 transition-transform duration-200 ${
                      openRow === "03" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="accordion-panel-03"
                  role="region"
                  aria-labelledby="accordion-btn-03"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openRow === "03" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1 pb-5 px-3">
                      <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                        End-to-end billing, clean claims, and denial resolution.
                      </p>

                      {/* Scaled-down status chips */}
                      <div aria-hidden="true" className="flex items-center gap-1.5 my-2 flex-wrap select-none max-h-[72px]">
                        <span className="text-[14px] font-mono px-2 py-0.5 rounded-full bg-[var(--ink-6)] text-[var(--ink-70)] border border-[var(--ink-12)]">
                          Submitted
                        </span>
                        <span className="text-[14px] font-mono px-2 py-0.5 rounded-full bg-[var(--ink-6)] text-[var(--ink-70)] border border-[var(--ink-12)]">
                          In review
                        </span>
                        <span className="text-[14px] font-mono px-2 py-0.5 rounded-full bg-[var(--accent)] text-[var(--ink)] font-bold border border-[var(--accent)] shadow-sm">
                          Paid
                        </span>
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[14px] font-sans font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 04: Administrative Support */}
              <div className="border-b border-[var(--ink-15)]">
                <button
                  type="button"
                  id="accordion-btn-04"
                  aria-expanded={openRow === "04"}
                  aria-controls="accordion-panel-04"
                  onClick={() => toggleRow("04")}
                  className="w-full min-h-[56px] py-4 px-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] shrink-0">
                      04
                    </span>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug">
                      Administrative Support
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-65)] shrink-0 transition-transform duration-200 ${
                      openRow === "04" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="accordion-panel-04"
                  role="region"
                  aria-labelledby="accordion-btn-04"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openRow === "04" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1 pb-5 px-3">
                      <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                        Back-office assistance, data verification, and CRM hygiene.
                      </p>

                      {/* Scaled-down progress bars */}
                      <div aria-hidden="true" className="space-y-1.5 my-2 w-full max-w-[160px] select-none max-h-[72px]">
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

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[14px] font-sans font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 05: Compliance & Process */}
              <div className="border-b border-[var(--ink-15)]">
                <button
                  type="button"
                  id="accordion-btn-05"
                  aria-expanded={openRow === "05"}
                  aria-controls="accordion-panel-05"
                  onClick={() => toggleRow("05")}
                  className="w-full min-h-[56px] py-4 px-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] shrink-0">
                      05
                    </span>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug">
                      Compliance &amp; Process
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-65)] shrink-0 transition-transform duration-200 ${
                      openRow === "05" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="accordion-panel-05"
                  role="region"
                  aria-labelledby="accordion-btn-05"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openRow === "05" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1 pb-5 px-3">
                      <p className="text-[14px] text-[var(--ink-80)] leading-[1.45] font-sans mb-3">
                        Structured workflow governance and audit-ready records.
                      </p>

                      {/* Scaled-down checklist */}
                      <div aria-hidden="true" className="space-y-1.5 my-2 text-[14px] font-mono text-[var(--ink-80)] select-none max-h-[72px]">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" strokeWidth={3} />
                          <span>Script verified</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" strokeWidth={3} />
                          <span>Audit-ready logs</span>
                        </div>
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[14px] font-sans font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 06: Lead Management */}
              <div className="border-b border-[var(--ink-15)]">
                <button
                  type="button"
                  id="accordion-btn-06"
                  aria-expanded={openRow === "06"}
                  aria-controls="accordion-panel-06"
                  onClick={() => toggleRow("06")}
                  className="w-full min-h-[56px] py-4 px-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-[14px] font-semibold text-[var(--ink-65)] shrink-0">
                      06
                    </span>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug">
                      Lead Management
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--ink-65)] shrink-0 transition-transform duration-200 ${
                      openRow === "06" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="accordion-panel-06"
                  role="region"
                  aria-labelledby="accordion-btn-06"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openRow === "06" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1 pb-5 px-3">
                      <p className="text-[14px] text-[var(--ink-80)] leading-[1.5] font-sans mb-3">
                        Rapid qualification, booking, and proactive customer follow-through.
                      </p>

                      {/* Scaled-down funnel bars with centered track */}
                      <div aria-hidden="true" className="flex flex-col items-center gap-1 my-2 w-full max-w-[140px] select-none max-h-[72px]">
                        <div className="w-full h-1.5 rounded-[2px] bg-[var(--ink-25)]" />
                        <div className="w-[75%] h-1.5 rounded-[2px] bg-[var(--ink-35)] mx-auto" />
                        <div className="w-[50%] h-1.5 rounded-[2px] bg-[var(--ink-50)] mx-auto" />
                        <div className="w-[28%] h-1.5 rounded-[2px] bg-[var(--accent)] mx-auto" />
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[14px] font-sans font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mt-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROW 07: Dedicated Operational Pods (Full-bleed row in INK bg with BG text) */}
              <div className="bg-[var(--ink)] text-[var(--bg)] border-b border-[var(--ink)]">
                <button
                  type="button"
                  id="accordion-btn-07"
                  aria-expanded={openRow === "07"}
                  aria-controls="accordion-panel-07"
                  onClick={() => toggleRow("07")}
                  className="w-full min-h-[56px] py-4 px-3 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-3 pr-2">
                    <span className="font-mono text-[14px] font-bold text-[var(--accent)] shrink-0">
                      07
                    </span>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--bg)] leading-snug">
                      Dedicated Operational Pods
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--bg)] shrink-0 transition-transform duration-200 ${
                      openRow === "07" ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id="accordion-panel-07"
                  role="region"
                  aria-labelledby="accordion-btn-07"
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    openRow === "07" ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pt-1 pb-5 px-3">
                      <p className="text-[14px] text-[var(--bg-70)] leading-[1.5] font-sans mb-3">
                        Full-time specialist teams trained on your workflows and brand voice.
                      </p>

                      {/* Scaled-down avatar cluster */}
                      <div aria-hidden="true" className="-space-x-1.5 flex items-center my-2 select-none max-h-[72px]">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full border-2 border-[var(--ink)] bg-[var(--bg-12)] flex items-center justify-center text-[var(--bg-70)]"
                          >
                            <User className="w-3 h-3 stroke-[1.5]" />
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[14px] font-sans font-semibold text-[var(--accent)] hover:underline transition-colors mt-2"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 08: Compact Accent CTA Block (padding 24px, 100% ink text, full-width button) */}
            <div className="bg-[var(--accent)] text-[var(--ink)] rounded-[12px] p-6 shadow-sm mt-4 border border-[var(--accent)]">
              <span className="font-mono text-[14px] font-bold text-[var(--ink)] block mb-1">
                08 / CUSTOM POD
              </span>
              <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] leading-snug mb-1.5">
                Not sure what you need?
              </h3>
              <p className="text-[15px] text-[var(--ink)] leading-[1.5] font-sans mb-4">
                Talk to our solutions team to analyze your workflow requirements and size a custom operational pod.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="h-[46px] w-full rounded-[8px] bg-[var(--ink)] text-[var(--bg)] font-semibold text-[14px] hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bg)] focus-visible:ring-offset-2"
              >
                <span>Talk to our team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* =========================================================================
              DESKTOP & TABLET BENTO GRID (768px and up: md:grid)
              Exact original 12-column bento layout preserved with 20px gap
             ========================================================================= */}
          <div data-reveal data-stagger-group className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-auto lg:auto-rows-[240px]">
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
                            animationPlayState: isInView ? "running" : "paused",
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
                  <div className="h-1.5 rounded-full bg-[var(--accent)] w-full" />
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
                  className="space-y-1 mt-1.5 text-[14px] font-mono text-[var(--ink-80)] select-none"
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

                {/* Mini illustration: 4-step funnel of 4 horizontally stacked shrinking bars (centered with its track) */}
                <div
                  aria-hidden="true"
                  className="flex flex-col items-center gap-1 my-1 w-full max-w-[150px] mx-auto select-none"
                >
                  <div className="w-full h-1.5 rounded-[2px] bg-[var(--ink-25)]" />
                  <div className="w-[75%] h-1.5 rounded-[2px] bg-[var(--ink-35)] mx-auto" />
                  <div className="w-[50%] h-1.5 rounded-[2px] bg-[var(--ink-50)] mx-auto" />
                  <div className="w-[28%] h-1.5 rounded-[2px] bg-[var(--accent)] mx-auto" />
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

            {/* TILE 8: CTA Tile "Not sure what you need?" (span 4 cols, 1 row, ACCENT background, 100% ink text, button ink bg) */}
            <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1 bg-[var(--accent)] text-[var(--ink)] border border-[var(--accent)] rounded-[16px] p-6 lg:p-[24px] flex flex-col justify-between shadow-[0_1px_2px_var(--ink-6)] min-h-[220px] lg:min-h-0">
              <div>
                <span className="font-mono text-[14px] font-bold text-[var(--ink)] block mb-1">
                  08 / CUSTOM POD
                </span>
                <h3 className="text-[22px] font-serif font-medium text-[var(--ink)] leading-snug mb-1">
                  Not sure what you need?
                </h3>
                <p className="text-[14px] text-[var(--ink)] leading-[1.5] font-sans">
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
          span[style*="waveBar"],
          div[style*="grid-template-rows"] {
            animation: none !important;
            transition: none !important;
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
