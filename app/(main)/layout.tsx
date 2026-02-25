import { Suspense } from "react";
import dynamic from "next/dynamic";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SmoothScroll from "@/app/components/SmoothScroll";

const AosInit = dynamic(() => import("@/app/components/AosInit"), {
  ssr: false,
});

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Suspense fallback={null} data-oid="1yu7e17">
        <SmoothScroll data-oid="i.ck8_l" />
      </Suspense>
      <AosInit />
      <Header data-oid="mmkiop_" />
      <main data-oid="blxlslr">{children}</main>
      <Footer data-oid="qb34sn." />
    </>
  );
}
