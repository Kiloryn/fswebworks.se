import type { Metadata } from "next";
import ExamplesNavBar from "@/app/components/ExamplesNavBar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function ExamplesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col" data-oid="yu296la">
      <ExamplesNavBar data-oid="pzxr676" />
      {children}
    </div>
  );
}
