"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FileText,
  Shield,
  Calendar,
  Clock,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState<string>("section-1");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sections = [
    { id: "section-1", num: "01", title: "About Solvantra" },
    { id: "section-2", num: "02", title: "Relationship to Client Agreements" },
    { id: "section-3", num: "03", title: "Business Use and Eligibility" },
    { id: "section-4", num: "04", title: "Enquiries and Consultations" },
    { id: "section-5", num: "05", title: "Acceptable Use of the Website" },
    { id: "section-6", num: "06", title: "Client Responsibilities" },
    { id: "section-7", num: "07", title: "Regulated Data and Healthcare" },
    { id: "section-8", num: "08", title: "Fees and Payment" },
    { id: "section-9", num: "09", title: "Confidentiality" },
    { id: "section-10", num: "10", title: "Intellectual Property" },
    { id: "section-11", num: "11", title: "Third-Party Tools and Links" },
    { id: "section-12", num: "12", title: "Privacy" },
    { id: "section-13", num: "13", title: "Disclaimers" },
    { id: "section-14", num: "14", title: "Limitation of Liability" },
    { id: "section-15", num: "15", title: "Indemnification" },
    { id: "section-16", num: "16", title: "Suspension and Termination" },
    { id: "section-17", num: "17", title: "Force Majeure" },
    { id: "section-18", num: "18", title: "Governing Law and Disputes" },
    { id: "section-19", num: "19", title: "Changes to These Terms" },
    { id: "section-20", num: "20", title: "General" },
    { id: "section-21", num: "21", title: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[var(--ink-12)] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink-6)] to-transparent pointer-events-none" />
        <div className="max-w-[1240px] mx-auto px-5 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-mono text-[var(--ink-65)] uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-[var(--accent)] transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>Legal</li>
              <li>/</li>
              <li className="text-[var(--ink)] font-semibold">Terms of Service</li>
            </ol>
          </nav>

          {/* Toggle pill between Legal Pages */}
          <div className="inline-flex p-1 rounded-full bg-[var(--ink-6)] border border-[var(--ink-12)] mb-8">
            <span className="px-5 py-2 rounded-full text-xs font-medium font-sans bg-[var(--ink)] text-[var(--bg)] shadow-sm">
              Terms of Service
            </span>
            <Link
              href="/privacy-policy"
              className="px-5 py-2 rounded-full text-xs font-medium font-sans text-[var(--ink-80)] hover:text-[var(--ink)] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-[0.14em] mb-4">
              <FileText className="w-3.5 h-3.5" />
              Solvantra Global Governance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--ink)] leading-[1.08] mb-6">
              Terms of Service
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink-80)] font-sans leading-relaxed mb-8">
              These Terms of Service govern your access to and use of the Solvantra Global website and set the baseline for enquiries about our services.
            </p>

            {/* Document metadata cards */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--ink-65)] pt-4 border-t border-[var(--ink-12)]">
              <div className="inline-flex items-center gap-1.5 bg-[var(--ink-6)] px-3 py-1.5 rounded-md border border-[var(--ink-12)]">
                <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Effective: October 18, 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[var(--ink-6)] px-3 py-1.5 rounded-md border border-[var(--ink-12)]">
                <Clock className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>Last Updated: October 18, 2026</span>
              </div>
              <div className="inline-flex items-center gap-1.5 bg-[var(--ink-6)] px-3 py-1.5 rounded-md border border-[var(--ink-12)]">
                <Globe className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>https://solvantra.global</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE TABLE OF CONTENTS JUMP MENU */}
      <div className="lg:hidden sticky top-20 z-30 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--ink-12)] px-5 py-3">
        <button
          type="button"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[var(--ink)] py-1"
        >
          <span className="flex items-center gap-2">
            <span className="text-[var(--accent)]">Navigate:</span>
            {sections.find((s) => s.id === activeSection)?.title || "Jump to section"}
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[var(--accent)] transition-transform duration-200 ${
              mobileNavOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileNavOpen && (
          <div className="mt-3 pt-3 border-t border-[var(--ink-12)] max-h-72 overflow-y-auto space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileNavOpen(false)}
                className={`block px-3 py-2 rounded text-xs transition-colors ${
                  activeSection === section.id
                    ? "bg-[var(--ink)] text-[var(--bg)] font-medium"
                    : "text-[var(--ink-80)] hover:bg-[var(--ink-6)]"
                }`}
              >
                <span className="font-mono mr-2 text-[var(--accent)]">{section.num}.</span>
                {section.title}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* MAIN DOCUMENT BODY */}
      <div className="max-w-[1240px] mx-auto px-5 md:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* DESKTOP STICKY SIDEBAR (TOC) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 self-start">
            <div className="bg-[var(--ink-6)]/60 rounded-2xl p-6 border border-[var(--ink-12)] backdrop-blur-sm">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--ink-12)]">
                <span className="text-xs font-mono uppercase tracking-[0.14em] text-[var(--accent)] font-semibold">
                  Table of Contents
                </span>
                <span className="text-[11px] font-mono text-[var(--ink-65)]">
                  21 Sections
                </span>
              </div>

              <nav className="space-y-1 max-h-[calc(100vh-220px)] overflow-y-auto pr-2 custom-scrollbar">
                {sections.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`flex items-start gap-2.5 px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
                        isActive
                          ? "bg-[var(--ink)] text-[var(--bg)] font-medium shadow-sm translate-x-1"
                          : "text-[var(--ink-80)] hover:text-[var(--ink)] hover:bg-[var(--ink-6)]"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] mt-0.5 ${
                          isActive ? "text-[var(--accent)]" : "text-[var(--accent)]"
                        }`}
                      >
                        {section.num}
                      </span>
                      <span className="leading-snug">{section.title}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-5 border-t border-[var(--ink-12)]">
                <Link
                  href="/privacy-policy"
                  className="flex items-center justify-between text-xs font-sans text-[var(--ink-80)] hover:text-[var(--accent)] transition-colors group"
                >
                  <span>Looking for Privacy Policy?</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </aside>

          {/* DOCUMENT CONTENT */}
          <main className="lg:col-span-8 space-y-12 prose-solvantra">
            {/* Introductory Clause */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--ink-6)]/40 border border-[var(--ink-12)]">
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink)] font-sans">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Solvantra Global website at{" "}
                <strong className="font-semibold text-[var(--ink)]">solvantra.global</strong> and any related pages (the &ldquo;Website&rdquo;), and set the baseline for enquiries about our services. Please read them carefully. By accessing the Website or submitting an enquiry, you agree to these Terms. If you do not agree, do not use the Website.
              </p>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-32 pt-6 border-t border-[var(--ink-12)] first:border-0 first:pt-0">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">01</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  About Solvantra
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Solvantra Global (&ldquo;Solvantra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides business operations support, including 24/7 call and chat support, intelligent scheduling and dispatch, claims and revenue operations, administrative support, compliance and process administration, lead management, and dedicated operational pods (the &ldquo;Services&rdquo;).
              </p>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">02</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Relationship to Client Agreements
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                The Services are provided only under a separate written agreement, such as a Master Services Agreement, Statement of Work or order form (a &ldquo;Client Agreement&rdquo;). If these Terms conflict with a signed Client Agreement, the Client Agreement prevails for the Services. Nothing on the Website, including descriptions, timelines, illustrative dashboards, live-queue or coverage graphics, or FAQs, is an offer or binding commitment.
              </p>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">03</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Business Use and Eligibility
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                The Website and Services are intended for business customers. By using them, you confirm that you are at least 18 years old, have authority to bind the business you represent, and will use the Website only for lawful business purposes.
              </p>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">04</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Enquiries and Consultations
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Submitting an enquiry or booking a consultation does not create a contract or guarantee availability of any Service. A contract is formed only when a Client Agreement is signed by both parties. Pricing, scope, coverage hours, and pod size are set out in the Client Agreement. Information you submit must be accurate and not include sensitive data (such as health records or payment card numbers).
              </p>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">05</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Acceptable Use of the Website
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-4">
                You agree not to:
              </p>
              <ul className="space-y-3 text-[15px] sm:text-base text-[var(--ink-80)] font-sans">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>use the Website unlawfully or in a way that infringes others&apos; rights;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>attempt to gain unauthorized access to our systems, accounts or data, or probe, scan or test vulnerabilities;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>introduce malware or interfere with the Website&apos;s operation, including through bots, scraping or excessive requests;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>submit false, misleading or abusive content, or impersonate any person or entity;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>copy, reverse engineer, or resell Website content or materials except as permitted by law.</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">06</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Client Responsibilities
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-3">
                Where we provide Services, the client is responsible for: providing lawful, clear instructions, approved scripts and workflows; granting timely access to required systems with appropriate permissions; ensuring it has the right to share the personal data it provides to us; giving any notices and obtaining any consents required by law, including for call recording, monitoring and automated communications; and the accuracy of information and content it supplies.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Solvantra personnel will follow the client&apos;s approved scripts, policies and workflows in the client&apos;s name.
              </p>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">07</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Regulated Data and Healthcare
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-6">
                Where Services involve protected health information, the parties must first enter into a Business Associate Agreement as required by HIPAA, and PHI must not be shared with us before then. Our references to alignment with HIPAA or sector-specific compliance checklists describe our operating approach and do not constitute legal advice or a guarantee of the client&apos;s own compliance.
              </p>

              {/* Callout box: Not an Emergency Service */}
              <div className="p-6 rounded-xl bg-[var(--accent-8)] border border-[var(--accent-40)]">
                <div className="flex items-start gap-3.5">
                  <AlertTriangle className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-semibold text-[var(--ink)] uppercase tracking-wider font-mono">
                      Not an emergency service
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--ink-80)] font-sans">
                      Our Services are not emergency services and do not provide medical, legal or professional advice. Clients are responsible for defining escalation and emergency triage rules (for example, directing callers to dial local emergency services where there is risk to life or safety).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">08</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Fees and Payment
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Fees, billing cycles, taxes and payment terms are set out in the Client Agreement. Unless stated otherwise there, invoices are payable within <strong className="text-[var(--ink)] font-medium">[30] days</strong>, late amounts may bear interest at the lesser of <strong className="text-[var(--ink)] font-medium">[1.5%]</strong> per month or the maximum permitted by law, and fees are exclusive of applicable taxes.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">09</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Confidentiality
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Each party will keep the other&apos;s non-public business, technical and customer information confidential, use it only for the purposes of the relationship, and protect it with reasonable care, except where disclosure is required by law. Detailed confidentiality terms will be set out in the Client Agreement.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">10</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Intellectual Property
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-3">
                The Website, including its design, text, graphics, logos and trademarks, is owned by or licensed to Solvantra and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable right to view the Website for your internal business evaluation.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Clients retain ownership of their data, scripts and content. Solvantra retains ownership of its pre-existing processes, SOPs, training materials, tools and know-how, and grants clients the right to use deliverables as stated in the Client Agreement.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">11</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Third-Party Tools and Links
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Services may operate within third-party software chosen by the client or by us (CRMs, telephony, scheduling and ticketing tools). We are not responsible for the availability, performance or terms of third-party systems. The Website may link to third-party sites that we do not control.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">12</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Privacy
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Our collection and use of personal information is described in our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[var(--ink)] font-semibold underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
                >
                  Privacy Policy
                </Link>
                , which forms part of these Terms.
              </p>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">13</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Disclaimers
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                The Website and its content are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, accuracy, and non-infringement, to the fullest extent permitted by law. We do not warrant that the Website will be uninterrupted, secure or error-free. Performance of the Services is governed solely by the Client Agreement.
              </p>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">14</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Limitation of Liability
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-3">
                To the fullest extent permitted by law, Solvantra will not be liable for any indirect, incidental, special, consequential or punitive damages, or for loss of profits, revenue, data, goodwill or business opportunity, arising from your use of the Website.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Our total aggregate liability arising from the Website is limited to <strong className="text-[var(--ink)] font-medium">[USD 100]</strong>. Liability for the Services is limited as set out in the Client Agreement. Nothing in these Terms excludes liability that cannot be excluded by law, including for fraud or death or personal injury caused by negligence.
              </p>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">15</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Indemnification
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                You agree to indemnify and hold Solvantra harmless from claims, losses and expenses (including reasonable legal fees) arising from your misuse of the Website, your breach of these Terms, or your violation of law or third-party rights. Indemnities relating to the Services are governed by the Client Agreement.
              </p>
            </section>

            {/* Section 16 */}
            <section id="section-16" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">16</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Suspension and Termination
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                We may suspend or restrict access to the Website at any time, without notice, if we reasonably believe these Terms are being breached or for security or maintenance reasons. Termination of Services is governed by the Client Agreement. Provisions which by their nature should survive termination will survive.
              </p>
            </section>

            {/* Section 17 */}
            <section id="section-17" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">17</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Force Majeure
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Neither party is liable for delay or failure caused by events beyond its reasonable control, including natural disasters, war, terrorism, strikes, power or internet failures, telecommunications outages, pandemics, or government actions.
              </p>
            </section>

            {/* Section 18 */}
            <section id="section-18" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">18</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Governing Law and Disputes
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                These Terms are governed by the laws of <strong className="text-[var(--ink)] font-medium">[India]</strong>, without regard to conflict of law rules. The courts at <strong className="text-[var(--ink)] font-medium">[Ahmedabad, Gujarat]</strong> will have exclusive jurisdiction, unless a Client Agreement states otherwise. The parties will first try in good faith to resolve any dispute through negotiation for at least <strong className="text-[var(--ink)] font-medium">[30] days</strong> before commencing proceedings.
              </p>
            </section>

            {/* Section 19 */}
            <section id="section-19" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">19</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Changes to These Terms
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                We may update these Terms from time to time. The updated version will be posted on this page with a new effective date, and continued use of the Website after that date means you accept the changes.
              </p>
            </section>

            {/* Section 20 */}
            <section id="section-20" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">20</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  General
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-3">
                These Terms and any Client Agreement form the entire agreement between us regarding their subject matter. If any provision is found unenforceable, the remainder stays in effect. Our failure to enforce a provision is not a waiver.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                You may not assign these Terms without our written consent; we may assign them in connection with a merger, acquisition or sale of assets. Notices to us must be sent to the email below.
              </p>
            </section>

            {/* Section 21: Contact Us */}
            <section id="section-21" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">21</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Contact Us
                </h2>
              </div>

              <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-[var(--ink-6)] border border-[var(--ink-12)] space-y-6">
                <div>
                  <h3 className="text-lg font-serif text-[var(--ink)] font-medium mb-1">
                    Solvantra Global
                  </h3>
                  <p className="text-xs font-mono text-[var(--ink-65)] uppercase tracking-wider">
                    Operational Inquiries &amp; Legal Notices
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="mailto:info@solvantra.global"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg)] border border-[var(--ink-12)] hover:border-[var(--accent)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--ink-6)] flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-[var(--ink-65)] uppercase tracking-wider">
                        Email Support
                      </span>
                      <span className="text-sm font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                        info@solvantra.global
                      </span>
                    </div>
                  </a>

                  <a
                    href="tel:+18005849271"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[var(--bg)] border border-[var(--ink-12)] hover:border-[var(--accent)] transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--ink-6)] flex items-center justify-center text-[var(--accent)] group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-[var(--ink-65)] uppercase tracking-wider">
                        Phone Enquiries
                      </span>
                      <span className="text-sm font-medium text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                        +1 (800) 584-9271
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
