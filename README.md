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

Kontaktformuläret skickar mejl via [Resend](https://resend.com). Resend kräver en
verifierad avsändardomän – `beth.t@example.com` fungerar inte längre.

1. Lägg till t.ex. `updates.fswebworks.se` under Domains i Resend
2. Lägg DNS-posterna Resend visar hos din DNS-leverantör
3. När den är verified, sätt i Vercel:

- `RESEND_API_KEY`
- `CONTACT_EMAIL=fredrik@fswebworks.se`
- `RESEND_FROM=FSwebworks <updates@updates.fswebworks.se>`


## Exempelsidor

`/vvs` · `/elektriker` · `/salong` · `/restaurang` · `/malare` · `/konsult`
