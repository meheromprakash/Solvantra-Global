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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-secondary-fixed/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-2xl border border-outline-variant/30 overflow-hidden">
        {/* Header */}
        <div className="bg-surface-container-low px-6 py-5 border-b border-outline-variant/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-sm text-lg text-on-surface">Book an Executive Consultation</h3>
              <p className="font-body-sm text-xs text-secondary">
                Tailored operational assessment with a Solvantra Solutions Architect
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-secondary hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-4 shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-headline-md text-2xl text-on-surface mb-2">
                Consultation Request Confirmed
              </h4>
              <p className="font-body-md text-secondary max-w-md mb-6 leading-relaxed">
                Thank you, <span className="font-semibold text-on-surface">{formData.fullName || "valued client"}</span>. Our operations team is reviewing your requirements and will reach out within <span className="font-bold text-primary">2 business hours</span> to confirm your session.
              </p>
              <div className="p-4 bg-surface-container-low rounded-lg text-left w-full max-w-md mb-6 border border-outline-variant/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-eyebrow text-primary">
                  <ShieldCheck className="w-4 h-4" /> Confidentiality Guaranteed
                </div>
                <p className="text-xs text-secondary">
                  Your enterprise details remain strictly protected under Solvantra Tier-1 NDA protocols.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-primary-container text-on-primary font-label-md rounded hover:bg-primary transition-colors inline-flex items-center gap-2"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-xs text-on-surface mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-secondary" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-xs text-on-surface mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-secondary" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-xs text-on-surface mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-secondary" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-label-md text-xs text-on-surface mb-1">
                    Organization / Company *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-3 text-secondary" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vance Global Capital"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-md text-xs text-on-surface mb-1">
                    Primary Service Focus
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3 py-2 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                  >
                    <option value="24/7 Call Support">24/7 Call Support</option>
                    <option value="Chat & Email Support">Chat & Email Support</option>
                    <option value="AI Scheduling">AI Scheduling & Workflows</option>
                    <option value="Claims & AR Support">Claims & AR Support</option>
                    <option value="Administrative Support">Administrative Support</option>
                    <option value="Compliance & Process Support">Compliance & Process Support</option>
                    <option value="Lead Management">Lead Management</option>
                    <option value="Virtual Staffing">Virtual Dedicated Staffing</option>
                    <option value="Full Custom Operational Pod">Full Custom Operational Pod</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-xs text-on-surface mb-1">
                    Desired Deployment Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                  >
                    <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                    <option value="Next Quarter (1-3 Months)">Next Quarter (1-3 Months)</option>
                    <option value="Exploratory Evaluation">Exploratory Evaluation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-label-md text-xs text-on-surface mb-1">
                  Workflow Requirements / Team Size Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe your current volume, team size requirements, or key operational challenges..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full p-3 bg-surface border border-outline-variant/40 rounded focus:border-primary focus:outline-none text-sm text-on-surface"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-outline-variant/20 mt-4">
                <span className="font-eyebrow text-[10px] text-primary flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> SOC-2 & HIPAA Protocol Ready
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-label-md text-secondary hover:text-on-surface transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary font-label-md text-sm rounded shadow hover:opacity-95 transition-all inline-flex items-center gap-2"
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
