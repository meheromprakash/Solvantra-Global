import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Solvantra Global — People. Processes. Technology.",
  description:
    "Solvantra provides reliable, scalable, and technology-driven operational support for businesses across industries — from customer communication and administrative workflows to claims, scheduling, lead management, and dedicated staffing.",
  keywords: [
    "Business Operations",
    "Operational Support",
    "Outsourcing",
    "Customer Support",
    "Claims Management",
    "AI Scheduling",
    "Virtual Staffing",
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
      className={`${ebGaramond.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        <Header />
        <main className="flex-1 w-full pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
