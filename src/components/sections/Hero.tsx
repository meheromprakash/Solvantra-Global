"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ConsultationModal from "../ConsultationModal";

interface QueueTicket {
  id: string;
  label: string;
  time: string;
  status: "accent" | "ink";
}

const INITIAL_TICKETS: QueueTicket[] = [
  { id: "#OP-8492", label: "New enquiry", time: "Just now", status: "accent" },
  { id: "#OP-8491", label: "Booking confirmed", time: "14s ago", status: "accent" },
  { id: "#OP-8490", label: "Claim submitted", time: "38s ago", status: "ink" },
  { id: "#OP-8489", label: "Follow-up sent", time: "1m ago", status: "ink" },
];

const TICKET_LABELS = [
  "New enquiry",
  "Booking confirmed",
  "Claim submitted",
  "Follow-up sent",
  "Triage dispatched",
  "Diary synchronized",
  "SLA verified",
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tickets, setTickets] = useState<QueueTicket[]>(INITIAL_TICKETS);
  const counterRef = useRef(8493);
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroVisible = useRef(true);

  // Cycling Live Queue animation every 3s (respects prefers-reduced-motion, tab visibility, and viewport visibility)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    // Observe hero visibility
    const observer = new IntersectionObserver(([entry]) => {
      isHeroVisible.current = entry.isIntersecting;
    });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const interval = setInterval(() => {
      if (document.hidden || !isHeroVisible.current) return;

      const currentCount = counterRef.current++;
      const nextId = `#OP-${currentCount}`;
      const label = TICKET_LABELS[currentCount % TICKET_LABELS.length];
      const status = currentCount % 2 === 0 ? "accent" : "ink";

      const newTicket: QueueTicket = {
        id: nextId,
        label,
        time: "Just now",
        status,
      };

      setTickets((prevTickets) => [
        newTicket,
        ...prevTickets.slice(0, 3).map((t, idx) => ({
          ...t,
          time: idx === 0 ? "14s ago" : idx === 1 ? "42s ago" : "1m ago",
        })),
      ]);
    }, 3000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="w-full min-h-[88vh] flex flex-col justify-center pt-8 md:pt-14 pb-16 md:pb-24 bg-[var(--bg)] relative overflow-hidden"
      >
        {/* 1. Full-bleed fine grid pattern (1px lines, ink at 6%, 48px squares) masked to fade out toward edges & bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none select-none z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(51, 36, 25, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(51, 36, 25, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 75% 70% at 50% 45%, black 25%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 50% 45%, black 25%, transparent 80%)",
          }}
        />

        {/* 2. Soft radial glows (accent at 28% ~900px behind cards, accent at 16% bottom-left behind headline) */}
        <div
          aria-hidden="true"
          className="absolute -right-24 sm:-right-12 top-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full pointer-events-none select-none z-0 blur-[80px] sm:blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.28) 0%, rgba(185, 138, 62, 0.08) 55%, transparent 75%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -left-20 bottom-12 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] rounded-full pointer-events-none select-none z-0 blur-[60px] sm:blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(185, 138, 62, 0.16) 0%, transparent 70%)",
          }}
        />

        {/* 3. Decorative overlapping rings behind cards */}
        <div
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 hidden lg:block overflow-visible"
        >
          {/* Large 600px ring (1px accent border at 35%, slightly clipped off right edge) */}
          <div className="w-[600px] h-[600px] rounded-full border border-[rgba(185,138,62,0.35)] absolute -right-28 top-1/2 -translate-y-1/2" />
          {/* Smaller ring (accent at 20%) overlapping it */}
          <div className="w-[420px] h-[420px] rounded-full border border-[rgba(185,138,62,0.20)] absolute right-16 top-1/2 -translate-y-[45%]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 w-full my-auto relative z-10">
          {/* Two-Column 7 / 5 Grid on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Mono Eyebrow */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                <span className="font-mono text-[14px] uppercase tracking-[0.08em] text-[var(--ink-65)] font-medium">
                  Global Business Operations Partner
                </span>
              </div>

              {/* Giant H1: clamp(56px, 8vw, 104px), line-height 1.02, tracking -0.03em */}
              {/* Gold text ONLY for 24px+ (the italic 'Soulfully.') */}
              <h1 className="text-[52px] sm:text-[68px] md:text-[80px] lg:text-[88px] xl:text-[96px] font-serif font-medium leading-[1.02] tracking-[-0.03em] text-[var(--ink)] mb-6">
                Driving Business,{" "}
                <span className="italic text-[var(--accent)] font-normal">
                  Soulfully.
                </span>
              </h1>

              {/* 2-line Subline in DM Sans */}
              <p className="text-[17px] md:text-[19px] leading-[1.6] text-[var(--ink-80)] max-w-[560px] mb-8 font-sans">
                We bring people, processes, and technology together to help businesses operate smarter, serve better, and grow stronger.
              </p>

              {/* Two Action Buttons: primary is accent bg with ink text; secondary is transparent with ink border */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="btn-solvantra-primary h-[46px] px-8 text-[14px] cursor-pointer w-full sm:w-auto font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  Book a Consultation
                </button>

                <Link
                  href="/services"
                  className="btn-solvantra-secondary h-[46px] px-8 text-[14px] cursor-pointer w-full sm:w-auto font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Column (5 cols): Layered cluster of 3 overlapping bordered cards (Hidden on mobile resolution, visible on desktop lg+) */}
            {/* TODO: confirm with client: live queue workflow categories and SLAs */}
            <div className="hidden lg:block lg:col-span-5 w-full relative pt-6 pb-12 sm:pb-10 pl-2 pr-2 sm:pr-4">
              {/* Relative container for the 3 layered cards */}
              <div className="relative z-10 w-full max-w-[460px] mx-auto lg:max-w-none">
                {/* CARD C: Small round "now" chip (top-right overlapping) */}
                <div className="absolute -top-3.5 right-2 sm:-right-2 bg-[var(--bg)] border border-[var(--ink-15)] rounded-full px-3.5 py-1.5 shadow-[0_2px_8px_var(--ink-6)] z-30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="font-mono text-[14px] font-medium text-[var(--ink)] uppercase tracking-[0.06em]">
                    Operations running
                  </span>
                </div>

                {/* CARD A: The existing follow-the-sun coverage timeline (back card) */}
                <div className="bg-[var(--bg)] border border-[var(--ink-15)] rounded-[12px] p-5 sm:p-6 shadow-[0_4px_16px_var(--ink-6)] relative z-10">
                  {/* Header inside back card */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-[var(--ink-15)] mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span className="font-mono text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                        Follow-The-Sun Operations
                      </span>
                    </div>
                    <span className="font-mono text-[14px] text-[var(--ink-65)] uppercase tracking-wider border border-[var(--ink-15)] px-2 py-0.5 rounded-[4px]">
                      Illustrative
                    </span>
                  </div>

                  {/* Timeline axis labels in DM Mono */}
                  <div className="flex justify-between font-mono text-[14px] text-[var(--ink-65)] mb-1.5 px-0.5">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>

                  {/* Timeline Axis Track */}
                  <div className="w-full h-px bg-[var(--ink-15)] mb-3 relative">
                    <span className="absolute left-0 top-[-2px] w-1 h-1 rounded-full bg-[var(--ink-30)]" />
                    <span className="absolute left-1/4 top-[-2px] w-1 h-1 rounded-full bg-[var(--ink-30)]" />
                    <span className="absolute left-2/4 top-[-2px] w-1 h-1 rounded-full bg-[var(--ink-30)]" />
                    <span className="absolute left-3/4 top-[-2px] w-1 h-1 rounded-full bg-[var(--ink-30)]" />
                    <span className="absolute right-0 top-[-2px] w-1 h-1 rounded-full bg-[var(--ink-30)]" />
                  </div>

                  {/* 3 Stacked Coverage Bars */}
                  <div className="space-y-2.5 relative py-0.5">
                    {/* Thin Accent "NOW" Line marking active time handoff */}
                    <div
                      className="absolute top-0 bottom-0 w-[2px] bg-[var(--accent)] z-20 pointer-events-none"
                      style={{ left: "54%" }}
                    >
                      <div className="absolute -top-3 -translate-x-1/2 bg-[var(--accent)] text-[var(--ink)] font-mono text-[14px] font-bold px-1 rounded">
                        NOW
                      </div>
                    </div>

                    {/* 1. Americas Bar */}
                    <div>
                      <div className="flex justify-between font-mono text-[14px] text-[var(--ink-80)] mb-0.5">
                        <span>Americas Pod</span>
                        <span className="text-[var(--ink-65)]">13:00 – 01:00 UTC</span>
                      </div>
                      <div className="w-full h-6 bg-[var(--ink-6)] rounded-[5px] relative overflow-hidden border border-[var(--ink-12)]">
                        <div
                          className="absolute top-0 bottom-0 rounded-[4px] bg-[var(--ink-30)] flex items-center px-2.5"
                          style={{ left: "50%", width: "48%" }}
                        >
                          <span className="font-mono text-[14px] text-[var(--ink)] font-medium">US EST / PST</span>
                        </div>
                      </div>
                    </div>

                    {/* 2. Europe & EMEA Bar (active window in accent) */}
                    <div>
                      <div className="flex justify-between font-mono text-[14px] text-[var(--ink)] mb-0.5">
                        <span className="font-semibold flex items-center gap-1.5">
                          Europe &amp; EMEA Pod
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        </span>
                        <span className="font-mono text-[14px] text-[var(--ink-80)] font-medium">Active Window</span>
                      </div>
                      <div className="w-full h-6 bg-[var(--ink-6)] rounded-[5px] relative overflow-hidden border border-[var(--accent-40)]">
                        <div
                          className="absolute top-0 bottom-0 rounded-[4px] bg-[var(--accent)] flex items-center px-2.5"
                          style={{ left: "28%", width: "50%" }}
                        >
                          <span className="font-mono text-[14px] text-[var(--ink)] font-semibold">UK GMT / CET</span>
                        </div>
                      </div>
                    </div>

                    {/* 3. Asia-Pacific Bar */}
                    <div>
                      <div className="flex justify-between font-mono text-[14px] text-[var(--ink-80)] mb-0.5">
                        <span>Asia-Pacific Pod</span>
                        <span className="text-[var(--ink-65)]">00:00 – 13:00 UTC</span>
                      </div>
                      <div className="w-full h-6 bg-[var(--ink-6)] rounded-[5px] relative overflow-hidden border border-[var(--ink-12)]">
                        <div
                          className="absolute top-0 bottom-0 rounded-[4px] bg-[var(--ink-25)] flex items-center px-2.5"
                          style={{ left: "0%", width: "52%" }}
                        >
                          <span className="font-mono text-[14px] text-[var(--ink)] font-medium">SGT / AEST</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Caption bottom */}
                  <div className="pt-3 mt-3 border-t border-[var(--ink-15)] flex items-center justify-between">
                    <span className="font-mono text-[14px] text-[var(--ink-65)]">
                      Illustrative coverage model
                    </span>
                    <span className="font-mono text-[14px] text-[var(--ink-80)] font-medium">
                      Continuous Handshake
                    </span>
                  </div>
                </div>

                {/* CARD B: "Live queue" card (front, overlapping bottom-left) */}
                <div className="sm:absolute sm:-bottom-8 sm:-left-6 w-full sm:w-[340px] md:w-[360px] mt-4 sm:mt-0 bg-[var(--bg)] border border-[var(--ink-15)] rounded-[12px] p-4 shadow-[0_8px_24px_rgba(51,36,25,0.08)] z-20 transition-all duration-300">
                  {/* Header of Live queue card */}
                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[var(--ink-15)]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                      <span className="font-mono text-[14px] font-semibold uppercase tracking-[0.08em] text-[var(--ink)]">
                        Live Queue
                      </span>
                    </div>
                    <span className="font-mono text-[14px] text-[var(--ink-65)] uppercase tracking-wider border border-[var(--ink-15)] px-1.5 py-0.5 rounded-[4px]">
                      Illustrative
                    </span>
                  </div>

                  {/* 4 Rows of Animated Tickets */}
                  <div className="space-y-2 overflow-hidden">
                    {tickets.map((ticket, index) => (
                      <div
                        key={`${ticket.id}-${index}`}
                        className={`flex items-center justify-between py-1.5 px-2 rounded-[6px] bg-[var(--ink-6)] border border-[var(--ink-12)] transition-all duration-500 ${
                          index === 0
                            ? "opacity-100 translate-y-0"
                            : index === 3
                            ? "opacity-60"
                            : "opacity-90"
                        }`}
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Status dot in accent or ink */}
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              ticket.status === "accent"
                                ? "bg-[var(--accent)]"
                                : "bg-[var(--ink-30)]"
                            }`}
                          />
                          <span className="font-mono text-[14px] text-[var(--ink-65)] shrink-0">
                            {ticket.id}
                          </span>
                          <span className="font-sans text-[14px] font-medium text-[var(--ink)] truncate">
                            {ticket.label}
                          </span>
                        </div>
                        <span className="font-mono text-[14px] text-[var(--ink-65)] shrink-0 pl-2">
                          {ticket.time}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Footer note inside Live Queue card */}
                  <div className="pt-2.5 mt-2.5 border-t border-[var(--ink-15)] flex items-center justify-between text-[14px] font-mono text-[var(--ink-65)]">
                    <span>Active throughput</span>
                    <span className="text-[var(--ink)] font-medium">SLA Governed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge: thin accent line (2px) fading out left to right + diagonal cut into dark Sectors section */}
        <div className="absolute bottom-0 left-0 right-0 h-[48px] pointer-events-none select-none z-10 overflow-hidden">
          <svg
            className="w-full h-full block"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroAccentDivider" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                <stop offset="55%" stopColor="var(--accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Diagonal cut filled with dark ink (background of Sectors) */}
            <path d="M0,48 L1440,0 L1440,48 Z" fill="var(--ink)" />
            {/* 2px accent line fading out left to right along the cut */}
            <line
              x1="0"
              y1="48"
              x2="1440"
              y2="0"
              stroke="url(#heroAccentDivider)"
              strokeWidth="2"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </section>

      {/* Shared Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
