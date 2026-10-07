import React from "react";
import Link from "next/link";
import {
  HeartPulse,
  Truck,
  Landmark,
  ShoppingBag,
  Code2,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { INDUSTRIES_LIST } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  healthcare: HeartPulse,
  logistics: Truck,
  finance: Landmark,
  retail: ShoppingBag,
  tech: Code2,
};

export default function IndustriesGrid() {
  return (
    <section className="w-full bg-surface py-24">
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <SectionHeading
          eyebrow="Domain Specialization"
          title="Tailored Solutions Across Industries"
          subtitle="Every sector demands specialized domain knowledge, compliance standards, and workflow protocols. Solvantra builds dedicated operational pods configured for your specific industry."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_LIST.map((ind) => {
            const IconComp = iconMap[ind.id] || HeartPulse;
            return (
              <div
                key={ind.id}
                className="p-8 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-eyebrow text-[10px] px-3 py-1 rounded bg-surface-container text-primary font-bold">
                      {ind.metrics}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-xl text-on-surface mb-3">
                    {ind.title}
                  </h3>
                  <p className="font-body-sm text-xs text-secondary leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>
                <Link
                  href="/industries"
                  className="font-eyebrow text-xs text-primary tracking-wider uppercase flex items-center gap-1 hover:underline pt-2"
                >
                  <span>View Industry Pod</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
