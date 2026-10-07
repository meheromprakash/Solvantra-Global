import React from "react";
import { Headphones, Users, Cpu, TrendingUp } from "lucide-react";

export default function TrustStrip() {
  const items = [
    { icon: Headphones, title: "24/7", subtitle: "Dedicated Support" },
    { icon: Users, title: "Dedicated", subtitle: "Vetted Teams" },
    { icon: Cpu, title: "AI-Enabled", subtitle: "Precision Operations" },
    { icon: TrendingUp, title: "Scalable", subtitle: "Flexible Solutions" },
  ];

  return (
    <section className="w-full bg-surface-container-low py-10 border-y border-outline-variant/20">
      <div className="max-w-[1240px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-4 rounded-xl bg-surface-container-lowest/50 hover:bg-surface-container-lowest transition-all duration-200 border border-outline-variant/20"
              >
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary mb-3 shadow-sm border border-outline-variant/30">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="font-headline-sm text-xl text-on-surface mb-0.5">
                  {item.title}
                </span>
                <span className="font-body-sm text-xs text-secondary font-medium">
                  {item.subtitle}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
