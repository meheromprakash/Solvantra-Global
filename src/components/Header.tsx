"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";
import { getSectorFromPath } from "@/components/layout/SectorLayoutWrapper";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sector = getSectorFromPath(pathname);
  const isSector = Boolean(sector);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Why Solvantra", path: "/why-solvantra" },
  ];

  // Helper classes for desktop nav link
  const getNavLinkClass = (itemPath: string) => {
    const isActive = pathname === itemPath;
    if (isSector) {
      return `text-[15px] font-medium py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)] ${
        isActive
          ? "text-[var(--on-dark)] font-semibold underline decoration-2 decoration-[var(--accent)] underline-offset-[6px]"
          : "text-[color-mix(in_srgb,var(--on-dark)_80%,transparent)] hover:text-[var(--on-dark)] hover:underline hover:decoration-2 hover:decoration-[var(--accent)] hover:underline-offset-[6px]"
      }`;
    }
    return `text-[15px] font-medium py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${
      isActive
        ? "text-[var(--ink)] font-semibold underline decoration-2 decoration-[var(--accent)] underline-offset-4"
        : "text-[var(--ink-80)] hover:text-[var(--ink)] hover:underline hover:decoration-2 hover:decoration-[var(--accent)] hover:underline-offset-4"
    }`;
  };

  // Helper classes for mobile nav link
  const getMobileLinkClass = (itemPath: string) => {
    const isActive = pathname === itemPath;
    if (isSector) {
      return `h-[56px] px-6 flex items-center text-[16px] border-b border-[color-mix(in_srgb,var(--on-dark)_12%,transparent)] ${
        isActive
          ? "text-[var(--on-dark)] font-semibold bg-[color-mix(in_srgb,var(--on-dark)_6%,transparent)] underline decoration-2 decoration-[var(--accent)] underline-offset-4"
          : "text-[color-mix(in_srgb,var(--on-dark)_80%,transparent)] hover:text-[var(--on-dark)] hover:bg-[color-mix(in_srgb,var(--on-dark)_6%,transparent)]"
      }`;
    }
    return `h-[56px] px-6 flex items-center text-[16px] border-b border-[var(--ink-12)] ${
      isActive
        ? "text-[var(--ink)] font-semibold bg-[var(--accent-14)] underline decoration-2 decoration-[var(--accent)] underline-offset-4"
        : "text-[var(--ink-80)] hover:text-[var(--ink)] hover:bg-[var(--ink-6)]"
    }`;
  };

  return (
    <>
      <header
        className={`site-header fixed top-0 left-0 right-0 z-40 h-[72px] ${
          isSector
            ? `bg-[var(--primary)] ${
                scrolled
                  ? "border-b border-[color-mix(in_srgb,var(--accent)_35%,transparent)]"
                  : "border-b border-[color-mix(in_srgb,var(--on-dark)_12%,transparent)]"
              }`
            : `backdrop-blur-md ${
                scrolled ? "border-b border-[var(--ink-12)]" : "border-b-0"
              }`
        }`}
        style={
          isSector
            ? undefined
            : {
                backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
              }
        }
      >
        <div className="h-[72px] max-w-[1200px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Logo & Wordmark Left */}
          <Link
            href="/"
            className={`flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded ${
              isSector ? "focus-visible:ring-offset-[var(--primary)]" : ""
            }`}
          >
            <img
              src="/images/logo-mark.png"
              alt="Solvantra Global Logo"
              className="h-8 w-auto object-contain shrink-0"
            />
            <span
              className={`text-[15px] font-bold tracking-wider uppercase whitespace-nowrap ${
                isSector ? "text-[var(--on-dark)]" : "text-[var(--ink)]"
              }`}
            >
              SOLVANTRA GLOBAL
            </span>
          </Link>

          {/* Desktop Navigation Centered (hidden under 900px) */}
          <nav className="hidden min-[900px]:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={getNavLinkClass(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Primary CTA Right (hidden under 900px) */}
          <div className="hidden min-[900px]:flex items-center shrink-0">
            <Link
              href="/contact"
              className={
                isSector
                  ? "h-[40px] px-5 rounded-[8px] text-[14px] font-semibold bg-[var(--accent)] text-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--accent),var(--primary)_6%)] cursor-pointer inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
                  : "btn-solvantra-primary h-[40px] px-5 text-[14px] cursor-pointer inline-flex items-center justify-center"
              }
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button (visible under 900px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`min-[900px]:hidden p-2 cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded ${
              isSector
                ? "text-[var(--on-dark)] hover:text-[var(--accent)] focus-visible:ring-offset-[var(--primary)]"
                : "text-[var(--ink)] hover:text-[var(--accent)]"
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown (Under 900px) */}
        {mobileMenuOpen && (
          <div
            className={`min-[900px]:hidden shadow-lg animate-fadeIn ${
              isSector
                ? "bg-[var(--primary)] border-b border-[color-mix(in_srgb,var(--on-dark)_12%,transparent)]"
                : "bg-[var(--bg)] border-b border-[var(--ink-12)]"
            }`}
          >
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={getMobileLinkClass(item.path)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="p-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={
                    isSector
                      ? "w-full h-[48px] rounded-[8px] text-[15px] font-semibold bg-[var(--accent)] text-[var(--primary)] hover:bg-[color-mix(in_srgb,var(--accent),var(--primary)_6%)] cursor-pointer inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--primary)]"
                      : "btn-solvantra-primary w-full h-[48px] text-[15px] cursor-pointer inline-flex items-center justify-center"
                  }
                >
                  Book a Consultation
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Shared Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
