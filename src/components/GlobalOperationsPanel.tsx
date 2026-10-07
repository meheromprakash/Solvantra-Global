"use client";

import React, { useState } from "react";
import { ArrowRight, Globe, Layers, Award } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function GlobalOperationsPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-on-secondary-fixed text-surface-container-high py-24 overflow-hidden border-t border-outline-variant/20">
        {/* Vector Connectivity Background Graphic */}
        <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full max-w-5xl" fill="none" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="200" r="180" stroke="#FFDDB1" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="400" cy="200" r="120" stroke="#FFDDB1" strokeWidth="1" />
            <line x1="200" y1="200" x2="600" y2="200" stroke="#FFDDB1" strokeWidth="1" />
            <line x1="400" y1="20" x2="400" y2="380" stroke="#FFDDB1" strokeWidth="1" />
          </svg>
        </div>

        <div className="relative max-w-[1240px] mx-auto px-5 md:px-12 z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <span className="font-eyebrow text-xs text-primary-fixed tracking-[0.14em] uppercase block mb-3">
                A Global Operations Partner
              </span>
              <h2 className="font-headline-lg text-4xl lg:text-5xl text-surface-bright leading-tight">
                Built for Today.<br />
                <span className="italic font-normal text-primary-fixed">Ready for What’s Next.</span>
              </h2>
            </div>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-container text-on-primary font-label-md text-sm rounded shadow-lg hover:bg-primary transition-colors group"
              >
                <span>Get a Custom Solution</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            {/* Stat 1 */}
            <div className="p-6 rounded-xl bg-inverse-surface/60 border border-primary-container/20 backdrop-blur-sm hover:border-primary-container/50 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="font-stat-numeral text-5xl text-primary-fixed">200+</span>
                <Globe className="w-6 h-6 text-primary-fixed/60" />
              </div>
              <div className="font-headline-sm text-lg text-surface-bright font-bold mb-1">
                Global Clients
              </div>
              <p className="font-body-sm text-xs text-secondary-fixed-dim leading-relaxed">
                Serving institutional organizations, growth ventures, and specialized practices worldwide with round-the-clock operational pods.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-6 rounded-xl bg-inverse-surface/60 border border-primary-container/20 backdrop-blur-sm hover:border-primary-container/50 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="font-stat-numeral text-5xl text-primary-fixed">98%</span>
                <Award className="w-6 h-6 text-primary-fixed/60" />
              </div>
              <div className="font-headline-sm text-lg text-surface-bright font-bold mb-1">
                Client Satisfaction SLA
              </div>
              <p className="font-body-sm text-xs text-secondary-fixed-dim leading-relaxed">
                Rigorous QA monitoring, continuous feedback loops, audited quality scorecards, and high team retention rates.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-6 rounded-xl bg-inverse-surface/60 border border-primary-container/20 backdrop-blur-sm hover:border-primary-container/50 transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="font-stat-numeral text-5xl text-primary-fixed">5+</span>
                <Layers className="w-6 h-6 text-primary-fixed/60" />
              </div>
              <div className="font-headline-sm text-lg text-surface-bright font-bold mb-1">
                Core Industries
              </div>
              <p className="font-body-sm text-xs text-secondary-fixed-dim leading-relaxed">
                Tailored operational architecture across healthcare, logistics, financial services, tech, and e-commerce.
              </p>
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
