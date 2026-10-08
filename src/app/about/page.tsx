"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Users,
  GitBranch,
  Cpu,
  Eye,
  Flag,
  CheckCircle2,
  Clock,
  Sliders,
  Globe2,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  Building,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* SECTION 1: ABOUT HERO */}
        <section className="relative w-full bg-surface-bright overflow-hidden pt-12 pb-24 border-b border-outline-variant/20">
          <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none" />

          <div className="max-w-[1240px] mx-auto px-5 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Copy & Credentials */}
              <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container rounded mb-4 border border-outline-variant/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em]">
                    About Solvantra
                  </span>
                </div>

                <h1 className="font-headline-lg text-4xl sm:text-5xl text-on-surface mb-6 leading-tight">
                  Operational Support Built Around{" "}
                  <span className="text-primary-container italic font-normal">
                    Your Business.
                  </span>
                </h1>

                <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mb-8 max-w-xl leading-relaxed">
                  Solvantra is a global business operations and outsourcing partner helping organizations manage the essential work behind their everyday operations.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-on-primary font-label-md text-sm rounded shadow-[0_4px_20px_-2px_rgba(36,26,18,0.05),0_12px_32px_-4px_rgba(184,138,67,0.08)] hover:bg-primary transition-all group"
                  >
                    <span>Our Services</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/why-solvantra"
                    className="inline-flex items-center gap-1 px-4 py-3 text-secondary hover:text-on-surface font-label-md text-sm transition-colors"
                  >
                    <span>Learn our methodology</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Editorial Credential Footnote */}
                <div className="mt-12 pt-6 w-full flex items-center justify-between gap-4 border-t border-outline-variant/30">
                  <div className="flex flex-col">
                    <span className="font-stat-numeral text-2xl text-on-surface">99.4%</span>
                    <span className="font-body-sm text-xs text-secondary">SLA Adherence</span>
                  </div>
                  <div className="h-8 w-px bg-outline-variant/40" />
                  <div className="flex flex-col">
                    <span className="font-stat-numeral text-2xl text-on-surface">&lt;15m</span>
                    <span className="font-body-sm text-xs text-secondary">Critical Escalation</span>
                  </div>
                  <div className="h-8 w-px bg-outline-variant/40" />
                  <div className="flex flex-col">
                    <span className="font-stat-numeral text-2xl text-on-surface">Tier-1</span>
                    <span className="font-body-sm text-xs text-secondary">Data Encryption</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Composition with Image */}
              <div className="lg:col-span-6 relative mt-8 lg:mt-0">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/30 group">
                  <img
                    src="/images/hero_operations_team.jpg"
                    alt="Solvantra Global Executive HQ"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-ink/90 via-secondary-ink/20 to-transparent p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-wider px-3 py-1 bg-secondary-ink/80 rounded backdrop-blur-md border border-primary-container/30">
                        Executive Suite
                      </span>
                      <span className="px-3 py-1 rounded bg-primary-container text-on-primary text-xs font-bold shadow">
                        Global Operations Hub
                      </span>
                    </div>

                    <div className="p-4 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-outline-variant/30 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                        <Building className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-headline-sm text-base text-on-surface block">
                          Institutional Caliber Architecture
                        </span>
                        <span className="font-body-sm text-xs text-secondary">
                          Bespoke operational design crafted for global scale.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHO WE ARE & 3 PILLARS */}
        <section className="w-full bg-surface-container-low py-24 relative border-b border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            {/* Split Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-4">
                <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em] block mb-1">
                  Our Foundation
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                  Who We Are
                </h2>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
                <p className="font-body-lg text-base sm:text-lg text-on-surface leading-relaxed">
                  We combine people, processes and technology to provide reliable support across customer service, administration, claims, scheduling, lead management, compliance-oriented processes and dedicated staffing.
                </p>
                <p className="font-body-md text-sm text-secondary leading-relaxed">
                  Our approach is not based on a one-size-fits-all outsourcing model. We understand your workflow, identify opportunities for improvement and build a support model that fits your business.
                </p>
              </div>
            </div>

            {/* The 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* Pillar 1: People */}
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-surface-lowest transition-colors">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline-sm text-2xl text-on-surface mb-2">People</h3>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed">
                    Skilled and reliable teams selected through exacting cognitive and domain assessments. Trained thoroughly in your industry nuances.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-primary font-label-md text-xs">
                  <span>Rigorous talent curation</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Pillar 2: Processes */}
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-surface-lowest transition-colors">
                    <GitBranch className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline-sm text-2xl text-on-surface mb-2">Processes</h3>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed">
                    Structured and efficient workflows governed by stringent SOP documentation, continuous monitoring, and structured accountability layers.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-primary font-label-md text-xs">
                  <span>Precision SOP execution</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>

              {/* Pillar 3: Technology */}
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-surface-lowest transition-colors">
                    <Cpu className="w-7 h-7" />
                  </div>
                  <h3 className="font-headline-sm text-2xl text-on-surface mb-2">Technology</h3>
                  <p className="font-body-md text-sm text-secondary mb-6 leading-relaxed">
                    AI-enabled and scalable operations seamlessly interfacing with your existing software stack while upholding military-grade data protocols.
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center gap-2 text-primary font-label-md text-xs">
                  <span>Seamless API &amp; CRM parity</span>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Vision & Mission Split */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-5 rounded-xl bg-on-secondary-fixed p-8 text-surface-bright flex flex-col justify-end min-h-[280px] shadow-md relative overflow-hidden border border-primary-container/20">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/20 rounded-full blur-2xl pointer-events-none" />
                <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-wider mb-2 block">
                  Our Mandate
                </span>
                <p className="font-headline-sm text-2xl text-surface-bright leading-snug">
                  Elevating daily operational performance to a strategic competitive edge.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                {/* Vision Card */}
                <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
                      <Eye className="w-4 h-4" />
                    </span>
                    <h3 className="font-headline-sm text-xl text-on-surface">Our Vision</h3>
                  </div>
                  <p className="font-body-lg text-base text-secondary">
                    To become a trusted global partner for smarter, more scalable business operations.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-on-secondary-fixed text-surface-bright p-8 rounded-xl shadow-md flex flex-col justify-center flex-1 relative overflow-hidden border border-primary-container/30">
                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                      <Flag className="w-4 h-4" />
                    </span>
                    <h3 className="font-headline-sm text-xl text-surface-bright">Our Mission</h3>
                  </div>
                  <p className="font-body-lg text-base text-secondary-fixed-dim relative z-10">
                    To help businesses operate more efficiently by combining skilled people, intelligent processes and AI-enabled technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: GLOBAL DELIVERY MODEL */}
        <section className="w-full bg-surface py-24 relative">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em] block mb-2">
                Global Reach &amp; Architecture
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface mb-4">
                Local understanding. Global delivery. Scalable operations.
              </h2>
              <p className="font-body-md text-sm text-secondary">
                Solvantra is designed to support businesses across different markets and time zones with flexible operational teams and technology-enabled workflows that guarantee round-the-clock continuity.
              </p>
            </div>

            {/* 4 Gold Key Delivery Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="font-headline-sm text-2xl text-on-surface mb-1">24/7</span>
                <span className="font-label-md text-xs text-on-surface-variant font-semibold mb-1">
                  Support Across Time Zones
                </span>
                <p className="font-body-sm text-xs text-secondary leading-relaxed">
                  Follow-the-sun continuous operations without dead handoffs.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                  <Sliders className="w-6 h-6" />
                </div>
                <span className="font-headline-sm text-2xl text-on-surface mb-1">Modular</span>
                <span className="font-label-md text-xs text-on-surface-variant font-semibold mb-1">
                  Flexible Team Models
                </span>
                <p className="font-body-sm text-xs text-secondary leading-relaxed">
                  Dedicated pods, fractional resources, or bursting capacity.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <span className="font-headline-sm text-2xl text-on-surface mb-1">Multi-Region</span>
                <span className="font-label-md text-xs text-on-surface-variant font-semibold mb-1">
                  Global Delivery
                </span>
                <p className="font-body-sm text-xs text-secondary leading-relaxed">
                  Distributed redundancy ensuring uncompromised business continuity.
                </p>
              </div>

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group hover:bg-surface-bright transition-all">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-headline-sm text-2xl text-on-surface mb-1">Strict SLA</span>
                <span className="font-label-md text-xs text-on-surface-variant font-semibold mb-1">
                  Reliable Operations
                </span>
                <p className="font-body-sm text-xs text-secondary leading-relaxed">
                  Rigorous metric governance and audited quality scorecards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: CONSULTATION BANNER */}
        <ConsultationBanner
          title="Build your dedicated operational pod."
          subtitle="Connect with our solutions architects for an exploratory workflow and staffing evaluation."
        />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
