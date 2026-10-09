"use client";

import React, { useState } from "react";
import Link from "next/link";
import ConsultationModal from "../ConsultationModal";

export interface HeroButtonConfig {
  label: string;
  href?: string;
  onClick?: () => void;
  isModalTrigger?: boolean;
}

export interface PageHeroProps {
  isHomepage?: boolean;
  bgImage?: string;
  bgAlt?: string;
  eyebrow: string;
  headingMain: string;
  headingGold: string;
  paragraph: string;
  primaryButton?: HeroButtonConfig;
  secondaryButton?: HeroButtonConfig;
  children?: React.ReactNode;
  className?: string;
}

export default function PageHero({
  isHomepage = false,
  bgImage = "/images/hero_golden_hour_globe.jpg",
  bgAlt = "Solvantra Global Operations",
  eyebrow,
  headingMain,
  headingGold,
  paragraph,
  primaryButton,
  secondaryButton,
  children,
  className = "",
}: PageHeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderButton = (btn: HeroButtonConfig, variant: "primary" | "secondary") => {
    const isModal = btn.isModalTrigger || (!btn.href && !btn.onClick);

    const baseClasses =
      variant === "primary"
        ? "hero-btn-primary inline-flex items-center justify-center font-label-md text-sm rounded-lg px-6 py-3.5 min-h-[48px] bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary shadow-md transition-all duration-200 group cursor-pointer w-full sm:w-auto"
        : "hero-btn-secondary inline-flex items-center justify-center font-label-md text-sm rounded-lg px-6 py-3.5 min-h-[48px] bg-surface-container-lowest/90 backdrop-blur-sm border border-primary-container/60 text-on-surface transition-all duration-200 group cursor-pointer w-full sm:w-auto";

    const handleClick = (e: React.MouseEvent) => {
      if (btn.onClick) {
        btn.onClick();
      } else if (isModal) {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    const buttonContent = (
      <>
        <span>{btn.label}</span>
        {variant === "primary" && (
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 text-base leading-none ml-1">
            →
          </span>
        )}
      </>
    );

    if (btn.href && !isModal) {
      return (
        <Link href={btn.href} className={baseClasses}>
          {buttonContent}
        </Link>
      );
    }

    return (
      <button onClick={handleClick} className={baseClasses} type="button">
        {buttonContent}
      </button>
    );
  };

  return (
    <>
      <section
        className={`hero-bg-wrapper relative w-full overflow-hidden ${
          isHomepage
            ? "min-h-[70svh] md:min-h-[90vh] flex items-center justify-start pt-24 md:pt-28 pb-12 md:pb-16"
            : "min-h-0 md:min-h-[58vh] flex items-center justify-start pt-24 md:pt-28 pb-12 md:pb-16"
        } ${className}`}
        style={
          {
            "--hero-bg-image": `url('${bgImage}')`,
          } as React.CSSProperties
        }
      >
        {/* Preload hero background image */}
        {bgImage && (
          <link
            rel="preload"
            as="image"
            href={bgImage}
          />
        )}

        {/* Background image layer */}
        <div className="hero-bg-layer" />

        {/* Soft Vignette top and bottom edges */}
        <div className="hero-vignette" />

        {/* Gradient overlay */}
        <div className="hero-gradient-overlay" />

        {/* Faint golden glow / light-ray effect on the right side */}
        <div className="hidden md:block hero-glow-effect" />

        {/* Hero Content Container */}
        <div className="relative z-10 w-full max-w-[1240px] mx-auto px-5 md:px-12 py-4">
          <div className="max-w-full md:max-w-[560px] lg:max-w-[620px] flex flex-col items-start text-left animate-hero-fade-up">
            {/* Eyebrow - Plain uppercase gold text with letter-spacing (no pill background) */}
            <span className="font-eyebrow text-[11px] sm:text-xs text-primary-container tracking-[0.14em] uppercase font-bold mb-3 block">
              {eyebrow}
            </span>

            {/* Heading */}
            <h1 className="font-display-hero text-[clamp(2rem,8vw,2.75rem)] md:text-[clamp(2.6rem,5vw,4.5rem)] text-on-surface mb-4 md:mb-6 leading-[1.1] md:leading-[1.15] tracking-tight">
              {headingMain}{" "}
              <span className="italic font-normal text-primary-container block sm:inline">
                {headingGold}
              </span>
            </h1>

            {/* Paragraph */}
            <p className="font-body-lg text-[15px] sm:text-base md:text-lg text-secondary max-w-full md:max-w-[520px] mb-6 md:mb-8 leading-relaxed">
              {paragraph}
            </p>

            {/* Action Buttons */}
            {(primaryButton || secondaryButton) && (
              <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-3 sm:gap-4 max-w-[360px] sm:max-w-none">
                {primaryButton && renderButton(primaryButton, "primary")}
                {secondaryButton && renderButton(secondaryButton, "secondary")}
              </div>
            )}

            {/* Children (e.g. Credential Footnotes) */}
            {children}
          </div>
        </div>
      </section>

      {/* Shared Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
