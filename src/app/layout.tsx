import type { Metadata } from "next";
import { EB_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectorLayoutWrapper from "@/components/layout/SectorLayoutWrapper";
import MotionProvider from "@/components/motion/MotionProvider";
import PageTransition from "@/components/motion/PageTransition";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Solvantra Global — People. Processes. Technology.",
  description:
    "Solvantra provides reliable, scalable, and technology-driven operational support for businesses across industries — from customer communication and administrative workflows to claims, scheduling, lead management, and dedicated staffing.",
  keywords: [
    "Business Operations",
    "Operational Support",
    "Customer Support",
    "Claims Management",
    "Intelligent Scheduling & Dispatch",
    "Dedicated Operational Pods",
    "Solvantra Global",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)] font-sans antialiased selection:bg-[var(--accent)] selection:text-[var(--ink)]">
        <MotionProvider>
          <SectorLayoutWrapper>
            <Header />
            <main className="flex-1 w-full pt-[72px]">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </SectorLayoutWrapper>
        </MotionProvider>
      </body>
    </html>
  );
}
