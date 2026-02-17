'use client';

import { useState, useEffect } from 'react';

// Color palettes for templates
const colorPalettes = [
  { id: 'blue', name: 'Blå', primary: '#3b82f6', secondary: '#1e40af', bg: '#eff6ff', accent: '#60a5fa' },
  { id: 'green', name: 'Grön', primary: '#10b981', secondary: '#047857', bg: '#ecfdf5', accent: '#34d399' },
  { id: 'orange', name: 'Orange', primary: '#f97316', secondary: '#c2410c', bg: '#fff7ed', accent: '#fb923c' },
  { id: 'purple', name: 'Lila', primary: '#8b5cf6', secondary: '#6d28d9', bg: '#f5f3ff', accent: '#a78bfa' },
  { id: 'dark', name: 'Mörk', primary: '#cbd5e1', secondary: '#475569', bg: '#1e293b', accent: '#94a3b8' },
];

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

// Template Preview Components - with color palette support
interface PreviewProps {
  palette?: { primary: string; secondary: string; bg: string; accent: string };
}

function PlumberPreview({ palette = { primary: '#3b82f6', secondary: '#1e40af', bg: '#eff6ff', accent: '#60a5fa' } }: PreviewProps) {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg" style={{ background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})` }}>
      {/* Browser header */}
      <div className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white/20 rounded h-5 mx-4"></div>
      </div>
      {/* Website preview */}
      <div className="flex-1 p-3 bg-white m-2 rounded shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: palette.primary }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ backgroundColor: palette.primary }}>
              P
            </div>
            <span className="font-bold text-gray-800 text-sm">RÖR-PRO</span>
          </div>
          <div className="px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ backgroundColor: '#22c55e' }}>
            RING
          </div>
        </div>
        {/* Hero content */}
        <div className="space-y-1.5">
          <div className="font-bold text-gray-800 text-xs">Din rörmokare i Stockholm</div>
          <div className="flex items-center gap-1 text-green-600 text-[10px]">
            <span>✓</span> Akut service
          </div>
          <div className="flex items-center gap-1 text-green-600 text-[10px]">
            <span>✓</span> Jour dygnet runt
          </div>
          <div className="flex items-center gap-1 text-green-600 text-[10px]">
            <span>✓</span> Fri offert
          </div>
        </div>
      </div>
    </div>
  );
}

function ElectricianPreview({ palette = { primary: '#eab308', secondary: '#a16207', bg: '#fefce8', accent: '#fde047' } }: PreviewProps) {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg" style={{ background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})` }}>
      <div className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white/20 rounded h-5 mx-4"></div>
      </div>
      <div className="flex-1 p-3 bg-white m-2 rounded shadow-md">
        <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: palette.primary }}>
          <div className="flex items-center gap-2">
            <span className="text-lg">⚡</span>
            <span className="font-bold text-gray-800 text-sm">EL-SÄKERT</span>
          </div>
          <div className="px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ backgroundColor: palette.primary }}>
            KONTAKT
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="font-bold text-gray-800 text-xs">Elinstallation & Säkerhet</div>
          <div className="flex gap-1 flex-wrap">
            <span className="px-1.5 py-0.5 rounded text-[8px] font-medium" style={{ backgroundColor: palette.bg, color: palette.secondary }}>Certifierad</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-medium" style={{ backgroundColor: palette.bg, color: palette.secondary }}>A-behörighet</span>
          </div>
          <div className="text-gray-500 text-[10px]">Nyinstallation • Felavhjälpning • Besiktning</div>
        </div>
      </div>
    </div>
  );
}

function SalonPreview({ palette = { primary: '#ec4899', secondary: '#be185d', bg: '#fdf2f8', accent: '#f9a8d4' } }: PreviewProps) {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg" style={{ background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})` }}>
      <div className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white/20 rounded h-5 mx-4"></div>
      </div>
      <div className="flex-1 p-3 bg-white m-2 rounded shadow-md">
        <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: palette.primary }}>
          <span className="font-bold text-gray-800 text-sm italic">GLAMOUR SALONG</span>
          <div className="px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ backgroundColor: palette.primary }}>
            BOKA
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="font-bold text-gray-800 text-xs">Hårvård & Styling</div>
          <div className="text-gray-600 text-[10px]">Klippning • Färgning • Styling</div>
          <div className="text-gray-400 text-[10px]">Öppet: Mån-Fre 9-18</div>
        </div>
      </div>
    </div>
  );
}

function RestaurantPreview({ palette = { primary: '#f97316', secondary: '#c2410c', bg: '#fff7ed', accent: '#fb923c' } }: PreviewProps) {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg" style={{ background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})` }}>
      <div className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white/20 rounded h-5 mx-4"></div>
      </div>
      <div className="flex-1 p-3 bg-white m-2 rounded shadow-md">
        <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: palette.primary }}>
          <span className="font-bold text-gray-800 text-sm">BISTRO ITALIA</span>
          <div className="px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ backgroundColor: '#dc2626' }}>
            BOKA
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="font-bold text-gray-800 text-xs">Veckans Lunch</div>
          <div className="flex justify-between text-[10px] text-gray-600">
            <span>Pasta Carbonara</span><span className="font-medium">89 kr</span>
          </div>
          <div className="flex justify-between text-[10px] text-gray-600">
            <span>Caesarsallad</span><span className="font-medium">79 kr</span>
          </div>
          <div className="flex justify-between text-[10px] text-gray-600">
            <span>Grillad lax</span><span className="font-medium">119 kr</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function RetailPreview({ palette = { primary: '#22c55e', secondary: '#15803d', bg: '#f0fdf4', accent: '#4ade80' } }: PreviewProps) {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg" style={{ background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})` }}>
      <div className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white/20 rounded h-5 mx-4"></div>
      </div>
      <div className="flex-1 p-3 bg-white m-2 rounded shadow-md">
        <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: palette.primary }}>
          <span className="font-bold text-gray-800 text-sm">BUTIK Stockholm</span>
          <div className="px-3 py-1 rounded-full text-white text-xs font-semibold" style={{ backgroundColor: palette.primary }}>
            KÖP
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="font-bold text-gray-800 text-xs">Nya produkter</div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl">📦</div>
            <div className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl">📦</div>
            <div className="aspect-square bg-gray-100 rounded flex items-center justify-center text-xl">📦</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConsultantPreview({ palette = { primary: '#8b5cf6', secondary: '#6d28d9', bg: '#f5f3ff', accent: '#a78bfa' } }: PreviewProps) {
  return (
    <div className="h-full w-full flex flex-col rounded-lg overflow-hidden shadow-lg" style={{ background: `linear-gradient(to bottom, ${palette.secondary}, ${palette.bg})` }}>
      <div className="bg-white/10 backdrop-blur-sm px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 bg-white/20 rounded h-5 mx-4"></div>
      </div>
      <div className="flex-1 p-3 bg-white m-2 rounded shadow-md">
        <div className="flex items-center justify-between mb-3 pb-2 border-b" style={{ borderColor: palette.primary }}>
          <span className="font-bold text-gray-800 text-sm">ANDERS ERIKSSON</span>
          <span className="text-gray-400 text-[10px]">Konsult</span>
        </div>
        <div className="space-y-1.5">
          <div className="font-bold text-gray-800 text-xs">Strategi & Ledarskap</div>
          <div className="text-gray-500 text-[10px]">20 års erfarenhet</div>
          <div className="flex gap-1 flex-wrap">
            <span className="px-1.5 py-0.5 rounded text-[8px] font-medium" style={{ backgroundColor: palette.bg, color: palette.secondary }}>Företagsutveckling</span>
            <span className="px-1.5 py-0.5 rounded text-[8px] font-medium" style={{ backgroundColor: palette.bg, color: palette.secondary }}>Coaching</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Template Card Component - Fresh modern design with images
function TemplateCard({ template, onClick }: { template: any; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#c8a46e]/50 transition-all cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#c8a46e]/10"
    >
      {/* Website Preview Image */}
      <div className="h-48 overflow-hidden bg-gray-900">
        <img 
          src={template.image} 
          alt={template.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-[#c8a46e] transition-colors">
            {template.name}
          </h3>
          <span className="px-2 py-1 bg-[#c8a46e]/10 text-[#c8a46e] text-xs font-medium rounded-full">
            {template.category}
          </span>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          {template.description}
        </p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {template.features.slice(0, 3).map((feature: string, i: number) => (
            <span 
              key={i}
              className="text-xs px-3 py-1.5 bg-[#252525] text-gray-300 rounded-lg border border-[#333333]"
            >
              {feature}
            </span>
          ))}
          {template.features.length > 3 && (
            <span className="text-xs px-3 py-1.5 bg-[#252525] text-gray-500 rounded-lg border border-[#333333]">
              +{template.features.length - 3}
            </span>
          )}
        </div>

        {/* View button */}
        <div className="mt-4 pt-4 border-t border-[#2a2a2a] flex items-center justify-between">
          <span className="text-[#c8a46e] text-sm font-medium group-hover:translate-x-1 transition-transform">
            Se mall →
          </span>
        </div>
      </div>
    </div>
  );
}

// Template Modal Component - with full size image preview
function TemplateModal({ template, onClose }: { template: any; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-[#1a1a1a] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden border border-[#333333] shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#252525] hover:bg-[#333333] rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-auto">
          {/* Preview Area - Full Image */}
          <div className="lg:w-2/3 p-6 bg-[#0a0a0a]">
            <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Förhandsvisning</div>
            <div className="rounded-xl overflow-hidden shadow-2xl border border-[#333333]">
              <img 
                src={template.image} 
                alt={template.name}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Controls Area */}
          <div className="lg:w-1/3 p-6 bg-[#1a1a1a] border-l border-[#333333]">
            <h2 className="text-2xl font-bold text-white mb-2">{template.name}</h2>
            <p className="text-gray-400 text-sm mb-6">{template.description}</p>
            
            {/* Color Palette Info */}
            <div className="mb-6 p-4 bg-[#252525] rounded-xl border border-[#333333]">
              <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Färgval</div>
              <p className="text-gray-300 text-sm">
                Vi anpassar färgerna efter ditt varumärke. Välj mellan olika färgscheman i samband med beställning.
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <div className="text-xs text-gray-500 mb-3 uppercase tracking-wide">Ingår i mallen</div>
              <ul className="space-y-2">
                {template.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full py-4 bg-[#c8a46e] text-[#111111] font-bold rounded-xl hover:bg-[#d4b480] transition-colors"
            >
              Välj denna mall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Examples Section Component
const templates = [
  {
    id: 'plumber',
    name: 'VVS & Rörmokare',
    category: 'Hantverkare',
    description: 'Akut service, jourdygnet runt, offreförfrågan. Perfekt för dig som vill synas och få fler kunder.',
    features: ['Akut kontakt-knapp', 'Tjänsteöversikt', 'Prislista', 'Jourdygnet runt', 'Offertförfrågan'],
    image: '/templates/plumber.png'
  },
  {
    id: 'electrician',
    name: 'Elektriker',
    category: 'Hantverkare',
    description: 'Elinstallation, säkerhet, certifierad. Bygg förtroende med dokumenterad kompetens.',
    features: ['Säkerhetsfokus', 'Certifieringar', 'Kontaktformulär', 'Tjänstepresentation', 'Offertförfrågan'],
    image: '/templates/electrician.png'
  },
  {
    id: 'salon',
    name: 'Salong',
    category: 'Skönhet',
    description: 'Bokning, behandlingar, priser. Låt dina kunder boka direkt online.',
    features: ['Online-bokning', 'Behandlingsmeny', 'Priser', 'Galleri', 'Personal presentation'],
    image: '/templates/salon.png'
  },
  {
    id: 'restaurant',
    name: 'Restaurang',
    category: 'Mat & Dryck',
    description: 'Meny, bordsbokning, evenemang. Visa upp din mat och skapa stämning.',
    features: ['Digital meny', 'Bordsbokning', 'Evenemang', 'Öppettider', 'Kontakt'],
    image: '/templates/restaurant.png'
  },
  {
    id: 'retail',
    name: 'Butik',
    category: 'Handel',
    description: 'Produkter, e-handel, öppettider. Visa upp ditt utbud och öka försäljningen.',
    features: ['Produktkatalog', 'Öppettider', 'Kontakt', 'Om oss', 'Karta'],
    image: '/templates/retail.png'
  },
  {
    id: 'consultant',
    name: 'Konsult',
    category: 'Företagstjänster',
    description: 'Expertis, tjänster, kontakt. Bygg trovärdighet och få fler uppdrag.',
    features: ['Tjänsteöversikt', 'Om mig', 'Kontakt', 'Referenser', 'Blogg'],
    image: '/templates/consultant.png'
  }
];

// Examples Section Component
function ExamplesSection({ content }: { content: any }) {
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);

  return (
    <>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template) => (
              <TemplateCard 
                key={template.id} 
                template={template} 
                onClick={() => setSelectedTemplate(template)}
              />
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

      {/* Modal */}
      {selectedTemplate && (
        <TemplateModal 
          template={selectedTemplate} 
          onClose={() => setSelectedTemplate(null)} 
        />
      )}
    </>
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
