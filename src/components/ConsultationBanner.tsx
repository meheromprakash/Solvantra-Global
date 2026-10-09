"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

interface ConsultationBannerProps {
  title?: string;
  subtitle?: string;
  image?: string;
}

export default function ConsultationBanner({
  title = "Build your dedicated operational pod.",
  subtitle = "Connect with our solutions architects for an exploratory workflow and staffing evaluation.",
  image = "/images/cta_operations_banner_bg.jpg",
}: ConsultationBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-surface-container-low py-16">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <div className="relative w-full rounded-xl overflow-hidden shadow-xl border border-primary-container/30 bg-[#241a12] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 group">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <img
                src={image}
                alt="Solvantra Global Operational Pod"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              {/* Dark Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#241a12]/95 via-[#241a12]/80 to-[#241a12]/45 md:from-[#241a12]/90 md:via-[#241a12]/65 md:to-[#241a12]/35" />
            </div>

            {/* Ambient Gold Halo */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/20 blur-3xl pointer-events-none z-1" />

            <div className="flex flex-col max-w-xl relative z-10 text-center md:text-left">
              <span className="font-eyebrow text-xs text-primary-fixed uppercase tracking-[0.14em] mb-2 font-semibold">
                Next Steps
              </span>
              <h3 className="font-headline-md text-2xl md:text-3xl text-surface-bright mb-2 font-normal">
                {title}
              </h3>
              <p className="font-body-md text-sm text-secondary-fixed-dim leading-relaxed">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 relative z-10 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-container text-on-primary font-label-md text-sm rounded-lg shadow-lg hover:bg-primary transition-all duration-200 cursor-pointer hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span>Schedule Consultation</span>
                <Calendar className="w-4 h-4" />
              </button>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-surface-bright hover:text-primary-fixed font-label-md text-sm transition-colors group/link w-full sm:w-auto"
              >
                <span>How it works</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
