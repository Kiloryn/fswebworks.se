import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
      id="hero"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#111111] to-[#1a1a1a]" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(200, 164, 110, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200, 164, 110, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#c8a46e]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#c8a46e]/3 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="order-2 lg:order-1">
              {/* Badge */}
              <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a46e]/20 bg-[#c8a46e]/5 mb-8">
                <Sparkles className="w-4 h-4 text-[#c8a46e]" />
                <span className="text-sm text-[#c8a46e] font-medium tracking-wide">Webbyrå i Stockholm</span>
              </div>

              {/* Headline */}
              <h1 className="reveal font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-tight mb-6" style={{ animationDelay: '100ms' }}>
                <span className="text-[#f5f5f0]">Enkla</span>
                <br />
                <span className="gradient-text">webbplatser</span>
                <br />
                <span className="text-[#f5f5f0]/80">som funkar</span>
              </h1>

              {/* Subtext */}
              <p className="reveal text-lg sm:text-xl text-[#999999] max-w-xl mb-10 leading-relaxed" style={{ animationDelay: '200ms' }}>
                Vi bygger snygga, funktionella webbplatser för småföretag och organisationer.
              </p>

              {/* CTA Buttons */}
              <div className="reveal flex flex-wrap gap-4" style={{ animationDelay: '300ms' }}>
                <Button
                  onClick={() => scrollToSection('services')}
                  className="btn-primary bg-[#c8a46e] hover:bg-[#d4b480] text-[#111111] px-8 py-6 text-base font-medium rounded-full transition-all duration-300 group"
                >
                  Utforska tjänster
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-[#333] hover:border-[#c8a46e] hover:bg-[#c8a46e]/5 text-[#f5f5f0] px-8 py-6 text-base font-medium rounded-full transition-all duration-300"
                >
                  Kontakta oss
                </Button>
              </div>

              {/* Stats */}
              <div className="reveal mt-16 pt-10 border-t border-[#2a2a2a] flex flex-wrap gap-8 sm:gap-16" style={{ animationDelay: '400ms' }}>
                <div>
                  <div className="text-3xl sm:text-4xl font-light text-[#c8a46e] mb-1">50+</div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">Projekt</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-light text-[#c8a46e] mb-1">5+</div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">Års erfarenhet</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-light text-[#c8a46e] mb-1">100%</div>
                  <div className="text-sm text-[#666666] uppercase tracking-wider">Nöjda kunder</div>
                </div>
              </div>
            </div>

            {/* Right visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="reveal relative" style={{ animationDelay: '200ms' }}>
                {/* Main visual container */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#1a1a1a]">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent z-10" />
                  
                  {/* Decorative frame */}
                  <div className="absolute inset-4 border border-[#c8a46e]/20 rounded-2xl z-20 pointer-events-none" />
                  
                  {/* Abstract geometric pattern */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="relative w-full h-full">
                      {/* Floating elements */}
                      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-[#c8a46e]/20 to-transparent rounded-2xl rotate-12 animate-pulse-subtle" />
                      <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-gradient-to-tl from-[#c8a46e]/15 to-transparent rounded-full -rotate-6" />
                      <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-[#c8a46e]/30 rounded-lg rotate-45" />
                      
                      {/* Code-like decorative lines */}
                      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 300 400">
                                                        <path d="M50 100 L80 100 L85 90 L90 100 L120 100" stroke="#c8a46e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                                        <path d="M60 130 L110 130" stroke="#c8a46e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                                        <circle cx="180" cy="120" r="40" stroke="#c8a46e" strokeWidth="1.5" fill="none" opacity="0.5"/>
                                                        <rect x="150" y="200" width="60" height="60" stroke="#c8a46e" strokeWidth="1.5" fill="none" rx="8"/>
                                                        <path d="M40 280 L80 280 L90 270 L100 280 L140 280" stroke="#c8a46e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                                        <path d="M160 270 L200 270 L210 280 L250 280" stroke="#c8a46e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                                        <path d="M80 320 L120 320 L125 310 L130 320 L170 320" stroke="#c8a46e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom text */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-[#666666]">Utveckling pågår</span>
                    </div>
                  </div>
                </div>

           
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
