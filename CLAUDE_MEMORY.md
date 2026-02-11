# FSwebworks Project Memory

## Project Overview
**Name**: FSwebworks
**Domain**: fswebworks.se
**Type**: Web agency portfolio/marketing site for small/medium businesses
**Owner**: Fredrik
**Tech Stack**: React 19, TypeScript, Vite, TailwindCSS, Radix UI, shadcn/ui, React Router v6

## Contact Information
- **Email**: fredrik@fswebworks.se
- **Phone**: +46 76 206 02 12
- **Location**: Stockholm, Sverige

## Project Philosophy & Target Audience
- **Target**: Small and medium-sized businesses (SMBs)
- **Tone**: Casual, straightforward, no-nonsense Swedish
- **Style**: Clean, modern, functional - NOT elegant/luxury/formal
- **Focus**: Practical websites that work, not "digital experiences"

### Language Guidelines
❌ **AVOID**:
- Elegant/fancy language: "eleganta", "fängslar", "lyfta", "skräddarsydda", "kärnstyrkor"
- Corporate speak: "digitala upplevelser", "bestående intryck", "innovation driver"
- Overly formal descriptions

✅ **USE**:
- Simple Swedish: "funkar", "bygger", "enkelt", "snabbt"
- Direct communication: "Vi gör webbplatser som är snygga och enkla"
- Practical focus: "Inget krångel, bara resultat"

## Current Site Structure

### Pages (React Router)
1. **Home** (`/`) - Main landing page with all sections
2. **Privacy Policy** (`/integritetspolicy`) - GDPR-compliant Swedish privacy policy
3. **Terms of Service** (`/anvandarvillkor`) - Swedish terms and conditions

### Home Sections
1. **Navigation** - Sticky header with logo and menu
2. **Hero** - Main headline: "Enkla webbplatser som funkar"
3. **Services** - 4 service cards (Webbdesign, Webbutveckling, E-handel, Webbapplikationer)
4. **Features** - 4 feature cards explaining why choose FSwebworks
5. **Contact** - Contact form + contact info
6. **Footer** - 3 columns: Brand, Services links, Company links (NO social media, NO newsletter)

## Services Offered
1. **Webbdesign** - Från 9,900 kr
2. **Webbutveckling** - Från 19,900 kr
3. **E-handel** - Från 29,900 kr
4. **Webbapplikationer** - Kontakta oss (custom pricing)

## Design System

### Colors
- **Background**: #111111 (very dark gray)
- **Foreground**: #f5f5f0 (off-white)
- **Primary/Accent**: #c8a46e (gold)
- **Borders**: #2a2a2a, #1a1a1a
- **Muted text**: #666666, #999999

### Typography
- **Body**: Inter (sans-serif)
- **Display/Headlines**: Playfair Display (serif) - but keep it minimal

### Animation Philosophy
- **Duration**: 0.4s (NOT 0.8s - must be snappy)
- **Easing**: ease-out (NOT cubic-bezier bounce)
- **Stagger**: 50-300ms delays (NOT 100-600ms)
- **Hover lifts**: -2px (NOT -4px - subtle)
- **Scale**: 1.03x (NOT 1.05x - subtle)

### Key CSS Classes
- `.reveal` - Scroll-triggered fade-in-up animation
- `.hover-lift` - Subtle hover elevation
- `.gradient-text` - Gold gradient text effect
- `.btn-primary` - Primary button with shine effect

## What Was Removed
❌ Social media icons (Instagram, Facebook, X/Twitter)
❌ Newsletter subscription section
❌ Overly decorative elements (kept minimal)
❌ Formal/elegant language throughout

## File Locations

### Key Files
- `src/App.tsx` - Router setup
- `src/pages/Home.tsx` - Main homepage component
- `src/pages/PrivacyPolicy.tsx` - Privacy policy page
- `src/pages/TermsOfService.tsx` - Terms page
- `src/index.css` - Global styles and animations
- `src/sections/` - All section components

### Sections
- `Navigation.tsx` - Header with logo and nav
- `Hero.tsx` - Main hero section
- `Services.tsx` - Services grid (4 cards)
- `Features.tsx` - Features section with circular stats graphic
- `Contact.tsx` - Contact form and info
- `Footer.tsx` - 3-column footer (NO social, NO newsletter)

## Important Notes

### Animation Rules
- All animations MUST be fast (0.4s max)
- Use `ease-out` for smooth, modern feel
- No bouncy cubic-bezier curves
- Keep hover effects subtle

### Content Rules
- Write like you're talking to a business owner, not a Fortune 500 CEO
- Keep it simple and direct
- Avoid marketing fluff
- Focus on practical benefits

### Footer Structure
```
[Brand Column]       [Services Column]      [Company Column]
- Logo               - Webbdesign          - Om oss
- Description        - Webbutveckling      - Kontakt
                     - E-handel
                     - Webbapplikationer

[Bottom Bar]
Copyright © 2026 FSwebworks | Integritetspolicy | Användarvillkor
```

### Navigation Links
- Tjänster → #services (scroll to section)
- Om oss → #features (scroll to section)
- Kontakt → #contact (scroll to section)

## Recent Changes (2026-02-11)
1. ✅ Installed React Router for multi-page support
2. ✅ Updated all animations: 0.8s → 0.4s, cubic-bezier → ease-out
3. ✅ Rewrote all content to be less formal/elegant, more SMB-friendly
4. ✅ Updated contact info (fredrik@fswebworks.se, +46 76 206 02 12)
5. ✅ Removed social media icons from footer
6. ✅ Removed newsletter section
7. ✅ Created privacy policy page (Swedish, GDPR-compliant)
8. ✅ Created terms of service page (Swedish)
9. ✅ Updated footer links to point to actual pages

## Development Commands
- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Git Status
- **NOT a git repository** (as of last check)
- Consider initializing git for version control

## Future Considerations
- Add actual project portfolio/case studies
- Consider adding a blog for SEO
- May want to add testimonials from real clients
- Consider adding a FAQ section
- Might need domain-specific email setup
