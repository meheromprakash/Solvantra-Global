"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Target,
  Users2,
  BarChart3,
  Clock4,
  ShieldCheck,
  Award,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function WhySolvantraPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 6 Key Differentiators with claims neutralized per Step 0
  const differentiators = [
    {
      id: "diff-01",
      number: "01",
      icon: Target,
      // TODO: confirm with client (renamed from "99.4% SLA Precision" to remove unverified percentage)
      title: "SLA-Driven Governance",
      // TODO: confirm with client (reworded description with no numbers/percentages)
      description:
        "Rigorous metric governance and live dashboards keep deadlines, response times and quality scores on track.",
    },
    {
      id: "diff-02",
      number: "02",
      icon: Users2,
      title: "Cognitive & Domain Vetted Talent",
      // TODO: confirm with client (reworded from "Top 2% candidate selection rate" to remove percentage claim)
      description:
        "Rigorous cognitive, language and domain-specific assessments before anyone joins your team.",
    },
    {
      id: "diff-03",
      number: "03",
      icon: BarChart3,
      title: "Transparent Quality Auditing",
      description:
        "Dedicated Quality Assurance leads audit a random sample of all interactions weekly, publishing scorecard performance directly to you.",
    },
    {
      id: "diff-04",
      number: "04",
      icon: Clock4,
      title: "Follow-The-Sun 24/7 Pods",
      description:
        "Distributed global operational centers provide true continuous coverage without operational drop-offs during shift changes.",
    },
    {
      id: "diff-05",
      number: "05",
      icon: ShieldCheck,
      title: "Institutional Security Standards",
      // TODO: confirm with client (reworded to remove specific unverified certifications SOC-2, HIPAA, ISO 27001)
      description:
        "Strong data encryption, clean-desk environments and strict NDA enforcement across all teams.",
    },
    {
      id: "diff-06",
      number: "06",
      icon: Award,
      title: "Zero One-Size-Fits-All Models",
      description:
        "Every pod is custom-tailored to your SOPs, tech stack, communication tone, and business objectives.",
    },
  ];

  // Comparison Rows with claims neutralized per Step 0
  const comparisonRows = [
    {
      dimension: "Talent Selection",
      traditional: "Generic pooled resume sourcing",
      // TODO: confirm with client (replaced "Top 2% Cognitive & Domain Tested Pods" with "Cognitive & Domain-Tested Teams")
      solvantra: "Cognitive & Domain-Tested Teams",
    },
    {
      dimension: "Process Governance",
      traditional: "Loose checklist guidelines",
      solvantra: "Institutional SOP Auditing & Version Control",
    },
    {
      dimension: "SLA Transparency",
      traditional: "Monthly static PDF reports",
      // TODO: confirm with client (replaced "Real-Time Operational SLA Telemetry" with "Live SLA Dashboards")
      solvantra: "Live SLA Dashboards",
    },
    {
      dimension: "Tech & AI Integration",
      traditional: "Manual repetitive data typing",
      solvantra: "AI-Enabled Workflows & CRM API Parity",
    },
    {
      dimension: "Security & Compliance",
      traditional: "Basic password protection",
      // TODO: confirm with client (replaced "SOC-2, HIPAA, ISO 27001 Clean-Desk Enclosure" with "Encryption, NDAs and Clean-Desk Policy")
      solvantra: "Encryption, NDAs and Clean-Desk Policy",
    },
  ];

  const scrollToDifferentiator = (id: string) => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Helper function to calculate ruled window-pane grid hairlines (outer border on top/bottom only)
  const getRuledGridBorderClasses = (i: number) => {
    // Mobile (1 col): horizontal hairline on all except the last item
    const mobileBorder = i < 5 ? "border-b border-[rgba(51,36,25,0.15)]" : "border-b-0";

    // Tablet (2 cols: 0,1 / 2,3 / 4,5):
    // right hairline on even indices (0, 2, 4), none on odd (1, 3, 5)
    const mdRight = i % 2 === 0 ? "md:border-r md:border-[rgba(51,36,25,0.15)]" : "md:border-r-0";
    // bottom hairline on first 4 items (0, 1, 2, 3), none on last row (4, 5)
    const mdBottom = i < 4 ? "md:border-b md:border-[rgba(51,36,25,0.15)]" : "md:border-b-0";

    // Desktop (3 cols: 0,1,2 / 3,4,5):
    // right hairline on columns 0 and 1 (indices 0, 1, 3, 4), none on column 2 (indices 2, 5)
    const lgRight = i % 3 !== 2 ? "lg:border-r lg:border-[rgba(51,36,25,0.15)]" : "lg:border-r-0";
    // bottom hairline on top row (0, 1, 2), none on bottom row (3, 4, 5)
    const lgBottom = i < 3 ? "lg:border-b lg:border-[rgba(51,36,25,0.15)]" : "lg:border-b-0";

    return `${mobileBorder} ${mdRight} ${mdBottom} ${lgRight} ${lgBottom}`;
  };

  return (
    <div className="flex flex-col w-full bg-[var(--bg)] text-[var(--ink)]">
      {/* =========================================================================
          1. HERO (Layout 7/5, No Stock Photo, Interactive Differentiator Index)
         ========================================================================= */}
      <section className="w-full pt-32 pb-20 md:pt-40 md:pb-28 bg-[var(--bg)] relative overflow-hidden">
        {/* Fine grid (ink at 5%, 48px) fading to edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(51, 36, 25, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(51, 36, 25, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Soft accent radial glow (accent at 26%, ~800px) behind the card on the right */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] lg:w-[850px] h-[700px] lg:h-[850px] rounded-full pointer-events-none select-none z-0 blur-[100px] lg:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.26) 0%, rgba(185, 138, 62, 0.06) 50%, transparent 70%)",
          }}
        />

        {/* 600px ring (1px accent at 30%) partly off the right edge */}
        <div
          aria-hidden="true"
          className="absolute -right-[180px] lg:-right-[220px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(185,138,62,0.30)] pointer-events-none select-none z-0"
        />

        {/* 2px accent hairline at the bottom fading left to right */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(185, 138, 62, 0.65) 0%, rgba(185, 138, 62, 0.20) 60%, transparent 100%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Mono Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-3">
                <ol className="flex items-center gap-2 font-mono text-[14px] text-[var(--ink-65)]">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--ink)] font-semibold" aria-current="page">
                    Why Solvantra
                  </li>
                </ol>
              </nav>

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                  THE SOLVANTRA ADVANTAGE
                </span>
              </div>

              {/* H1: clamp(44px, 5.8vw, 80px) with italic accent ONLY on "An Extension of Your Business." */}
              <h1 className="text-[clamp(44px,5.8vw,80px)] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)] mb-6">
                More Than Outsourcing.{" "}
                <span className="italic text-[var(--accent)] font-normal block sm:inline">
                  An Extension of Your Business.
                </span>
              </h1>

              {/* Existing Subline */}
              <p className="text-[17px] sm:text-[18px] text-[var(--ink-80)] leading-[1.65] max-w-[560px] font-sans mb-8">
                We combine people, processes and technology to deliver reliable, scalable and
                future-ready operational support for global organizations.
              </p>

              {/* Two Action Buttons (no arrow glyph on primary, standard styling) */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-solvantra-primary h-[48px] px-7 text-[15px] font-semibold cursor-pointer"
                >
                  Book a Consultation
                </button>
                <Link
                  href="/services"
                  className="btn-solvantra-secondary h-[48px] px-6 text-[15px] font-semibold cursor-pointer"
                >
                  View Services
                </Link>
              </div>
            </div>

            {/* RIGHT Column: Interactive Differentiator Index Card (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[var(--bg)] border border-[rgba(51,36,25,0.15)] rounded-[16px] shadow-[0_16px_40px_rgba(51,36,25,0.08)] p-6 sm:p-7 relative backdrop-blur-sm">
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold mb-4 block">
                  WHY SOLVANTRA
                </span>

                {/* 6 Numbered Rows */}
                <div className="flex flex-col space-y-1.5 font-sans">
                  {differentiators.map((diff) => (
                    <button
                      key={diff.id}
                      type="button"
                      onClick={() => scrollToDifferentiator(diff.id)}
                      className="group w-full text-left rounded-lg p-3 sm:py-3.5 sm:px-4 flex items-center justify-between transition-colors duration-200 hover:bg-[var(--ink)] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <div className="flex items-center gap-3.5 min-w-0 pr-2">
                        <span className="font-mono text-[14px] text-[var(--ink-65)] group-hover:text-[var(--bg-75)] transition-colors duration-200 shrink-0 font-semibold w-6">
                          {diff.number}
                        </span>
                        <span className="font-serif text-[17px] sm:text-[18px] font-medium text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors duration-200 truncate">
                          {diff.title}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[rgba(51,36,25,0.40)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-200 shrink-0" />
                    </button>
                  ))}
                </div>

                {/* Card Footer Mono Line */}
                <div className="pt-4 mt-3 border-t border-[rgba(51,36,25,0.12)] flex items-center justify-between">
                  <span className="font-mono text-[14px] text-[var(--ink-65)] font-medium">
                    6 reasons · 1 comparison
                  </span>
                  <span className="font-mono text-[14px] text-[var(--ink-65)]">
                    ↓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. THE 6 DIFFERENTIATORS (Ruled Window-Pane Grid, No Cards, No Shadows)
         ========================================================================= */}
      <section className="w-full bg-[var(--bg)] py-20 md:py-28 relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                01 / WHY US
              </span>
            </div>
            {/* TODO: confirm with client (H2 placeholder per brief) */}
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-serif font-medium leading-[1.08] text-[var(--ink)] mb-4">
              Built to feel like part of your team.
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--ink-80)] leading-[1.65] font-sans">
              How Solvantra’s operational model is structured to deliver consistency, security,
              and measurable outcomes across every client engagement.
            </p>
          </div>

          {/* Ruled Grid: 3 columns x 2 rows, NO bordered cards, outer border top/bottom only */}
          <div className="border-t border-b border-[rgba(51,36,25,0.15)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((diff, index) => {
                const IconComp = diff.icon;
                const borderClasses = getRuledGridBorderClasses(index);

                return (
                  <div
                    key={diff.id}
                    id={diff.id}
                    className={`scroll-mt-28 p-8 md:p-10 min-h-[280px] flex flex-col justify-between group transition-colors duration-200 hover:bg-[var(--ink)] ${borderClasses}`}
                  >
                    <div>
                      {/* Top Row: Huge 64px Mono Number + Accent Icon in Rounded Square */}
                      <div className="flex items-start justify-between mb-6">
                        <span className="text-[64px] font-mono font-light leading-none text-[rgba(51,36,25,0.18)] group-hover:text-[var(--accent)] transition-colors duration-200 select-none">
                          {diff.number}
                        </span>
                        <div className="w-12 h-12 rounded-[8px] bg-[rgba(185,138,62,0.14)] text-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-[var(--ink)] transition-colors duration-200 shrink-0">
                          <IconComp className="w-6 h-6 stroke-[1.75]" />
                        </div>
                      </div>

                      {/* 26px Serif Title */}
                      <h3 className="text-[26px] font-serif font-medium leading-[1.18] text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors duration-200 mb-3">
                        {diff.title}
                      </h3>

                      {/* Neutralized 16px Description */}
                      <p className="text-[16px] text-[rgba(51,36,25,0.80)] leading-[1.65] font-sans group-hover:text-[rgba(248,241,229,0.85)] transition-colors duration-200">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. COMPARISON (Dark Full-Bleed Section, Lifted Solvantra Card)
         ========================================================================= */}
      <section className="w-full bg-[var(--ink)] text-[var(--bg)] py-20 md:py-28 relative overflow-hidden">
        {/* Fine grid (bg at 5%, 48px) fading to edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(248, 241, 229, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(248, 241, 229, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Accent glow (accent at 16%) top left */}
        <div
          aria-hidden="true"
          className="absolute -left-[160px] -top-[120px] w-[650px] h-[650px] rounded-full pointer-events-none select-none z-0 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.16) 0%, rgba(185, 138, 62, 0.04) 50%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] font-semibold">
                02 / COMPARISON
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-serif font-medium leading-[1.08] text-[var(--bg)]">
              Solvantra vs. Traditional Outsourcing
            </h2>
          </div>

          {/* Desktop Styled 3-Column Comparison (12-Col Grid) */}
          <div className="hidden md:grid grid-cols-12 gap-6 items-stretch">
            {/* Left 7 Columns (Dimension Labels: 3 cols, Traditional BPO: 4 cols) */}
            <div className="col-span-7 flex flex-col justify-between">
              {/* Header Row */}
              <div className="grid grid-cols-7 gap-6 pb-4 border-b border-[rgba(248,241,229,0.15)] font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] font-semibold">
                <div className="col-span-3">Dimension</div>
                <div className="col-span-4">Traditional Outsourcing BPO</div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-7 gap-6 py-6 border-b border-[rgba(248,241,229,0.15)] items-center min-h-[96px]"
                >
                  <div className="col-span-3 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] font-semibold">
                    {row.dimension}
                  </div>
                  <div className="col-span-4 text-[15px] text-[var(--bg-55)] font-sans flex items-center gap-2.5">
                    <X className="w-4 h-4 text-[rgba(248,241,229,0.35)] shrink-0" />
                    <span>{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 5 Columns: Solvantra Global Model Highlighted Lifted Card */}
            <div className="col-span-5 bg-[var(--bg)] text-[var(--ink)] rounded-[16px] p-6 lg:p-8 shadow-[0_24px_60px_rgba(51,36,25,0.40)] border border-[rgba(185,138,62,0.30)] flex flex-col justify-between -my-4 relative z-10">
              {/* Card Header with Accent Pill */}
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(51,36,25,0.12)]">
                <span className="font-serif text-[19px] lg:text-[20px] font-semibold text-[var(--ink)]">
                  Solvantra Global Model
                </span>
                <span className="bg-[var(--accent)] text-[var(--ink)] font-mono text-[14px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  SOLVANTRA
                </span>
              </div>

              {/* Solvantra Rows (aligned in height with left columns) */}
              {comparisonRows.map((row, index) => (
                <div
                  key={index}
                  className="py-6 border-b border-[rgba(51,36,25,0.12)] last:border-b-0 min-h-[96px] flex items-center gap-3 text-[15px] font-sans font-medium text-[var(--ink)]"
                >
                  <div className="w-6 h-6 rounded-full bg-[rgba(185,138,62,0.15)] text-[var(--accent)] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-[var(--accent)] stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{row.solvantra}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Stacked Comparison (Under 768px) */}
          <div className="md:hidden flex flex-col space-y-6">
            {comparisonRows.map((row, index) => (
              <div
                key={index}
                className="border-b border-[rgba(248,241,229,0.15)] pb-6 last:border-b-0"
              >
                <div className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-75)] font-semibold mb-3">
                  {row.dimension}
                </div>

                {/* Traditional Line (Muted) */}
                <div className="bg-[rgba(248,241,229,0.06)] border border-[rgba(248,241,229,0.12)] rounded-lg p-3.5 mb-2.5 flex items-start gap-2.5 text-[14px] text-[var(--bg-55)] font-sans">
                  <X className="w-4 h-4 text-[rgba(248,241,229,0.35)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-[var(--bg-55)] mr-1">
                      Traditional BPO:
                    </span>
                    <span>{row.traditional}</span>
                  </div>
                </div>

                {/* Solvantra Line (Lifted Light Card) */}
                <div className="bg-[var(--bg)] text-[var(--ink)] rounded-xl p-4 shadow-[0_12px_32px_rgba(51,36,25,0.30)] border border-[rgba(185,138,62,0.30)] flex items-start gap-3 text-[14px] font-sans font-medium">
                  <div className="w-5 h-5 rounded-full bg-[rgba(185,138,62,0.15)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[var(--accent)] stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="font-bold text-[var(--ink)] mr-1">
                      Solvantra:
                    </span>
                    <span className="text-[var(--ink)]">{row.solvantra}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          {/* TODO: confirm with client (muted footnote for comparative illustration) */}
          <div className="mt-10 pt-4 border-t border-[rgba(248,241,229,0.10)]">
            <p className="font-mono text-[14px] text-[var(--bg-55)] text-center sm:text-left">
              Comparison reflects typical outsourcing models. Illustrative.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FINAL CTA (Shared Component, Full-Bleed Accent, Interactive Form)
         ========================================================================= */}
      <FinalCTA />

      {/* Consultation Modal Triggered from Hero */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
