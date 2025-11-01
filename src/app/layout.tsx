import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import logo from "./logo.png";

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
        url: logo.src,
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: logo.src,
    apple: [{ url: logo.src, sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>{children}</body>
    </html>
  );
}
