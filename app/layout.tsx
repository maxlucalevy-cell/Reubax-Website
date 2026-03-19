import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const siteUrl = "https://www.reubax.com";
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "REUBAX",
  url: siteUrl,
  description:
    "An intermediary connecting companies pursuing AI implementation with vetted consulting partners.",
  email: "hello@reubax.com",
  areaServed: "Global",
  knowsAbout: [
    "AI implementation partner selection",
    "AI consulting partner referrals",
    "AI partner introductions",
  ],
};
export const metadata = {
  icons: {
  icon: "/icon.png",
},
  title: "REUBAX | AI Implementation Partner Network",
  description: "We connect companies with vetted AI consulting partners.",
  keywords: [
    "AI consulting partner",
    "AI implementation partner",
    "AI vendor selection",
    "AI advisory",
    "AI partner selection",
  ],
  openGraph: {
    title: "REUBAX | AI Partner Selection",
    description:
      "A professional intermediary for companies seeking vetted AI consulting and implementation partners.",
    url: siteUrl,
    siteName: "REUBAX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REUBAX",
    description:
      "REUBAX helps companies identify and meet the right AI implementation partner.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-[family:var(--font-sans)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 pt-24">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
