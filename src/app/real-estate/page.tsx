"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
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
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function RealEstatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const audienceGroups = [
    {
      num: "01",
      title: "Online & Hybrid Estate Agents",
      services: [
        "Sales and lettings enquiries from portals and web",
        "Valuation and viewing bookings straight to your diary",
        "Applicant follow-up and progress updates",
      ],
    },
    {
      num: "02",
      title: "Letting Agencies",
      services: [
        "Tenant applications and referencing support",
        "Move-in and tenancy renewal coordination",
        "Landlord and tenant ongoing communication",
      ],
    },
    {
      num: "03",
      title: "Property Management Companies",
      services: [
        "Maintenance helpdesk and contractor booking",
        "Tenant queries and prompt issue reporting",
        "Routine property inspections scheduling",
      ],
    },
    {
      num: "04",
      title: "Block & Portfolio Managers",
      services: [
        "Resident and leaseholder enquiry desk",
        "Out-of-hours emergency intake and escalation",
        "Service charge and notice queries",
      ],
    },
    {
      num: "05",
      title: "Landlords with Larger Portfolios",
      services: [
        "Single dedicated point of contact for tenants",
        "Repair logging, triage, and follow-up",
        "Compliance date and certificate tracking",
      ],
    },
    {
      num: "06",
      title: "Student & Build-to-Rent Operators",
      services: [
        "High-volume seasonal enquiry intake",
        "Viewing and tenancy start coordination",
        "Resident support and out-of-hours coverage",
      ],
    },
  ];

  const fourPillars = [
    {
      num: "01",
      title: "Never Miss an Enquiry",
      points: [
        "Calls, portal enquiries, web forms and chats.",
        "Answered in your agency's name, any hour of the day or night.",
        "Every lead logged with complete details directly into your CRM.",
      ],
    },
    {
      num: "02",
      title: "Viewings & Valuations Booked",
      points: [
        "Appointments placed straight into your negotiator's diary.",
        "Confirmations and timely reminders to cut no-shows.",
        "Negotiators briefed with applicant requirements before each visit.",
      ],
    },
    {
      num: "03",
      title: "Tenants & Landlords Looked After",
      points: [
        "Maintenance reports logged, urgency triaged by priority.",
        "Contractors booked and progress updated until closure.",
        "Clear, timely updates sent to every party without chasing.",
      ],
    },
    {
      num: "04",
      title: "Compliance Support Built In",
      points: [
        "Certificate expiries and statutory deadline reminders.",
        "Document chasing and audit-ready records maintained.",
        "Scripts strictly follow your approved policies and legal standards.",
      ],
    },
  ];

  const fullJourneyServices = [
    {
      num: "01",
      title: "24/7 Enquiry Handling",
      description:
        "Every call, portal enquiry, web form and chat answered fast. Needs captured, applicants qualified on lawful, relevant criteria and everything logged in your CRM.",
    },
    {
      num: "02",
      title: "Viewing & Valuation Booking",
      description:
        "Appointments booked, confirmed and reminded, with rescheduling handled and the right negotiator briefed before every inspection.",
    },
    {
      num: "03",
      title: "Applicant & Tenant Onboarding",
      description:
        "Chasing documents, references, ID and signed paperwork through your own secure process, with a clear record of what is outstanding.",
    },
    {
      num: "04",
      title: "Maintenance Helpdesk",
      description:
        "Repair reports logged, urgency triaged, contractors booked and tenant and landlord kept updated until the job is closed.",
    },
    {
      num: "05",
      title: "Landlord & Vendor Updates",
      description:
        "Viewing feedback, progress updates and routine messages sent on your schedule and in your brand's tone.",
    },
    {
      num: "06",
      title: "Compliance Admin Support",
      description:
        "Reminders and tracking for certificate expiries, deposit deadlines and document renewals, with records ready for audit.",
    },
    {
      num: "07",
      title: "Payment Reminders",
      description:
        "Polite reminders following your policy and escalation rules, with anything sensitive passed directly to your team.",
    },
    {
      num: "08",
      title: "Complaints Intake",
      description:
        "Complaints logged, acknowledged and escalated to the right person within your set timescales, building an auditable trail.",
    },
    {
      num: "09",
      title: "Reporting",
      description:
        "Enquiry volumes, bookings, response times, maintenance status and compliance task status shared on a regular schedule.",
    },
  ];

  const maintenanceTriage = [
    {
      priority: "Emergency",
      examples: "Gas smell, major leak or flooding, fire or storm damage, security breach.",
      action: "Safety advice from your approved script, immediate escalation to your on-call contact or emergency contractor.",
      badgeBg: "var(--primary)",
      badgeText: "var(--on-dark)",
    },
    {
      priority: "Urgent",
      examples: "No heating or hot water, electrical fault, broken lock.",
      action: "Contractor booked within your target time, tenant and landlord updated with expected attendance.",
      badgeBg: "var(--secondary)",
      badgeText: "var(--on-dark)",
    },
    {
      priority: "Routine",
      examples: "Dripping tap, appliance fault, cosmetic repair.",
      action: "Logged, approved with the landlord where needed, scheduled and tracked through to completion.",
      badgeBg: "var(--highlight)",
      badgeText: "var(--primary)",
    },
  ];

  const complianceStandards = [
    {
      area: "Tenant fees & advertised rent",
      requirement:
        "Only permitted payments quoted; offers above advertised rent are neither encouraged nor accepted under the Renters' Rights Act.",
      mitigation:
        "Agents follow scripts quoting only your published fee schedule, with zero unauthorized charge discussions.",
    },
    {
      area: "Fair treatment of applicants",
      requirement:
        "Lawful, non-discriminatory qualification. No screening out applicants because of children or benefits.",
      mitigation:
        "Qualifying questions strictly limited to approved, objective criteria.",
    },
    {
      area: "Deposit & document deadlines",
      requirement:
        "Deposit protection in approved schemes with prescribed information served within statutory 30-day limits.",
      mitigation:
        "Tasks, reminders, and escalation logs raised for your staff so deadlines are never missed.",
    },
    {
      area: "Safety certificates & checks",
      requirement:
        "Gas safety, electrical safety (EICR), EPC, smoke and carbon monoxide alarm date tracking.",
      mitigation:
        "We track expiry dates, chase landlords and contractors, and arrange inspection renewals ahead of time.",
    },
    {
      area: "ID & Right to Rent chasing",
      requirement:
        "Timely document collection and audit-ready verification records.",
      mitigation:
        "Tenants chased for required documents through your secure process; verification remains with your authorized staff.",
    },
    {
      area: "US Fair Housing & TCPA Rules",
      requirement:
        "Consistent neutral scripts, non-discriminatory qualifying, and TCPA consent-aware outreach.",
      mitigation:
        "Recording notices read out where required; consent guidelines strictly honoured.",
    },
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Discovery & Compliance Mapping",
      description:
        "We learn your services, markets, fee schedule, policies and the regulations you operate under.",
    },
    {
      step: "02",
      title: "Scripts & Escalation Rules",
      description:
        "We build approved scripts, FAQs, prohibited-topic lists and emergency escalation contacts with you.",
    },
    {
      step: "03",
      title: "Connect Your Tools",
      description:
        "Call forwarding, CRM, diary and maintenance software are linked so records land directly where you need them.",
    },
    {
      step: "04",
      title: "Pilot & Go Live",
      description:
        "A short pilot phase, followed by a collaborative call-quality review with your team, then full live launch.",
    },
  ];

  return (
    <div data-sector="property" className="flex flex-col w-full">
      {/* =========================================================================
          HERO SECTION (DARK SECTOR THEME: --primary #12372A)
          Explicit text colors ensure perfect readability. 3-stat strip removed.
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

        {/* Soft accent radial glow (accent at 24%, ~800px) */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] lg:w-[850px] h-[700px] lg:h-[850px] rounded-full pointer-events-none select-none z-0 blur-[100px] lg:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(214, 190, 138, 0.24) 0%, rgba(214, 190, 138, 0.04) 50%, transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Mono Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-3">
                <ol className="flex items-center gap-2 font-mono text-[14px] text-[var(--on-dark-65)]">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[var(--on-dark)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link
                      href="/services"
                      className="hover:text-[var(--on-dark)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                    >
                      Services
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--on-dark)] font-semibold" aria-current="page">
                    Real Estate
                  </li>
                </ol>
              </nav>

              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold">
                  SOLVANTRA PROPERTY SERVICES • ALWAYS ON. ALWAYS COMPLIANT.
                </span>
              </div>

              {/* H1 with explicit text-[var(--on-dark)] to fix dark-on-dark bug */}
              <h1 className="text-[clamp(44px,5.8vw,76px)] font-serif font-medium leading-[1.04] tracking-[-0.03em] text-[var(--on-dark)] mb-6">
                Your 24/7 Front Office for{" "}
                <span className="italic text-[var(--accent)] font-normal block sm:inline">
                  Property.
                </span>
              </h1>

              {/* Subline */}
              <p className="text-[17px] sm:text-[18px] text-[var(--on-dark-80)] leading-[1.65] max-w-[560px] font-sans mb-8">
                24/7 enquiry handling, lettings support and compliance admin for online estate
                agents, letting agencies, and property management companies.
              </p>

              {/* Action Buttons */}
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

            {/* Right 5 Columns: Illustrative CSS/SVG Front Office Operational Diagram */}
            <div className="lg:col-span-5 w-full">
              <div className="sector-card-dark p-6 sm:p-7 relative backdrop-blur-sm">
                <div className="flex items-center justify-between pb-4 border-b border-[var(--on-dark-15)] mb-5">
                  <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold">
                    FRONT OFFICE DISPATCH
                  </span>
                  <span className="font-mono text-[14px] text-[var(--on-dark-65)]">
                    Illustrative
                  </span>
                </div>

                {/* Workflow Simulation Cards */}
                <div className="space-y-3 font-sans">
                  <div className="p-3.5 rounded-lg bg-[rgba(248,245,236,0.04)] border border-[var(--on-dark-15)] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent)]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <PhoneCall className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[14px] font-semibold text-[var(--on-dark)] mb-0.5">
                        <span>24/7 Enquiry Intake</span>
                        <span className="font-mono text-[14px] text-[var(--accent)]">Live</span>
                      </div>
                      <p className="text-[14px] text-[var(--on-dark-75)] leading-snug truncate">
                        Portal, phone & chat leads qualified and recorded
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[rgba(248,245,236,0.04)] border border-[var(--on-dark-15)] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--highlight)]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4 text-[var(--highlight)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[14px] font-semibold text-[var(--on-dark)] mb-0.5">
                        <span>Diary & Viewing Booking</span>
                        <span className="font-mono text-[14px] text-[var(--highlight)]">Direct CRM</span>
                      </div>
                      <p className="text-[14px] text-[var(--on-dark-75)] leading-snug truncate">
                        Slots synced to negotiator diaries with brief
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-[rgba(248,245,236,0.04)] border border-[var(--on-dark-15)] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--accent)]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Wrench className="w-4 h-4 text-[var(--accent)]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[14px] font-semibold text-[var(--on-dark)] mb-0.5">
                        <span>Urgent Maintenance Triage</span>
                        <span className="font-mono text-[14px] text-[var(--accent)]">Priority SLA</span>
                      </div>
                      <p className="text-[14px] text-[var(--on-dark-75)] leading-snug truncate">
                        Triaged by severity; contractors notified instantly
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="pt-4 mt-4 border-t border-[var(--on-dark-15)] flex items-center justify-between text-[14px] font-mono text-[var(--on-dark-65)]">
                  <span>Continuous 24/7/365 Desk</span>
                  <span className="text-[var(--accent)]">Zero Drop-Offs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: THE CORE PROBLEM & TWO RISKS (LIGHT SECTION: --light #F5F2E9)
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                  01 / OPERATIONAL REALITY
                </span>
              </div>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)]">
                Enquiries Never Stop. <br />
                Neither Should Your Front Office.
              </h2>
              <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
                Online and hybrid estate agents and property managers run lean teams, yet enquiries
                never stop. Buyers and tenants browse at night, landlords report problems at
                weekends, and a tenant with a leak calls at 2 a.m.
              </p>
              <p className="text-[16px] text-[var(--primary-80)] leading-[1.65] font-sans">
                Solvantra gives you an always-on team that answers, books, logs and follows up, and
                keeps your compliance admin on track so small gaps do not turn into costly penalties.
              </p>
            </div>

            {/* Right Column (6 cols): Two Risks, One Partner Card */}
            <div className="lg:col-span-6">
              <div className="bg-[var(--primary)] text-[var(--on-dark)] p-8 sm:p-10 rounded-[12px] border border-[var(--accent)]/30 shadow-lg relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20 bg-[var(--accent)]"
                />

                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold block mb-3">
                  TWO RISKS, ONE PARTNER
                </span>
                <h3 className="text-[26px] sm:text-[28px] font-serif font-medium text-[var(--on-dark)] mb-6 leading-snug">
                  Protecting Your Revenue &amp; Reputation
                </h3>

                <div className="space-y-5 text-[15px] leading-relaxed mb-8 font-sans">
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[var(--secondary)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[14px]">
                      ✕
                    </div>
                    <p className="text-[var(--on-dark-80)]">
                      <strong className="text-[var(--accent)] font-semibold">Missed enquiries</strong>{" "}
                      cost you valuable instructions, lost viewings, and prospective tenants who
                      immediately move to the next agency.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[var(--secondary)] text-[var(--accent)] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[14px]">
                      ✕
                    </div>
                    <p className="text-[var(--on-dark-80)]">
                      <strong className="text-[var(--accent)] font-semibold">Missed compliance steps</strong>{" "}
                      cost you heavy council fines, legal disputes, deposit penalties, and permanent
                      brand damage.
                    </p>
                  </div>
                </div>

                <div className="pt-5 border-t border-[var(--on-dark-15)] flex items-center gap-3 text-[14px] font-semibold text-[var(--highlight)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent)] shrink-0" />
                  <span>Solvantra covers both seamlessly around the clock.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT YOU GET WITH SOLVANTRA (4 CORE PILLARS)
          TINTED BACKGROUND: --highlight at 10% over --light
         ========================================================================= */}
      <section className="sector-light-tinted w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                02 / CORE PILLARS
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              What You Get With Solvantra
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              Built specifically to give property businesses round-the-clock coverage and tighter
              compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fourPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="sector-card-light p-7 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="font-mono text-[36px] font-light leading-none text-[var(--primary-35)] block mb-4 select-none">
                    {pillar.num}
                  </span>
                  <h3 className="text-[20px] font-serif font-semibold text-[var(--primary)] mb-4 leading-snug">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-3 font-sans text-[14px] leading-relaxed text-[var(--primary-80)]">
                    {pillar.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-[var(--secondary)]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BUILT FOR THE FULL PROPERTY ECOSYSTEM (6 AUDIENCES)
          LIGHT BACKGROUND: --light #F5F2E9
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                03 / AUDIENCES
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              Built for the Full Property Ecosystem
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              Supporting property businesses that want round-the-clock coverage and tighter
              compliance without growing a large in-house team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceGroups.map((group) => (
              <div
                key={group.num}
                className="sector-card-light p-8 flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[14px] font-semibold text-[var(--primary-65)]">
                      {group.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[var(--highlight)]" />
                  </div>
                  <h3 className="text-[22px] font-serif font-semibold text-[var(--primary)] mb-4 leading-snug">
                    {group.title}
                  </h3>
                  <ul className="space-y-2.5 text-[14px] font-sans text-[var(--primary-80)] leading-relaxed">
                    {group.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="font-bold text-[var(--primary)]">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FULL TENANCY JOURNEY COVERAGE (9 HANDLED SERVICES)
          TINTED BACKGROUND: --accent at 8% over --light
         ========================================================================= */}
      <section
        id="services-breakdown"
        className="sector-light-accent-tinted w-full py-16 md:py-[112px] border-b border-[var(--primary-15)] scroll-mt-24"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                04 / SERVICES
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              What We Handle For You
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              Support across the full journey, from the very first enquiry to tenancy conclusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fullJourneyServices.map((srv) => (
              <div
                key={srv.num}
                className="sector-card-light p-7 flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="font-mono text-[14px] text-[var(--primary-65)] font-semibold block mb-2">
                    {srv.num}
                  </span>
                  <h3 className="text-[20px] font-serif font-semibold text-[var(--primary)] mb-3 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[var(--primary-80)] font-sans">
                    {srv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: MAINTENANCE TRIAGE MATRIX
          LIGHT BACKGROUND: --light #F5F2E9
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                05 / MAINTENANCE HELP DESK
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {maintenanceTriage.map((row, idx) => (
              <div
                key={idx}
                className="sector-card-light p-8 flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <div className="mb-6">
                    <span
                      className="inline-block px-3.5 py-1.5 rounded-[6px] text-[14px] font-mono font-semibold uppercase tracking-wider"
                      style={{ backgroundColor: row.badgeBg, color: row.badgeText }}
                    >
                      {row.priority} Priority
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-[14px] font-mono uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold mb-2">
                      Examples
                    </h4>
                    <p className="text-[15px] font-sans text-[var(--primary-80)] leading-relaxed">
                      {row.examples}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[14px] font-mono uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold mb-2">
                      What We Do
                    </h4>
                    <p className="text-[15px] font-sans text-[var(--primary-80)] leading-relaxed">
                      {row.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: COMPLIANCE ADMINISTRATION & RISK MITIGATION (DARK SECTION)
          --primary #12372A | Hairline rule at top edge | Explicit text colors
         ========================================================================= */}
      <section className="sector-dark w-full py-16 md:py-[112px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--accent)] font-semibold">
                06 / REGULATORY RIGOUR
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--on-dark)] mb-4">
              How Solvantra Keeps You on Track
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--on-dark-80)] leading-[1.65] font-sans">
              We do not replace your legal adviser or compliance officer. We build the daily
              operational habits, scripts, reminders, and time-stamped records that stop avoidable
              breaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {complianceStandards.map((std, i) => (
              <div
                key={i}
                className="sector-card-dark p-7 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[20px] font-serif font-semibold text-[var(--accent)] mb-3 leading-snug">
                    {std.area}
                  </h3>
                  <div className="mb-4">
                    <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--highlight)] mb-1 font-semibold">
                      Requirement:
                    </span>
                    <p className="text-[14px] text-[var(--on-dark-75)] leading-relaxed font-sans">
                      {std.requirement}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--on-dark-15)]">
                    <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--accent)] mb-1 font-semibold">
                      Our Habit:
                    </span>
                    <p className="text-[14px] text-[var(--on-dark-80)] leading-relaxed font-sans">
                      {std.mitigation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* You Stay in Control Box */}
          <div className="p-6 sm:p-7 rounded-[12px] bg-[rgba(27,81,64,0.6)] border border-[var(--accent)]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <ShieldCheck className="w-6 h-6 shrink-0 text-[var(--accent)]" />
              <p className="text-[14px] sm:text-[15px] text-[var(--on-dark)] font-sans leading-relaxed">
                <strong className="font-semibold text-[var(--on-dark)]">You stay in control:</strong>{" "}
                You remain the responsible party. We strictly follow your approved scripts, fee
                lists, and policies, flagging any edge cases for your decision.
              </p>
            </div>
            <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--highlight)] shrink-0 font-semibold">
              Auditable Written Trail
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: ONBOARDING & LAUNCH PROCESS (LIGHT SECTION: --light #F5F2E9)
         ========================================================================= */}
      <section className="sector-light w-full py-16 md:py-[112px] border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--primary-65)] font-semibold">
                07 / ONBOARDING
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[44px] lg:text-[48px] font-serif font-medium leading-[1.08] text-[var(--primary)] mb-4">
              Simple Onboarding, Quick Launch
            </h2>
            <p className="text-[17px] sm:text-[18px] text-[var(--primary-80)] leading-[1.65] font-sans">
              We adapt to your existing phone system, CRM, diary, and property management software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((s) => (
              <div
                key={s.step}
                className="sector-card-light p-7 flex flex-col justify-between hover:shadow-md transition-all duration-200"
              >
                <div>
                  <span className="font-mono text-[32px] font-light leading-none text-[var(--primary-35)] block mb-4 select-none">
                    {s.step}
                  </span>
                  <h3 className="text-[19px] font-serif font-semibold text-[var(--primary)] mb-3 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-[var(--primary-80)] font-sans">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: SHARED FINAL CTA
          Full-bleed, big H2, interactive consultation form with sector selection
         ========================================================================= */}
      <FinalCTA />

      {/* Legal Disclaimer Footnote */}
      <div className="bg-[var(--ink)] py-4 px-6 text-center border-t border-[rgba(248,241,229,0.08)]">
        <p className="text-[14px] font-mono text-[var(--bg-55)] max-w-4xl mx-auto">
          Solvantra supports your compliance processes and does not provide legal advice. Your agency remains responsible for meeting its legal obligations.
        </p>
      </div>

      {/* Consultation Modal Triggered from Buttons */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Real Estate"
      />
    </div>
  );
}
