"use client";

import React, { useState } from "react";
import {
  HeartPulse,
  Truck,
  Landmark,
  ShoppingBag,
  Code2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function IndustriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState("Healthcare");

  const industries = [
    {
      id: "Healthcare",
      icon: HeartPulse,
      title: "Healthcare & Medical Practices",
      tagline: "HIPAA-compliant patient coordination, medical billing, and insurance claims resolution.",
      challenges: [
        "High patient call volume & appointment scheduling backlogs",
        "Complex insurance prior authorizations & claims denials",
        "Strict HIPAA data security & patient privacy enforcement",
      ],
      solutions: [
        "Dedicated patient intake & 24/7 hotline support",
        "End-to-end medical billing, AR recovery & denial appeals",
        "HIPAA-compliant EHR/EMR data entry & insurance verification",
      ],
      metrics: "99.4% Claims First-Pass Approval",
    },
    {
      id: "Logistics",
      icon: Truck,
      title: "Logistics, Freight & Supply Chain",
      tagline: "Real-time dispatch support, load tracking, driver coordination, and invoice audit.",
      challenges: [
        "Overnight dispatch triage & driver check-ins across time zones",
        "Freight bill auditing & proof of delivery (POD) verification",
        "Customer ETA inquiry spikes during peak shipping windows",
      ],
      solutions: [
        "24/7 follow-the-sun dispatch desk & driver assistance",
        "Automated shipment tracking & customer proactive updates",
        "Freight invoicing, rate auditing & BOL documentation management",
      ],
      metrics: "< 10m Urgent Dispatch Escalation",
    },
    {
      id: "Financial",
      icon: Landmark,
      title: "Financial Services & FinTech",
      tagline: "Secure back-office processing, KYC compliance, customer support, and loan intake.",
      challenges: [
        "Stringent regulatory compliance & AML/KYC audit trails",
        "High-volume document verification for loan applications",
        "Sensitive customer financial inquiry handling",
      ],
      solutions: [
        "Standardized KYC document audit & customer onboarding",
        "Inbound account support & transaction dispute intake",
        "Secure back-office ledger reconciliation & compliance checks",
      ],
      metrics: "100% SOC-2 & ISO 27001 Audit Parity",
    },
    {
      id: "Retail",
      icon: ShoppingBag,
      title: "Retail & E-Commerce",
      tagline: "Omnichannel customer care, order tracking, returns processing, and review response.",
      challenges: [
        "Seasonal volume surges during holiday promotions & sales",
        "Multi-channel support fragmentation (Chat, Email, Social DMs)",
        "Delayed order status & return refund processing",
      ],
      solutions: [
        "Omnichannel live chat & email support staffing",
        "Order status (WISMO) inquiry resolution & return management",
        "Customer review monitoring & brand reputation management",
      ],
      metrics: "< 3m Average Live Chat Resolution",
    },
    {
      id: "Tech",
      icon: Code2,
      title: "Software, SaaS & Technology",
      tagline: "Tier-1 technical helpdesk, onboarding coordination, and lead qualification.",
      challenges: [
        "Technical user support queues impacting engineering bandwidth",
        "Trial user onboarding drop-off due to delayed initial response",
        "CRM data decay & un-qualified lead clutter",
      ],
      solutions: [
        "Tier-1 technical support desk & ticket triage",
        "Proactive user onboarding assistance & feature walkthroughs",
        "Lead enrichment, qualification & B2B sales meeting scheduling",
      ],
      metrics: "98.5% CSAT Ticket Resolution Score",
    },
  ];

  const currentInd = industries.find((i) => i.id === activeIndustry) || industries[0];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/industry_real_estate.jpg"
          bgAlt="Solvantra Industry Expertise"
          eyebrow="DOMAIN EXPERTISE"
          headingMain="Tailored Solutions Across"
          headingGold="Industries."
          paragraph="Every sector demands specialized domain knowledge, compliance standards, and workflow protocols. Solvantra builds dedicated operational pods configured for your specific industry."
          primaryButton={{
            label: "Book a Consultation",
            isModalTrigger: true,
          }}
          secondaryButton={{
            label: "Explore Capabilities",
            href: "/services",
          }}
        />

        {/* INTERACTIVE INDUSTRY SELECTOR */}
        <section className="w-full bg-surface py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            {/* Tabs */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-outline-variant/20">
              {industries.map((ind) => {
                const IconComp = ind.icon;
                const isActive = ind.id === activeIndustry;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind.id)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-lg text-xs font-label-md transition-all whitespace-nowrap border shrink-0 ${
                      isActive
                        ? "bg-primary-container text-on-primary border-primary shadow-md"
                        : "bg-surface-container-low text-secondary border-outline-variant/30 hover:bg-surface-container hover:text-on-surface"
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{ind.title.split("&")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Industry Breakdown */}
            <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant/30 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-outline-variant/20">
                <div>
                  <span className="font-eyebrow text-xs text-primary uppercase tracking-wider block mb-1">
                    Industry Specialization
                  </span>
                  <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                    {currentInd.title}
                  </h2>
                  <p className="font-body-lg text-base text-secondary mt-2 max-w-2xl">
                    {currentInd.tagline}
                  </p>
                </div>
                <div className="px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-center shrink-0">
                  <span className="font-eyebrow text-[10px] text-secondary uppercase block mb-0.5">
                    Benchmark SLA
                  </span>
                  <span className="font-headline-sm text-lg text-primary font-bold">
                    {currentInd.metrics}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Challenges */}
                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <h3 className="font-headline-sm text-lg text-on-surface mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600" />
                    Key Industry Operational Challenges
                  </h3>
                  <div className="space-y-3">
                    {currentInd.challenges.map((c, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-secondary">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Solutions */}
                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <h3 className="font-headline-sm text-lg text-on-surface mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Solvantra Tailored Operational Solution
                  </h3>
                  <div className="space-y-3">
                    {currentInd.solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-on-surface font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-eyebrow text-primary">
                  <ShieldCheck className="w-4 h-4" /> Domain Specific SOP Training &amp; Compliance Included
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 bg-primary-container text-on-primary font-label-md text-xs rounded hover:bg-primary transition-colors inline-flex items-center gap-2"
                >
                  <span>Build a {currentInd.title.split("&")[0]} Pod</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
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
        defaultService={`${currentInd.title.split("&")[0]} Operational Support`}
      />
    </>
  );
}
