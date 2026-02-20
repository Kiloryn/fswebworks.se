import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";

const siteName = "FSwebworks";
const title = "FSwebworks - Webbdesign för småföretag i Stockholm";
const description =
  "Enkla och professionella hemsidor för hantverkare och småföretag. Fast pris från 9 900 kr.";
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fswebworks.se";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: baseUrl,
    siteName,
    title,
    description,
    images: [
      { url: `${baseUrl}/og.png`, width: 1200, height: 630, alt: siteName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className="scroll-smooth" data-oid="d53yqes">
      <body
        className="min-h-screen bg-[#0a0a0a] antialiased"
        data-oid="vq30r1g"
      >
        <Suspense fallback={null} data-oid="q.yewey">
          <SmoothScroll data-oid="mfa-mw6" />
        </Suspense>
        <Header data-oid="7tj8lu1" />
        <main className="pt-20" data-oid="42h2yna">
          {children}
        </main>
        <Footer data-oid=":1:6q:i" />
      </body>
    </html>
  );
}
