"use client";

import React, { useState } from "react";
import {
  Search,
  FileCode2,
  UserCheck2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function HowItWorksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery & Workflow Audit",
      timeline: "Days 1 \u2013 3",
      summary: "Our solutions architects analyze your existing operational volume, software stack, peak pain points, and target SLA metrics.",
      activities: [
        "In-depth workflow mapping & baseline metric capture",
        "Volume forecasting & staffing requirement analysis",
        "Security & compliance protocol review (NDA, BAA, SOC-2)",
      ],
    },
    {
      number: "02",
      icon: FileCode2,
      title: "SOP & SLA Blueprint Mapping",
      timeline: "Days 4 \u2013 7",
      summary: "We codify your operational standards into explicit, step-by-step Standard Operating Procedures (SOPs) and establish real-time quality scorecards.",
      activities: [
        "Interactive SOP documentation & version lock",
        "Escalation tree & threshold definition",
        "CRM/Software access provisioning & sandbox testing",
      ],
    },
    {
      number: "03",
      icon: UserCheck2,
      title: "Talent Selection & Intensive Onboarding",
      timeline: "Days 8 \u2013 12",
      summary: "We assign dedicated specialists from our pre-vetted talent pool, conducting intensive training tailored to your brand voice and workflows.",
      activities: [
        "Domain-specific candidate selection & approval",
        "Hands-on scenario simulation & macro training",
        "Dry-run quality audits & SLA stress testing",
      ],
    },
    {
      number: "04",
      icon: Rocket,
      title: "Go-Live & Continuous QA Governance",
      timeline: "Day 14+",
      summary: "Your dedicated pod transitions into live operational coverage with active Quality Assurance monitoring and weekly performance reviews.",
      activities: [
        "Seamless live shift transition & real-time monitoring",
        "Weekly QA scorecard delivery & team coaching",
        "Continuous workflow optimization & scale adjustments",
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/who_we_help_team.jpg"
          bgAlt="Solvantra Deployment Framework"
          eyebrow="DEPLOYMENT FRAMEWORK"
          headingMain="From Initial Audit to"
          headingGold="Live Pod in 14 Days."
          paragraph="Our structured 4-step onboarding framework guarantees zero operational disruption, strict SLA compliance, and rapid integration with your team."
          primaryButton={{
            label: "Book a Consultation",
            isModalTrigger: true,
          }}
          secondaryButton={{
            label: "Explore Services",
            href: "/services",
          }}
        />

        {/* 4-STEP TIMELINE */}
        <section className="w-full bg-surface py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="space-y-12">
              {steps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                  >
                    <div className="lg:col-span-4 flex items-center gap-6">
                      <span className="font-stat-numeral text-5xl text-primary-container font-normal">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0 shadow-sm">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="font-eyebrow text-[10px] text-primary uppercase tracking-wider block">
                          {step.timeline}
                        </span>
                        <h3 className="font-headline-sm text-xl text-on-surface">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                      <p className="font-body-md text-sm text-secondary leading-relaxed">
                        {step.summary}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {step.activities.map((act, i) => (
                          <div key={i} className="p-3 bg-surface-container-low rounded border border-outline-variant/20 flex items-start gap-2 text-xs text-on-surface">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* GUARANTEE BOX */}
        <section className="w-full bg-surface-container-low py-16 border-t border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/30 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-headline-sm text-lg text-on-surface">
                    100% Risk-Free Operational Trial
                  </h4>
                  <p className="font-body-sm text-xs text-secondary">
                    Every deployment includes a 14-day SLA review milestone before long-term commitment.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-primary-container text-on-primary font-label-md text-xs rounded hover:bg-primary transition-colors inline-flex items-center gap-2 shrink-0"
              >
                <span>Initiate Step 01 Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <ConsultationBanner />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
