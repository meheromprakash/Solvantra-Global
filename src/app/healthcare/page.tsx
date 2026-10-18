"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HeartPulse,
  Receipt,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Lock,
  PhoneCall,
  Clock,
  AlertCircle,
  FileText,
  UserCheck,
  Activity,
  BarChart3,
  Check,
  Building2,
  Stethoscope,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HealthcarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Active step for 5-node claim lifecycle animation (0 to 4)
  const [activeLifecycleNode, setActiveLifecycleNode] = useState(0);

  // End-to-End Workflow active step (0 to 4)
  const [selectedWorkflowStep, setSelectedWorkflowStep] = useState(0);

  // Tab state for Medical & Dental RCM ("medical" | "dental")
  const [activeRcmTab, setActiveRcmTab] = useState<"medical" | "dental">("medical");

  // Mobile progressive disclosure toggles (< 768px)
  const [showAllMedicalItems, setShowAllMedicalItems] = useState(false);
  const [showAllDentalItems, setShowAllDentalItems] = useState(false);
  const [showAllWhyRows, setShowAllWhyRows] = useState(false);

  // Claim lifecycle ticker in Hero (cycles 0 to 4) - pauses when document is hidden or reduced motion
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      if (!document.hidden) {
        setActiveLifecycleNode((prev) => (prev + 1) % 5);
      }
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const claimNodes = [
    { name: "Register", desc: "Eligibility verification" },
    { name: "Capture", desc: "Compliant charge capture" },
    { name: "Submit", desc: "Claims scrubbing & submission" },
    { name: "Follow up", desc: "Status tracking & resolution" },
    { name: "Reconcile", desc: "Payment posting & AR balance" },
  ];

  // Section 2: Operating Principles
  const principles = [
    {
      num: "01",
      title: "Organized workflows",
      desc: "Billing and revenue cycle operations from patient registration through final payment.",
      icon: Activity,
    },
    {
      num: "02",
      title: "Claim accuracy",
      desc: "Consistent follow-up and transparent reporting keep work visible.",
      icon: FileCheck2,
    },
    {
      num: "03",
      title: "Continuous improvement",
      desc: "Accuracy, transparency, data confidentiality, and process efficiency.",
      icon: ShieldCheck,
    },
  ];

  // Section 3: End-to-End Workflow (5 Steps)
  const workflowSteps = [
    {
      num: "01",
      title: "Register",
      summary: "Register the patient and verify insurance.",
      detail:
        "Comprehensive patient registration, insurance eligibility verification, benefit determination, and pre-authorization confirmation before treatment commences.",
    },
    {
      num: "02",
      title: "Capture",
      summary: "Confirm service details, documentation, and charge capture.",
      detail:
        "Service detail validation against clinical documentation, fee schedule alignment, and accurate entry of all billable encounter items.",
    },
    {
      num: "03",
      title: "Submit",
      summary: "Prepare, scrub, and submit the claim.",
      detail:
        "Rigorous clearinghouse rules engine scrubbing, timely electronic claim submission, and preliminary acknowledgment tracking.",
    },
    {
      num: "04",
      title: "Follow up",
      summary: "Track status, resolve rejections, and follow up with payers.",
      detail:
        "Proactive status tracking, rapid resolution of clearinghouse edits and rejections, and disciplined follow-up on outstanding payer adjudication.",
    },
    {
      num: "05",
      title: "Reconcile",
      summary: "Post payments, manage denials and AR, and reconcile the account.",
      detail:
        "Electronic remittance advice (ERA) and manual payment posting, secondary billing, structured denial appeals, and patient balance reconciliation.",
    },
  ];

  // Section 4: Dental RCM Items
  const dentalItems = [
    "Eligibility and benefits verification",
    "CDT procedure code and claim-detail review",
    "Dental claim preparation and submission",
    "Coordination of benefits support",
    "Rejection, denial, and dental AR follow-up",
    "Payment posting, reconciliation, and reporting",
  ];

  // Section 4: Medical RCM Items
  const medicalItems = [
    "Patient eligibility and benefits verification",
    "Medical claim preparation and submission",
    "ICD-10-CM, CPT, and HCPCS claim-detail review as applicable",
    "Claim status tracking and follow-up",
    "Denial management, appeal support, and outstanding AR management",
    "Payment posting, reconciliation, and revenue cycle reporting",
  ];

  // Section 5: Quality & Visibility Checkpoints
  const qualityChecks = [
    "Validate patient, payer, provider, and service information before submission.",
    "Track corrections, recurring billing errors, denial categories, and appeal deadlines.",
    "Maintain clear claim follow-up notes and escalation paths.",
    "Monitor claim submission, rejection, payment posting, AR aging, and operational productivity trends.",
    "Restrict access to authorized personnel and use approved systems and communication channels for patient information.",
  ];

  // Section 6: Why Solvantra (7 Rows)
  const whySolvantraRows = [
    "Structured end-to-end workflow",
    "Dental and medical billing support",
    "Focus on claim completeness and accuracy",
    "Organized denial and AR follow-up",
    "Clear claim status tracking",
    "Reporting shaped to client requirements",
    "Continuous workflow improvement",
  ];

  // Smooth scroll helper
  const scrollToWorkflow = () => {
    const el = document.getElementById("rcm-workflow");
    if (!el) return;
    const yOffset = -90;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div data-sector="health" className="flex flex-col w-full selection:bg-[var(--accent)] selection:text-white">
      {/* =========================================================================
          1. HERO (Dark Primary #10243A, no image)
         ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[var(--primary)] text-[var(--on-dark)] pt-32 md:pt-40 pb-20 md:pb-28 border-b-2 border-[var(--highlight)]">
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
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <div
          className="absolute bottom-10 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-10"
          style={{ backgroundColor: "var(--highlight)" }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-[12px] md:text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--highlight)] block">
                SOLVANTRA HEALTHCARE · DENTAL &amp; MEDICAL REVENUE CYCLE MANAGEMENT
              </span>

              <h1 className="font-serif text-[42px] sm:text-[54px] md:text-[62px] font-normal leading-[1.08] tracking-tight text-[var(--on-dark)]">
                Revenue operations,{" "}
                <span className="italic font-serif text-[var(--highlight)]">
                  connected.
                </span>
              </h1>

              <p className="font-sans text-[17px] sm:text-[19px] md:text-[20px] leading-relaxed text-[var(--on-dark-85)] max-w-xl">
                End-to-end revenue cycle management for dental practices and medical clinics.
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
                  onClick={scrollToWorkflow}
                  className="inline-flex items-center justify-center px-7 py-4 rounded-[8px] text-[15px] font-medium border border-[var(--on-dark-20)] hover:bg-[var(--on-dark-10)] text-[var(--on-dark)] transition-all cursor-pointer"
                >
                  <span>Explore the RCM Workflow</span>
                </button>
              </div>
            </div>

            {/* Right 5 Columns: Claim Lifecycle Card */}
            <div className="lg:col-span-5 relative">
              <div className="sector-card-dark p-6 sm:p-7 relative overflow-hidden backdrop-blur-md shadow-2xl border border-[var(--on-dark-12)]">
                {/* Glow behind card */}
                <div
                  className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-2xl pointer-events-none opacity-25"
                  style={{ backgroundColor: "var(--accent)" }}
                />

                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[var(--on-dark-15)]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--on-dark-65)] font-semibold">
                    CLAIM LIFECYCLE · ILLUSTRATIVE
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-[var(--highlight)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--highlight)] animate-pulse" />
                    <span>RCM PIPELINE</span>
                  </div>
                </div>

                {/* 5-Node Vertical Tracker with travelling highlight indicator */}
                <div className="relative pl-6 space-y-4 mb-6">
                  {/* Vertical connecting line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-[var(--on-dark-15)] pointer-events-none" />

                  {claimNodes.map((node, idx) => {
                    const isActive = idx === activeLifecycleNode;
                    return (
                      <div key={idx} className="relative flex items-center justify-between text-[14px]">
                        {/* Dot indicator */}
                        <div
                          className={`absolute -left-[24px] w-3.5 h-3.5 rounded-full transition-all duration-300 border-2 ${
                            isActive
                              ? "bg-[var(--highlight)] border-white scale-125 shadow-[0_0_8px_var(--highlight)]"
                              : "bg-[var(--primary)] border-[var(--on-dark-35)]"
                          }`}
                        />
                        <span
                          className={`font-mono text-[13px] transition-colors ${
                            isActive ? "text-[var(--highlight)] font-bold" : "text-[var(--on-dark-75)]"
                          }`}
                        >
                          0{idx + 1} {node.name}
                        </span>
                        <span className="text-[12px] font-sans text-[var(--on-dark-55)]">
                          {node.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Two Sample Status Rows beneath */}
                <div className="pt-4 border-t border-[var(--on-dark-12)] space-y-2.5 font-sans">
                  <div className="p-2.5 rounded-[6px] bg-[var(--on-dark-5)] border border-[var(--on-dark-10)] flex items-center justify-between text-[13px]">
                    <span className="text-[var(--on-dark-85)] font-medium">Claim submitted</span>
                    <span className="font-mono text-[11px] text-[var(--highlight)] bg-[var(--highlight)]/15 px-2 py-0.5 rounded">
                      Awaiting payer
                    </span>
                  </div>
                  <div className="p-2.5 rounded-[6px] bg-[var(--on-dark-5)] border border-[var(--on-dark-10)] flex items-center justify-between text-[13px]">
                    <span className="text-[var(--on-dark-85)] font-medium">Payment posted</span>
                    <span className="font-mono text-[11px] text-[var(--highlight)] bg-[var(--highlight)]/15 px-2 py-0.5 rounded">
                      Reconciled
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. OPERATING PRINCIPLE ("01 / THE OPERATING PRINCIPLE") Light #F3F7FB
         ========================================================================= */}
      <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
        <div data-reveal className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block">
                01 / THE OPERATING PRINCIPLE
              </span>
              <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[1.12] text-[var(--primary)]">
                Clearer revenue operations start with a structured process
              </h2>
              <p className="font-sans text-[16px] text-[var(--primary-80)] leading-relaxed pt-2">
                Organized workflows make billing easier to follow, manage, and improve.
              </p>
            </div>

            {/* Right: 3 Numbered Rows with Icons */}
            <div className="lg:col-span-7 space-y-4">
              {principles.map((pr) => {
                const IconComp = pr.icon;
                return (
                  <div
                    key={pr.num}
                    className="p-7 rounded-[12px] border border-[var(--primary-15)] bg-white hover:bg-[var(--primary)] hover:text-[var(--on-dark)] transition-all duration-200 group flex items-start gap-6 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-[10px] bg-[var(--primary-5)] group-hover:bg-[var(--accent)] text-[var(--primary)] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[12px] font-bold text-[var(--primary-45)] group-hover:text-[var(--highlight)]">
                          {pr.num}
                        </span>
                        <h3 className="font-serif text-[20px] font-semibold text-[var(--primary)] group-hover:text-[var(--on-dark)]">
                          {pr.title}
                        </h3>
                      </div>
                      <p className="font-sans text-[15px] leading-relaxed text-[var(--primary-80)] group-hover:text-[var(--on-dark-80)]">
                        {pr.desc}
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
          3. END-TO-END WORKFLOW ("02 / END-TO-END WORKFLOW") Secondary 6% Tint
         ========================================================================= */}
      <section
        id="rcm-workflow"
        className="py-20 md:py-28 border-b border-[var(--primary-15)]"
        style={{
          backgroundColor: "color-mix(in srgb, var(--secondary) 6%, var(--light))",
          color: "var(--primary)",
        }}
      >
        <div data-reveal className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl mb-14">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-3">
              02 / END-TO-END WORKFLOW
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--primary)] mb-3">
              One connected workflow from registration to reconciliation
            </h2>
            <p className="font-sans text-[16px] text-[var(--primary-75)]">
              Steps vary by payer, practice system, service type, and client agreement.
            </p>
          </div>

          {/* Desktop/Tablet 5-Column Stepper (768px and up) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {workflowSteps.map((st, idx) => {
              const isSelected = selectedWorkflowStep === idx;
              return (
                <button
                  key={st.num}
                  onClick={() => setSelectedWorkflowStep(idx)}
                  className={`p-5 rounded-[12px] border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[var(--primary)] text-[var(--on-dark)] border-[var(--accent)] shadow-md"
                      : "bg-white text-[var(--primary)] border-[var(--primary-15)] hover:border-[var(--primary-35)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[13px] font-bold opacity-60">
                      STEP {st.num}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-[6px] flex items-center justify-center ${
                        isSelected ? "bg-[var(--accent)] text-white" : "bg-[var(--primary-5)] text-[var(--primary-60)]"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-[18px] font-semibold mb-1">
                      {st.title}
                    </h3>
                    <p
                      className={`text-[13px] font-sans leading-snug line-clamp-2 ${
                        isSelected ? "text-[var(--on-dark-80)]" : "text-[var(--primary-70)]"
                      }`}
                    >
                      {st.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile Horizontal Scrollable Pill Row (Under 768px) */}
          <div className="md:hidden flex overflow-x-auto gap-2 pb-3 mb-5 no-scrollbar">
            {workflowSteps.map((st, idx) => {
              const isSelected = selectedWorkflowStep === idx;
              return (
                <button
                  key={st.num}
                  type="button"
                  onClick={() => setSelectedWorkflowStep(idx)}
                  className={`px-4 py-2.5 rounded-full font-mono text-[13px] whitespace-nowrap shrink-0 transition-colors cursor-pointer border ${
                    isSelected
                      ? "bg-[var(--primary)] text-[var(--on-dark)] font-bold border-[var(--accent)] shadow-sm"
                      : "bg-white text-[var(--primary)] border-[var(--primary-15)]"
                  }`}
                >
                  <span className="opacity-70 mr-1.5">0{idx + 1}</span>
                  <span>{st.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Context Panel Below for Selected Step */}
          <div key={selectedWorkflowStep} className="sector-card-light tab-pane-transition p-8 shadow-sm border border-[var(--primary-15)] bg-white">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 rounded font-mono text-[11px] uppercase font-bold bg-[var(--primary)] text-white">
                STEP {workflowSteps[selectedWorkflowStep].num}
              </span>
              <h4 className="font-serif text-[22px] font-semibold text-[var(--primary)]">
                {workflowSteps[selectedWorkflowStep].title} — Operational Detail
              </h4>
            </div>
            <p className="font-sans text-[15px] sm:text-[16px] text-[var(--primary-80)] leading-relaxed max-w-3xl">
              {workflowSteps[selectedWorkflowStep].detail}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. MEDICAL & DENTAL RCM ("03 / RCM SUPPORT") Light #F3F7FB
         ========================================================================= */}
      <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
        <div data-reveal className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block mb-3">
                03 / RCM SUPPORT
              </span>
              <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--primary)]">
                Medical &amp; Dental Revenue Operations
              </h2>
            </div>

            {/* Accessible Tab Controls */}
            <div
              role="tablist"
              aria-label="RCM Practice Types"
              className="inline-flex p-1 rounded-[8px] bg-[var(--primary-5)] border border-[var(--primary-15)] self-start md:self-auto"
            >
              <button
                role="tab"
                id="tab-medical"
                aria-selected={activeRcmTab === "medical"}
                aria-controls="panel-medical"
                onClick={() => setActiveRcmTab("medical")}
                className={`px-5 py-2 rounded-[6px] font-mono text-[13px] font-semibold transition-all cursor-pointer ${
                  activeRcmTab === "medical"
                    ? "bg-[var(--primary)] text-[var(--on-dark)] shadow-sm"
                    : "text-[var(--primary-70)] hover:text-[var(--primary)]"
                }`}
              >
                Medical RCM
              </button>
              <button
                role="tab"
                id="tab-dental"
                aria-selected={activeRcmTab === "dental"}
                aria-controls="panel-dental"
                onClick={() => setActiveRcmTab("dental")}
                className={`px-5 py-2 rounded-[6px] font-mono text-[13px] font-semibold transition-all cursor-pointer ${
                  activeRcmTab === "dental"
                    ? "bg-[var(--primary)] text-[var(--on-dark)] shadow-sm"
                    : "text-[var(--primary-70)] hover:text-[var(--primary)]"
                }`}
              >
                Dental RCM
              </button>
            </div>
          </div>

          {/* Tab Content Panel (2x3 ruled grid with icons) */}
          <div key={activeRcmTab} className="sector-card-light tab-pane-transition p-8 sm:p-10 shadow-sm border border-[var(--primary-15)] bg-white min-h-[380px] flex flex-col justify-between">
            {activeRcmTab === "medical" ? (
              <div id="panel-medical" role="tabpanel" aria-labelledby="tab-medical" className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--secondary)] font-bold block mb-2">
                    MEDICAL RCM SUPPORT
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-normal text-[var(--primary)]">
                    Medical RCM support with disciplined claim management
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                  {medicalItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-[8px] border border-[var(--primary-10)] bg-[var(--light)] items-start gap-3 ${
                        idx >= 3 && !showAllMedicalItems ? "hidden md:flex" : "flex"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[var(--primary-85)] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mobile Toggle for Medical Items */}
                <div className="md:hidden flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAllMedicalItems(!showAllMedicalItems)}
                    className="inline-flex items-center gap-1.5 py-1.5 px-2 text-[13px] font-mono text-[var(--secondary)] hover:text-[var(--primary)] cursor-pointer"
                  >
                    <span>{showAllMedicalItems ? "Show fewer services" : "Show 3 more services"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none ${
                        showAllMedicalItems ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            ) : (
              <div id="panel-dental" role="tabpanel" aria-labelledby="tab-dental" className="space-y-8 animate-in fade-in duration-200">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--secondary)] font-bold block mb-2">
                    DENTAL RCM SUPPORT
                  </span>
                  <h3 className="font-serif text-[24px] sm:text-[28px] font-normal text-[var(--primary)]">
                    Built around claim detail and follow-up
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
                  {dentalItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-[8px] border border-[var(--primary-10)] bg-[var(--light)] items-start gap-3 ${
                        idx >= 3 && !showAllDentalItems ? "hidden md:flex" : "flex"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[var(--primary-85)] font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Mobile Toggle for Dental Items */}
                <div className="md:hidden flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAllDentalItems(!showAllDentalItems)}
                    className="inline-flex items-center gap-1.5 py-1.5 px-2 text-[13px] font-mono text-[var(--secondary)] hover:text-[var(--primary)] cursor-pointer"
                  >
                    <span>{showAllDentalItems ? "Show fewer services" : "Show 3 more services"}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none ${
                        showAllDentalItems ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}

            {/* Illustrative Code Systems Strip beneath */}
            <div className="pt-6 mt-8 border-t border-[var(--primary-12)] flex flex-wrap items-center justify-between gap-4 font-mono text-[12px] text-[var(--primary-65)]">
              <span className="font-bold uppercase tracking-wider">
                CODE SYSTEMS · ILLUSTRATIVE:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[var(--primary-5)] border border-[var(--primary-15)] font-semibold text-[var(--primary)]">
                  Medical: ICD-10-CM
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--primary-5)] border border-[var(--primary-15)] font-semibold text-[var(--primary)]">
                  CPT
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--primary-5)] border border-[var(--primary-15)] font-semibold text-[var(--primary)]">
                  HCPCS
                </span>
                <span className="px-2.5 py-1 rounded bg-[var(--primary-5)] border border-[var(--primary-15)] font-semibold text-[var(--primary)]">
                  Dental: CDT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. QUALITY & VISIBILITY (Dark Secondary #174A7E) ("04 / QUALITY AND VISIBILITY")
         ========================================================================= */}
      <section className="sector-dark-secondary py-20 md:py-28 relative">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-2xl mb-14">
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--highlight)] block mb-3">
              04 / QUALITY AND VISIBILITY
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-normal leading-[1.12] text-[var(--on-dark)]">
              Quality checks protect accuracy and visibility
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left: 5 Numbered Check Rows */}
            <div className="lg:col-span-7 space-y-4">
              {qualityChecks.map((checkText, idx) => (
                <div
                  key={idx}
                  className="sector-card-dark p-4 sm:p-5 flex items-start gap-4 backdrop-blur-sm"
                >
                  <span className="w-6 h-6 rounded-full bg-[var(--highlight)] text-[var(--primary)] font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-[15px] leading-relaxed text-[var(--on-dark-90)]">
                    {checkText}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Illustrative Monitoring Card with Mini Bars */}
            <div className="lg:col-span-5">
              <div className="sector-card-dark p-7 sm:p-8 backdrop-blur-md border border-[var(--on-dark-15)] shadow-xl">
                <div className="flex items-center justify-between pb-3 mb-6 border-b border-[var(--on-dark-15)]">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--highlight)] font-semibold">
                    PIPELINE TELEMETRY · ILLUSTRATIVE
                  </span>
                  <span className="font-mono text-[11px] text-[var(--on-dark-60)]">RCM MONITOR</span>
                </div>

                <div className="space-y-5 font-mono text-[12px]">
                  <div>
                    <div className="flex justify-between mb-1.5 text-[var(--on-dark-85)]">
                      <span>Submission</span>
                      <span className="text-[var(--highlight)]">Active</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[var(--on-dark-10)] overflow-hidden">
                      <div className="h-full bg-[var(--highlight)] rounded-full w-[88%] animate-pulse" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1.5 text-[var(--on-dark-85)]">
                      <span>Rejection</span>
                      <span className="text-[var(--highlight)]">Controlled</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[var(--on-dark-10)] overflow-hidden">
                      <div className="h-full bg-[var(--accent)] rounded-full w-[16%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1.5 text-[var(--on-dark-85)]">
                      <span>Payment posting</span>
                      <span className="text-[var(--highlight)]">Synchronized</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[var(--on-dark-10)] overflow-hidden">
                      <div className="h-full bg-[var(--highlight)] rounded-full w-[94%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1.5 text-[var(--on-dark-85)]">
                      <span>AR aging</span>
                      <span className="text-[var(--highlight)]">Monitored</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-[var(--on-dark-10)] overflow-hidden">
                      <div className="h-full bg-[var(--accent)] rounded-full w-[24%]" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--on-dark-10)] text-[11px] font-sans text-[var(--on-dark-60)]">
                  Continuous status updates, clearinghouse rejection scrubs, and supervisor oversight.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHY SOLVANTRA ("05 / WHY SOLVANTRA") Light #F3F7FB
         ========================================================================= */}
      <section className="sector-light py-20 md:py-28 border-b border-[var(--primary-15)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Sticky Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-4">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold text-[var(--primary-55)] block">
                05 / WHY SOLVANTRA
              </span>
              <h2 className="font-serif text-[34px] sm:text-[42px] font-normal leading-[1.12] text-[var(--primary)]">
                A process-driven partner for day-to-day RCM operations
              </h2>
              <p className="font-sans text-[16px] text-[var(--primary-80)] leading-relaxed pt-2">
                Structured support for the work that keeps revenue operations moving.
              </p>
            </div>

            {/* Right: 7 Numbered Rows */}
            <div className="lg:col-span-7 space-y-3">
              {whySolvantraRows.map((text, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-[10px] border border-[var(--primary-15)] bg-white hover:bg-[var(--primary)] hover:text-[var(--on-dark)] transition-all duration-200 group items-center justify-between ${
                    idx >= 4 && !showAllWhyRows ? "hidden md:flex" : "flex"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[13px] font-bold text-[var(--primary-45)] group-hover:text-[var(--highlight)]">
                      0{idx + 1}
                    </span>
                    <span className="font-serif text-[18px] font-medium text-[var(--primary)] group-hover:text-[var(--on-dark)]">
                      {text}
                    </span>
                  </div>
                  <Check className="w-4 h-4 text-transparent group-hover:text-[var(--highlight)] transition-colors" />
                </div>
              ))}

              {/* Mobile Toggle */}
              <div className="md:hidden flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setShowAllWhyRows(!showAllWhyRows)}
                  className="inline-flex items-center gap-1.5 py-1.5 px-2 text-[13px] font-mono text-[var(--secondary)] hover:text-[var(--primary)] cursor-pointer"
                >
                  <span>{showAllWhyRows ? "Show fewer reasons" : "Show 3 more reasons"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 motion-reduce:transition-none ${
                      showAllWhyRows ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. CROSS-LINK BAND (Highlight 20% Tint, Slim)
         ========================================================================= */}
      <section
        className="w-full py-6 px-6 border-b border-[var(--primary-15)] transition-colors"
        style={{
          backgroundColor: "color-mix(in srgb, var(--highlight) 20%, var(--light))",
          color: "var(--primary)",
        }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[14px] md:text-[15px]">
          <span className="text-[var(--primary-90)] font-medium text-center sm:text-left">
            Home care agency? Nurse and caregiver scheduling lives on our Home Services page.
          </span>
          <Link
            href="/home-services#home-care"
            className="group inline-flex items-center gap-1.5 font-mono text-[13px] font-bold text-[var(--secondary)] hover:text-[var(--primary)] underline-offset-4 hover:underline shrink-0"
          >
            <span>See Home Care &amp; Nursing</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          8. FINAL CTA (Themed shared component)
         ========================================================================= */}
      <FinalCTA
        contactDetails={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[14px] font-sans">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider block opacity-70 mb-0.5">
                Direct Operations Email
              </span>
              <a
                href="mailto:info@solvantra.global"
                className="font-semibold underline-offset-2 hover:underline"
              >
                info@solvantra.global
              </a>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider block opacity-70 mb-0.5">
                Global Client Desk
              </span>
              <span className="font-semibold">+1 (800) 584-9271</span>
            </div>
          </div>
        }
      />

      {/* Consultation Modal Triggered from Buttons */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Healthcare RCM"
      />
    </div>
  );
}
