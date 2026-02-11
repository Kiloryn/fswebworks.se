import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 sm:py-40"
      id="contact"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#111111]" />
      
      {/* Subtle gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-[#0d0d0d] to-transparent" />

      <div className="relative z-10 w-full px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c8a46e]/20 bg-[#c8a46e]/5 mb-8">
              <span className="text-sm text-[#c8a46e] font-medium tracking-wide">KONTAKTA OSS</span>
            </div>
            <h2 className="reveal font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#f5f5f0] mb-6" style={{ animationDelay: '100ms' }}>
              Låt oss <span className="gradient-text">prata om ditt projekt</span>
            </h2>
            <p className="reveal text-lg text-[#666666] max-w-2xl mx-auto" style={{ animationDelay: '200ms' }}>
              Hör av dig så berättar du om ditt projekt, så hjälper vi dig att komma online
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="reveal space-y-8" style={{ animationDelay: '300ms' }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c8a46e]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#c8a46e]" />
                  </div>
                  <div>
                    <h4 className="text-sm text-[#666666] uppercase tracking-wider mb-1">E-post</h4>
                    <a href="mailto:fredrik@fswebworks.se" className="text-[#f5f5f0] hover:text-[#c8a46e] transition-colors">
                      fredrik@fswebworks.se
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c8a46e]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#c8a46e]" />
                  </div>
                  <div>
                    <h4 className="text-sm text-[#666666] uppercase tracking-wider mb-1">Telefon</h4>
                    <a href="tel:+46762060212" className="text-[#f5f5f0] hover:text-[#c8a46e] transition-colors">
                      +46 76 206 02 12
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#c8a46e]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#c8a46e]" />
                  </div>
                  <div>
                    <h4 className="text-sm text-[#666666] uppercase tracking-wider mb-1">Adress</h4>
                    <p className="text-[#f5f5f0]">
                      Stockholm, Sverige
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="reveal mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#c8a46e]/5 to-transparent border border-[#c8a46e]/10" style={{ animationDelay: '400ms' }}>
                <p className="text-[#f5f5f0]/80 italic leading-relaxed">
                  "Vi gör webbplatser som är snygga, snabba och enkla att använda. Inget krångel, bara resultat."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c8a46e]/20" />
                  <div>
                    <div className="text-sm font-medium text-[#f5f5f0]">Fredrik</div>
                    <div className="text-xs text-[#666666]">Grundare, FSwebworks</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="reveal" style={{ animationDelay: '400ms' }}>
                <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-8 lg:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-medium text-[#f5f5f0] mb-2">Tack för ditt meddelande!</h3>
                      <p className="text-[#666666]">Vi återkommer till dig så snart som möjligt.</p>
                    </div>
                  ) : (
                    <>
                      <div className="grid sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm text-[#666666] mb-2">
                            Namn <span className="text-[#c8a46e]">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-[#111111] border-[#2a2a2a] text-[#f5f5f0] placeholder:text-[#444444] focus:border-[#c8a46e] focus:ring-[#c8a46e]/20 rounded-xl h-12"
                            placeholder="Ditt namn"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm text-[#666666] mb-2">
                            E-post <span className="text-[#c8a46e]">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-[#111111] border-[#2a2a2a] text-[#f5f5f0] placeholder:text-[#444444] focus:border-[#c8a46e] focus:ring-[#c8a46e]/20 rounded-xl h-12"
                            placeholder="Din e-post"
                          />
                        </div>
                      </div>

                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm text-[#666666] mb-2">
                          Ämne
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className="bg-[#111111] border-[#2a2a2a] text-[#f5f5f0] placeholder:text-[#444444] focus:border-[#c8a46e] focus:ring-[#c8a46e]/20 rounded-xl h-12"
                          placeholder="Vad gäller ditt ärende?"
                        />
                      </div>

                      <div className="mb-8">
                        <label htmlFor="message" className="block text-sm text-[#666666] mb-2">
                          Meddelande <span className="text-[#c8a46e]">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-[#111111] border-[#2a2a2a] text-[#f5f5f0] placeholder:text-[#444444] focus:border-[#c8a46e] focus:ring-[#c8a46e]/20 rounded-xl min-h-[150px] resize-none"
                          placeholder="Berätta om ditt projekt..."
                        />
                      </div>

                      <Button
                        type="submit"
                        className="btn-primary w-full bg-[#c8a46e] hover:bg-[#d4b480] text-[#111111] py-6 text-base font-medium rounded-xl transition-all duration-300 group"
                      >
                        Skicka meddelande
                        <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
