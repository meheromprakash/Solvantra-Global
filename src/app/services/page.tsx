"use client";

import React, { useState } from "react";
import {
  Headset,
  Calendar,
  FileCheck,
  ClipboardList,
  ShieldCheck,
  Filter,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Sliders,
  Sparkles,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("24/7 Call & Chat Support");
  const [teamSize, setTeamSize] = useState(3);
  const [coverageHours, setCoverageHours] = useState("24/7 Continuous");

  const servicesList = [
    {
      id: "call-chat-support",
      icon: Headset,
      title: "24/7 Call & Chat Support",
      summary: "Round-the-clock omnichannel customer communication, live chat triage, and inbound desk management.",
      image: "/images/service_call_support.jpg",
      deliverables: [
        "24/7 Inbound & outbound call handling with dedicated IVR",
        "Multi-channel live chat, email queue & ticket resolution",
        "Dedicated escalation protocols & priority routing",
        "Real-time call recording, sentiment scoring & CRM sync",
      ],
      sla: "< 15s Call / < 5m Chat Response",
    },
    {
      id: "ai-scheduling",
      icon: Calendar,
      title: "AI Scheduling",
      summary: "Automated client booking, smart calendar reminders, and timely follow-ups.",
      image: "/images/service_ai_scheduling.jpg",
      deliverables: [
        "Intelligent calendar slot optimization",
        "Automated SMS/Email appointment reminders",
        "No-show reduction & re-engagement sequences",
        "Multi-timezone resource coordination",
      ],
      sla: "Zero Calendar Overlaps Guaranteed",
    },
    {
      id: "claims-ar",
      icon: FileCheck,
      title: "Claims & AR Support",
      summary: "Efficient claims management, denial resolution, and accounts receivable acceleration.",
      image: "/images/service_claims_ar.jpg",
      deliverables: [
        "Insurance claim generation & submission",
        "Denial triage & appeals management",
        "Aged receivables audit & patient/client outreach",
        "Payment gateway & invoice reconciliation",
      ],
      sla: "99.2% Clean Claim Rate",
    },
    {
      id: "admin-support",
      icon: ClipboardList,
      title: "Administrative Support",
      summary: "Precision back-office assistance, data verification, and documentation management.",
      image: "/images/service_admin_support.jpg",
      deliverables: [
        "Data entry, audit & database hygiene",
        "Document formatting, filing & indexing",
        "Executive calendar & travel coordination",
        "Vendor invoice audit & approval routing",
      ],
      sla: "99.8% Data Accuracy Score",
    },
    {
      id: "compliance",
      icon: ShieldCheck,
      title: "Compliance & Process",
      summary: "Structured governance, rigorous quality checks, and institutional SOP management.",
      image: "/images/service_compliance.jpg",
      deliverables: [
        "SOP creation, maintenance & versioning",
        "Regulatory audit preparation (HIPAA, SOC-2)",
        "Internal QA scorecards & call auditing",
        "Incident tracking & root cause analysis",
      ],
      sla: "100% SOP Compliance Audited",
    },
    {
      id: "lead-mgmt",
      icon: Filter,
      title: "Lead Management",
      summary: "Prompt pipeline enrichment, contact qualification, and revenue opportunity routing.",
      image: "/images/service_call_support.jpg",
      deliverables: [
        "Inbound lead response & qualification",
        "B2B contact enrichment & CRM logging",
        "Discovery call booking for sales team",
        "Inactive lead re-activation campaigns",
      ],
      sla: "< 2m Lead Response Window",
    },
    {
      id: "virtual-staffing",
      icon: UserCheck,
      title: "Virtual Staffing",
      summary: "Seamless remote specialists dedicated entirely to your ongoing enterprise workflows.",
      image: "/images/service_virtual_teams.jpg",
      deliverables: [
        "Full-time dedicated operations specialists",
        "Custom domain onboarding & security setup",
        "Direct Slack/Teams integration with your team",
        "Transparent daily performance dashboards",
      ],
      sla: "100% Dedicated Team Allocation",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/service_call_support.jpg"
          bgAlt="Solvantra Core Services Catalog"
          eyebrow="ENTERPRISE OPERATIONS CATALOG"
          headingMain="Core Services &"
          headingGold="Operational Pods."
          paragraph="Tailored operational capabilities managed by vetted teams, precision SOPs, and AI-enabled infrastructure designed to integrate directly into your workflow."
          primaryButton={{
            label: "Book a Consultation",
            isModalTrigger: true,
          }}
          secondaryButton={{
            label: "Get a Custom Solution",
            href: "/why-solvantra",
          }}
        />

        {/* 8 DETAILED SERVICE CARDS */}
        <section className="w-full bg-surface py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesList.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    className="rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between p-7 md:p-8 relative group overflow-hidden"
                  >
                    {/* Subtle Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary transition-all duration-300" />

                    <div>
                      {/* Header: Icon + SLA Metric Pill */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="w-13 h-13 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:scale-105 transition-all duration-300 shadow-sm border border-outline-variant/20 shrink-0">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="font-eyebrow text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full bg-surface-container-low text-primary font-bold border border-outline-variant/30 shrink-0">
                          {service.sla}
                        </span>
                      </div>

                      <h3 className="font-headline-sm text-2xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed">
                        {service.summary}
                      </p>

                      <div className="space-y-2.5 pt-4 pb-5 border-y border-outline-variant/20 mb-6">
                        <span className="font-eyebrow text-[10px] text-on-surface uppercase tracking-wider block font-bold">
                          Key Deliverables:
                        </span>
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-on-surface-variant">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={() => {
                          setSelectedService(service.title);
                          setIsModalOpen(true);
                        }}
                        className="inline-flex items-center justify-between w-full px-4 py-3 bg-surface-container-low hover:bg-primary hover:text-on-primary text-primary font-label-md text-xs rounded-lg transition-all duration-200 group/btn border border-outline-variant/20 hover:border-transparent cursor-pointer"
                      >
                        <span>Request {service.title} Pod</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE OPERATIONAL POD CONFIGURATOR */}
        <section className="w-full bg-surface-container-low py-20 border-t border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant/30 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em]">
                  Interactive Solution Builder
                </span>
              </div>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface mb-4">
                Configure Your Solvantra Operational Pod
              </h2>
              <p className="font-body-md text-sm text-secondary max-w-2xl mb-10">
                Select your required operational capabilities to see the recommended pod composition, SLA metrics, and deployment timeline.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Options Panel */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <label className="block font-label-md text-xs text-on-surface mb-2">
                      Primary Service Requirement:
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-3 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                    >
                      {servicesList.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="font-label-md text-xs text-on-surface">
                        Dedicated Specialists Count:
                      </label>
                      <span className="font-bold text-primary text-sm">{teamSize} FTE Specialists</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={15}
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-[11px] text-secondary mt-1 font-body-sm">
                      <span>1 Specialist (Fractional)</span>
                      <span>5 Pod</span>
                      <span>15+ Enterprise</span>
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-xs text-on-surface mb-2">
                      Coverage Model:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Standard 8/5 Shift", "Extended 16/7", "24/7 Continuous"].map((cov) => (
                        <button
                          key={cov}
                          onClick={() => setCoverageHours(cov)}
                          className={`p-3 text-xs font-label-md rounded border transition-colors ${
                            coverageHours === cov
                              ? "bg-primary-container text-on-primary border-primary"
                              : "bg-surface text-secondary border-outline-variant/30 hover:bg-surface-container"
                          }`}
                        >
                          {cov}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Pod Summary Panel */}
                <div className="lg:col-span-5 bg-on-secondary-fixed text-surface-bright p-6 rounded-xl border border-primary-container/30 flex flex-col justify-between shadow-lg">
                  <div>
                    <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-4">
                      <span className="font-eyebrow text-xs text-primary-fixed">Estimated Pod Blueprint</span>
                      <Sliders className="w-4 h-4 text-primary-fixed" />
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-xs">
                        <span className="text-secondary-fixed-dim">Primary Focus:</span>
                        <span className="font-semibold text-surface-bright">{selectedService}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-secondary-fixed-dim">Team Size:</span>
                        <span className="font-semibold text-primary-fixed">{teamSize} Dedicated FTEs</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-secondary-fixed-dim">Coverage Hours:</span>
                        <span className="font-semibold text-surface-bright">{coverageHours}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-secondary-fixed-dim">Quality Governance:</span>
                        <span className="font-semibold text-surface-bright">Dedicated Pod Lead Included</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-secondary-fixed-dim">Deployment Time:</span>
                        <span className="font-semibold text-primary-fixed">7-14 Days Onboarding</span>
                      </div>
                    </div>

                    <div className="p-3 bg-inverse-surface/60 rounded text-[11px] text-secondary-fixed-dim space-y-1 mb-6">
                      <p>✓ Tier-1 Data Encryption & NDA Included</p>
                      <p>✓ Direct Slack/Teams Integration</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 bg-primary-container text-on-primary font-label-md text-xs rounded hover:bg-primary transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Request Custom Quote &amp; SLA</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
        defaultService={selectedService}
      />
    </>
  );
}
