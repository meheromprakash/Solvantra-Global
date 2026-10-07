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
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-surface-container border border-outline-variant/30">
                <div className="w-full h-full bg-gradient-to-br from-surface-container-high via-surface-container to-surface-dim flex flex-col justify-between p-6 relative">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded bg-on-secondary-fixed/80 text-surface-bright text-xs font-eyebrow">
                      Tier-1 Operations
                    </span>
                    <Activity className="w-5 h-5 text-primary" />
                  </div>

                  <div className="space-y-4 my-auto relative z-10">
                    <div className="p-4 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md shadow-md border border-outline-variant/20">
                      <div className="flex items-center gap-3 mb-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-headline-sm text-sm font-bold text-on-surface">
                          99.4% SLA Adherence
                        </span>
                      </div>
                      <p className="font-body-sm text-xs text-secondary">
                        Real-time QA auditing and active metric monitoring.
                      </p>
                    </div>

                    <div className="p-4 rounded-lg bg-on-secondary-fixed text-surface-bright shadow-lg border border-primary-container/30">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-eyebrow text-[10px] text-primary-fixed">
                          Continuous Continuity
                        </span>
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      </div>
                      <span className="font-headline-sm text-base text-surface-bright block">
                        Follow-The-Sun 24/7 Pods
                      </span>
                    </div>
                  </div>

                  {/* Floating Metric Badge */}
                  <div className="p-4 rounded-lg bg-surface/95 backdrop-blur-md shadow-lg border border-outline-variant/30 flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="block font-headline-sm text-xs font-bold text-on-surface">
                          Integrated Network
                        </span>
                        <span className="block font-body-sm text-[11px] text-secondary">
                          Global operations active
                        </span>
                      </div>
                    </div>
                    <span className="font-eyebrow text-[10px] tracking-wider text-primary font-bold">
                      24/7 ACTIVE
                    </span>
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
