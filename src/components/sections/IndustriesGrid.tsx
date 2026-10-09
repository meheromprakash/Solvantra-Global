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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {INDUSTRIES_LIST.map((ind) => {
            const IconComp = iconMap[ind.id] || HeartPulse;
            return (
              <div
                key={ind.id}
                className="rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  <div className="relative w-full h-40 overflow-hidden bg-surface-container">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-ink/80 via-transparent to-transparent p-3 flex items-end justify-between">
                      <span className="font-eyebrow text-[10px] px-2.5 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-bold shadow border border-outline-variant/30">
                        {ind.metrics}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary shrink-0">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="font-headline-sm text-lg text-on-surface line-clamp-1">
                        {ind.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-xs text-secondary leading-relaxed line-clamp-3 mb-4">
                      {ind.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <Link
                    href="/industries"
                    className="font-eyebrow text-xs text-primary tracking-wider uppercase flex items-center gap-1 group-hover:underline"
                  >
                    <span>Explore Pod</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
