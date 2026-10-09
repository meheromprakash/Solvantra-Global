"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Shield } from "lucide-react";
import ConsultationModal from "./ConsultationModal";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Why Solvantra", path: "/why-solvantra" },
    { label: "Technology & Security", path: "/technology-security" },
    { label: "How It Works", path: "/how-it-works" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface-container-low/95 backdrop-blur-md border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(36,26,18,0.04)]">
        <div className="h-16 sm:h-20 max-w-[1240px] mx-auto px-3 sm:px-5 md:px-12 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
            <img
              src="/images/logo-mark.png"
              alt="Solvantra Global Logo"
              className="h-7 sm:h-9 md:h-10 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col shrink min-w-0">
              <span className="font-headline-sm text-base sm:text-lg font-bold tracking-wider text-on-surface uppercase leading-none truncate">
                Solvantra
              </span>
              <span className="font-eyebrow text-[9px] sm:text-[10px] text-primary tracking-[0.18em] sm:tracking-[0.22em] uppercase leading-none mt-1 font-semibold truncate">
                Global
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-label-md text-sm transition-colors relative py-1 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full animate-fadeIn" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center px-2.5 sm:px-5 py-2 sm:py-2.5 bg-primary-container text-on-primary font-label-md text-[11px] sm:text-xs rounded-lg shadow-[0_4px_20px_-2px_rgba(36,26,18,0.05),0_12px_32px_-4px_rgba(184,138,67,0.08)] hover:bg-primary transition-all duration-200 group cursor-pointer whitespace-nowrap"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-1 sm:ml-1.5 shrink-0 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 text-on-surface hover:text-primary transition-colors cursor-pointer shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-surface-container-low border-b border-outline-variant/30 px-6 py-6 shadow-xl animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-label-md text-base py-1 border-b border-outline-variant/10 ${
                      isActive
                        ? "text-primary font-bold"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
