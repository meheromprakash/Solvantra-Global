"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  Send,
  Copy,
  ChevronDown,
  Plus,
  Minus,
  AlertCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { SITE_CONTACT } from "@/lib/site";
import { submitToWeb3Forms } from "@/lib/web3forms";
import ConsultationModal from "@/components/ConsultationModal";

// Options for the custom accessible Service Category listbox
const SERVICE_OPTIONS = [
  "Real Estate",
  "Home Services (field trades)",
  "Home Services (home care & nursing)",
  "Healthcare (dental & medical RCM)",
  "Other",
] as const;

type ServiceOption = (typeof SERVICE_OPTIONS)[number];

// Sector fit cards data for Section 02
const SECTORS_FIT = [
  {
    title: "Real Estate",
    audience: "Estate agents, lettings, and property managers",
    href: "/real-estate",
    categoryValue: "Real Estate" as ServiceOption,
  },
  {
    title: "Home Services",
    audience: "HVAC, plumbing, electrical, field trades and home care agencies",
    href: "/home-services",
    categoryValue: "Home Services (field trades)" as ServiceOption,
  },
  {
    title: "Healthcare",
    audience: "Dental & medical clinics",
    href: "/healthcare",
    categoryValue: "Healthcare (dental & medical RCM)" as ServiceOption,
  },
];

// FAQ items with placeholder answers per Step 4
const FAQ_ITEMS = [
  {
    question: "Which industries do you serve?",
    // TODO: confirm with client
    answer:
      "We specialize in Real Estate, Home Services (field trades and home care), and Healthcare (dental and medical revenue cycle management). We also build custom workflows for growing operational teams.",
  },
  {
    question: "How do we get started?",
    // TODO: confirm with client
    answer:
      "We start with a discovery conversation, audit your current workflows, align on custom scripts and tool connections, and run a supervised pilot before full go-live.",
  },
  {
    question: "Can you work with our existing tools?",
    // TODO: confirm with client
    answer:
      "Yes. Our specialists integrate directly into the phone system, CRM, dispatch software, or EHR platforms your business already uses every day.",
  },
  {
    question: "How do you handle confidentiality?",
    // TODO: confirm with client
    answer:
      "We maintain strict confidentiality agreements, clean-desk environments, and role-based access protocols to safeguard all client and customer records.",
  },
  {
    question: "Can we start with one service?",
    // TODO: confirm with client
    answer:
      "Absolutely. Many clients begin with a single function like 24/7 call triage or scheduling, and expand into broader workflow support as their operational needs evolve.",
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceCategory: "" as ServiceOption | "",
    message: "",
    website: "", // Honeypot field for spam bots
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  // Listbox state
  const [isListboxOpen, setIsListboxOpen] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(-1);
  const listboxButtonRef = useRef<HTMLButtonElement>(null);
  const listboxOptionsRef = useRef<HTMLUListElement>(null);

  // FAQ accordion state (first item open by default)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Sector fit accordion state for mobile
  const [openSectorFitIndex, setOpenSectorFitIndex] = useState<number | null>(0);

  // Error summary ref for focus management
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Preselect sector from URL param (?sector=)
  useEffect(() => {
    const sectorParam = searchParams.get("sector")?.toLowerCase() || "";
    if (!sectorParam) return;

    if (sectorParam.includes("real") || sectorParam.includes("estate")) {
      setFormData((prev) => ({ ...prev, serviceCategory: "Real Estate" }));
    } else if (sectorParam.includes("trade") || sectorParam.includes("hvac") || sectorParam.includes("field")) {
      setFormData((prev) => ({ ...prev, serviceCategory: "Home Services (field trades)" }));
    } else if (sectorParam.includes("care") || sectorParam.includes("nurs")) {
      setFormData((prev) => ({ ...prev, serviceCategory: "Home Services (home care & nursing)" }));
    } else if (sectorParam.includes("home")) {
      setFormData((prev) => ({ ...prev, serviceCategory: "Home Services (field trades)" }));
    } else if (sectorParam.includes("health") || sectorParam.includes("rcm") || sectorParam.includes("dental") || sectorParam.includes("medical")) {
      setFormData((prev) => ({ ...prev, serviceCategory: "Healthcare (dental & medical RCM)" }));
    } else if (sectorParam.includes("other")) {
      setFormData((prev) => ({ ...prev, serviceCategory: "Other" }));
    }
  }, [searchParams]);

  // Copy email handler
  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(SITE_CONTACT.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Scroll to form helper
  const scrollToForm = () => {
    const el = document.getElementById("enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Preselect from Section 02 buttons
  const handlePreselectSector = (category: ServiceOption) => {
    setFormData((prev) => ({ ...prev, serviceCategory: category }));
    if (errors.serviceCategory) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.serviceCategory;
        return next;
      });
    }
    scrollToForm();
  };

  // Validate a single field
  const validateField = (field: string, value: string): string | undefined => {
    if (field === "name") {
      if (!value.trim()) return "Please enter your full name.";
      if (value.trim().length < 2) return "Please enter a valid full name.";
    }
    if (field === "email") {
      if (!value.trim()) return "Please enter your work email.";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value.trim())) {
        return "Please enter a valid email address (e.g. name@company.com).";
      }
    }
    if (field === "company") {
      if (!value.trim()) return "Please enter your organization or company name.";
    }
    if (field === "serviceCategory") {
      if (!value) return "Please select a service category.";
    }
    if (field === "message") {
      if (!value.trim()) return "Please provide a brief summary of what you'd like support with.";
      if (value.trim().length < 10) return "Please provide a little more detail (at least 10 characters).";
    }
    return undefined;
  };

  // Handle blur
  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const err = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => {
      const next = { ...prev };
      if (err) next[field] = err;
      else delete next[field];
      return next;
    });
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const nameErr = validateField("name", formData.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField("email", formData.email);
    if (emailErr) newErrors.email = emailErr;

    const companyErr = validateField("company", formData.company);
    if (companyErr) newErrors.company = companyErr;

    const categoryErr = validateField("serviceCategory", formData.serviceCategory);
    if (categoryErr) newErrors.serviceCategory = categoryErr;

    const messageErr = validateField("message", formData.message);
    if (messageErr) newErrors.message = messageErr;

    setErrors(newErrors);
    return newErrors;
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // Mark all as touched
    setTouched({
      name: true,
      email: true,
      company: true,
      serviceCategory: true,
      message: true,
    });

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      // Focus error summary for accessibility
      setTimeout(() => {
        errorSummaryRef.current?.focus();
      }, 50);
      return;
    }

    setIsSubmitting(true);

    try {
      const subject = formData.serviceCategory
        ? `New ${formData.serviceCategory} Inquiry — Solvantra Global`
        : "New Website Inquiry — Solvantra Global";

      const res = await submitToWeb3Forms({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        service: formData.serviceCategory,
        message: formData.message,
        subject,
        sourcePage: "Contact Page (/contact)",
        botcheck: formData.website,
      });

      if (!res.success) {
        setApiError(res.message);
        return;
      }

      setSubmittedData({
        name: formData.name,
        email: formData.email,
      });
      setIsSubmitted(true);
      // Clear form only on confirmed success
      setFormData({
        name: "",
        email: "",
        company: "",
        serviceCategory: "",
        message: "",
        website: "",
      });
      setTouched({});
      setErrors({});
    } catch (err) {
      console.error("Contact form submission error:", err);
      setApiError(
        "A network error occurred while submitting your message. Please try again or email us directly at info@solvantra.global."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form handler
  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      serviceCategory: "",
      message: "",
      website: "",
    });
    setTouched({});
    setErrors({});
    setIsSubmitted(false);
    setApiError(null);
  };

  // Accessible keyboard navigation for custom listbox
  const handleListboxKeyDown = (e: React.KeyboardEvent) => {
    if (!isListboxOpen) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setIsListboxOpen(true);
        const currentIndex = SERVICE_OPTIONS.findIndex((opt) => opt === formData.serviceCategory);
        setFocusedOptionIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedOptionIndex((prev) => (prev < SERVICE_OPTIONS.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedOptionIndex((prev) => (prev > 0 ? prev - 1 : SERVICE_OPTIONS.length - 1));
        break;
      case "Home":
        e.preventDefault();
        setFocusedOptionIndex(0);
        break;
      case "End":
        e.preventDefault();
        setFocusedOptionIndex(SERVICE_OPTIONS.length - 1);
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (focusedOptionIndex >= 0 && focusedOptionIndex < SERVICE_OPTIONS.length) {
          const selected = SERVICE_OPTIONS[focusedOptionIndex];
          setFormData((prev) => ({ ...prev, serviceCategory: selected }));
          if (errors.serviceCategory) {
            setErrors((prev) => {
              const next = { ...prev };
              delete next.serviceCategory;
              return next;
            });
          }
          setIsListboxOpen(false);
          listboxButtonRef.current?.focus();
        }
        break;
      case "Escape":
      case "Tab":
        setIsListboxOpen(false);
        listboxButtonRef.current?.focus();
        break;
      default:
        // Type-ahead
        if (e.key.length === 1 && /[a-z0-9]/i.test(e.key)) {
          const letter = e.key.toLowerCase();
          const matchIndex = SERVICE_OPTIONS.findIndex((opt) =>
            opt.toLowerCase().startsWith(letter)
          );
          if (matchIndex >= 0) {
            setFocusedOptionIndex(matchIndex);
          }
        }
        break;
    }
  };

  return (
    <div className="flex flex-col w-full bg-[var(--bg)] text-[var(--ink)] relative">
      {/* =========================================================================
          1. HERO SECTION (Layout 7/5, No Photos, Pure Visuals & Direct Lines Card)
         ========================================================================= */}
      <section className="w-full pt-28 pb-16 md:pt-36 md:pb-20 bg-[var(--bg)] relative overflow-hidden">
        {/* Fine grid (ink at 5%, 48px) fading to edges */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(51, 36, 25, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(51, 36, 25, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        {/* Soft accent radial glow (accent at 24%, ~800px) behind the right card */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] lg:w-[850px] h-[700px] lg:h-[850px] rounded-full pointer-events-none select-none z-0 blur-[100px] lg:blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.24) 0%, rgba(185, 138, 62, 0.06) 50%, transparent 70%)",
          }}
        />

        {/* Decorative Ring (600px, 1px accent at 30%) partly off the right edge */}
        <div
          aria-hidden="true"
          className="absolute right-[-140px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[rgba(185,138,62,0.30)] pointer-events-none select-none z-0 hidden lg:block"
        />

        {/* Bottom 2px hairline fading left to right */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-[2px] pointer-events-none select-none z-10"
          style={{
            background:
              "linear-gradient(to right, var(--accent) 0%, rgba(185, 138, 62, 0.4) 60%, transparent 100%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* LEFT Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Mono Breadcrumb (>= 14px) */}
              <nav aria-label="Breadcrumb" className="mb-3">
                <ol className="flex items-center gap-2 font-mono text-[14px] text-[var(--ink-65)]">
                  <li>
                    <Link
                      href="/"
                      className="hover:text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[2px]"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-[var(--ink)] font-semibold" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>

              {/* Eyebrow (>= 14px) */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                  CONTACT US
                </span>
              </div>

              {/* H1: clamp(44px, 6vw, 84px) with italic accent only on "Your Operations." */}
              <h1 className="text-[44px] sm:text-[60px] lg:text-[76px] xl:text-[84px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)] mb-6">
                Let&apos;s Talk About{" "}
                <span className="italic text-[var(--accent)] font-normal block sm:inline">
                  Your Operations.
                </span>
              </h1>

              {/* Reworded subline (Step 0) */}
              <p className="text-[17px] sm:text-[18px] text-[var(--ink-80)] leading-[1.65] max-w-[560px] font-sans mb-8">
                Have questions about our services, security, or custom workflows? We&apos;re ready to help.
              </p>

              {/* Two Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-solvantra-primary h-[48px] px-7 text-[15px] cursor-pointer"
                >
                  Book a Consultation
                </button>
                <button
                  type="button"
                  onClick={scrollToForm}
                  className="btn-solvantra-secondary h-[48px] px-6 text-[15px] cursor-pointer"
                >
                  Send an Enquiry
                </button>
              </div>
            </div>

            {/* RIGHT Column: Direct Lines Card (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-[var(--bg)] border border-[var(--ink-12)] rounded-[16px] p-6 sm:p-8 shadow-[0_8px_30px_rgba(51,36,25,0.06)] relative">
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold mb-6 block">
                  REACH US DIRECTLY
                </span>

                <div className="space-y-3 font-sans">
                  {/* Email Row */}
                  <div
                    onClick={() => window.location.href = `mailto:${SITE_CONTACT.email}`}
                    className="group p-4 rounded-[12px] border border-[var(--ink-12)] bg-[var(--bg)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors duration-200 cursor-pointer flex items-center justify-between gap-4"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.location.href = `mailto:${SITE_CONTACT.email}`;
                      }
                    }}
                    aria-label={`Send email to ${SITE_CONTACT.email}`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-[8px] bg-[var(--accent-14)] group-hover:bg-[rgba(248,241,229,0.15)] flex items-center justify-center text-[var(--accent)] group-hover:text-[var(--bg)] shrink-0 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)] group-hover:text-[var(--bg-70)] transition-colors">
                          Direct Operations Email
                        </span>
                        <span className="text-[15px] font-medium text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors truncate block">
                          {SITE_CONTACT.email}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-[6px] border border-[var(--ink-15)] group-hover:border-[var(--bg-15)] text-[var(--ink-65)] group-hover:text-[var(--bg)] hover:scale-105 transition-all relative shrink-0 cursor-pointer"
                      title="Copy email address"
                      aria-label="Copy email address"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-[var(--accent)] group-hover:text-[var(--bg)]" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                      {copiedEmail && (
                        <span className="absolute -top-8 right-0 bg-[var(--ink)] text-[var(--bg)] text-[14px] font-mono px-2 py-0.5 rounded shadow">
                          Copied!
                        </span>
                      )}
                    </button>
                  </div>

                  {/* Phone Row */}
                  <a
                    href={`tel:${SITE_CONTACT.phoneTel}`}
                    className="group p-4 rounded-[12px] border border-[var(--ink-12)] bg-[var(--bg)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors duration-200 cursor-pointer flex items-center justify-between gap-4 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                    aria-label={`Call Solvantra at ${SITE_CONTACT.phone}`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-[8px] bg-[var(--accent-14)] group-hover:bg-[rgba(248,241,229,0.15)] flex items-center justify-center text-[var(--accent)] group-hover:text-[var(--bg)] shrink-0 transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)] group-hover:text-[var(--bg-70)] transition-colors">
                          Global Client Desk
                        </span>
                        <span className="text-[15px] font-medium text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors truncate block">
                          {SITE_CONTACT.phone}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-[14px] text-[var(--ink-65)] group-hover:text-[var(--bg-70)] uppercase tracking-wider shrink-0">
                      Tap to call &rarr;
                    </span>
                  </a>

                  {/* Availability Row */}
                  <div className="group p-4 rounded-[12px] border border-[var(--ink-12)] bg-[var(--bg)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors duration-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-11 h-11 rounded-[8px] bg-[var(--accent-14)] group-hover:bg-[rgba(248,241,229,0.15)] flex items-center justify-center text-[var(--accent)] group-hover:text-[var(--bg)] shrink-0 transition-colors">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)] group-hover:text-[var(--bg-70)] transition-colors">
                          Operational Coverage
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[15px] font-medium text-[var(--ink)] group-hover:text-[var(--bg)] transition-colors">
                            {SITE_CONTACT.availability}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
                      <span className="font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)] group-hover:text-[var(--bg-70)]">
                        Live
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FORM SECTION ("01 / ENQUIRY" - Layout 7/5 on 12-col grid)
         ========================================================================= */}
      <section
        id="enquiry-form"
        className="w-full py-[72px] lg:py-[112px] bg-[var(--bg)] border-t border-[var(--ink-15)] scroll-mt-24 relative"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* LEFT Column (7 cols): The Form Panel */}
            <div className="lg:col-span-7 bg-[var(--bg)] border border-[var(--ink-12)] rounded-[16px] p-6 sm:p-10 shadow-[0_4px_24px_rgba(51,36,25,0.04)]">
              {/* Mono Eyebrow */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[14px] font-bold text-[var(--accent)]">01</span>
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                  / ENQUIRY
                </span>
              </div>

              {/* H2 Title */}
              <h2 className="text-[32px] sm:text-[36px] font-serif font-medium leading-[1.08] tracking-[-0.03em] text-[var(--ink)] mb-2">
                Tell us what you&apos;d like to hand off.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[var(--ink-80)] font-sans mb-8">
                Share a few details and we&apos;ll get back to you.
              </p>

              {/* Error Summary Box (focus managed upon submission failure) */}
              {Object.keys(errors).length > 0 && (
                <div
                  ref={errorSummaryRef}
                  tabIndex={-1}
                  role="alert"
                  aria-live="polite"
                  className="mb-8 p-4 rounded-r-[8px] border-l-[3px] border-[var(--accent)] bg-[var(--accent-8)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
                >
                  <div className="flex items-center gap-2 text-[15px] font-semibold text-[var(--ink)] mb-2">
                    <AlertCircle className="w-5 h-5 text-[var(--accent)] shrink-0" />
                    <span>Please correct the errors before submitting:</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1 text-[14px] text-[var(--ink-80)] font-sans">
                    {Object.entries(errors).map(([field, msg]) => (
                      <li key={field}>{msg}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* SUCCESS STATE */}
              {isSubmitted ? (
                <div className="py-10 flex flex-col items-start animate-fade-up">
                  <div className="w-14 h-14 rounded-full bg-[var(--accent)] text-[var(--ink)] flex items-center justify-center mb-6 shadow-sm">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-[28px] sm:text-[32px] font-serif font-medium text-[var(--ink)] mb-3">
                    Thanks, we&apos;ve received your enquiry.
                  </h3>
                  {/* Step 0: "We'll reply as soon as we can." */}
                  {/* TODO: confirm a real response-time promise before publishing a number */}
                  <p className="text-[16px] text-[var(--ink-80)] leading-[1.65] font-sans mb-4">
                    {SITE_CONTACT.responseTimePromise}
                  </p>
                  <p className="text-[15px] text-[var(--ink-65)] font-sans mb-8">
                    Echoed details: <strong className="text-[var(--ink)]">{submittedData.name}</strong> (
                    <span className="text-[var(--ink)]">{submittedData.email}</span>).
                  </p>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="link-solvantra text-[15px] cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Send another enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* THE FORM */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field (hidden from humans, catches bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="form-website">Website</label>
                    <input
                      id="form-website"
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  {/* API Error Alert */}
                  {apiError && (
                    <div
                      role="alert"
                      className="p-4 bg-red-500/10 border-l-[3px] border-red-500 text-[14px] font-sans text-[var(--ink)] rounded-r space-y-1"
                    >
                      <p className="font-semibold text-red-800">Submission Failed</p>
                      <p className="text-red-700">{apiError}</p>
                      <p className="text-[13px] text-red-700/90">
                        You can also email us directly at{" "}
                        <a href={`mailto:${SITE_CONTACT.email}`} className="underline font-semibold">
                          {SITE_CONTACT.email}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div>
                    <label
                      htmlFor="form-name"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-semibold text-[var(--ink)] mb-2"
                    >
                      Full Name
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle" />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onBlur={() => handleBlur("name")}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.name;
                            return next;
                          });
                        }
                      }}
                      className={`w-full h-[52px] px-4 rounded-[8px] bg-[var(--bg)] border text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans ${
                        touched.name && errors.name
                          ? "border-[var(--ink)] ring-1 ring-[var(--accent)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    />
                    {touched.name && errors.name && (
                      <div className="flex items-center gap-2 text-[14px] text-[var(--ink)] font-medium mt-2 pl-2.5 border-l-[3px] border-[var(--accent)]">
                        <AlertCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* 2. Work Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-semibold text-[var(--ink)] mb-2"
                    >
                      Work Email
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle" />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. eleanor@company.com"
                      value={formData.email}
                      onBlur={() => handleBlur("email")}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.email;
                            return next;
                          });
                        }
                      }}
                      className={`w-full h-[52px] px-4 rounded-[8px] bg-[var(--bg)] border text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans ${
                        touched.email && errors.email
                          ? "border-[var(--ink)] ring-1 ring-[var(--accent)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    />
                    {touched.email && errors.email && (
                      <div className="flex items-center gap-2 text-[14px] text-[var(--ink)] font-medium mt-2 pl-2.5 border-l-[3px] border-[var(--accent)]">
                        <AlertCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* 3. Organization / Company */}
                  <div>
                    <label
                      htmlFor="form-company"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-semibold text-[var(--ink)] mb-2"
                    >
                      Organization / Company
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle" />
                      <span className="sr-only"> (required)</span>
                    </label>
                    <input
                      id="form-company"
                      type="text"
                      required
                      placeholder="e.g. Vance Global Enterprises"
                      value={formData.company}
                      onBlur={() => handleBlur("company")}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.company;
                            return next;
                          });
                        }
                      }}
                      className={`w-full h-[52px] px-4 rounded-[8px] bg-[var(--bg)] border text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans ${
                        touched.company && errors.company
                          ? "border-[var(--ink)] ring-1 ring-[var(--accent)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    />
                    {touched.company && errors.company && (
                      <div className="flex items-center gap-2 text-[14px] text-[var(--ink)] font-medium mt-2 pl-2.5 border-l-[3px] border-[var(--accent)]">
                        <AlertCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{errors.company}</span>
                      </div>
                    )}
                  </div>

                  {/* 4. Service Category (Custom Accessible Listbox) */}
                  <div className="relative">
                    <label
                      id="listbox-label"
                      className="block text-[14px] font-mono uppercase tracking-[0.08em] font-semibold text-[var(--ink)] mb-2"
                    >
                      Service Category
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle" />
                      <span className="sr-only"> (required)</span>
                    </label>

                    <button
                      ref={listboxButtonRef}
                      type="button"
                      id="service-category-button"
                      aria-haspopup="listbox"
                      aria-expanded={isListboxOpen}
                      aria-labelledby="listbox-label service-category-button"
                      onClick={() => setIsListboxOpen(!isListboxOpen)}
                      onKeyDown={handleListboxKeyDown}
                      className={`w-full h-[52px] px-4 rounded-[8px] bg-[var(--bg)] border text-left flex items-center justify-between text-[16px] transition-all font-sans cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
                        touched.serviceCategory && errors.serviceCategory
                          ? "border-[var(--ink)] ring-1 ring-[var(--accent)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    >
                      <span className={formData.serviceCategory ? "text-[var(--ink)]" : "text-[rgba(51,36,25,0.55)]"}>
                        {formData.serviceCategory || "Select your service category..."}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[var(--ink-65)] transition-transform duration-200 ${
                          isListboxOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Options */}
                    {isListboxOpen && (
                      <ul
                        ref={listboxOptionsRef}
                        role="listbox"
                        aria-labelledby="listbox-label"
                        tabIndex={-1}
                        onKeyDown={handleListboxKeyDown}
                        className="absolute left-0 right-0 z-30 mt-1.5 bg-[var(--bg)] border border-[var(--ink-15)] rounded-[8px] shadow-lg py-1.5 font-sans overflow-hidden animate-fadeIn"
                      >
                        {SERVICE_OPTIONS.map((option, idx) => {
                          const isSelected = formData.serviceCategory === option;
                          const isFocused = focusedOptionIndex === idx;
                          return (
                            <li
                              key={option}
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, serviceCategory: option }));
                                if (errors.serviceCategory) {
                                  setErrors((prev) => {
                                    const next = { ...prev };
                                    delete next.serviceCategory;
                                    return next;
                                  });
                                }
                                setIsListboxOpen(false);
                                listboxButtonRef.current?.focus();
                              }}
                              className={`px-4 py-3 text-[15px] cursor-pointer flex items-center justify-between transition-colors ${
                                isFocused
                                  ? "bg-[var(--accent-14)] text-[var(--ink)]"
                                  : isSelected
                                  ? "bg-[var(--ink-6)] text-[var(--ink)] font-semibold"
                                  : "text-[var(--ink)] hover:bg-[var(--accent-8)]"
                              }`}
                            >
                              <span>{option}</span>
                              {isSelected && <Check className="w-4 h-4 text-[var(--accent)]" />}
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {touched.serviceCategory && errors.serviceCategory && (
                      <div className="flex items-center gap-2 text-[14px] text-[var(--ink)] font-medium mt-2 pl-2.5 border-l-[3px] border-[var(--accent)]">
                        <AlertCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{errors.serviceCategory}</span>
                      </div>
                    )}
                  </div>

                  {/* 5. Project / Workflow Summary */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label
                        htmlFor="form-message"
                        className="block text-[14px] font-mono uppercase tracking-[0.08em] font-semibold text-[var(--ink)]"
                      >
                        Project / Workflow Summary
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)] ml-1.5 align-middle" />
                        <span className="sr-only"> (required)</span>
                      </label>
                      <span className="font-mono text-[14px] text-[var(--ink-65)]">
                        {formData.message.length} / 1000
                      </span>
                    </div>

                    <textarea
                      id="form-message"
                      rows={5}
                      maxLength={1000}
                      required
                      placeholder="Tell us about your current operations and what you'd like support with."
                      value={formData.message}
                      onBlur={() => handleBlur("message")}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.message;
                            return next;
                          });
                        }
                      }}
                      className={`w-full min-h-[140px] p-4 rounded-[8px] bg-[var(--bg)] border text-[16px] text-[var(--ink)] placeholder:text-[rgba(51,36,25,0.55)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 transition-all font-sans resize-y ${
                        touched.message && errors.message
                          ? "border-[var(--ink)] ring-1 ring-[var(--accent)]"
                          : "border-[rgba(51,36,25,0.25)]"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <div className="flex items-center gap-2 text-[14px] text-[var(--ink)] font-medium mt-2 pl-2.5 border-l-[3px] border-[var(--accent)]">
                        <AlertCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button & Privacy Note */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-solvantra-primary w-full sm:w-auto h-[50px] px-8 text-[15px] cursor-pointer inline-flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[var(--ink)]" />
                          <span>Sending enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    {/* Step 0 Privacy Note */}
                    <p className="text-[14px] text-[var(--ink-65)] font-sans mt-4 leading-relaxed">
                      We use your details only to respond to this enquiry. Read our{" "}
                      <Link href="/privacy-policy" className="link-solvantra text-[14px]">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT Column (5 cols, Sticky on desktop): What Happens Next & Contact Details */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-10">
              {/* Block 1: WHAT HAPPENS NEXT */}
              <div className="border-b border-[var(--ink-15)] pb-10">
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] font-semibold text-[var(--ink-65)] mb-6 block">
                  WHAT HAPPENS NEXT
                </span>

                <div className="space-y-6">
                  {/* Row 1 */}
                  {/* TODO: confirm process with client */}
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[15px] font-bold text-[var(--accent)] shrink-0 mt-0.5">
                      01
                    </span>
                    <div>
                      <h4 className="font-serif text-[20px] font-medium text-[var(--ink)] mb-1 leading-snug">
                        We read your enquiry.
                      </h4>
                      <p className="text-[14px] text-[var(--ink-80)] font-sans leading-relaxed">
                        Our operations lead reviews your scope and workflow requirements.
                      </p>
                    </div>
                  </div>

                  {/* Row 2 */}
                  {/* TODO: confirm process with client */}
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[15px] font-bold text-[var(--accent)] shrink-0 mt-0.5">
                      02
                    </span>
                    <div>
                      <h4 className="font-serif text-[20px] font-medium text-[var(--ink)] mb-1 leading-snug">
                        We reach out to understand your needs.
                      </h4>
                      <p className="text-[14px] text-[var(--ink-80)] font-sans leading-relaxed">
                        We schedule a brief discovery discussion focused on your systems.
                      </p>
                    </div>
                  </div>

                  {/* Row 3 */}
                  {/* TODO: confirm process with client */}
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[15px] font-bold text-[var(--accent)] shrink-0 mt-0.5">
                      03
                    </span>
                    <div>
                      <h4 className="font-serif text-[20px] font-medium text-[var(--ink)] mb-1 leading-snug">
                        We propose how Solvantra can help.
                      </h4>
                      <p className="text-[14px] text-[var(--ink-80)] font-sans leading-relaxed">
                        You receive a clear scope, dedicated team design, and rollout plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Block 2: CONTACT DETAILS */}
              <div>
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] font-semibold text-[var(--ink-65)] mb-6 block">
                  CONTACT DETAILS
                </span>

                <div className="space-y-4 font-sans">
                  {/* Email */}
                  <div className="flex items-start gap-3.5 text-[15px]">
                    <div className="w-10 h-10 rounded-[8px] bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)]">
                        Direct Operations Email
                      </span>
                      <a
                        href={`mailto:${SITE_CONTACT.email}`}
                        className="text-[var(--ink)] font-medium hover:underline decoration-2 decoration-[var(--accent)] underline-offset-4"
                      >
                        {SITE_CONTACT.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 text-[15px]">
                    <div className="w-10 h-10 rounded-[8px] bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)]">
                        Global Client Desk
                      </span>
                      <a
                        href={`tel:${SITE_CONTACT.phoneTel}`}
                        className="text-[var(--ink)] font-medium hover:underline decoration-2 decoration-[var(--accent)] underline-offset-4"
                      >
                        {SITE_CONTACT.phone}
                      </a>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-start gap-3.5 text-[15px]">
                    <div className="w-10 h-10 rounded-[8px] bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)]">
                        Availability
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                        <span className="text-[var(--ink)] font-medium">{SITE_CONTACT.availability}</span>
                      </div>
                    </div>
                  </div>

                  {/* Location (Step 0) */}
                  {/* TODO: confirm office address and whether to show it */}
                  <div className="flex items-start gap-3.5 text-[15px]">
                    <div className="w-10 h-10 rounded-[8px] bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-[14px] uppercase tracking-wider text-[var(--ink-65)]">
                        Location
                      </span>
                      <span className="text-[var(--ink)] font-medium">{SITE_CONTACT.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. WHO TO TALK TO ("02 / FIND YOUR FIT" - Light with accent 8% tint)
         ========================================================================= */}
      <section
        className="w-full py-[72px] lg:py-[112px] border-t border-b border-[rgba(185,138,62,0.25)] relative"
        style={{
          backgroundColor: "color-mix(in srgb, var(--accent) 8%, var(--bg))",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Section Header */}
          <div data-reveal className="mb-12 lg:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-[14px] font-bold text-[var(--accent)]">02</span>
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                / FIND YOUR FIT
              </span>
            </div>
            <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-serif font-medium leading-[1.05] tracking-[-0.03em] text-[var(--ink)] mb-3">
              Not sure where to start?
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[var(--ink-80)] font-sans max-w-xl">
              Choose your industry and we&apos;ll point you to the right page.
            </p>
          </div>

          {/* Mobile Accordion View (Under 768px) */}
          <div className="md:hidden border border-[rgba(51,36,25,0.15)] rounded-[12px] overflow-hidden divide-y divide-[rgba(51,36,25,0.15)] bg-[var(--bg)]">
            {SECTORS_FIT.map((sector, sIdx) => {
              const isOpen = openSectorFitIndex === sIdx;
              return (
                <div key={sector.title} className="transition-colors duration-200">
                  <button
                    type="button"
                    onClick={() => setOpenSectorFitIndex(isOpen ? null : sIdx)}
                    aria-expanded={isOpen}
                    aria-controls={`sector-fit-mobile-${sIdx}`}
                    className="w-full min-h-[56px] px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[14px] font-bold text-[var(--accent)]">
                        0{sIdx + 1}
                      </span>
                      <span className="font-serif text-[20px] font-medium text-[var(--ink)]">
                        {sector.title}
                      </span>
                    </div>
                    <span
                      className={`w-7 h-7 rounded-full border border-[var(--ink-20)] flex items-center justify-center shrink-0 transition-transform duration-200 motion-reduce:transition-none text-[var(--ink)] ${
                        isOpen ? "rotate-180 bg-[var(--ink)] text-[var(--bg)]" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2]" />
                    </span>
                  </button>

                  <div
                    id={`sector-fit-mobile-${sIdx}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-200 motion-reduce:transition-none ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden px-5 pb-5 pt-1 space-y-4">
                      <p className="text-[14px] leading-[1.6] text-[var(--ink-80)] font-sans">
                        {sector.audience}
                      </p>
                      <div className="flex flex-col gap-2.5 pt-2 border-t border-[rgba(51,36,25,0.12)]">
                        <Link
                          href={sector.href}
                          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)] underline decoration-2 decoration-[var(--accent)] underline-offset-4"
                        >
                          <span>Learn more</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <button
                          type="button"
                          onClick={() => handlePreselectSector(sector.categoryValue)}
                          className="w-full h-[44px] rounded-[8px] border border-[rgba(51,36,25,0.25)] text-[14px] font-semibold text-[var(--ink)] bg-[rgba(51,36,25,0.04)] hover:bg-[rgba(51,36,25,0.08)] transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                        >
                          <span>Preselect in form</span>
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Three Ruled Columns (hairlines, no cards, hover fills ink with bg text) */}
          <div data-reveal className="hidden md:grid md:grid-cols-3 border border-[rgba(51,36,25,0.15)] rounded-[12px] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-[rgba(51,36,25,0.15)]">
            {SECTORS_FIT.map((sector) => (
              <div
                key={sector.title}
                className="group p-8 lg:p-10 bg-[var(--bg)] hover:bg-[var(--ink)] text-[var(--ink)] hover:text-[var(--bg)] transition-colors duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-[26px] sm:text-[28px] font-medium leading-tight mb-3 text-inherit transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-[var(--ink-80)] group-hover:text-[var(--bg-70)] font-sans mb-8 transition-colors">
                    {sector.audience}
                  </p>
                </div>

                <div className="space-y-4 pt-6 border-t border-[rgba(51,36,25,0.12)] group-hover:border-[rgba(248,241,229,0.15)] transition-colors">
                  <Link
                    href={sector.href}
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--ink)] group-hover:text-[var(--bg)] underline decoration-2 decoration-[var(--accent)] underline-offset-4 transition-colors"
                  >
                    <span>Learn more</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>

                  <div>
                    <button
                      type="button"
                      onClick={() => handlePreselectSector(sector.categoryValue)}
                      className="w-full h-[44px] rounded-[8px] border border-[rgba(51,36,25,0.25)] group-hover:border-[rgba(248,241,229,0.30)] text-[14px] font-semibold text-[var(--ink)] group-hover:text-[var(--bg)] group-hover:bg-[rgba(248,241,229,0.08)] hover:bg-[rgba(51,36,25,0.06)] transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                    >
                      <span>Preselect in form</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. FAQ SECTION ("03 / FAQ" - 12-col grid, Accordion)
         ========================================================================= */}
      <section className="w-full py-[72px] lg:py-[112px] bg-[var(--bg)] relative">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Header (Cols 1-4, Sticky on desktop) */}
            <div data-reveal className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[14px] font-bold text-[var(--accent)]">03</span>
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-semibold">
                  / FAQ
                </span>
              </div>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-serif font-medium leading-[1.05] tracking-[-0.03em] text-[var(--ink)] mb-4">
                Common questions.
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[var(--ink-80)] font-sans leading-relaxed">
                Clear answers regarding our dedicated operational models, onboarding workflows, and systems integration.
              </p>
            </div>

            {/* Right Accordion (Cols 5-12) */}
            <div data-reveal className="lg:col-span-8 divide-y divide-[var(--ink-15)] border-t border-b border-[var(--ink-15)]">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={item.question} className="py-6">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-6 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]"
                    >
                      <span className="font-serif text-[20px] sm:text-[22px] font-medium text-[var(--ink)] leading-snug group-hover:text-[var(--accent)] transition-colors">
                        {item.question}
                      </span>
                      <span className="w-8 h-8 rounded-full border border-[var(--ink-20)] flex items-center justify-center text-[var(--accent)] shrink-0 transition-transform duration-200">
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2]" />
                        )}
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-250 ease-out font-sans ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-4 text-[15px] sm:text-[16px] text-[var(--ink-80)] leading-[1.65]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CLOSING BAND (Ink background, Fine Grid, Accent Glow, Full-bleed)
         ========================================================================= */}
      <section className="w-full py-20 lg:py-24 bg-[var(--ink)] text-[var(--bg)] relative overflow-hidden">
        {/* Fine grid (bg at 5%, 48px) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(248, 241, 229, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(248, 241, 229, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Soft accent radial glow (accent at 16%) */}
        <div
          aria-hidden="true"
          className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none select-none z-0 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.16) 0%, rgba(185, 138, 62, 0.04) 60%, transparent 80%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left */}
            <div className="max-w-2xl">
              <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-55)] font-semibold mb-3 block">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
              <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-serif font-medium text-[var(--bg)] leading-[1.05] tracking-[-0.03em]">
                Let&apos;s Build What&apos;s Next.
              </h2>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap items-center gap-6 shrink-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="btn-solvantra-primary h-[48px] px-7 text-[15px] cursor-pointer"
              >
                Book a Consultation
              </button>
              <a
                href={`tel:${SITE_CONTACT.phoneTel}`}
                className="text-[15px] font-semibold text-[var(--bg)] hover:text-[var(--accent)] underline decoration-2 decoration-[var(--accent)] underline-offset-4 transition-colors"
              >
                Call us ({SITE_CONTACT.phone})
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService="General Inquiry"
      />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-[var(--accent)] border-t-transparent animate-spin" />
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
