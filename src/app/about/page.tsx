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
import PageHero from "@/components/sections/PageHero";

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* SECTION 1: ABOUT HERO */}
        <PageHero
          bgImage="/images/hero_operations_team.jpg"
          bgAlt="Solvantra Global Executive HQ"
          eyebrow="ABOUT SOLVANTRA"
          headingMain="Operational Support Built Around"
          headingGold="Your Business."
          paragraph="Solvantra is a global business operations and outsourcing partner helping organizations manage the essential work behind their everyday operations."
          primaryButton={{
            label: "Our Services",
            href: "/services",
          }}
          secondaryButton={{
            label: "Learn Our Methodology",
            href: "/why-solvantra",
          }}
        >
          {/* Editorial Credential Footnote */}
          <div className="mt-8 md:mt-10 pt-6 w-full flex items-center justify-between gap-4 border-t border-outline-variant/30">
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">99.4%</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">SLA Adherence</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">&lt;15m</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Critical Escalation</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">Tier-1</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Data Encryption</span>
            </div>
          </div>
        </PageHero>

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
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6 transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 shadow-sm">
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
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6 transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 shadow-sm">
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
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-between group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40">
                <div>
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6 transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 shadow-sm">
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
              <div
                className="dark-bg-section lg:col-span-5 rounded-xl p-8 text-surface-bright flex flex-col justify-end min-h-[280px] shadow-xl relative overflow-hidden border border-primary-container/30"
                style={
                  {
                    "--dark-bg-image": "url('/images/dark_bg_mandate.webp')",
                  } as React.CSSProperties
                }
              >
                <div className="hidden md:block dark-bg-layer" />
                <div className="hidden md:block dark-bg-overlay" />
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-container/20 rounded-full blur-2xl pointer-events-none z-10" />

                <div className="relative z-10">
                  <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-wider mb-2 block">
                    Our Mandate
                  </span>
                  <p className="font-headline-sm text-2xl text-surface-bright leading-snug">
                    Elevating daily operational performance to a strategic competitive edge.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                {/* Vision Card */}
                <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col justify-center flex-1 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40 group">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary">
                      <Eye className="w-5 h-5" />
                    </span>
                    <h3 className="font-headline-sm text-xl text-on-surface">Our Vision</h3>
                  </div>
                  <p className="font-body-lg text-base text-secondary">
                    To become a trusted global partner for smarter, more scalable business operations.
                  </p>
                </div>

                {/* Mission Card */}
                <div
                  className="dark-bg-section text-surface-bright p-8 rounded-xl shadow-xl flex flex-col justify-center flex-1 relative overflow-hidden border border-primary-container/30"
                  style={
                    {
                      "--dark-bg-image": "url('/images/dark_bg_mandate.webp')",
                    } as React.CSSProperties
                  }
                >
                  <div className="hidden md:block dark-bg-layer" />
                  <div className="hidden md:block dark-bg-overlay" />

                  <div className="flex items-center gap-3 mb-2 relative z-10">
                    <span className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                      <Flag className="w-5 h-5" />
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
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-4 transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 shadow-sm">
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

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-4 transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 shadow-sm">
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

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-4 transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 shadow-sm">
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

              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm flex flex-col items-center text-center group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-4 transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 shadow-sm">
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
