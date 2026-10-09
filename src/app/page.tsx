import React from "react";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import GlobalOperations from "@/components/sections/GlobalOperations";
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
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-xl bg-surface-container border border-outline-variant/30 group">
                <img
                  src="/images/who_we_help_team.jpg"
                  alt="Helping Businesses Run Better"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-ink/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                  <div className="p-3.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md border border-outline-variant/30 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <p className="font-body-sm text-xs text-on-surface font-medium leading-snug">
                      99.4% Workflow Precision SLA Delivered Across Global Accounts
                    </p>
                  </div>
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

      {/* 6. Global Operations Dark Panel with Schedule Consultation Button */}
      <GlobalOperations />
    </div>
  );
}
