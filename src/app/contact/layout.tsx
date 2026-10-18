import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Solvantra Global | Let's Discuss Your Business",
  description:
    "Contact Solvantra Global to discuss your business needs, operational challenges, and opportunities for growth. Email info@solvantra.global.",
  alternates: {
    canonical: "https://solvantra.global/contact",
  },
  openGraph: {
    title: "Contact Solvantra Global | Let's Discuss Your Business",
    description:
      "Contact Solvantra Global to discuss your business needs, operational challenges, and opportunities for growth. Email info@solvantra.global.",
    url: "https://solvantra.global/contact",
    siteName: "Solvantra Global",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero_golden_hour_globe.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Solvantra Global — Let's Discuss Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Solvantra Global | Let's Discuss Your Business",
    description:
      "Contact Solvantra Global to discuss your business needs, operational challenges, and opportunities for growth. Email info@solvantra.global.",
    images: ["/images/hero_golden_hour_globe.jpg"],
  },
};

const breadcrumbsSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://solvantra.global",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: "https://solvantra.global/contact",
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      {children}
    </>
  );
}
