"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // If navigating to the same route, do not animate
    if (prevPathRef.current === pathname) {
      setDisplayChildren(children);
      return;
    }

    prevPathRef.current = pathname;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setDisplayChildren(children);
      if (!window.location.hash) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      return;
    }

    // Scroll to top on route change if no hash
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    setDisplayChildren(children);
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 280);

    return () => clearTimeout(timer);
  }, [pathname, children]);

  return (
    <div
      key={pathname}
      className={`w-full ${isTransitioning ? "page-transition-enter" : ""}`}
    >
      {displayChildren}
    </div>
  );
}
