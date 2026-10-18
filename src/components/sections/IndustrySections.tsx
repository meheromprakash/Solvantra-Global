"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  UserCheck,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  Headphones,
  Calendar,
  ClipboardCheck,
  PhoneCall,
  Truck,
  LucideIcon,
} from "lucide-react";

interface WorkflowItem {
  label: string;
  sublabel: string;
  icon: LucideIcon;
}

interface SectorBlockProps {
  id: string;
  num: string;
  sectorTag: string;
  heading: string;
  subtitle: string;
  summary: string;
  description: string;
  workflow: WorkflowItem[];
  bullets: string[];
  disclaimer: string;
  href: string;
  linkText: string;
  theme: "dark" | "light";
}

function SectorBlock({
  id,
  num,
  sectorTag,
  heading,
  subtitle,
  summary,
  description,
  workflow,
  bullets,
  disclaimer,
  href,
  linkText,
  theme,
}: SectorBlockProps) {
  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className={`w-full py-16 md:py-24 border-t relative overflow-hidden ${
        isDark
          ? "bg-[var(--ink)] text-[var(--bg)] border-[rgba(185,138,62,0.30)]"
          : "bg-[var(--bg)] text-[var(--ink)] border-[var(--ink-15)]"
      }`}
    >
      {/* Background fine grid pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: isDark
            ? `
              linear-gradient(to right, rgba(248, 241, 229, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(248, 241, 229, 0.04) 1px, transparent 1px)
            `
            : `
              linear-gradient(to right, rgba(51, 36, 25, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(51, 36, 25, 0.04) 1px, transparent 1px)
            `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className={`absolute w-[600px] h-[600px] rounded-full pointer-events-none select-none z-0 blur-[100px] ${
          isDark
            ? "-right-24 -top-24 bg-[radial-gradient(circle,rgba(185,138,62,0.16)_0%,transparent_70%)]"
            : "-left-24 -top-24 bg-[radial-gradient(circle,rgba(185,138,62,0.12)_0%,transparent_70%)]"
        }`}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <div data-reveal className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-10 lg:mb-14">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em]">
              <span className="text-[var(--accent)] font-bold">{num}</span>
              <span className={isDark ? "text-[var(--bg-55)]" : "text-[var(--ink-65)]"}>
                / {sectorTag}
              </span>
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2
              className={`text-[32px] sm:text-[42px] lg:text-[50px] font-serif font-medium leading-[1.04] tracking-[-0.03em] mb-3 ${
                isDark ? "text-[var(--bg)]" : "text-[var(--ink)]"
              }`}
            >
              {heading}
            </h2>
            <p
              className={`font-mono text-[14px] uppercase tracking-[0.06em] font-semibold mb-4 ${
                isDark ? "text-[var(--accent)]" : "text-[var(--accent)]"
              }`}
            >
              {subtitle}
            </p>
            <p
              className={`text-[17px] sm:text-[18px] leading-[1.65] font-sans font-medium mb-3 max-w-3xl ${
                isDark ? "text-[var(--bg-90)]" : "text-[var(--ink-90)]"
              }`}
            >
              {summary}
            </p>
            <p
              className={`text-[15px] sm:text-[16px] leading-[1.65] font-sans max-w-3xl ${
                isDark ? "text-[var(--bg-70)]" : "text-[var(--ink-75)]"
              }`}
            >
              {description}
            </p>
          </div>
        </div>

        {/* Feature & Workflow Card */}
        <div
          data-reveal
          className={`rounded-[16px] p-6 sm:p-8 lg:p-10 border shadow-lg ${
            isDark
              ? "bg-[rgba(248,241,229,0.04)] border-[rgba(248,241,229,0.12)] text-[var(--bg)]"
              : "bg-[var(--bg)] border-[var(--ink-15)] text-[var(--ink)] shadow-[0_12px_40px_rgba(51,36,25,0.06)]"
          }`}
        >
          {/* Top Label */}
          <div
            className={`flex items-center justify-between pb-3 mb-6 border-b ${
              isDark ? "border-[rgba(248,241,229,0.12)]" : "border-[var(--ink-15)]"
            }`}
          >
            <span
              className={`font-mono text-[13px] uppercase tracking-[0.08em] font-semibold ${
                isDark ? "text-[var(--bg-70)]" : "text-[var(--ink-65)]"
              }`}
            >
              Domain Architecture &amp; Workflow
            </span>
            <span
              className={`font-mono text-[12px] uppercase tracking-wider px-2 py-0.5 rounded-[4px] border ${
                isDark
                  ? "text-[var(--bg-55)] border-[rgba(248,241,229,0.15)]"
                  : "text-[var(--ink-65)] border-[var(--ink-15)]"
              }`}
            >
              Illustrative Pod Process
            </span>
          </div>

          {/* Workflow Diagram: 4 nodes */}
          <div className="my-6 pt-2 pb-4">
            <div className="relative">
              {/* Connecting line */}
              <div
                className={`hidden sm:block absolute top-6 left-6 right-6 h-[2px] z-0 ${
                  isDark ? "bg-[rgba(248,241,229,0.15)]" : "bg-[var(--ink-15)]"
                }`}
              />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
                {workflow.map((node, nodeIdx) => {
                  const IconComp = node.icon;
                  return (
                    <div
                      key={nodeIdx}
                      className={`flex flex-col items-center text-center p-3 sm:p-2 rounded-[10px] ${
                        isDark
                          ? "bg-[rgba(30,22,16,0.60)] border border-[rgba(248,241,229,0.10)] sm:border-0"
                          : "bg-[var(--bg)] border border-[var(--ink-12)] sm:border-0"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-[10px] bg-[var(--accent-14)] text-[var(--accent)] border border-[var(--accent-25)] flex items-center justify-center shrink-0 mb-3 shadow-sm">
                        <IconComp className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <span
                        className={`font-sans text-[14px] font-semibold leading-snug ${
                          isDark ? "text-[var(--bg)]" : "text-[var(--ink)]"
                        }`}
                      >
                        {node.label}
                      </span>
                      <span
                        className={`font-mono text-[13px] leading-tight mt-1 ${
                          isDark ? "text-[var(--bg-55)]" : "text-[var(--ink-65)]"
                        }`}
                      >
                        {node.sublabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3 Pod Deliverables Bullets */}
          <div
            className={`pt-6 border-t mb-6 ${
              isDark ? "border-[rgba(248,241,229,0.12)]" : "border-[var(--ink-15)]"
            }`}
          >
            <span
              className={`font-mono text-[13px] font-semibold uppercase tracking-[0.08em] block mb-3 ${
                isDark ? "text-[var(--bg-70)]" : "text-[var(--ink-65)]"
              }`}
            >
              Included Operational Capabilities
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {bullets.map((bullet, bIdx) => (
                <div
                  key={bIdx}
                  className={`flex items-start gap-2.5 text-[14px] leading-snug font-sans ${
                    isDark ? "text-[var(--bg-85)]" : "text-[var(--ink-80)]"
                  }`}
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

          {/* Footer of Card: Disclaimer & Internal Link */}
          <div
            className={`pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isDark ? "border-[rgba(248,241,229,0.12)]" : "border-[var(--ink-15)]"
            }`}
          >
            <p
              className={`text-[13px] font-sans max-w-xl leading-relaxed ${
                isDark ? "text-[var(--bg-55)]" : "text-[var(--ink-65)]"
              }`}
            >
              {disclaimer}
            </p>
            <Link
              href={href}
              className={`btn-solvantra-primary h-[46px] px-6 text-[14px] shrink-0 font-medium inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[6px] shadow-sm`}
            >
              <span>{linkText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndustrySections() {
  return (
    <>
      {/* SECTION 2: Healthcare / Medical Services */}
      <SectorBlock
        id="healthcare"
        num="02"
        sectorTag="HEALTHCARE / MEDICAL SERVICES"
        heading="Healthcare Business Solutions"
        subtitle="Dental & Medical Revenue Cycle Operations"
        summary="Explore Solvantra Global's healthcare-focused business solutions designed to support operational efficiency, patient experience, and technology-enabled growth."
        description="Our dedicated healthcare operational pods manage the end-to-end administrative lifecycle — from front-desk patient registration and electronic insurance eligibility verification to clean claim preparation, status tracking, and disciplined denial resolution. We operate as an extension of your practice with strict data hygiene and structured SOPs, keeping revenue cycles healthy and accounts receivable low."
        workflow={[
          { label: "Intake", sublabel: "Patient registration", icon: UserCheck },
          { label: "Verify Eligibility", sublabel: "Payer confirmed", icon: ShieldCheck },
          { label: "Claim Prep", sublabel: "Clean electronic submission", icon: FileCheck },
          { label: "Resolution", sublabel: "AR closed & reconciled", icon: CheckCircle2 },
        ]}
        bullets={[
          "Insurance Eligibility & Benefits Verification",
          "Clean Claim Preparation & Electronic Submission",
          "Disciplined Denial Triage & Accounts Receivable Resolution",
        ]}
        disclaimer="Notice: Solvantra Global provides operational, billing, scheduling, and administrative coordination support only. We do not provide medical treatment, diagnosis, or clinical care."
        href="/healthcare"
        linkText="Explore Healthcare Solutions"
        theme="dark"
      />

      {/* SECTION 3: Real Estate Services */}
      <SectorBlock
        id="real-estate"
        num="03"
        sectorTag="REAL ESTATE SERVICES"
        heading="Real Estate Business Solutions"
        subtitle="Estate Agents, Lettings & Property Managers"
        summary="Discover Solvantra Global's real estate business solutions for improved operations, client experiences, and technology-enabled business growth."
        description="Never miss an enquiry or viewing request. Solvantra Global provides 24/7 multi-channel enquiry response across portals, phone, and chat; diary-synchronized viewing and market appraisal booking; tenant and landlord communication; maintenance issue triage; and structured statutory compliance tracking — all adhering strictly to your agency's brand voice and approved workflows."
        workflow={[
          { label: "Enquiry", sublabel: "Omnichannel inbound", icon: Headphones },
          { label: "Qualify", sublabel: "Criteria verified", icon: UserCheck },
          { label: "Book Viewing", sublabel: "Diary synchronized", icon: Calendar },
          { label: "CRM Log", sublabel: "Audit history", icon: ClipboardCheck },
        ]}
        bullets={[
          "24/7 Enquiry Handling & Diary Bookings",
          "Maintenance Helpdesk & Urgency Triage",
          "Statutory Compliance Administration & Record Keeping",
        ]}
        disclaimer="Notice: Solvantra Global supports agency operational workflows and compliance admin. We do not provide legal advice or licensed property brokerage representation."
        href="/real-estate"
        linkText="Explore Real Estate Solutions"
        theme="light"
      />

      {/* SECTION 4: Home Services */}
      <SectorBlock
        id="home-services"
        num="04"
        sectorTag="HOME SERVICES"
        heading="Home Services Business Solutions"
        subtitle="HVAC, Plumbing, Electrical, Field Trades & Care Agencies"
        summary="Explore Solvantra Global's solutions for home service businesses, focused on operational efficiency, customer experience, and business growth."
        description="Turn every ring into a booked job. We provide 24/7 live inbound front desk coverage, intelligent appointment scheduling optimized into your CRM calendar, emergency technician dispatch coordination, customer follow-up on unbooked estimates, and review management to ensure your field trade or home care business runs smoothly around the clock."
        workflow={[
          { label: "Call", sublabel: "Immediate response", icon: PhoneCall },
          { label: "Schedule", sublabel: "Calendar slot optimization", icon: Calendar },
          { label: "Dispatch", sublabel: "Technician routed", icon: Truck },
          { label: "Follow-Up", sublabel: "Review & invoice", icon: CheckCircle2 },
        ]}
        bullets={[
          "24/7 Live Inbound Front Desk & Triage",
          "Intelligent Calendar & Software Dispatching",
          "Home Care & Field Trade Coordination",
        ]}
        disclaimer="Notice: Solvantra Global provides operational front-desk, scheduling, customer communication, and coordination support only."
        href="/home-services"
        linkText="Explore Home Services Solutions"
        theme="dark"
      />
    </>
  );
}
