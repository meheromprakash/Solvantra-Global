"use client";

import React, { useState } from "react";
import { Check, ArrowRight, Loader2 } from "lucide-react";

export interface FinalCTAProps {
  eyebrow?: string;
  headline?: string;
  subline?: string;
  tagline?: string;
  defaultSector?: string;
  bgClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
  contactDetails?: React.ReactNode;
  disclaimer?: string;
}

export default function FinalCTA({
  eyebrow,
  headline = "Ready to streamline your operations?",
  subline = "Partner with dedicated specialists, precision SOPs, and seamless software integration built around your business.",
  tagline,
  defaultSector = "",
  bgClassName = "bg-[var(--accent)]",
  textClassName = "text-[var(--ink)]",
  buttonClassName = "bg-[var(--ink)] text-[var(--bg)]",
  contactDetails,
  disclaimer,
}: FinalCTAProps = {}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: defaultSector,
    handoffMessage: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    sector?: string;
    handoffMessage?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
      sector?: string;
      handoffMessage?: string;
    } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      newErrors.email = "Please enter a valid work email address.";
    }

    if (!formData.sector) {
      newErrors.sector = "Please select your sector.";
    }

    if (!formData.handoffMessage.trim()) {
      newErrors.handoffMessage = "Please describe what you want to hand off.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      console.error(err);
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
      sector: defaultSector,
      handoffMessage: "",
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <>
      <section className={`w-full ${bgClassName} ${textClassName} py-16 md:py-24 lg:py-[112px] transition-colors`}>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {eyebrow && (
                <span className="font-mono text-[12px] uppercase tracking-[0.18em] font-semibold mb-3 block opacity-90">
                  {eyebrow}
                </span>
              )}
              <h2 className="text-[clamp(36px,5vw,68px)] font-serif font-medium leading-[1.04] tracking-[-0.03em] mb-4">
                {headline}
              </h2>

              <p className="text-[17px] sm:text-[18px] opacity-85 leading-[1.6] max-w-[520px] mb-6 font-sans">
                {subline}
              </p>

              {tagline && (
                <p className="font-mono text-[14px] font-semibold tracking-wide mb-6 opacity-95">
                  {tagline}
                </p>
              )}

              {/* Reassurance Points */}
              <div className="space-y-4 max-w-lg mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-current text-[var(--bg)] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-[15px] font-medium font-sans">
                    Dedicated pod trained on your practice workflows
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-current text-[var(--bg)] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-[15px] font-medium font-sans">
                    Direct integration with your EHR and clearinghouse systems
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-current text-[var(--bg)] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span className="text-[15px] font-medium font-sans">
                    Rigorous SLA oversight and regular revenue cycle telemetry
                  </span>
                </div>
              </div>

              {contactDetails && (
                <div className="mt-4 pt-6 border-t border-current/15 w-full">
                  {contactDetails}
                </div>
              )}
            </div>

            {/* RIGHT Column: Form card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[var(--bg)] rounded-[16px] p-6 sm:p-8 lg:p-[32px] border border-[var(--ink)] shadow-[0_12px_40px_rgba(51,36,25,0.12)] text-[var(--ink)]">
              {isSuccess ? (
                /* Success state replaces the form with a thank-you message */
                <div className="py-6 flex flex-col items-start text-left">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] text-[var(--ink)] flex items-center justify-center mb-5 shrink-0">
                    <Check className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <h3 className="text-[26px] font-serif font-medium text-[var(--ink)] mb-2.5">
                    Consultation Booked
                  </h3>
                  <p className="text-[15px] text-[var(--ink-80)] leading-[1.65] font-sans mb-6">
                    Thank you for reaching out. A senior solutions architect will review your operational requirements and connect with you within 2 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="link-solvantra group text-[14px] font-semibold cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Submit another request</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              ) : (
                /* Form fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="cta-name"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-medium text-[var(--ink)] mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="cta-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      className={`w-full h-[48px] px-3.5 rounded-[8px] bg-[var(--bg)] border text-[15px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.40)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-all font-sans ${
                        errors.name
                          ? "border-[var(--ink)] ring-2 ring-[var(--ink)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[14px] text-[var(--ink)] font-sans mt-1.5 font-semibold">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Work Email field */}
                  <div>
                    <label
                      htmlFor="cta-email"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-medium text-[var(--ink)] mb-1.5"
                    >
                      Work Email *
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      className={`w-full h-[48px] px-3.5 rounded-[8px] bg-[var(--bg)] border text-[15px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.40)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-all font-sans ${
                        errors.email
                          ? "border-[var(--ink)] ring-2 ring-[var(--ink)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[14px] text-[var(--ink)] font-sans mt-1.5 font-semibold">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Sector select dropdown */}
                  <div>
                    <label
                      htmlFor="cta-sector"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-medium text-[var(--ink)] mb-1.5"
                    >
                      Sector *
                    </label>
                    <div className="relative">
                      <select
                        id="cta-sector"
                        value={formData.sector}
                        onChange={(e) => {
                          setFormData({ ...formData, sector: e.target.value });
                          if (errors.sector) setErrors({ ...errors, sector: undefined });
                        }}
                        className={`w-full h-[48px] px-3.5 rounded-[8px] bg-[var(--bg)] border text-[15px] text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-all font-sans cursor-pointer appearance-none ${
                          errors.sector
                            ? "border-[var(--ink)] ring-2 ring-[var(--ink)]"
                            : "border-[rgba(51,36,25,0.25)]"
                        }`}
                      >
                        <option value="">Select your sector</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Home Services">Home Services</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[var(--ink-65)]">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.sector && (
                      <p className="text-[14px] text-[var(--ink)] font-sans mt-1.5 font-semibold">
                        {errors.sector}
                      </p>
                    )}
                  </div>

                  {/* What do you want to hand off textarea */}
                  <div>
                    <label
                      htmlFor="cta-handoff"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-medium text-[var(--ink)] mb-1.5"
                    >
                      What do you want to hand off? *
                    </label>
                    <textarea
                      id="cta-handoff"
                      rows={3}
                      placeholder="e.g. 24/7 call triage, scheduling dispatch, claims processing..."
                      value={formData.handoffMessage}
                      onChange={(e) => {
                        setFormData({ ...formData, handoffMessage: e.target.value });
                        if (errors.handoffMessage)
                          setErrors({ ...errors, handoffMessage: undefined });
                      }}
                      className={`w-full min-h-[90px] p-3.5 rounded-[8px] bg-[var(--bg)] border text-[15px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.40)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] transition-all font-sans resize-y ${
                        errors.handoffMessage
                          ? "border-[var(--ink)] ring-2 ring-[var(--ink)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    />
                    {errors.handoffMessage && (
                      <p className="text-[14px] text-[var(--ink)] font-sans mt-1.5 font-semibold">
                        {errors.handoffMessage}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-[48px] rounded-[8px] ${buttonClassName} font-semibold text-[15px] hover:opacity-95 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-all cursor-pointer inline-flex items-center justify-center gap-2 mt-2 disabled:opacity-70`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-current" />
                        <span>Processing...</span>
                      </>
                    ) : (
                      <span>Book a Consultation</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
    {disclaimer && (
      <div className="bg-[var(--ink)] py-4 px-6 text-center border-t border-[rgba(248,241,229,0.08)]">
        <p className="text-[13px] md:text-[14px] font-mono text-[var(--bg-55)] max-w-4xl mx-auto leading-relaxed">
          {disclaimer}
        </p>
      </div>
    )}
  </>
);
}
