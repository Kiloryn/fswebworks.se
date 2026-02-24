import type { TemplateData } from "@/lib/templates/template-types";

export const restaurangData: TemplateData = {
  category: "Restaurang",
  companyName: "Bistro Italia",
  tagline: "Autentisk italiensk mat i Stockholm",
  description:
    "Vi serverar pasta, pizza och klassiska rätter i en varm och avslappnad miljö. Perfekt för lunch, middag eller evenemang. Välkommen att boka bord.",
  services: [
    {
      title: "Lunch",
      description: "Dagens lunch med sallad, pasta eller varmrätt. Kaffe inkluderat.",
      icon: "🍝",
    },
    {
      title: "À la carte",
      description: "Pasta, pizza, kött och fisk. Färska råvaror och husets specialiteter.",
      icon: "🍕",
    },
    {
      title: "Evenemang",
      description: "Privat uthyrning och gruppbokningar. Meny efter önskemål.",
      icon: "🎉",
    },
    {
      title: "Catering",
      description: "Catering till företag och fester. Fråga efter offert.",
      icon: "📦",
    },
  ],
  contact: {
    phone: "08-567 890 12",
    email: "boka@bistroitalia.se",
    address: "Kungsgatan 45, Stockholm",
    orgNumber: "556456-7890",
  },
  colors: {
    primary: "#c2410c",
    secondary: "#9a3412",
    accent: "#ea580c",
  },
  features: [
    "Digital meny",
    "Bordsbokning",
    "Evenemang",
    "Öppettider",
    "Kontakt",
  ],
};

export const menuSections = [
  {
    title: "Lunch (mån–fre 11–14)",
    items: [
      { name: "Dagens pasta", price: "95 kr" },
      { name: "Dagens sallad", price: "89 kr" },
      { name: "Pizza slice + sallad", price: "79 kr" },
    ],
  },
  {
    title: "Pasta",
    items: [
      { name: "Spaghetti carbonara", price: "149 kr" },
      { name: "Penne arrabiata", price: "129 kr" },
      { name: "Lasagne", price: "159 kr" },
    ],
  },
  {
    title: "Pizza",
    items: [
      { name: "Margherita", price: "119 kr" },
      { name: "Funghi", price: "129 kr" },
      { name: "Calzone", price: "139 kr" },
    ],
  },
];

export const openingHours = [
  { days: "Mån–Fre", hours: "11:00–22:00" },
  { days: "Lör–Sön", hours: "12:00–23:00" },
];
