"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  Clock,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  UserCheck,
  FileText,
  Star,
  Cpu,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function HomeServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const challenges = [
    "Missed after-hours emergency calls resulting in lost high-ticket jobs to local competitors",
    "Overloaded dispatchers causing scheduling bottlenecks and inefficient technician drive routes",
    "Unsold estimates and customer quotes never followed up due to back-office bandwidth constraints",
    "Negative reviews stemming from delayed communication and disorganized appointment reminders",
  ];

  const solutions = [
    "24/7 live emergency dispatch desk capturing urgent HVAC, plumbing, electrical, and roofing calls",
    "Real-time technician calendar optimization inside your existing field management software",
    "Structured estimate re-engagement sequences that convert pending bids into booked revenue",
    "Post-service follow-up calls and review generation desk driving 5-star reputation growth",
  ];

  const capabilities = [
    {
      icon: PhoneCall,
      title: "24/7 Emergency Dispatch & Call Triage",
      description:
        "Every emergency call is answered in under 30 seconds by vetted dispatchers trained in HVAC, plumbing, electrical, and roofing triage.",
      sla: "< 30s Speed of Answer",
    },
    {
      icon: Calendar,
      title: "Smart Dispatch & Route Optimization",
      description:
        "Intelligent appointment booking in ServiceTitan, Housecall Pro, or Jobber, maximizing technician billable hours and cutting travel time.",
      sla: "Zero Overlap Guarantee",
    },
    {
      icon: FileText,
      title: "Estimate & Quote Re-engagement",
      description:
        "Systematic outbound follow-up calls and SMS outreach to pending quotes, boosting close rates on high-value system replacements.",
      sla: "100% Quote Follow-up SLA",
    },
    {
      icon: Star,
      title: "Reputation & Review Growth Desk",
      description:
        "Automated post-job satisfaction verification, prompt review request routing, and resolution of dissatisfied customer feedback.",
      sla: "98.5% Positive Feedback Score",
    },
  ];

  const techPlatforms = [
    "ServiceTitan",
    "Housecall Pro",
    "Jobber",
    "FieldEdge",
    "Podium",
    "Workiz",
    "Google Local Services",
    "Zapier & Custom APIs",
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/industry_home_services.jpg"
          bgAlt="Solvantra Home Services Operational Pod"
          eyebrow="WHO WE HELP • HOME SERVICES"
          headingMain="24/7 Dispatch & Operations For"
          headingGold="Home Service Businesses."
          paragraph="Never miss an emergency job again. Solvantra provides 24/7 live call dispatch, technician scheduling, estimate follow-ups, and back-office coordination tailored for HVAC, plumbing, electrical, and specialty contractors."
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
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">24/7/365</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Dispatch Readiness</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">&lt;30s</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Emergency Response</span>
            </div>
            <div className="h-8 w-px bg-outline-variant/40" />
            <div className="flex flex-col">
              <span className="font-stat-numeral text-xl sm:text-2xl text-on-surface font-semibold">99.2%</span>
              <span className="font-body-sm text-[11px] sm:text-xs text-secondary">Booking Accuracy</span>
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
                Built For High-Velocity Field Service Demands
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Challenges Card */}
              <div className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-xl text-on-surface mb-6 flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                    <span>Home Service Operational Bottlenecks</span>
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
                    <span>The Solvantra Home Services Pod</span>
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
                Turnkey Operations For Trade Businesses
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
                      <ShieldCheck className="w-4 h-4" /> Dedicated Field Protocols &amp; Call Recording Included
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
                    Direct Integration With Your Field Service Software
                  </h2>
                  <p className="font-body-md text-sm text-secondary-fixed-dim leading-relaxed">
                    Our team works directly within your field management tools. No software replacements or complex migrations required — your team sees appointments, customer notes, and dispatch changes in real-time.
                  </p>
                </div>

                <div className="lg:col-span-6 bg-inverse-surface/60 p-6 rounded-xl border border-primary-container/20">
                  <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-4">
                    <span className="font-eyebrow text-xs text-primary-fixed">Supported Field Management Suites</span>
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
        defaultService="Home Services Operational Support"
      />
    </>
  );
}
