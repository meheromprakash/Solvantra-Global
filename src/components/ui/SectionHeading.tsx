import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl mb-12 ${alignments[align]} ${className}`}>
      {eyebrow && (
        <span
          className={`font-eyebrow text-xs tracking-[0.14em] uppercase block mb-2 ${
            dark ? "text-primary-fixed" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-headline-lg text-3xl sm:text-4xl leading-tight ${
          dark ? "text-surface-bright" : "text-on-surface"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body-lg text-base sm:text-lg mt-3 leading-relaxed ${
            dark ? "text-secondary-fixed-dim" : "text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
