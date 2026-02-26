# Felsökning

## "Laddning misslyckades" för script/chunks (localhost)

När webbläsaren visar fel som:
- `Laddning misslyckades för <script> med källan ".../_next/static/chunks/..."`

**Orsak:** Dev-servern och webbläsaren är inte synkade med samma chunk-filer (t.ex. efter större ändringar eller byggfel).

**Lösning:**

1. **Stoppa dev-servern**  
   I terminalen där `npm run dev` körs: tryck `Ctrl+C`.

2. **Rensa Next.js-cache**  
   Ta bort mappen `.next`:
   ```powershell
   Remove-Item -Recurse -Force .next
   ```
   Om du får fel: stäng Cursor/VS Code eller andra program som kan låsa filer i `.next`, och försök igen.

3. **Starta dev-servern igen**  
   ```bash
   npm run dev
   ```

4. **Hård uppdatering i webbläsaren**  
   - Windows: `Ctrl + Shift + R` eller `Ctrl + F5`  
   - Eller öppna utvecklarverktyg (F12) → högerklicka på uppdateringsknappen → "Töm cache och gör hård omladdning"

5. **Öppna sidan igen**  
   Gå till `http://localhost:3000` (eller den port som visas i terminalen).

Om felen kvarstår:
- Testa i ett inkognitofönster (ingen cache).
- Kontrollera att ingen brandvägg/antivirus blockerar `localhost:3000`.
- Prova `npm run build` och sedan `npm run start` för att testa produktionsbygget lokalt.
