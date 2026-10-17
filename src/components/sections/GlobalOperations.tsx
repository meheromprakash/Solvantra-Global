"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import { GLOBAL_STATS, CORE_SERVICES } from "@/lib/constants";

// Generate clean dot-matrix world map coordinates within SVG viewBox 1000 x 500
function generateWorldDots() {
  const CONTINENT_REGIONS = [
    // North America
    { minX: 60, maxX: 160, minY: 60, maxY: 140 }, // Alaska / NW Canada
    { minX: 140, maxX: 340, minY: 60, maxY: 160 }, // Canada / Northern US
    { minX: 130, maxX: 300, minY: 150, maxY: 230 }, // USA
    { minX: 160, maxX: 240, minY: 230, maxY: 300 }, // Mexico / Central America
    { minX: 250, maxX: 330, minY: 30, maxY: 100 }, // Greenland

    // South America
    { minX: 230, maxX: 320, minY: 280, maxY: 340 }, // Colombia / Venezuela / N. Brazil
    { minX: 250, maxX: 360, minY: 320, maxY: 420 }, // Brazil
    { minX: 220, maxX: 280, minY: 320, maxY: 460 }, // Andes / Chile / Peru
    { minX: 260, maxX: 320, minY: 400, maxY: 480 }, // Argentina / Southern cone

    // Europe
    { minX: 430, maxX: 470, minY: 100, maxY: 160 }, // UK & Ireland
    { minX: 480, maxX: 560, minY: 60, maxY: 130 }, // Scandinavia
    { minX: 460, maxX: 560, minY: 130, maxY: 200 }, // Central & Western Europe
    { minX: 520, maxX: 630, minY: 90, maxY: 200 }, // Eastern Europe

    // Africa
    { minX: 440, maxX: 610, minY: 200, maxY: 280 }, // North Africa & Sahara
    { minX: 420, maxX: 520, minY: 270, maxY: 350 }, // West Africa
    { minX: 500, maxX: 630, minY: 270, maxY: 370 }, // Central & East Africa
    { minX: 510, maxX: 600, minY: 370, maxY: 460 }, // Southern Africa
    { minX: 620, maxX: 650, minY: 370, maxY: 430 }, // Madagascar

    // Asia
    { minX: 600, maxX: 920, minY: 60, maxY: 160 }, // Russia / Siberia
    { minX: 570, maxX: 660, minY: 190, maxY: 260 }, // Middle East
    { minX: 630, maxX: 750, minY: 140, maxY: 230 }, // Central Asia
    { minX: 650, maxX: 740, minY: 220, maxY: 330 }, // India & Pakistan
    { minX: 720, maxX: 880, minY: 150, maxY: 270 }, // China & East Asia
    { minX: 840, maxX: 900, minY: 160, maxY: 240 }, // Japan / Korea
    { minX: 740, maxX: 860, minY: 270, maxY: 370 }, // SE Asia / Indonesia / Philippines

    // Australia & Oceania
    { minX: 770, maxX: 910, minY: 360, maxY: 460 }, // Australia
    { minX: 910, maxX: 960, minY: 420, maxY: 480 }, // New Zealand
  ];

  const dots: { cx: number; cy: number }[] = [];
  const step = 18;

  for (let x = 40; x <= 960; x += step) {
    for (let y = 40; y <= 470; y += step) {
      const isInside = CONTINENT_REGIONS.some(
        (reg) => x >= reg.minX && x <= reg.maxX && y >= reg.minY && y <= reg.maxY
      );
      if (isInside) {
        dots.push({ cx: x, cy: y });
      }
    }
  }

  return dots;
}

const SERVICE_NAMES = CORE_SERVICES.map((s) => s.title);

export default function GlobalOperations() {
  const [isVisible, setIsVisible] = useState(false);
  const [stat1, setStat1] = useState("24/7");
  const [stat2, setStat2] = useState("100%");
  const [stat3, setStat3] = useState("3");

  const [isSectionInView, setIsSectionInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  // Pre-generate SVG dots once
  const worldDots = useMemo(() => generateWorldDots(), []);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      setIsSectionInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionInView(entry.isIntersecting);

        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          setIsVisible(true);

          // Reset start values for smooth count-up once element is visible
          setStat1("");
          setStat2("0%");
          setStat3("0");

          // 1. Stat 1 ("24/7"): character by character typing
          const text1 = "24/7";
          let charIdx = 0;
          const typeInterval = setInterval(() => {
            charIdx++;
            setStat1(text1.slice(0, charIdx));
            if (charIdx >= text1.length) {
              clearInterval(typeInterval);
            }
          }, 140);

          // 2. Stat 2 ("100%"): count-up from 0 to 100
          const duration2 = 1200;
          const startTime2 = performance.now();
          const animateCount2 = (currentTime: number) => {
            const elapsed = currentTime - startTime2;
            const progress = Math.min(elapsed / duration2, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(eased * 100);
            setStat2(`${currentVal}%`);
            if (progress < 1) {
              requestAnimationFrame(animateCount2);
            }
          };
          requestAnimationFrame(animateCount2);

          // 3. Stat 3 ("3"): count-up from 0 to 3
          const duration3 = 900;
          const startTime3 = performance.now();
          const animateCount3 = (currentTime: number) => {
            const elapsed = currentTime - startTime3;
            const progress = Math.min(elapsed / duration3, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(eased * 3);
            setStat3(`${currentVal}`);
            if (progress < 1) {
              requestAnimationFrame(animateCount3);
            }
          };
          requestAnimationFrame(animateCount3);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statValues = [stat1, stat2, stat3];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--ink)] py-16 md:py-24 border-b border-[rgba(185,138,62,0.25)] overflow-hidden"
    >
      {/* SVG Dot-Matrix World Map: small circles, bg at 10% opacity, fading at edges */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 1000 500"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            {/* Radial mask that fades dots out smoothly at outer edges */}
            <radialGradient
              id="worldMapFade"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="35%" stopColor="white" stopOpacity="1" />
              <stop offset="75%" stopColor="white" stopOpacity="0.45" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="mapMask">
              <rect width="1000" height="500" fill="url(#worldMapFade)" />
            </mask>
          </defs>

          <g mask="url(#mapMask)">
            {worldDots.map((dot, idx) => (
              <circle
                key={idx}
                cx={dot.cx}
                cy={dot.cy}
                r="2.2"
                fill="var(--bg)"
                opacity="0.10"
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Asymmetrical 12-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--bg-70)]">
              <span className="text-[var(--accent)] font-bold">//</span>
              <span>SCALE</span>
            </div>
          </div>
          <div className="lg:col-span-9">
            {/* Left-aligned heading in bg color, no italic */}
            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--bg)] max-w-[760px]">
              Built for Today. Ready for What&apos;s Next.
            </h2>
          </div>
        </div>

        {/* 3 Columns separated by vertical hairlines (bg at 15%) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[var(--bg-15)]">
          {GLOBAL_STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-start py-8 md:py-12 ${
                idx === 0
                  ? "md:pr-8 lg:pr-12"
                  : idx === 1
                  ? "md:px-8 lg:px-12 border-t md:border-t-0 md:border-l border-[var(--bg-15)]"
                  : "md:pl-8 lg:pl-12 border-t md:border-t-0 md:border-l border-[var(--bg-15)]"
              }`}
            >
              {/* Three numbers: 120px serif in accent with count-up animation */}
              <div className="text-[76px] sm:text-[96px] lg:text-[120px] font-serif font-normal text-[var(--accent)] leading-none tracking-tight mb-4 select-none min-h-[1.1em] flex items-baseline">
                {statValues[idx] || "\u00A0"}
              </div>

              {/* Label: 22px bg */}
              <h3 className="text-[20px] lg:text-[22px] font-serif font-medium text-[var(--bg)] mb-2 leading-snug">
                {stat.label}
              </h3>

              {/* Supporting Line: 15px bg at 70% */}
              <p className="text-[15px] leading-[1.65] text-[var(--bg-70)] max-w-sm font-sans">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Infinite slow marquee of the 7 service names in mono caps (bg at 50%), separated by accent diamonds */}
        <div className="mt-14 md:mt-20 pt-8 pb-3 border-t border-[var(--bg-15)] relative overflow-hidden marquee-container">
          {/* Subtle gradient fades on left & right edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--ink)] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--ink)] to-transparent z-10" />

          {/* Marquee Track (loops twice for seamless infinite scroll, pauses on hover or offscreen) */}
          <div
            className="animate-marquee-slow flex items-center"
            style={{
              animationPlayState: isSectionInView ? "running" : "paused",
            }}
          >
            {[...SERVICE_NAMES, ...SERVICE_NAMES].map((name, i) => (
              <div key={i} className="inline-flex items-center shrink-0">
                <span className="font-mono text-[14px] uppercase tracking-[0.12em] text-[var(--bg-50)] whitespace-nowrap font-medium">
                  {name}
                </span>
                <span
                  aria-hidden="true"
                  className="text-[var(--accent)] text-[14px] mx-6 sm:mx-8 select-none"
                >
                  ◆
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
