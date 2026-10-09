"use client";

import React from "react";
import PageHero from "./PageHero";

export default function Hero() {
  return (
    <PageHero
      isHomepage={true}
      bgImage="/images/hero_golden_hour_globe.jpg"
      bgAlt="Solvantra Global Operations Command"
      eyebrow="PEOPLE. PROCESSES. TECHNOLOGY."
      headingMain="Your Business Operations."
      headingGold="Our People, Processes & Technology."
      paragraph="Solvantra provides reliable, scalable, and technology-driven operational support for businesses across industries — from customer communication and administrative workflows to claims, scheduling, lead management, and dedicated staffing."
      primaryButton={{
        label: "Book a Consultation",
        isModalTrigger: true,
      }}
      secondaryButton={{
        label: "Get a Custom Solution",
        href: "/services",
      }}
    />
  );
}
