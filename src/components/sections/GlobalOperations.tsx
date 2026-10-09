"use client";

import React from "react";
import { Globe, Layers, Award } from "lucide-react";
import { GLOBAL_STATS } from "@/lib/constants";

export default function GlobalOperations() {
  const icons = [Globe, Award, Layers];

  return (
    <section
      className="dark-bg-section relative w-full text-surface-container-high py-24 overflow-hidden border-t border-outline-variant/20"
      style={
        {
          "--dark-bg-image": "url('/images/dark_bg_operations.webp')",
        } as React.CSSProperties
      }
    >
      {/* Background image layer (Desktop/Tablet >= 768px only) */}
      <div className="hidden md:block dark-bg-layer" />

      {/* Dark gradient overlay */}
      <div className="hidden md:block dark-bg-overlay" />

      {/* Vector Background Graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center z-10">
        <svg className="w-full h-full max-w-5xl" fill="none" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="200" r="180" stroke="#FFDDB1" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="400" cy="200" r="120" stroke="#FFDDB1" strokeWidth="1" />
          <line x1="200" y1="200" x2="600" y2="200" stroke="#FFDDB1" strokeWidth="1" />
          <line x1="400" y1="20" x2="400" y2="380" stroke="#FFDDB1" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative max-w-[1240px] mx-auto px-5 md:px-12 z-20">
        <div className="mb-16 max-w-2xl">
          <span className="font-eyebrow text-xs text-primary-fixed tracking-[0.14em] uppercase block mb-3 font-semibold">
            A Global Operations Partner
          </span>
          <h2 className="font-headline-lg text-4xl lg:text-5xl text-surface-bright leading-tight">
            Built for Today.<br />
            <span className="italic font-normal text-primary-fixed">Ready for What’s Next.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          {GLOBAL_STATS.map((stat, idx) => {
            const IconComp = icons[idx] || Globe;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#2b2118]/70 border border-primary-container/30 backdrop-blur-md hover:border-primary-container/60 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-stat-numeral text-5xl text-primary-fixed">{stat.value}</span>
                  <IconComp className="w-6 h-6 text-primary-fixed/80" />
                </div>
                <div className="font-headline-sm text-lg text-surface-bright font-bold mb-1">
                  {stat.label}
                </div>
                <p className="font-body-sm text-xs text-secondary-fixed-dim leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

