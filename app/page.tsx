'use client';

import { useState, useEffect } from 'react';

// Hero Section Component
function HeroSection({ content }: { content: any }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]" />
      {content.heroImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${content.heroImage})` }}
        />
      )}
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div className="inline-block px-4 py-2 bg-[#c8a46e]/10 border border-[#c8a46e]/20 rounded-full text-[#c8a46e] text-sm mb-8">
          {content.hero.badge}
        </div>
        
        {/* Logo - only show if uploaded */}
        {content.hero.logo && (
          <div className="mb-8">
            <img src={content.hero.logo} alt="Logo" className="h-24 mx-auto object-contain" />
          </div>
        )}
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#f5f5f0] mb-6 max-w-4xl mx-auto leading-tight">
          {content.hero.heading}
        </h1>
        
        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#999999] mb-10 max-w-2xl mx-auto leading-relaxed">
          {content.hero.subheading}
        </p>
        
        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {content.hero.benefits?.map((benefit: string, i: number) => (
            <div key={i} className="flex items-center gap-2 text-[#999999]">
              <svg className="w-5 h-5 text-[#c8a46e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {benefit}
            </div>
          ))}
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
          >
            {content.hero.ctaPrimary}
          </button>
          <button 
            onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-transparent border border-[#333333] text-[#f5f5f0] font-semibold rounded-lg hover:border-[#c8a46e] hover:text-[#c8a46e] transition-colors"
          >
            {content.hero.ctaSecondary}
          </button>
        </div>
        
        {/* Trust Text */}
        <p className="text-[#666666] mt-8 text-sm">
          {content.hero.trustText}
        </p>
      </div>
    </section>
  );
}

// Services Section Component
function ServicesSection({ content }: { content: any }) {
  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">
            {content.services.sectionTitle}
          </h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            {content.services.sectionSubtitle}
          </p>
        </div>
        
        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Package 1 */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c8a46e]/30 transition-colors">
            {content.services.package1.image ? (
              <img 
                src={content.services.package1.image} 
                alt={content.services.package1.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-6xl">🏠</span>
              </div>
            )}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-[#f5f5f0]">
                {content.services.package1.price}
              </span>
              <span className="text-[#666666]">/ {content.services.package1.priceLabel}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#f5f5f0] mb-3">
              {content.services.package1.title}
            </h3>
            <p className="text-[#999999] mb-6">
              {content.services.package1.description}
            </p>
            <ul className="space-y-3 mb-8">
              {content.services.package1.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-[#999999]">
                  <svg className="w-5 h-5 text-[#c8a46e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
            >
              {content.services.package1.cta}
            </button>
          </div>
          
          {/* Package 2 */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8 hover:border-[#c8a46e]/30 transition-colors">
            {content.services.package2.image ? (
              <img 
                src={content.services.package2.image} 
                alt={content.services.package2.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
            ) : (
              <div className="w-full h-48 bg-gradient-to-br from-[#1a1a1a] to-[#111111] rounded-lg mb-6 flex items-center justify-center">
                <span className="text-6xl">🔧</span>
              </div>
            )}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-3xl font-bold text-[#f5f5f0]">
                {content.services.package2.price}
              </span>
              <span className="text-[#666666]">/ {content.services.package2.priceLabel}</span>
            </div>
            <h3 className="text-xl font-semibold text-[#f5f5f0] mb-3">
              {content.services.package2.title}
            </h3>
            <p className="text-[#999999] mb-6">
              {content.services.package2.description}
            </p>
            <ul className="space-y-3 mb-8">
              {content.services.package2.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-[#999999]">
                  <svg className="w-5 h-5 text-[#c8a46e] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 bg-transparent border border-[#c8a46e] text-[#c8a46e] font-semibold rounded-lg hover:bg-[#c8a46e] hover:text-[#111111] transition-colors">
              {content.services.package2.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Template Preview Components - Realistic mini-websites
function PlumberPreview() {
  return (
    <div className="h-full bg-gradient-to-b from-blue-900 to-blue-950 p-2">
      <div className="bg-white rounded h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-[6px] font-bold text-blue-600">P</span>
            </div>
            <span className="text-[6px] font-bold text-white">RÖR-PRO</span>
          </div>
          <div className="w-8 bg-green-500 rounded text-[5px] text-white text-center py-0.5 font-bold">RING</div>
        </div>
        {/* Hero */}
        <div className="bg-gray-100 flex-1 p-2">
          <div className="text-[7px] font-bold text-gray-800 mb-1">Din rörmokare i Stockholm</div>
          <div className="text-[5px] text-gray-600 mb-1">✓ Akut service</div>
          <div className="text-[5px] text-gray-600 mb-1">✓Jour dygnet runt</div>
          <div className="text-[5px] text-gray-600">✓ Fri offert</div>
        </div>
      </div>
    </div>
  );
}

function ElectricianPreview() {
  return (
    <div className="h-full bg-gradient-to-b from-yellow-900 to-yellow-950 p-2">
      <div className="bg-white rounded h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-yellow-500 px-2 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[8px]">⚡</span>
            <span className="text-[6px] font-bold text-black">EL-SÄKERT</span>
          </div>
          <div className="w-8 bg-black rounded text-[5px] text-white text-center py-0.5">KONTAKT</div>
        </div>
        {/* Hero */}
        <div className="bg-gray-50 flex-1 p-2">
          <div className="text-[7px] font-bold text-gray-900 mb-1">Elinstallation & Säkerhet</div>
          <div className="flex gap-1 mb-1">
            <div className="bg-yellow-100 text-[4px] px-1 rounded text-yellow-800">Certifierad</div>
            <div className="bg-yellow-100 text-[4px] px-1 rounded text-yellow-800">A-behörighet</div>
          </div>
          <div className="text-[5px] text-gray-600">Nyinstallation • Felavhjälpning • Besiktning</div>
        </div>
      </div>
    </div>
  );
}

function SalonPreview() {
  return (
    <div className="h-full bg-gradient-to-b from-pink-900 to-pink-950 p-2">
      <div className="bg-white rounded h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-pink-500 px-2 py-1.5 flex items-center justify-between">
          <span className="text-[6px] font-bold text-white italic">GLAMOUR SALONG</span>
          <div className="w-8 bg-white text-[5px] text-pink-600 text-center py-0.5 rounded font-bold">BOKA</div>
        </div>
        {/* Hero */}
        <div className="bg-pink-50 flex-1 p-2">
          <div className="text-[7px] font-bold text-pink-900 mb-1">Hårvård & Styling</div>
          <div className="text-[5px] text-gray-600 mb-1">Klippning • Färgning • Styling</div>
          <div className="text-[5px] text-gray-500">Öppet: Mån-Fre 9-18</div>
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview() {
  return (
    <div className="h-full bg-gradient-to-b from-orange-900 to-orange-950 p-2">
      <div className="bg-white rounded h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-orange-700 px-2 py-1.5 flex items-center justify-between">
          <span className="text-[6px] font-bold text-white">BISTRO ITALIA</span>
          <div className="w-8 bg-red-600 rounded text-[5px] text-white text-center py-0.5 font-bold">BOKA</div>
        </div>
        {/* Hero */}
        <div className="bg-stone-100 flex-1 p-2">
          <div className="text-[6px] font-bold text-gray-800 mb-1">Veckans Lunch</div>
          <div className="text-[5px] text-gray-600 mb-0.5 flex justify-between">
            <span>Pasta Carbonara</span><span>89 kr</span>
          </div>
          <div className="text-[5px] text-gray-600 mb-0.5 flex justify-between">
            <span>Caesarsallad</span><span>79 kr</span>
          </div>
          <div className="text-[5px] text-gray-600 flex justify-between">
            <span>Grillad lax</span><span>119 kr</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RetailPreview() {
  return (
    <div className="h-full bg-gradient-to-b from-green-900 to-green-950 p-2">
      <div className="bg-white rounded h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-green-600 px-2 py-1.5 flex items-center justify-between">
          <span className="text-[6px] font-bold text-white">BUTIK Stockholm</span>
          <div className="w-8 bg-white text-[5px] text-green-700 text-center py-0.5 rounded font-bold">KÖP</div>
        </div>
        {/* Hero */}
        <div className="bg-gray-50 flex-1 p-2">
          <div className="text-[7px] font-bold text-gray-800 mb-1">Nya produkter</div>
          <div className="grid grid-cols-3 gap-1">
            <div className="bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-[8px]">📦</span>
            </div>
            <div className="bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-[8px]">📦</span>
            </div>
            <div className="bg-gray-200 h-8 rounded flex items-center justify-center">
              <span className="text-[8px]">📦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultantPreview() {
  return (
    <div className="h-full bg-gradient-to-b from-purple-900 to-purple-950 p-2">
      <div className="bg-white rounded h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-purple-800 px-2 py-1.5 flex items-center justify-between">
          <span className="text-[6px] font-bold text-white">ANDERS ERIKSSON</span>
          <span className="text-[5px] text-purple-200">Konsult</span>
        </div>
        {/* Hero */}
        <div className="bg-purple-50 flex-1 p-2">
          <div className="text-[7px] font-bold text-purple-900 mb-1">Strategi & Ledarskap</div>
          <div className="text-[5px] text-gray-600 mb-1">20 års erfarenhet</div>
          <div className="flex gap-1">
            <div className="bg-purple-200 text-[4px] px-1 rounded text-purple-800">Företagsutveckling</div>
            <div className="bg-purple-200 text-[4px] px-1 rounded text-purple-800">Coaching</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Template Card Component
function TemplateCard({ template }: { template: any }) {
  return (
    <div className="group bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl overflow-hidden hover:border-[#c8a46e]/30 transition-all cursor-pointer hover:-translate-y-1">
      {/* Website Preview */}
      <div className="h-36">
        {template.id === 'plumber' && <PlumberPreview />}
        {template.id === 'electrician' && <ElectricianPreview />}
        {template.id === 'salon' && <SalonPreview />}
        {template.id === 'restaurant' && <RestaurantPreview />}
        {template.id === 'retail' && <RetailPreview />}
        {template.id === 'consultant' && <ConsultantPreview />}
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#f5f5f0] group-hover:text-[#c8a46e] transition-colors mb-1.5">
          {template.name}
        </h3>
        <p className="text-[#666666] text-sm mb-3">
          {template.description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-1.5">
          {template.features.map((feature: string, i: number) => (
            <span 
              key={i}
              className="text-xs px-2 py-1 bg-[#1a1a1a] text-[#999999] rounded"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Templates data
const templates = [
  {
    id: 'plumber',
    name: 'VVS & Rörmokare',
    description: 'Akut service, jourdygnet runt, offreförfrågan',
    features: ['Akut kontakt-knapp', 'Tjänsteöversikt', 'Prislista']
  },
  {
    id: 'electrician',
    name: 'Elektriker',
    description: 'Elinstallation, säkerhet, certifierad',
    features: ['Säkerhetsfokus', 'Certifieringar', 'Kontaktformulär']
  },
  {
    id: 'salon',
    name: 'Salong',
    description: 'Bokning, behandlingar, priser',
    features: ['Online-bokning', 'Behandlingsmeny', 'Priser']
  },
  {
    id: 'restaurant',
    name: 'Restaurang',
    description: 'Meny, bordsbokning, evenemang',
    features: ['Digital meny', 'Bordsbokning', 'Evenemang']
  },
  {
    id: 'retail',
    name: 'Butik',
    description: 'Produkter, e-handel, öppettider',
    features: ['Produktkatalog', 'Öppettider', 'Kontakt']
  },
  {
    id: 'consultant',
    name: 'Konsult',
    description: 'Expertis, tjänster, kontakt',
    features: ['Tjänsteöversikt', 'Om mig', 'Kontakt']
  }
];

// Examples Section Component
function ExamplesSection({ content }: { content: any }) {
  return (
    <section id="examples" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">
            {content.examples.sectionTitle}
          </h2>
          <p className="text-[#999999] max-w-2xl mx-auto">
            {content.examples.sectionSubtitle}
          </p>
        </div>
        
        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-[#999999] mb-4">
            Alla mallar anpassas efter ditt företags varumärke och behov
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
          >
            Beställ din hemsida
          </button>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection({ content }: { content: any }) {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background */}
      {content.contact.image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${content.contact.image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f0] mb-4">
          {content.contact.sectionTitle}
        </h2>
        <p className="text-[#999999] mb-10">
          {content.contact.sectionSubtitle}
        </p>
        
        {/* Contact Form */}
        <form className="space-y-4 text-left max-w-lg mx-auto">
          <div>
            <input 
              type="text" 
              placeholder="Namn"
              className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="E-post"
              className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none"
            />
          </div>
          <div>
            <textarea 
              placeholder="Meddelande"
              rows={4}
              className="w-full px-4 py-3 bg-[#111111] border border-[#2a2a2a] rounded-lg text-[#f5f5f0] placeholder-[#666666] focus:border-[#c8a46e] focus:outline-none resize-none"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 bg-[#c8a46e] text-[#111111] font-semibold rounded-lg hover:bg-[#d4b480] transition-colors"
          >
            Skicka förfrågan
          </button>
        </form>
      </div>
    </section>
  );
}

// Default content
const defaultContent = {
  hero: {
    badge: "Webbdesign för småföretag i Stockholm",
    heading: "Enkla hemsidor för småföretag – utan krångel",
    subheading: "Vi hjälper hantverkare och småföretag att få en professionell hemsida som syns, fungerar och är lätt att äga själv.",
    benefits: ["Enkla hemsidor utan krångel", "Tydliga priser från 9 900 kr", "Du äger din hemsida", "Ingen bindningstid"],
    ctaPrimary: "Se våra priser",
    ctaSecondary: "Se exempel",
    trustText: "Fast pris • Ingen bindning • Du äger hemsidan",
    logo: "",
    heroImage: ""
  },
  services: {
    sectionTitle: "Våra tjänster",
    sectionSubtitle: "Alla priser är från-priser och anpassas efter behov.",
    package1: {
      title: "Enkel hemsida",
      price: "9 900 kr",
      priceLabel: "från",
      description: "En tydlig och professionell hemsida utan krångel.",
      features: ["Uppstartssamtal", "Design anpassad efter ditt företag", "1-5 sidor", "Mobilanpassad"],
      cta: "Begär offert",
      image: ""
    },
    package2: {
      title: "Webb-hjälp & underhåll",
      price: "490 kr",
      priceLabel: "från / månad",
      description: "För dig som vill ha en trygg kontakt.",
      features: ["Textuppdateringar", "Teknisk support", "Ingen bindning"],
      cta: "Läs mer",
      image: ""
    }
  },
  examples: {
    sectionTitle: "Våra mallar",
    sectionSubtitle: "Vi har färdiga mallar för olika branscher."
  },
  contact: {
    sectionTitle: "Kontakta oss",
    sectionSubtitle: "Skicka en förfrågan så återkommer vi inom 24 timmar.",
    image: ""
  }
};

export default function Home() {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  // Load content from localStorage or use default
  useEffect(() => {
    const savedContent = localStorage.getItem('fswebworks_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch (e) {
        console.error('Failed to parse content:', e);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#c8a46e]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroSection content={content} />
      <ServicesSection content={content} />
      <ExamplesSection content={content} />
      <ContactSection content={content} />
    </main>
  );
}
