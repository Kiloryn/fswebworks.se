import { useEffect, useRef } from 'react';
import { Palette, Code, ShoppingBag, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Webbdesign',
    description: 'Modern design som ser bra ut och funkar på alla enheter.',
    price: 'Från 9 900 kr',
    features: ['Anpassad design', 'Mobilvänlig', 'SEO-optimerad']
  },
  {
    icon: Code,
    title: 'Webbutveckling',
    description: 'Vi bygger snabba, säkra webbplatser med modern teknik.',
    price: 'Från 19 900 kr',
    features: ['Ren kod', 'Snabb laddning', 'Enkel uppdatering']
  },
  {
    icon: ShoppingBag,
    title: 'E-handel',
    description: 'Komplett webbshop med betalning och orderhantering.',
    price: 'Från 29 900 kr',
    features: ['Swish & kort', 'Lagerhantering', 'Ordersystem']
  },
  {
    icon: Layers,
    title: 'Webbapplikationer',
    description: 'Behöver du något speciellt? Vi bygger det åt dig.',
    price: 'Kontakta oss',
    features: ['Anpassad funktionalitet', 'API-kopplingar', 'Skalbar']
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 sm:py-40"
      id="services"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#111111]" />
      
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#111111] to-transparent z-10" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a46e]/20 bg-[#c8a46e]/5 mb-8">
              <span className="text-sm text-[#c8a46e] font-medium tracking-wide">VÅRA TJÄNSTER</span>
            </div>
            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f5f5f0] mb-6" style={{ animationDelay: '100ms' }}>
              Våra tjänster
            </h2>
            <p className="reveal text-lg text-[#666666] max-w-2xl mx-auto" style={{ animationDelay: '200ms' }}>
              Allt du behöver för att komma online
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="reveal group relative bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10 hover-lift transition-all duration-500"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c8a46e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#c8a46e]/10 flex items-center justify-center mb-6 group-hover:bg-[#c8a46e]/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[#c8a46e]" />
                  </div>

                  {/* Title & Price */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-medium text-[#f5f5f0] group-hover:text-[#c8a46e] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <span className="text-lg font-light text-[#c8a46e]">{service.price}</span>
                  </div>

                  {/* Description */}
                  <p className="text-[#888888] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs text-[#999999] bg-[#2a2a2a] rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-sm text-[#c8a46e] font-medium group/btn">
                    Läs mer
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#c8a46e]/10 to-transparent transform rotate-45 translate-x-14 -translate-y-14" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
