"use client";

import React from "react";
import Link from "next/link";
import {
  Headset,
  Calendar,
  FileCheck,
  ClipboardList,
  ShieldCheck,
  Filter,
  UserCheck,
  ChevronRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { CORE_SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  "call-chat-support": Headset,
  "ai-scheduling": Calendar,
  "claims-ar": FileCheck,
  "admin-support": ClipboardList,
  compliance: ShieldCheck,
  "lead-mgmt": Filter,
  "virtual-staffing": UserCheck,
};

export default function ServicesGrid() {
  return (
    <section className="w-full bg-surface-container-low py-24 border-t border-outline-variant/20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <SectionHeading
            eyebrow="Our Services"
            title="Our Core Services"
            subtitle="Comprehensive operational support designed for modern businesses."
            className="mb-0"
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-label-md text-sm text-primary hover:text-tertiary-container transition-colors group shrink-0"
          >
            <span>View All Services</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => {
            const IconComponent = iconMap[service.id] || Headset;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary-container/40 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-11 h-11 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary group-hover:scale-105 transition-all duration-300 shadow-sm shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    {service.sla && (
                      <span className="font-eyebrow text-[10px] px-2.5 py-1 rounded-full bg-surface-container text-primary font-semibold border border-outline-variant/30 text-right truncate max-w-[170px]">
                        {service.sla}
                      </span>
                    )}
                  </div>

                  <h3 className="font-headline-sm text-xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-body-sm text-xs text-secondary leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {service.deliverables && service.deliverables.length > 0 && (
                    <div className="space-y-1.5 pt-3 border-t border-outline-variant/20 mb-4">
                      {service.deliverables.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-on-surface-variant">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/services"
                  className="font-eyebrow text-xs text-primary tracking-wider uppercase flex items-center gap-1 group-hover:underline pt-3 border-t border-outline-variant/20"
                >
                  <span>Explore Service</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
