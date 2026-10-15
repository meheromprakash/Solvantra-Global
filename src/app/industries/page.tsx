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
  Calendar,
  Clock,
  Check,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function IndustriesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Real Estate");

  const categories = [
    {
      id: "Real Estate",
      icon: Building2,
      path: "/real-estate",
      title: "Real Estate",
      tagline:
        "24/7 enquiry handling, lettings support, viewing and valuation bookings, tenant and landlord communication, maintenance coordination, and compliance administration.",
      promise: "Always On. Always Compliant.",
      paletteNote: "Deep Forest & Accent Gold Palette",
      challenges: [
        "Enquiries and urgent maintenance calls arrive out of hours and go unanswered",
        "Teams stretched across sales, lettings, maintenance and endless admin",
        "Compliance dates live in spreadsheets, inboxes, or people's heads",
        "Portfolio growing faster than internal administrative headcount",
      ],
      solutions: [
        "24/7 Live front desk covering calls, portal leads, forms, and chats in your agency's name",
        "Viewing and valuation appointments placed directly into negotiator diaries",
        "Maintenance triage handling emergency, urgent, and routine contractor bookings",
        "Compliance admin tracking certificate expiries, deposit deadlines, and lawful scripts",
      ],
    },
    {
      id: "Home Services",
      icon: Wrench,
      path: "/home-services",
      title: "Home Services",
      tagline:
        "24/7 enquiry handling, appointment scheduling, technician coordination, emergency dispatch support, follow-ups, and customer communication.",
      promise: "Coverage. Coordination. Follow-through.",
      paletteNote: "Charcoal Slate & Warm Terracotta Palette",
      challenges: [
        "Missed emergency calls redirecting urgent homeowner demand directly to competitors",
        "Office team or dispatchers overwhelmed answering phones instead of managing field work",
        "Unbooked estimates, quotes, and cold leads never systematically followed up",
        "Need to increase booked jobs without hiring and training a full internal call center",
      ],
      solutions: [
        "24/7 Inbound front desk answering calls and web forms live in your company name",
        "Seamless appointment scheduling directly in your calendar or field management software",
        "Technician coordination with access notes, issue summaries, and customer history",
        "Proactive follow-up on unbooked quotes, satisfaction check-ins, and recurring tune-ups",
      ],
    },
    {
      id: "Healthcare",
      icon: HeartPulse,
      path: "/healthcare",
      title: "Healthcare",
      tagline:
        "Dental and medical revenue cycle management, claims processing and follow-up, and patient eligibility verification.",
      promise: "Revenue Operations & RCM Management",
      paletteNote: "Midnight Navy & Vibrant Medical Blue Palette",
      challenges: [
        "Billing bottlenecks, claim rejections, and aging accounts receivable reducing cash flow",
        "Complex payer rules, denial backlogs, and time-sensitive appeal deadlines",
        "Unverified patient eligibility leading to front-end clearinghouse rejections",
        "Manual claim tracking and payment reconciliation draining internal practice staff",
      ],
      solutions: [
        "End-to-end dental and medical RCM from eligibility verification through AR reconciliation",
        "Clean electronic claim submission and clearinghouse rules scrubbing",
        "Structured denial management and rapid appeal escalation",
        "Payment posting, electronic remittance reconciliation, and regular telemetry",
      ],
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
          eyebrow="WHO WE HELP • SPECIALIZED SECTORS"
          headingMain="Operational Excellence for"
          headingGold="Specialized Industries."
          paragraph="Solvantra provides dedicated, domain-grounded operational support. Explore our specialized industry services for Real Estate, Home Services, and Healthcare."
          primaryButton={{
            label: "Book a Consultation",
            isModalTrigger: true,
          }}
          secondaryButton={{
            label: "Explore Core Services",
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
                    Industry Specialization
                  </span>
                  <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                    {currentCategory.title}
                  </h2>
                  <p className="font-body-lg text-base text-secondary mt-2 max-w-2xl leading-relaxed">
                    {currentCategory.tagline}
                  </p>
                </div>
                <div className="px-5 py-3.5 rounded-lg bg-surface-container-low border border-outline-variant/30 text-center shrink-0">
                  <span className="font-eyebrow text-[10px] text-secondary uppercase block mb-0.5">
                    Operating Principle
                  </span>
                  <span className="font-headline-sm text-base text-primary font-bold">
                    {currentCategory.promise}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Challenges */}
                <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/20">
                  <h3 className="font-headline-sm text-lg text-on-surface mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    Key Sector Operational Challenges
                  </h3>
                  <div className="space-y-3">
                    {currentCategory.challenges.map((c, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed">
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
                    Solvantra Turnkey Operational Solution
                  </h3>
                  <div className="space-y-3">
                    {currentCategory.solutions.map((s, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-on-surface font-medium leading-relaxed">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-eyebrow text-primary">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Domain Protocols &amp; Dedicated Color Identity Configured</span>
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
        <ConsultationBanner
          title="Build your dedicated industry operational pod."
          subtitle="Connect with our team to discuss customized workflows, approved scripts, and software integrations for your business."
        />
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={`${currentCategory.title} Operational Support`}
      />
    </>
  );
}
