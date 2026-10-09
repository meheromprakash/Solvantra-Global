"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Target,
  Award,
  BarChart3,
  Users2,
  Clock4,
  CheckCircle2,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import ConsultationBanner from "@/components/ConsultationBanner";
import ConsultationModal from "@/components/ConsultationModal";
import PageHero from "@/components/sections/PageHero";

export default function WhySolvantraPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const keyDifferentiators = [
    {
      icon: Target,
      title: "99.4% SLA Precision",
      description: "Rigorous metric governance and real-time SLA dashboards ensure deadlines, response times, and quality scores are consistently hit.",
    },
    {
      icon: Users2,
      title: "Cognitive & Domain Vetted Talent",
      description: "Top 2% candidate selection rate utilizing rigorous cognitive aptitude, language proficiency, and domain-specific assessments.",
    },
    {
      icon: BarChart3,
      title: "Transparent Quality Auditing",
      description: "Dedicated Quality Assurance leads audit a random sample of all interactions weekly, publishing scorecard performance directly to you.",
    },
    {
      icon: Clock4,
      title: "Follow-The-Sun 24/7 Pods",
      description: "Distributed global operational centers provide true continuous coverage without operational drop-offs during shift changes.",
    },
    {
      icon: ShieldCheck,
      title: "Institutional Security Standards",
      description: "Military-grade data encryption, SOC-2 compliance, clean-desk environments, and strict NDA enforcement across all teams.",
    },
    {
      icon: Award,
      title: "Zero One-Size-Fits-All Models",
      description: "Every pod is custom-tailored to your SOPs, tech stack, communication tone, and business objectives.",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full bg-surface">
        {/* HERO */}
        <PageHero
          bgImage="/images/service_virtual_teams.jpg"
          bgAlt="Why Solvantra Operational Extension"
          eyebrow="THE SOLVANTRA ADVANTAGE"
          headingMain="More Than Outsourcing."
          headingGold="An Extension of Your Business."
          paragraph="We combine people, processes and technology to deliver reliable, scalable and future-ready operational support for global organizations."
          primaryButton={{
            label: "Book a Consultation",
            isModalTrigger: true,
          }}
          secondaryButton={{
            label: "View Services",
            href: "/services",
          }}
        />

        {/* 6 KEY DIFFERENTIATORS GRID */}
        <section className="w-full bg-surface py-20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyDifferentiators.map((diff, index) => {
                const IconComp = diff.icon;
                return (
                  <div
                    key={index}
                    className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:border-primary-container/40"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-6 shadow-sm transition-all duration-300 ease-in-out group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="font-headline-sm text-xl text-on-surface mb-3">
                        {diff.title}
                      </h3>
                      <p className="font-body-sm text-xs text-secondary leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                    <div className="pt-6 border-t border-outline-variant/20 mt-6 flex items-center gap-2 text-primary font-eyebrow text-[10px]">
                      <BadgeCheck className="w-4 h-4" /> Verified Operational Standard
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* METHODOLOGY & COMPARISON TABLE */}
        <section className="w-full bg-surface-container-low py-20 border-t border-outline-variant/20">
          <div className="max-w-[1240px] mx-auto px-5 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-eyebrow text-xs text-primary uppercase tracking-[0.14em] block mb-2">
                Operational Contrast
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface">
                Solvantra vs. Traditional Outsourcing
              </h2>
            </div>

            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-on-secondary-fixed text-surface-bright font-headline-sm text-sm border-b border-outline-variant/20">
                      <th className="p-4 md:p-6">Operational Dimension</th>
                      <th className="p-4 md:p-6 text-secondary-fixed-dim">Traditional Outsourcing BPO</th>
                      <th className="p-4 md:p-6 text-primary-fixed bg-inverse-surface/80 font-bold">Solvantra Global Model</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20 font-body-sm text-xs">
                    <tr>
                      <td className="p-4 md:p-6 font-semibold text-on-surface">Talent Selection</td>
                      <td className="p-4 md:p-6 text-secondary">Generic pooled resume sourcing</td>
                      <td className="p-4 md:p-6 text-on-surface font-medium bg-surface-container-low/50">Top 2% Cognitive &amp; Domain Tested Pods</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-semibold text-on-surface">Process Governance</td>
                      <td className="p-4 md:p-6 text-secondary">Loose checklist guidelines</td>
                      <td className="p-4 md:p-6 text-on-surface font-medium bg-surface-container-low/50">Institutional SOP Auditing &amp; Version Control</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-semibold text-on-surface">SLA Transparency</td>
                      <td className="p-4 md:p-6 text-secondary">Monthly static PDF reports</td>
                      <td className="p-4 md:p-6 text-on-surface font-medium bg-surface-container-low/50">Real-Time Operational SLA Telemetry</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-semibold text-on-surface">Tech &amp; AI Integration</td>
                      <td className="p-4 md:p-6 text-secondary">Manual repetitive data typing</td>
                      <td className="p-4 md:p-6 text-on-surface font-medium bg-surface-container-low/50">AI-Enabled Workflows &amp; CRM API Parity</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-semibold text-on-surface">Security &amp; Compliance</td>
                      <td className="p-4 md:p-6 text-secondary">Basic password protection</td>
                      <td className="p-4 md:p-6 text-on-surface font-medium bg-surface-container-low/50">SOC-2, HIPAA, ISO 27001 Clean-Desk Enclosure</td>
                    </tr>
                  </tbody>
                </table>
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
