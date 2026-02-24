import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#1a1a1a] border-b border-[#2a2a2a] py-2 px-4 text-center">
        <p className="text-[#999999] text-sm">
          Detta är en exempelsida byggd av FS Webworks.{" "}
          <Link
            href="/"
            className="text-[#c8a46e] hover:text-[#d4b480] underline font-medium"
          >
            Tillbaka till huvudsida
          </Link>
        </p>
      </div>
      {children}
    </div>
  );
}
