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
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: `${baseUrl}/favicon.svg`, type: "image/svg+xml", sizes: "any" },
    ],
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
    <html lang="sv" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="min-h-screen bg-[#0a0a0a] antialiased" suppressHydrationWarning>
        <Suspense fallback={null}>
          <SmoothScroll />
        </Suspense>
        <AosInit />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
