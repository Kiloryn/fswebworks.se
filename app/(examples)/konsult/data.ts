import type { TemplateData } from "@/lib/templates/template-types";

export const konsultData: TemplateData = {
  category: "Konsult/Företagstjänster",
  companyName: "Anders Eriksson – Strategi & Ledarskap",
  tagline: "Företagsutveckling, strategi och ledarskap – så att du når målen",
  description:
    "Jag hjälper ledare och organisationer att utveckla strategi, ledarskap och samarbete. Med över 20 års erfarenhet från både privat och offentlig sektor erbjuder jag coaching, workshops och rådgivning.",
  services: [
    {
      title: "Strategi & företagsutveckling",
      description: "Strategiska processer, affärsutveckling och organisationsdesign. Pragmatiskt och resultatinriktat.",
      icon: "📊",
    },
    {
      title: "Ledarskap & coaching",
      description: "Individuell coaching för ledare och nästa steg-chefer. Utveckling av ledarskapsförmåga.",
      icon: "🎯",
    },
    {
      title: "Workshops & teamutveckling",
      description: "Faciliterade workshops för team och ledningsgrupper. Tydliga mål och konkreta nästa steg.",
      icon: "👥",
    },
    {
      title: "Rådgivning",
      description: "Rådgivning kring förändringsledning, kommunikation och samarbete mellan avdelningar.",
      icon: "💼",
    },
  ],
  contact: {
    phone: "070-123 45 67",
    email: "anders@anderseriksson.se",
    address: "Stockholm",
    orgNumber: "År 1998 (enskild firma)",
  },
  colors: {
    primary: "#4f46e5",
    secondary: "#312e81",
    accent: "#818cf8",
  },
  features: [
    "Tjänsteöversikt",
    "Om mig",
    "Kontakt",
  ],
};

export const aboutText = `Jag heter Anders Eriksson och har arbetat med strategi, ledarskap och organisationsutveckling i över 20 år. Jag har lett egna och andras verksamheter och hjälpt allt från små team till stora organisationer att nå tydligare mål och bättre samarbete.

Jag tror på enkla modeller, tydlig kommunikation och att sätta nästa steg före perfekta planer. Om du vill prata om ett uppdrag, en workshop eller långsiktig coaching – hör av dig.`;
