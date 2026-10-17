"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Hero from "@/components/sections/Hero";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import ServicesGrid from "@/components/sections/ServicesGrid";
import GlobalOperations from "@/components/sections/GlobalOperations";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import ConsultationModal from "@/components/ConsultationModal";

interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    title: "Discovery",
    // TODO: confirm with client
    description:
      "Operational audit of your systems, tools, and workflows.",
  },
  {
    num: "02",
    title: "Train on your voice",
    // TODO: confirm with client
    description:
      "Specialists master your brand tone, workflows, and triage rules.",
  },
  {
    num: "03",
    title: "Launch",
    // TODO: confirm with client
    description:
      "Live deployment with supervisor shadowing and SLA governance.",
  },
  {
    num: "04",
    title: "Optimise",
    // TODO: confirm with client
    description:
      "Weekly QA scorecards, process reviews, and proactive scaling.",
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);

  // Scroll into view animation for Process Timeline
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsProcessVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsProcessVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col w-full bg-[var(--bg)]">
      {/* 1. Hero: Two-column editorial with follow-the-sun graphic and 88vh height */}
      <Hero />

      {/* 2. Sectors: Interactive tabbed showcase with SVG workflow diagram */}
      <IndustriesGrid />

      {/* 3. Operations: 12-column Bento Grid */}
      <ServicesGrid />

      {/* 4. NEW How It Works Section: Between Operations and About */}
      <section
        ref={processRef}
        className="w-full py-16 md:py-24 border-t border-b border-[rgba(185,138,62,0.25)] relative overflow-hidden"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent) 10%, var(--bg))",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Header: mono "03 / PROCESS", H2 "From first call to full coverage." (placeholder) */}
          <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)]">
                <span className="text-[var(--accent)] font-bold">03</span>
                <span>/ PROCESS</span>
              </div>
            </div>
            <div className="lg:col-span-9">
              {/* TODO: confirm with client */}
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)]">
                From first call to full coverage.
              </h2>
            </div>
          </div>

          {/* Desktop Timeline: horizontal 4-step timeline */}
          <div className="hidden md:block relative">
            {/* Timeline line accent at 60% */}
            <div className="absolute top-[6px] left-0 right-0 h-px bg-[rgba(185,138,62,0.60)]" />

            {/* Accent fill line: scaleX animation left to right as user scrolls into view */}
            <div
              className="absolute top-[6px] left-0 right-0 h-px bg-[var(--accent)] origin-left transition-transform duration-1000 ease-out"
              style={{
                transform: isProcessVisible ? "scaleX(1)" : "scaleX(0)",
              }}
            />

            {/* 4 steps grid */}
            <div className="grid grid-cols-4 gap-8 lg:gap-10 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.num}
                  className="flex flex-col items-start relative transition-all duration-700 ease-out"
                  style={{
                    opacity: isProcessVisible ? 1 : 0,
                    transform: isProcessVisible
                      ? "translateY(0)"
                      : "translateY(16px)",
                    transitionDelay: isProcessVisible
                      ? `${150 + idx * 220}ms`
                      : "0ms",
                  }}
                >
                  {/* Accent dot marker (12px, centered at Y=6px, with 4px background ring) */}
                  <span
                    className="w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[color-mix(in_srgb,var(--accent)_10%,var(--bg))] shrink-0 mb-6 transition-transform duration-500 ease-out"
                    style={{
                      transform: isProcessVisible ? "scale(1)" : "scale(0.6)",
                      transitionDelay: isProcessVisible
                        ? `${100 + idx * 220}ms`
                        : "0ms",
                    }}
                  />

                  {/* Huge Mono Number (64px, ink at 20%) */}
                  <div className="font-mono text-[64px] font-bold text-[var(--ink-20)] leading-none mb-3 select-none tracking-tight">
                    {step.num}
                  </div>

                  {/* Serif Title */}
                  <h3 className="text-[22px] lg:text-[24px] font-serif font-medium text-[var(--ink)] mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.5] font-sans max-w-[260px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline: vertical timeline with line on the left */}
          <div className="md:hidden relative pl-8">
            {/* Timeline line accent at 60% vertical background track line */}
            <div className="absolute left-[5.5px] top-[6px] bottom-[28px] w-px bg-[rgba(185,138,62,0.60)]" />

            {/* Accent vertical fill line: scaleY animation from top to bottom */}
            <div
              className="absolute left-[5.5px] top-[6px] bottom-[28px] w-px bg-[var(--accent)] origin-top transition-transform duration-1000 ease-out"
              style={{
                transform: isProcessVisible ? "scaleY(1)" : "scaleY(0)",
              }}
            />

            <div className="space-y-10 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.num}
                  className="flex flex-col items-start relative transition-all duration-700 ease-out"
                  style={{
                    opacity: isProcessVisible ? 1 : 0,
                    transform: isProcessVisible
                      ? "translateY(0)"
                      : "translateY(14px)",
                    transitionDelay: isProcessVisible
                      ? `${150 + idx * 200}ms`
                      : "0ms",
                  }}
                >
                  {/* Accent dot marker on vertical line */}
                  <span
                    className="absolute -left-[32px] top-[6px] w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[color-mix(in_srgb,var(--accent)_10%,var(--bg))] shrink-0 transition-transform duration-500 ease-out"
                    style={{
                      transform: isProcessVisible ? "scale(1)" : "scale(0.6)",
                      transitionDelay: isProcessVisible
                        ? `${100 + idx * 200}ms`
                        : "0ms",
                    }}
                  />

                  {/* Huge Mono Number (64px, ink at 20%) */}
                  <div className="font-mono text-[56px] font-bold text-[var(--ink-20)] leading-none mb-2 select-none tracking-tight">
                    {step.num}
                  </div>

                  {/* Serif Title */}
                  <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.5] font-sans max-w-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bordered Full-Width Strip Below Steps */}
          <div data-reveal className="w-full mt-14 lg:mt-16 p-5 sm:p-6 rounded-[12px] border border-[rgba(185,138,62,0.25)] bg-[rgba(248,241,229,0.70)] backdrop-blur-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_1px_2px_var(--ink-6)]">
            {/* TODO: confirm with client */}
            <p className="text-[15px] sm:text-[16px] text-[var(--ink-80)] font-sans">
              Every partnership begins with a comprehensive operational assessment and dedicated onboarding plan.
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="link-solvantra group text-[15px] font-semibold shrink-0 cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Book a Consultation</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. About: Statement H2 across 9 columns with 'Partner' highlight, two columns below */}
      <section className="w-full py-16 md:py-24 bg-[var(--bg)] border-b border-[var(--ink-15)] relative overflow-hidden">
        {/* Soft radial accent glow (accent at 14%) behind the three value rows on the right */}
        <div
          aria-hidden="true"
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full pointer-events-none select-none z-0 blur-[90px] sm:blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.14) 0%, rgba(185, 138, 62, 0.04) 50%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Header: mono "04 / ABOUT" in cols 1-3, huge statement H2 in cols 4-12 */}
          <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)]">
                <span className="text-[var(--accent)] font-bold">04</span>
                <span>/ ABOUT</span>
              </div>
            </div>
            <div className="lg:col-span-9">
              {/* Huge statement H2 at clamp(40px, 5.5vw, 76px) */}
              <h2 className="text-[clamp(40px,5.5vw,76px)] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)]">
                More Than a Service Provider. A{" "}
                <span className="relative inline-block whitespace-nowrap">
                  <span className="relative z-10">Partner</span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 bottom-[6px] sm:bottom-[8px] lg:bottom-[10px] w-full h-[6px] bg-[var(--accent)] z-0 rounded-[1px]"
                  />
                </span>{" "}
                in Your Growth.
              </h2>
            </div>
          </div>

          {/* Below H2: Two Columns */}
          <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* LEFT Column: two paragraphs (17px, max 520px) and link */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="max-w-[520px] space-y-5 mb-8">
                <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans">
                  At Solvantra Global, we believe great businesses deserve more than outsourced support. They deserve a team that understands their goals, values their customers, and takes ownership of the work that moves them forward.
                </p>
                <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans">
                  We bring together skilled people, streamlined processes, and intelligent technology to help businesses simplify operations, deliver exceptional customer experiences, and unlock new opportunities for growth.
                </p>
              </div>

              <div>
                <Link
                  href="/about"
                  className="link-solvantra group text-[15px] font-semibold inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                >
                  <span>Discover Our Story &amp; Values</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT Column: three stacked numbered value rows with decorative oversized monogram */}
            <div className="lg:col-span-6 relative">
              {/* Decorative oversized outlined "S" monogram behind right column in ink at 7% opacity */}
              <svg
                aria-hidden="true"
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] sm:w-[360px] h-[400px] pointer-events-none select-none z-0 text-[var(--ink)] opacity-[0.07] overflow-visible"
                viewBox="0 0 200 240"
                fill="none"
              >
                <text
                  x="50%"
                  y="65%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="font-serif font-light text-[240px]"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                >
                  S
                </text>
              </svg>

              {/* 3 stacked value rows with hairline separators, hover fills the row ink */}
              <div className="relative z-10 border-t border-[var(--ink-15)]">
                {/* 01 Skilled People */}
                <div className="group p-5 sm:p-6 border-b border-[var(--ink-15)] rounded-[8px] transition-colors duration-250 hover:bg-[var(--ink)] cursor-default">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-[14px] font-bold text-[var(--accent)] tracking-wider">
                      01
                    </span>
                    <h3 className="text-[22px] font-serif font-medium text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--bg)]">
                      Skilled People
                    </h3>
                  </div>
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.6] pl-7 transition-colors duration-200 group-hover:text-[var(--bg-75)]">
                    Full-time operational specialists rigorously trained on your workflows, tools, and brand voice.
                  </p>
                </div>

                {/* 02 Streamlined Processes */}
                <div className="group p-5 sm:p-6 border-b border-[var(--ink-15)] rounded-[8px] transition-colors duration-250 hover:bg-[var(--ink)] cursor-default">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-[14px] font-bold text-[var(--accent)] tracking-wider">
                      02
                    </span>
                    <h3 className="text-[22px] font-serif font-medium text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--bg)]">
                      Streamlined Processes
                    </h3>
                  </div>
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.6] pl-7 transition-colors duration-200 group-hover:text-[var(--bg-75)]">
                    Proven SOPs, standardized handoffs, escalation hierarchies, and audit-ready governance.
                  </p>
                </div>

                {/* 03 Intelligent Technology */}
                <div className="group p-5 sm:p-6 border-b border-[var(--ink-15)] rounded-[8px] transition-colors duration-250 hover:bg-[var(--ink)] cursor-default">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-[14px] font-bold text-[var(--accent)] tracking-wider">
                      03
                    </span>
                    <h3 className="text-[22px] font-serif font-medium text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--bg)]">
                      Intelligent Technology
                    </h3>
                  </div>
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.6] pl-7 transition-colors duration-200 group-hover:text-[var(--bg-75)]">
                    Seamless CRM and software synchronization ensuring zero duplicate entry and total transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Stats Band: Flat Ink, 120px Serif Numbers, Vertical Hairlines */}
      <GlobalOperations />

      {/* 7. FAQ Section: 05 / FAQ, Questions, answered. with 6-item accordion */}
      <FAQSection />

      {/* 8. Final CTA: Full-width accent background block (padding 112px) with form card */}
      <FinalCTA />

      {/* Shared Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
