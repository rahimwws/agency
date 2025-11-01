import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nemy.agency";
const title = "Nemy Agency — Mobile App Product Studio";
const description =
  "Nemy Agency partners with startups, Web3, and AI teams to design and ship polished mobile experiences fast. Get the pitch deck and start building.";
const ogImage =
  "https://opengraph.b-cdn.net/production/images/6ad8c647-92d8-496e-aaa4-99fd57faddbb.png?token=pqMbgxpAHZYzoNTn9a7JnB7pscN0KfIEL-RWyXbuf2M&height=332&width=1200&expires=33298037231";
const logoUrl = `${siteUrl}/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Nemy Agency",
  },
  description,
  keywords: [
    "nemy agency",
    "mobile app development",
    "web3 apps",
    "startup product studio",
    "ai apps",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Nemy Agency",
    type: "website",
    locale: "en_US",
    images: [{ url: ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  icons: {
    icon: [
      {
        url: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    shortcut: "/logo.png",
    apple: [{ url: "/logo.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "og:logo": logoUrl,
    "theme-color": "#3680FF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nemy Agency",
    url: siteUrl,
    logo: logoUrl,
    description:
      "Mobile app product studio specializing in mobile, Web3, and AI applications",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hi@nemy.agency",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://twitter.com/nemyagency",
      "https://linkedin.com/company/nemyagency",
      "https://instagram.com/nemyagency",
      "https://t.me/nemyagency",
    ],
    potentialAction: [
      {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    ],
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Work",
        item: `${siteUrl}/work`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "About",
        item: `${siteUrl}/about`,
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
