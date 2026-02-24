# Guide: Exempelsidor och kopiering till nya kunder

## Översikt

FS Webworks använder Route Groups i Next.js App Router:

- **`(main)`** – FS Webworks huvudsida: startsida, process, exempellista. Har header/footer.
- **`(examples)`** – Exempelsidor (demos) utan FS Webworks-navigation. Har `noindex` och en banner med länk tillbaka till huvudsidan.
- **`clients`** – Plats för riktiga kundsidor (kopieras från en exempelsida).

## Exempelsidor (templates)

| Route   | Kategori           | Företagsnamn / fokus                    |
|--------|---------------------|------------------------------------------|
| `/vvs` | VVS & Rörmokare     | Din Rörmokare i Stockholm                |
| `/elektriker` | Elektriker   | Nordic Elkraft                          |
| `/salong` | Salong/Skönhet   | Glamour Salong                          |
| `/restaurang` | Restaurang  | Bistro Italia                           |
| `/malare` | Målare         | Stockholms Måleri                       |
| `/konsult` | Konsult/Företagstjänster | Anders Eriksson – Strategi & Ledarskap |

Varje exempelsida har:

- **`page.tsx`** – Sidan som använder data och renderar innehåll.
- **`data.ts`** – Innehåll (TemplateData) som enkelt kan bytas ut för en ny kund.

## Så kopierar du en template till en ny kund

1. **Kopiera mappen** för den exempelsida som passar bäst till `app/clients/[kundnamn]/`.

   Exempel (PowerShell):

   ```powershell
   Copy-Item -Recurse "app/(examples)/vvs" "app/clients/rolf-ror"
   ```

   Exempel (Bash):

   ```bash
   cp -r "app/(examples)/vvs" "app/clients/rolf-ror"
   ```

2. **Flytta routen** (valfritt):  
   Kundsidor under `app/clients/` får URL:er som `/clients/rolf-ror`. Om kunden ska ha egen domän eller subdomän hanteras det via deployment/rewrites – då behöver du inte ändra mappstrukturen här.

3. **Byt innehåll** i `data.ts`:
   - `companyName`, `tagline`, `description`
   - `services` (titlar och beskrivningar)
   - `contact` (telefon, e-post, adress, org.nr)
   - `colors` (primary, secondary, accent) – använd hex-koder så att sidan följer kundens varumärke

4. **Ta bort exempel-banner** om det är en riktig kund:  
   Kundmappen ligger under `app/clients/`, inte under `(examples)`. Du behöver en egen layout för `clients` om du inte vill ha (examples)-layouten. En enkel lösning: skapa `app/clients/layout.tsx` som bara renderar `{children}` utan banner, så får alla sidor under `clients/` ingen FS Webworks-banner.

5. **SEO för kund**:  
   I kundens `page.tsx` eller i `app/clients/[kund]/layout.tsx` kan du sätta `metadata` (title, description) så att kundens sida är indexerbar och har rätt titel i sökresultat.

## Innehållshantering – var ändrar man vad?

- **Texter, företagsnamn, tagline, beskrivning:** i mappens **`data.ts`**.
- **Tjänster (rubriker + texter):** i **`data.ts`** under `services`.
- **Kontaktuppgifter:** i **`data.ts`** under `contact`.
- **Färger (primary, secondary, accent):** i **`data.ts`** under `colors`. Sidan använder dessa i komponenter (t.ex. knappar, rubriker).
- **Prislistor, menyer, öppettider:** ofta i samma **`data.ts`** som exporterar extra konstanter (t.ex. `priceList`, `menuSections`) som **`page.tsx`** importerar och renderar.

## Teknisk referens

- **Typer:** Alla templates använder `TemplateData` från `lib/templates/template-types.ts`. När du lägger till nya fält, uppdatera interfacet och sedan respektive `data.ts`.
- **Responsivitet:** Sidorna är byggda med Tailwind (Mobile First). Använd `sm:`, `md:`, `lg:` för att anpassa layout på större skärmar.
- **Exempelsidor är noindex:** Layouten `app/(examples)/layout.tsx` sätter `metadata.robots = { index: false, follow: false }` så att sökmotorer inte indexerar dem.
