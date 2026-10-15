"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Filter,
  UserCheck,
  FileCheck,
  KeyRound,
  Cpu,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function RealEstatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const challenges = [
    "Buyer and seller portal leads going cold because agents are in showings and miss the 5-minute response window",
    "Incomplete and messy CRM pipelines with missing contact details, unassigned tasks, and dropped follow-ups",
    "Showing coordination chaos and endless scheduling back-and-forth between buyers, sellers, and listing agents",
    "Time-consuming administrative transaction paperwork taking top-producing agents away from closing deals",
  ];

  const solutions = [
    "Instant 24/7 lead qualification via phone and SMS contacting new inquiries within minutes of submission",
    "Meticulous CRM database hygiene and enriched buyer/seller contact profiles updated directly in your platform",
    "Seamless property showing and tour schedule coordination directly synced with your agents' live calendars",
    "Dedicated transaction coordination support auditing contract disclosures, inspection deadlines, and closing files",
  ];

  const capabilities = [
    {
      icon: Clock,
      title: "Speed-to-Lead Inbound Qualification",
      description:
        "Every lead from Zillow, Realtor.com, website forms, and social campaigns is contacted in under 5 minutes with structured qualification scripts.",
      sla: "< 5m Lead Contact SLA",
    },
    {
      icon: Calendar,
      title: "Showing & Tour Schedule Coordination",
      description:
        "Effortless scheduling and confirmation of in-person showings, lockbox coordination, and buyer calendar confirmations.",
      sla: "Zero Double-Booking Guarantee",
    },
    {
      icon: Filter,
      title: "CRM Pipeline Hygiene & Database Nurture",
      description:
        "Ongoing database cleanup, tagging, long-term drip sequence monitoring, and re-engagement of cold past leads in Follow Up Boss or kvCORE.",
      sla: "100% CRM Record Completeness",
    },
    {
      icon: FileCheck,
      title: "Transaction Coordination & Document Audit",
      description:
        "Detailed management of earnest money receipts, inspection timelines, title commitments, and compliance file checklists in Dotloop.",
      sla: "100% Disclosure Audit Compliance",
    },
  ];

  const techPlatforms = [
    "Follow Up Boss",
    "kvCORE",
    "BoomTown",
    "Salesforce Real Estate",
    "Zillow Premier Agent",
    "Dotloop",
    "Brokermint",
    "ShowingTime",
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/industry_real_estate.jpg"
          bgAlt="Solvantra Real Estate Operational Pod"
          eyebrow="WHO WE HELP • REAL ESTATE & PROPERTY"
          headingMain="Rapid Lead Triage & Operations For"
          headingGold="Real Estate Leaders."
          paragraph="Win the speed-to-lead race and streamline your brokerage operations. Solvantra provides immediate inbound lead qualification, showing coordination, CRM management, and transaction coordination for top teams."
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
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">&lt;5m</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Lead Response Window</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">100%</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">CRM Pipeline Hygiene</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">24/7</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Showing Coordination</span>
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
                Eliminating Bottlenecks Across the Real Estate Lifecycle
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges Card */}
              <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-xl text-on-surface mb-6 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <span>Brokerage &amp; Team Operational Bottlenecks</span>
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
                    <span>The Solvantra Real Estate Pod</span>
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
                High-Impact Operational Pods For Real Estate
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
                      <ShieldCheck className="w-4 h-4" /> Fair Housing &amp; Real Estate Ethics Protocols Audited
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
                    Direct Integration With Your Real Estate Tech Stack
                  </h2>
                  <p className="font-body-md text-sm text-secondary-fixed-dim leading-relaxed">
                    Our team plugs directly into your existing CRM, showing service, and transaction management platforms so your agents never have to alter their existing workflow.
                  </p>
                </div>

                <div className="lg:col-span-6 bg-inverse-surface/60 p-6 rounded-xl border border-primary-container/20">
                  <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-4">
                    <span className="font-eyebrow text-xs text-primary-fixed">Supported Brokerage &amp; CRM Tools</span>
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
        defaultService="Real Estate Operational Support"
      />
    </>
  );
}
