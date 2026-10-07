"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  MessageSquare,
  Calendar,
  FileCheck,
  ClipboardList,
  ShieldCheck,
  Filter,
  UserCheck,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { CORE_SERVICES } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  "call-support": PhoneCall,
  "chat-email": MessageSquare,
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => {
            const IconComponent = iconMap[service.id] || PhoneCall;
            return (
              <div
                key={service.id}
                className="group p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-headline-sm text-xl text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body-sm text-xs text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="font-eyebrow text-xs text-primary tracking-wider uppercase flex items-center gap-1 group-hover:underline pt-2"
                >
                  <span>Explore</span>
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
