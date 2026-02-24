import type { TemplateData } from "@/lib/templates/template-types";

export const salongData: TemplateData = {
  category: "Salong/Skönhet",
  companyName: "Glamour Salong",
  tagline: "Hårvård, styling och skönhet i hjärtat av Stockholm",
  description:
    "Välkommen till Glamour Salong. Vi erbjuder klippning, färgning, styling och skönhetsbehandlingar i en avslappnad miljö. Boka enkelt online eller ring oss.",
  services: [
    {
      title: "Klippning & Styling",
      description: "Dam, herr och barn. Vi anpassar klippningen efter dig och din livsstil.",
      icon: "✂️",
    },
    {
      title: "Färgning",
      description: "Hel färgning, slingor, balayage och toning. Professionella produkter.",
      icon: "🎨",
    },
    {
      title: "Skönhetsbehandlingar",
      description: "Ansiktsbehandlingar, bryggning och ögonbryn. Perfekt för dig som vill koppla av.",
      icon: "✨",
    },
    {
      title: "Bröllop & fest",
      description: "Uppsättning och styling inför bröllop, fest eller speciella tillfällen.",
      icon: "💐",
    },
  ],
  contact: {
    phone: "08-789 012 34",
    email: "boka@glamoursalong.se",
    address: "Storgatan 12, Stockholm",
    orgNumber: "556345-6789",
  },
  colors: {
    primary: "#be185d",
    secondary: "#9d174d",
    accent: "#ec4899",
  },
  features: [
    "Online-bokning",
    "Behandlingsmeny",
    "Priser",
    "Galleri",
    "Personal",
  ],
};

export const treatments = [
  { name: "Damklippning", price: "from 650 kr", duration: "ca 45 min" },
  { name: "Herrklippning", price: "from 450 kr", duration: "ca 30 min" },
  { name: "Barn (under 12)", price: "from 350 kr", duration: "ca 25 min" },
  { name: "Hel färgning", price: "from 1 290 kr", duration: "ca 2 tim" },
  { name: "Ansiktsbehandling", price: "from 690 kr", duration: "ca 60 min" },
];
