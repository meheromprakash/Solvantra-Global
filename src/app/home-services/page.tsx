"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Flame,
  Droplets,
  Zap,
  Wrench,
  Clock,
  PhoneCall,
  AlertTriangle,
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  Calendar,
  Users,
  HeartHandshake,
  CheckCircle2,
  FileText,
  BarChart3,
  ChevronDown,
  ChevronRight,
  Activity,
  Sparkles,
  Layers,
  Repeat,
  Send,
  Building2,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomeServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Active section for sticky segmented control ("field-trades" | "home-care")
  const [activeSegment, setActiveSegment] = useState<"field-trades" | "home-care">("field-trades");

  // Hero incoming dispatch ticker state (0-3)
  const [activeDispatchRow, setActiveDispatchRow] = useState(0);

  // Trade Expertise interactive accordion state (0-3)
  const [expandedTrade, setExpandedTrade] = useState(0);

  // Home Care Call-Out simulation loop state (0-5)
  const [activeCallOutStep, setActiveCallOutStep] = useState(0);

  // Hero dispatch ticker cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDispatchRow((prev) => (prev + 1) % 4);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Home Care Call-out step simulation cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCallOutStep((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Scroll listener for sticky segmented control active state
  useEffect(() => {
    const handleScroll = () => {
      const homeCareEl = document.getElementById("home-care");
      if (homeCareEl) {
        const rect = homeCareEl.getBoundingClientRect();
        // If the top of Home Care is within 250px of the viewport top, highlight Home Care
        if (rect.top <= 250) {
          setActiveSegment("home-care");
        } else {
          setActiveSegment("field-trades");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper with header offset
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -120; // Accounts for navbar and sticky segmented control
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Dispatch ticker rows for Hero
  const dispatchRows = [
    {
      title: "Burst pipe",
      status: "Urgent",
      detail: "Technician briefed",
      chipClass: "bg-[var(--accent)] text-[var(--primary)]",
    },
    {
      title: "No-cool AC",
      status: "Booked",
      detail: "Assigned for today 14:00",
      chipClass: "bg-[var(--highlight)] text-[var(--primary)]",
    },
    {
      title: "Missed call",
      status: "Callback",
      detail: "Callback sent in 4m",
      chipClass: "bg-[var(--accent)] text-[var(--primary)]",
    },
    {
      title: "Quote follow-up",
      status: "Scheduled",
      detail: "Customer confirmed visit",
      chipClass: "bg-[var(--highlight)] text-[var(--primary)]",
    },
  ];

  // Trades horizontal/vertical accordion data
  const tradePanels = [
    {
      id: "hvac",
      title: "HVAC",
      icon: Flame,
      summary: "Heating, ventilation, air conditioning",
      detail:
        "Repair, replacement quotes, tune-ups, maintenance plans, no-heat and no-cool emergencies.",
    },
    {
      id: "plumbing",
      title: "Plumbing",
      icon: Droplets,
      summary: "Residential & commercial plumbing",
      detail:
        "Leaks, burst pipes, drains, water heaters, re-pipes, and after-hours emergency dispatch.",
    },
    {
      id: "electrical",
      title: "Electrical",
      icon: Zap,
      summary: "Licensed electrical contracting",
      detail:
        "Outages, breakers, panels, rewiring, lighting, EV chargers, and safety inspections.",
    },
    {
      id: "related",
      title: "Related Services",
      icon: Wrench,
      summary: "Specialty & field installations",
      detail:
        "Garage doors, appliances, roofing, solar, water treatment, pest control, cleaning, and other appointment-driven field services.",
    },
  ];

  // Customer journey 5 steps
  const journeySteps = [
    {
      num: "01",
      title: "Answer",
      text: "24/7 inbound call handling with urgency and customer details captured.",
    },
    {
      num: "02",
      title: "Schedule",
      text: "Appointment scheduling in your calendar or field service software.",
    },
    {
      num: "03",
      title: "Coordinate",
      text: "Technician coordination with address, access notes, issue summary, and customer history.",
    },
    {
      num: "04",
      title: "Dispatch",
      text: "Emergency dispatch support using your escalation rules.",
    },
    {
      num: "05",
      title: "Follow through",
      text: "Reminders, confirmations, reschedules, and post-service follow-up.",
    },
  ];

  // 7 Operating Loop Steps
  const operatingLoopSteps = [
    "Answer in your company name.",
    "Understand the issue, urgency, property, and safety concerns.",
    "Book the right time, job type, and technician.",
    "Offer the right extra when it genuinely fits.",
    "Brief the technician before the visit.",
    "Keep the customer and technician updated.",
    "Follow up, request feedback, and book the next service.",
  ];

  // Shared View 4 Stages
  const sharedViewStages = [
    {
      stage: "Booking",
      customer: "Date, window, and service details confirmed.",
      technician: "New job notification and contact information.",
    },
    {
      stage: "Before & Day of Visit",
      customer: "Reminders, easy rescheduling, and on-the-way updates.",
      technician: "Access notes, safety alerts, and schedule changes stay synchronized.",
    },
    {
      stage: "After the Visit",
      customer: "Thanks, feedback check-in, and review prompts.",
      technician: "Job notes and follow-up tasks ready for dispatch.",
    },
    {
      stage: "Ongoing Relationship",
      customer: "Seasonal reminders and relevant maintenance offers.",
      technician: "Predictable pipeline of recurring maintenance visits.",
    },
  ];

  // Home Care: 6 Audiences
  const homeCareAudiences = [
    "Home health agencies",
    "Non-medical home care",
    "Private duty nursing",
    "Adult day care and respite",
    "Nurse and caregiver registries",
    "Disability and community support",
  ];

  // Home Care: 9 Services
  const homeCareServices = [
    {
      num: "01",
      title: "24/7 Intake Call Handling",
      text: "Every call and referral answered live; details captured using your approved script.",
      icon: PhoneCall,
    },
    {
      num: "02",
      title: "Visit Scheduling",
      text: "Visits scheduled strictly according to your agency rules and caregiver skill sets.",
      icon: Calendar,
    },
    {
      num: "03",
      title: "Shift Confirmations & Reminders",
      text: "Pre-visit reminders and confirmations to eliminate forgotten shifts and late arrivals.",
      icon: Clock,
    },
    {
      num: "04",
      title: "Call-Out & Gap Coverage",
      text: "Handled from the first minute; replacement pool contacted in priority order; families told first.",
      icon: AlertTriangle,
    },
    {
      num: "05",
      title: "Schedule Changes",
      text: "Real-time updates synchronized across caregivers, families, and agency coordinators.",
      icon: Repeat,
    },
    {
      num: "06",
      title: "Family & Client Updates",
      text: "Proactive communication ensuring families are never left wondering who is arriving.",
      icon: HeartHandshake,
    },
    {
      num: "07",
      title: "Missed-Visit Follow-Up",
      text: "Rapid tracking of late clock-ins to safeguard client safety and EVV billing compliance.",
      icon: CheckCircle2,
    },
    {
      num: "08",
      title: "Credential & Document Reminders",
      text: "Proactive tracking and reminders for license renewals and clinical certifications.",
      icon: FileText,
    },
    {
      num: "09",
      title: "Reporting",
      text: "Transparent telemetry on call volume, shifts covered, response times, and quality metrics.",
      icon: BarChart3,
    },
  ];

  // Call-out 6 steps simulation
  const callOutFlowSteps = [
    { num: "01", text: "Call-out received; on-call coordinator notified." },
    { num: "02", text: "Check client requirements & care plan." },
    { num: "03", text: "Contact replacement pool in your approved order." },
    { num: "04", text: "Confirm the cover with available caregiver." },
    { num: "05", text: "Tell the family before they ever have to call." },
    { num: "06", text: "Escalate if uncovered within your set time." },
  ];

  return (
    <div data-sector="home" className="flex flex-col w-full selection:bg-[var(--accent)] selection:text-[var(--primary)]">
      {/* =========================================================================
          1. HERO (Dark Primary #20262E)
         ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[var(--primary)] text-[var(--on-dark)] pt-32 md:pt-40 pb-20 md:pb-28">
        {/* Fine grid background texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--on-dark) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient accent glow */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ backgroundColor: "var(--highlight)" }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left 7 Columns: Hero Pitch */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--highlight)] block">
                SOLVANTRA HOME SERVICES · 24/7 DISPATCH &amp; COORDINATION
              </span>

              <h1 className="font-serif text-[42px] sm:text-[54px] md:text-[62px] font-normal leading-[1.08] tracking-tight text-[var(--on-dark)]">
                Keep Every{" "}
                <span className="italic font-serif text-[var(--accent)]">
                  Enquiry Moving.
                </span>
              </h1>

              <p className="font-sans text-[17px] sm:text-[19px] md:text-[20px] leading-relaxed text-[var(--on-dark-85)] max-w-xl">
                Coverage, coordination, and follow-through for responsive home-service companies.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="sector-btn-on-dark px-7 py-4 text-[15px] font-bold shadow-lg hover:brightness-105"
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                <button
                  onClick={() => scrollToSection("operating-loop")}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-[8px] text-[15px] font-medium border border-[var(--on-dark-20)] hover:bg-[var(--on-dark-10)] text-[var(--on-dark)] transition-all cursor-pointer"
                >
                  <span>Explore the 7-Step Operating Loop</span>
                </button>
              </div>

              {/* Slim secondary link to Part B */}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("home-care")}
                  className="group inline-flex items-center gap-2 text-[14px] font-mono text-[var(--highlight)] hover:text-[var(--on-dark)] transition-colors cursor-pointer"
                >
                  <HeartHandshake className="w-4 h-4 text-[var(--accent)]" />
                  <span>Home care agency? See Home Care &amp; Nursing</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[var(--accent)]" />
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Illustrative Dispatch Board Card */}
            <div className="lg:col-span-5 relative">
              {/* Pulsing ring around phone icon */}
              <div className="flex items-center gap-3 mb-3">
                <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[var(--accent-20)] border border-[var(--accent)]">
                  <PhoneCall className="w-4 h-4 text-[var(--accent)]" />
                  <span className="absolute inset-0 rounded-full border border-[var(--accent)] animate-ping opacity-75" />
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--highlight)] font-semibold">
                  Live Dispatch Stream · 24/7
                </span>
              </div>

              <div className="sector-card-dark p-6 sm:p-7 relative overflow-hidden backdrop-blur-md shadow-2xl">
                {/* Accent glow behind card */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl pointer-events-none opacity-25"
                  style={{ backgroundColor: "var(--accent)" }}
                />

                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--on-dark-15)]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--on-dark-65)] font-semibold">
                    INCOMING · ILLUSTRATIVE
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--accent)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    <span>ACTIVE QUEUE</span>
                  </div>
                </div>

                {/* 4 Dispatch Rows */}
                <div className="space-y-3 font-sans">
                  {dispatchRows.map((row, idx) => {
                    const isActive = idx === activeDispatchRow;
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-[8px] border transition-all duration-300 flex items-center justify-between gap-3 ${
                          isActive
                            ? "bg-[var(--on-dark-12)] border-[var(--accent)] shadow-sm translate-x-1"
                            : "bg-[var(--on-dark-5)] border-[var(--on-dark-10)] opacity-70"
                        }`}
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-[14px] text-[var(--on-dark)] truncate">
                              {row.title}
                            </span>
                            <span
                              className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded font-bold ${row.chipClass}`}
                            >
                              {row.status}
                            </span>
                          </div>
                          <span className="text-[12px] text-[var(--on-dark-65)] font-mono block mt-0.5">
                            {row.detail}
                          </span>
                        </div>
                        <Check className={`w-4 h-4 shrink-0 ${isActive ? "text-[var(--accent)]" : "text-transparent"}`} />
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--on-dark-10)] flex items-center justify-between text-[11px] font-mono text-[var(--on-dark-55)]">
                  <span>SYSTEM: SERVICETITAN / JOBSITE</span>
                  <span>SYNC: REAL-TIME</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Diagonal Band carrying tagline in --primary mono caps */}
        <div className="mt-16 md:mt-20 w-full bg-[var(--accent)] text-[var(--primary)] py-3.5 px-6 relative z-10 shadow-md">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center">
            <span className="font-mono text-[13px] md:text-[14px] font-extrabold tracking-[0.22em] uppercase select-none text-center">
              Coverage. Coordination. Follow-through.
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STICKY SEGMENTED CONTROL (Appears after hero, stays under navbar)
         ========================================================================= */}
      <div className="sticky top-[72px] z-30 w-full bg-[var(--primary)]/90 backdrop-blur-md border-b border-[var(--on-dark-15)] py-3 px-6 transition-all">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-wider text-[var(--on-dark-55)]">
              SECTOR DIVISION:
            </span>
            <div className="inline-flex p-1 rounded-[8px] bg-[var(--on-dark-10)] border border-[var(--on-dark-15)]">
              <button
                onClick={() => {
                  setActiveSegment("field-trades");
                  scrollToSection("field-trades");
                }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-[6px] font-mono text-[12px] md:text-[13px] font-semibold transition-all cursor-pointer ${
                  activeSegment === "field-trades"
                    ? "bg-[var(--accent)] text-[var(--primary)] shadow-sm"
                    : "text-[var(--on-dark-75)] hover:text-[var(--on-dark)]"
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>Field Trades</span>
              </button>

              <button
                onClick={() => {
                  setActiveSegment("home-care");
                  scrollToSection("home-care");
                }}
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-[6px] font-mono text-[12px] md:text-[13px] font-semibold transition-all cursor-pointer ${
                  activeSegment === "home-care"
                    ? "bg-[var(--accent)] text-[var(--primary)] shadow-sm"
                    : "text-[var(--on-dark-75)] hover:text-[var(--on-dark)]"
                }`}
              >
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>Home Care &amp; Nursing</span>
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden md:inline-flex items-center gap-2 font-mono text-[12px] text-[var(--highlight)] hover:text-[var(--on-dark)] transition-colors cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* =========================================================================
          PART A: FIELD SERVICE TRADES
         ========================================================================= */}
      <div id="field-trades" className="flex flex-col w-full">
        {/* =========================================================================
            2. COST OF SILENCE ("01 / THE COST OF SILENCE") Light #F4F1EA
           ========================================================================= */}
        <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block">
                  01 / THE COST OF SILENCE
                </span>
                <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--primary)]">
                  A Missed Call Is Usually a Lost Job.
                </h2>
                <div className="space-y-4 font-sans text-[16px] md:text-[17px] leading-relaxed text-[var(--primary-80)]">
                  <p>
                    <strong className="font-semibold text-[var(--primary)]">Urgency wins:</strong>{" "}
                    Homeowners with a leak, outage, or dead AC call the next company on the list.
                  </p>
                  <p>
                    <strong className="font-semibold text-[var(--primary)]">Gaps redirect demand:</strong>{" "}
                    After-hours gaps, peak-season overload, and busy office lines turn demand into revenue
                    for a competitor.
                  </p>
                </div>
              </div>

              {/* Right: Illustrative Call List Graphic */}
              <div className="lg:col-span-5">
                <div className="sector-card-light p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--primary-12)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--primary-55)] font-semibold">
                      HOMEOWNER CALL LOG · ILLUSTRATIVE
                    </span>
                    <span className="font-mono text-[11px] text-[var(--primary-55)]">20:14 PM</span>
                  </div>

                  <div className="space-y-3 font-sans">
                    {/* Row 1: Your company missed */}
                    <div className="p-3.5 rounded-[8px] bg-[var(--primary-5)] border border-[var(--primary-12)] flex items-center justify-between text-[14px]">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[var(--primary-10)] flex items-center justify-center text-[var(--primary-55)]">
                          <X className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-medium text-[var(--primary-75)] block">
                            Your company: no answer
                          </span>
                          <span className="font-mono text-[11px] text-[var(--primary-45)]">
                            Voicemail reached · Caller disconnected
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] uppercase font-bold text-[var(--primary-45)]">
                        Lost
                      </span>
                    </div>

                    {/* Row 2: Next company answered */}
                    <div className="p-3.5 rounded-[8px] bg-[var(--accent)]/12 border border-[var(--accent)] flex items-center justify-between text-[14px]">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[var(--accent)] flex items-center justify-center text-[var(--primary)]">
                          <Check className="w-4 h-4 font-bold" />
                        </div>
                        <div>
                          <span className="font-semibold text-[var(--primary)] block">
                            Next company: answered
                          </span>
                          <span className="font-mono text-[11px] text-[var(--primary-75)]">
                            Live dispatch · Job booked in 90 seconds
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-[11px] uppercase font-bold text-[var(--primary)] bg-[var(--accent)] px-2 py-0.5 rounded">
                        Booked
                      </span>
                    </div>

                    {/* Row 3: Revenue redirect */}
                    <div className="p-3 rounded-[8px] bg-[var(--light)] border border-dashed border-[var(--primary-20)] text-center">
                      <span className="font-mono text-[12px] text-[var(--primary-75)]">
                        Redirected Revenue: <strong>$650 - $1,200</strong> lost to next contractor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. THE FRONT DESK (Dark Secondary #303A46)
           ========================================================================= */}
        <section className="sector-dark-secondary py-20 md:py-28 relative overflow-hidden">
          {/* Big mono "24/7" watermark behind in --on-dark at 6% */}
          <div className="absolute right-6 -bottom-10 select-none pointer-events-none font-mono text-[180px] sm:text-[240px] md:text-[300px] font-black text-[var(--on-dark)] opacity-[0.06] leading-none z-0">
            24/7
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--highlight)] block mb-3">
                02 / THE FRONT DESK
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--on-dark)] mb-4">
                Always Open. Always Yours.
              </h2>
              <p className="font-sans text-[17px] md:text-[19px] text-[var(--on-dark-85)] leading-relaxed">
                Your 24/7 front desk, in your company name.
              </p>
            </div>

            {/* Two Structured Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="sector-card-dark p-8 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[var(--accent-20)] border border-[var(--accent)] flex items-center justify-center mb-6">
                    <PhoneCall className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <h3 className="font-serif text-[24px] font-normal text-[var(--on-dark)] mb-3">
                    Every enquiry covered
                  </h3>
                  <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[var(--on-dark-85)]">
                    Answer every call and enquiry, book the visit, brief the technician, and keep the
                    customer informed.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[var(--on-dark-12)] flex items-center gap-2 font-mono text-[12px] text-[var(--highlight)]">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span>Direct diary booking &amp; technician brief</span>
                </div>
              </div>

              <div className="sector-card-dark p-8 backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-[10px] bg-[var(--highlight-20)] border border-[var(--highlight)] flex items-center justify-center mb-6">
                    <Layers className="w-6 h-6 text-[var(--highlight)]" />
                  </div>
                  <h3 className="font-serif text-[24px] font-normal text-[var(--on-dark)] mb-3">
                    Every channel covered
                  </h3>
                  <p className="font-sans text-[15px] md:text-[16px] leading-relaxed text-[var(--on-dark-85)]">
                    Cover nights, weekends, holidays, overflow, web forms, chats, and missed-call
                    callbacks.
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[var(--on-dark-12)] flex items-center gap-2 font-mono text-[12px] text-[var(--highlight)]">
                  <Check className="w-4 h-4 text-[var(--accent)]" />
                  <span>Omnichannel intake with callback guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. TRADES ("03 / TRADE EXPERTISE") Light #F4F1EA
           ========================================================================= */}
        <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-3">
                03 / TRADE EXPERTISE
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--primary)]">
                Built for the Trades That Run on Fast Response
              </h2>
            </div>

            {/* Desktop Horizontal Accordion / Mobile Vertical Accordion */}
            <div className="hidden lg:flex gap-4 h-[320px]">
              {tradePanels.map((trade, idx) => {
                const IconComp = trade.icon;
                const isExpanded = expandedTrade === idx;
                return (
                  <button
                    key={trade.id}
                    onClick={() => setExpandedTrade(idx)}
                    onFocus={() => setExpandedTrade(idx)}
                    className={`relative p-8 rounded-[12px] border text-left transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                      isExpanded
                        ? "flex-[3] bg-[var(--primary)] text-[var(--on-dark)] border-[var(--accent)] shadow-lg"
                        : "flex-1 bg-white text-[var(--primary)] border-[var(--primary-15)] hover:border-[var(--primary-35)]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <IconComp
                          className={`w-8 h-8 transition-colors ${
                            isExpanded ? "text-[var(--accent)]" : "text-[var(--primary-45)]"
                          }`}
                        />
                        <span className="font-mono text-[14px] font-bold opacity-60">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3
                        className={`font-serif text-[22px] font-normal mb-2 ${
                          isExpanded ? "text-[var(--on-dark)]" : "text-[var(--primary)]"
                        }`}
                      >
                        {trade.title}
                      </h3>
                      {isExpanded ? (
                        <p className="font-sans text-[15px] leading-relaxed text-[var(--on-dark-85)] mt-3">
                          {trade.detail}
                        </p>
                      ) : (
                        <p className="font-sans text-[13px] text-[var(--primary-60)] line-clamp-2">
                          {trade.summary}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[rgba(255,255,255,0.1)] flex items-center justify-between text-[12px] font-mono">
                      <span>{isExpanded ? "ACTIVE TRADE SPEC" : "CLICK TO EXPAND"}</span>
                      <ChevronRight
                        className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90 text-[var(--accent)]" : ""}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Vertical Accordion */}
            <div className="lg:hidden space-y-3">
              {tradePanels.map((trade, idx) => {
                const IconComp = trade.icon;
                const isExpanded = expandedTrade === idx;
                return (
                  <div
                    key={trade.id}
                    className={`rounded-[12px] border transition-all overflow-hidden ${
                      isExpanded
                        ? "bg-[var(--primary)] text-[var(--on-dark)] border-[var(--accent)] shadow-md"
                        : "bg-white text-[var(--primary)] border-[var(--primary-15)]"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedTrade(isExpanded ? -1 : idx)}
                      className="w-full p-5 flex items-center justify-between text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <IconComp
                          className={`w-5 h-5 ${
                            isExpanded ? "text-[var(--accent)]" : "text-[var(--primary-55)]"
                          }`}
                        />
                        <span className="font-serif text-[18px] font-medium">{trade.title}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180 text-[var(--accent)]" : "text-[var(--primary-45)]"
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 text-[14px] leading-relaxed text-[var(--on-dark-85)] font-sans border-t border-[rgba(255,255,255,0.1)]">
                        {trade.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. CUSTOMER JOURNEY ("04 / THE CUSTOMER JOURNEY") Accent 8% Tint
           ========================================================================= */}
        <section className="sector-light-accent-tinted py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-3">
                04 / THE CUSTOMER JOURNEY
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--primary)]">
                From First Ring to Repeat Booking
              </h2>
            </div>

            {/* 5-Step Horizontal Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {journeySteps.map((step, idx) => (
                <div
                  key={step.num}
                  className="sector-card-light p-6 flex flex-col justify-between shadow-sm relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[28px] font-light text-[var(--primary-45)] select-none">
                        {step.num}
                      </span>
                      {idx < 4 && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-[var(--primary-35)] -mr-2" />
                      )}
                    </div>
                    <h3 className="font-serif text-[19px] font-semibold text-[var(--primary)] mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-[14px] leading-relaxed text-[var(--primary-80)]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. AFTER THE CALL ("05 / THE RELATIONSHIP AFTER THE CALL") Light #F4F1EA
           ========================================================================= */}
        <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-3">
                05 / THE RELATIONSHIP AFTER THE CALL
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--primary)]">
                More Value From Every Customer Relationship
              </h2>
            </div>

            {/* 2x2 Ruled Grid (hairlines, no cards) */}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[var(--primary-15)]">
              <div className="py-8 pr-0 md:pr-10 border-b md:border-r border-[var(--primary-15)]">
                <h3 className="font-serif text-[21px] font-semibold text-[var(--primary)] mb-2">
                  Relevant offers
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--primary-80)]">
                  Light, approved offers for maintenance plans, tune-ups, inspections, and add-ons.
                </p>
              </div>

              <div className="py-8 pl-0 md:pl-10 border-b border-[var(--primary-15)]">
                <h3 className="font-serif text-[21px] font-semibold text-[var(--primary)] mb-2">
                  Fast follow-up
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--primary-80)]">
                  Fast follow-up on web leads, missed calls, unbooked quotes, and past customers.
                </p>
              </div>

              <div className="py-8 pr-0 md:pr-10 border-b md:border-b-0 md:border-r border-[var(--primary-15)]">
                <h3 className="font-serif text-[21px] font-semibold text-[var(--primary)] mb-2">
                  Repeat business
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--primary-80)]">
                  Review requests, satisfaction check-ins, and rebooking for recurring maintenance.
                </p>
              </div>

              <div className="py-8 pl-0 md:pl-10">
                <h3 className="font-serif text-[21px] font-semibold text-[var(--primary)] mb-2">
                  Clear reporting
                </h3>
                <p className="font-sans text-[15px] leading-relaxed text-[var(--primary-80)]">
                  Reporting on call volume, bookings, missed-call recovery, upsell results, and trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. OPERATING LOOP (Dark Primary #20262E) ("06 / THE OPERATING LOOP")
           ========================================================================= */}
        <section id="operating-loop" className="sector-dark py-20 md:py-28 relative">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Sticky Header */}
              <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--highlight)] block">
                  06 / THE OPERATING LOOP
                </span>
                <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[1.12] text-[var(--on-dark)]">
                  Seven Steps Keep Every Job Clear.
                </h2>
                <p className="font-sans text-[16px] text-[var(--on-dark-80)] leading-relaxed pt-2">
                  A disciplined, repeatable protocol executed on every service call to maintain
                  consistency, customer delight, and technician readiness.
                </p>
              </div>

              {/* Right: 7 Big Numbered Rows */}
              <div className="lg:col-span-7 space-y-8 relative">
                {/* Connecting track line */}
                <div className="absolute left-[27px] top-6 bottom-6 w-[2px] bg-[var(--on-dark-12)] pointer-events-none" />

                {operatingLoopSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="sector-card-dark p-6 sm:p-7 relative z-10 flex items-start gap-6 backdrop-blur-sm transition-all hover:border-[var(--accent)] group"
                  >
                    <span className="font-mono text-[42px] sm:text-[56px] font-light leading-none text-[var(--accent)] shrink-0 select-none group-hover:scale-105 transition-transform">
                      {idx + 1}
                    </span>
                    <div className="pt-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--highlight)] block mb-1">
                        STEP 0{idx + 1}
                      </span>
                      <p className="font-sans text-[16px] sm:text-[18px] text-[var(--on-dark)] font-medium leading-snug">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. SHARED VIEW ("07 / ONE SHARED VIEW") Light #F4F1EA
           ========================================================================= */}
        <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="max-w-2xl mb-14">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-3">
                07 / ONE SHARED VIEW
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--primary)]">
                Customers and Technicians Stay Informed at Every Step
              </h2>
            </div>

            {/* 4 Stages as Table with Customer and Technician columns */}
            <div className="border border-[var(--primary-15)] rounded-[12px] overflow-hidden bg-white shadow-sm font-sans">
              <div className="grid grid-cols-12 bg-[var(--primary-5)] p-4 border-b border-[var(--primary-15)] font-mono text-[12px] uppercase tracking-wider font-semibold text-[var(--primary-75)]">
                <div className="col-span-3">STAGE</div>
                <div className="col-span-4 sm:col-span-4">CUSTOMER VIEW</div>
                <div className="col-span-5 sm:col-span-5">TECHNICIAN VIEW</div>
              </div>

              <div className="divide-y divide-[var(--primary-12)] text-[14px] sm:text-[15px]">
                {sharedViewStages.map((stg, i) => (
                  <div key={i} className="grid grid-cols-12 p-5 items-center hover:bg-[var(--primary-5)]/50 transition-colors">
                    <div className="col-span-3 font-serif font-semibold text-[var(--primary)] text-[16px]">
                      {stg.stage}
                    </div>
                    <div className="col-span-4 pr-4 text-[var(--primary-80)]">
                      {stg.customer}
                    </div>
                    <div className="col-span-5 text-[var(--primary-80)]">
                      {stg.technician}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. GROWTH SIGNAL & PRACTICAL ALTERNATIVE (Accent 8% Tint)
           ========================================================================= */}
        <section className="sector-light-accent-tinted py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 space-y-16">
            {/* Block 1: Right when growth held back */}
            <div>
              <div className="max-w-2xl mb-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-2">
                  OPERATIONAL FIT
                </span>
                <h2 className="font-serif text-[28px] sm:text-[36px] font-normal text-[var(--primary)]">
                  Solvantra Is Right When Growth Is Being Held Back by the Phone
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--primary-15)]">
                <div className="py-6 pr-6 border-b sm:border-b-0 sm:border-r border-[var(--primary-15)]">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    Coverage gaps
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    You lose calls after hours, on weekends, or while the office is busy.
                  </p>
                </div>

                <div className="py-6 px-0 sm:px-6 border-b sm:border-b-0 lg:border-r border-[var(--primary-15)]">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    Overloaded team
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Your dispatcher or office team is overloaded with phones and scheduling.
                  </p>
                </div>

                <div className="py-6 px-0 sm:px-6 border-b sm:border-b-0 sm:border-r border-[var(--primary-15)]">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    Growing carefully
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    You want to grow without hiring and training a full call team.
                  </p>
                </div>

                <div className="py-6 pl-0 sm:pl-6">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    More from each customer
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    You want more booked jobs and more value from existing customers.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2: Professional coverage without call center */}
            <div className="pt-12 border-t border-[var(--primary-15)]">
              <div className="max-w-2xl mb-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-2">
                  THE MODEL
                </span>
                <h2 className="font-serif text-[28px] sm:text-[36px] font-normal text-[var(--primary)]">
                  Professional Coverage Without Building Your Own Call Center
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[19px] font-semibold text-[var(--primary)] mb-2">
                    Trained on your operation
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[var(--primary-80)]">
                    Agents are trained on your services, service area, pricing guidelines, emergency
                    rules, and booking process.
                  </p>
                </div>

                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[19px] font-semibold text-[var(--primary)] mb-2">
                    Your company voice
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[var(--primary-80)]">
                    Customers hear a friendly voice representing your company by name on every call
                    and message.
                  </p>
                </div>

                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[19px] font-semibold text-[var(--primary)] mb-2">
                    Updates where work happens
                  </h3>
                  <p className="font-sans text-[14px] leading-relaxed text-[var(--primary-80)]">
                    Updates can flow through phone, SMS, email, or your existing field service
                    software directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          PART B: HOME CARE & NURSING (#home-care)
         ========================================================================= */}
      <div id="home-care" className="flex flex-col w-full">
        {/* =========================================================================
            10. HOME CARE INTRO (Dark Primary #20262E)
           ========================================================================= */}
        <section className="sector-dark py-24 md:py-32 relative overflow-hidden">
          {/* Subtle grid background texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--on-dark) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--highlight)]">
                  08 / HOME CARE &amp; NURSING
                </span>
                <span className="px-2 py-0.5 rounded font-mono text-[10px] uppercase font-bold bg-[var(--accent)] text-[var(--primary)]">
                  FOR HOME CARE AGENCIES
                </span>
              </div>

              <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-normal leading-[1.08] text-[var(--on-dark)] max-w-3xl mb-4">
                Every Visit Scheduled. Every Family Reassured.
              </h2>
              <p className="font-sans text-[18px] sm:text-[20px] text-[var(--on-dark-85)] max-w-2xl">
                24/7 intake, nurse and caregiver scheduling, and visit coordination for home care
                agencies.
              </p>
            </div>

            {/* Two Columns: Scheduling Desk + Pull Quote */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-t border-[var(--on-dark-15)] pt-12">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-serif text-[24px] font-normal text-[var(--on-dark)]">
                  Your 24/7 scheduling desk for care at home
                </h3>
                <p className="font-sans text-[16px] leading-relaxed text-[var(--on-dark-85)]">
                  Always-on team takes intake calls, schedules visits, confirms shifts and covers
                  call-outs. Your clinical team stays focused on care.
                </p>
              </div>

              <div className="lg:col-span-6 pl-0 lg:pl-8 border-l-0 lg:border-l-4 border-[var(--accent)]">
                <blockquote className="font-serif text-[24px] sm:text-[28px] font-normal italic leading-snug text-[var(--on-dark)]">
                  &ldquo;A missed intake call is a lost client. A missed call-out is a family that loses
                  trust.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* What You Get: 4 Columns with hairlines */}
            <div className="pt-10 border-t border-[var(--on-dark-15)]">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--highlight)] block mb-6 font-semibold">
                WHAT YOU GET
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--on-dark-15)]">
                <div className="py-6 pr-6 border-b sm:border-b-0 sm:border-r border-[var(--on-dark-15)]">
                  <h4 className="font-serif text-[18px] font-semibold text-[var(--on-dark)] mb-2">
                    Always on
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--on-dark-80)] leading-relaxed">
                    24/7/365, nights, weekends and holidays. Extra capacity when call-outs spike.
                  </p>
                </div>

                <div className="py-6 px-0 sm:px-6 border-b sm:border-b-0 lg:border-r border-[var(--on-dark-15)]">
                  <h4 className="font-serif text-[18px] font-semibold text-[var(--on-dark)] mb-2">
                    Every intake call answered
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--on-dark-80)] leading-relaxed">
                    Referrals captured; details passed to your intake team without delays.
                  </p>
                </div>

                <div className="py-6 px-0 sm:px-6 border-b sm:border-b-0 sm:border-r border-[var(--on-dark-15)]">
                  <h4 className="font-serif text-[18px] font-semibold text-[var(--on-dark)] mb-2">
                    Visits scheduled &amp; confirmed
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--on-dark-80)] leading-relaxed">
                    Booked to your rules; changes updated for families and coordinators.
                  </p>
                </div>

                <div className="py-6 pl-0 sm:pl-6">
                  <h4 className="font-serif text-[18px] font-semibold text-[var(--on-dark)] mb-2">
                    Gaps covered fast
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--on-dark-80)] leading-relaxed">
                    Call-outs handled from the first minute; families told first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            11. WHO IT'S FOR & NINE SERVICES (Light #F4F1EA)
           ========================================================================= */}
        <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 space-y-20">
            {/* Who It's For: 6 Chips in Ruled Grid */}
            <div>
              <div className="max-w-2xl mb-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-2">
                  TARGET AUDIENCES
                </span>
                <h2 className="font-serif text-[32px] sm:text-[40px] font-normal text-[var(--primary)]">
                  Built for Agencies That Deliver Care at Home
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-[13px] md:text-[14px]">
                {homeCareAudiences.map((aud, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-[8px] border border-[var(--primary-15)] bg-white flex items-center gap-3 text-[var(--primary)] font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Nine Services: 3x3 Ruled Grid */}
            <div>
              <div className="max-w-2xl mb-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-2">
                  OPERATIONAL SERVICES
                </span>
                <h2 className="font-serif text-[32px] sm:text-[40px] font-normal text-[var(--primary)]">
                  Nine Services, From First Enquiry to Ongoing Coordination
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {homeCareServices.map((svc) => {
                  const IconComp = svc.icon;
                  return (
                    <div
                      key={svc.num}
                      className="p-7 rounded-[12px] border border-[var(--primary-15)] bg-white hover:bg-[var(--primary)] hover:text-[var(--on-dark)] transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-[22px] font-light text-[var(--primary-45)] group-hover:text-[var(--accent)]">
                            {svc.num}
                          </span>
                          <IconComp className="w-5 h-5 text-[var(--primary-55)] group-hover:text-[var(--accent)]" />
                        </div>
                        <h3 className="font-serif text-[19px] font-semibold text-[var(--primary)] group-hover:text-[var(--on-dark)] mb-2">
                          {svc.title}
                        </h3>
                        <p className="font-sans text-[14px] leading-relaxed text-[var(--primary-80)] group-hover:text-[var(--on-dark-80)]">
                          {svc.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Small mono line "Is it right for you?" with 4 signals */}
            <div className="pt-10 border-t border-[var(--primary-15)]">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-6">
                IS IT RIGHT FOR YOU?
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--primary-15)]">
                <div className="py-6 pr-6 border-b sm:border-b-0 sm:border-r border-[var(--primary-15)]">
                  <h4 className="font-serif text-[17px] font-semibold text-[var(--primary)] mb-2">
                    Calls go unanswered
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Intake calls and call-outs arrive nights, weekends and holidays.
                  </p>
                </div>

                <div className="py-6 px-0 sm:px-6 border-b sm:border-b-0 lg:border-r border-[var(--primary-15)]">
                  <h4 className="font-serif text-[17px] font-semibold text-[var(--primary)] mb-2">
                    Coordinators stay on the phone
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    The day goes to frantic calls, not care planning and quality.
                  </p>
                </div>

                <div className="py-6 px-0 sm:px-6 border-b sm:border-b-0 sm:border-r border-[var(--primary-15)]">
                  <h4 className="font-serif text-[17px] font-semibold text-[var(--primary)] mb-2">
                    Schedules change constantly
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Families keep calling for arrival updates and caregiver assignments.
                  </p>
                </div>

                <div className="py-6 pl-0 sm:pl-6">
                  <h4 className="font-serif text-[17px] font-semibold text-[var(--primary)] mb-2">
                    You want more clients
                  </h4>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Grow census without hiring a larger round-the-clock scheduling team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            12. JOURNEY & CALL-OUT COVER (Dark Secondary #303A46)
           ========================================================================= */}
        <section className="sector-dark-secondary py-20 md:py-28 relative">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
              {/* Left Column: 7 Vertical Steps */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--highlight)] block mb-2">
                    VISIT COORDINATION
                  </span>
                  <h2 className="font-serif text-[32px] sm:text-[40px] font-normal text-[var(--on-dark)] leading-tight">
                    From First Call to Completed Visit
                  </h2>
                </div>

                <div className="space-y-4 pt-4 relative">
                  {/* Vertical connecting line */}
                  <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[var(--on-dark-15)] pointer-events-none" />

                  {[
                    "01 Call or referral arrives.",
                    "02 Capture the details (use your approved script).",
                    "03 Schedule the visit (clinical judgment goes to your team).",
                    "04 Confirm with everyone.",
                    "05 Handle changes and call-outs (in real time).",
                    "06 Follow up (late or missed visits).",
                    "07 Report and improve.",
                  ].map((st, i) => (
                    <div key={i} className="flex items-start gap-4 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-[var(--accent)] text-[var(--primary)] font-mono text-[12px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        0{i + 1}
                      </div>
                      <span className="font-sans text-[15px] sm:text-[16px] text-[var(--on-dark-90)] pt-1">
                        {st.slice(3)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Lifted Light Panel for Call-Out Cover */}
              <div className="lg:col-span-6">
                <div className="sector-card-light p-7 sm:p-9 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--primary-15)]">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--primary-55)] font-semibold">
                      RAPID CALL-OUT RESPONSE · ILLUSTRATIVE FLOW
                    </span>
                    <span className="font-mono text-[11px] text-[var(--primary-55)]">24/7 ACTIVE</span>
                  </div>

                  <h3 className="font-serif text-[22px] sm:text-[25px] font-normal text-[var(--primary)] leading-snug mb-6">
                    A call-out becomes cover before the family has to call
                  </h3>

                  {/* 6-step flow cycling on loop */}
                  <div className="space-y-3 font-sans">
                    {callOutFlowSteps.map((step, idx) => {
                      const isActive = idx === activeCallOutStep;
                      return (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-[8px] border transition-all duration-300 flex items-center justify-between gap-3 ${
                            isActive
                              ? "bg-[var(--primary)] text-[var(--on-dark)] border-[var(--accent)] shadow-sm translate-x-1"
                              : "bg-[var(--primary-5)] text-[var(--primary-75)] border-[var(--primary-10)]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`font-mono text-[12px] font-bold px-2 py-0.5 rounded ${
                                isActive
                                  ? "bg-[var(--accent)] text-[var(--primary)]"
                                  : "bg-[var(--primary-12)] text-[var(--primary-60)]"
                              }`}
                            >
                              {step.num}
                            </span>
                            <span className="text-[14px] font-medium">{step.text}</span>
                          </div>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--primary-15)]">
                    <p className="font-sans text-[14px] font-bold text-[var(--primary)]">
                      Families leave when no one tells them what is happening.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            13. INFORMED, RECORDS & BOUNDARIES
                Part 1: Light #F4F1EA
                Part 2: Accent 8% Tint
           ========================================================================= */}
        {/* Block 1: Everyone Informed at Every Step (Light) */}
        <section className="sector-light py-20 md:py-24 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-2">
                TRANSPARENCY &amp; COMMUNICATION
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] font-normal text-[var(--primary)]">
                Everyone Informed at Every Step
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <div className="sector-card-light p-6">
                <span className="font-mono text-[11px] uppercase text-[var(--primary-45)] block mb-2">
                  STAGE 01
                </span>
                <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                  Intake
                </h3>
                <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                  Warm reply and next steps; full record passed directly to your team.
                </p>
              </div>

              <div className="sector-card-light p-6">
                <span className="font-mono text-[11px] uppercase text-[var(--primary-45)] block mb-2">
                  STAGE 02
                </span>
                <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                  Booking
                </h3>
                <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                  Confirmation of date, time and who is arriving for the visit.
                </p>
              </div>

              <div className="sector-card-light p-6">
                <span className="font-mono text-[11px] uppercase text-[var(--primary-45)] block mb-2">
                  STAGE 03
                </span>
                <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                  Before &amp; Day of Visit
                </h3>
                <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                  Reminders, arrival changes and immediate late alerts.
                </p>
              </div>

              <div className="sector-card-light p-6">
                <span className="font-mono text-[11px] uppercase text-[var(--primary-45)] block mb-2">
                  STAGE 04
                </span>
                <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                  Call-outs
                </h3>
                <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                  Prompt notice of new caregiver and revised arrival time.
                </p>
              </div>

              <div className="sector-card-light p-6">
                <span className="font-mono text-[11px] uppercase text-[var(--primary-45)] block mb-2">
                  STAGE 05
                </span>
                <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                  After Visit
                </h3>
                <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                  Concerns followed up; open administrative items recorded.
                </p>
              </div>
            </div>

            <p className="font-mono text-[13px] text-[var(--primary-65)] text-center">
              Channels you prefer: phone, SMS, email or directly in your own home care software.
            </p>
          </div>
        </section>

        {/* Block 2: Careful With Every Record & Clear Boundaries (Accent 8% Tint) */}
        <section className="sector-light-accent-tinted py-20 md:py-28 border-b border-[var(--primary-15)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12 space-y-16">
            <div>
              <div className="max-w-2xl mb-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-2">
                  GOVERNANCE &amp; ACCURACY
                </span>
                <h2 className="font-serif text-[32px] sm:text-[40px] font-normal text-[var(--primary)]">
                  Careful With Every Record
                </h2>
                <p className="font-sans text-[16px] text-[var(--primary-80)] mt-2">
                  You stay in control of clinical decisions and compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    HIPAA
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Business Associate Agreement; minimum necessary information.
                  </p>
                </div>

                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    EVV
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Late and missed clock-ins chased quickly to safeguard billability.
                  </p>
                </div>

                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    Credentials
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Reminders and a clear expiry list for licenses and certifications.
                  </p>
                </div>

                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    Authorisations
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Anything outside approved hours or care plan flagged immediately.
                  </p>
                </div>

                <div className="sector-card-light p-6 shadow-sm">
                  <h3 className="font-serif text-[18px] font-semibold text-[var(--primary)] mb-2">
                    Incidents
                  </h3>
                  <p className="font-sans text-[14px] text-[var(--primary-80)] leading-relaxed">
                    Logged with timestamp and escalated to designated directors.
                  </p>
                </div>
              </div>
            </div>

            {/* Clear Boundaries and Fast Escalation 4 Rows */}
            <div className="pt-12 border-t border-[var(--primary-15)]">
              <div className="max-w-2xl mb-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-2">
                  CLINICAL PROTOCOL
                </span>
                <h3 className="font-serif text-[26px] sm:text-[32px] font-normal text-[var(--primary)]">
                  Clear Boundaries and Fast Escalation
                </h3>
              </div>

              <div className="space-y-4">
                <div className="sector-card-light p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[var(--primary)] text-[var(--on-dark)] font-mono text-[11px] uppercase font-bold shrink-0">
                      Emergency
                    </span>
                    <div>
                      <strong className="font-serif text-[16px] text-[var(--primary)] block">
                        Medical Emergency
                      </strong>
                      <span className="font-sans text-[14px] text-[var(--primary-80)]">
                        Caller instructed to contact emergency services (911/999/112) immediately; on-call clinical supervisor notified at once.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--primary-55)] shrink-0">
                    Immediate Protocol
                  </span>
                </div>

                <div className="sector-card-light p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[var(--accent)] text-[var(--primary)] font-mono text-[11px] uppercase font-bold shrink-0">
                      Clinical
                    </span>
                    <div>
                      <strong className="font-serif text-[16px] text-[var(--primary)] block">
                        Clinical Advice or Triage
                      </strong>
                      <span className="font-sans text-[14px] text-[var(--primary-80)]">
                        Questions requiring clinical assessment or health triage passed directly to your registered nurses or clinical team.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--primary-55)] shrink-0">
                    On-Call Clinician
                  </span>
                </div>

                <div className="sector-card-light p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[var(--highlight)] text-[var(--primary)] font-mono text-[11px] uppercase font-bold shrink-0">
                      Care Plan
                    </span>
                    <div>
                      <strong className="font-serif text-[16px] text-[var(--primary)] block">
                        Medication &amp; Care Plan Changes
                      </strong>
                      <span className="font-sans text-[14px] text-[var(--primary-80)]">
                        Caller directed to prescribing physician; details logged and escalated to your nursing supervisor without making unapproved alterations.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--primary-55)] shrink-0">
                    Supervised Route
                  </span>
                </div>

                <div className="sector-card-light p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <span className="px-2.5 py-1 rounded bg-[var(--primary)] text-[var(--accent)] font-mono text-[11px] uppercase font-bold shrink-0">
                      Safeguarding
                    </span>
                    <div>
                      <strong className="font-serif text-[16px] text-[var(--primary)] block">
                        Safeguarding, Neglect or Incident Intake
                      </strong>
                      <span className="font-sans text-[14px] text-[var(--primary-80)]">
                        Immediate mandatory escalation to your designated safeguarding lead and on-call director with complete timestamped record.
                      </span>
                    </div>
                  </div>
                  <span className="font-mono text-[12px] text-[var(--primary-55)] shrink-0">
                    Priority Escalation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* =========================================================================
          14. FINAL CTA (SHARED HOMEPAGE CTA COMPONENT)
         ========================================================================= */}
      <FinalCTA />

      {/* Legal Disclaimer Footnote */}
      <div className="bg-[var(--ink)] py-5 px-6 text-center border-t border-[rgba(248,241,229,0.08)]">
        <p className="text-[14px] font-mono text-[var(--bg-55)] max-w-4xl mx-auto leading-relaxed">
          Solvantra provides operational intake, scheduling, coordination, and follow-through support
          for home services and home care agencies. We do not provide clinical judgment, medical diagnosis,
          or legal advice.
        </p>
      </div>

      {/* Consultation Modal Triggered from Buttons */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Home Services & Care"
      />
    </div>
  );
}
