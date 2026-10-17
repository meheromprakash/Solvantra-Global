"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Check,
  PhoneCall,
  Clock,
  FileCheck,
  Wrench,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  Lock,
  X,
  Layers,
  Sparkles,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function RealEstatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hero interactive log ticker state
  const [activeLogRow, setActiveLogRow] = useState(0);

  // Audience Explorer state
  const [selectedAudienceIndex, setSelectedAudienceIndex] = useState(0);
  const [userInteractedAudience, setUserInteractedAudience] = useState(false);

  // Accordion state for What We Handle (Section 6)
  const [openCol1Index, setOpenCol1Index] = useState<number | null>(null);
  const [openCol2Index, setOpenCol2Index] = useState<number | null>(null);

  // Mobile Progressive Disclosure States (< 768px)
  const [openPillarIndex, setOpenPillarIndex] = useState<number | null>(0);
  const [openMobileHandleIndex, setOpenMobileHandleIndex] = useState<number | null>(0);
  const [showWithoutCoverage, setShowWithoutCoverage] = useState<Record<number, boolean>>({});
  const [showInformedDetails, setShowInformedDetails] = useState<Record<number, boolean>>({});
  const [openHabitIndex, setOpenHabitIndex] = useState<number | null>(0);
  const [openOnboardingIndex, setOpenOnboardingIndex] = useState<number | null>(0);

  // Regulatory reference tab & collapse state (Section 10)
  const [isRegOpen, setIsRegOpen] = useState(false);
  const [regTab, setRegTab] = useState<"england" | "us">("england");

  // Hero ticker cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogRow((prev) => (prev + 1) % 5);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Audience explorer auto-advance every 8s until user interacts
  useEffect(() => {
    if (userInteractedAudience) return;
    const timer = setInterval(() => {
      setSelectedAudienceIndex((prev) => (prev + 1) % 6);
    }, 8000);
    return () => clearInterval(timer);
  }, [userInteractedAudience]);

  // Section 1: Hero Log Rows
  const heroLogRows = [
    { time: "22:45", text: "Viewing booked · Diary updated" },
    { time: "02:10", text: "Maintenance report logged · Urgent" },
    { time: "03:30", text: "Portal enquiry answered · Lead logged" },
    { time: "06:50", text: "Certificate reminder raised · Your team" },
    { time: "07:15", text: "Complaint acknowledged · Escalated" },
  ];

  // Section 3: What You Get (4 Pillars)
  const fourPillars = [
    {
      num: "01",
      title: "Never miss an enquiry",
      points: [
        "Calls, portal enquiries, web forms and chats.",
        "Answered in your agency's name, any hour.",
        "Every lead logged with full details.",
      ],
    },
    {
      num: "02",
      title: "Viewings and valuations booked",
      points: [
        "Appointments placed straight into your diary.",
        "Confirmations and reminders to cut no-shows.",
        "Negotiators briefed before each visit.",
      ],
    },
    {
      num: "03",
      title: "Tenants and landlords looked after",
      points: [
        "Maintenance reports logged and triaged.",
        "Contractors booked and progress updated.",
        "Clear, timely updates to every party.",
      ],
    },
    {
      num: "04",
      title: "Compliance support built in",
      points: [
        "Certificate and deadline reminders.",
        "Document chasing and audit-ready records.",
        "Scripts that follow your approved policies.",
      ],
    },
  ];

  // Section 4: Built for the Full Property Ecosystem (6 Audiences)
  const audienceList = [
    {
      id: "online-hybrid",
      title: "Online & Hybrid Estate Agents",
      bullets: [
        "Sales and lettings enquiries from portals and web",
        "Valuation and viewing bookings straight to your diary",
        "Applicant follow-up and progress updates",
      ],
    },
    {
      id: "letting-agencies",
      title: "Letting Agencies",
      bullets: [
        "Tenant applications and referencing support",
        "Move-in and renewal coordination",
        "Landlord and tenant ongoing communication",
      ],
    },
    {
      id: "property-mgmt",
      title: "Property Management Companies",
      bullets: [
        "Maintenance helpdesk and contractor booking",
        "Tenant queries and issue reporting",
        "Routine property inspections scheduling",
      ],
    },
    {
      id: "block-managers",
      title: "Block & Portfolio Managers",
      bullets: [
        "Resident and leaseholder enquiry desk",
        "Out-of-hours emergency intake and escalation",
        "Service charge and notice queries",
      ],
    },
    {
      id: "portfolio-landlords",
      title: "Landlords with Larger Portfolios",
      bullets: [
        "Single point of contact for tenants",
        "Repair logging and follow-up until closure",
        "Compliance date and certificate tracking",
      ],
    },
    {
      id: "student-btr",
      title: "Student & Build-to-Rent Operators",
      bullets: [
        "High-volume seasonal enquiries and intake",
        "Viewing and tenancy start coordination",
        "Resident support and out-of-hours coverage",
      ],
    },
  ];

  // Section 5: Is Solvantra Right For You (4 Signals)
  const signals = [
    {
      icon: Clock,
      text: "Enquiries and maintenance calls arrive out of hours and go unanswered.",
    },
    {
      icon: Users,
      text: "Your team is stretched across sales, lettings, maintenance and admin.",
    },
    {
      icon: FileText,
      text: "Compliance dates live in spreadsheets, inboxes or people's heads.",
    },
    {
      icon: BarChart3,
      text: "Your portfolio is growing faster than your headcount.",
    },
  ];

  // Section 6: What We Handle (9 Services)
  const handleServices = [
    {
      num: "01",
      title: "24/7 Enquiry Handling",
      summary: "Fast response to every call, portal enquiry and chat.",
      detail:
        "Every call, portal enquiry, web form and chat answered fast. Needs captured, applicants qualified on lawful, relevant criteria and everything logged in your CRM.",
    },
    {
      num: "02",
      title: "Viewing & Valuation Booking",
      summary: "Direct diary scheduling with confirmations and brief.",
      detail:
        "Appointments booked, confirmed and reminded, with rescheduling handled and the right negotiator briefed before every visit.",
    },
    {
      num: "03",
      title: "Applicant & Tenant Onboarding",
      summary: "Document and reference chasing through your secure portal.",
      detail:
        "Chasing documents, references, ID and signed paperwork through your own secure process, with a clear record of what is outstanding.",
    },
    {
      num: "04",
      title: "Maintenance Helpdesk",
      summary: "Triage, contractor booking and status tracking to completion.",
      detail:
        "Repair reports logged, urgency triaged, contractors booked and tenant and landlord kept updated until the job is closed.",
    },
    {
      num: "05",
      title: "Landlord & Vendor Updates",
      summary: "Viewing feedback and scheduled reports in your brand tone.",
      detail:
        "Viewing feedback, progress updates and routine messages sent on your schedule and in your brand's tone.",
    },
    {
      num: "06",
      title: "Compliance Admin Support",
      summary: "Reminders and logs for certificate expiries and deposit deadlines.",
      detail:
        "Reminders and tracking for certificate expiries, deposit deadlines and document renewals, with records ready for audit.",
    },
    {
      num: "07",
      title: "Payment Reminders",
      summary: "Respectful policy-aligned reminders with instant escalation.",
      detail:
        "Polite reminders following your policy and escalation rules, with anything sensitive passed directly to your team.",
    },
    {
      num: "08",
      title: "Complaints Intake",
      summary: "Logged, acknowledged and escalated with an auditable trail.",
      detail:
        "Complaints logged, acknowledged and escalated to the right person within your set timescales, building an auditable trail.",
    },
    {
      num: "09",
      title: "Reporting",
      summary: "Regular data on volumes, response times and task statuses.",
      detail:
        "Enquiry volumes, bookings, response times, maintenance status and compliance task status shared on a regular schedule.",
    },
  ];

  // Section 7: Why 24/7 Matters Comparison
  const why247Rows = [
    {
      time: "Nights",
      without: "Enquiries and emergency reports go to voicemail.",
      withSolvantra: "Live answer; emergencies escalated immediately.",
    },
    {
      time: "Weekends",
      without: "Buyers and tenants move on to the next agent.",
      withSolvantra: "Viewings booked directly for the next available slot.",
    },
    {
      time: "Holidays",
      without: "Office is closed, unresolved tenant issues pile up.",
      withSolvantra: "Full continuous coverage as normal.",
    },
    {
      time: "Peak season",
      without: "Phones overwhelmed, frustrated callers hang up.",
      withSolvantra: "Extra capacity absorbs and handles the spike.",
    },
  ];

  // Section 8: Informed Matrix
  const informedMatrix = [
    {
      stage: "Enquiry",
      applicant: "Fast reply and clear next steps",
      landlord: "Interest summary on request",
      team: "Lead logged with full criteria in CRM",
    },
    {
      stage: "Viewing",
      applicant: "Confirmation and timely reminder",
      landlord: "Viewing booked and feedback shared",
      team: "Diary updated, negotiator briefed",
    },
    {
      stage: "Onboarding",
      applicant: "List of documents needed and chasers",
      landlord: "Progress updates relayed",
      team: "Outstanding items flagged for review",
    },
    {
      stage: "Repairs",
      applicant: "Report acknowledged, contractor attendance time confirmed",
      landlord: "Issue and cost approvals relayed",
      team: "Job log with urgency and status",
    },
    {
      stage: "Compliance",
      applicant: "Access visits arranged politely",
      landlord: "Renewal reminders sent",
      team: "Actionable task list ahead of expiry dates",
    },
    {
      stage: "Complaints",
      applicant: "Formal acknowledgement and expected timescale",
      landlord: "Informed where relevant",
      team: "Escalated immediately with full background record",
    },
  ];

  // Section 9: Urgency Triage Rows
  const triageRows = [
    {
      priority: "Emergency",
      chipClass: "bg-[var(--primary)] text-[var(--on-dark)] font-bold",
      examples: "Gas smell, major leak or flooding, fire or storm damage, security breach.",
      action:
        "Safety advice from your approved script, immediate escalation to your on-call contact or emergency contractor.",
    },
    {
      priority: "Urgent",
      chipClass: "bg-[var(--accent)] text-[var(--primary)] font-bold",
      examples: "No heating or hot water, electrical fault, broken lock.",
      action:
        "Contractor booked within your target time, tenant and landlord updated with expected attendance.",
    },
    {
      priority: "Routine",
      chipClass: "bg-[var(--highlight)] text-[var(--primary)] font-bold",
      examples: "Dripping tap, appliance fault, cosmetic repair.",
      action:
        "Logged, approved with the landlord where needed, scheduled and tracked through to completion.",
    },
  ];

  // Section 10: 8 Habits
  const regulatoryHabits = [
    {
      title: "Tenant fees and advertised rent",
      desc: "Agents follow scripts that quote only your published fees and never discuss payments outside your approved list. Offers above the advertised rent are not encouraged or accepted.",
    },
    {
      title: "Fair treatment of applicants",
      desc: "Qualifying questions are limited to approved, lawful criteria. Agents are trained never to screen out applicants because of children or benefits.",
    },
    {
      title: "Deposit and document deadlines",
      desc: "Tasks and reminders are raised for your team so deposit protection and prescribed information steps are not missed.",
    },
    {
      title: "Safety certificates and checks",
      desc: "We track gas safety, electrical safety, EPC and alarm dates, chase landlords and contractors, and book renewals before expiry.",
    },
    {
      title: "ID, referencing and Right to Rent",
      desc: "We chase tenants for documents through your secure process and flag gaps. Checks themselves stay with your authorised staff.",
    },
    {
      title: "Maintenance and hazards",
      desc: "Reports are logged with time and detail, urgent hazards are escalated at once, and updates follow until closure.",
    },
    {
      title: "Complaints",
      desc: "Every complaint is logged, acknowledged and escalated within your timescales, building a clear record.",
    },
    {
      title: "Call recording and data",
      desc: "Recording notices read out where you require them. Access is limited to trained staff under confidentiality terms.",
    },
  ];

  // Section 10: Regulatory Tables
  const englandRegulations = [
    {
      area: "Tenant fees",
      requirement:
        "Only permitted payments may be charged; holding deposit rules must be followed (up to £5,000 for a first breach; up to £30,000 or prosecution for a second).",
      help: "Quoting only permitted fees; zero unauthorized charges.",
    },
    {
      area: "Client money protection",
      requirement:
        "Agents holding client money must belong to an approved scheme and display their certificate (up to £30,000 for no membership; up to £5,000 for not publishing the certificate).",
      help: "Certificate tracking and scheme renewal alerts.",
    },
    {
      area: "Redress scheme",
      requirement:
        "Membership of an approved redress scheme (up to £5,000).",
      help: "Redress membership verification and annual reminders.",
    },
    {
      area: "Fee transparency",
      requirement:
        "Fees and scheme memberships shown in the office, on the website and on portals (up to £5,000 per breach).",
      help: "Consistent fee quote scripts matched to published schedules.",
    },
    {
      area: "Deposit protection",
      requirement:
        "Deposits protected in an approved scheme, prescribed information given within 30 days (enforcement action and tenant claims).",
      help: "30-day statutory deposit and PI deadline tracking.",
    },
    {
      area: "Renters' Rights Act 2025/2026",
      requirement:
        "No accepting offers above advertised rent; no refusing tenants because of children or benefits; information sheet to existing tenants by 31 May 2026 (penalties up to £7,000; up to £40,000 for severe offences).",
      help: "Script enforcement against rent bidding; objective criteria screening; tenant notice logs.",
    },
    {
      area: "Safety and checks",
      requirement:
        "Gas safety, electrical safety (EICR), EPC, smoke and CO alarms, Right to Rent and anti-money-laundering checks (serious breaches lead to prosecution).",
      help: "Expiry calendar chasing landlords and arranging contractor renewals.",
    },
  ];

  const usRegulations = [
    {
      area: "Fair Housing Act",
      requirement:
        "Non-discriminatory qualification, neutral objective criteria, no screening based on protected classes.",
      help: "Standardized script templates following federal and state guidelines.",
    },
    {
      area: "TCPA & Consent",
      requirement:
        "Telephone Consumer Protection Act rules for SMS and calling outreach; recording disclosure mandates.",
      help: "Mandatory call recording notices read out; consent-aware outreach.",
    },
    {
      area: "Security Deposits",
      requirement:
        "State-by-state return windows (typically 14–30 days) and statutory itemization rules.",
      help: "Milestone tracking and reminder alerts for property accounting staff.",
    },
    {
      area: "Habitability & Emergencies",
      requirement:
        "Implied warranty of habitability; statutory emergency heat, water and security response times.",
      help: "24/7 immediate triage and escalation to designated emergency contractors.",
    },
  ];

  return (
    <div data-sector="property" className="flex flex-col w-full">
      {/* =========================================================================
          1. HERO (Dark Primary: --primary #12372A, Layout 7/5, No Image)
         ========================================================================= */}
      <section className="sector-dark w-full pt-32 pb-20 md:pt-40 md:pb-[112px] relative overflow-hidden">
        {/* Fine grid (currentColor at 5%, 48px) fading to edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(248, 245, 236, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(248, 245, 236, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Soft accent radial glow (accent at 20%, ~800px) */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] lg:w-[850px] h-[700px] lg:h-[850px] rounded-full pointer-events-none select-none z-0 blur-[100px] lg:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(214, 190, 138, 0.20) 0%, rgba(214, 190, 138, 0.04) 50%, transparent 70%)",
          }}
        />

        {/* 2px accent hairline at the bottom */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, rgba(214, 190, 138, 0.65) 0%, rgba(214, 190, 138, 0.20) 60%, transparent 100%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Mono Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold">
                  SOLVANTRA PROPERTY SERVICES · ALWAYS ON. ALWAYS COMPLIANT.
                </span>
              </div>

              {/* H1 with italic accent on "Front Office" */}
              <h1 className="text-[clamp(44px,5.8vw,76px)] font-serif font-medium leading-[1.04] tracking-[-0.03em] text-[var(--on-dark)] mb-6">
                Your 24/7{" "}
                <span className="italic text-[var(--accent)] font-normal">
                  Front Office
                </span>{" "}
                for Property.
              </h1>

              {/* Subline */}
              <p className="text-[17px] sm:text-[18px] text-[var(--on-dark-80)] leading-[1.65] max-w-[560px] font-sans mb-8">
                24/7 enquiry handling, lettings support and compliance admin for online estate
                agents, letting agencies, and property management companies.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="sector-btn-on-dark h-[48px] px-7 text-[15px]"
                >
                  Book a Discovery Call
                </button>
                <a
                  href="#services-breakdown"
                  className="sector-btn-secondary h-[48px] px-6 text-[15px]"
                >
                  Explore What We Handle
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Illustrative Front Office Log Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[var(--on-dark-6)] border border-[var(--on-dark-15)] rounded-[16px] p-6 sm:p-7 relative backdrop-blur-sm shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--on-dark-15)] mb-5">
                  <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold">
                    AFTER-HOURS LOG · ILLUSTRATIVE
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                </div>

                {/* 5 Log Rows with Loop Indicator */}
                <div className="space-y-2.5 font-mono text-[14px]">
                  {heroLogRows.map((row, index) => {
                    const isActive = activeLogRow === index;
                    return (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-between gap-3 ${
                          isActive
                            ? "bg-[rgba(214,190,138,0.12)] border-[var(--accent)] text-[var(--on-dark)]"
                            : "bg-[rgba(248,245,236,0.03)] border-[var(--on-dark-15)] text-[var(--on-dark-75)]"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 ${
                              isActive ? "bg-[var(--accent)]" : "bg-[var(--on-dark-35)]"
                            }`}
                          />
                          <span className="truncate">{row.text}</span>
                        </div>
                        <span className="text-[var(--accent)] shrink-0 font-semibold text-[13px]">
                          {row.time}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-4 mt-4 border-t border-[var(--on-dark-15)] flex items-center justify-between text-[14px] font-mono text-[var(--on-dark-65)]">
                  <span>Continuous 24/7 Intake</span>
                  <span className="text-[var(--accent)]">Live CRM Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. REALITY ("01 / THE OPERATIONAL REALITY") LIGHT SECTION
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
            <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
              01 / THE OPERATIONAL REALITY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-14">
            {/* Left Sticky Heading (6 cols) */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)]">
                Enquiries Never Stop. <br />
                Neither Should Your Front Office.
              </h2>
            </div>

            {/* Right Paragraphs (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              <p>
                Online and hybrid estate agents and property managers run lean teams, yet enquiries
                never stop. Buyers and tenants browse at night, landlords report problems at
                weekends, and a tenant with a leak calls at 2 a.m.
              </p>
              <p>
                Solvantra gives you an always-on team that answers, books, logs and follows up, and
                keeps your compliance admin on track so small gaps do not turn into costly penalties.
              </p>
            </div>
          </div>

          {/* Dark Panel: TWO RISKS, ONE PARTNER (--secondary #1B5140) */}
          <div className="bg-[var(--secondary)] text-[var(--on-dark)] p-8 sm:p-10 rounded-[12px] border border-[var(--accent)]/30 shadow-lg relative overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 bg-[var(--accent)]"
            />

            <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold block mb-2">
              TWO RISKS, ONE PARTNER
            </span>
            <h3 className="text-[26px] sm:text-[28px] font-serif font-medium text-[var(--on-dark)] mb-6">
              Protecting Your Revenue &amp; Reputation
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 font-sans">
              <div className="p-4 rounded-lg bg-[rgba(248,245,236,0.04)] border border-[var(--on-dark-15)] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--primary)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[14px]">
                  ✕
                </div>
                <p className="text-[15px] text-[var(--on-dark-80)] leading-relaxed">
                  Missed enquiries cost you instructions and tenants.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[rgba(248,245,236,0.04)] border border-[var(--on-dark-15)] flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[var(--primary)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[14px]">
                  ✕
                </div>
                <p className="text-[15px] text-[var(--on-dark-80)] leading-relaxed">
                  Missed compliance steps cost you fines, disputes and reputation.
                </p>
              </div>
            </div>

            <div className="pt-5 border-t border-[var(--on-dark-15)] flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--accent)] text-[var(--primary)] font-mono text-[14px] font-bold uppercase tracking-wider">
                <Check className="w-4 h-4 stroke-[3]" /> Solvantra covers both.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHAT YOU GET ("02 / COVERAGE") LIGHT WITH HIGHLIGHT 14% TINT
         ========================================================================= */}
      <section className="sector-light-tinted-14 w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                02 / COVERAGE
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              What You Get With Solvantra
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              Built specifically to give property businesses round-the-clock coverage and tighter
              compliance without growing a large in-house team.
            </p>
          </div>

          {/* Desktop/Tablet 4 Columns (768px and up) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 border-y border-[var(--primary-15)] divide-y md:divide-y-0 md:divide-x divide-[var(--primary-15)]">
            {fourPillars.map((pillar) => (
              <div key={pillar.num} className="p-8 lg:p-9 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[48px] font-light leading-none text-[var(--primary-35)] block mb-6 select-none">
                    {pillar.num}
                  </span>
                  <div className="w-12 h-12 rounded-[8px] bg-[var(--accent)]/15 text-[var(--primary)] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-[var(--secondary)]" />
                  </div>
                  <h3 className="text-[20px] font-serif font-semibold text-[var(--primary)] mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-3 font-sans text-[14px] leading-relaxed text-[var(--primary-80)]">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold text-[var(--secondary)]">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Compact Accordion List (Under 768px) */}
          <div className="md:hidden border-y border-[var(--primary-15)] divide-y divide-[var(--primary-15)]">
            {fourPillars.map((pillar, index) => {
              const isOpen = openPillarIndex === index;
              return (
                <div key={pillar.num}>
                  <button
                    type="button"
                    onClick={() => setOpenPillarIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`pillar-content-${pillar.num}`}
                    className="w-full min-h-[60px] py-4 px-2 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <span className="font-mono text-[14px] font-semibold text-[var(--secondary)] shrink-0 w-6">
                        {pillar.num}
                      </span>
                      <h3 className="font-serif text-[18px] font-medium text-[var(--primary)] leading-snug">
                        {pillar.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--primary-65)] shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? "rotate-180 text-[var(--secondary)]" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`pillar-content-${pillar.num}`}
                    className={`grid transition-all duration-200 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden px-2 pt-1">
                      <ul className="space-y-2.5 font-sans text-[14px] leading-relaxed text-[var(--primary-80)]">
                        {pillar.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="font-bold text-[var(--secondary)] mt-0.5">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. BUILT FOR ("03 / WHO WE SERVE") INTERACTIVE AUDIENCE EXPLORER
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                03 / WHO WE SERVE
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              Built for the Full Property Ecosystem
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              Tailored workflows engineered for every major property operating model.
            </p>
          </div>

          {/* Mobile Horizontal Scrollable Pills */}
          <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
            {audienceList.map((aud, index) => (
              <button
                key={aud.id}
                type="button"
                onClick={() => {
                  setSelectedAudienceIndex(index);
                  setUserInteractedAudience(true);
                }}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-[14px] font-medium transition-colors ${
                  selectedAudienceIndex === index
                    ? "bg-[var(--primary)] text-[var(--on-dark)]"
                    : "bg-[var(--primary-6)] text-[var(--primary)] border border-[var(--primary-15)]"
                }`}
              >
                {aud.title}
              </button>
            ))}
          </div>

          {/* Desktop Interactive Layout (Left: 6 vertical selectable rows, Right: Detail Panel) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Selectable Rows */}
            <div
              className="hidden md:flex lg:col-span-5 flex-col space-y-2"
              role="tablist"
              aria-label="Property Audiences"
            >
              {audienceList.map((aud, index) => {
                const isSelected = selectedAudienceIndex === index;
                return (
                  <button
                    key={aud.id}
                    role="tab"
                    id={`tab-${aud.id}`}
                    aria-selected={isSelected}
                    aria-controls={`panel-${aud.id}`}
                    type="button"
                    onClick={() => {
                      setSelectedAudienceIndex(index);
                      setUserInteractedAudience(true);
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between cursor-pointer border ${
                      isSelected
                        ? "bg-[var(--primary)] text-[var(--on-dark)] border-[var(--primary)] shadow-sm"
                        : "bg-[var(--light)] text-[var(--primary)] border-[var(--primary-15)] hover:bg-[var(--primary-6)]"
                    }`}
                  >
                    <span className="font-serif text-[17px] font-medium">{aud.title}</span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[var(--accent)] translate-x-1" : "text-[var(--primary-35)]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right 7 Cols: Cross-Fading Detail Panel */}
            <div className="lg:col-span-7">
              <div
                id={`panel-${audienceList[selectedAudienceIndex].id}`}
                role="tabpanel"
                aria-labelledby={`tab-${audienceList[selectedAudienceIndex].id}`}
                className="sector-card-light p-8 sm:p-10 min-h-[320px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--secondary)] font-semibold">
                      OPERATIONAL COVERAGE
                    </span>
                    <span className="font-mono text-[14px] text-[var(--primary-65)]">
                      0{selectedAudienceIndex + 1} / 06
                    </span>
                  </div>

                  <h3 className="text-[26px] sm:text-[28px] font-serif font-semibold text-[var(--primary)] mb-6">
                    {audienceList[selectedAudienceIndex].title}
                  </h3>

                  <div className="space-y-4 font-sans text-[16px] text-[var(--primary-80)]">
                    {audienceList[selectedAudienceIndex].bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="w-5 h-5 rounded-full bg-[var(--highlight)] text-[var(--primary)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--primary-15)] flex items-center justify-between text-[14px] font-sans">
                  <span className="text-[var(--primary-65)]">Auto-synced into your existing systems</span>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="sector-link text-[var(--primary)] font-semibold"
                  >
                    Discuss this workflow →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. IS SOLVANTRA RIGHT FOR YOU? (SLIM BAND: HIGHLIGHT 22% TINT)
         ========================================================================= */}
      <section className="sector-light-tinted-22 w-full py-16 md:py-20 border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-[32px] sm:text-[38px] font-serif font-medium leading-[1.1] text-[var(--primary)]">
              Is Solvantra right for you?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-[var(--primary-15)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--primary-15)]">
            {signals.map((sig, idx) => {
              const IconComp = sig.icon;
              return (
                <div key={idx} className="p-6 sm:p-7 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[8px] bg-[var(--primary)] text-[var(--on-dark)] flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <p className="text-[15px] font-sans text-[var(--primary)] leading-relaxed font-medium">
                    {sig.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT WE HANDLE ("04 / WHAT WE HANDLE") LIGHT ACCORDION INDEX
         ========================================================================= */}
      <section
        id="services-breakdown"
        className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)] scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                04 / WHAT WE HANDLE
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              What We Handle For You
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              Support across the full journey, from the first enquiry to the end of the tenancy.
            </p>
          </div>

          {/* 9-Row Numbered Index in 2 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 border-t border-[var(--primary-15)]">
            {/* Column 1: Items 0 to 4 */}
            <div className="divide-y divide-[var(--primary-15)]">
              {handleServices.slice(0, 5).map((srv, idx) => {
                const isOpen = openCol1Index === idx;
                return (
                  <div
                    key={srv.num}
                    className={`transition-colors duration-200 ${
                      isOpen ? "bg-[var(--primary)] text-[var(--on-dark)]" : "hover:bg-[var(--primary-6)] text-[var(--primary)]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenCol1Index(isOpen ? null : idx)}
                      className="w-full text-left py-5 px-4 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`font-mono text-[14px] font-semibold shrink-0 mt-0.5 ${
                            isOpen ? "text-[var(--accent)]" : "text-[var(--primary-65)]"
                          }`}
                        >
                          {srv.num}
                        </span>
                        <div>
                          <h3
                            className={`text-[20px] font-serif font-semibold leading-snug ${
                              isOpen ? "text-[var(--on-dark)]" : "text-[var(--primary)]"
                            }`}
                          >
                            {srv.title}
                          </h3>
                          <p
                            className={`text-[14px] mt-1 font-sans leading-relaxed ${
                              isOpen ? "text-[var(--on-dark-75)]" : "text-[var(--primary-80)]"
                            }`}
                          >
                            {srv.summary}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 mt-1 ${
                          isOpen ? "rotate-180 text-[var(--accent)]" : "text-[var(--primary-65)]"
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 pt-1 text-[15px] font-sans leading-relaxed text-[var(--on-dark-80)] border-t border-[var(--on-dark-15)]">
                        {srv.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Column 2: Items 5 to 8 */}
            <div className="divide-y divide-[var(--primary-15)] border-t lg:border-t-0 border-[var(--primary-15)]">
              {handleServices.slice(5).map((srv, idx) => {
                const isOpen = openCol2Index === idx;
                return (
                  <div
                    key={srv.num}
                    className={`transition-colors duration-200 ${
                      isOpen ? "bg-[var(--primary)] text-[var(--on-dark)]" : "hover:bg-[var(--primary-6)] text-[var(--primary)]"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenCol2Index(isOpen ? null : idx)}
                      className="w-full text-left py-5 px-4 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`font-mono text-[14px] font-semibold shrink-0 mt-0.5 ${
                            isOpen ? "text-[var(--accent)]" : "text-[var(--primary-65)]"
                          }`}
                        >
                          {srv.num}
                        </span>
                        <div>
                          <h3
                            className={`text-[20px] font-serif font-semibold leading-snug ${
                              isOpen ? "text-[var(--on-dark)]" : "text-[var(--primary)]"
                            }`}
                          >
                            {srv.title}
                          </h3>
                          <p
                            className={`text-[14px] mt-1 font-sans leading-relaxed ${
                              isOpen ? "text-[var(--on-dark-75)]" : "text-[var(--primary-80)]"
                            }`}
                          >
                            {srv.summary}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 mt-1 ${
                          isOpen ? "rotate-180 text-[var(--accent)]" : "text-[var(--primary-65)]"
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 pt-1 text-[15px] font-sans leading-relaxed text-[var(--on-dark-80)] border-t border-[var(--on-dark-15)]">
                        {srv.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. WHY 24/7 MATTERS (DARK SECONDARY: --secondary #1B5140)
         ========================================================================= */}
      <section className="sector-dark-secondary w-full py-16 md:py-[112px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--on-dark)] mb-4">
              Why 24/7 matters
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--on-dark-80)] leading-[1.65] font-sans">
              Enquiries and emergency repairs follow tenant and buyer schedules, not 9-to-5 office hours.
            </p>
          </div>

          {/* Desktop 3-Column Comparison Matrix */}
          <div className="hidden md:grid grid-cols-12 gap-6 items-stretch">
            {/* Left 7 Cols (Time: 3 cols, Without: 4 cols) */}
            <div className="col-span-7 flex flex-col justify-between">
              <div className="grid grid-cols-7 gap-4 pb-4 border-b border-[var(--on-dark-15)] font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--on-dark-65)] font-semibold">
                <div className="col-span-3">Time Window</div>
                <div className="col-span-4">Without Coverage</div>
              </div>

              {why247Rows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-7 gap-4 py-6 border-b border-[var(--on-dark-15)] items-center min-h-[88px]"
                >
                  <div className="col-span-3 font-serif text-[20px] font-medium text-[var(--on-dark)]">
                    {row.time}
                  </div>
                  <div className="col-span-4 text-[15px] font-sans text-[var(--on-dark-75)] flex items-center gap-2.5">
                    <X className="w-4 h-4 text-[var(--on-dark-35)] shrink-0" />
                    <span>{row.without}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right 5 Cols: With Solvantra Lifted Light Panel */}
            <div className="col-span-5 bg-[var(--light)] text-[var(--primary)] rounded-[16px] p-7 shadow-2xl border border-[var(--accent)]/40 flex flex-col justify-between -my-4 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-[var(--primary-12)]">
                <span className="font-serif text-[20px] font-semibold text-[var(--primary)]">
                  With Solvantra
                </span>
                <span className="px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--primary)] font-mono text-[13px] font-bold uppercase tracking-wider">
                  Always Live
                </span>
              </div>

              {why247Rows.map((row, idx) => (
                <div
                  key={idx}
                  className="py-5 border-b border-[var(--primary-12)] last:border-b-0 min-h-[88px] flex items-center gap-3 text-[15px] font-sans font-medium text-[var(--primary)]"
                >
                  <div className="w-6 h-6 rounded-full bg-[var(--highlight)] text-[var(--primary)] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <span>{row.withSolvantra}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Stacked Mini-blocks with Progressive Disclosure (Under 768px) */}
          <div className="md:hidden flex flex-col divide-y divide-[var(--on-dark-15)] border-t border-b border-[var(--on-dark-15)]">
            {why247Rows.map((row, idx) => {
              const isDetailsOpen = !!showWithoutCoverage[idx];
              return (
                <div key={idx} className="py-4">
                  <div className="font-serif text-[18px] font-medium text-[var(--accent)] mb-2">
                    {row.time}
                  </div>
                  {/* With Solvantra (Always Visible First) */}
                  <div className="p-3.5 rounded-lg bg-[var(--light)] text-[var(--primary)] shadow-sm flex items-start gap-2.5 text-[14px] font-medium">
                    <Check className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-0.5 stroke-[2.5]" />
                    <div>
                      <span className="font-bold mr-1">With Solvantra:</span>
                      <span>{row.withSolvantra}</span>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() =>
                        setShowWithoutCoverage((prev) => ({
                          ...prev,
                          [idx]: !prev[idx],
                        }))
                      }
                      aria-expanded={isDetailsOpen}
                      aria-controls={`coverage-details-${idx}`}
                      className="inline-flex items-center gap-1.5 py-1.5 px-2 text-[13px] font-mono text-[var(--on-dark-75)] hover:text-[var(--on-dark)] cursor-pointer"
                    >
                      <span>{isDetailsOpen ? "Hide comparison" : "Compare without coverage"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none ${
                          isDetailsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Collapsed Without Coverage */}
                  <div
                    id={`coverage-details-${idx}`}
                    className={`grid transition-all duration-200 ease-out motion-reduce:transition-none ${
                      isDetailsOpen ? "grid-rows-[1fr] opacity-100 pt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-3 rounded-lg bg-[rgba(248,245,236,0.04)] border border-[var(--on-dark-15)] flex items-start gap-2 text-[14px] text-[var(--on-dark-75)]">
                        <X className="w-4 h-4 text-[var(--on-dark-35)] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold mr-1">Without:</span>
                          <span>{row.without}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. PROCESS ("05 / HOW IT WORKS") LIGHT SECTION
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                05 / HOW IT WORKS
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              A clear process, every hour of the day
            </h2>
          </div>

          {/* Horizontal 4-Step Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--primary-65)] block mb-3">
                  STEP 01
                </span>
                <h3 className="text-[20px] font-serif font-semibold text-[var(--primary)] mb-3">
                  Enquiry arrives
                </h3>
                <p className="text-[14px] text-[var(--primary-80)] font-sans leading-relaxed">
                  A call, portal message, web form or maintenance report comes in at any hour and is
                  picked up in your agency's name.
                </p>
              </div>
            </div>

            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--primary-65)] block mb-3">
                  STEP 02
                </span>
                <h3 className="text-[20px] font-serif font-semibold text-[var(--primary)] mb-3">
                  Understand and log
                </h3>
                <p className="text-[14px] text-[var(--primary-80)] font-sans leading-relaxed">
                  The agent captures needs, urgency and contact details using your approved script
                  and records everything in your system.
                </p>
              </div>
            </div>

            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--primary-65)] block mb-3">
                  STEP 03
                </span>
                <h3 className="text-[20px] font-serif font-semibold text-[var(--primary)] mb-3">
                  Act
                </h3>
                <p className="text-[14px] text-[var(--primary-80)] font-sans leading-relaxed">
                  Viewings are booked, repairs triaged and contractors arranged, with emergencies
                  escalated straight away.
                </p>
              </div>
            </div>

            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[14px] font-semibold text-[var(--primary-65)] block mb-3">
                  STEP 04
                </span>
                <h3 className="text-[20px] font-serif font-semibold text-[var(--primary)] mb-3">
                  Keep everyone informed
                </h3>
                <p className="text-[14px] text-[var(--primary-80)] font-sans leading-relaxed">
                  Applicants, tenants, landlords, contractors and your team each get the updates
                  relevant to them.
                </p>
              </div>
            </div>
          </div>

          {/* Track, Follow Up, Report 3-Column Strip */}
          <div className="border-t border-b border-[var(--primary-15)] py-10 mb-16">
            <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold block mb-6">
              TRACK, FOLLOW UP, REPORT
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
              <div>
                <h4 className="text-[18px] font-serif font-semibold text-[var(--primary)] mb-2">
                  Track compliance tasks
                </h4>
                <p className="text-[15px] text-[var(--primary-80)] leading-relaxed">
                  Deadlines, documents and certificates are tracked and chased so nothing slips past
                  its date.
                </p>
              </div>
              <div>
                <h4 className="text-[18px] font-serif font-semibold text-[var(--primary)] mb-2">
                  Follow up and close
                </h4>
                <p className="text-[15px] text-[var(--primary-80)] leading-relaxed">
                  We confirm outcomes, collect feedback and log complaints or issues for your review.
                </p>
              </div>
              <div>
                <h4 className="text-[18px] font-serif font-semibold text-[var(--primary)] mb-2">
                  Report and improve
                </h4>
                <p className="text-[15px] text-[var(--primary-80)] leading-relaxed">
                  Regular reports on enquiries, response times, maintenance and compliance tasks,
                  with reviews to refine scripts.
                </p>
              </div>
            </div>
          </div>

          {/* Everyone Informed at Every Step Matrix + Why it Matters */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left 8 Cols: Matrix Table */}
            <div className="lg:col-span-8">
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold block mb-4">
                EVERYONE INFORMED AT EVERY STEP
              </span>
              {/* Desktop/Tablet Table (768px and up) */}
              <div className="hidden md:block overflow-x-auto sector-card-light">
                <table className="w-full text-left border-collapse text-[14px] font-sans">
                  <thead>
                    <tr className="bg-[var(--primary-6)] border-b border-[var(--primary-15)] font-mono text-[13px] uppercase tracking-wider text-[var(--primary)]">
                      <th className="p-3.5">Stage</th>
                      <th className="p-3.5">Applicant / Tenant</th>
                      <th className="p-3.5">Landlord / Vendor</th>
                      <th className="p-3.5">Your Team</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--primary-12)] text-[var(--primary-80)]">
                    {informedMatrix.map((m, i) => (
                      <tr key={i} className="hover:bg-[var(--primary-6)] transition-colors">
                        <td className="p-3.5 font-semibold text-[var(--primary)] whitespace-nowrap">
                          {m.stage}
                        </td>
                        <td className="p-3.5 leading-snug">{m.applicant}</td>
                        <td className="p-3.5 leading-snug">{m.landlord}</td>
                        <td className="p-3.5 leading-snug font-medium text-[var(--primary)]">
                          {m.team}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Stacked Mini-blocks with Progressive Disclosure (Under 768px) */}
              <div className="md:hidden flex flex-col divide-y divide-[var(--primary-15)] border-t border-b border-[var(--primary-15)]">
                {informedMatrix.map((m, i) => {
                  const isDetailsOpen = !!showInformedDetails[i];
                  return (
                    <div key={i} className="py-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-serif text-[17px] font-semibold text-[var(--primary)]">
                          {m.stage}
                        </h4>
                        <span className="font-mono text-[12px] text-[var(--primary-65)]">
                          0{i + 1}
                        </span>
                      </div>
                      {/* Your Team (Key Action Line - Always Visible) */}
                      <div className="p-3 rounded-lg bg-[var(--primary-6)] border border-[var(--primary-12)] text-[14px] font-sans mb-2">
                        <span className="font-semibold text-[var(--primary)] mr-1">Your Team:</span>
                        <span className="text-[var(--primary-80)]">{m.team}</span>
                      </div>

                      {/* Progressive Disclosure Toggle */}
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() =>
                            setShowInformedDetails((prev) => ({
                              ...prev,
                              [i]: !prev[i],
                            }))
                          }
                          aria-expanded={isDetailsOpen}
                          aria-controls={`informed-details-${i}`}
                          className="inline-flex items-center gap-1.5 py-1 px-1.5 text-[13px] font-mono text-[var(--secondary)] hover:text-[var(--primary)] cursor-pointer"
                        >
                          <span>{isDetailsOpen ? "Hide details" : "Show all updates"}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none ${
                              isDetailsOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {/* Collapsed Applicant & Landlord details */}
                      <div
                        id={`informed-details-${i}`}
                        className={`grid transition-all duration-200 ease-out motion-reduce:transition-none ${
                          isDetailsOpen ? "grid-rows-[1fr] opacity-100 pt-2" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                        }`}
                      >
                        <div className="overflow-hidden space-y-2">
                          <div className="p-2.5 rounded bg-[var(--light)] border border-[var(--primary-12)] text-[13px] font-sans text-[var(--primary-80)]">
                            <span className="font-semibold text-[var(--primary)] mr-1">Applicant / Tenant:</span>
                            <span>{m.applicant}</span>
                          </div>
                          <div className="p-2.5 rounded bg-[var(--light)] border border-[var(--primary-12)] text-[13px] font-sans text-[var(--primary-80)]">
                            <span className="font-semibold text-[var(--primary)] mr-1">Landlord / Vendor:</span>
                            <span>{m.landlord}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right 4 Cols: Why It Matters List */}
            <div className="lg:col-span-4 sector-card-light p-7 space-y-5">
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--secondary)] font-semibold block">
                WHY IT MATTERS
              </span>
              <ul className="space-y-4 text-[15px] font-sans text-[var(--primary-80)] leading-relaxed">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-1 stroke-[2.5]" />
                  <span>Fewer chasing calls into your office.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-1 stroke-[2.5]" />
                  <span>Better reviews from tenants and landlords who are kept informed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[var(--secondary)] shrink-0 mt-1 stroke-[2.5]" />
                  <span>A written trail that supports you if a dispute arises.</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-[var(--primary-15)]">
                <p className="text-[13px] font-mono text-[var(--primary-65)] leading-relaxed">
                  Updates go out through the channels you prefer: phone, SMS, email or directly in
                  your CRM or property management software.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. URGENCY TRIAGE ("06 / MAINTENANCE HELPDESK") TINTED SECTION
         ========================================================================= */}
      <section className="sector-light-tinted w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                06 / MAINTENANCE HELPDESK
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              Urgency Triaged, Issues Escalated
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              Every repair report is logged with detail and time, then handled by priority under
              rules you set.
            </p>
          </div>

          <div className="space-y-4">
            {triageRows.map((row, idx) => (
              <div
                key={idx}
                className="sector-card-light p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                <div className="md:col-span-3">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-[14px] font-mono uppercase tracking-wider ${row.chipClass}`}
                  >
                    {row.priority}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <span className="block font-mono text-[13px] uppercase tracking-wider text-[var(--primary-65)] mb-1 font-semibold">
                    Examples
                  </span>
                  <p className="text-[15px] font-sans text-[var(--primary-80)] leading-relaxed">
                    {row.examples}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <span className="block font-mono text-[13px] uppercase tracking-wider text-[var(--primary-65)] mb-1 font-semibold">
                    What We Do
                  </span>
                  <p className="text-[15px] font-sans text-[var(--primary)] font-medium leading-relaxed">
                    {row.action}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. REGULATORY (DARK PRIMARY: --primary #12372A) ("07 / REGULATORY RIGOUR")
         ========================================================================= */}
      <section className="sector-dark w-full py-16 md:py-[112px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold">
                07 / REGULATORY RIGOUR
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--on-dark)] mb-4">
              How Solvantra Keeps You on Track
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--on-dark-80)] leading-[1.65] font-sans">
              We do not replace your legal adviser or compliance officer. We build the daily habits
              and records that stop avoidable breaches.
            </p>
          </div>

          {/* Eight Habits in 4x2 Ruled Grid (Desktop/Tablet 768px and up) */}
          <div className="hidden md:block border-t border-b border-[var(--on-dark-15)] mb-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--on-dark-15)]">
              {regulatoryHabits.slice(0, 4).map((h, i) => (
                <div key={i} className="p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[19px] font-serif font-semibold text-[var(--accent)] mb-3 leading-snug">
                      {h.title}
                    </h3>
                    <p className="text-[14px] font-sans text-[var(--on-dark-75)] leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--on-dark-15)] grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--on-dark-15)]">
              {regulatoryHabits.slice(4).map((h, i) => (
                <div key={i} className="p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[19px] font-serif font-semibold text-[var(--accent)] mb-3 leading-snug">
                      {h.title}
                    </h3>
                    <p className="text-[14px] font-sans text-[var(--on-dark-75)] leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Compact Accordion for 8 Habits (Under 768px) */}
          <div className="md:hidden border-t border-b border-[var(--on-dark-15)] divide-y divide-[var(--on-dark-15)] mb-10">
            {regulatoryHabits.map((h, i) => {
              const isOpen = openHabitIndex === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpenHabitIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`habit-content-${i}`}
                    className="w-full min-h-[58px] py-3.5 px-2 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <span className="font-mono text-[13px] font-semibold text-[var(--highlight)] shrink-0 w-6">
                        0{i + 1}
                      </span>
                      <h3 className="font-serif text-[17px] font-medium text-[var(--accent)] leading-snug">
                        {h.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[var(--on-dark-65)] shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? "rotate-180 text-[var(--accent)]" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`habit-content-${i}`}
                    className={`grid transition-all duration-200 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden px-2 pt-1">
                      <p className="text-[14px] font-sans text-[var(--on-dark-75)] leading-relaxed">
                        {h.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlighted Callout (--accent at 14% fill) */}
          <div className="p-6 sm:p-7 rounded-[12px] bg-[rgba(214,190,138,0.14)] border border-[var(--accent)]/30 mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 shrink-0 text-[var(--accent)]" />
              <p className="text-[15px] text-[var(--on-dark)] font-sans leading-relaxed">
                <strong className="font-semibold text-[var(--on-dark)]">You stay in control.</strong>{" "}
                You remain the responsible party. We follow your approved scripts and policies, and
                flag anything that needs your decision.
              </p>
            </div>
            <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--highlight)] shrink-0 font-semibold">
              Client Governance
            </span>
          </div>

          {/* Collapsible Regulatory Reference Container */}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => setIsRegOpen(!isRegOpen)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg border border-[var(--on-dark-15)] text-[14px] font-mono uppercase tracking-wider text-[var(--accent)] hover:bg-[var(--on-dark-6)] transition-colors cursor-pointer"
            >
              <span>{isRegOpen ? "Hide" : "View"} regulatory reference</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  isRegOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isRegOpen && (
              <div className="mt-8 p-6 sm:p-8 rounded-[12px] bg-[var(--on-dark-6)] border border-[var(--on-dark-15)] animate-fade-up">
                {/* Tabs */}
                <div className="flex items-center gap-4 mb-6 border-b border-[var(--on-dark-15)] pb-4 font-mono text-[14px]">
                  <button
                    type="button"
                    onClick={() => setRegTab("england")}
                    className={`pb-2 px-1 cursor-pointer transition-colors border-b-2 font-semibold ${
                      regTab === "england"
                        ? "border-[var(--accent)] text-[var(--accent)]"
                        : "border-transparent text-[var(--on-dark-65)] hover:text-[var(--on-dark)]"
                    }`}
                  >
                    England Reference
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegTab("us")}
                    className={`pb-2 px-1 cursor-pointer transition-colors border-b-2 font-semibold ${
                      regTab === "us"
                        ? "border-[var(--accent)] text-[var(--accent)]"
                        : "border-transparent text-[var(--on-dark-65)] hover:text-[var(--on-dark)]"
                    }`}
                  >
                    United States Reference
                  </button>
                </div>

                {regTab === "england" ? (
                  <div>
                    <p className="text-[15px] font-sans text-[var(--on-dark-80)] mb-6 leading-relaxed">
                      Property regulation is tightening. Since the Renters' Rights Act began taking
                      effect on 1 May 2026, councils in England have stronger enforcement powers and
                      higher civil penalties. Many breaches come from missed admin, not bad intent.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[14px] font-sans">
                        <thead>
                          <tr className="border-b border-[var(--on-dark-15)] font-mono text-[13px] uppercase tracking-wider text-[var(--accent)]">
                            <th className="py-3 pr-4">Area</th>
                            <th className="py-3 px-4">What is required or risk</th>
                            <th className="py-3 pl-4">How we help</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--on-dark-15)] text-[var(--on-dark-75)]">
                          {englandRegulations.map((r, i) => (
                            <tr key={i}>
                              <td className="py-3.5 pr-4 font-semibold text-[var(--on-dark)] whitespace-nowrap">
                                {r.area}
                              </td>
                              <td className="py-3.5 px-4 leading-relaxed">{r.requirement}</td>
                              <td className="py-3.5 pl-4 leading-relaxed text-[var(--accent)] font-medium">
                                {r.help}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse text-[14px] font-sans">
                        <thead>
                          <tr className="border-b border-[var(--on-dark-15)] font-mono text-[13px] uppercase tracking-wider text-[var(--accent)]">
                            <th className="py-3 pr-4">Area</th>
                            <th className="py-3 px-4">What is required or risk</th>
                            <th className="py-3 pl-4">How we help</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[var(--on-dark-15)] text-[var(--on-dark-75)]">
                          {usRegulations.map((r, i) => (
                            <tr key={i}>
                              <td className="py-3.5 pr-4 font-semibold text-[var(--on-dark)] whitespace-nowrap">
                                {r.area}
                              </td>
                              <td className="py-3.5 px-4 leading-relaxed">{r.requirement}</td>
                              <td className="py-3.5 pl-4 leading-relaxed text-[var(--accent)] font-medium">
                                {r.help}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =========================================================================
          11. QUALITY & ONBOARDING LIGHT SECTION
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                08 / ONBOARDING &amp; GOVERNANCE
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              Simple Onboarding, Quick Launch
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              We adapt to your existing phone system, CRM, diary, and property management software.
            </p>
          </div>

          {/* Desktop/Tablet 4 Steps (768px and up) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[32px] font-light leading-none text-[var(--primary-35)] block mb-4 select-none">
                  01
                </span>
                <h3 className="text-[19px] font-serif font-semibold text-[var(--primary)] mb-3 leading-snug">
                  Discovery &amp; Compliance Mapping
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--primary-80)] font-sans">
                  We learn your services, markets, fee schedule, policies and the regulations you
                  operate under.
                </p>
              </div>
            </div>

            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[32px] font-light leading-none text-[var(--primary-35)] block mb-4 select-none">
                  02
                </span>
                <h3 className="text-[19px] font-serif font-semibold text-[var(--primary)] mb-3 leading-snug">
                  Scripts &amp; Escalation Rules
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--primary-80)] font-sans">
                  We build approved scripts, FAQs, prohibited-topic lists and emergency escalation
                  contacts with you.
                </p>
              </div>
            </div>

            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[32px] font-light leading-none text-[var(--primary-35)] block mb-4 select-none">
                  03
                </span>
                <h3 className="text-[19px] font-serif font-semibold text-[var(--primary)] mb-3 leading-snug">
                  Connect Your Tools
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--primary-80)] font-sans">
                  Call forwarding, CRM, diary and maintenance software are linked so records land
                  directly where you need them.
                </p>
              </div>
            </div>

            <div className="sector-card-light p-7 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[32px] font-light leading-none text-[var(--primary-35)] block mb-4 select-none">
                  04
                </span>
                <h3 className="text-[19px] font-serif font-semibold text-[var(--primary)] mb-3 leading-snug">
                  Pilot &amp; Go Live
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--primary-80)] font-sans">
                  A short pilot phase, followed by a collaborative call-quality review with your team,
                  then full live launch.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Compact Accordion for 4 Steps (Under 768px) */}
          <div className="md:hidden border-t border-b border-[var(--primary-15)] divide-y divide-[var(--primary-15)] mb-12">
            {[
              {
                num: "01",
                title: "Discovery & Compliance Mapping",
                desc: "We learn your services, markets, fee schedule, policies and the regulations you operate under.",
              },
              {
                num: "02",
                title: "Scripts & Escalation Rules",
                desc: "We build approved scripts, FAQs, prohibited-topic lists and emergency escalation contacts with you.",
              },
              {
                num: "03",
                title: "Connect Your Tools",
                desc: "Call forwarding, CRM, diary and maintenance software are linked so records land directly where you need them.",
              },
              {
                num: "04",
                title: "Pilot & Go Live",
                desc: "A short pilot phase, followed by a collaborative call-quality review with your team, then full live launch.",
              },
            ].map((step, idx) => {
              const isOpen = openOnboardingIndex === idx;
              return (
                <div key={step.num}>
                  <button
                    type="button"
                    onClick={() => setOpenOnboardingIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    aria-controls={`onboarding-step-${step.num}`}
                    className="w-full min-h-[58px] py-3.5 px-2 flex items-center justify-between text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <div className="flex items-center gap-3 pr-2">
                      <span className="font-mono text-[13px] font-semibold text-[var(--secondary)] shrink-0 w-6">
                        {step.num}
                      </span>
                      <h3 className="font-serif text-[17px] font-medium text-[var(--primary)] leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[var(--primary-65)] shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
                        isOpen ? "rotate-180 text-[var(--secondary)]" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`onboarding-step-${step.num}`}
                    className={`grid transition-all duration-200 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden px-2 pt-1">
                      <p className="text-[14px] leading-relaxed text-[var(--primary-80)] font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quality Assurance Strip */}
          <div className="border-t border-[var(--primary-15)] pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            <div>
              <h4 className="text-[18px] font-serif font-semibold text-[var(--primary)] mb-2">
                Scorecard Auditing
              </h4>
              <p className="text-[15px] text-[var(--primary-80)] leading-relaxed">
                Random samples of calls, tickets and bookings audited weekly against strict QA rubrics.
              </p>
            </div>
            <div>
              <h4 className="text-[18px] font-serif font-semibold text-[var(--primary)] mb-2">
                Dedicated Account Lead
              </h4>
              <p className="text-[15px] text-[var(--primary-80)] leading-relaxed">
                Continuous operational oversight and regular performance reviews with your management.
              </p>
            </div>
            <div>
              <h4 className="text-[18px] font-serif font-semibold text-[var(--primary)] mb-2">
                CRM &amp; Tool Parity
              </h4>
              <p className="text-[15px] text-[var(--primary-80)] leading-relaxed">
                Direct integration with Reapit, Alto, Street, MRI, Buildium, AppFolio and standard telephony.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          12. FINAL CTA (SHARED HOMEPAGE CTA COMPONENT)
         ========================================================================= */}
      <FinalCTA />

      {/* Consultation Modal Triggered from Buttons */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Real Estate"
      />
    </div>
  );
}
