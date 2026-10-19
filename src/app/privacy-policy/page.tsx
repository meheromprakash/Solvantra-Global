"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Shield,
  FileText,
  Calendar,
  Clock,
  Globe,
  Mail,
  Phone,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Lock,
  UserCheck,
  Building,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("section-1");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const sections = [
    { id: "section-1", num: "01", title: "Who We Are" },
    { id: "section-2", num: "02", title: "Our Role: Controller and Processor" },
    { id: "section-3", num: "03", title: "Information We Collect" },
    { id: "section-4", num: "04", title: "How We Use Information" },
    { id: "section-5", num: "05", title: "Legal Bases (UK/EU GDPR)" },
    { id: "section-6", num: "06", title: "How We Share Information" },
    { id: "section-7", num: "07", title: "Healthcare Information and HIPAA" },
    { id: "section-8", num: "08", title: "International Data Transfers" },
    { id: "section-9", num: "09", title: "Cookies and Similar Technologies" },
    { id: "section-10", num: "10", title: "Data Retention" },
    { id: "section-11", num: "11", title: "Security" },
    { id: "section-12", num: "12", title: "Your Privacy Rights" },
    { id: "section-13", num: "13", title: "Children's Privacy" },
    { id: "section-14", num: "14", title: "Third-Party Links" },
    { id: "section-15", num: "15", title: "Changes to This Policy" },
    { id: "section-16", num: "16", title: "Contact Us" },
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
              <li className="text-[var(--ink)] font-semibold">Privacy Policy</li>
            </ol>
          </nav>

          {/* Toggle pill between Legal Pages */}
          <div className="inline-flex p-1 rounded-full bg-[var(--ink-6)] border border-[var(--ink-12)] mb-8">
            <Link
              href="/terms-of-service"
              className="px-5 py-2 rounded-full text-xs font-medium font-sans text-[var(--ink-80)] hover:text-[var(--ink)] transition-colors"
            >
              Terms of Service
            </Link>
            <span className="px-5 py-2 rounded-full text-xs font-medium font-sans bg-[var(--ink)] text-[var(--bg)] shadow-sm">
              Privacy Policy
            </span>
          </div>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-[0.14em] mb-4">
              <Shield className="w-3.5 h-3.5" />
              Privacy &amp; Data Governance
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--ink)] leading-[1.08] mb-6">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-[var(--ink-80)] font-sans leading-relaxed mb-8">
              This Privacy Policy explains how Solvantra Global collects, uses, shares and protects personal information when you visit our website, contact us, or engage us to provide business operations support services.
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
                  16 Sections
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
                  href="/terms-of-service"
                  className="flex items-center justify-between text-xs font-sans text-[var(--ink-80)] hover:text-[var(--accent)] transition-colors group"
                >
                  <span>Looking for Terms of Service?</span>
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
                This Privacy Policy explains how Solvantra Global (&ldquo;Solvantra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, shares and protects personal information when you visit our website, contact us, or engage us to provide business operations support services. By using our website or contacting us, you acknowledge that you have read this Policy.
              </p>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="scroll-mt-32 pt-6 border-t border-[var(--ink-12)] first:border-0 first:pt-0">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">01</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Who We Are
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-4">
                Solvantra Global is a business operations partner providing 24/7 call and chat support, scheduling and dispatch, claims and revenue operations, administrative support, compliance and process administration, lead management, and dedicated operational pods, primarily for Real Estate, Home Services and Healthcare businesses.
              </p>
              <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)] text-xs font-mono">
                <div>
                  <span className="text-[var(--ink-65)] uppercase tracking-wider mr-2">Contact:</span>
                  <a href="mailto:info@solvantra.global" className="text-[var(--accent)] hover:underline">
                    info@solvantra.global
                  </a>
                  <span className="mx-2 text-[var(--ink-25)]">|</span>
                  <a href="tel:+18005849271" className="text-[var(--accent)] hover:underline">
                    +1 (800) 584-9271
                  </a>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">02</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Our Role: Controller and Processor
                </h2>
              </div>
              <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                <div className="p-5 rounded-xl bg-[var(--ink-6)]/50 border border-[var(--ink-12)]">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    <UserCheck className="w-4 h-4" />
                    As a Controller
                  </div>
                  <p>
                    As a controller, we decide why and how we use personal information collected through our website, enquiries, sales conversations and business relationships.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--ink-6)]/50 border border-[var(--ink-12)]">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                    <Building className="w-4 h-4" />
                    As a Processor / Service Provider / Business Associate
                  </div>
                  <p>
                    As a processor / service provider / business associate, we handle personal information on behalf of our clients (for example, callers, tenants, patients, customers and leads of our clients) strictly on our clients&apos; documented instructions and under a written agreement. In that case, the client&apos;s own privacy notice governs the relationship with the individual, and requests should generally be directed to that client.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">03</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Information We Collect
                </h2>
              </div>
              <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-6">
                <div>
                  <strong className="text-[var(--ink)] font-semibold block mb-1">Information you give us:</strong>
                  <p>
                    When you submit our enquiry form or contact us, we collect your name, work email address, sector, and the content of your message (up to 1,000 characters on the form), plus any phone number, company name or other details you choose to share.
                  </p>
                </div>

                <div>
                  <strong className="text-[var(--ink)] font-semibold block mb-1">Information collected automatically:</strong>
                  <p>
                    We may collect technical data such as IP address, browser type, device information, pages visited, referring pages, and timestamps, using server logs and similar technologies.
                  </p>
                </div>

                <div>
                  <strong className="text-[var(--ink)] font-semibold block mb-1">Business relationship information:</strong>
                  <p>
                    Contact details, role, billing and contract information of client and prospect representatives and vendors.
                  </p>
                </div>

                <div>
                  <strong className="text-[var(--ink)] font-semibold block mb-1">Client service data (as processor):</strong>
                  <p>
                    Depending on the services, this may include caller names and contact details, call recordings and transcripts, chat logs, appointment and scheduling details, property or service-request details, and claims or billing information. For healthcare clients, this may include protected health information (PHI), which we handle only under a Business Associate Agreement (BAA) and applicable law.
                  </p>
                </div>
              </div>

              {/* Sensitive Data Notice */}
              <div className="p-4 rounded-xl bg-[var(--accent-8)] border border-[var(--accent-40)] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[var(--accent)] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--ink)] font-sans">
                  <strong>Notice:</strong> We do not knowingly collect sensitive personal information through our website. Please do not include health, financial account or government ID details in the enquiry form.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">04</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  How We Use Information
                </h2>
              </div>
              <ul className="space-y-3 text-[15px] sm:text-base text-[var(--ink-80)] font-sans">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Respond to enquiries, book consultations and prepare proposals;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Deliver, staff, supervise, train and quality-assure our services;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Operate inside client systems (CRMs, ticketing, scheduling tools) as instructed;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Maintain audit-ready records, SLA reporting and compliance administration;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Administer contracts, invoicing and customer relationships;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Secure, maintain and improve our website, systems and services;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Comply with legal obligations and enforce our agreements;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span>Send service or business communications related to your enquiry or contract. We send marketing only where permitted by law, and you can opt out at any time.</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">05</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Legal Bases (UK/EU GDPR)
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-4">
                Where UK or EU data protection law applies, we rely on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">
                    Contract
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-80)] leading-relaxed">
                    To take steps at your request or perform an agreement.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">
                    Legitimate Interests
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-80)] leading-relaxed">
                    Running and securing our business, responding to enquiries, direct B2B communications, balanced against your rights.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">
                    Legal Obligation
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-80)] leading-relaxed">
                    Compliance with statutory, tax, regulatory, or judicial requirements.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">
                    Consent
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-80)] leading-relaxed">
                    Where required by law (for example, certain non-essential cookies or specific marketing requests).
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">06</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  How We Share Information
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-4">
                <strong className="text-[var(--ink)] font-semibold">We do not sell personal information</strong>, and we do not share it for cross-context behavioral advertising. We share information only with:
              </p>
              <ul className="space-y-3 text-[15px] sm:text-base text-[var(--ink-80)] font-sans">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span><strong className="text-[var(--ink)] font-medium">Clients:</strong> where we process data on their behalf;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span><strong className="text-[var(--ink)] font-medium">Service providers:</strong> that support us, such as hosting, email, telephony, CRM, analytics, security, and communications providers, bound by confidentiality and data protection terms;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span><strong className="text-[var(--ink)] font-medium">Professional advisers:</strong> (legal, accounting, insurance) where necessary;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span><strong className="text-[var(--ink)] font-medium">Authorities:</strong> where required by law, regulation, court order, or to protect rights, safety and security;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2.5 shrink-0" />
                  <span><strong className="text-[var(--ink)] font-medium">Successors:</strong> in connection with a merger, acquisition, financing or sale of assets, subject to this Policy.</span>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">07</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Healthcare Information and HIPAA
                </h2>
              </div>
              <div className="p-6 rounded-2xl bg-[var(--ink-6)]/50 border border-[var(--ink-12)] space-y-3">
                <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                  Where we handle PHI for covered entities or their business associates, we do so only as a business associate under a signed BAA, apply role-based access controls, and use or disclose PHI only as permitted by that agreement and HIPAA.
                </p>
                <p className="text-xs sm:text-sm text-[var(--ink-65)] font-sans">
                  Healthcare clients&apos; patients should direct privacy requests to the relevant healthcare provider.
                </p>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">08</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  International Data Transfers
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                We operate a follow-the-sun model with teams and systems that may be located in different countries, including India, the United States, the United Kingdom and elsewhere. Your information may therefore be transferred to and processed in countries whose data protection laws differ from yours. Where required, we use appropriate safeguards such as Standard Contractual Clauses, the UK International Data Transfer Addendum, or equivalent mechanisms.
              </p>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">09</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Cookies and Similar Technologies
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Our website may use essential cookies needed for the site to function and, where enabled, analytics cookies to understand site usage. Where required by law, we will ask for your consent before using non-essential cookies. You can control cookies through your browser settings; blocking some cookies may affect site functionality.
              </p>
            </section>

            {/* Section 10 */}
            <section id="section-10" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">10</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Data Retention
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-3">
                We keep personal information only as long as needed for the purposes described in this Policy. Enquiry data is generally kept for up to <strong className="text-[var(--ink)] font-medium">[24] months</strong> after our last interaction unless a contract follows.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Client service data is retained as set out in the client agreement and returned or deleted at the client&apos;s direction, subject to legal retention requirements. Records may be kept longer where required for legal, tax, audit or dispute purposes.
              </p>
            </section>

            {/* Section 11 */}
            <section id="section-11" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">11</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Security
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-3">
                We use administrative, technical and physical safeguards appropriate to the risk, including role-based access controls, confidentiality obligations for staff, access logging, and training.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                No method of transmission or storage is completely secure, and we cannot guarantee absolute security. If we become aware of a breach affecting your information, we will notify affected parties and regulators as required by law.
              </p>
            </section>

            {/* Section 12 */}
            <section id="section-12" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">12</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Your Privacy Rights
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans mb-4">
                Depending on where you live, you may have the right to access, correct, delete, restrict or object to processing of your personal information, to data portability, to withdraw consent, and to lodge a complaint with a supervisory authority.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">
                    UK / EU
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-80)] leading-relaxed">
                    Rights under the UK GDPR / EU GDPR, including the right to complain to the ICO or your local authority.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">
                    California and other US states
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-80)] leading-relaxed">
                    Rights to know, access, correct, delete, and opt out of sale/sharing (we do not sell or share personal information), and not to be discriminated against for exercising rights.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--ink-6)] border border-[var(--ink-12)]">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] font-semibold mb-1">
                    India
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ink-80)] leading-relaxed">
                    Rights under the Digital Personal Data Protection Act, 2023, including access, correction, erasure and grievance redressal.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[var(--accent-8)] border border-[var(--accent-40)]">
                <p className="text-xs sm:text-sm text-[var(--ink)] font-sans leading-relaxed">
                  To exercise a right, email{" "}
                  <a href="mailto:info@solvantra.global" className="font-semibold underline hover:text-[var(--accent)]">
                    info@solvantra.global
                  </a>
                  . We may need to verify your identity and will respond within the time required by law. If your data is held by us as a processor, we will refer your request to the relevant client.
                </p>
              </div>
            </section>

            {/* Section 13 */}
            <section id="section-13" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">13</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Children&apos;s Privacy
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Our website and services are intended for businesses and are not directed to children under 16. We do not knowingly collect personal information from children through our website. If you believe a child has provided us information, contact us and we will delete it.
              </p>
            </section>

            {/* Section 14 */}
            <section id="section-14" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">14</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Third-Party Links
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                Our website may link to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies.
              </p>
            </section>

            {/* Section 15 */}
            <section id="section-15" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">15</span>
                <h2 className="text-2xl sm:text-3xl font-serif text-[var(--ink)] font-normal tracking-tight">
                  Changes to This Policy
                </h2>
              </div>
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-80)] font-sans">
                We may update this Policy from time to time. The updated version will be posted on this page with a new effective date. Material changes will be highlighted where appropriate.
              </p>
            </section>

            {/* Section 16: Contact Us */}
            <section id="section-16" className="scroll-mt-32 pt-10 border-t border-[var(--ink-12)]">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="font-mono text-sm text-[var(--accent)] font-semibold">16</span>
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
                    Questions or requests about this Policy or our data practices:
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
                        Email Contact
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
                        Phone Contact
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
