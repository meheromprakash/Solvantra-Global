import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "link";
  size?: "sm" | "md" | "lg";
  href?: string;
  showChevron?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  showChevron = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-label-md rounded transition-all duration-200 group cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary-container to-tertiary-container text-on-primary shadow-md hover:opacity-95",
    secondary:
      "bg-surface-container-lowest text-on-secondary-fixed border border-outline-variant/30 shadow-sm hover:bg-surface-container",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary-container hover:text-on-primary",
    link: "bg-transparent text-primary hover:text-tertiary-container p-0",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${
    variant !== "link" ? sizes[size] : ""
  } ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showChevron && (
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {content}
    </button>
  );
}
