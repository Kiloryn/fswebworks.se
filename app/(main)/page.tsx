"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const TEMPLATE_OPTIONS = [
  { id: "vvs", name: "VVS & Rörmokare" },
  { id: "elektriker", name: "Elektriker" },
  { id: "salong", name: "Salong/Skönhet" },
  { id: "restaurang", name: "Restaurang" },
  { id: "malare", name: "Målare" },
  { id: "konsult", name: "Konsult/Företagstjänster" },
];

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200, 164, 110, 0.08), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-4xl mx-auto leading-tight bg-gradient-to-r from-[#f5f5f0] via-[#d4b480] to-[#f5f5f0] bg-clip-text text-transparent" data-aos="fade-up">
          Webbdesign för små företag i Stockholm
        </h1>
        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
          <Link
            href="/process"
            className="px-10 py-5 text-lg bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#c8a46e]/20"
          >
            Så här går det till
          </Link>
          <p className="text-[#999999] mt-6 max-w-xl mx-auto text-sm md:text-base">
            Du bidrar med information om ditt företag – vi ser till att innehållet presenteras tydligt och snyggt på hemsidan.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(200, 164, 110, 0.06), transparent 60%)",
        }}
        aria-hidden
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5f5f0]" data-aos="fade-up">
          En hemsida som gör jobbet
        </h2>
        <p className="text-[#999999] text-lg leading-relaxed" data-aos="fade-up" data-aos-delay="100">
          Alla företag behöver inte en stor eller avancerad webbplats. Ofta räcker det med en tydlig, snygg och mobilanpassad hemsida som visar vad du gör, var du finns och hur kunder kontaktar dig. Det är precis vad vi hjälper till med.
        </p>
      </div>
    </section>
  );
}

function PricingSection() {
  const tiers = [
    {
      name: "Bas",
      price: "690",
      period: "kr/mån",
      description: "Hosting, SSL, Backup, säkerhetsuppdateringar",
    },
    {
      name: "Standard",
      price: "990",
      period: "kr/mån",
      description: "Bas + mindre uppdateringar, SEO-grund, prestandaövervakning",
    },
    {
      name: "Premium",
      price: "1 490",
      period: "kr/mån",
      description: "Standard + prioriterad support, innehållsuppdateringar, månatliga rapporter",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-[#111111] overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">
            Priser
          </h2>
          <p className="text-[#999999] mb-2">
            Engångspris: <span className="text-[#f5f5f0] font-semibold">Från 9 900 kr</span>{" "}
            <span className="text-[#666666] text-sm align-baseline">exkl. moms</span>
          </p>
          <p className="text-[#666666] text-sm mt-4">Hosting & Drift – exkl. <span className="text-[#666666] text-xs">moms</span></p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-[#c8a46e]/40 transition-colors"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <h3 className="text-xl font-semibold text-[#f5f5f0] mb-2">{tier.name}</h3>
              <p className="text-2xl font-bold text-[#f5f5f0]">
                {tier.price} {tier.period}
              </p>
              <p className="text-xs text-[#666666] mb-4">exkl. <span className="text-[10px]">moms</span></p>
              <p className="text-[#999999] text-sm">{tier.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center" data-aos="fade-up">
          <Link
            href="/process"
            className="inline-block px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
          >
            Så här går det till
          </Link>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "Måste jag skriva texterna själv?",
    a: "Ja, i grunden utgår vi från texter och information från dig, eftersom du känner din verksamhet bäst. Vi hjälper gärna till att strukturera, anpassa och lägga in texterna så att de fungerar bra på webben. Om du vill ha hjälp med formuleringar eller texter kan det erbjudas som tillägg.",
  },
  {
    q: "Vad händer om jag inte har färdiga texter?",
    a: "Det är väldigt vanligt. Vi börjar ofta med enkla utkast, stödfrågor eller befintligt material, och bygger vidare därifrån. Målet är att det ska kännas enkelt – inte stressande.",
  },
  {
    q: "Kan ni hjälpa till att ändra texter i efterhand?",
    a: "Absolut. Mindre textändringar kan göras via vår löpande webb-hjälp eller som enstaka uppdrag vid behov.",
  },
  {
    q: "Är jag bunden till er om ni bygger hemsidan?",
    a: "Nej. Du äger alltid din hemsida och väljer själv om du vill ha fortsatt hjälp eller inte.",
  },
];

function FAQSection() {
  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-12 text-center" data-aos="fade-up">
          Vanliga frågor
        </h2>
        <ul className="space-y-8">
          {FAQ_ITEMS.map((item, i) => (
            <li key={i} className="border-b border-[#2a2a2a] pb-8 last:border-0" data-aos="fade-up" data-aos-delay={i * 50}>
              <h3 className="text-lg font-semibold text-[#f5f5f0] mb-2">{item.q}</h3>
              <p className="text-[#999999] leading-relaxed">{item.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mall = searchParams.get("mall");
    if (mall && TEMPLATE_OPTIONS.some((t) => t.id === mall)) {
      setTemplateId(mall);
    }
  }, [searchParams]);

  useEffect(() => {
    if ((status === "success" || status === "error") && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedName) {
      setErrorMessage("Namn krävs");
      setStatus("error");
      return;
    }
    if (!trimmedEmail) {
      setErrorMessage("E-post krävs");
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setErrorMessage("Ogiltig e-postadress");
      setStatus("error");
      return;
    }
    if (!trimmedMessage) {
      setErrorMessage("Meddelande krävs");
      setStatus("error");
      return;
    }
    const templateName =
      templateId && templateId !== "other"
        ? TEMPLATE_OPTIONS.find((t) => t.id === templateId)?.name ?? ""
        : "";
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          template: templateName,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data.detail ? `${data.error} (${data.detail})` : data.error || "Något gick fel";
        setErrorMessage(msg);
        setStatus("error");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTemplateId("");
    } catch {
      setErrorMessage("Kunde inte skicka. Försök igen.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#111111] relative overflow-hidden" ref={sectionRef}>
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">
          Kontakta oss
        </h2>
        <p className="text-[#999999] mb-10">
          Osäker på vad du behöver? Hör av dig så pratar vi igenom det – helt utan förpliktelser.
        </p>

        {status === "success" ? (
          <div className="max-w-lg mx-auto py-8 px-6 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl text-[#f5f5f0]">
            <p className="text-lg font-medium text-[#c8a46e] mb-2">Tack för din förfrågan!</p>
            <p className="text-[#999999]">Vi återkommer inom 24 timmar.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-lg mx-auto">
            {errorMessage && (
              <p className="text-red-400 text-sm" role="alert">
                {errorMessage}
              </p>
            )}
            <div>
              <label htmlFor="contact-name" className="block text-[#e5e5e0] text-sm font-medium mb-1.5">
                Namn
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Ditt namn"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-[#e5e5e0] text-sm font-medium mb-1.5">
                E-post
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="din@epost.se"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
              />
            </div>
            <div>
              <label htmlFor="contact-template" className="block text-[#e5e5e0] text-sm font-medium mb-1.5">
                Vilken typ av sida? (valfritt)
              </label>
              <select
                id="contact-template"
                name="template"
                value={templateId}
                onChange={(e) => setTemplateId(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] focus:border-[#c8a46e] focus:outline-none disabled:opacity-60"
              >
                <option value="">— Välj —</option>
                {TEMPLATE_OPTIONS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                  </option>
                ))}
                <option value="other">Övrigt</option>
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-[#e5e5e0] text-sm font-medium mb-1.5">
                Meddelande
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Skriv ditt meddelande..."
                rows={4}
                autoComplete="off"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none resize-none disabled:opacity-60"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Skickar..." : "Skicka förfrågan"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function ExamplesTeaserSection() {
  return (
    <section className="relative py-16 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#f5f5f0] mb-4">
          Exempel på sidor
        </h2>
        <p className="text-[#999999] mb-6 max-w-xl mx-auto">
          Se demosidor för VVS, elektriker, salong, restaurang, målare och konsult.
        </p>
        <Link
          href="/examples"
          className="inline-block px-6 py-3 border border-[#c8a46e] text-[#c8a46e] font-semibold rounded-lg hover:bg-[#c8a46e]/10 transition-colors"
        >
          Visa exempel
        </Link>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <ValueSection />
      <PricingSection />
      <ExamplesTeaserSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
