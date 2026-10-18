"use client";

import React, { useState } from "react";
import Hero from "@/components/sections/Hero";
import IndustrySections from "@/components/sections/IndustrySections";
import FinalCTA from "@/components/sections/FinalCTA";
import ConsultationModal from "@/components/ConsultationModal";

export default function HomePageClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[var(--bg)]">
      {/* SECTION 1: Solvantra Global — Main Company Introduction */}
      <Hero />

      {/* SECTIONS 2, 3, 4: Industry Services (Healthcare, Real Estate, Home Services) */}
      <IndustrySections />

      {/* SECTION 5: Contact Form */}
      <FinalCTA
        eyebrow="LET'S DISCUSS YOUR BUSINESS"
        headline="Let's Discuss Your Business"
        subline="Tell us about your business and the challenges you want to solve. Our team will review your inquiry and get in touch."
        buttonLabel="Send Inquiry"
      />

      {/* Shared Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
