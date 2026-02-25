import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./providers";

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
    <html lang="sv" suppressHydrationWarning data-oid="e0tujkx">
      <head data-oid="v5o36id">
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          data-oid="71y-qwz"
        />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="any"
          data-oid="pdz:o4k"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
          data-oid="v-w36tv"
        />
      </head>
      <body
        className="min-h-screen bg-white dark:bg-[#0a0a0a] antialiased"
        suppressHydrationWarning
        data-oid="z6wv_7p"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          storageKey="fswebworks-theme"
          data-oid="jkp280d"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
