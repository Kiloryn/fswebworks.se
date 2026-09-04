import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
