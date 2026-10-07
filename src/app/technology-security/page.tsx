"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Server,
  Cpu,
  RefreshCw,
  FileCheck2,
  CheckCircle2,
  Key,
  Database,
  ArrowRight,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";

export default function TechnologySecurityPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const securityPillars = [
    {
      icon: Lock,
      title: "SOC-2 Type II Certified Data Infrastructure",
      description: "Rigorous independent audits validating operational security, availability, and confidentiality across all data centers.",
    },
    {
      icon: FileCheck2,
      title: "HIPAA & HITECH Compliance Enclosure",
      description: "Dedicated PHI handling protocols, encrypted medical records storage, and strict Business Associate Agreement (BAA) execution.",
    },
    {
      icon: Server,
      title: "ISO 27001 Information Security",
      description: "Comprehensive risk management framework, continuous vulnerability scanning, and multi-factor authentication across all endpoints.",
    },
    {
      icon: Key,
      title: "AES-256 & TLS 1.3 Encryption",
      description: "End-to-end data protection ensuring all customer data is fully encrypted both at rest and in transit.",
    },
    {
      icon: Database,
      title: "Clean-Desk Physical Security",
      description: "Physical access control, biometric authentication, paperless clean-desk environments, and mobile device restrictions in all pods.",
    },
    {
      icon: RefreshCw,
      title: "Real-Time Disaster Recovery & Redundancy",
      description: "Automated hourly data snapshots, multi-region failover nodes, and guaranteed 99.99% infrastructure uptime SLAs.",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <section className="w-full bg-surface-bright py-16 lg:py-24 border-b border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded mb-4 border border-outline-variant/30">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em]">
                Enterprise Security &amp; Technology Stack
              </span>
            </div>
            <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface mb-6">
              Institutional Security Meets AI-Powered Operations
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-secondary leading-relaxed">
              We uphold the highest international compliance standards while deploying intelligent workflow automation directly into your existing CRM, ERP, and helpdesk ecosystem.
            </p>
          </div>
        </section>

        {/* SECURITY PILLARS GRID */}
        <section className="w-full bg-surface py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em] block mb-2">
                Data Protection Guarantee
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                Tier-1 Compliance &amp; Security Architecture
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityPillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6 shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-headline-sm text-xl text-on-surface mb-3">
                        {pillar.title}
                      </h3>
                      <p className="font-body-sm text-xs text-secondary leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center gap-2 text-primary font-eyebrow text-[10px]">
                      <CheckCircle2 className="w-4 h-4" /> Verified Compliance Standard
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI & CRM INTEGRATION SHOWCASE */}
        <section className="w-full bg-surface-container-low py-20 border-t border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="bg-on-secondary-fixed text-surface-bright rounded-xl p-8 md:p-12 border border-primary-container/30 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-[0.14em] block">
                    Seamless Stack Integration
                  </span>
                  <h2 className="font-headline-lg text-3xl sm:text-4xl text-surface-bright">
                    Zero Operational Friction. Pure Tech Parity.
                  </h2>
                  <p className="font-body-md text-sm text-secondary-fixed-dim leading-relaxed">
                    Our team works directly inside your existing software suite — Salesforce, HubSpot, Zendesk, Epic Systems, SAP, Jira, or custom APIs — eliminating complex migration risks.
                  </p>
                  <div className="space-y-2 pt-2">
                    {["Direct API & Webhook Telemetry", "Real-Time CRM Data Synchronization", "AI-Powered Macro Assistance & Ticket Triage", "Custom Dashboard & Metric Reporting"].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-surface-bright">
                        <CheckCircle2 className="w-4 h-4 text-primary-fixed" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6 bg-inverse-surface/60 p-6 rounded-xl border border-primary-container/20">
                  <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-4">
                    <span className="font-eyebrow text-xs text-primary-fixed">Supported Enterprise Integrations</span>
                    <Cpu className="w-5 h-5 text-primary-fixed" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-label-md text-surface-bright">
                    <div className="p-3 bg-surface-container-lowest/10 rounded border border-outline-variant/10 text-center">Salesforce Enterprise</div>
                    <div className="p-3 bg-surface-container-lowest/10 rounded border border-outline-variant/10 text-center">HubSpot CRM</div>
                    <div className="p-3 bg-surface-container-lowest/10 rounded border border-outline-variant/10 text-center">Zendesk / Freshdesk</div>
                    <div className="p-3 bg-surface-container-lowest/10 rounded border border-outline-variant/10 text-center">Epic / Cerner EHR</div>
                    <div className="p-3 bg-surface-container-lowest/10 rounded border border-outline-variant/10 text-center">SAP &amp; Oracle ERP</div>
                    <div className="p-3 bg-surface-container-lowest/10 rounded border border-outline-variant/10 text-center">Custom REST / GraphQL APIs</div>
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
      />
    </>
  );
}
