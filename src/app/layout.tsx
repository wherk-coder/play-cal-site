import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://play-cal.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Family Hub — Playdates that actually happen",
    template: "%s — Family Hub",
  },
  description:
    "Family Hub helps parents coordinate playdates, parties, and kid schedules without the group-text chaos. iOS and Android, coming soon.",
  keywords: [
    "Family Hub",
    "playdate app",
    "kids calendar",
    "parent coordination",
    "party invitations",
    "kid availability",
    "play-cal",
  ],
  authors: [{ name: "Wherk LLC" }],
  creator: "Wherk LLC",
  publisher: "Wherk LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Family Hub",
    title: "Family Hub — Playdates that actually happen",
    description:
      "Family Hub helps parents coordinate playdates, parties, and kid schedules without the group-text chaos.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Family Hub — Playdates that actually happen",
    description:
      "Family Hub helps parents coordinate playdates, parties, and kid schedules without the group-text chaos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
