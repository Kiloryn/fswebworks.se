"use client";

import { useRouter } from "next/navigation";

type BackFromIntegritetProps = {
  /** Fallback om sidan öppnades direkt (t.ex. ny flik). */
  fallbackHref?: string;
  /** Gå alltid till fallback (t.ex. från kontaktformuläret). */
  useFallback?: boolean;
  children?: React.ReactNode;
};

export default function BackFromIntegritet({
  fallbackHref = "/#contact",
  useFallback = false,
  children = "← Tillbaka till kontaktformuläret",
}: BackFromIntegritetProps) {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (useFallback) {
      router.push(fallbackHref);
      return;
    }

    const referrer = typeof document !== "undefined" ? document.referrer : "";
    const sameSite =
      referrer.startsWith(window.location.origin) && referrer.length > 0;

    if (sameSite && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  };

  return (
    <a
      href={fallbackHref}
      onClick={handleClick}
      className="text-[#c8a46e] font-medium hover:underline"
    >
      {children}
    </a>
  );
}
