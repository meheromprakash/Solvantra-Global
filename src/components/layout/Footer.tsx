"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Verified, ArrowRight } from "lucide-react";
import { NAVIGATION_ITEMS, CORE_SERVICES } from "@/lib/constants";
import ConsultationModal from "../ConsultationModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer
        className="dark-bg-section w-full border-t border-outline-variant/20 pt-24 pb-10 text-surface-container-high"
        style={
          {
            "--dark-bg-image": "url('/images/dark_bg_footer.webp')",
          } as React.CSSProperties
        }
      >
        {/* Background image layer (Desktop/Tablet >= 768px only) */}
        <div className="hidden md:block dark-bg-layer" />

        {/* Stronger ~90% dark overlay layer */}
        <div className="hidden md:block dark-bg-overlay-footer" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-5 md:px-12">
          {/* Main 12-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-20">
            {/* Col 1-4: Brand Statement */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Link href="/" className="flex items-center gap-3 mb-4 group">
                <img
                  src="/images/logo-mark.png"
                  alt="Solvantra Global Logo"
                  className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="flex flex-col">
                  <span className="font-headline-sm text-lg font-bold tracking-wider text-surface-bright uppercase leading-none">
                    Solvantra
                  </span>
                  <span className="font-eyebrow text-[10px] text-primary-fixed tracking-[0.22em] uppercase leading-none mt-1 font-semibold">
                    Global
                  </span>
                </div>
              </Link>
              <p className="font-body-md text-sm text-secondary-fixed-dim max-w-sm mb-6 leading-relaxed">
                People. Processes. Technology. Built Around Your Business.
              </p>
              <div className="flex items-center gap-2 text-secondary-fixed-dim bg-[#2b2118]/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-primary-container/20">
                <Verified className="w-4 h-4 text-primary-fixed" />
                <span className="font-body-sm text-xs text-surface-bright">
                  Tier-One Global Business Operations
                </span>
              </div>
            </div>

            {/* Col 5-6: Quick Links */}
            <div className="lg:col-span-2">
              <h4 className="font-eyebrow text-xs tracking-[0.14em] uppercase text-primary-fixed mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                {NAVIGATION_ITEMS.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="font-body-sm text-xs text-secondary-fixed-dim hover:text-surface-bright transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Col 7-9: Our Services */}
            <div className="lg:col-span-3">
              <h4 className="font-eyebrow text-xs tracking-[0.14em] uppercase text-primary-fixed mb-4">
                Our Services
              </h4>
              <div className="flex flex-col space-y-2">
                {CORE_SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href="/services"
                    className="font-body-sm text-xs text-secondary-fixed-dim hover:text-surface-bright transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary-container group-hover:scale-150 transition-transform" />
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 10-12: High-Contrast Consultation Callout Box */}
            <div className="lg:col-span-3 flex flex-col justify-between bg-[#2b2118]/80 backdrop-blur-md p-6 rounded-xl border border-primary-container/30 shadow-xl">
              <div>
                <p className="font-headline-sm text-base text-surface-bright mb-2 leading-snug">
                  Ready to streamline your operations?
                </p>
                <p className="font-body-sm text-xs text-secondary-fixed-dim mb-6 leading-relaxed">
                  Partner with dedicated talent, precision protocols, and enterprise technology.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-between px-4 py-2.5 bg-primary-container text-on-primary font-label-md text-xs rounded-lg hover:bg-primary transition-colors group w-full cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Bottom Copyright & Policy Links */}
          <div className="pt-6 border-t border-outline-variant/15 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body-sm text-xs text-secondary-fixed-dim text-center md:text-left">
              © {new Date().getFullYear()} Solvantra Global. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs">
              <Link
                href="/privacy-policy"
                className="font-body-sm text-secondary-fixed-dim hover:text-surface-bright transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-outline-variant">|</span>
              <Link
                href="/terms-of-service"
                className="font-body-sm text-secondary-fixed-dim hover:text-surface-bright transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
