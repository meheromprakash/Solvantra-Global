"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

interface ConsultationBannerProps {
  title?: string;
  subtitle?: string;
}

export default function ConsultationBanner({
  title = "Build your dedicated operational pod.",
  subtitle = "Connect with our solutions architects for an exploratory workflow and staffing evaluation.",
}: ConsultationBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-surface-container-low py-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <div className="bg-on-secondary-fixed rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl border border-primary-container/20">
            {/* Ambient Gold Halo */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none" />

            <div className="flex flex-col max-w-xl relative z-10 text-center md:text-left">
              <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-[0.14em] mb-2">
                Next Steps
              </span>
              <h3 className="font-headline-md text-2xl md:text-3xl text-surface-bright mb-2">
                {title}
              </h3>
              <p className="font-body-md text-sm text-secondary-fixed-dim leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10 shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-container text-on-primary font-label-md text-sm rounded shadow hover:bg-primary transition-colors"
              >
                <span>Schedule Consultation</span>
                <Calendar className="w-4 h-4" />
              </button>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-surface-bright hover:text-primary-fixed font-label-md text-sm transition-colors group"
              >
                <span>How it works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
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
