"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Check,
  Calendar,
  User,
  Mail,
  Phone,
  Building2,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { submitToWeb3Forms } from "@/lib/web3forms";
import { SITE_CONTACT } from "@/lib/site";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const SERVICE_OPTIONS = [
  "Real Estate",
  "Home Services",
  "Healthcare",
  "24/7 Call & Chat Support",
  "Intelligent Scheduling & Dispatch",
  "Claims & Revenue Operations",
  "Administrative Support",
  "Compliance & Process Admin",
  "Lead Management & Follow-Up",
  "Dedicated Operational Pods",
  "Custom Operational Solution",
];

const TIMELINE_OPTIONS = [
  "Immediate (Within 30 Days)",
  "Next Quarter (1-3 Months)",
  "Exploratory Evaluation",
];

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "General Inquiry",
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [botcheck, setBotcheck] = useState("");
  const [submittedData, setSubmittedData] = useState({
    fullName: "",
    email: "",
  });
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceNeeded: defaultService,
    timeline: "Immediate (Within 30 Days)",
    notes: "",
  });

  // Custom Dropdown States
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [focusedServiceIndex, setFocusedServiceIndex] = useState(-1);
  const [focusedTimelineIndex, setFocusedTimelineIndex] = useState(-1);

  const serviceBtnRef = useRef<HTMLButtonElement>(null);
  const timelineBtnRef = useRef<HTMLButtonElement>(null);

  // Sync defaultService when prop changes
  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: defaultService }));
    }
  }, [defaultService]);

  // Lock body scroll and save active focus on modal open
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      previousActiveElement.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  const handleRequestClose = () => {
    if (isClosing) return;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      onClose();
      return;
    }

    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 180);
  };

  if (!isOpen && !isClosing) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    if (!formData.fullName.trim()) {
      setApiError("Please enter your full name.");
      return;
    }

    if (
      !formData.email.trim() ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
    ) {
      setApiError("Please enter a valid work email address.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitToWeb3Forms({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: `${formData.serviceNeeded} — Timeline: ${formData.timeline}`,
        message: formData.notes,
        subject: `New Consultation Request — Solvantra Global (${formData.serviceNeeded})`,
        sourcePage: "Consultation Modal",
        botcheck,
      });

      if (result.success) {
        setSubmittedData({
          fullName: formData.fullName,
          email: formData.email,
        });
        setSubmitted(true);
        // Clear form only after confirmed success
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          serviceNeeded: defaultService,
          timeline: "Immediate (Within 30 Days)",
          notes: "",
        });
        setBotcheck("");
      } else {
        setApiError(result.message);
      }
    } catch (err) {
      console.error("ConsultationModal submit error:", err);
      setApiError(
        "A network error occurred while submitting your consultation request. Please try again or email info@solvantra.global."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setApiError(null);
    handleRequestClose();
  };

  // Keyboard navigation for Service dropdown
  const handleServiceKeyDown = (e: React.KeyboardEvent) => {
    if (!isServiceOpen) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setIsServiceOpen(true);
        const idx = SERVICE_OPTIONS.indexOf(formData.serviceNeeded);
        setFocusedServiceIndex(idx >= 0 ? idx : 0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedServiceIndex((prev) => (prev < SERVICE_OPTIONS.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedServiceIndex((prev) => (prev > 0 ? prev - 1 : SERVICE_OPTIONS.length - 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedServiceIndex >= 0 && focusedServiceIndex < SERVICE_OPTIONS.length) {
          setFormData((prev) => ({
            ...prev,
            serviceNeeded: SERVICE_OPTIONS[focusedServiceIndex],
          }));
          setIsServiceOpen(false);
          serviceBtnRef.current?.focus();
        }
        break;
      case "Escape":
      case "Tab":
        setIsServiceOpen(false);
        serviceBtnRef.current?.focus();
        break;
    }
  };

  // Keyboard navigation for Timeline dropdown
  const handleTimelineKeyDown = (e: React.KeyboardEvent) => {
    if (!isTimelineOpen) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setIsTimelineOpen(true);
        const idx = TIMELINE_OPTIONS.indexOf(formData.timeline);
        setFocusedTimelineIndex(idx >= 0 ? idx : 0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedTimelineIndex((prev) => (prev < TIMELINE_OPTIONS.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedTimelineIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_OPTIONS.length - 1));
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedTimelineIndex >= 0 && focusedTimelineIndex < TIMELINE_OPTIONS.length) {
          setFormData((prev) => ({
            ...prev,
            timeline: TIMELINE_OPTIONS[focusedTimelineIndex],
          }));
          setIsTimelineOpen(false);
          timelineBtnRef.current?.focus();
        }
        break;
      case "Escape":
      case "Tab":
        setIsTimelineOpen(false);
        timelineBtnRef.current?.focus();
        break;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[rgba(51,36,25,0.55)] backdrop-blur-sm ${
        isClosing ? "modal-backdrop-exit" : "modal-backdrop-enter"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleRequestClose();
      }}
    >
      <div
        className={`relative w-full max-w-2xl bg-[var(--bg)] rounded-[16px] border border-[var(--ink-12)] shadow-[0_32px_80px_rgba(51,36,25,0.35)] overflow-hidden flex flex-col max-h-[calc(100vh-2rem)] ${
          isClosing ? "modal-dialog-exit" : "modal-dialog-enter"
        }`}
      >
        {/* Header */}
        <div className="bg-[var(--bg)] px-6 py-5 flex items-center justify-between gap-4 shrink-0 relative">
          <div className="flex items-center gap-3.5 min-w-0">
            {/* 44px accent-14% rounded square */}
            <div className="w-11 h-11 rounded-[8px] bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3
                id="consultation-modal-title"
                className="font-serif text-[26px] font-medium text-[var(--ink)] leading-snug truncate"
              >
                Book a Consultation
              </h3>
              <p className="text-[15px] text-[rgba(51,36,25,0.70)] font-sans truncate">
                Tailored operational assessment with a Solvantra Solutions Architect
              </p>
            </div>
          </div>

          {/* Close button with 40px tap target */}
          <button
            type="button"
            onClick={handleRequestClose}
            className="w-10 h-10 rounded-[8px] flex items-center justify-center text-[var(--ink-65)] hover:text-[var(--ink)] hover:bg-[var(--ink-6)] transition-colors cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2px accent hairline under the header */}
        <div aria-hidden="true" className="h-[2px] w-full bg-[var(--accent)] shrink-0" />

        {/* Modal Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto font-sans flex-1">
          {submitted ? (
            /* SUCCESS STATE */
            <div className="py-8 text-center flex flex-col items-center tab-pane-transition">
              <div className="w-14 h-14 rounded-full bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)] mb-4">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h4 className="font-serif text-[26px] font-medium text-[var(--ink)] mb-2">
                Consultation Request Confirmed
              </h4>
              <p className="text-[15px] text-[var(--ink-80)] max-w-md mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-[var(--ink)]">{submittedData.fullName || "valued client"}</span>. Our operations team is reviewing your requirements and will reach out to {submittedData.email ? <span className="font-semibold">{submittedData.email}</span> : "you"} to confirm your session.
              </p>
              {/* Neutral privacy note replacing unverified NDA/protocol badge */}
              <div className="p-4 bg-[var(--bg)] rounded-[8px] text-left w-full max-w-md mb-6 border border-[var(--ink-12)] space-y-1.5">
                <p className="text-[14px] font-medium text-[var(--ink)]">
                  Privacy &amp; Data Protection
                </p>
                <p className="text-[14px] text-[var(--ink-65)] leading-relaxed">
                  We use your details only to respond to this request. For full details, review our{" "}
                  <Link href="/privacy-policy" className="link-solvantra text-[14px]">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="btn-solvantra-primary h-[44px] px-8 text-[15px] cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* CONSULTATION FORM */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field for anti-spam */}
              <input
                type="text"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
                className="hidden"
                aria-hidden="true"
              />

              {/* API Error Alert */}
              {apiError && (
                <div
                  role="alert"
                  className="p-3.5 bg-red-500/10 border-l-[3px] border-red-500 text-[13px] font-sans text-[var(--ink)] rounded-r space-y-1"
                >
                  <p className="font-semibold text-red-800">Submission Failed</p>
                  <p className="text-red-700">{apiError}</p>
                  <p className="text-[12px] text-red-700/90">
                    You can also email us directly at{" "}
                    <a href={`mailto:${SITE_CONTACT.email}`} className="underline font-semibold">
                      {SITE_CONTACT.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* Contact Information Group */}
              <div className="space-y-4">
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold block">
                  CONTACT DETAILS
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="modal-fullname"
                      className="block text-[14px] font-medium text-[var(--ink)] mb-1.5 font-sans"
                    >
                      Full Name
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1 align-middle" />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(51,36,25,0.55)] pointer-events-none" />
                      <input
                        id="modal-fullname"
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full h-[52px] pl-11 pr-4 bg-[var(--bg)] border border-[rgba(51,36,25,0.25)] rounded-[8px] text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Work Email */}
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-[14px] font-medium text-[var(--ink)] mb-1.5 font-sans"
                    >
                      Work Email
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1 align-middle" />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(51,36,25,0.55)] pointer-events-none" />
                      <input
                        id="modal-email"
                        type="email"
                        required
                        placeholder="eleanor@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-[52px] pl-11 pr-4 bg-[var(--bg)] border border-[rgba(51,36,25,0.25)] rounded-[8px] text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-[14px] font-medium text-[var(--ink)] mb-1.5 font-sans"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(51,36,25,0.55)] pointer-events-none" />
                      <input
                        id="modal-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-[52px] pl-11 pr-4 bg-[var(--bg)] border border-[rgba(51,36,25,0.25)] rounded-[8px] text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Organization / Company */}
                  <div>
                    <label
                      htmlFor="modal-company"
                      className="block text-[14px] font-medium text-[var(--ink)] mb-1.5 font-sans"
                    >
                      Organization / Company
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1 align-middle" />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[rgba(51,36,25,0.55)] pointer-events-none" />
                      <input
                        id="modal-company"
                        type="text"
                        required
                        placeholder="e.g. Vance Global Capital"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full h-[52px] pl-11 pr-4 bg-[var(--bg)] border border-[rgba(51,36,25,0.25)] rounded-[8px] text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service & Timeline Group */}
              <div className="space-y-4 pt-2">
                <span className="font-mono text-[12px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold block">
                  REQUIREMENTS &amp; TIMELINE
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Custom Service Focus Dropdown */}
                  <div className="relative">
                    <label
                      id="service-label"
                      className="block text-[14px] font-medium text-[var(--ink)] mb-1.5 font-sans"
                    >
                      Primary Service Focus
                    </label>

                    <button
                      ref={serviceBtnRef}
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isServiceOpen}
                      aria-labelledby="service-label"
                      onClick={() => {
                        setIsServiceOpen(!isServiceOpen);
                        setIsTimelineOpen(false);
                      }}
                      onKeyDown={handleServiceKeyDown}
                      className="w-full h-[52px] px-4 rounded-[8px] bg-[var(--bg)] border border-[rgba(51,36,25,0.25)] text-left flex items-center justify-between text-[16px] text-[var(--ink)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans"
                    >
                      <span className="truncate">{formData.serviceNeeded}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[rgba(51,36,25,0.55)] transition-transform duration-200 shrink-0 ${
                          isServiceOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isServiceOpen && (
                      <ul
                        role="listbox"
                        aria-labelledby="service-label"
                        tabIndex={-1}
                        onKeyDown={handleServiceKeyDown}
                        className="absolute left-0 right-0 z-30 mt-1.5 max-h-60 overflow-y-auto bg-[var(--bg)] border border-[rgba(51,36,25,0.15)] rounded-[8px] shadow-lg py-1.5 font-sans animate-fadeIn"
                      >
                        {SERVICE_OPTIONS.map((option, idx) => {
                          const isSelected = formData.serviceNeeded === option;
                          const isFocused = focusedServiceIndex === idx;
                          return (
                            <li
                              key={option}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, serviceNeeded: option }));
                                setIsServiceOpen(false);
                                serviceBtnRef.current?.focus();
                              }}
                              className={`px-4 py-2.5 text-[15px] cursor-pointer flex items-center justify-between transition-colors ${
                                isFocused
                                  ? "bg-[var(--accent-14)] text-[var(--ink)]"
                                  : isSelected
                                  ? "bg-[var(--ink-6)] text-[var(--ink)] font-semibold"
                                  : "text-[var(--ink)] hover:bg-[var(--accent-8)]"
                              }`}
                            >
                              <span className="truncate">{option}</span>
                              {isSelected && <Check className="w-4 h-4 text-[var(--accent)] shrink-0 ml-2" />}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  {/* Custom Timeline Dropdown */}
                  <div className="relative">
                    <label
                      id="timeline-label"
                      className="block text-[14px] font-medium text-[var(--ink)] mb-1.5 font-sans"
                    >
                      Desired Deployment Timeline
                    </label>

                    <button
                      ref={timelineBtnRef}
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isTimelineOpen}
                      aria-labelledby="timeline-label"
                      onClick={() => {
                        setIsTimelineOpen(!isTimelineOpen);
                        setIsServiceOpen(false);
                      }}
                      onKeyDown={handleTimelineKeyDown}
                      className="w-full h-[52px] px-4 rounded-[8px] bg-[var(--bg)] border border-[rgba(51,36,25,0.25)] text-left flex items-center justify-between text-[16px] text-[var(--ink)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans"
                    >
                      <span className="truncate">{formData.timeline}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[rgba(51,36,25,0.55)] transition-transform duration-200 shrink-0 ${
                          isTimelineOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isTimelineOpen && (
                      <ul
                        role="listbox"
                        aria-labelledby="timeline-label"
                        tabIndex={-1}
                        onKeyDown={handleTimelineKeyDown}
                        className="absolute left-0 right-0 z-30 mt-1.5 max-h-60 overflow-y-auto bg-[var(--bg)] border border-[rgba(51,36,25,0.15)] rounded-[8px] shadow-lg py-1.5 font-sans animate-fadeIn"
                      >
                        {TIMELINE_OPTIONS.map((option, idx) => {
                          const isSelected = formData.timeline === option;
                          const isFocused = focusedTimelineIndex === idx;
                          return (
                            <li
                              key={option}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, timeline: option }));
                                setIsTimelineOpen(false);
                                timelineBtnRef.current?.focus();
                              }}
                              className={`px-4 py-2.5 text-[15px] cursor-pointer flex items-center justify-between transition-colors ${
                                isFocused
                                  ? "bg-[var(--accent-14)] text-[var(--ink)]"
                                  : isSelected
                                  ? "bg-[var(--ink-6)] text-[var(--ink)] font-semibold"
                                  : "text-[var(--ink)] hover:bg-[var(--accent-8)]"
                              }`}
                            >
                              <span className="truncate">{option}</span>
                              {isSelected && <Check className="w-4 h-4 text-[var(--accent)] shrink-0 ml-2" />}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              {/* Workflow Requirements Textarea */}
              <div>
                <label
                  htmlFor="modal-notes"
                  className="block text-[14px] font-medium text-[var(--ink)] mb-1.5 font-sans"
                >
                  Workflow Requirements / Team Size Details
                </label>
                <textarea
                  id="modal-notes"
                  rows={4}
                  placeholder="Describe your current volume, team size requirements, or key operational challenges..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full min-h-[120px] p-4 bg-[var(--bg)] border border-[rgba(51,36,25,0.25)] rounded-[8px] text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans resize-y"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[var(--ink-12)] mt-6">
                {/* Neutral privacy note replacing unverified SOC-2 & HIPAA badge */}
                {/* TODO: confirm with client */}
                <p className="text-[14px] text-[var(--ink-65)] font-sans leading-relaxed">
                  We use your details only to respond to this request. Read our{" "}
                  <Link href="/privacy-policy" className="link-solvantra text-[14px]">
                    Privacy Policy
                  </Link>
                  .
                </p>

                {/* Buttons (stack on mobile with primary on top) */}
                <div className="flex flex-col-reverse sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={handleRequestClose}
                    className="btn-solvantra-secondary w-full sm:w-auto h-[44px] px-5 text-[14px] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-solvantra-primary w-full sm:w-auto h-[44px] px-6 text-[14px] font-semibold cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Request Consultation</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
