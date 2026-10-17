"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  Flag,
  ShieldCheck,
  Shield,
  Heart,
  Sparkles,
  Award,
  Users,
  GitBranch,
  Cpu,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeValueIndex, setActiveValueIndex] = useState<number | null>(null);

  const coreValues = [
    {
      num: "01",
      title: "Ownership",
      tagline: "We take responsibility, not just instructions.",
      description:
        "We approach every task with accountability, follow through on commitments, and work toward outcomes our clients can rely on.",
      icon: ShieldCheck,
    },
    {
      num: "02",
      title: "Integrity",
      tagline: "Trust is earned through every action.",
      description:
        "We believe in honest communication, responsible decisions, transparency, and doing what is right—even when no one is watching.",
      icon: Shield,
    },
    {
      num: "03",
      title: "People First",
      tagline: "Every business is built on human relationships.",
      description:
        "We value the people behind every process, from our clients and their customers to the teams working together to deliver results.",
      icon: Heart,
    },
    {
      num: "04",
      title: "Continuous Innovation",
      tagline: "Better ways of working create better possibilities.",
      description:
        "We embrace smarter workflows, practical automation, and emerging technologies to help our clients improve efficiency and adapt to change.",
      icon: Sparkles,
    },
    {
      num: "05",
      title: "Excellence in Execution",
      tagline: "Good intentions matter. Consistent delivery matters more.",
      description:
        "We strive for accuracy, responsiveness, and continuous improvement in every interaction, process, and solution we deliver.",
      icon: Award,
    },
  ];

  const whyChooseUs = [
    {
      title: "Solutions Built Around You",
      description: "We tailor our services to your workflows and priorities.",
    },
    {
      title: "People Who Take Ownership",
      description: "We communicate clearly, follow through, and treat your priorities with care.",
    },
    {
      title: "Technology with Purpose",
      description: "Practical technology that reduces repetitive work and supports better decisions.",
    },
    {
      title: "Flexible as You Grow",
      description: "Our approach adapts as you grow, from single functions to broader support.",
    },
    {
      title: "Built on Trust",
      description: "Transparent, dependable communication and long-term relationships.",
    },
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Understand",
      description:
        "We learn about your business, operational challenges, customer expectations, and goals before recommending a solution.",
    },
    {
      step: "02",
      title: "Strategise",
      description:
        "We identify the right combination of people, processes, and technology to address your requirements.",
    },
    {
      step: "03",
      title: "Implement",
      description:
        "We establish clear workflows, responsibilities, communication channels, and performance expectations.",
    },
    {
      step: "04",
      title: "Improve",
      description:
        "We review performance, identify opportunities, and continuously refine our approach as your business grows.",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-[var(--bg)] text-[var(--ink)]">
      {/* =========================================================================
          1. HERO (Layout 7/5, Signature Venn Diagram)
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

        {/* Soft accent radial glow (accent at 24%, ~800px) behind the diagram on the right */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] lg:w-[850px] h-[700px] lg:h-[850px] rounded-full pointer-events-none select-none z-0 blur-[100px] lg:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.24) 0%, rgba(185, 138, 62, 0.06) 50%, transparent 70%)",
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
                    About
                  </li>
                </ol>
              </nav>

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                  ABOUT SOLVANTRA GLOBAL
                </span>
              </div>

              {/* H1: clamp(48px, 6.5vw, 88px), with italic accent on "Solvantra Global." */}
              <h1 className="text-[44px] sm:text-[60px] lg:text-[76px] xl:text-[84px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)] mb-6">
                About{" "}
                <span className="italic text-[var(--accent)] font-normal block sm:inline">
                  Solvantra Global.
                </span>
              </h1>

              {/* Subline */}
              <p className="text-[17px] sm:text-[18px] text-[var(--ink-80)] leading-[1.65] max-w-[560px] font-sans mb-8">
                We bring people, processes, and technology together to help businesses
                operate smarter, serve better, and grow stronger.
              </p>

              {/* Two Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-solvantra-primary h-[48px] px-7 text-[15px] cursor-pointer"
                >
                  Book a Consultation
                </button>
                <Link
                  href="/services"
                  className="btn-solvantra-secondary h-[48px] px-6 text-[15px] cursor-pointer"
                >
                  Our Core Services
                </Link>
              </div>
            </div>

            {/* RIGHT Column: Signature Venn Diagram (5 cols, hidden on mobile resolution) */}
            <div className="hidden lg:flex lg:col-span-5 w-full items-center justify-center">
              <div
                aria-hidden="true"
                className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none animate-venn-drift"
              >
                <svg
                  viewBox="0 0 500 500"
                  className="w-full h-full drop-shadow-[0_8px_24px_rgba(51,36,25,0.08)]"
                >
                  {/* Circle 1: Top (PEOPLE) */}
                  <circle
                    cx="250"
                    cy="195"
                    r="130"
                    fill="rgba(185, 138, 62, 0.14)"
                    stroke="rgba(51, 36, 25, 0.35)"
                    strokeWidth="1.5"
                  />

                  {/* Circle 2: Bottom-Left (PROCESSES) */}
                  <circle
                    cx="185"
                    cy="305"
                    r="130"
                    fill="rgba(185, 138, 62, 0.14)"
                    stroke="rgba(51, 36, 25, 0.35)"
                    strokeWidth="1.5"
                  />

                  {/* Circle 3: Bottom-Right (TECHNOLOGY) */}
                  <circle
                    cx="315"
                    cy="305"
                    r="130"
                    fill="rgba(185, 138, 62, 0.14)"
                    stroke="rgba(51, 36, 25, 0.35)"
                    strokeWidth="1.5"
                  />

                  {/* Triple Overlap Center Fill */}
                  <circle
                    cx="250"
                    cy="270"
                    r="44"
                    fill="rgba(185, 138, 62, 0.30)"
                    stroke="rgba(185, 138, 62, 0.50)"
                    strokeWidth="1"
                  />

                  {/* Text Labels in Mono Caps */}
                  <text
                    x="250"
                    y="135"
                    textAnchor="middle"
                    className="font-mono text-[14px] font-bold fill-[var(--ink)] tracking-[0.14em]"
                  >
                    PEOPLE
                  </text>
                  <text
                    x="135"
                    y="360"
                    textAnchor="middle"
                    className="font-mono text-[14px] font-bold fill-[var(--ink)] tracking-[0.14em]"
                  >
                    PROCESSES
                  </text>
                  <text
                    x="365"
                    y="360"
                    textAnchor="middle"
                    className="font-mono text-[14px] font-bold fill-[var(--ink)] tracking-[0.14em]"
                  >
                    TECHNOLOGY
                  </text>

                  {/* Centered Brand Wordmark */}
                  <text
                    x="250"
                    y="275"
                    textAnchor="middle"
                    className="font-mono text-[14px] font-bold fill-[var(--ink)] tracking-[0.18em]"
                  >
                    SOLVANTRA
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 2px accent hairline at the bottom fading left to right */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none select-none z-0"
          style={{
            background:
              "linear-gradient(to right, var(--accent) 0%, rgba(185, 138, 62, 0.4) 60%, transparent 100%)",
          }}
        />
      </section>

      {/* =========================================================================
          2. STORY ("More Than a Service Provider. A Partner in Your Growth.")
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--ink-15)] relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20">
            {/* Left Rail (cols 1-5, sticky desktop) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span>01 / STORY</span>
              </div>

              <h2 className="text-[34px] sm:text-[44px] lg:text-[54px] font-serif font-medium leading-[1.06] text-[var(--ink)] mb-4">
                More Than a Service Provider. <br />
                <span className="relative inline-block mt-1">
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1.5 left-0 right-0 h-[6px] bg-[var(--accent)] -z-10 opacity-75"
                  />
                  A Partner
                </span>{" "}
                in Your Growth.
              </h2>
            </div>

            {/* Right Column: Editorial Paragraphs (cols 7-12) */}
            <div className="lg:col-start-7 lg:col-span-6 flex flex-col items-start space-y-6">
              {/* Lead Paragraph */}
              <p className="text-[20px] sm:text-[22px] font-serif font-normal leading-[1.45] text-[var(--ink)]">
                At Solvantra Global, we believe great businesses deserve more than outsourced support.
                They deserve a team that understands their goals, values their customers, and takes
                ownership of the work that moves them forward.
              </p>

              <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans max-w-[560px]">
                We bring together skilled people, streamlined processes, and intelligent technology
                to help businesses simplify operations, deliver exceptional customer experiences, and
                unlock new opportunities for growth.
              </p>

              <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans max-w-[560px]">
                From customer communication and administrative support to operational management and
                AI-enabled solutions, we build services around the real needs of your business.
              </p>

              <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans max-w-[560px]">
                Our approach is built on accountability, adaptability, and relationships that go
                beyond individual transactions.
              </p>

              {/* Large Serif Pull Quote with 3px Accent Left Bar */}
              <blockquote className="border-l-[3px] border-[var(--accent)] pl-6 my-8 max-w-xl">
                <p className="text-[26px] sm:text-[30px] font-serif font-medium text-[var(--ink)] leading-snug">
                  &ldquo;Because when your business succeeds, we succeed with you.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>

          {/* 3 Pillars Row: People • Processes • Technology (Separated by vertical hairlines, NOT cards) */}
          <div className="pt-12 border-t border-[var(--ink-15)]">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--ink-15)]">
              {/* Pillar 1: People */}
              <div className="py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[rgba(185,138,62,0.14)] border border-[rgba(185,138,62,0.30)] flex items-center justify-center text-[var(--accent)] mb-5 transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--ink)]">
                    <Users className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[24px] font-serif font-medium text-[var(--ink)] mb-2.5">
                    People
                  </h3>
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.6] font-sans">
                    Dependable, trained teams who take genuine ownership of their responsibilities,
                    communicate clearly, and treat your customers with respect.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--ink-12)] flex items-center justify-between font-mono text-[14px] text-[var(--ink-65)]">
                  <span>Accountable talent</span>
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                </div>
              </div>

              {/* Pillar 2: Processes */}
              <div className="py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[rgba(185,138,62,0.14)] border border-[rgba(185,138,62,0.30)] flex items-center justify-center text-[var(--accent)] mb-5 transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--ink)]">
                    <GitBranch className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[24px] font-serif font-medium text-[var(--ink)] mb-2.5">
                    Processes
                  </h3>
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.6] font-sans">
                    Efficient, standardized workflows and clear SOPs that eliminate bottlenecks,
                    reduce errors, and ensure consistent quality every single day.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--ink-12)] flex items-center justify-between font-mono text-[14px] text-[var(--ink-65)]">
                  <span>Streamlined workflows</span>
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                </div>
              </div>

              {/* Pillar 3: Technology */}
              <div className="py-8 md:py-0 md:px-8 first:md:pl-0 last:md:pr-0 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[rgba(185,138,62,0.14)] border border-[rgba(185,138,62,0.30)] flex items-center justify-center text-[var(--accent)] mb-5 transition-colors group-hover:bg-[var(--accent)] group-hover:text-[var(--ink)]">
                    <Cpu className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-[24px] font-serif font-medium text-[var(--ink)] mb-2.5">
                    Technology
                  </h3>
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.6] font-sans">
                    Practical, purpose-driven technology and smart integrations that reduce repetitive
                    work, improve visibility, and power intelligent decision-making.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--ink-12)] flex items-center justify-between font-mono text-[14px] text-[var(--ink-65)]">
                  <span>Technology with purpose</span>
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. VISION & MISSION (Full-Bleed Ink Background)
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[var(--ink)] text-[var(--bg)] relative overflow-hidden">
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

        {/* Accent glow (accent at 16%) top right */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 w-[600px] h-[600px] rounded-full pointer-events-none select-none z-0 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.16) 0%, rgba(185, 138, 62, 0.04) 60%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--bg-15)]">
            {/* Col 1: Vision */}
            <div className="pb-12 lg:pb-0 lg:pr-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-60)] font-semibold">
                    STRATEGIC HORIZON
                  </div>
                  <Eye className="w-16 h-16 stroke-[1.2] text-[var(--accent)] shrink-0" />
                </div>

                <h3 className="text-[24px] font-serif font-medium text-[var(--bg)] mb-4">
                  Our Vision
                </h3>

                <p className="text-[26px] sm:text-[30px] font-serif font-normal leading-snug text-[var(--bg)] mb-8">
                  To become a globally trusted business services partner, empowering companies
                  across industries to operate more intelligently, scale with confidence, and
                  achieve sustainable growth.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--bg-15)]">
                <p className="text-[15px] text-[var(--bg-70)] leading-relaxed font-sans">
                  We envision a future where businesses can focus on their greatest opportunities
                  while having the right people, processes, and technology working alongside them.
                </p>
              </div>
            </div>

            {/* Col 2: Mission */}
            <div className="pt-12 lg:pt-0 lg:pl-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-60)] font-semibold">
                    DAILY COMMITMENT
                  </div>
                  <Flag className="w-16 h-16 stroke-[1.2] text-[var(--accent)] shrink-0" />
                </div>

                <h3 className="text-[24px] font-serif font-medium text-[var(--bg)] mb-4">
                  Our Mission
                </h3>

                <p className="text-[26px] sm:text-[30px] font-serif font-normal leading-snug text-[var(--bg)] mb-8">
                  To simplify business operations and create measurable value through dependable
                  people, efficient processes, and intelligent technology.
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--bg-15)]">
                <p className="text-[15px] text-[var(--bg-70)] leading-relaxed font-sans">
                  We are committed to delivering responsive support, tailored solutions, and
                  accountable service that help our clients improve performance, strengthen customer
                  relationships, and focus on what they do best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE VALUES (Editorial Numbered Rows)
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--ink-15)] relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Rail (cols 1-4, sticky desktop) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span>03 / VALUES</span>
              </div>

              <h2 className="text-[34px] sm:text-[44px] font-serif font-medium leading-[1.08] text-[var(--ink)] mb-3">
                Our Core Values
              </h2>

              <p className="text-[16px] text-[var(--ink-80)] leading-[1.65] font-sans">
                The five fundamental commitments that guide our people, decisions, and day-to-day operations.
              </p>
            </div>

            {/* Right Column: 5 Numbered Rows (cols 6-12) */}
            <div className="lg:col-start-6 lg:col-span-7 flex flex-col border-b border-[var(--ink-15)]">
              {coreValues.map((val, idx) => {
                const IconComp = val.icon;
                const isHovered = activeValueIndex === idx;
                return (
                  <div
                    key={val.num}
                    onMouseEnter={() => setActiveValueIndex(idx)}
                    onMouseLeave={() => setActiveValueIndex(null)}
                    className="border-t border-[var(--ink-15)] min-h-[140px] p-6 lg:p-8 flex items-start justify-between gap-6 transition-colors duration-200 hover:bg-[var(--ink)] group cursor-default"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span
                          className={`font-mono text-[14px] font-bold transition-colors ${
                            isHovered
                              ? "text-[var(--bg-75)]"
                              : "text-[var(--ink-65)] group-hover:text-[var(--bg-75)]"
                          }`}
                        >
                          {val.num}
                        </span>
                        <h3
                          className={`text-[28px] sm:text-[32px] font-serif font-medium leading-snug transition-colors ${
                            isHovered
                              ? "text-[var(--bg)]"
                              : "text-[var(--ink)] group-hover:text-[var(--bg)]"
                          }`}
                        >
                          {val.title}
                        </h3>
                      </div>

                      <p
                        className={`text-[16px] font-semibold font-sans mb-2 transition-colors ${
                          isHovered
                            ? "text-[var(--bg)]"
                            : "text-[var(--ink)] group-hover:text-[var(--bg)]"
                        }`}
                      >
                        {val.tagline}
                      </p>

                      <p
                        className={`text-[15px] font-sans leading-relaxed transition-colors ${
                          isHovered
                            ? "text-[var(--bg-75)]"
                            : "text-[var(--ink-80)] group-hover:text-[var(--bg-75)]"
                        }`}
                      >
                        {val.description}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-[var(--ink-15)] group-hover:border-[var(--bg-20)] flex items-center justify-center shrink-0 text-[var(--accent)] mt-1 transition-colors">
                      <IconComp className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHY CHOOSE (Accent 8% Tint Section)
         ========================================================================= */}
      <section
        className="w-full py-20 lg:py-28 border-t border-b border-[rgba(185,138,62,0.30)] relative overflow-hidden"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent) 8%, var(--bg))",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-16">
            {/* Left Rail (cols 1-5, sticky desktop) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-3 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span>04 / WHY SOLVANTRA</span>
              </div>

              <h2 className="text-[34px] sm:text-[44px] font-serif font-medium leading-[1.08] text-[var(--ink)] mb-3">
                Why Choose Solvantra Global?
              </h2>

              <p className="text-[16px] text-[var(--ink-80)] leading-[1.65] font-sans">
                Your goals set the direction. Our commitment helps move you forward.
              </p>
            </div>

            {/* Right Column: 5 Points Checklist + Closing Partner Statement (cols 7-12) */}
            <div className="lg:col-start-7 lg:col-span-6 flex flex-col border-b border-[rgba(51,36,25,0.15)]">
              {whyChooseUs.map((benefit, i) => (
                <div
                  key={i}
                  className="py-5 border-t border-[rgba(51,36,25,0.15)] flex items-start gap-4"
                >
                  <span className="w-6 h-6 rounded-full bg-[rgba(185,138,62,0.20)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <div>
                    <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-[15px] text-[var(--ink-80)] leading-relaxed font-sans">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Repositioned 6th item: A Dependable International Partner */}
              {/* TODO: confirm with client */}
              <div className="py-5 border-t border-[rgba(51,36,25,0.15)] flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-[rgba(185,138,62,0.20)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <div>
                  <h3 className="text-[20px] font-serif font-medium text-[var(--ink)] mb-1">
                    A Dependable International Partner
                  </h3>
                  <p className="text-[15px] text-[var(--ink-80)] leading-relaxed font-sans">
                    Built on accountability across every interaction, prioritizing long-term alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Accent Block (Partner Promise) */}
          <div className="w-full bg-[var(--accent)] text-[var(--ink)] rounded-[16px] p-8 sm:p-10 lg:p-12 shadow-[0_12px_36px_rgba(51,36,25,0.08)] flex flex-col justify-between">
            <div>
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] font-semibold text-[var(--ink-70)] block mb-3">
                PARTNER PROMISE
              </span>
              <p className="text-[24px] sm:text-[28px] font-serif font-medium leading-[1.3] text-[var(--ink)] max-w-3xl mb-8">
                Our approach adapts as you grow, ensuring seamless alignment from individual
                workflows to full operational support.
              </p>
            </div>
            <div className="pt-6 border-t border-[rgba(51,36,25,0.20)] flex justify-end">
              <span className="font-mono text-[14px] font-bold tracking-wider text-[var(--ink)] uppercase">
                Driving Business, Soulfully.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OUR APPROACH (Horizontal Timeline)
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--ink-15)] relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-3 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span>05 / APPROACH</span>
            </div>
            <h2 className="text-[34px] sm:text-[44px] font-serif font-medium leading-[1.08] text-[var(--ink)] mb-3">
              Our Approach
            </h2>
            <p className="text-[16px] text-[var(--ink-80)] leading-[1.65] font-sans max-w-2xl">
              Our commitment is simple: understand the challenge, build the right solution, and
              keep working toward better outcomes.
            </p>
          </div>

          {/* 4-Step Timeline (Horizontal on Desktop, Vertical on Mobile) */}
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-[8px] left-[12.5%] right-[12.5%] h-[2px] bg-[rgba(51,36,25,0.20)] z-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {approachSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex flex-col items-start relative pl-8 md:pl-0 border-l-2 md:border-l-0 border-[var(--accent)] md:border-none"
                >
                  {/* Desktop Dot on line */}
                  <div
                    aria-hidden="true"
                    className="hidden md:flex w-4 h-4 rounded-full bg-[var(--accent)] mb-4 items-center justify-center ring-4 ring-[var(--bg)]"
                  />

                  {/* Oversized Mono Number */}
                  <span className="font-mono text-[56px] sm:text-[64px] font-bold text-[rgba(51,36,25,0.20)] leading-none select-none mb-1">
                    {step.step}
                  </span>

                  <h3 className="text-[22px] sm:text-[24px] font-serif font-medium text-[var(--ink)] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.6] font-sans">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CLOSING STATEMENT ("Behind Every Business, There's a Bigger Vision.")
         ========================================================================= */}
      <section className="w-full py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--ink-15)] relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col items-start">
            <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold block mb-3">
              SOLVANTRA GLOBAL
            </span>

            {/* Giant H2 with italic accent on "There's a Bigger Vision." */}
            <h2 className="text-[40px] sm:text-[56px] lg:text-[72px] xl:text-[80px] font-serif font-medium leading-[1.04] tracking-[-0.03em] text-[var(--ink)] mb-10 max-w-4xl">
              Behind Every Business, <br />
              <span className="italic text-[var(--accent)] font-normal block sm:inline">
                There&apos;s a Bigger Vision.
              </span>
            </h2>

            {/* 3 Existing Paragraphs in 2 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mb-10">
              <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans">
                A vision worth building. Customers worth serving. Goals worth pursuing. We believe the
                right support can turn everyday challenges into opportunities and ambitious ideas
                into real momentum.
              </p>
              <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans">
                That&apos;s why we bring more than services to the table. We bring commitment,
                thoughtful solutions, and a genuine investment in the businesses we work with.
              </p>
            </div>

            {/* 28px Serif Pull Statement */}
            <p className="text-[24px] sm:text-[28px] font-serif font-medium text-[var(--ink)] leading-snug max-w-3xl mb-12">
              Because we don&apos;t just want to be part of your operations. We want to be part of your progress.
            </p>

            {/* Bottom Hairline with Tagline Left and Link Right */}
            <div className="w-full pt-6 border-t border-[var(--ink-15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)]">
                Solvantra Global — Driving Business, Soulfully.
              </span>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="link-solvantra group text-[15px] font-semibold inline-flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
              >
                <span>Let&apos;s Build What&apos;s Next</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CTA (Reused from shared homepage component)
         ========================================================================= */}
      <FinalCTA />

      {/* Shared Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* CSS for Subtle Venn Drift Animation */}
      <style jsx>{`
        @keyframes vennDrift {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(2deg) scale(1.015);
          }
          100% {
            transform: rotate(-2deg) scale(0.99);
          }
        }
        .animate-venn-drift {
          animation: vennDrift 30s ease-in-out infinite alternate;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-venn-drift {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}
