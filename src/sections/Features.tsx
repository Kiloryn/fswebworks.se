import { useEffect, useRef } from 'react';
import { Sparkles, Zap, Monitor, Target } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Snygg design',
    description: 'Vi gör webbplatser som ser proffsiga ut och är lätta att använda.'
  },
  {
    icon: Zap,
    title: 'Modern teknik',
    description: 'Vi använder modern teknik för att göra din sajt snabb och säker.'
  },
  {
    icon: Monitor,
    title: 'Fungerar överallt',
    description: 'Din webbplats ser bra ut och funkar på mobil, surfplatta och dator.'
  },
  {
    icon: Target,
    title: 'Anpassat för dig',
    description: 'Varje webbplats är unik och byggd efter dina behov.'
  }
];

export default function Features() {
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
      className="relative w-full py-32 sm:py-40 overflow-hidden"
      id="features"
    >
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[#0d0d0d]">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-radial-gradient opacity-50" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(200, 164, 110, 0.03) 0%, transparent 70%)'
        }} />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left content */}
            <div>
              <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a46e]/20 bg-[#c8a46e]/5 mb-8">
                <span className="text-sm text-[#c8a46e] font-medium tracking-wide">VARFÖR OSS</span>
              </div>

              <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f5f5f0] mb-6 leading-tight" style={{ animationDelay: '100ms' }}>
                Därför ska du välja <span className="gradient-text">oss</span>
              </h2>

              <p className="reveal text-lg text-[#666666] mb-10 leading-relaxed" style={{ animationDelay: '200ms' }}>
                Vi gör det enkelt att komma online. Inga konstigheter, bara bra webbplatser som funkar.
              </p>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="reveal group p-6 rounded-xl bg-[#1a1a1a]/50 border border-[#2a2a2a]/50 hover:border-[#c8a46e]/30 transition-all duration-300"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#c8a46e]/10 flex items-center justify-center mb-4 group-hover:bg-[#c8a46e]/20 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-[#c8a46e]" />
                    </div>
                    <h3 className="text-lg font-medium text-[#f5f5f0] mb-2 group-hover:text-[#c8a46e] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#666666] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="reveal relative" style={{ animationDelay: '200ms' }}>
              {/* Large decorative circle */}
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-[#2a2a2a]/50 animate-pulse-subtle" />
                
                {/* Inner ring */}
                <div className="absolute inset-8 rounded-full border border-[#c8a46e]/20" />
                
                {/* Center content */}
                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#c8a46e]/10 to-transparent flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-light text-[#c8a46e] mb-2">5+</div>
                    <div className="text-sm text-[#666666] uppercase tracking-wider">Års<br />erfarenhet</div>
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#c8a46e]" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#c8a46e]" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
                  <div className="w-16 h-16 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-[#c8a46e]" />
                  </div>
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="120" stroke="#2a2a2a" strokeWidth="1" fill="none" strokeDasharray="4 4" opacity="0.5" />
                </svg>
              </div>

              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-light text-[#c8a46e]">50+</div>
                <div className="text-xs text-[#666666]">Projekt</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 shadow-xl">
                <div className="text-2xl font-light text-[#c8a46e]">100%</div>
                <div className="text-xs text-[#666666]">Nöjda kunder</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
