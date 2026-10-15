"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Wrench,
  HeartPulse,
  Building2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function IndustriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Home Services");

  const categories = [
    {
      id: "Home Services",
      icon: Wrench,
      path: "/home-services",
      title: "Home Services",
      tagline: "24/7 call dispatch, technician scheduling, emergency job intake, estimate follow-ups, and review management.",
      challenges: [
        "Missed after-hours emergency calls resulting in lost high-ticket jobs to local competitors",
        "Overloaded dispatchers causing scheduling bottlenecks and inefficient technician drive routes",
        "Unsold estimates and customer quotes never followed up due to back-office bandwidth constraints",
      ],
      solutions: [
        "24/7 live emergency dispatch desk capturing urgent HVAC, plumbing, electrical, and roofing calls",
        "Real-time technician calendar optimization inside ServiceTitan, Housecall Pro, and Jobber",
        "Structured estimate re-engagement sequences that convert pending bids into booked revenue",
      ],
      metrics: "24/7 Dispatch Readiness",
    },
    {
      id: "Healthcare",
      icon: HeartPulse,
      path: "/healthcare",
      title: "Healthcare",
      tagline: "HIPAA-compliant patient coordination, medical billing, prior authorizations, and claims resolution.",
      challenges: [
        "High patient call volume leading to prolonged hold times and appointment scheduling backlogs",
        "Complex insurance prior authorizations causing treatment delays and lost practice revenue",
        "Elevated claim denial rates and aged accounts receivable tying up essential practice cash flow",
      ],
      solutions: [
        "Dedicated, HIPAA-trained patient coordinators handling inbound intake, triage, and scheduling",
        "Real-time insurance eligibility verification and pre-authorization processing before appointments",
        "End-to-end medical billing, electronic claim scrubbing, and aggressive denial appeal management",
      ],
      metrics: "99.4% Claims First-Pass Approval",
    },
    {
      id: "Real Estate",
      icon: Building2,
      path: "/real-estate",
      title: "Real Estate",
      tagline: "Rapid lead qualification, CRM management, tour scheduling, tenant communication, and administrative transaction support.",
      challenges: [
        "Buyer and seller portal leads going cold because agents are in showings and miss the 5-minute response window",
        "Incomplete and messy CRM pipelines with missing contact details, unassigned tasks, and dropped follow-ups",
        "Showing coordination chaos and endless scheduling back-and-forth between buyers, sellers, and listing agents",
      ],
      solutions: [
        "Instant 24/7 lead qualification via phone and SMS contacting new inquiries within minutes of submission",
        "Meticulous CRM database hygiene and enriched buyer/seller contact profiles updated in Follow Up Boss or kvCORE",
        "Seamless property showing and tour schedule coordination directly synced with your agents' live calendars",
      ],
      metrics: "< 5m Lead Response Window",
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/industry_real_estate.jpg"
          bgAlt="Solvantra Who We Help"
          eyebrow="WHO WE HELP"
          headingMain="Tailored Operational Pods For"
          headingGold="Specialized Sectors."
          paragraph="Every sector demands specialized domain knowledge, compliance standards, and workflow protocols. Solvantra builds dedicated operational pods configured specifically for Home Services, Healthcare, and Real Estate."
          primaryButton={{
            label: "Book a Consultation",
            isModalTrigger: true,
          }}
          secondaryButton={{
            label: "Explore Capabilities",
            href: "/services",
          }}
        />

        {/* INTERACTIVE WHO WE HELP SELECTOR */}
        <section className="w-full bg-surface py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            {/* Tabs */}
            <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-outline-variant/20">
              {categories.map((cat) => {
                const IconComp = cat.icon;
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-lg text-xs font-label-md transition-all whitespace-nowrap border shrink-0 cursor-pointer ${
                      isActive
                        ? "bg-primary-container text-on-primary border-primary shadow-md"
                        : "bg-surface-container-low text-secondary border-outline-variant/30 hover:bg-surface-container hover:text-on-surface"
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Breakdown */}
            <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant/30 shadow-xl">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-8 border-b border-outline-variant/20">
                <div>
                  <span className="font-eyebrow text-xs text-primary uppercase tracking-wider block mb-1">
                    Who We Help Pod
                  </span>
                  <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                    {currentCategory.title}
                  </h2>
                  <p className="font-body-lg text-base text-secondary mt-2 max-w-2xl">
                    {currentCategory.tagline}
                  </p>
                </div>
                <div className="px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant/30 text-center shrink-0">
                  <span className="font-eyebrow text-[10px] text-secondary uppercase block mb-0.5">
                    Benchmark SLA
                  </span>
                  <span className="font-headline-sm text-lg text-primary font-bold">
                    {currentCategory.metrics}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Challenges */}
                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <h3 className="font-headline-sm text-lg text-on-surface mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    Key Domain Operational Challenges
                  </h3>
                  <div className="space-y-3">
                    {currentCategory.challenges.map((c, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-secondary">
                        <span className="text-primary font-bold">•</span>
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
                    {currentCategory.solutions.map((s, i) => (
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
                <Link
                  href={currentCategory.path}
                  className="px-6 py-3 bg-primary-container text-on-primary font-label-md text-xs rounded hover:bg-primary transition-colors inline-flex items-center gap-2"
                >
                  <span>View Dedicated {currentCategory.title} Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
        defaultService={`${currentCategory.title} Operational Support`}
      />
    </>
  );
}
