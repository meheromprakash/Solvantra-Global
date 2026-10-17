"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Page Visibility API: pause/resume animations when tab is backgrounded
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.documentElement.classList.add("page-hidden");
      } else {
        document.documentElement.classList.remove("page-hidden");
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // 2. Setup reusable IntersectionObserver for scroll reveals
    if (!prefersReducedMotion) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.add("is-revealed");
              observerRef.current?.unobserve(el);

              // Clean up will-change after animation finishes (500ms + buffer)
              setTimeout(() => {
                el.style.willChange = "auto";
              }, 600);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -40px 0px",
        }
      );
    }

    // Function to scan and bind reveals on current page
    const scanReveals = () => {
      if (prefersReducedMotion) return;

      const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
      const viewportHeight = window.innerHeight;

      elements.forEach((el) => {
        // If already revealed, skip
        if (el.classList.contains("is-revealed")) return;

        const rect = el.getBoundingClientRect();

        // Above the fold or already in view on first paint: reveal immediately without delay
        if (rect.top < viewportHeight * 0.85) {
          el.classList.add("is-revealed");
        } else {
          // Below the fold: initialize reveal styles and observe
          el.classList.add("reveal-init");
          observerRef.current?.observe(el);
        }
      });
    };

    // Scan on mount and slightly after for any dynamically rendered children
    scanReveals();
    const scanTimer = setTimeout(scanReveals, 100);

    // 2-second failsafe: guarantee all content is visible if observer has not fired
    const failsafeTimer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>(".reveal-init:not(.is-revealed)").forEach((el) => {
        el.classList.add("is-revealed");
        el.style.willChange = "auto";
      });
    }, 2000);

    // 3. Handle hash navigation smoothly after route change / page mount
    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          target.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
        }
      }, 120);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.classList.remove("page-hidden");
      observerRef.current?.disconnect();
      clearTimeout(scanTimer);
      clearTimeout(failsafeTimer);
    };
  }, [pathname]);

  return <>{children}</>;
}
