import React from "react";
import Link from "next/link";
import {
  Wrench,
  HeartPulse,
  Building2,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { WHO_WE_HELP_LIST } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  "home-services": Wrench,
  healthcare: HeartPulse,
  "real-estate": Building2,
};

const SECTOR_DETAILS: Record<
  string,
  {
    subtitle: string;
    capabilities: string[];
    integration: string;
  }
> = {
  "home-services": {
    subtitle: "HVAC • Plumbing • Electrical • Field Trades",
    capabilities: [
      "24/7 Live Emergency Call Intake & Dispatch",
      "Technician Scheduling & Route Optimization",
      "Unsold Estimate Re-Engagement & Review Desk",
    ],
    integration: "ServiceTitan, Housecall Pro & Jobber Ready",
  },
  healthcare: {
    subtitle: "Medical Clinics • Specialty Groups • Practices",
    capabilities: [
      "HIPAA-Compliant Patient Intake & Scheduling",
      "Insurance Eligibility & Prior Authorizations",
      "Medical Billing, Clean Claims & Denial Recovery",
    ],
    integration: "Epic, Cerner & AthenaHealth BAA Enclosure",
  },
  "real-estate": {
    subtitle: "Brokerages • High-Volume Teams • PropTech",
    capabilities: [
      "Speed-to-Lead Inbound Triage (< 5 Minutes)",
      "Showing Coordination & Agent Calendar Sync",
      "CRM Pipeline Hygiene & Transaction Audits",
    ],
    integration: "Follow Up Boss, kvCORE & Dotloop Ready",
  },
};

export default function IndustriesGrid() {
  return (
    <section className="w-full bg-surface py-24">
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <SectionHeading
          eyebrow="Domain Specialization"
          title="Tailored Solutions For High-Impact Sectors"
          subtitle="Specialized domain knowledge, rigorous compliance standards, and dedicated operational pods configured for your industry."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WHO_WE_HELP_LIST.map((item) => {
            const IconComp = iconMap[item.id] || HeartPulse;
            const details = SECTOR_DETAILS[item.id] || {
              subtitle: "Dedicated Operational Pod",
              capabilities: [
                "Full-time dedicated operations specialists",
                "Custom domain onboarding & security setup",
                "Transparent daily performance telemetry",
              ],
              integration: "Enterprise Tech Stack & API Parity",
            };

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between p-7 md:p-8 relative group overflow-hidden"
              >
                {/* Subtle Top Accent Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent group-hover:via-primary transition-all duration-300" />

                <div>
                  {/* Card Header: Icon + SLA Metric Pill */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:scale-105 transition-all duration-300 shadow-sm border border-outline-variant/20 shrink-0">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-eyebrow text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full bg-surface-container-low text-primary font-bold border border-outline-variant/30 shrink-0">
                      {item.metrics}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-3">
                    <h3 className="font-headline-sm text-2xl text-on-surface mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-eyebrow text-[10px] text-primary tracking-wider uppercase font-semibold">
                      {details.subtitle}
                    </p>
                  </div>

                  {/* Executive Overview */}
                  <p className="font-body-md text-xs sm:text-[13px] text-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Structured Key Capabilities */}
                  <div className="space-y-2.5 pt-4 pb-5 border-y border-outline-variant/20 mb-6">
                    <span className="font-eyebrow text-[10px] text-on-surface uppercase tracking-wider block font-bold">
                      Key Deliverables &amp; Workflows
                    </span>
                    {details.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-on-surface-variant">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Integration Parity & CTA */}
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-secondary font-body-sm mb-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="truncate">{details.integration}</span>
                  </div>

                  <Link
                    href={item.path}
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-lg bg-surface-container-low group-hover:bg-primary group-hover:text-on-primary text-primary font-label-md text-xs transition-all duration-200 border border-outline-variant/20 group-hover:border-transparent cursor-pointer"
                  >
                    <span>Explore {item.title} Pod</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
