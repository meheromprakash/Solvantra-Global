"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
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

interface WorkflowNode {
  label: string;
  sublabel: string;
  icon: LucideIcon;
}

interface SectorData {
  num: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  path: string;
  linkText: string;
  workflow: WorkflowNode[];
  bullets: string[];
}

const SECTORS: SectorData[] = [
  {
    num: "01",
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Dental & medical clinics",
    description:
      "Dental and medical revenue cycle management, clean claims processing, status tracking, and disciplined denial and accounts receivable resolution.",
    path: "/healthcare",
    linkText: "Explore Healthcare Pod",
    workflow: [
      { label: "Intake", sublabel: "Patient registration", icon: UserCheck },
      { label: "Verify Eligibility", sublabel: "Payer confirmed", icon: ShieldCheck },
      { label: "Claim", sublabel: "Clean electronic submission", icon: FileCheck },
      { label: "Resolution", sublabel: "AR closed & reconciled", icon: CheckCircle2 },
    ],
    bullets: [
      "Eligibility & Benefits Verification",
      "Claim Preparation & Submission",
      "Denial & AR Follow-up",
    ],
  },
  {
    num: "02",
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Estate Agents & Property Managers",
    description:
      "24/7 enquiry handling, lettings support, viewing bookings, tenant communication, and compliance administration configured specifically for agency operations.",
    path: "/real-estate",
    linkText: "Explore Real Estate Pod",
    workflow: [
      { label: "Enquiry", sublabel: "Omnichannel inbound", icon: Headphones },
      { label: "Qualify", sublabel: "Criteria verified", icon: UserCheck },
      { label: "Book Viewing", sublabel: "Diary synchronized", icon: Calendar },
      { label: "CRM Log", sublabel: "Audit history", icon: ClipboardCheck },
    ],
    bullets: [
      "24/7 Enquiry Handling & Diary Bookings",
      "Maintenance Helpdesk & Urgency Triage",
      "Statutory Compliance Administration",
    ],
  },
  {
    num: "03",
    id: "home-services",
    title: "Home Services",
    subtitle: "HVAC, plumbing, electrical, field trades and home care agencies",
    description:
      "24/7 customer front desk, appointment scheduling, technician coordination, emergency dispatch, and customer follow-ups that keep trucks rolling.",
    path: "/home-services",
    linkText: "Explore Home Services Pod",
    workflow: [
      { label: "Call", sublabel: "Immediate response", icon: PhoneCall },
      { label: "Schedule", sublabel: "Calendar slot optimization", icon: Calendar },
      { label: "Dispatch", sublabel: "Technician routed", icon: Truck },
      { label: "Follow-Up", sublabel: "Review & invoice", icon: CheckCircle2 },
    ],
    bullets: [
      "24/7 Live Inbound Front Desk",
      "Calendar & Software Scheduling",
      "Home Care & Nursing Scheduling",
    ],
  },
];

export default function IndustriesGrid() {
  const [activeTab, setActiveTab] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useRef(true);

  // Auto-advance tabs every 8s until user interacts (respects tab & viewport visibility)
  useEffect(() => {
    if (userInteracted) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(([entry]) => {
      isSectionVisible.current = entry.isIntersecting;
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const timer = setInterval(() => {
      if (document.hidden || !isSectionVisible.current) return;
      setActiveTab((prev) => (prev + 1) % SECTORS.length);
    }, 8000);

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, [userInteracted]);

  const handleSelectTab = (index: number) => {
    setUserInteracted(true);
    setActiveTab(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (index + 1) % SECTORS.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (index - 1 + SECTORS.length) % SECTORS.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      nextIndex = SECTORS.length - 1;
    } else {
      return;
    }

    handleSelectTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  const current = SECTORS[activeTab];

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 bg-[var(--ink)] text-[var(--bg)] border-t border-[rgba(185,138,62,0.30)] relative overflow-hidden">
      {/* 1. Fine grid pattern in bg at 5% */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(248, 241, 229, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(248, 241, 229, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* 2. Soft radial accent glow (accent at 18%) in top right */}
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full pointer-events-none select-none z-0 blur-[90px] sm:blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(185, 138, 62, 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Header: Left aligned on a 12-col grid (cols 1-3 mono label, cols 4-12 H2 + subtext) */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)]">
              <span className="text-[var(--accent)] font-bold">01</span>
              <span>/ SECTORS</span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--bg)] mb-4">
              Tailored Solutions For High-Impact Sectors
            </h2>
            <p className="text-[17px] text-[var(--bg-70)] max-w-[620px] leading-[1.65] font-sans">
              Dedicated operational pods configured with specialized domain workflows and compliance standards.
            </p>
          </div>
        </div>

        {/* Mobile Horizontal Pill Scroll (Visible under lg) */}
        <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 mb-6 no-scrollbar">
          {SECTORS.map((sector, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => handleSelectTab(idx)}
                className={`px-4 py-2.5 rounded-full font-mono text-[14px] uppercase tracking-[0.06em] whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] ${
                  isActive
                    ? "bg-[var(--accent)] text-[var(--ink)] font-bold border border-[var(--accent)]"
                    : "bg-transparent text-[var(--bg)] border border-[rgba(248,241,229,0.15)] hover:bg-[rgba(248,241,229,0.08)]"
                }`}
              >
                <span className="font-bold mr-1.5">{sector.num}</span>
                <span>{sector.title}</span>
              </button>
            );
          })}
        </div>

        {/* Desktop Two-Column Layout (cols 1-4 tabs, cols 5-12 panel) */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: 3 Vertical Tab Buttons (cols 1-4) */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="High-Impact Sectors"
            className="hidden lg:flex lg:col-span-4 flex-col border-t border-[rgba(248,241,229,0.12)]"
          >
            {SECTORS.map((sector, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={sector.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`tab-${sector.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${sector.id}`}
                  tabIndex={isActive ? 0 : -1}
                  type="button"
                  onClick={() => handleSelectTab(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`w-full text-left p-6 lg:p-7 flex flex-col justify-center transition-all duration-200 cursor-pointer border-b border-r border-[rgba(248,241,229,0.12)] relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-[var(--accent)] text-[var(--ink)] border-l-[3px] border-l-[var(--ink)]"
                      : "bg-transparent text-[var(--bg)] border-l-[3px] border-l-transparent hover:bg-[rgba(248,241,229,0.06)]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`font-mono text-[14px] font-bold tracking-wider ${
                        isActive ? "text-[var(--ink)] font-bold" : "text-[var(--bg-55)]"
                      }`}
                    >
                      {sector.num}
                    </span>
                    <span
                      className={`font-mono text-[14px] uppercase tracking-[0.08em] ${
                        isActive ? "text-[rgba(51,36,25,0.70)]" : "text-[var(--bg-55)]"
                      }`}
                    >
                      {sector.subtitle}
                    </span>
                  </div>

                  <h3
                    className={`text-[26px] lg:text-[28px] font-serif font-medium leading-tight ${
                      isActive ? "text-[var(--ink)] font-semibold" : "text-[var(--bg)]"
                    }`}
                  >
                    {sector.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Large Bordered Panel (cols 5-12, radius 16px, bg fill, fixed min-height, 40% shadow) */}
          <div
            id={`panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${current.id}`}
            className="lg:col-span-8 bg-[var(--bg)] border border-[var(--ink-15)] rounded-[16px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-[0_24px_60px_rgba(51,36,25,0.40)] min-h-[480px] lg:min-h-[520px] transition-all duration-300 relative z-10 text-[var(--ink)] overflow-hidden"
          >
            <div key={activeTab} className="tab-pane-transition flex flex-col justify-between flex-1">
              <div>
                {/* 1) Top: Description (max 3 lines) */}
                <div className="mb-8">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--ink-15)]">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)]">
                      Domain Architecture — {current.title}
                    </span>
                    <span className="font-mono text-[14px] text-[var(--ink-65)] uppercase tracking-wider border border-[var(--ink-15)] px-2 py-0.5 rounded-[4px]">
                      Illustrative workflow
                    </span>
                  </div>
                  <p className="text-[16px] sm:text-[17px] text-[var(--ink-80)] leading-[1.65] font-sans max-w-2xl">
                    {current.description}
                  </p>
                </div>

                {/* 2) Horizontal Workflow Diagram: 4 nodes joined by a line with traveling accent dot */}
                <div className="my-8 pt-2 pb-4">
                  <div className="relative">
                    {/* Connecting Line between nodes */}
                    <div className="hidden sm:block absolute top-6 left-6 right-6 h-[2px] bg-[var(--ink-15)] z-0 [container-type:inline-size]">
                      {/* Traveling accent dot along the workflow line */}
                      <div
                        className="absolute -top-[3px] left-0 w-2 h-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]"
                        style={{
                          animation: "dotTravel 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                          willChange: "transform, opacity",
                        }}
                      />
                    </div>

                    {/* 4 Nodes */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                      {current.workflow.map((node, nodeIdx) => {
                        const IconComp = node.icon;
                        return (
                          <div
                            key={nodeIdx}
                            className="flex flex-col items-center text-center p-3 sm:p-2 rounded-[10px] bg-[var(--bg)] border sm:border-0 border-[var(--ink-12)]"
                          >
                            {/* 48px rounded square with icon */}
                            <div className="w-12 h-12 rounded-[10px] bg-[var(--accent-14)] text-[var(--accent)] border border-[var(--ink-15)] flex items-center justify-center shrink-0 mb-3 shadow-sm">
                              <IconComp className="w-5 h-5 stroke-[1.5]" />
                            </div>

                            <span className="font-sans text-[14px] font-semibold text-[var(--ink)] leading-snug">
                              {node.label}
                            </span>
                            <span className="font-mono text-[14px] text-[var(--ink-65)] leading-tight mt-1">
                              {node.sublabel}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* 3) The 3 included bullets as a 3-column row with check icons */}
                <div className="pt-6 border-t border-[var(--ink-15)] mb-8">
                  <span className="font-mono text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--ink-65)] block mb-4">
                    What&apos;s Included In The Pod
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {current.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2.5 text-[14px] leading-snug text-[var(--ink-80)] font-sans"
                      >
                        <Check
                          className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5"
                          strokeWidth={2.5}
                        />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4) Bottom: Link to sector pod (text changes with tab) */}
              <div className="pt-4 border-t border-[var(--ink-15)] flex items-center justify-between">
                <Link
                  href={current.path}
                  className="link-solvantra group text-[15px] inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                >
                  <span>{current.linkText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <span className="font-mono text-[14px] text-[var(--ink-65)]">
                  Pod 0{activeTab + 1} / 03
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traveling Dot Animation Keyframe */}
      <style jsx>{`
        @keyframes dotTravel {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100cqi - 8px));
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="dotTravel"] {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
