import type { TemplateData } from "@/lib/templates/template-types";

export const malareData: TemplateData = {
  category: "Målare",
  companyName: "Stockholms Måleri",
  tagline: "Professionellt måleri – inomhus och utomhus",
  description:
    "Vi utför måleriarbeten för både privatpersoner och företag i Stockholm. Inomhus, utomhus, spackling och tapetsering. Kostnadsfri offert – inga förpliktelser.",
  services: [
    {
      title: "Inomhusmålning",
      description: "Tak, väggar och lister. Spackling, slipning och underhållsmålning.",
      icon: "🏠",
    },
    {
      title: "Utomhusmålning",
      description: "Fasader, träarbeten, staket och fönster. Tåliga fasadfärger.",
      icon: "🖌️",
    },
    {
      title: "Tapetsering",
      description: "Tapetläggning och specialeffekter. Vi hjälper till med val av material.",
      icon: "📐",
    },
    {
      title: "Spackling & förberedelse",
      description: "Spackling, slipning och grundning så att slutresultatet blir snyggt.",
      icon: "✨",
    },
  ],
  contact: {
    phone: "08-678 901 23",
    email: "offert@stockholmsmaleri.se",
    address: "Stockholm och runtom",
    orgNumber: "556567-8901",
  },
  colors: {
    primary: "#1e40af",
    secondary: "#1e3a8a",
    accent: "#3b82f6",
  },
  features: [
    "Tjänsteöversikt",
    "Galleri med tidigare arbeten",
    "Kontaktformulär",
    "Gratis offert-knapp",
  ],
};
