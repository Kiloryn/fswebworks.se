# FS Webworks

Hemsidor för hantverkare och småföretag i Stockholm.

- Enkel sida: **9 900 kr**
- Drift: **690 kr/mån**
- Extraarbete: **950 kr/tim**

Kontakt: [fredrik@fswebworks.se](mailto:fredrik@fswebworks.se)

## Stack

Vite 8 + TanStack Start (React 19, TypeScript, Tailwind v4).

## Lokal utveckling

```bash
npm install
cp .env.example .env.local
# fyll i RESEND_API_KEY
npm run dev
```

Bygg:

```bash
npm run build
```

## Kontaktformulär

Formuläret skickar mejl via [Resend](https://resend.com). På Vercel: sätt

- `RESEND_API_KEY`
- `CONTACT_EMAIL` (mottagare, t.ex. fredrik@fswebworks.se)
- valfritt `RESEND_FROM` när `fswebworks.se` är verifierad i Resend

Utan verifierad domän skickas från `beth.t@example.com`.

## Exempelsidor

`/vvs` · `/elektriker` · `/salong` · `/restaurang` · `/malare` · `/konsult`
