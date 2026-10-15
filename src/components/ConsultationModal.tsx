"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, ArrowRight, Calendar, User, Mail, Phone, Building2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({
  isOpen,
  onClose,
  defaultService = "General Inquiry",
}: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    serviceNeeded: defaultService,
    timeline: "Immediate (Within 30 Days)",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(51,36,25,0.7)] backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[var(--bg)] rounded-[12px] shadow-2xl border border-[var(--ink-12)] overflow-hidden">
        {/* Header */}
        <div className="bg-[var(--bg)] px-6 py-5 border-b border-[var(--ink-12)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[8px] bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-[20px] font-medium text-[var(--ink)] leading-snug">
                Book an Executive Consultation
              </h3>
              <p className="text-[14px] text-[var(--ink-65)]">
                Tailored operational assessment with a Solvantra Solutions Architect
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--ink-65)] hover:text-[var(--ink)] rounded-[8px] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[var(--accent-14)] flex items-center justify-center text-[var(--accent)] mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-[24px] font-medium text-[var(--ink)] mb-2">
                Consultation Request Confirmed
              </h4>
              <p className="text-[15px] text-[var(--ink-80)] max-w-md mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-[var(--ink)]">{formData.fullName || "valued client"}</span>. Our operations team is reviewing your requirements and will reach out to confirm your session.
              </p>
              <div className="p-4 bg-[var(--bg)] rounded-[8px] text-left w-full max-w-md mb-6 border border-[var(--ink-12)] space-y-2">
                <div className="flex items-center gap-2 text-[14px] font-semibold text-[var(--ink)]">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" /> Confidentiality Guaranteed
                </div>
                <p className="text-[14px] text-[var(--ink-65)]">
                  Your enterprise details remain strictly protected under Solvantra Tier-1 NDA protocols.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="btn-solvantra-primary h-[40px] px-6 text-[14px] cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[var(--ink)] mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-[var(--ink-65)]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[var(--bg)] border border-[var(--ink-25)] rounded-[8px] focus:border-[var(--accent)] focus:outline-none text-[14px] text-[var(--ink)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[var(--ink)] mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-[var(--ink-65)]" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[var(--bg)] border border-[var(--ink-25)] rounded-[8px] focus:border-[var(--accent)] focus:outline-none text-[14px] text-[var(--ink)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[var(--ink)] mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-[var(--ink-65)]" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[var(--bg)] border border-[var(--ink-25)] rounded-[8px] focus:border-[var(--accent)] focus:outline-none text-[14px] text-[var(--ink)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[var(--ink)] mb-1">
                    Organization / Company *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-3 text-[var(--ink-65)]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vance Global Capital"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-[var(--bg)] border border-[var(--ink-25)] rounded-[8px] focus:border-[var(--accent)] focus:outline-none text-[14px] text-[var(--ink)]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[14px] font-medium text-[var(--ink)] mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--ink-25)] rounded-[8px] focus:border-[var(--accent)] focus:outline-none text-[14px] text-[var(--ink)]"
                  >
                    <option value="Real Estate">Real Estate</option>
                    <option value="Home Services">Home Services</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="24/7 Call & Chat Support">24/7 Call & Chat Support</option>
                    <option value="Intelligent Scheduling & Dispatch">Intelligent Scheduling & Dispatch</option>
                    <option value="Claims & Revenue Operations">Claims & Revenue Operations</option>
                    <option value="Administrative Support">Administrative Support</option>
                    <option value="Compliance & Process Admin">Compliance & Process Admin</option>
                    <option value="Lead Management & Follow-Up">Lead Management & Follow-Up</option>
                    <option value="Dedicated Operational Pods">Dedicated Operational Pods</option>
                    <option value="Custom Operational Solution">Custom Operational Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] font-medium text-[var(--ink)] mb-1">
                    Desired Deployment Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2 bg-[var(--bg)] border border-[var(--ink-25)] rounded-[8px] focus:border-[var(--accent)] focus:outline-none text-[14px] text-[var(--ink)]"
                  >
                    <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                    <option value="Next Quarter (1-3 Months)">Next Quarter (1-3 Months)</option>
                    <option value="Exploratory Evaluation">Exploratory Evaluation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[14px] font-medium text-[var(--ink)] mb-1">
                  Workflow Requirements / Team Size Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current volume, team size requirements, or key operational challenges..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-[var(--bg)] border border-[var(--ink-25)] rounded-[8px] focus:border-[var(--accent)] focus:outline-none text-[14px] text-[var(--ink)]"
                ></textarea>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[var(--ink-12)] mt-4">
                <span className="text-[14px] text-[var(--ink-65)] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" /> SOC-2 & HIPAA Protocol Ready
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-solvantra-secondary h-[40px] px-4 text-[14px] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn-solvantra-primary h-[40px] px-6 text-[14px] inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4" />
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
