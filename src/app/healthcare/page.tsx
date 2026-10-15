"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HeartPulse,
  ShieldCheck,
  FileCheck2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Receipt,
  UserCheck,
  Cpu,
  Lock,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function HealthcarePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const challenges = [
    "High patient call volume leading to prolonged hold times and appointment scheduling backlogs",
    "Complex insurance prior authorizations causing treatment delays and lost practice revenue",
    "Elevated claim denial rates and aged accounts receivable tying up essential practice cash flow",
    "Strict HIPAA regulations requiring continuous administrative vigilance and encrypted data handling",
  ];

  const solutions = [
    "Dedicated, HIPAA-trained patient coordinators handling inbound intake, triage, and scheduling",
    "Real-time insurance eligibility verification and pre-authorization processing before appointments",
    "End-to-end medical billing, electronic claim scrubbing, and aggressive denial appeal management",
    "Complete compliance enclosure with signed Business Associate Agreements (BAAs) and secure protocols",
  ];

  const capabilities = [
    {
      icon: Calendar,
      title: "HIPAA-Compliant Patient Intake & Scheduling",
      description:
        "Compassionate, accurate patient communication, appointment booking, reminder sequences, and registration management inside your EHR.",
      sla: "< 15s Patient Triage Window",
    },
    {
      icon: FileCheck2,
      title: "Insurance Eligibility & Prior Authorizations",
      description:
        "Proactive benefit verification, co-pay calculation, and payer prior-authorization submissions to eliminate front-desk surprises.",
      sla: "99.1% Eligibility Accuracy",
    },
    {
      icon: Receipt,
      title: "Medical Billing & Clean Claims Scrubbing",
      description:
        "Accurate ICD-10/CPT cross-referencing, electronic batch submission, and clean claim generation to accelerate revenue collection.",
      sla: "99.4% First-Pass Approval",
    },
    {
      icon: ShieldCheck,
      title: "Denial Management & Aged AR Recovery",
      description:
        "Systematic investigation of rejected claims, timely submission of payer appeals, and dedicated follow-up on aged receivables (>60 days).",
      sla: "48h Denial Triage Window",
    },
  ];

  const techPlatforms = [
    "Epic Systems",
    "Cerner EHR",
    "AthenaHealth",
    "Kareo",
    "DrChrono",
    "AdvancedMD",
    "eClinicalWorks",
    "NextGen Healthcare",
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/industry_healthcare.jpg"
          bgAlt="Solvantra Healthcare Operational Support"
          eyebrow="WHO WE HELP • HEALTHCARE & MEDICAL"
          headingMain="HIPAA-Compliant Operations For"
          headingGold="Healthcare Practices."
          paragraph="Streamline patient coordination, accelerate medical billing, and maintain uncompromised HIPAA standards. Solvantra deploys dedicated operational pods configured for clinics, medical practices, and healthcare organizations."
          primaryButton={{
            label: "Book a Consultation",
            isModalTrigger: true,
          }}
          secondaryButton={{
            label: "Explore Capabilities",
            href: "/services",
          }}
        >
          {/* Editorial Credential Footnote */}
          <div className="mt-8 md:mt-10 pt-6 w-full flex items-center justify-between gap-4 border-t border-outline-variant/30">
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">99.4%</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Clean Claims Approval</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">100%</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">HIPAA BAA Enclosure</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">&lt;15s</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Patient Intake Triage</span>
            </div>
          </div>
        </PageHero>

        {/* SECTION 1: CHALLENGES VS SOLVANTRA PODS */}
        <section className="w-full bg-surface-container-low py-20 border-b border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em] block mb-2">
                Operational Alignment
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                Addressing Modern Healthcare Workflow Bottlenecks
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges Card */}
              <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-xl text-on-surface mb-6 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <span>Healthcare Operational Bottlenecks</span>
                  </h3>
                  <div className="space-y-4">
                    {challenges.map((c, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-secondary">
                        <span className="text-primary font-bold shrink-0 mt-0.5">•</span>
                        <span className="leading-relaxed">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solvantra Solution Card */}
              <div className="p-8 rounded-xl bg-surface-container-lowest border border-primary-container/40 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-xl text-on-surface mb-6 flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>The Solvantra Healthcare Pod</span>
                  </h3>
                  <div className="space-y-4">
                    {solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-on-surface font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SPECIALIZED CAPABILITIES */}
        <section className="w-full bg-surface py-24">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em] block mb-2">
                Dedicated Capabilities
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                Clinical Workflow &amp; Revenue Cycle Support
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {capabilities.map((cap, idx) => {
                const IconComp = cap.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary shadow-sm group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 transition-all duration-300">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="font-eyebrow text-[10px] px-3 py-1 rounded-full bg-surface-container text-primary font-bold border border-outline-variant/20">
                          {cap.sla}
                        </span>
                      </div>
                      <h3 className="font-headline-sm text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                        {cap.title}
                      </h3>
                      <p className="font-body-md text-sm text-secondary leading-relaxed mb-6">
                        {cap.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-primary font-eyebrow text-xs">
                      <Lock className="w-4 h-4" /> HIPAA BAA Enclosure &amp; Clean-Desk Policy Enforced
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: PLATFORM PARITY */}
        <section className="w-full bg-surface-container-low py-20 border-t border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div
              className="dark-bg-section text-surface-bright rounded-xl p-8 md:p-12 border border-primary-container/30 shadow-xl relative overflow-hidden"
              style={
                {
                  "--dark-bg-image": "url('/images/dark_bg_cta.webp')",
                } as React.CSSProperties
              }
            >
              <div className="hidden md:block dark-bg-layer" />
              <div className="hidden md:block dark-bg-overlay" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-[0.14em] block">
                    Zero Operational Disruption
                  </span>
                  <h2 className="font-headline-lg text-3xl sm:text-4xl text-surface-bright">
                    Direct Integration With Your EHR/EMR Infrastructure
                  </h2>
                  <p className="font-body-md text-sm text-secondary-fixed-dim leading-relaxed">
                    Our HIPAA-certified teams work securely inside your existing Electronic Health Record (EHR) and Practice Management suites via encrypted VPN and role-based access controls.
                  </p>
                </div>

                <div className="lg:col-span-6 bg-inverse-surface/60 p-6 rounded-xl border border-primary-container/20">
                  <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-4">
                    <span className="font-eyebrow text-xs text-primary-fixed">Supported Healthcare Platforms</span>
                    <Cpu className="w-5 h-5 text-primary-fixed" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-label-md text-surface-bright">
                    {techPlatforms.map((platform, i) => (
                      <div
                        key={i}
                        className="p-3 bg-surface-container-lowest/10 rounded border border-outline-variant/10 text-center font-medium"
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <ConsultationBanner />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="Healthcare Operational Support"
      />
    </>
  );
}
