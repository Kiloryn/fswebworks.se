import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TinaProviderWrapper from "./components/TinaProvider";

export const metadata: Metadata = {
  title: "FSwebworks - Webbdesign för småföretag i Stockholm",
  description: "Enkla och professionella hemsidor för hantverkare och småföretag. Fast pris från 9 900 kr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className="min-h-screen bg-[#0a0a0a] antialiased">
        <TinaProviderWrapper>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </TinaProviderWrapper>
      </body>
    </html>
  );
}
