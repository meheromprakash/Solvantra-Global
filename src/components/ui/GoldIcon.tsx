import React from "react";
import { LucideIcon } from "lucide-react";

interface GoldIconProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GoldIcon({
  icon: IconComponent,
  size = "md",
  className = "",
}: GoldIconProps) {
  const containerSizes = {
    sm: "w-10 h-10",
    md: "w-12 h-12",
    lg: "w-14 h-14",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  return (
    <div
      className={`${containerSizes[size]} rounded-full bg-primary-fixed flex items-center justify-center text-primary shadow-sm border border-outline-variant/30 ${className}`}
    >
      <IconComponent className={iconSizes[size]} />
    </div>
  );
}
