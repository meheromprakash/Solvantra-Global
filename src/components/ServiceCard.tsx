import React from "react";
import Link from "next/link";
import { ChevronRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  badgeText?: string;
}

export default function ServiceCard({
  icon: IconComponent,
  title,
  description,
  href = "/services",
  badgeText,
}: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-on-primary transition-colors shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>
          {badgeText && (
            <span className="font-eyebrow text-[10px] px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container">
              {badgeText}
            </span>
          )}
        </div>
        <h3 className="font-headline-sm text-xl text-on-surface mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="font-body-sm text-xs text-secondary leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <Link
        href={href}
        className="font-eyebrow text-xs text-primary tracking-wider uppercase flex items-center gap-1 group-hover:underline pt-2"
      >
        <span>Explore</span>
        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
