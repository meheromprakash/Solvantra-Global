"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Flame,
  Zap,
  Droplets,
  Calendar,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  ShieldCheck,
  Send,
  Star,
  Users,
  Repeat,
  FileCheck,
  TrendingUp,
  Cpu,
  Layers,
  Check,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomeServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // HOME SERVICES BRAND PALETTE
  // Primary: #20262E
  // Secondary: #303A46
  // Accent: #D97745
  // Highlight: #F2B66D
  // Light background: #F4F1EA
  // Text on dark backgrounds: #FAF8F4

  const tradeSectors = [
    {
      title: "HVAC",
      icon: Flame,
      services: "Repair, replacement quotes, tune-ups, maintenance plans, no-heat and no-cool emergencies.",
    },
    {
      title: "Plumbing",
      icon: Droplets,
      services: "Leaks, burst pipes, drains, water heaters, re-pipes, and after-hours emergency dispatch.",
    },
    {
      title: "Electrical",
      icon: Zap,
      services: "Outages, breakers, panels, rewiring, lighting, EV chargers, and electrical safety inspections.",
    },
    {
      title: "Specialty & Field Services",
      icon: Wrench,
      services: "Garage doors, appliances, roofing, solar, water treatment, pest control, cleaning, and appointment-driven field services.",
    },
  ];

  const customerJourney = [
    {
      step: "01",
      title: "Answer",
      description: "24/7 inbound call handling with urgency and customer details captured live in your company name.",
    },
    {
      step: "02",
      title: "Schedule",
      description: "Direct appointment scheduling in your calendar or field service management software.",
    },
    {
      step: "03",
      title: "Coordinate",
      description: "Technician coordination with job address, access notes, issue summary, and customer history.",
    },
    {
      step: "04",
      title: "Dispatch",
      description: "Emergency dispatch support executing according to your exact on-call and escalation rules.",
    },
    {
      step: "05",
      title: "Follow Through",
      description: "Pre-visit reminders, confirmations, reschedule management, and post-service satisfaction follow-up.",
    },
  ];

  const operatingLoopSteps = [
    "Answer in your company name.",
    "Understand the issue, urgency, property, and safety concerns.",
    "Book the right time, job type, and technician.",
    "Offer the right extra when it genuinely fits.",
    "Brief the technician before the visit.",
    "Keep the customer and technician updated.",
    "Follow up, request feedback, and book the next service.",
  ];

  const relationshipValue = [
    {
      title: "Relevant Offers",
      description: "Light, approved offers for maintenance plans, seasonal tune-ups, safety inspections, and system add-ons.",
    },
    {
      title: "Fast Follow-Up",
      description: "Fast follow-up on web leads, missed calls, unbooked quotes, and past customer inquiries before they look elsewhere.",
    },
    {
      title: "Repeat Business",
      description: "5-star review requests, satisfaction check-ins, and proactive rebooking for recurring maintenance contracts.",
    },
    {
      title: "Clear Reporting",
      description: "Transparent telemetry on call volume, booked jobs, missed-call recovery, upsell results, and booking trends.",
    },
  ];

  const sharedViewStages = [
    {
      stage: "Booking",
      customer: "Service date, arrival window, and job details confirmed.",
      technician: "New work order notification with contact details and issue brief.",
    },
    {
      stage: "Before & Day of Visit",
      customer: "Automated reminders, on-the-way updates, and easy rescheduling.",
      technician: "Access notes, safety alerts, and real-time schedule changes synchronized.",
    },
    {
      stage: "After the Visit",
      customer: "Thank-you message, satisfaction check, and direct review prompts.",
      technician: "Job closure notes and follow-up recommendation tasks captured.",
    },
    {
      stage: "Ongoing Relationship",
      customer: "Seasonal inspection reminders and tailored maintenance plan offers.",
      technician: "Steady pipeline of scheduled maintenance and repeat service visits.",
    },
  ];

  const growthSignals = [
    {
      title: "Coverage Gaps",
      description: "You lose valuable jobs after hours, on weekends, or when the front office lines are busy.",
    },
    {
      title: "Overloaded Team",
      description: "Your dispatcher or office coordinator is overwhelmed answering phones instead of managing field work.",
    },
    {
      title: "Growing Carefully",
      description: "You want to increase capacity and booked jobs without hiring, training, and staffing a full internal call center.",
    },
    {
      title: "More From Each Customer",
      description: "You want higher close rates on estimates and consistent repeat business from your existing customer base.",
    },
  ];

  const practicalAlternative = [
    {
      title: "Trained on Your Operation",
      description: "Agents are trained on your specific services, service area, pricing guidelines, emergency rules, and booking process.",
    },
    {
      title: "Your Company Voice",
      description: "Homeowners hear a friendly, professional voice representing your business by name on every interaction.",
    },
    {
      title: "Updates Where Work Happens",
      description: "Updates flow seamlessly through phone, SMS, email, or directly inside your existing field service software.",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full palette-home-services" style={{ backgroundColor: "#F4F1EA", color: "#20262E" }}>
        {/* =========================================================================
            HERO SECTION (HOME SERVICES PALETTE)
            Primary: #20262E | Accent: #D97745 | Highlight: #F2B66D | Light: #F4F1EA
            ========================================================================= */}
        <section
          className="relative w-full overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 border-b"
          style={{
            backgroundColor: "#20262E",
            color: "#FAF8F4",
            borderColor: "rgba(217, 119, 69, 0.25)",
          }}
        >
          {/* Subtle Accent Glow */}
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: "#D97745" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
            style={{ backgroundColor: "#F2B66D" }}
          />

          <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.18em] font-semibold block mb-4"
                style={{ color: "#F2B66D" }}
              >
                SOLVANTRA HOME SERVICES • 24/7 DISPATCH &amp; COORDINATION
              </span>

              <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] mb-6">
                Solvantra Keeps Every Home-Service{" "}
                <span className="italic" style={{ color: "#D97745" }}>
                  Enquiry Moving.
                </span>
              </h1>

              <p
                className="font-body-lg text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
                style={{ color: "#FAF8F4", opacity: 0.92 }}
              >
                Coverage, coordination, and follow-through for responsive home-service companies. Your 24/7 front desk, answering in your company name.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-label-md text-sm transition-all duration-200 cursor-pointer shadow-lg hover:brightness-105"
                  style={{
                    backgroundColor: "#D97745",
                    color: "#FAF8F4",
                    fontWeight: 700,
                  }}
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#operating-loop"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-label-md text-sm transition-all duration-200 border hover:bg-white/5"
                  style={{
                    borderColor: "rgba(242, 182, 109, 0.5)",
                    color: "#FAF8F4",
                  }}
                >
                  <span>Explore the 7-Step Operating Loop</span>
                </a>
              </div>

              {/* Credential Metrics Bar */}
              <div
                className="pt-6 border-t grid grid-cols-3 gap-4"
                style={{ borderColor: "rgba(217, 119, 69, 0.25)" }}
              >
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#F2B66D" }}>
                    24/7/365
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#FAF8F4", opacity: 0.85 }}>
                    Front Desk Coverage
                  </span>
                </div>
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#F2B66D" }}>
                    100%
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#FAF8F4", opacity: 0.85 }}>
                    In Your Company Name
                  </span>
                </div>
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#F2B66D" }}>
                    Turnkey
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#FAF8F4", opacity: 0.85 }}>
                    Field Software Parity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: THE COST OF SILENCE
            "A Missed Call is Usually a Lost Job"
            ========================================================================= */}
        <section className="w-full py-20 md:py-24 border-b" style={{ borderColor: "rgba(32, 38, 46, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-5">
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.15em] font-semibold"
                  style={{ color: "#D97745" }}
                >
                  The Cost of Silence
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal leading-tight" style={{ color: "#20262E" }}>
                  A Missed Call is Usually a Lost Job.
                </h2>
                <div className="space-y-4 font-body-lg text-base leading-relaxed" style={{ color: "#303A46" }}>
                  <p>
                    <strong style={{ color: "#20262E" }}>Urgency wins:</strong> Homeowners with a sudden leak, power outage, or broken AC unit don't wait for office hours. They call the very next contractor on the list until someone answers.
                  </p>
                  <p>
                    <strong style={{ color: "#20262E" }}>Gaps redirect demand:</strong> After-hours voicemail, peak-season phone overload, and busy office lines quietly turn your hard-earned demand into booked revenue for your competitor.
                  </p>
                </div>
              </div>

              {/* The Front Desk Box */}
              <div
                className="lg:col-span-6 p-8 sm:p-10 rounded-2xl border shadow-md relative overflow-hidden"
                style={{
                  backgroundColor: "#20262E",
                  borderColor: "rgba(217, 119, 69, 0.35)",
                  color: "#FAF8F4",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-20"
                  style={{ backgroundColor: "#D97745" }}
                />
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.14em] font-bold block mb-2"
                  style={{ color: "#F2B66D" }}
                >
                  THE 24/7 FRONT DESK
                </span>
                <h3 className="font-headline-sm text-2xl font-normal mb-3" style={{ color: "#FAF8F4" }}>
                  Always Open. Always Yours.
                </h3>
                <p className="font-body-md text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#FAF8F4", opacity: 0.9 }}>
                  In your company name. We answer every call, book the visit directly into your diary, brief the technician with full context, and keep the customer informed at every step.
                </p>
                <div className="space-y-2.5 pt-4 border-t text-xs font-medium" style={{ borderColor: "rgba(217, 119, 69, 0.25)", color: "#F2B66D" }}>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97745]" />
                    <span>Nights, weekends, holidays, and peak-season overflow covered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D97745]" />
                    <span>Web forms, live chat, and immediate missed-call callbacks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: BUILT FOR TRADES THAT RUN ON FAST RESPONSE
            HVAC • Plumbing • Electrical • Related Services
            ========================================================================= */}
        <section className="w-full py-24 border-b" style={{ borderColor: "rgba(32, 38, 46, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#D97745" }}
              >
                Trade Expertise
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#20262E" }}>
                Built for the Trades That Run on Fast Response
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#303A46" }}>
                Our team understands the specific urgency, equipment terminology, and dispatch workflows of home service businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tradeSectors.map((sector, i) => {
                const IconComp = sector.icon;
                return (
                  <div
                    key={i}
                    className="p-7 rounded-xl border shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    style={{
                      backgroundColor: "#FFFFFF",
                      borderColor: "rgba(48, 58, 70, 0.18)",
                    }}
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm"
                        style={{ backgroundColor: "#20262E", color: "#F2B66D" }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-headline-sm text-2xl font-semibold mb-3" style={{ color: "#20262E" }}>
                        {sector.title}
                      </h3>
                      <p className="font-body-sm text-xs sm:text-sm leading-relaxed" style={{ color: "#303A46" }}>
                        {sector.services}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE CUSTOMER JOURNEY
            From First Ring to Repeat Booking (5 Steps)
            ========================================================================= */}
        <section className="w-full py-24 border-b" style={{ borderColor: "rgba(32, 38, 46, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#D97745" }}
              >
                The Customer Journey
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#20262E" }}>
                From First Ring to Repeat Booking
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#303A46" }}>
                Five deliberate touchpoints that turn incoming inquiries into loyal, high-value repeat clients.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {customerJourney.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-xl border shadow-sm flex flex-col justify-between"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(48, 58, 70, 0.18)",
                  }}
                >
                  <div>
                    <span
                      className="font-stat-numeral text-3xl font-bold block mb-3"
                      style={{ color: "#D97745" }}
                    >
                      {step.step}
                    </span>
                    <h3 className="font-headline-sm text-xl font-semibold mb-2" style={{ color: "#20262E" }}>
                      {step.title}
                    </h3>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#303A46" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: THE OPERATING LOOP (7 STEPS)
            ========================================================================= */}
        <section id="operating-loop" className="w-full py-24 border-b" style={{ borderColor: "rgba(32, 38, 46, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block"
                  style={{ color: "#D97745" }}
                >
                  The Operating Loop
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal leading-tight" style={{ color: "#20262E" }}>
                  Seven Steps Keep Every Job Clear
                </h2>
                <p className="font-body-md text-sm sm:text-base leading-relaxed" style={{ color: "#303A46" }}>
                  A disciplined, repeatable protocol executed on every service call to maintain consistency, customer delight, and technician readiness.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div
                  className="p-8 sm:p-10 rounded-2xl border shadow-md space-y-4"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(48, 58, 70, 0.2)",
                  }}
                >
                  {operatingLoopSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 pb-3.5 border-b last:border-b-0 last:pb-0" style={{ borderColor: "rgba(48, 58, 70, 0.1)" }}>
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5"
                        style={{ backgroundColor: "#20262E", color: "#F2B66D" }}
                      >
                        {idx + 1}
                      </span>
                      <span className="font-body-md text-sm sm:text-base font-medium" style={{ color: "#20262E" }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: ONE SHARED VIEW & VALUE AFTER THE CALL
            Customer & Technician Synchronized
            ========================================================================= */}
        <section
          className="w-full py-24 text-surface-bright relative"
          style={{ backgroundColor: "#20262E", color: "#FAF8F4" }}
        >
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-semibold block mb-2"
                style={{ color: "#F2B66D" }}
              >
                Operational Visibility
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal leading-tight">
                One Shared View: Customers &amp; Technicians Synchronized
              </h2>
              <p className="font-body-lg text-base sm:text-lg mt-3" style={{ color: "#FAF8F4", opacity: 0.9 }}>
                No disconnected messages or confused field visits. Everyone stays informed at every stage of the job.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {sharedViewStages.map((stg, i) => (
                <div
                  key={i}
                  className="p-6 rounded-xl border flex flex-col justify-between"
                  style={{
                    backgroundColor: "#303A46",
                    borderColor: "rgba(217, 119, 69, 0.3)",
                    color: "#FAF8F4",
                  }}
                >
                  <div>
                    <span className="font-eyebrow text-[10px] uppercase tracking-wider font-bold block mb-2" style={{ color: "#F2B66D" }}>
                      Stage 0{i + 1}
                    </span>
                    <h3 className="font-headline-sm text-xl font-semibold mb-4" style={{ color: "#FAF8F4" }}>
                      {stg.stage}
                    </h3>
                    <div className="space-y-3 font-body-sm text-xs">
                      <div>
                        <strong className="block text-[11px] uppercase tracking-wider text-[#D97745] mb-0.5">
                          Customer View:
                        </strong>
                        <p style={{ color: "#FAF8F4", opacity: 0.85 }}>{stg.customer}</p>
                      </div>
                      <div className="pt-2 border-t" style={{ borderColor: "rgba(250, 248, 244, 0.1)" }}>
                        <strong className="block text-[11px] uppercase tracking-wider text-[#F2B66D] mb-0.5">
                          Technician View:
                        </strong>
                        <p style={{ color: "#FAF8F4", opacity: 0.85 }}>{stg.technician}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Relationship After the Call Grid */}
            <div className="pt-16 border-t" style={{ borderColor: "rgba(217, 119, 69, 0.25)" }}>
              <div className="max-w-2xl mb-12">
                <span className="font-eyebrow text-xs uppercase tracking-[0.16em] font-semibold block mb-2" style={{ color: "#F2B66D" }}>
                  Maximizing Customer Lifetime Value
                </span>
                <h3 className="font-headline-md text-2xl sm:text-3xl font-normal">
                  More Value From Every Customer Relationship
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relationshipValue.map((val, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border"
                    style={{
                      backgroundColor: "rgba(48, 58, 70, 0.6)",
                      borderColor: "rgba(242, 182, 109, 0.25)",
                    }}
                  >
                    <h4 className="font-headline-sm text-lg font-semibold mb-2" style={{ color: "#F2B66D" }}>
                      {val.title}
                    </h4>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#FAF8F4", opacity: 0.85 }}>
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: THE PRACTICAL ALTERNATIVE & GROWTH SIGNALS
            ========================================================================= */}
        <section className="w-full py-24 border-b" style={{ borderColor: "rgba(32, 38, 46, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#D97745" }}
              >
                Scale Without Overhead
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#20262E" }}>
                Professional Coverage Without Building Your Own Call Center
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#303A46" }}>
                The practical alternative for growth-minded contractors who want seamless operations without huge fixed overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {practicalAlternative.map((alt, i) => (
                <div
                  key={i}
                  className="p-7 rounded-xl border shadow-sm flex flex-col justify-between"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(48, 58, 70, 0.18)",
                  }}
                >
                  <div>
                    <h3 className="font-headline-sm text-xl font-semibold mb-3" style={{ color: "#20262E" }}>
                      {alt.title}
                    </h3>
                    <p className="font-body-sm text-xs sm:text-sm leading-relaxed" style={{ color: "#303A46" }}>
                      {alt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Growth Signals */}
            <div
              className="p-8 sm:p-10 rounded-2xl border"
              style={{
                backgroundColor: "#FAF8F4",
                borderColor: "rgba(217, 119, 69, 0.25)",
              }}
            >
              <h3 className="font-headline-sm text-xl font-semibold mb-6 text-center" style={{ color: "#20262E" }}>
                Solvantra is Right When Growth is Being Held Back by the Phone
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {growthSignals.map((sig, i) => (
                  <div key={i} className="space-y-2">
                    <span className="font-label-md text-sm font-bold flex items-center gap-1.5" style={{ color: "#D97745" }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{sig.title}</span>
                    </span>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#303A46" }}>
                      {sig.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: DISCOVERY CTA BANNER (HOME SERVICES PALETTE)
            Primary: #20262E | Secondary: #303A46 | Accent: #D97745 | Text: #FAF8F4
            ========================================================================= */}
        <section
          className="w-full py-20"
          style={{ backgroundColor: "#20262E", color: "#FAF8F4" }}
        >
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div
              className="p-8 md:p-14 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
              style={{
                backgroundColor: "#303A46",
                borderColor: "rgba(217, 119, 69, 0.35)",
              }}
            >
              <div className="max-w-xl">
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.16em] block mb-2 font-bold"
                  style={{ color: "#F2B66D" }}
                >
                  THE NEXT BOOKED JOB
                </span>
                <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-normal mb-3" style={{ color: "#FAF8F4" }}>
                  Turn Every Ring Into the Next Booked Job.
                </h3>
                <p className="font-body-md text-sm leading-relaxed" style={{ color: "#FAF8F4", opacity: 0.9 }}>
                  Solvantra gives home service companies the coverage, coordination, and follow-through to stay responsive around the clock.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-label-md text-sm transition-all duration-200 cursor-pointer shadow-lg hover:brightness-105"
                  style={{
                    backgroundColor: "#D97745",
                    color: "#FAF8F4",
                    fontWeight: 700,
                  }}
                >
                  <span>Book Discovery Call</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-[11px] text-center mt-6 font-body-sm" style={{ color: "#F2B66D", opacity: 0.8 }}>
              Solvantra Home Services — Coverage. Coordination. Follow-through.
            </p>
          </div>
        </section>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Home Services Operations"
      />
    </>
  );
}
