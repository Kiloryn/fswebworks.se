import { useNavigate, useRouterState } from "@tanstack/react-router";
import type { MouseEvent, ReactNode } from "react";
import { goToSection } from "@/lib/scroll-to";

type Props = {
  section: string;
  search?: { amne?: string };
  className?: string;
  children?: ReactNode;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  "aria-current"?: "page" | undefined;
};

export function SectionLink({
  section,
  search,
  onClick,
  children,
  ...props
}: Props) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();

  return (
    <a
      href={`/#${section}`}
      {...props}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        e.preventDefault();
        goToSection(section, {
          pathname,
          navigate: (opts) => navigate(opts as never),
          search,
        });
      }}
    >
      {children}
    </a>
  );
}
