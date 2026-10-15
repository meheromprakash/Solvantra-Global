"use client";

import React, { useState } from "react";
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
} from "lucide-react";
import ConsultationModal from "@/components/ConsultationModal";

export default function HealthcarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"rcm" | "homecare">("rcm");

  // HEALTHCARE BRAND PALETTE
  // Primary: #10243A
  // Secondary: #174A7E
  // Accent: #3B82F6
  // Highlight: #67D5E8
  // Light background: #F3F7FB
  // Text on dark backgrounds: #FFFFFF

  const rcmWorkflow = [
    {
      step: "01",
      title: "Register",
      description: "Register the patient and verify insurance eligibility and active benefits.",
    },
    {
      step: "02",
      title: "Capture",
      description: "Confirm service details, clinical documentation, and compliant charge capture.",
    },
    {
      step: "03",
      title: "Submit",
      description: "Prepare, scrub, and submit clean electronic claims to commercial and government payers.",
    },
    {
      step: "04",
      title: "Follow Up",
      description: "Track status, resolve clearinghouse rejections, and actively follow up with payers.",
    },
    {
      step: "05",
      title: "Reconcile",
      description: "Post payments, manage denials and outstanding AR, and balance the account ledger.",
    },
  ];

  const dentalServices = [
    "Eligibility and benefits verification",
    "CDT procedure code and claim-detail review",
    "Dental claim preparation and electronic submission",
    "Coordination of benefits support",
    "Rejection, denial, and dental AR follow-up",
    "Payment posting, reconciliation, and reporting",
  ];

  const medicalServices = [
    "Patient eligibility and benefits verification",
    "Medical claim preparation and submission",
    "ICD-10-CM, CPT, and HCPCS claim-detail review as applicable",
    "Claim status tracking and prompt follow-up",
    "Denial management, appeal support, and aged AR management",
    "Payment posting, reconciliation, and revenue cycle reporting",
  ];

  const rcmQualityChecks = [
    "Validate patient, payer, provider, and service information before submission.",
    "Track corrections, recurring billing errors, denial categories, and appeal deadlines.",
    "Maintain clear claim follow-up notes and disciplined escalation paths.",
    "Monitor claim submission, rejection, payment posting, AR aging, and operational productivity trends.",
    "Restrict access to authorized personnel and use approved systems and communication channels for patient information.",
  ];

  const homeCareAudiences = [
    "Home health agencies",
    "Non-medical home care",
    "Private duty nursing",
    "Adult day care and respite",
    "Nurse and caregiver registries",
    "Disability and community support",
  ];

  const homeCareServices = [
    { num: "01", title: "24/7 Intake Call Handling", desc: "Every intake call and referral answered live; details captured using your approved script." },
    { num: "02", title: "Visit Scheduling", desc: "Visits scheduled strictly according to your agency rules and caregiver skill sets." },
    { num: "03", title: "Shift Confirmations & Reminders", desc: "Pre-visit reminders and confirmations to eliminate forgotten shifts." },
    { num: "04", title: "Call-Out & Gap Coverage", desc: "Handled from the first minute; replacement pool contacted in priority order; family told first." },
    { num: "05", title: "Schedule Changes", desc: "Real-time updates synchronized across caregivers, families, and agency coordinators." },
    { num: "06", title: "Family & Client Updates", desc: "Proactive communication ensuring families are never left wondering who is arriving." },
    { num: "07", title: "Missed-Visit Follow-Up", desc: "Rapid tracking of late clock-ins to safeguard client safety and EVV billing compliance." },
    { num: "08", title: "Credential & Document Reminders", desc: "Proactive tracking and reminders for license renewals and clinical certifications." },
    { num: "09", title: "Reporting & QA", desc: "Transparent telemetry on call volume, shifts covered, response times, and quality metrics." },
  ];

  const callOutSteps = [
    "Call-out received; on-call coordinator notified.",
    "Check client requirements and care specifications.",
    "Contact the replacement pool in your approved priority order.",
    "Confirm the cover with the available caregiver.",
    "Tell the family before they ever have to call.",
    "Escalate if uncovered within your set target time.",
  ];

  const complianceBoundaries = [
    {
      title: "HIPAA Protocols",
      desc: "Business Associate Agreement (BAA) in place; minimum necessary information accessed under strict role-based controls.",
    },
    {
      title: "EVV Compliance",
      desc: "Electronic Visit Verification monitored; late and missed clock-ins chased quickly to prevent Medicaid unbillable visits.",
    },
    {
      title: "Medical Emergencies",
      desc: "Caller immediately directed to contact emergency services (911); on-call clinician alerted at once per protocol.",
    },
    {
      title: "Strict Clinical Boundaries",
      desc: "Medication and care-plan questions routed directly to your clinical staff. Solvantra never provides medical advice or alters care plans.",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full palette-healthcare" style={{ backgroundColor: "#F3F7FB", color: "#10243A" }}>
        {/* =========================================================================
            HERO SECTION (HEALTHCARE PALETTE)
            Primary: #10243A | Secondary: #174A7E | Accent: #3B82F6 | Highlight: #67D5E8
            Light Bg: #F3F7FB | Text on Dark: #FFFFFF
            ========================================================================= */}
        <section
          className="relative w-full overflow-hidden pt-28 md:pt-36 pb-16 md:pb-24 border-b"
          style={{
            backgroundColor: "#10243A",
            color: "#FFFFFF",
            borderColor: "rgba(59, 130, 246, 0.25)",
          }}
        >
          {/* Cyan / Accent Ambient Glows */}
          <div
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: "#3B82F6" }}
          />
          <div
            className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-15"
            style={{ backgroundColor: "#67D5E8" }}
          />

          <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.18em] font-semibold block mb-4"
                style={{ color: "#67D5E8" }}
              >
                SOLVANTRA HEALTHCARE • REVENUE OPERATIONS &amp; CARE COORDINATION
              </span>

              <h1 className="font-display-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.12] mb-6">
                Revenue Operations &amp; Care Coordination,{" "}
                <span className="italic" style={{ color: "#3B82F6" }}>
                  Connected.
                </span>
              </h1>

              <p
                className="font-body-lg text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl"
                style={{ color: "#FFFFFF", opacity: 0.92 }}
              >
                End-to-end revenue cycle management for dental practices and medical clinics, combined with 24/7 intake, caregiver scheduling, and visit coordination for home care agencies.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-lg font-label-md text-sm transition-all duration-200 cursor-pointer shadow-lg hover:brightness-105"
                  style={{
                    backgroundColor: "#3B82F6",
                    color: "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  <span>Book a Discovery Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="inline-flex items-center rounded-lg p-1 border" style={{ borderColor: "rgba(59, 130, 246, 0.4)", backgroundColor: "rgba(23, 74, 126, 0.4)" }}>
                  <button
                    onClick={() => setActiveTab("rcm")}
                    className={`px-4 py-2 rounded-md text-xs font-label-md transition-all cursor-pointer ${
                      activeTab === "rcm"
                        ? "bg-[#3B82F6] text-white shadow-sm"
                        : "text-[#67D5E8] hover:text-white"
                    }`}
                  >
                    Revenue Cycle Management
                  </button>
                  <button
                    onClick={() => setActiveTab("homecare")}
                    className={`px-4 py-2 rounded-md text-xs font-label-md transition-all cursor-pointer ${
                      activeTab === "homecare"
                        ? "bg-[#3B82F6] text-white shadow-sm"
                        : "text-[#67D5E8] hover:text-white"
                    }`}
                  >
                    24/7 Home Care Scheduling
                  </button>
                </div>
              </div>

              {/* Credential Metrics Bar */}
              <div
                className="pt-6 border-t grid grid-cols-3 gap-4"
                style={{ borderColor: "rgba(59, 130, 246, 0.25)" }}
              >
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#67D5E8" }}>
                    End-to-End
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#FFFFFF", opacity: 0.85 }}>
                    Dental &amp; Medical RCM
                  </span>
                </div>
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#67D5E8" }}>
                    24/7/365
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#FFFFFF", opacity: 0.85 }}>
                    Caregiver Scheduling Desk
                  </span>
                </div>
                <div>
                  <span className="font-stat-numeral text-xl sm:text-2xl md:text-3xl font-bold block" style={{ color: "#67D5E8" }}>
                    HIPAA &amp; EVV
                  </span>
                  <span className="font-body-sm text-xs sm:text-sm" style={{ color: "#FFFFFF", opacity: 0.85 }}>
                    BAA &amp; Clean Audit Trail
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 1: THE TWO OPERATING PRINCIPLES
            RCM & Home Care Scheduling Overview
            ========================================================================= */}
        <section className="w-full py-20 md:py-24 border-b" style={{ borderColor: "rgba(16, 36, 58, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* RCM Principle Box */}
              <div
                className="p-8 sm:p-10 rounded-2xl border shadow-sm flex flex-col justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(23, 74, 126, 0.2)",
                }}
              >
                <div>
                  <span
                    className="font-eyebrow text-xs uppercase tracking-[0.15em] font-bold block mb-2"
                    style={{ color: "#174A7E" }}
                  >
                    DENTAL &amp; MEDICAL RCM
                  </span>
                  <h3 className="font-headline-sm text-2xl font-normal mb-3" style={{ color: "#10243A" }}>
                    Clearer Revenue Operations Start With a Structured Process
                  </h3>
                  <p className="font-body-md text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#174A7E" }}>
                    Organized workflows make billing easier to follow, manage, and improve. We manage revenue cycle operations from patient registration through final payment reconciliation.
                  </p>
                  <ul className="space-y-2.5 font-body-sm text-xs leading-relaxed" style={{ color: "#10243A" }}>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#3B82F6]" />
                      <span><strong>Organized workflows:</strong> From patient registration through final payment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#3B82F6]" />
                      <span><strong>Claim accuracy:</strong> Consistent follow-up and transparent reporting keep work visible.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#3B82F6]" />
                      <span><strong>Continuous improvement:</strong> Accuracy, transparency, data confidentiality, and process efficiency.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Home Care Principle Box */}
              <div
                className="p-8 sm:p-10 rounded-2xl border shadow-sm flex flex-col justify-between"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(23, 74, 126, 0.2)",
                }}
              >
                <div>
                  <span
                    className="font-eyebrow text-xs uppercase tracking-[0.15em] font-bold block mb-2"
                    style={{ color: "#174A7E" }}
                  >
                    CARE AT HOME
                  </span>
                  <h3 className="font-headline-sm text-2xl font-normal mb-3" style={{ color: "#10243A" }}>
                    Every Visit Scheduled. Every Family Reassured.
                  </h3>
                  <p className="font-body-md text-sm sm:text-base leading-relaxed mb-6" style={{ color: "#174A7E" }}>
                    Your 24/7 scheduling desk for care at home. An always-on team takes intake calls, schedules visits, confirms shifts, and covers call-outs so your clinical team stays focused on care.
                  </p>
                  <div className="space-y-3 font-body-sm text-xs leading-relaxed" style={{ color: "#10243A" }}>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "#F3F7FB" }}>
                      <strong className="text-[#10243A]">A missed intake call is a lost client.</strong> Families call multiple agencies in a row; unanswered calls immediately move on.
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "#F3F7FB" }}>
                      <strong className="text-[#10243A]">A missed call-out is a family that loses trust.</strong> Last-minute call-outs are a leading cause of client attrition if not resolved promptly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: REVENUE CYCLE MANAGEMENT (RCM)
            5-Step Connected Workflow & Dental/Medical Detail
            ========================================================================= */}
        <section className="w-full py-24 border-b" style={{ borderColor: "rgba(16, 36, 58, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#174A7E" }}
              >
                Revenue Cycle Operations
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#10243A" }}>
                One Connected Workflow from Registration to Reconciliation
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#174A7E" }}>
                Steps tailored by payer, practice management system, service type, and client agreement.
              </p>
            </div>

            {/* 5-Step Workflow Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {rcmWorkflow.map((step) => (
                <div
                  key={step.step}
                  className="p-6 rounded-xl border shadow-sm flex flex-col justify-between"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(23, 74, 126, 0.2)",
                  }}
                >
                  <div>
                    <span
                      className="font-stat-numeral text-3xl font-bold block mb-3"
                      style={{ color: "#3B82F6" }}
                    >
                      {step.step}
                    </span>
                    <h3 className="font-headline-sm text-xl font-semibold mb-2" style={{ color: "#10243A" }}>
                      {step.title}
                    </h3>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#174A7E" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dental vs Medical Support Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Dental RCM Support */}
              <div
                className="p-8 rounded-xl border shadow-sm"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(23, 74, 126, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#10243A", color: "#67D5E8" }}>
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-eyebrow text-[10px] uppercase tracking-wider font-bold" style={{ color: "#174A7E" }}>
                      Specialized Practice Support
                    </span>
                    <h3 className="font-headline-sm text-2xl font-semibold" style={{ color: "#10243A" }}>
                      Dental RCM Support
                    </h3>
                  </div>
                </div>
                <p className="font-body-sm text-xs mb-6" style={{ color: "#174A7E" }}>
                  Built around meticulous claim detail, procedure code review, and disciplined payer follow-up.
                </p>
                <ul className="space-y-3 font-body-sm text-xs leading-relaxed" style={{ color: "#10243A" }}>
                  {dentalServices.map((srv, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#3B82F6]" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Medical RCM Support */}
              <div
                className="p-8 rounded-xl border shadow-sm"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "rgba(23, 74, 126, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#10243A", color: "#67D5E8" }}>
                    <Receipt className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-eyebrow text-[10px] uppercase tracking-wider font-bold" style={{ color: "#174A7E" }}>
                      Clinical Practice Support
                    </span>
                    <h3 className="font-headline-sm text-2xl font-semibold" style={{ color: "#10243A" }}>
                      Medical RCM Support
                    </h3>
                  </div>
                </div>
                <p className="font-body-sm text-xs mb-6" style={{ color: "#174A7E" }}>
                  Structured medical billing with disciplined claim scrubbing, denial management, and AR recovery.
                </p>
                <ul className="space-y-3 font-body-sm text-xs leading-relaxed" style={{ color: "#10243A" }}>
                  {medicalServices.map((srv, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#3B82F6]" />
                      <span>{srv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quality & Visibility Checks Box */}
            <div
              className="p-8 sm:p-10 rounded-2xl border"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "rgba(23, 74, 126, 0.25)",
              }}
            >
              <h3 className="font-headline-sm text-xl font-semibold mb-4" style={{ color: "#10243A" }}>
                Quality Checks Protect Accuracy &amp; Visibility
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rcmQualityChecks.map((chk, i) => (
                  <div key={i} className="flex items-start gap-2.5 font-body-sm text-xs leading-relaxed" style={{ color: "#174A7E" }}>
                    <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#3B82F6]" />
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: 24/7 HOME CARE SCHEDULING & COORDINATION
            Nine Services, Call-Out Resolution, EVV, & Agencies Supported
            ========================================================================= */}
        <section
          className="w-full py-24 text-surface-bright relative"
          style={{ backgroundColor: "#10243A", color: "#FFFFFF" }}
        >
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="max-w-3xl mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-semibold block mb-2"
                style={{ color: "#67D5E8" }}
              >
                Care at Home Operations
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal leading-tight">
                Nine Services, From First Enquiry to Ongoing Coordination
              </h2>
              <p className="font-body-lg text-base sm:text-lg mt-3" style={{ color: "#FFFFFF", opacity: 0.9 }}>
                Always-on intake, nurse and caregiver scheduling, and visit coordination for home care agencies.
              </p>
            </div>

            {/* 9 Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {homeCareServices.map((srv) => (
                <div
                  key={srv.num}
                  className="p-6 rounded-xl border flex flex-col justify-between"
                  style={{
                    backgroundColor: "#174A7E",
                    borderColor: "rgba(59, 130, 246, 0.3)",
                    color: "#FFFFFF",
                  }}
                >
                  <div>
                    <span className="font-stat-numeral text-2xl font-bold block mb-2" style={{ color: "#67D5E8" }}>
                      {srv.num}
                    </span>
                    <h3 className="font-headline-sm text-lg font-semibold mb-2" style={{ color: "#FFFFFF" }}>
                      {srv.title}
                    </h3>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#FFFFFF", opacity: 0.85 }}>
                      {srv.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call-Out Workflow & Audiences Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Call-Out Protocol */}
              <div
                className="lg:col-span-7 p-8 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(23, 74, 126, 0.5)",
                  borderColor: "rgba(103, 213, 232, 0.3)",
                }}
              >
                <span className="font-eyebrow text-xs uppercase tracking-wider block mb-2 font-bold" style={{ color: "#67D5E8" }}>
                  RAPID GAP MITIGATION
                </span>
                <h3 className="font-headline-sm text-2xl font-normal mb-3" style={{ color: "#FFFFFF" }}>
                  A Call-Out Becomes Cover Before the Family Has to Call
                </h3>
                <p className="font-body-sm text-xs mb-6" style={{ color: "#FFFFFF", opacity: 0.85 }}>
                  Families leave when no one communicates. Our structured loop resolves open shifts rapidly:
                </p>
                <div className="space-y-3 font-body-sm text-xs">
                  {callOutSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5" style={{ backgroundColor: "#3B82F6", color: "#FFFFFF" }}>
                        0{idx + 1}
                      </span>
                      <span style={{ color: "#FFFFFF", opacity: 0.9 }}>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agencies Built For */}
              <div
                className="lg:col-span-5 p-8 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(23, 74, 126, 0.5)",
                  borderColor: "rgba(103, 213, 232, 0.3)",
                }}
              >
                <span className="font-eyebrow text-xs uppercase tracking-wider block mb-2 font-bold" style={{ color: "#67D5E8" }}>
                  SECTORS SERVED
                </span>
                <h3 className="font-headline-sm text-2xl font-normal mb-4" style={{ color: "#FFFFFF" }}>
                  Built for Agencies That Deliver Care at Home
                </h3>
                <ul className="space-y-3 font-body-sm text-xs">
                  {homeCareAudiences.map((aud, i) => (
                    <li key={i} className="flex items-center gap-2.5 pb-2.5 border-b last:border-b-0 last:pb-0" style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}>
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#67D5E8]" />
                      <span style={{ color: "#FFFFFF", opacity: 0.9 }}>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: COMPLIANCE, GOVERNANCE & CLEAR BOUNDARIES
            HIPAA, EVV, & Clinical Boundaries
            ========================================================================= */}
        <section className="w-full py-24 border-b" style={{ borderColor: "rgba(16, 36, 58, 0.12)" }}>
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className="font-eyebrow text-xs uppercase tracking-[0.16em] font-bold block mb-2"
                style={{ color: "#174A7E" }}
              >
                Governance &amp; Safeguards
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-normal" style={{ color: "#10243A" }}>
                Careful With Every Record. Clear on Every Boundary.
              </h2>
              <p className="font-body-md text-sm sm:text-base mt-3" style={{ color: "#174A7E" }}>
                You stay in control of all clinical decisions. We maintain the administrative discipline that keeps operations compliant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {complianceBoundaries.map((b, i) => (
                <div
                  key={i}
                  className="p-7 rounded-xl border shadow-sm flex flex-col justify-between"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderColor: "rgba(23, 74, 126, 0.2)",
                  }}
                >
                  <div>
                    <h3 className="font-headline-sm text-lg font-semibold mb-3" style={{ color: "#10243A" }}>
                      {b.title}
                    </h3>
                    <p className="font-body-sm text-xs leading-relaxed" style={{ color: "#174A7E" }}>
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Strict Non-Clinical Scope Disclaimer Box */}
            <div
              className="p-6 rounded-xl border flex flex-col sm:flex-row items-center justify-between gap-4"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "rgba(59, 130, 246, 0.3)",
              }}
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 shrink-0 text-[#3B82F6]" />
                <span className="font-body-md text-xs sm:text-sm text-[#10243A]">
                  <strong>Strict Boundaries:</strong> Solvantra provides scheduling, coordination, and revenue cycle operational support only. We never provide medical advice or alter care plans without approval.
                </span>
              </div>
              <span className="font-eyebrow text-[10px] uppercase tracking-wider shrink-0 font-bold text-[#174A7E]">
                Operational Support Only
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: DISCOVERY CTA BANNER (HEALTHCARE PALETTE)
            Primary: #10243A | Secondary: #174A7E | Accent: #3B82F6 | Text: #FFFFFF
            ========================================================================= */}
        <section
          className="w-full py-20"
          style={{ backgroundColor: "#10243A", color: "#FFFFFF" }}
        >
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div
              className="p-8 md:p-14 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
              style={{
                backgroundColor: "#174A7E",
                borderColor: "rgba(59, 130, 246, 0.35)",
              }}
            >
              <div className="max-w-xl">
                <span
                  className="font-eyebrow text-xs uppercase tracking-[0.16em] block mb-2 font-bold"
                  style={{ color: "#67D5E8" }}
                >
                  LET'S CONNECT
                </span>
                <h3 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl font-normal mb-3" style={{ color: "#FFFFFF" }}>
                  Dental &amp; Medical RCM. 24/7 Home Care Coordination.
                </h3>
                <p className="font-body-md text-sm leading-relaxed" style={{ color: "#FFFFFF", opacity: 0.9 }}>
                  Book a short discovery call to discuss how Solvantra can support your revenue operations or home-care scheduling desk.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-label-md text-sm transition-all duration-200 cursor-pointer shadow-lg hover:brightness-105"
                  style={{
                    backgroundColor: "#3B82F6",
                    color: "#FFFFFF",
                    fontWeight: 700,
                  }}
                >
                  <span>Book Discovery Call</span>
                  <Calendar className="w-4 h-4" />
                </button>
              </div>
            </div>

            <p className="text-[11px] text-center mt-6 font-body-sm" style={{ color: "#67D5E8", opacity: 0.8 }}>
              Solvantra provides operational, billing, scheduling and coordination support only, not medical or legal advice.
            </p>
          </div>
        </section>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Healthcare & RCM Operations"
      />
    </>
  );
}
