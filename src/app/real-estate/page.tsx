"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  PhoneCall,
  FileCheck,
  Wrench,
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  Lock,
  ChevronRight,
  Check,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

export default function RealEstatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // REAL ESTATE BRAND PALETTE
  // Primary: #12372A
  // Secondary: #1B5140
  // Accent: #D6BE8A
  // Highlight: #A9C4AE
  // Light background: #F5F2E9
  // Text on dark backgrounds: #F8F5EC

  const audienceGroups = [
    {
      title: "Online & Hybrid Estate Agents",
      services: [
        "Sales and lettings enquiries from portals and web",
        "Valuation and viewing bookings straight to your diary",
        "Applicant follow-up and progress updates",
      ],
    },
    {
      title: "Letting Agencies",
      services: [
        "Tenant applications and referencing support",
        "Move-in and tenancy renewal coordination",
        "Landlord and tenant ongoing communication",
      ],
    },
    {
      title: "Property Management Companies",
      services: [
        "Maintenance helpdesk and contractor booking",
        "Tenant queries and prompt issue reporting",
        "Routine property inspections scheduling",
      ],
    },
    {
      title: "Block & Portfolio Managers",
      services: [
        "Resident and leaseholder enquiry desk",
        "Out-of-hours emergency intake and escalation",
        "Service charge and notice queries",
      ],
    },
    {
      title: "Landlords with Larger Portfolios",
      services: [
        "Single dedicated point of contact for tenants",
        "Repair logging, triage, and follow-up",
        "Compliance date and certificate tracking",
      ],
    },
    {
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
      badgeBg: "#12372A",
      badgeText: "#F8F5EC",
    },
    {
      priority: "Urgent",
      examples: "No heating or hot water, electrical fault, broken lock.",
      action: "Contractor booked within your target time, tenant and landlord updated with expected attendance.",
      badgeBg: "#1B5140",
      badgeText: "#F8F5EC",
    },
    {
      priority: "Routine",
      examples: "Dripping tap, appliance fault, cosmetic repair.",
      action: "Logged, approved with the landlord where needed, scheduled and tracked through to completion.",
      badgeBg: "#A9C4AE",
      badgeText: "#12372A",
    },
  ];

  const complianceStandards = [
    {
      area: "Tenant fees & advertised rent",
      requirement: "Only permitted payments quoted; offers above advertised rent are neither encouraged nor accepted under the Renters' Rights Act.",
      mitigation: "Agents follow scripts quoting only your published fee schedule, with zero unauthorized charge discussions.",
    },
    {
      area: "Fair treatment of applicants",
      requirement: "Lawful, non-discriminatory qualification. No screening out applicants because of children or benefits.",
      mitigation: "Qualifying questions strictly limited to approved, objective criteria.",
    },
    {
      area: "Deposit & document deadlines",
      requirement: "Deposit protection in approved schemes with prescribed information served within statutory 30-day limits.",
      mitigation: "Tasks, reminders, and escalation logs raised for your staff so deadlines are never missed.",
    },
    {
      area: "Safety certificates & checks",
      requirement: "Gas safety, electrical safety (EICR), EPC, smoke and carbon monoxide alarm date tracking.",
      mitigation: "We track expiry dates, chase landlords and contractors, and arrange inspection renewals ahead of time.",
    },
    {
      area: "ID & Right to Rent chasing",
      requirement: "Timely document collection and audit-ready verification records.",
      mitigation: "Tenants chased for required documents through your secure process; verification remains with your authorized staff.",
    },
    {
      area: "US Fair Housing & TCPA Rules",
      requirement: "Consistent neutral scripts, non-discriminatory qualifying, and TCPA consent-aware outreach.",
      mitigation: "Recording notices read out where required; consent guidelines strictly honoured.",
    },
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Discovery & Compliance Mapping",
      description: "We learn your services, markets, fee schedule, policies and the regulations you operate under.",
    },
    {
      step: "02",
      title: "Scripts & Escalation Rules",
      description: "We build approved scripts, FAQs, prohibited-topic lists and emergency escalation contacts with you.",
    },
    {
      step: "03",
      title: "Connect Your Tools",
      description: "Call forwarding, CRM, diary and maintenance software are linked so records land directly where you need them.",
    },
    {
      step: "04",
      title: "Pilot & Go Live",
      description: "A short pilot phase, followed by a collaborative call-quality review with your team, then full live launch.",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full palette-real-estate" style={{ backgroundColor: "#F5F2E9", color: "#12372A" }}>
        {/* =========================================================================
            HERO SECTION (REAL ESTATE PALETTE)
            Primary: #12372A | Accent: #D6BE8A | Light Bg: #F5F2E9
            ========================================================================= */}
        <section
          className="relative w-full overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 border-b"
          style={{
            backgroundColor: "#12372A",
            color: "#F8F5EC",
            borderColor: "rgba(214, 190, 138, 0.2)",
          }}
        >
          {/* Ambient Decorative Lighting */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: "#D6BE8A" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
            style={{ backgroundColor: "#A9C4AE" }}
          />

          <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.18em] font-semibold block mb-4"
                style={{ color: "#D6BE8A" }}
              >
                SOLVANTRA PROPERTY SERVICES • ALWAYS ON. ALWAYS COMPLIANT.
              </span>

              <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] mb-6">
                Your 24/7 Front Office for{" "}
                <span className="italic" style={{ color: "#D6BE8A" }}>
                  Property.
                </span>
              </h1>

              <p
                className="font-body-lg text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
                style={{ color: "#F8F5EC", opacity: 0.92 }}
              >
                24/7 enquiry handling, lettings support and compliance admin for online estate agents, letting agencies, and property management companies.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-label-md text-sm transition-all duration-200 cursor-pointer shadow-lg hover:brightness-105"
                  style={{
                    backgroundColor: "#D6BE8A",
                    color: "#12372A",
                    fontWeight: 700,
                  }}
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#services-breakdown"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-label-md text-sm transition-all duration-200 border hover:bg-white/5"
                  style={{
                    borderColor: "rgba(214, 190, 138, 0.5)",
                    color: "#F8F5EC",
                  }}
                >
                  <span>Explore What We Handle</span>
                </a>
              </div>

              {/* Credential Metrics Bar */}
              <div
                className="pt-6 border-t grid grid-cols-3 gap-4"
                style={{ borderColor: "rgba(214, 190, 138, 0.25)" }}
              >
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#D6BE8A" }}>
                    24/7/365
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#A9C4AE" }}>
                    Enquiry &amp; Front Desk
                  </span>
                </div>
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#D6BE8A" }}>
                    Zero Gaps
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#A9C4AE" }}>
                    Compliance &amp; Deadlines
                  </span>
                </div>
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#D6BE8A" }}>
                    Instant
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#A9C4AE" }}>
                    Urgent Maintenance Triage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: THE CORE PROBLEM & TWO RISKS
            Light Background: #F5F2E9 | Primary: #12372A
            ========================================================================= */}
        <section className="w-full py-20 md:py-24 border-b" style={{ borderColor: "rgba(18, 55, 42, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.15em] font-semibold"
                  style={{ color: "#1B5140" }}
                >
                  The Operational Reality
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal leading-tight" style={{ color: "#12372A" }}>
                  Enquiries Never Stop. <br />
                  Neither Should Your Front Office.
                </h2>
                <p className="font-body-lg text-base sm:text-lg leading-relaxed" style={{ color: "#1B5140" }}>
                  Online and hybrid estate agents and property managers run lean teams, yet enquiries never stop. Buyers and tenants browse at night, landlords report problems at weekends, and a tenant with a leak calls at 2 a.m.
                </p>
                <p className="font-body-md text-sm sm:text-base leading-relaxed" style={{ color: "#1B5140", opacity: 0.9 }}>
                  Solvantra gives you an always-on team that answers, books, logs and follows up, and keeps your compliance admin on track so small gaps do not turn into costly penalties.
                </p>
              </div>

              {/* Two Risks, One Partner Box */}
              <div
                className="lg:col-span-6 p-8 sm:p-10 rounded-2xl border shadow-md relative overflow-hidden"
                style={{
                  backgroundColor: "#12372A",
                  borderColor: "rgba(214, 190, 138, 0.3)",
                  color: "#F8F5EC",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-20"
                  style={{ backgroundColor: "#D6BE8A" }}
                />
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.14em] font-bold block mb-2"
                  style={{ color: "#D6BE8A" }}
                >
                  Two Risks, One Partner
                </span>
                <h3 className="font-headline-sm text-2xl font-normal mb-4" style={{ color: "#F8F5EC" }}>
                  Protecting Your Revenue &amp; Reputation
                </h3>
                <div className="space-y-4 font-body-md text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#F8F5EC", opacity: 0.9 }}>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#1B5140", color: "#D6BE8A" }}>
                      ✕
                    </div>
                    <span>
                      <strong style={{ color: "#D6BE8A" }}>Missed enquiries</strong> cost you valuable instructions, lost viewings, and prospective tenants who immediately move to the next agency.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "#1B5140", color: "#D6BE8A" }}>
                      ✕
                    </div>
                    <span>
                      <strong style={{ color: "#D6BE8A" }}>Missed compliance steps</strong> cost you heavy council fines, legal disputes, deposit penalties, and permanent brand damage.
                    </span>
                  </div>
                </div>
                <div
                  className="pt-4 border-t flex items-center gap-2 text-xs font-semibold"
                  style={{ borderColor: "rgba(214, 190, 138, 0.25)", color: "#A9C4AE" }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#D6BE8A]" />
                  <span>Solvantra covers both seamlessly around the clock.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: WHAT YOU GET WITH SOLVANTRA (4 CORE PILLARS)
            Primary: #12372A | Accent: #D6BE8A
            ========================================================================= */}
        <section className="w-full py-24 border-b" style={{ borderColor: "rgba(18, 55, 42, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#1B5140" }}
              >
                Comprehensive Coverage
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#12372A" }}>
                What You Get With Solvantra
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#1B5140" }}>
                Built specifically to give property businesses round-the-clock coverage and tighter compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fourPillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="p-7 rounded-xl border shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(18, 55, 42, 0.15)",
                  }}
                >
                  <div>
                    <span
                      className="font-stat-numeral text-3xl font-bold block mb-3"
                      style={{ color: "#12372A" }}
                    >
                      {pillar.num}
                    </span>
                    <h3 className="font-headline-sm text-xl font-semibold mb-4" style={{ color: "#12372A" }}>
                      {pillar.title}
                    </h3>
                    <ul className="space-y-2.5 font-body-sm text-xs leading-relaxed" style={{ color: "#1B5140" }}>
                      {pillar.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#1B5140" }} />
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
            SECTION 3: BUILT FOR THE FULL PROPERTY ECOSYSTEM
            6 Industry Segments from PDF
            ========================================================================= */}
        <section className="w-full py-24 border-b" style={{ borderColor: "rgba(18, 55, 42, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#1B5140" }}
              >
                Target Sectors
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#12372A" }}>
                Built for the Full Property Ecosystem
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#1B5140" }}>
                Supporting property businesses that want round-the-clock coverage and tighter compliance without growing a large in-house team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audienceGroups.map((group, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-xl border shadow-sm flex flex-col justify-between"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(18, 55, 42, 0.15)",
                  }}
                >
                  <div>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs mb-4"
                      style={{ backgroundColor: "#12372A", color: "#D6BE8A" }}
                    >
                      0{idx + 1}
                    </div>
                    <h3 className="font-headline-sm text-xl font-semibold mb-3" style={{ color: "#12372A" }}>
                      {group.title}
                    </h3>
                    <ul className="space-y-2 text-xs font-body-sm" style={{ color: "#1B5140" }}>
                      {group.services.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-bold text-[#12372A]">•</span>
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
            ========================================================================= */}
        <section id="services-breakdown" className="w-full py-24 border-b" style={{ borderColor: "rgba(18, 55, 42, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#1B5140" }}
              >
                End-to-End Tenancy Lifecycle
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#12372A" }}>
                What We Handle For You
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#1B5140" }}>
                Support across the full journey, from the very first enquiry to tenancy conclusion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {fullJourneyServices.map((srv) => (
                <div
                  key={srv.num}
                  className="p-7 rounded-xl border shadow-sm flex flex-col justify-between group transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(18, 55, 42, 0.15)",
                  }}
                >
                  <div>
                    <span
                      className="font-stat-numeral text-2xl font-bold block mb-2"
                      style={{ color: "#12372A" }}
                    >
                      {srv.num}
                    </span>
                    <h3 className="font-headline-sm text-xl font-semibold mb-2" style={{ color: "#12372A" }}>
                      {srv.title}
                    </h3>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#1B5140" }}>
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
            Emergency / Urgent / Routine
            ========================================================================= */}
        <section className="w-full py-20 border-b" style={{ borderColor: "rgba(18, 55, 42, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#1B5140" }}
              >
                Maintenance Helpdesk
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#12372A" }}>
                Urgency Triaged, Issues Escalated
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-2" style={{ color: "#1B5140" }}>
                Every repair report is logged with detail and time, then handled by priority under rules you set.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {maintenanceTriage.map((row, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-xl border shadow-sm flex flex-col justify-between"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(18, 55, 42, 0.15)",
                  }}
                >
                  <div>
                    <span
                      className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4"
                      style={{ backgroundColor: row.badgeBg, color: row.badgeText }}
                    >
                      {row.priority} Priority
                    </span>
                    <h4 className="font-headline-sm text-base font-semibold mb-2" style={{ color: "#12372A" }}>
                      Examples
                    </h4>
                    <p className="font-body-sm text-xs mb-4" style={{ color: "#1B5140" }}>
                      {row.examples}
                    </p>
                    <h4 className="font-headline-sm text-base font-semibold mb-2" style={{ color: "#12372A" }}>
                      What We Do
                    </h4>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#1B5140" }}>
                      {row.action}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: COMPLIANCE ADMINISTRATION & RISK MITIGATION
            Renters' Rights Act 2025/2026, Fees, Safety Checks, US Rules
            ========================================================================= */}
        <section
          className="w-full py-24 text-surface-bright relative"
          style={{ backgroundColor: "#12372A", color: "#F8F5EC" }}
        >
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-semibold block mb-2"
                style={{ color: "#D6BE8A" }}
              >
                Regulatory Rigour
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal leading-tight">
                How Solvantra Keeps You on Track
              </h2>
              <p className="font-body-lg text-base sm:text-lg mt-3" style={{ color: "#F8F5EC", opacity: 0.9 }}>
                We do not replace your legal adviser or compliance officer. We build the daily operational habits, scripts, reminders, and time-stamped records that stop avoidable breaches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {complianceStandards.map((std, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border"
                  style={{
                    backgroundColor: "#1B5140",
                    borderColor: "rgba(214, 190, 138, 0.25)",
                    color: "#F8F5EC",
                  }}
                >
                  <h3 className="font-headline-sm text-lg font-semibold mb-2" style={{ color: "#D6BE8A" }}>
                    {std.area}
                  </h3>
                  <p className="font-body-sm text-xs mb-3 leading-relaxed" style={{ color: "#F8F5EC", opacity: 0.85 }}>
                    <strong className="block text-[11px] uppercase tracking-wider text-[#A9C4AE] mb-1">Requirement:</strong>
                    {std.requirement}
                  </p>
                  <p className="font-body-sm text-xs leading-relaxed pt-2 border-t" style={{ borderColor: "rgba(214, 190, 138, 0.15)", color: "#F8F5EC" }}>
                    <strong className="block text-[11px] uppercase tracking-wider text-[#D6BE8A] mb-1">Our Habit:</strong>
                    {std.mitigation}
                  </p>
                </div>
              ))}
            </div>

            {/* You Stay in Control Box */}
            <div
              className="p-6 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                backgroundColor: "rgba(27, 81, 64, 0.6)",
                borderColor: "rgba(214, 190, 138, 0.3)",
              }}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 shrink-0" style={{ color: "#D6BE8A" }} />
                <span className="font-body-md text-xs sm:text-sm">
                  <strong>You stay in control:</strong> You remain the responsible party. We strictly follow your approved scripts, fee lists, and policies, flagging any edge cases for your decision.
                </span>
              </div>
              <span className="font-eyebrow text-[10px] uppercase tracking-wider shrink-0" style={{ color: "#A9C4AE" }}>
                Auditable Written Trail
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: ONBOARDING & LAUNCH PROCESS
            4 Clear Steps
            ========================================================================= */}
        <section className="w-full py-20 border-b" style={{ borderColor: "rgba(18, 55, 42, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#1B5140" }}
              >
                Seamless Implementation
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#12372A" }}>
                Simple Onboarding, Quick Launch
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-2" style={{ color: "#1B5140" }}>
                We adapt to your existing phone system, CRM, diary, and property management software.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {onboardingSteps.map((s) => (
                <div
                  key={s.step}
                  className="p-6 rounded-xl border shadow-sm flex flex-col justify-between"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(18, 55, 42, 0.15)",
                  }}
                >
                  <div>
                    <span
                      className="font-stat-numeral text-2xl font-bold block mb-3"
                      style={{ color: "#12372A" }}
                    >
                      {s.step}
                    </span>
                    <h3 className="font-headline-sm text-lg font-semibold mb-2" style={{ color: "#12372A" }}>
                      {s.title}
                    </h3>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#1B5140" }}>
                      {s.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: DISCOVERY CTA BANNER (REAL ESTATE PALETTE)
            Primary: #12372A | Accent: #D6BE8A | Text: #F8F5EC
            ========================================================================= */}
        <section
          className="w-full py-20"
          style={{ backgroundColor: "#12372A", color: "#F8F5EC" }}
        >
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div
              className="p-8 md:p-14 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
              style={{
                backgroundColor: "#1B5140",
                borderColor: "rgba(214, 190, 138, 0.3)",
              }}
            >
              <div className="max-w-xl">
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.16em] block mb-2 font-bold"
                  style={{ color: "#D6BE8A" }}
                >
                  GET STARTED
                </span>
                <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-normal mb-3" style={{ color: "#F8F5EC" }}>
                  Let's make sure you never miss an enquiry or a deadline.
                </h3>
                <p className="font-body-md text-sm leading-relaxed" style={{ color: "#F8F5EC", opacity: 0.9 }}>
                  Book a short discovery call and we will show you how Solvantra can cover your phones, support your viewings and maintenance, and keep your compliance admin on track.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-label-md text-sm transition-all duration-200 cursor-pointer shadow-lg hover:brightness-105"
                  style={{
                    backgroundColor: "#D6BE8A",
                    color: "#12372A",
                    fontWeight: 700,
                  }}
                >
                  <span>Book Discovery Call</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Legal Disclaimer Footnote from Source PDF */}
            <p className="text-[11px] text-center mt-6 font-body-sm" style={{ color: "#A9C4AE", opacity: 0.8 }}>
              Solvantra supports your compliance processes and does not provide legal advice. Your agency remains responsible for meeting its legal obligations.
            </p>
          </div>
        </section>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Real Estate Property Services"
      />
    </>
  );
}
