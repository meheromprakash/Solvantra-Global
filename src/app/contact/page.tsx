"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Globe2,
} from "lucide-react";

import PageHero from "@/components/sections/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "24/7 Call Support",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* HERO */}
      <PageHero
        bgImage="/images/hero_operations_team.jpg"
        bgAlt="Solvantra Global Operations Desk"
        eyebrow="GLOBAL OPERATIONS DESK"
        headingMain="Connect With Our"
        headingGold="Operational Leadership."
        paragraph="Have questions about staffing, SLA guarantees, security compliance, or custom workflows? We are ready to assist."
        primaryButton={{
          label: "Book a Consultation",
          isModalTrigger: true,
        }}
        secondaryButton={{
          label: "Request Custom Proposal",
          href: "#contact-form",
        }}
      />

      {/* FORM & GLOBAL NODES GRID */}
      <section id="contact-form" className="w-full bg-surface py-20 scroll-mt-20">
        <div className="max-w-[1240px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-10 rounded-xl border border-outline-variant/30 shadow-xl">
              <h2 className="font-headline-sm text-2xl text-on-surface mb-2">
                Request a Custom Operational Proposal
              </h2>
              <p className="font-body-sm text-xs text-secondary mb-6">
                Complete the inquiry form below. An operations architect will respond within 2 business hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-headline-md text-2xl text-on-surface mb-2">
                    Inquiry Received
                  </h3>
                  <p className="font-body-md text-sm text-secondary max-w-md mb-6 leading-relaxed">
                    Thank you, <span className="font-semibold text-on-surface">{formData.name}</span>. Your details have been routed to our global solutions team. We will reach out shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-primary-container text-on-primary font-label-md text-xs rounded hover:bg-primary transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-xs text-on-surface mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Eleanor Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-xs text-on-surface mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-label-md text-xs text-on-surface mb-1">
                        Organization / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Vance Global Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3 py-2.5 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                      />
                    </div>
                    <div>
                      <label className="block font-label-md text-xs text-on-surface mb-1">
                        Service Category
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-2.5 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                      >
                        <option value="24/7 Call Support">24/7 Call Support</option>
                        <option value="Chat & Email Support">Chat &amp; Email Support</option>
                        <option value="AI Scheduling">AI Scheduling</option>
                        <option value="Claims & AR Support">Claims &amp; AR Support</option>
                        <option value="Administrative Support">Administrative Support</option>
                        <option value="Compliance & Process Support">Compliance &amp; Process Support</option>
                        <option value="Lead Management">Lead Management</option>
                        <option value="Virtual Staffing">Virtual Staffing</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-label-md text-xs text-on-surface mb-1">
                      Project / Workflow Summary
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline your current operational volume, desired SLAs, or specific team requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                    ></textarea>
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-outline-variant/20 mt-4">
                    <span className="font-eyebrow text-[10px] text-primary flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> NDA Protected Inquiry
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary font-label-md text-xs rounded shadow hover:opacity-95 transition-all inline-flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
                    >
                      <span>Submit Proposal Request</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Global Nodes & Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-on-secondary-fixed text-surface-bright p-8 rounded-xl border border-primary-container/30 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-lg text-surface-bright">
                      Global Command Desk
                    </h3>
                    <span className="font-eyebrow text-[10px] text-primary-fixed">
                      Active 24/7/365
                    </span>
                  </div>
                </div>

                <div className="space-y-4 pt-2 border-t border-outline-variant/20">
                  <div className="flex items-start gap-3 text-xs">
                    <Mail className="w-4 h-4 text-primary-fixed shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-surface-bright">Direct Operations Email</span>
                      <a href="mailto:solutions@solvantra.com" className="text-secondary-fixed-dim hover:text-primary-fixed">
                        solutions@solvantra.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs">
                    <Phone className="w-4 h-4 text-primary-fixed shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-surface-bright">Global Client Desk</span>
                      <span className="text-secondary-fixed-dim">+1 (800) 584-9271</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs">
                    <Clock className="w-4 h-4 text-primary-fixed shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-surface-bright">Operational Hours</span>
                      <span className="text-secondary-fixed-dim">Follow-the-Sun Continuous (US / EMEA / APAC)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regional Office Cards */}
              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 space-y-4">
                <h4 className="font-eyebrow text-xs text-primary uppercase tracking-wider">
                  Regional Command Hubs
                </h4>

                <div className="space-y-3 font-body-sm text-xs text-secondary">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-on-surface block">North America Operations</span>
                      <span>100 Park Avenue, Suite 2400, New York, NY 10017</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-outline-variant/20">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-on-surface block">EMEA &amp; APAC Delivery Hubs</span>
                      <span>London Operations Center &amp; Regional Delivery Pods</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
