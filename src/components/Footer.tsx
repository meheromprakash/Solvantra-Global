"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
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
    { label: "Real Estate", path: "/real-estate" },
    { label: "Home Services", path: "/home-services" },
    { label: "Healthcare", path: "/healthcare" },
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
    <footer className="w-full bg-[var(--ink)] pt-16 md:pt-24 pb-0 border-t border-[rgba(185,138,62,0.25)] overflow-hidden relative">
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
              <span className="text-[17px] font-bold tracking-wider text-[var(--bg)] uppercase">
                SOLVANTRA GLOBAL
              </span>
            </Link>
            <p className="text-[14px] text-[var(--bg-70)] leading-[1.65] max-w-sm font-sans">
              People. Processes. Technology. Built Around Your Business.
            </p>
          </div>

          {/* Col 2: Quick Links (2fr) */}
          <div className="footer-col-links">
            <h4 className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] mb-4 font-semibold">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2.5 font-sans">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-[14px] text-[var(--bg-75)] hover:text-[var(--bg)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Services (2fr) */}
          <div className="footer-col-services">
            <h4 className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] mb-4 font-semibold">
              Services
            </h4>
            <div className="flex flex-col space-y-2.5 font-sans">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.path}
                  className="text-[14px] text-[var(--bg-75)] hover:text-[var(--bg)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Operations (4fr on 1280px, 2 columns at 1024px and below, 1 column at 375px) */}
          <div className="footer-col-operations">
            <h4 className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] mb-4 font-semibold">
              Operations
            </h4>
            <div className="footer-operations-list font-sans">
              {operations.map((op, index) => (
                <Link
                  key={index}
                  href={op.path}
                  className="text-[14px] text-[var(--bg-75)] hover:text-[var(--bg)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                >
                  {op.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 5: Contact (3fr on 1280px) */}
          <div className="footer-col-contact">
            <h4 className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] mb-4 font-semibold">
              Contact
            </h4>
            <div className="flex flex-col space-y-3 text-[14px] font-sans">
              <div>
                <span className="block font-mono text-[14px] text-[var(--bg-55)] uppercase tracking-wider mb-0.5">
                  Direct Operations Email
                </span>
                <a
                  href="mailto:solutions@solvantra.com"
                  className="text-[var(--bg-75)] hover:text-[var(--bg)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                >
                  solutions@solvantra.com
                </a>
              </div>
              <div>
                <span className="block font-mono text-[14px] text-[var(--bg-55)] uppercase tracking-wider mb-0.5">
                  Global Client Desk
                </span>
                <span className="text-[var(--bg-75)]">+1 (800) 584-9271</span>
              </div>
              <div>
                <span className="block font-mono text-[14px] text-[var(--bg-55)] uppercase tracking-wider mb-0.5">
                  Availability
                </span>
                <span className="text-[var(--bg-70)]">24/7 Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: copyright left, Privacy/Terms right, plus a small "Back to top ^" link */}
        <div className="pt-6 pb-10 sm:pb-12 border-t border-[var(--bg-12)] flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <p className="text-[14px] text-[var(--bg-60)] text-center sm:text-left">
            &copy; {currentYear} Solvantra Global. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-[14px]">
            <Link
              href="/privacy-policy"
              className="text-[var(--bg-60)] hover:text-[var(--bg)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[var(--bg-60)] hover:text-[var(--bg)] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
            >
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="text-[var(--bg-60)] hover:text-[var(--bg)] transition-colors duration-150 inline-flex items-center gap-1 cursor-pointer font-mono text-[14px] uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
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
