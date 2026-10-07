import React from "react";

interface CardProps {
  variant?: "light" | "dark" | "flat";
  className?: string;
  children: React.ReactNode;
}

export default function Card({
  variant = "light",
  className = "",
  children,
}: CardProps) {
  const baseStyles = "rounded-xl border transition-all duration-300";

  const variants = {
    light:
      "bg-surface-container-lowest border-outline-variant/30 shadow-sm hover:shadow-xl",
    dark:
      "bg-inverse-surface/60 border-primary-container/20 text-surface-bright shadow-lg backdrop-blur-sm",
    flat: "bg-surface-container-low border-outline-variant/20 shadow-none",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
