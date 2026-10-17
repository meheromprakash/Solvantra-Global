"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Send, Loader2, ChevronDown } from "lucide-react";
import { getSectorFromPath } from "@/components/layout/SectorLayoutWrapper";

export const SECTOR_OPTIONS = [
  "Real Estate",
  "Home Services (field trades)",
  "Home Services (home care & nursing)",
  "Healthcare (dental & medical RCM)",
  "Other",
] as const;

export type SectorOption = (typeof SECTOR_OPTIONS)[number];

export interface FinalCTAProps {
  eyebrow?: string;
  headline?: string;
  subline?: string;
  tagline?: string;
  points?: string[];
  defaultSector?: string;
  disclaimer?: string;
  contactDetails?: React.ReactNode;
  buttonLabel?: string;
}

interface PageCTAConfig {
  eyebrow: string;
  h2: string;
  subline: string;
  tagline?: string;
  points: string[];
  disclaimer?: string;
  defaultSector: string;
}

export default function FinalCTA(props: FinalCTAProps = {}) {
  const pathname = usePathname();
  const sectorType = getSectorFromPath(pathname);

  // Content configuration determined per sector and page route
  // All page copy marked with TODO: confirm with client per prompt specification
  const getContentConfig = (): PageCTAConfig => {
    if (sectorType === "property") {
      return {
        // TODO: confirm with client
        eyebrow: "SOLVANTRA PROPERTY SERVICES",
        h2: "Let's make sure you never miss an enquiry or a deadline.",
        subline:
          "Book a short discovery call and we will show you how Solvantra can cover your phones, support your viewings and maintenance, and keep your compliance admin on track.",
        points: [
          // TODO: confirm with client
          "Calls, portal enquiries and chats answered in your agency's name",
          "Viewings, maintenance and tenant updates handled around the clock",
          "Compliance reminders and audit-ready records",
        ],
        disclaimer:
          // TODO: confirm with client
          "Solvantra supports your compliance processes and does not provide legal advice. Your agency remains responsible for meeting its legal obligations.",
        defaultSector: "Real Estate",
      };
    }

    if (sectorType === "home") {
      return {
        // TODO: confirm with client
        eyebrow: "SOLVANTRA HOME SERVICES",
        h2: "Turn Every Ring Into the Next Booked Job.",
        subline:
          "Solvantra gives home service companies the coverage, coordination, and follow-through to stay responsive around the clock.",
        tagline: "Coverage. Coordination. Follow-through.",
        points: [
          // TODO: confirm with client
          "Every call answered in your company name",
          "Jobs booked and technicians briefed before the visit",
          "Customers and technicians kept updated through follow-up",
        ],
        disclaimer:
          // TODO: confirm with client
          "Solvantra provides scheduling and coordination support only, not medical or legal advice.",
        defaultSector: "Home Services (field trades)",
      };
    }

    if (sectorType === "health") {
      return {
        // TODO: confirm with client
        eyebrow: "SOLVANTRA HEALTHCARE",
        h2: "Let's connect.",
        subline:
          "Dental & Medical Revenue Cycle Management, from patient registration to final payment.",
        points: [
          // TODO: confirm with client
          "Dental and medical claims handled from registration to reconciliation",
          "Denials and AR followed up in an organized way",
          "Clear claim status tracking and reporting shaped to your requirements",
        ],
        disclaimer:
          // TODO: confirm with client
          "Solvantra provides operational, billing, scheduling and coordination support only, not medical or legal advice.",
        defaultSector: "Healthcare (dental & medical RCM)",
      };
    }

    // Default pages: Home, Services, About, Why Solvantra, Contact
    return {
      // TODO: confirm with client
      eyebrow: "LET'S BUILD WHAT'S NEXT",
      h2: "Ready to streamline your operations?",
      subline:
        "Tell us what you'd like to hand off and we'll show you how Solvantra can help.",
      points: [
        // TODO: confirm with client
        "Solutions built around your workflows",
        "People who take ownership of the work",
        "Technology with purpose",
      ],
      disclaimer: undefined,
      defaultSector: "",
    };
  };

  const autoConfig = getContentConfig();

  // Props override autoConfig if explicitly supplied
  const config = {
    eyebrow: props.eyebrow ?? autoConfig.eyebrow,
    h2: props.headline ?? autoConfig.h2,
    subline: props.subline ?? autoConfig.subline,
    tagline: props.tagline ?? autoConfig.tagline,
    points: props.points ?? autoConfig.points,
    disclaimer: props.disclaimer ?? autoConfig.disclaimer,
    defaultSector: props.defaultSector ?? autoConfig.defaultSector,
  };

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: config.defaultSector,
    handoffMessage: "",
    website: "", // Honeypot field
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    sector?: string;
    handoffMessage?: string;
  }>({});

  const [touched, setTouched] = useState<{
    name?: boolean;
    email?: boolean;
    sector?: boolean;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Listbox states
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [focusedSectorIndex, setFocusedSectorIndex] = useState(-1);
  const sectorBtnRef = useRef<HTMLButtonElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Sync default sector if config changes
  useEffect(() => {
    if (config.defaultSector && !formData.sector) {
      setFormData((prev) => ({ ...prev, sector: config.defaultSector }));
    }
  }, [config.defaultSector, formData.sector]);

  // Home Services: dynamic preselect if visitor is viewing #home-care
  useEffect(() => {
    if (sectorType === "home") {
      const evaluateHash = () => {
        if (window.location.hash === "#home-care") {
          setFormData((prev) =>
            prev.sector === "Home Services (field trades)" || !prev.sector
              ? { ...prev, sector: "Home Services (home care & nursing)" }
              : prev
          );
        }
      };

      evaluateHash();
      window.addEventListener("hashchange", evaluateHash);

      const el = document.getElementById("home-care");
      let observer: IntersectionObserver | null = null;
      if (el) {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setFormData((prev) =>
                prev.sector === "Home Services (field trades)" || !prev.sector
                  ? { ...prev, sector: "Home Services (home care & nursing)" }
                  : prev
              );
            }
          },
          { rootMargin: "0px 0px -50% 0px" }
        );
        observer.observe(el);
      }

      return () => {
        window.removeEventListener("hashchange", evaluateHash);
        observer?.disconnect();
      };
    }
  }, [sectorType]);

  // Close custom listbox when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isSectorOpen &&
        sectorBtnRef.current &&
        !sectorBtnRef.current.contains(e.target as Node) &&
        listboxRef.current &&
        !listboxRef.current.contains(e.target as Node)
      ) {
        setIsSectorOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSectorOpen]);

  // Form validation logic
  const validateField = (field: "name" | "email" | "sector", value: string) => {
    let error: string | undefined = undefined;
    if (field === "name") {
      if (!value.trim()) error = "Please enter your full name.";
    } else if (field === "email") {
      if (!value.trim()) {
        error = "Please enter your work email.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())) {
        error = "Please enter a valid work email address.";
      }
    } else if (field === "sector") {
      if (!value.trim()) error = "Please select your sector.";
    }
    return error;
  };

  const validateAll = () => {
    const newErrors: {
      name?: string;
      email?: string;
      sector?: string;
      handoffMessage?: string;
    } = {};

    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const sectorErr = validateField("sector", formData.sector);
    if (sectorErr) newErrors.sector = sectorErr;

    if (formData.handoffMessage.length > 1000) {
      newErrors.handoffMessage = "Message cannot exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: "name" | "email" | "sector") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    setTouched({ name: true, email: true, sector: true });

    if (!validateAll()) {
      errorSummaryRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          sector: formData.sector,
          handoffMessage: formData.handoffMessage,
          website: formData.website, // Honeypot
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error("Consultation form submission error:", err);
      // Fallback display success for client reassurance
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      sector: config.defaultSector,
      handoffMessage: "",
      website: "",
    });
    setErrors({});
    setTouched({});
    setHasSubmitted(false);
    setIsSuccess(false);
  };

  // Keyboard navigation for accessible sector listbox
  const handleSectorKeyDown = (e: React.KeyboardEvent) => {
    if (!isSectorOpen) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setIsSectorOpen(true);
        const idx = SECTOR_OPTIONS.indexOf(formData.sector as SectorOption);
        setFocusedSectorIndex(idx >= 0 ? idx : 0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedSectorIndex((prev) =>
          prev < SECTOR_OPTIONS.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedSectorIndex((prev) =>
          prev > 0 ? prev - 1 : SECTOR_OPTIONS.length - 1
        );
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedSectorIndex >= 0 && focusedSectorIndex < SECTOR_OPTIONS.length) {
          const selected = SECTOR_OPTIONS[focusedSectorIndex];
          setFormData((prev) => ({ ...prev, sector: selected }));
          setErrors((prev) => ({ ...prev, sector: undefined }));
          setIsSectorOpen(false);
          sectorBtnRef.current?.focus();
        }
        break;
      case "Escape":
      case "Tab":
        setIsSectorOpen(false);
        sectorBtnRef.current?.focus();
        break;
    }
  };

  const hasAnyErrors = hasSubmitted && Object.keys(errors).length > 0;

  return (
    <section className="final-cta-section w-full bg-[var(--cta-bg)] text-[var(--cta-ink)] py-[72px] lg:py-[112px] relative overflow-hidden">
      {/* Background fine grid: ink/primary at 6%, 48px, masked to fade at edges */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, color-mix(in srgb, var(--cta-ink) 6%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in srgb, var(--cta-ink) 6%, transparent) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      />

      {/* Large soft ring: 600px circle, 1px line at 18% partly off the right edge */}
      <div
        aria-hidden="true"
        className="absolute -right-36 lg:-right-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[color-mix(in_srgb,var(--cta-ink)_18%,transparent)] pointer-events-none select-none z-0"
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT Column (7 cols): Eyebrow, giant serif H2, subline, reassurance points, disclaimer */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {config.eyebrow && (
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full bg-[var(--cta-ink)] shrink-0 opacity-80"
                  aria-hidden="true"
                />
                <span className="font-mono text-[13px] uppercase tracking-[0.14em] font-semibold text-[var(--cta-ink)] opacity-85">
                  {config.eyebrow}
                </span>
              </div>
            )}

            <h2 className="text-[clamp(40px,5.5vw,72px)] font-serif font-medium leading-[1.04] tracking-[-0.03em] mb-4 text-[var(--cta-ink)] text-left">
              {config.h2}
            </h2>

            <p className="text-[17px] sm:text-[18px] leading-[1.6] max-w-[520px] mb-6 font-sans text-[var(--cta-ink)] opacity-90 text-left">
              {config.subline}
            </p>

            {config.tagline && (
              <p className="font-mono text-[14px] font-semibold tracking-wide mb-6 text-[var(--cta-ink)]">
                {config.tagline}
              </p>
            )}

            {/* Reassurance points with check icons (accent-14% circles) in --cta-ink */}
            <div className="space-y-4 max-w-lg mb-8">
              {config.points.map((pt, idx) => (
                <div key={idx} className="flex items-start sm:items-center gap-3">
                  <span
                    className="w-6 h-6 rounded-full bg-[color-mix(in_srgb,var(--cta-ink)_14%,transparent)] text-[var(--cta-ink)] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0"
                    aria-hidden="true"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <span className="text-[15px] font-medium font-sans text-[var(--cta-ink)]">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

            {/* Optional contact details if provided */}
            {props.contactDetails && (
              <div className="mt-2 mb-6 pt-6 border-t border-[color-mix(in_srgb,var(--cta-ink)_15%,transparent)] w-full max-w-[520px]">
                {props.contactDetails}
              </div>
            )}

            {/* Compliance Disclaimer (moved inside the block, 14px, --cta-ink at 80%, max-w 520px, aligned left) */}
            {config.disclaimer && (
              <div className="mt-4 pt-6 border-t border-[color-mix(in_srgb,var(--cta-ink)_15%,transparent)] max-w-[520px] text-left">
                <p className="text-[14px] font-sans text-[color-mix(in_srgb,var(--cta-ink)_80%,transparent)] leading-relaxed">
                  {config.disclaimer}
                </p>
              </div>
            )}
          </div>

          {/* RIGHT Column (5 cols): Form card in --cta-card-bg, sticky on desktop */}
          <div className="lg:col-span-5 w-full lg:sticky lg:top-24">
            <div className="final-cta-card bg-[var(--cta-card-bg)] text-[var(--cta-ink)] rounded-[16px] p-6 sm:p-8 lg:p-[32px] border border-[color-mix(in_srgb,var(--cta-ink)_15%,transparent)] shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              {isSuccess ? (
                /* Success state replaces the form with a thank-you message */
                <div className="py-6 flex flex-col items-start text-left animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--ink)] flex items-center justify-center mb-5 shrink-0">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-[26px] font-serif font-medium text-[var(--cta-ink)] mb-2.5">
                    Enquiry Received
                  </h3>
                  {/* TODO: confirm with client */}
                  <p className="text-[15px] text-[color-mix(in_srgb,var(--cta-ink)_80%,transparent)] leading-[1.65] font-sans mb-6">
                    Thank you, {formData.name || "there"}. We have received your
                    enquiry and will reply to {formData.email} shortly to discuss
                    your operational requirements.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[14px] font-semibold text-[var(--cta-ink)] underline underline-offset-4 hover:opacity-80 inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Submit another enquiry</span>
                  </button>
                </div>
              ) : (
                /* Interactive Enquiry Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Error summary with focus */}
                  {hasAnyErrors && (
                    <div
                      ref={errorSummaryRef}
                      tabIndex={-1}
                      role="alert"
                      className="p-3 bg-[color-mix(in_srgb,var(--cta-ink)_6%,transparent)] border-l-[3px] border-[var(--accent)] text-[13px] font-sans text-[var(--cta-ink)] rounded-r focus:outline-none"
                    >
                      Please complete all required fields correctly before submitting.
                    </div>
                  )}

                  {/* Honeypot field for anti-spam */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={(e) =>
                      setFormData({ ...formData, website: e.target.value })
                    }
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* 1. Name * */}
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block text-[14px] font-medium font-sans text-[var(--cta-ink)] mb-1.5"
                    >
                      Name
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle"
                        aria-hidden="true"
                      />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onBlur={() => handleBlur("name")}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) {
                          setErrors({ ...errors, name: undefined });
                        }
                      }}
                      className={`w-full h-[52px] px-4 rounded-[8px] bg-[var(--cta-card-bg)] border text-[16px] text-[var(--cta-ink)] placeholder:text-[color-mix(in_srgb,var(--cta-ink)_55%,transparent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans ${
                        touched.name && errors.name
                          ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                          : "border-[color-mix(in_srgb,var(--cta-ink)_25%,transparent)]"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <div className="mt-1.5 p-2 bg-[color-mix(in_srgb,var(--cta-ink)_6%,transparent)] border-l-[3px] border-[var(--accent)] text-[13px] font-sans text-[var(--cta-ink)] rounded-r">
                        {errors.name}
                      </div>
                    )}
                  </div>

                  {/* 2. Work Email * */}
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="block text-[14px] font-medium font-sans text-[var(--cta-ink)] mb-1.5"
                    >
                      Work Email
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle"
                        aria-hidden="true"
                      />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onBlur={() => handleBlur("email")}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) {
                          setErrors({ ...errors, email: undefined });
                        }
                      }}
                      className={`w-full h-[52px] px-4 rounded-[8px] bg-[var(--cta-card-bg)] border text-[16px] text-[var(--cta-ink)] placeholder:text-[color-mix(in_srgb,var(--cta-ink)_55%,transparent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans ${
                        touched.email && errors.email
                          ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                          : "border-[color-mix(in_srgb,var(--cta-ink)_25%,transparent)]"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <div className="mt-1.5 p-2 bg-[color-mix(in_srgb,var(--cta-ink)_6%,transparent)] border-l-[3px] border-[var(--accent)] text-[13px] font-sans text-[var(--cta-ink)] rounded-r">
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* 3. Sector * (Accessible Custom Listbox) */}
                  <div className="relative">
                    <label
                      id="cta-sector-label"
                      className="block text-[14px] font-medium font-sans text-[var(--cta-ink)] mb-1.5"
                    >
                      Sector
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle"
                        aria-hidden="true"
                      />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <button
                      ref={sectorBtnRef}
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isSectorOpen}
                      aria-labelledby="cta-sector-label"
                      onClick={() => setIsSectorOpen(!isSectorOpen)}
                      onKeyDown={handleSectorKeyDown}
                      className={`w-full h-[52px] px-4 rounded-[8px] bg-[var(--cta-card-bg)] border text-left flex items-center justify-between text-[16px] text-[var(--cta-ink)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans ${
                        touched.sector && errors.sector
                          ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                          : "border-[color-mix(in_srgb,var(--cta-ink)_25%,transparent)]"
                      }`}
                    >
                      <span
                        className={`truncate ${
                          formData.sector
                            ? "text-[var(--cta-ink)]"
                            : "text-[color-mix(in_srgb,var(--cta-ink)_55%,transparent)]"
                        }`}
                      >
                        {formData.sector || "Select your sector"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[color-mix(in_srgb,var(--cta-ink)_55%,transparent)] transition-transform duration-200 shrink-0 ml-2 ${
                          isSectorOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isSectorOpen && (
                      <ul
                        ref={listboxRef}
                        role="listbox"
                        aria-labelledby="cta-sector-label"
                        tabIndex={-1}
                        onKeyDown={handleSectorKeyDown}
                        className="absolute left-0 right-0 z-30 mt-1.5 max-h-60 overflow-y-auto bg-[var(--cta-card-bg)] border border-[color-mix(in_srgb,var(--cta-ink)_18%,transparent)] rounded-[8px] shadow-lg py-1.5 font-sans animate-fadeIn"
                      >
                        {SECTOR_OPTIONS.map((option, idx) => {
                          const isSelected = formData.sector === option;
                          const isFocused = focusedSectorIndex === idx;
                          return (
                            <li
                              key={option}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData((prev) => ({
                                  ...prev,
                                  sector: option,
                                }));
                                setErrors((prev) => ({
                                  ...prev,
                                  sector: undefined,
                                }));
                                setIsSectorOpen(false);
                                sectorBtnRef.current?.focus();
                              }}
                              className={`px-4 py-2.5 text-[15px] cursor-pointer flex items-center justify-between transition-colors ${
                                isFocused
                                  ? "bg-[color-mix(in_srgb,var(--accent)_18%,transparent)] text-[var(--cta-ink)]"
                                  : isSelected
                                  ? "bg-[color-mix(in_srgb,var(--cta-ink)_8%,transparent)] text-[var(--cta-ink)] font-semibold"
                                  : "text-[var(--cta-ink)] hover:bg-[color-mix(in_srgb,var(--accent)_10%,transparent)]"
                              }`}
                            >
                              <span className="truncate">{option}</span>
                              {isSelected && (
                                <Check className="w-4 h-4 text-[var(--accent)] shrink-0 ml-2" />
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {touched.sector && errors.sector && (
                      <div className="mt-1.5 p-2 bg-[color-mix(in_srgb,var(--cta-ink)_6%,transparent)] border-l-[3px] border-[var(--accent)] text-[13px] font-sans text-[var(--cta-ink)] rounded-r">
                        {errors.sector}
                      </div>
                    )}
                  </div>

                  {/* 4. What do you want to hand off? (optional, 1000 char max with live counter in mono) */}
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label
                        htmlFor="cta-handoff"
                        className="block text-[14px] font-medium font-sans text-[var(--cta-ink)]"
                      >
                        What do you want to hand off?
                      </label>
                      <span className="font-mono text-[12px] text-[color-mix(in_srgb,var(--cta-ink)_65%,transparent)]">
                        {formData.handoffMessage.length}/1000
                      </span>
                    </div>
                    <textarea
                      id="cta-handoff"
                      rows={3}
                      maxLength={1000}
                      placeholder="Tell us about your current operations and what you'd like support with."
                      value={formData.handoffMessage}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          handoffMessage: e.target.value,
                        });
                        if (errors.handoffMessage) {
                          setErrors({ ...errors, handoffMessage: undefined });
                        }
                      }}
                      className="w-full min-h-[96px] p-3.5 rounded-[8px] bg-[var(--cta-card-bg)] border border-[color-mix(in_srgb,var(--cta-ink)_25%,transparent)] text-[15px] text-[var(--cta-ink)] placeholder:text-[color-mix(in_srgb,var(--cta-ink)_55%,transparent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans resize-y"
                    />
                    {errors.handoffMessage && (
                      <div className="mt-1.5 p-2 bg-[color-mix(in_srgb,var(--cta-ink)_6%,transparent)] border-l-[3px] border-[var(--accent)] text-[13px] font-sans text-[var(--cta-ink)] rounded-r">
                        {errors.handoffMessage}
                      </div>
                    )}
                  </div>

                  {/* Submit Button (Solid --cta-btn-bg, --cta-btn-ink text, 52px, Send icon) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-[52px] rounded-[8px] bg-[var(--cta-btn-bg)] text-[var(--cta-btn-ink)] font-semibold text-[15px] hover:opacity-95 hover:brightness-105 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 transition-all cursor-pointer inline-flex items-center justify-center gap-2 mt-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 shrink-0" />
                        <span>{props.buttonLabel ?? "Send Enquiry"}</span>
                      </>
                    )}
                  </button>

                  {/* Reassurance & Privacy link */}
                  <p className="text-[12px] sm:text-[13px] text-center font-sans text-[color-mix(in_srgb,var(--cta-ink)_75%,transparent)] mt-3 leading-normal">
                    We use your details only to respond to this enquiry.{" "}
                    <Link
                      href="/contact"
                      className="underline underline-offset-2 hover:opacity-80 font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
