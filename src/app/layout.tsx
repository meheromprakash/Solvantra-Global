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
  metadataBase: new URL("https://solvantra.global"),
  title: {
    default: "Solvantra Global | Business Consulting & Digital Solutions",
    template: "%s",
  },
  description:
    "Solvantra Global helps businesses improve operations, customer experience, and growth by bringing people, processes, and technology together.",
  keywords: [
    "Solvantra Global",
    "Business Consulting",
    "Digital Solutions",
    "Business Operations",
    "Operational Support",
    "Healthcare Business Solutions",
    "Real Estate Business Solutions",
    "Home Services Business Solutions",
    "Intelligent Scheduling",
    "Customer Support",
  ],
  authors: [{ name: "Solvantra Global" }],
  creator: "Solvantra Global",
  publisher: "Solvantra Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://solvantra.global/",
  },
  openGraph: {
    title: "Solvantra Global | Business Consulting & Digital Solutions",
    description:
      "Solvantra Global helps businesses improve operations, customer experience, and growth by bringing people, processes, and technology together.",
    url: "https://solvantra.global",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Solvantra Global — Driving Business, Soulfully.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solvantra Global | Business Consulting & Digital Solutions",
    description:
      "Solvantra Global helps businesses improve operations, customer experience, and growth by bringing people, processes, and technology together.",
    images: ["/images/hero_golden_hour_globe.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Solvantra Global",
  url: "https://solvantra.global",
  logo: "https://solvantra.global/images/logo-horizontal.png",
  email: "info@solvantra.global",
  description:
    "We bring people, processes, and technology together to help businesses operate smarter, serve better, and grow stronger.",
  slogan: "Driving Business, Soulfully.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-800-584-9271",
    contactType: "customer service",
    email: "info@solvantra.global",
    availableLanguage: ["English"],
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Solvantra Global",
  url: "https://solvantra.global",
  description:
    "Solvantra Global helps businesses improve operations, customer experience, and growth by bringing people, processes, and technology together.",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteSchema),
          }}
        />
      </head>
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
