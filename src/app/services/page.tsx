"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Headphones,
  UserCheck,
  Calendar,
  ClipboardCheck,
  PhoneCall,
  Truck,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  LucideIcon,
} from "lucide-react";
import { SERVICES, OPERATIONS } from "@/lib/services";
import ConsultationModal from "@/components/ConsultationModal";
import FinalCTA from "@/components/sections/FinalCTA";

// Icon mapping for illustrative workflows
const WORKFLOW_ICONS: Record<string, LucideIcon> = {
  Enquiry: Headphones,
  Qualify: UserCheck,
  "Book Viewing": Calendar,
  "CRM Log": ClipboardCheck,
  Call: PhoneCall,
  Schedule: Calendar,
  Dispatch: Truck,
  "Follow-up": CheckCircle2,
  Intake: UserCheck,
  "Verify Eligibility": ShieldCheck,
  Claim: FileCheck,
  "Claim Prep": FileCheck,
  Resolution: CheckCircle2,
};

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openOperationIndex, setOpenOperationIndex] = useState<number | null>(null);

  const scrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleOperation = (index: number) => {
    setOpenOperationIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col w-full bg-[var(--bg)] text-[var(--ink)] relative">

      {/* =========================================================================
          1. HERO (Layout 7/5)
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
              "radial-gradient(circle, rgba(185, 138, 62, 0.26) 0%, rgba(185, 138, 62, 0.08) 50%, transparent 70%)",
          }}
        />

        {/* Decorative Ring (600px, 1px accent at 30%) partly off the right edge */}
        <div
          aria-hidden="true"
          className="absolute right-[-140px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(185,138,62,0.30)] pointer-events-none select-none z-0 hidden lg:block"
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Mono Breadcrumb (>= 14px) */}
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
                    Services
                  </li>
                </ol>
              </nav>

              {/* Eyebrow (>= 14px) */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                  OUR SERVICES
                </span>
              </div>

              {/* H1: clamp(48px, 6.5vw, 88px), italic accent only on "Your Industry." */}
              <h1 className="text-[44px] sm:text-[60px] lg:text-[76px] xl:text-[84px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)] mb-6">
                Services Built for{" "}
                <span className="italic text-[var(--accent)] font-normal block sm:inline">
                  Your Industry.
                </span>
              </h1>

              {/* 2-3 line subline from existing copy */}
              {/* TODO: confirm with client */}
              <p className="text-[17px] sm:text-[18px] text-[var(--ink-80)] leading-[1.65] max-w-[560px] font-sans mb-8">
                Turnkey operational capabilities managed by vetted teams, precision SOPs,
                and seamless software integrations built to scale your business.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-solvantra-primary h-[48px] px-7 text-[15px] cursor-pointer"
                >
                  Book a Consultation
                </button>
                <button
                  type="button"
                  onClick={() => scrollToElement("operations")}
                  className="btn-solvantra-secondary h-[48px] px-6 text-[15px] cursor-pointer"
                >
                  Get a Custom Solution
                </button>
              </div>
            </div>

            {/* RIGHT Column: Bordered Card (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[var(--bg)] rounded-[16px] p-6 sm:p-7 border border-[var(--ink-15)] shadow-[0_12px_40px_rgba(51,36,25,0.08)] relative z-10 backdrop-blur-sm">
                <div className="flex items-center justify-between pb-3.5 mb-2 border-b border-[var(--ink-12)]">
                  <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                    SERVICES
                  </span>
                  <span className="font-mono text-[14px] text-[var(--ink-65)]">
                    3 SECTORS
                  </span>
                </div>

                {/* 3 Large Numbered Rows */}
                <div className="divide-y divide-[var(--ink-12)]">
                  {SERVICES.map((service) => (
                    <button
                      key={service.slug}
                      type="button"
                      onClick={() => scrollToElement(service.slug)}
                      className="w-full py-4 px-3.5 -mx-3.5 rounded-[10px] text-left transition-colors duration-200 hover:bg-[var(--ink)] group cursor-pointer flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <div className="flex-1">
                        <div className="flex items-baseline gap-2.5 mb-1">
                          <span className="font-mono text-[15px] font-bold text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors">
                            {service.num}
                          </span>
                          <span className="text-[20px] sm:text-[22px] font-serif font-medium text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors">
                            {service.title}
                          </span>
                        </div>
                        <p className="font-mono text-[14px] text-[var(--ink-65)] group-hover:text-[var(--bg-75)] transition-colors max-w-[280px] sm:max-w-[340px]">
                          {service.audience}
                        </p>
                      </div>

                      <div className="w-8 h-8 rounded-full border border-[var(--ink-15)] group-hover:border-[var(--bg-20)] flex items-center justify-center shrink-0 group-hover:bg-[rgba(248,241,229,0.1)] transition-colors">
                        <ArrowRight className="w-4 h-4 text-[var(--ink-65)] group-hover:text-[var(--bg)] group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
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
          2. THE 3 SERVICE BLOCKS (Main Content)
         ========================================================================= */}
      <div className="w-full flex flex-col">
        {/* ---------------------------------------------------------------------
            BLOCK 1: REAL ESTATE (Background: bg)
           --------------------------------------------------------------------- */}
        <section
          id="real-estate"
          className="w-full py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--ink-15)] relative min-h-[640px] flex items-center"
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
            {/* Tag row at top: small chips from OPERATIONS list (>= 14px) */}
            <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-[var(--ink-12)]">
              <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)] mr-2">
                Operations Involved:
              </span>
              {SERVICES[0].operationsTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[14px] px-3.5 py-1 rounded-full border border-[var(--ink-20)] bg-[var(--ink-6)] text-[var(--ink-80)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Rail (cols 1-5, sticky desktop) */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start">
                <span className="font-mono text-[84px] lg:text-[96px] font-bold text-[rgba(51,36,25,0.18)] leading-none select-none -mb-2">
                  01
                </span>

                <div className="font-mono text-[14px] px-3.5 py-1 rounded-full border border-[var(--ink-20)] bg-[var(--ink-6)] text-[var(--ink-80)] mb-4 inline-block">
                  {SERVICES[0].audience}
                </div>

                <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-serif font-medium leading-[1.04] text-[var(--ink)] mb-4">
                  Real Estate
                </h2>

                {/* TODO: confirm with client */}
                <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans max-w-[520px] mb-8">
                  {SERVICES[0].description}
                </p>

                <div className="flex flex-col items-start gap-4">
                  <Link
                    href={SERVICES[0].href}
                    className="link-solvantra group text-[15px] font-semibold inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                  >
                    <span>{SERVICES[0].linkLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="btn-solvantra-primary h-[48px] px-7 text-[15px] cursor-pointer mt-1"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>

              {/* Right Panel (cols 7-12) */}
              <div className="lg:col-start-7 lg:col-span-6 w-full">
                <div className="bg-[var(--bg)] rounded-[16px] p-6 sm:p-8 lg:p-[32px] border border-[var(--ink-15)] shadow-[0_4px_20px_rgba(51,36,25,0.06)] hover:border-[rgba(185,138,62,0.40)] transition-colors duration-200 relative overflow-hidden">
                  {/* Illustrative Workflow Label (>= 14px) */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                      ILLUSTRATIVE WORKFLOW
                    </span>
                    <span className="font-mono text-[14px] text-[var(--ink-65)] uppercase tracking-wider">
                      Illustrative
                    </span>
                  </div>

                  {/* 4-Step Workflow with Traveling Accent Dot */}
                  <div className="relative mb-8">
                    {/* Connecting track line: starts at center of col 1 (12.5%) and ends at center of col 4 (87.5%) */}
                    <div
                      aria-hidden="true"
                      className="hidden sm:block absolute top-[24px] left-[12.5%] right-[12.5%] h-[2px] bg-[rgba(185,138,62,0.30)] pointer-events-none select-none z-0 -translate-y-1/2"
                    >
                      {/* Traveling accent dot */}
                      <div className="animated-travel-dot absolute -top-[3px] w-2 h-2 rounded-full bg-[var(--accent)] shadow-sm" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                      {SERVICES[0].workflow.map((node) => {
                        const IconComp = WORKFLOW_ICONS[node.label] || Headphones;
                        return (
                          <div
                            key={node.step}
                            className="flex flex-col items-center text-center"
                          >
                            <div className="w-12 h-12 rounded-[10px] bg-[var(--bg)] border border-[rgba(185,138,62,0.40)] flex items-center justify-center text-[var(--accent)] mb-2.5 shadow-sm relative z-10">
                              <IconComp className="w-5 h-5 stroke-[1.8]" />
                            </div>
                            <span className="font-serif text-[15px] sm:text-[16px] font-medium text-[var(--ink)] leading-snug">
                              {node.label}
                            </span>
                            <span className="font-mono text-[14px] text-[var(--ink-65)] mt-1">
                              {node.sublabel}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-[var(--ink-12)] my-6 lg:my-8" />

                  {/* What's Included Label (>= 14px) */}
                  <div className="mb-4">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                      WHAT&apos;S INCLUDED
                    </span>
                  </div>

                  {/* 2-Column List of Included Items */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SERVICES[0].includedItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[rgba(185,138,62,0.15)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span className="text-[14px] sm:text-[15px] text-[var(--ink-80)] font-sans leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            BLOCK 2: HOME SERVICES (Background: accent at 8% tint over bg)
           --------------------------------------------------------------------- */}
        <section
          id="home-services"
          className="w-full py-20 lg:py-28 border-b border-[var(--ink-15)] relative min-h-[640px] flex items-center"
          style={{
            backgroundColor: "color-mix(in srgb, var(--accent) 8%, var(--bg))",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
            {/* Tag row at top */}
            <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-[rgba(51,36,25,0.15)]">
              <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)] mr-2">
                Operations Involved:
              </span>
              {SERVICES[1].operationsTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[14px] px-3.5 py-1 rounded-full border border-[var(--ink-20)] bg-[rgba(248,241,229,0.7)] text-[var(--ink-80)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Layout Mirrored: Panel LEFT (cols 1-6), Text RIGHT (cols 8-12) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Panel LEFT (cols 1-6) */}
              <div className="lg:col-span-6 w-full order-2 lg:order-1">
                <div className="bg-[var(--bg)] rounded-[16px] p-6 sm:p-8 lg:p-[32px] border border-[rgba(185,138,62,0.30)] shadow-[0_4px_20px_rgba(51,36,25,0.06)] hover:border-[rgba(185,138,62,0.40)] transition-colors duration-200 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                      ILLUSTRATIVE WORKFLOW
                    </span>
                    <span className="font-mono text-[14px] text-[var(--ink-65)] uppercase tracking-wider">
                      Illustrative
                    </span>
                  </div>

                  {/* 4-Step Workflow with Traveling Accent Dot */}
                  <div className="relative mb-8">
                    {/* Connecting track line: starts at center of col 1 (12.5%) and ends at center of col 4 (87.5%) */}
                    <div
                      aria-hidden="true"
                      className="hidden sm:block absolute top-[24px] left-[12.5%] right-[12.5%] h-[2px] bg-[rgba(185,138,62,0.30)] pointer-events-none select-none z-0 -translate-y-1/2"
                    >
                      {/* Traveling accent dot */}
                      <div className="animated-travel-dot absolute -top-[3px] w-2 h-2 rounded-full bg-[var(--accent)] shadow-sm" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                      {SERVICES[1].workflow.map((node) => {
                        const IconComp = WORKFLOW_ICONS[node.label] || PhoneCall;
                        return (
                          <div
                            key={node.step}
                            className="flex flex-col items-center text-center"
                          >
                            <div className="w-12 h-12 rounded-[10px] bg-[var(--bg)] border border-[rgba(185,138,62,0.40)] flex items-center justify-center text-[var(--accent)] mb-2.5 shadow-sm relative z-10">
                              <IconComp className="w-5 h-5 stroke-[1.8]" />
                            </div>
                            <span className="font-serif text-[15px] sm:text-[16px] font-medium text-[var(--ink)] leading-snug">
                              {node.label}
                            </span>
                            <span className="font-mono text-[14px] text-[var(--ink-65)] mt-1">
                              {node.sublabel}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="h-px w-full bg-[var(--ink-12)] my-6 lg:my-8" />

                  <div className="mb-4">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                      WHAT&apos;S INCLUDED
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SERVICES[1].includedItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[rgba(185,138,62,0.15)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span className="text-[14px] sm:text-[15px] text-[var(--ink-80)] font-sans leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Text RIGHT (cols 8-12, sticky desktop) */}
              <div className="lg:col-start-8 lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start order-1 lg:order-2">
                <span className="font-mono text-[84px] lg:text-[96px] font-bold text-[rgba(51,36,25,0.18)] leading-none select-none -mb-2">
                  02
                </span>

                <div className="font-mono text-[14px] px-3.5 py-1 rounded-full border border-[var(--ink-20)] bg-[rgba(248,241,229,0.7)] text-[var(--ink-80)] mb-4 inline-block">
                  {SERVICES[1].audience}
                </div>

                <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-serif font-medium leading-[1.04] text-[var(--ink)] mb-4">
                  Home Services
                </h2>

                {/* TODO: confirm with client */}
                <p className="text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans max-w-[520px] mb-8">
                  {SERVICES[1].description}
                </p>

                <div className="flex flex-col items-start gap-4">
                  <Link
                    href={SERVICES[1].href}
                    className="link-solvantra group text-[15px] font-semibold inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                  >
                    <span>{SERVICES[1].linkLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="btn-solvantra-primary h-[48px] px-7 text-[15px] cursor-pointer mt-1"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------------
            BLOCK 3: HEALTHCARE (Background: ink with bg text, panel inverted)
           --------------------------------------------------------------------- */}
        <section
          id="healthcare"
          className="w-full py-20 lg:py-28 bg-[var(--ink)] text-[var(--bg)] border-b border-[rgba(185,138,62,0.25)] relative min-h-[640px] flex items-center"
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full">
            {/* Tag row at top */}
            <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-[var(--bg-12)]">
              <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--bg-60)] mr-2">
                Operations Involved:
              </span>
              {SERVICES[2].operationsTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[14px] px-3.5 py-1 rounded-full border border-[var(--bg-15)] bg-[var(--bg-8)] text-[var(--bg-75)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Rail (cols 1-5, sticky desktop) */}
              <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-start">
                <span className="font-mono text-[84px] lg:text-[96px] font-bold text-[rgba(248,241,229,0.18)] leading-none select-none -mb-2">
                  03
                </span>

                <div className="font-mono text-[14px] px-3.5 py-1 rounded-full border border-[var(--bg-20)] bg-[var(--bg-8)] text-[var(--bg-75)] mb-4 inline-block">
                  {SERVICES[2].audience}
                </div>

                <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-serif font-medium leading-[1.04] text-[var(--bg)] mb-4">
                  Healthcare
                </h2>

                {/* TODO: confirm with client */}
                <p className="text-[17px] text-[var(--bg-75)] leading-[1.65] font-sans max-w-[520px] mb-8">
                  {SERVICES[2].description}
                </p>

                <div className="flex flex-col items-start gap-4">
                  <Link
                    href={SERVICES[2].href}
                    className="group text-[15px] font-semibold inline-flex items-center gap-1.5 mb-6 text-[var(--bg)] hover:text-[var(--bg-90)] transition-colors underline decoration-2 decoration-[var(--accent)] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                  >
                    <span>{SERVICES[2].linkLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="btn-solvantra-primary h-[48px] px-7 text-[15px] cursor-pointer mt-1"
                  >
                    Book a Consultation
                  </button>
                </div>
              </div>

              {/* Right Panel: Inverted Panel (cols 7-12) */}
              <div className="lg:col-start-7 lg:col-span-6 w-full">
                <div className="bg-[rgba(248,241,229,0.08)] rounded-[16px] p-6 sm:p-8 lg:p-[32px] border border-[rgba(248,241,229,0.15)] shadow-xl hover:border-[rgba(185,138,62,0.40)] transition-colors duration-200 relative overflow-hidden backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-60)] font-semibold">
                      ILLUSTRATIVE WORKFLOW
                    </span>
                    <span className="font-mono text-[14px] text-[var(--bg-55)] uppercase tracking-wider">
                      Illustrative
                    </span>
                  </div>

                  {/* 4-Step Workflow with Traveling Accent Dot */}
                  <div className="relative mb-8">
                    {/* Connecting track line: starts at center of col 1 (12.5%) and ends at center of col 4 (87.5%) */}
                    <div
                      aria-hidden="true"
                      className="hidden sm:block absolute top-[24px] left-[12.5%] right-[12.5%] h-[2px] bg-[rgba(185,138,62,0.40)] pointer-events-none select-none z-0 -translate-y-1/2"
                    >
                      {/* Traveling accent dot */}
                      <div className="animated-travel-dot absolute -top-[3px] w-2 h-2 rounded-full bg-[var(--accent)] shadow-sm" />
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                      {SERVICES[2].workflow.map((node) => {
                        const IconComp = WORKFLOW_ICONS[node.label] || UserCheck;
                        return (
                          <div
                            key={node.step}
                            className="flex flex-col items-center text-center"
                          >
                            <div className="w-12 h-12 rounded-[10px] bg-[var(--ink)] border border-[rgba(185,138,62,0.45)] flex items-center justify-center text-[var(--accent)] mb-2.5 shadow-sm relative z-10">
                              <IconComp className="w-5 h-5 stroke-[1.8]" />
                            </div>
                            <span className="font-serif text-[15px] sm:text-[16px] font-medium text-[var(--bg)] leading-snug">
                              {node.label}
                            </span>
                            <span className="font-mono text-[14px] text-[var(--bg-60)] mt-1">
                              {node.sublabel}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="h-px w-full bg-[rgba(248,241,229,0.15)] my-6 lg:my-8" />

                  <div className="mb-4">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-60)] font-semibold">
                      WHAT&apos;S INCLUDED
                    </span>
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SERVICES[2].includedItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[rgba(185,138,62,0.25)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </span>
                        <span className="text-[14px] sm:text-[15px] text-[var(--bg-80)] font-sans leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          3. OPERATIONS (Secondary, below the services, deliberately lighter)
         ========================================================================= */}
      <section
        id="operations"
        className="w-full py-16 md:py-24 bg-[var(--bg)] relative overflow-hidden"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Left-Aligned Header */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span>WHAT WE HANDLE</span>
            </div>
            <h2 className="text-[32px] sm:text-[40px] font-serif font-medium leading-[1.08] text-[var(--ink)] mb-3">
              Operations behind every service.
            </h2>
            {/* TODO: confirm with client */}
            <p className="text-[15px] sm:text-[16px] text-[var(--ink-80)] leading-[1.6] max-w-xl font-sans">
              Seven specialized operational capabilities managed across every Solvantra engagement.
            </p>
          </div>

          {/* Simple 2-column index of the 7 operations: hairline rows, hover fills ink with bg text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {OPERATIONS.map((op, idx) => {
              const isOpen = openOperationIndex === idx;
              return (
                <div
                  key={op.num}
                  className={`border-t border-[var(--ink-15)] transition-colors duration-150 ${
                    isOpen
                      ? "bg-[var(--ink)] text-[var(--bg)]"
                      : "hover:bg-[var(--ink)] hover:text-[var(--bg)] group"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleOperation(idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-3 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]"
                  >
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3 mb-1.5">
                        <span
                          className={`font-mono text-[14px] font-bold transition-colors ${
                            isOpen
                              ? "text-[var(--bg-75)]"
                              : "text-[var(--ink-65)] group-hover:text-[var(--bg-75)]"
                          }`}
                        >
                          {op.num}
                        </span>
                        <h3
                          className={`text-[20px] sm:text-[22px] font-serif font-medium leading-snug transition-colors ${
                            isOpen
                              ? "text-[var(--bg)]"
                              : "text-[var(--ink)] group-hover:text-[var(--bg)]"
                          }`}
                        >
                          {op.title}
                        </h3>
                      </div>
                      <p
                        className={`text-[14px] sm:text-[15px] leading-[1.5] font-sans transition-colors ${
                          isOpen
                            ? "text-[var(--bg-75)]"
                            : "text-[var(--ink-80)] group-hover:text-[var(--bg-75)]"
                        }`}
                      >
                        {op.description}
                      </p>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 mt-1 transition-all ${
                        isOpen
                          ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--ink)] rotate-180"
                          : "border-[var(--ink-20)] text-[var(--ink-65)] group-hover:border-[var(--bg-30)] group-hover:text-[var(--bg)]"
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2]" />
                    </span>
                  </button>

                  {/* Expandable Deliverables Checklist */}
                  {isOpen && (
                    <div className="px-3 pb-5 pt-1 border-t border-[var(--bg-12)] animate-fadeIn">
                      <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--bg-60)] font-semibold block mb-3">
                        Key Deliverables Included:
                      </span>
                      <ul className="space-y-2.5">
                        {op.deliverables.map((item, dIdx) => (
                          <li
                            key={dIdx}
                            className="flex items-start gap-2.5 text-[14px] sm:text-[15px] font-sans text-[var(--bg-80)]"
                          >
                            <span className="w-4 h-4 rounded-full bg-[rgba(185,138,62,0.25)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FINAL CTA (Reused from homepage FinalCTA component)
         ========================================================================= */}
      <FinalCTA />

      {/* Shared Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Traveling Dot Animation Style */}
      <style jsx>{`
        @keyframes travelHorizontal {
          0% {
            left: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        .animated-travel-dot {
          animation: travelHorizontal 3.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animated-travel-dot {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
