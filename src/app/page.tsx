import React from "react";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import GlobalOperations from "@/components/sections/GlobalOperations";
import CTASection from "@/components/sections/CTASection";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Strip */}
      <TrustStrip />

      {/* 3. Introduction / Who We Help */}
      <section className="w-full bg-surface py-24">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[16/11] rounded-xl overflow-hidden shadow-xl bg-surface-container-high border border-outline-variant/30 p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-eyebrow text-xs text-primary">Operational Intelligence</span>
                  <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-semibold">
                    Live Telemetry
                  </span>
                </div>

                <div className="space-y-3 my-auto">
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/20 flex items-center justify-between">
                    <div>
                      <span className="block font-eyebrow text-[10px] text-secondary">Inbound Communication</span>
                      <span className="font-headline-sm text-sm text-on-surface">&lt; 15s Average Response Time</span>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary-fixed/40 px-2 py-1 rounded">Active</span>
                  </div>

                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm border border-outline-variant/20 flex items-center justify-between">
                    <div>
                      <span className="block font-eyebrow text-[10px] text-secondary">Claims Processing</span>
                      <span className="font-headline-sm text-sm text-on-surface">99.8% First-Pass Approval</span>
                    </div>
                    <span className="text-xs font-bold text-primary bg-primary-fixed/40 px-2 py-1 rounded">Verified</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-surface-container-lowest/90 border border-outline-variant/30 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <p className="font-body-sm text-xs text-on-surface font-medium leading-snug">
                    99.4% Workflow Precision SLA Delivered Across Global Accounts
                  </p>
                </div>
              </div>
            </div>

            {/* Copy Column */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-8 mt-8 lg:mt-0">
              <span className="font-eyebrow text-xs text-primary tracking-[0.14em] uppercase mb-2">
                Who We Help
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl text-on-surface mb-4">
                Helping Businesses Run Better, Every Day.
              </h2>
              <p className="font-body-lg text-base text-secondary mb-4 leading-relaxed">
                Every business has essential operational work that needs to be handled accurately, consistently, and on time. Solvantra combines skilled professionals, streamlined processes, and AI-powered technology to manage critical day-to-day operations, allowing businesses to focus on growth.
              </p>
              <p className="font-body-md text-sm text-secondary mb-8 leading-relaxed">
                Whether scaling high-touch client support, untangling complex billing pipelines, or standardizing cross-border compliance, we install reliable infrastructure tailored to your exact protocols.
              </p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-label-md text-sm text-primary hover:text-tertiary-container transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Services Grid */}
      <ServicesGrid />

      {/* 5. Industries Overview */}
      <IndustriesGrid />

      {/* 6. Global Operations Dark Panel */}
      <GlobalOperations />

      {/* 7. Consultation Banner */}
      <CTASection />
    </div>
  );
}
