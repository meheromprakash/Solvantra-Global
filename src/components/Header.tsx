"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[72px] transition-colors duration-200 backdrop-blur-md ${
          scrolled ? "border-b border-[var(--ink-12)]" : "border-b-0"
        }`}
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg) 92%, transparent)",
        }}
      >
        <div className="h-[72px] max-w-[1200px] mx-auto px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Logo & Wordmark Left */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
          >
            <img
              src="/images/logo-mark.png"
              alt="Solvantra Global Logo"
              className="h-8 w-auto object-contain shrink-0"
            />
            <span className="text-[15px] font-bold tracking-wider text-[var(--ink)] uppercase whitespace-nowrap">
              SOLVANTRA GLOBAL
            </span>
          </Link>

          {/* Desktop Navigation Centered (hidden under 900px) */}
          <nav className="hidden min-[900px]:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-[15px] font-medium transition-all py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded ${
                    isActive
                      ? "text-[var(--ink)] font-semibold underline decoration-2 decoration-[var(--accent)] underline-offset-4"
                      : "text-[var(--ink-80)] hover:text-[var(--ink)] hover:underline hover:decoration-2 hover:decoration-[var(--accent)] hover:underline-offset-4"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA Right (hidden under 900px) */}
          <div className="hidden min-[900px]:flex items-center shrink-0">
            <Link
              href="/contact"
              className="btn-solvantra-primary h-[40px] px-5 text-[14px] cursor-pointer inline-flex items-center justify-center"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button (visible under 900px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[900px]:hidden p-2 text-[var(--ink)] hover:text-[var(--accent)] transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 stroke-[1.5]" /> : <Menu className="w-6 h-6 stroke-[1.5]" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown (Under 900px) */}
        {mobileMenuOpen && (
          <div className="min-[900px]:hidden border-b border-[var(--ink-12)] shadow-lg bg-[var(--bg)] animate-fadeIn">
            <nav className="flex flex-col">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`h-[56px] px-6 flex items-center text-[16px] border-b border-[var(--ink-12)] transition-colors ${
                      isActive
                        ? "text-[var(--ink)] font-semibold bg-[var(--accent-14)] underline decoration-2 decoration-[var(--accent)] underline-offset-4"
                        : "text-[var(--ink-80)] hover:text-[var(--ink)] hover:bg-[var(--ink-6)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="p-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-solvantra-primary w-full h-[48px] text-[15px] cursor-pointer inline-flex items-center justify-center"
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
