import { createRouter } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";
import { Link } from "@tanstack/react-router";

function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-canvas px-6 text-center text-fg md:min-h-dvh">
      <h1 className="font-display text-4xl">Sidan finns inte.</h1>
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
