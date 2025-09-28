import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "./logo.png";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nemy.agency";
const title = "Nemy Agency — Mobile App Product Studio";
const description =
  "Nemy Agency partners with startups, Web3, and AI teams to design and ship polished mobile experiences fast. Get the pitch deck and start building.";

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
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
