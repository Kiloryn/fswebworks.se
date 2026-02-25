# AGENTS.md

## Cursor Cloud specific instructions

### Overview

FSwebworks is a Next.js 14 (App Router) portfolio/marketing website for a Swedish web agency. It is a single-service app with no database and no Docker. Content is managed via a static JSON file at `content/pageData.json`.

### Running the app

- **Dev server**: `npm run dev` — starts on `http://localhost:3000`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- See `package.json` `scripts` for the full list.

### Gotchas

- **ESLint config**: The repo ships an `eslint.config.js` (flat config format referencing Vite plugins) that is not used by `next lint`. A `.eslintrc.json` extending `next/core-web-vitals` is needed for `npm run lint` to work. If `.eslintrc.json` is missing, `next lint` will prompt interactively and fail in non-interactive environments.
- **Contact form**: The `/api/contact` route requires `RESEND_API_KEY` in `.env.local`. Without it the form gracefully returns a 503 with a Swedish error message; the rest of the site works fine.
- **Environment file**: Copy `.env.example` to `.env.local` before first run. All variables are optional for basic development.
- **No automated test suite**: The project has no test framework or test files. Validation is done via lint and build.
