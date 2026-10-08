"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Activity, CheckCircle2, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import ConsultationModal from "../ConsultationModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-surface overflow-hidden py-16 lg:py-24">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Hero Text Column */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container mb-6 border border-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="font-eyebrow text-xs text-primary tracking-[0.14em] uppercase">
                  People. Processes. Technology.
                </span>
              </div>

              <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl text-on-surface mb-6 leading-tight max-w-2xl">
                Your Business Operations.{" "}
                <span className="block italic font-normal text-primary-container">
                  Our People, Processes &amp; Technology.
                </span>
              </h1>

              <p className="font-body-lg text-base sm:text-lg text-secondary max-w-xl mb-8 leading-relaxed">
                Solvantra provides reliable, scalable, and technology-driven operational support for businesses across industries — from customer communication and administrative workflows to claims, scheduling, lead management, and dedicated staffing.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  variant="primary"
                  size="md"
                >
                  Book a Consultation
                </Button>
                <Button
                  href="/services"
                  variant="secondary"
                  size="md"
                >
                  Get a Custom Solution
                </Button>
              </div>
            </div>

            {/* Hero Visual Imagery */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/30 group">
                <img
                  src="/images/hero_operations_team.jpg"
                  alt="Solvantra Global Operations Team"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-ink/90 via-secondary-ink/30 to-transparent p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1.5 rounded-md bg-on-secondary-fixed/90 backdrop-blur-md text-surface-bright text-xs font-eyebrow tracking-wider border border-primary-container/40">
                      Tier-1 Global Operations
                    </span>
                    <Activity className="w-5 h-5 text-primary-fixed" />
                  </div>

                  <div className="space-y-3 z-10">
                    <div className="p-3.5 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-lg border border-outline-variant/30 flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <div>
                        <span className="font-headline-sm text-xs font-bold text-on-surface block">
                          99.4% SLA Workflow Precision
                        </span>
                        <p className="font-body-sm text-[11px] text-secondary">
                          Real-time QA auditing &amp; active metric monitoring.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-on-secondary-fixed/95 backdrop-blur-md text-surface-bright shadow-lg border border-primary-container/40 flex items-center justify-between">
                      <div>
                        <span className="font-eyebrow text-[10px] text-primary-fixed block uppercase tracking-wider">
                          Continuous Continuity
                        </span>
                        <span className="font-headline-sm text-sm text-surface-bright font-bold">
                          Follow-The-Sun 24/7 Pods
                        </span>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
