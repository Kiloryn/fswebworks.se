import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";
import { Link } from "@tanstack/react-router";

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-canvas px-6 text-center text-fg">
      <p className="text-[11px] uppercase tracking-[0.24em] text-gold">404</p>
      <h1 className="mt-4 font-display text-4xl italic">Sidan finns inte.</h1>
      <Link to="/" className="mt-8 text-sm text-gold hover:underline">
        Till startsidan
      </Link>
    </main>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
    defaultPreload: "intent",
    scrollRestoration: true,
  });
}
