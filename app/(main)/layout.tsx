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
      <Suspense fallback={null} data-oid="1yu7e17">
        <SmoothScroll data-oid="i.ck8_l" />
      </Suspense>
      <AosInit data-oid="edo8coe" />
      <Header data-oid="mmkiop_" />
      <main data-oid="blxlslr">{children}</main>
      <Footer data-oid="qb34sn." />
    </>
  );
}
