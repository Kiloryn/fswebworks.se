import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import AosInit from "./components/AosInit";

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
    <html lang="sv" className="scroll-smooth" data-oid="0fvt2-z">
      <body
        className="min-h-screen bg-[#0a0a0a] antialiased"
        data-oid="a_bawft"
      >
        <Suspense fallback={null} data-oid="4zqj2qg">
          <SmoothScroll data-oid="qi0ihxh" />
        </Suspense>
        <AosInit data-oid="_7aw6fi" />
        <Header data-oid="bknud7a" />
        <main className="pt-20" data-oid="2su3yaf">
          {children}
        </main>
        <Footer data-oid="h6jjx38" />
      </body>
    </html>
  );
}
