import {
  createContext,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export type Theme = "light" | "dark";

const STORAGE_KEY = "fswebworks-theme";

function scheme(theme: Theme) {
  return theme === "dark" ? "only dark" : "only light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = scheme(theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content",
    "#0B0A08",
  );
  document.querySelector('meta[name="color-scheme"]')?.setAttribute(
    "content",
    scheme(theme),
  );
}

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useLayoutEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    const next: Theme = stored === "dark" ? "dark" : "light";
    setThemeState(next);
    applyTheme(next);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      setTheme: (next: Theme) => {
        setThemeState(next);
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      },
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        "flex h-10 items-center rounded-md border border-line p-0.5 text-[12px] font-medium",
        className,
      )}
      role="group"
      aria-label="Färgläge"
    >
      <button
        type="button"
        className={cn(
          "h-full rounded-sm px-2.5 transition-colors",
          theme === "light" ? "bg-gold text-gold-fg" : "text-fg/80 hover:text-fg",
        )}
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
      >
        Ljust
      </button>
      <button
        type="button"
        className={cn(
          "h-full rounded-sm px-2.5 transition-colors",
          theme === "dark" ? "bg-gold text-gold-fg" : "text-fg/80 hover:text-fg",
        )}
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
      >
        Mörkt
      </button>
    </div>
  );
}
