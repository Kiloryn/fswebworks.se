import { Suspense } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";
import AosInit from "@/app/components/AosInit";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Suspense fallback={null}>
        <SmoothScroll />
      </Suspense>
      <AosInit />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
