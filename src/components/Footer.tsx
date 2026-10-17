"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONTACT } from "@/lib/site";
import { getSectorFromPath } from "@/components/layout/SectorLayoutWrapper";

export default function Footer() {
  const pathname = usePathname();
  const sector = getSectorFromPath(pathname);
  const isSector = Boolean(sector);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Why Solvantra", path: "/why-solvantra" },
  ];

  const services = [
    { label: "Healthcare", path: "/healthcare" },
    { label: "Real Estate", path: "/real-estate" },
    { label: "Home Services", path: "/home-services" },
  ];

  const operations = [
    { label: "24/7 Call & Chat Support", path: "/services#operations" },
    { label: "Intelligent Scheduling & Dispatch", path: "/services#operations" },
    { label: "Claims & Revenue Operations", path: "/services#operations" },
    { label: "Administrative Support", path: "/services#operations" },
    { label: "Compliance & Process Admin", path: "/services#operations" },
    { label: "Lead Management & Follow-Up", path: "/services#operations" },
    { label: "Dedicated Operational Pods", path: "/services#operations" },
  ];

  return (
    <footer
      className={`site-footer w-full pt-16 md:pt-24 pb-0 overflow-hidden relative ${
        isSector
          ? "bg-[var(--primary)] border-t border-[color-mix(in_srgb,var(--accent)_35%,transparent)]"
          : "bg-[var(--ink)] border-t border-[rgba(185,138,62,0.25)]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Main 5-Column Grid using 4/2/2/4/3 proportions at 1280px (above 1024px) */}
        <div className="footer-main-grid">
          {/* Col 1: Logo & Tagline (4fr on desktop, full span on tablet) */}
          <div className="footer-col-brand flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <img
                src="/images/logo-mark.png"
                alt="Solvantra Global Logo"
                className="h-8 w-auto object-contain shrink-0"
              />
              <span
                className={`text-[17px] font-bold tracking-wider uppercase ${
                  isSector ? "text-[var(--on-dark)]" : "text-[var(--bg)]"
                }`}
              >
                SOLVANTRA GLOBAL
              </span>
            </Link>
            <p
              className={`text-[14px] leading-[1.65] max-w-sm font-sans ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_70%,transparent)]"
                  : "text-[var(--bg-70)]"
              }`}
            >
              People. Processes. Technology. Built Around Your Business.
            </p>
          </div>

          {/* Col 2: Quick Links (2fr) */}
          <div className="footer-col-links">
            <h4
              className={`font-mono text-[14px] uppercase tracking-[0.08em] mb-4 font-semibold ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_55%,transparent)]"
                  : "text-[var(--bg-55)]"
              }`}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5 font-sans">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-[14px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_75%,transparent)] hover:text-[var(--on-dark)]"
                      : "text-[var(--bg-75)] hover:text-[var(--bg)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Services (2fr) */}
          <div className="footer-col-services">
            <h4
              className={`font-mono text-[14px] uppercase tracking-[0.08em] mb-4 font-semibold ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_55%,transparent)]"
                  : "text-[var(--bg-55)]"
              }`}
            >
              Services
            </h4>
            <div className="flex flex-col space-y-2.5 font-sans">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.path}
                  className={`text-[14px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_75%,transparent)] hover:text-[var(--on-dark)]"
                      : "text-[var(--bg-75)] hover:text-[var(--bg)]"
                  }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Operations (4fr on 1280px, 2 columns at 1024px and below, 1 column at 375px) */}
          <div className="footer-col-operations">
            <h4
              className={`font-mono text-[14px] uppercase tracking-[0.08em] mb-4 font-semibold ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_55%,transparent)]"
                  : "text-[var(--bg-55)]"
              }`}
            >
              Operations
            </h4>
            <div className="footer-operations-list font-sans">
              {operations.map((op, index) => (
                <Link
                  key={index}
                  href={op.path}
                  className={`text-[14px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_75%,transparent)] hover:text-[var(--on-dark)]"
                      : "text-[var(--bg-75)] hover:text-[var(--bg)]"
                  }`}
                >
                  {op.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 5: Contact (3fr on 1280px) */}
          <div className="footer-col-contact">
            <h4
              className={`font-mono text-[14px] uppercase tracking-[0.08em] mb-4 font-semibold ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_55%,transparent)]"
                  : "text-[var(--bg-55)]"
              }`}
            >
              Contact
            </h4>
            <div className="flex flex-col space-y-3 text-[14px] font-sans">
              <div>
                <span
                  className={`block font-mono text-[14px] uppercase tracking-wider mb-0.5 ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_55%,transparent)]"
                      : "text-[var(--bg-55)]"
                  }`}
                >
                  Direct Operations Email
                </span>
                <a
                  href={`mailto:${SITE_CONTACT.email}`}
                  className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_75%,transparent)] hover:text-[var(--on-dark)]"
                      : "text-[var(--bg-75)] hover:text-[var(--bg)]"
                  }`}
                >
                  {SITE_CONTACT.email}
                </a>
              </div>
              <div>
                <span
                  className={`block font-mono text-[14px] uppercase tracking-wider mb-0.5 ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_55%,transparent)]"
                      : "text-[var(--bg-55)]"
                  }`}
                >
                  Global Client Desk
                </span>
                <a
                  href={`tel:${SITE_CONTACT.phoneTel}`}
                  className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_75%,transparent)] hover:text-[var(--on-dark)]"
                      : "text-[var(--bg-75)] hover:text-[var(--bg)]"
                  }`}
                >
                  {SITE_CONTACT.phone}
                </a>
              </div>
              <div>
                <span
                  className={`block font-mono text-[14px] uppercase tracking-wider mb-0.5 ${
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_55%,transparent)]"
                      : "text-[var(--bg-55)]"
                  }`}
                >
                  Availability
                </span>
                <span
                  className={
                    isSector
                      ? "text-[color-mix(in_srgb,var(--on-dark)_70%,transparent)]"
                      : "text-[var(--bg-70)]"
                  }
                >
                  {SITE_CONTACT.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: copyright left, Privacy/Terms right, plus a small "Back to top ^" link */}
        <div
          className={`pt-6 pb-10 sm:pb-12 border-t flex flex-col sm:flex-row items-center justify-between gap-4 font-sans ${
            isSector
              ? "border-[color-mix(in_srgb,var(--on-dark)_12%,transparent)]"
              : "border-[var(--bg-12)]"
          }`}
        >
          <p
            className={`text-[14px] text-center sm:text-left ${
              isSector
                ? "text-[color-mix(in_srgb,var(--on-dark)_60%,transparent)]"
                : "text-[var(--bg-60)]"
            }`}
          >
            &copy; {currentYear} Solvantra Global. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[14px]">
            <Link
              href="/privacy-policy"
              className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_60%,transparent)] hover:text-[var(--on-dark)]"
                  : "text-[var(--bg-60)] hover:text-[var(--bg)]"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className={`transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_60%,transparent)] hover:text-[var(--on-dark)]"
                  : "text-[var(--bg-60)] hover:text-[var(--bg)]"
              }`}
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className={`transition-colors duration-150 inline-flex items-center gap-1 cursor-pointer font-mono text-[14px] uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px] ${
                isSector
                  ? "text-[color-mix(in_srgb,var(--on-dark)_60%,transparent)] hover:text-[var(--on-dark)]"
                  : "text-[var(--bg-60)] hover:text-[var(--bg)]"
              }`}
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <span aria-hidden="true">^</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
