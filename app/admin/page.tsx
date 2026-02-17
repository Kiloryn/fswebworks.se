'use client';

import { useState, useEffect } from 'react';

const defaultContent = {
  hero: {
    badge: 'Webbdesign för småföretag i Stockholm',
    heading: 'Enkla hemsidor för småföretag – utan krångel',
    subheading: 'Vi hjälper hantverkare och småföretag att få en professionell hemsida som syns, fungerar och är lätt att äga själv.',
    benefits: ['Enkla hemsidor utan krångel', 'Tydliga priser från 9 900 kr', 'Du äger din hemsida', 'Ingen bindningstid'],
    ctaPrimary: 'Se våra priser',
    ctaSecondary: 'Se exempel',
    trustText: 'Fast pris • Ingen bindning • Du äger hemsidan',
    logo: '',
    heroImage: ''
  },
  services: {
    sectionTitle: 'Våra tjänster',
    sectionSubtitle: 'Alla priser är från-priser och anpassas efter behov.',
    package1: {
      title: 'Enkel hemsida',
      price: '9 900 kr',
      priceLabel: 'från',
      description: 'En tydlig och professionell hemsida utan krångel.',
      features: ['Uppstartssamtal', 'Design anpassad efter ditt företag', '1-5 sidor', 'Mobilanpassad'],
      cta: 'Begär offert',
      image: ''
    },
    package2: {
      title: 'Webb-hjälp & underhåll',
      price: '490 kr',
      priceLabel: 'från / månad',
      description: 'För dig som vill ha en trygg kontakt.',
      features: ['Textuppdateringar', 'Teknisk support', 'Ingen bindning'],
      cta: 'Läs mer',
      image: ''
    }
  },
  examples: {
    sectionTitle: 'Våra mallar',
    sectionSubtitle: 'Vi har färdiga mallar för olika branscher.'
  },
  contact: {
    sectionTitle: 'Kontakta oss',
    sectionSubtitle: 'Skicka en förfrågan så återkommer vi inom 24 timmar.',
    image: ''
  }
};

const ADMIN_PASSWORD = 'fswebworks2024';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [content, setContent] = useState(defaultContent);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  useEffect(() => {
    const savedContent = localStorage.getItem('fswebworks_content');
    if (savedContent) {
      try {
        setContent(JSON.parse(savedContent));
      } catch {
        console.log('Failed to parse saved content');
      }
    }
    
    const auth = sessionStorage.getItem('fswebworks_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
      sessionStorage.setItem('fswebworks_admin_auth', 'true');
    } else {
      setLoginError('Fel lösenord');
    }
  };

  const handleSave = () => {
    setIsLoading(true);
    try {
      localStorage.setItem('fswebworks_content', JSON.stringify(content));
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      console.error('Save error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('fswebworks_admin_auth');
  };

  const updateContent = (section: string, field: string, value: string) => {
    setContent((prev: typeof defaultContent) => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [field]: value
      }
    }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-2xl p-8">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#c8a46e] flex items-center justify-center">
                <span className="text-xl font-bold text-[#111111]">F</span>
              </div>
              <span className="text-xl font-medium text-[#f5f5f0]">fswebworks</span>
            </div>
            <h1 className="text-2xl font-bold text-white text-center mb-2">Admin Panel</h1>
            <p className="text-gray-500 text-center mb-8">Logga in för att redigera hemsidans innehåll</p>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm text-gray-400 mb-2">Lösenord</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none"
                  placeholder="Ange lösenord"
                />
                {loginError && <p className="text-red-500 text-sm mt-2">{loginError}</p>}
              </div>
              <button
                type="submit"
                className="w-full bg-[#c8a46e] hover:bg-[#d4b480] text-black py-3 rounded-lg font-medium transition-colors"
              >
                Logga in
              </button>
            </form>
            <div className="mt-6 p-4 bg-[#1a1a1a] rounded-lg">
              <p className="text-xs text-gray-500">Demo-lösenord: fswebworks2024</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="bg-[#111111] border-b border-[#2a2a2a] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#c8a46e] flex items-center justify-center">
                <span className="text-lg font-bold text-[#111111]">F</span>
              </div>
              <span className="text-lg font-medium text-white">fswebworks Admin</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="/" target="_blank" className="text-sm text-gray-400 hover:text-white">Visa hemsida</a>
              <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-white">Logga ut</button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <nav className="lg:w-64 flex-shrink-0">
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-4 sticky top-24">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-4">Redigera sektion</h3>
              <div className="space-y-1">
                {[
                  { id: 'hero', label: 'Hero / Första sidan' },
                  { id: 'services', label: 'Tjänster & Priser' },
                  { id: 'contact', label: 'Kontakt' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#c8a46e]/10 text-[#c8a46e] border border-[#c8a46e]/20'
                        : 'text-gray-400 hover:bg-[#1a1a1a] hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-[#2a2a2a]">
                <button
                  onClick={handleSave}
                  disabled={isLoading}
                  className="w-full py-3 bg-[#c8a46e] hover:bg-[#d4b480] text-black font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {isLoading ? 'Sparar...' : 'Spara ändringar'}
                </button>
                {saved && <p className="text-green-500 text-sm text-center mt-2">Sparat!</p>}
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <div className="bg-[#111111] border border-[#2a2a2a] rounded-xl p-6">
              {activeTab === 'hero' && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-6">Hero-sektion</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Badge-text</label>
                      <input type="text" value={content.hero.badge} onChange={(e) => updateContent('hero', 'badge', e.target.value)} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Huvudrubrik</label>
                      <input type="text" value={content.hero.heading} onChange={(e) => updateContent('hero', 'heading', e.target.value)} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Underrubrik</label>
                      <textarea value={content.hero.subheading} onChange={(e) => updateContent('hero', 'subheading', e.target.value)} rows={3} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none resize-none" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-6">Tjänster & Priser</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Rubrik</label>
                      <input type="text" value={content.services.sectionTitle} onChange={(e) => updateContent('services', 'sectionTitle', e.target.value)} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Paket 1 - Titel</label>
                      <input type="text" value={content.services.package1.title} onChange={(e) => setContent((prev: typeof defaultContent) => ({ ...prev, services: { ...prev.services, package1: { ...prev.services.package1, title: e.target.value } } }))} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Paket 1 - Pris</label>
                      <input type="text" value={content.services.package1.price} onChange={(e) => setContent((prev: typeof defaultContent) => ({ ...prev, services: { ...prev.services, package1: { ...prev.services.package1, price: e.target.value } } }))} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-6">Kontakt-sektion</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Rubrik</label>
                      <input type="text" value={content.contact.sectionTitle} onChange={(e) => updateContent('contact', 'sectionTitle', e.target.value)} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Underrubrik</label>
                      <textarea value={content.contact.sectionSubtitle} onChange={(e) => updateContent('contact', 'sectionSubtitle', e.target.value)} rows={2} className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-[#c8a46e] focus:outline-none resize-none" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
