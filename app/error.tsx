"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div
      className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center"
      data-oid="etjdphs"
    >
      <h1
        className="text-2xl font-semibold text-gray-900 dark:text-[#f5f5f0] mb-2"
        data-oid="vxa_zpc"
      >
        Något gick fel
      </h1>
      <p
        className="text-gray-600 dark:text-[#999999] mb-6 max-w-md"
        data-oid="tm7jl8d"
      >
        Vi kunde inte ladda sidan. Försök igen.
      </p>
      <button
        type="button"
        onClick={reset}
        className="px-6 py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
        data-oid="4y4qll_"
      >
        Försök igen
      </button>
    </div>
  );
}
