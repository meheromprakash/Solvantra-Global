"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  MessageSquare,
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
  const [selectedService, setSelectedService] = useState("24/7 Call Support");
  const [teamSize, setTeamSize] = useState(3);
  const [coverageHours, setCoverageHours] = useState("24/7 Continuous");

  const servicesList = [
    {
      id: "call-support",
      icon: PhoneCall,
      title: "24/7 Call Support",
      summary: "Round-the-clock professional customer communication and inbound desk management.",
      image: "/images/service_call_support.jpg",
      deliverables: [
        "Inbound customer service & hotline triage",
        "Outbound follow-ups & satisfaction checks",
        "Dedicated IVR & escalation protocols",
        "Real-time call recording & sentiment scoring",
      ],
      sla: "< 15s Average Speed of Answer",
    },
    {
      id: "chat-email",
      icon: MessageSquare,
      title: "Chat & Email Support",
      summary: "Responsive, prompt, and organized multi-channel customer communications.",
      image: "/images/service_chat_support.jpg",
      deliverables: [
        "Live chat monitoring & ticket resolution",
        "Email queue triage & macro responses",
        "Social media DM & review response desk",
        "CRM & helpdesk ticket synchronization",
      ],
      sla: "< 5m First Response Guarantee",
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
                    className="rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                  >
                    <div>
                      {/* Image Preview Banner */}
                      <div className="relative w-full h-48 overflow-hidden bg-surface-container">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary-ink/70 via-transparent to-transparent p-4 flex items-end justify-between">
                          <span className="font-eyebrow text-[11px] px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-bold shadow border border-outline-variant/30">
                            {service.sla}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary shrink-0">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <h3 className="font-headline-sm text-2xl text-on-surface">
                            {service.title}
                          </h3>
                        </div>
                        <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed">
                          {service.summary}
                        </p>

                        <div className="space-y-2.5 pt-4 border-t border-outline-variant/20 mb-4">
                          <span className="font-eyebrow text-[10px] text-primary uppercase tracking-wider block mb-1">
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
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <button
                        onClick={() => {
                          setSelectedService(service.title);
                          setIsModalOpen(true);
                        }}
                        className="inline-flex items-center justify-between w-full px-4 py-3 bg-surface-container hover:bg-primary-container hover:text-on-primary font-label-md text-xs rounded transition-colors group/btn"
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
