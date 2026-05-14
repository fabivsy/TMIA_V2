"use client";

import { MAP_REGISTRY, Tool } from "@/data/registry";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FixGeoCTA from "@/components/sections/FixGeoCTA";
import ToolCard from "@/components/ui/ToolCard";
import ToolModal from "@/components/ui/ToolModal";
import FAQSection from "@/components/geo/FAQSection";
import ExpertIdentityBlock from "@/components/geo/ExpertIdentityBlock";
import AdditionalResources from "@/components/sections/AdditionalResources";
import StrategicBridge from "@/components/sections/StrategicBridge";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useState, use } from "react";

interface PageProps {
  params: Promise<{ mapId: string }>;
}

export default function MapPage({ params }: PageProps) {
  const { mapId } = use(params);
  const mapData = MAP_REGISTRY.find((m) => m.slug === mapId);
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  if (!mapData) {
    notFound();
  }

  const mainSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://tumapaia.com/${mapData.slug}`,
        "url": `https://tumapaia.com/${mapData.slug}`,
        "name": `${mapData.title} | Tu Mapa IA`,
        "headline": mapData.title,
        "description": mapData.longDescription,
        "author": {
          "@type": "Person",
          "name": "Fabio Yocco",
          "jobTitle": "Lead Curator & GEO Strategist",
          "affiliation": {
            "@type": "Organization",
            "name": "The Curator Group LLC"
          }
        },
        "publisher": {
          "@type": "Organization",
          "name": "The Curator Group LLC",
          "logo": {
            "@type": "ImageObject",
            "url": "https://tumapaia.com/logo.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": mapData.faqs?.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      ...mapData.tools.map(tool => ({
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.shortDescription,
        "applicationCategory": tool.category,
        "operatingSystem": "Web",
        "offers": {
          "@type": "Offer",
          "price": tool.pricing.replace(/[^0-9.]/g, '') || "0",
          "priceCurrency": "USD"
        },
        "author": {
          "@type": "Organization",
          "name": tool.name
        }
      }))
    ]
  };

  return (
    <div 
      className="min-h-screen flex flex-col bg-[#0A0B0D] text-white relative overflow-hidden"
      style={{ 
        '--brand-primary': mapData.primaryColor || '#FFC107',
        '--brand-secondary': mapData.secondaryColor || '#00BFFF'
      } as React.CSSProperties}
    >
      {/* Deep Dark Accents */}
      <div className="absolute top-0 left-0 w-full h-[1200px] bg-gradient-to-b from-[var(--brand-primary)]/10 to-transparent pointer-events-none" />
      <div className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] bg-[var(--brand-primary)]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-[var(--brand-secondary)]/5 blur-[130px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Pattern for authority feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mainSchema).replace(/<\/script>/g, '<\\/script>')
        }}
      />

      <main className="relative flex-grow pt-32 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header with White/Silver Text */}
          <header className="mb-16">
            <Link href="/" className="text-[var(--brand-primary)] hover:opacity-80 mb-6 inline-flex items-center gap-2 font-bold text-sm transition-opacity">
              <span>←</span> Volver al Mapa General
            </Link>
            <h1 
              className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(to right, white, ${mapData.secondaryColor || 'var(--brand-secondary)'})` }}
            >
              {mapData.title}
            </h1>
            <p className="text-2xl text-gray-400 max-w-4xl leading-relaxed font-medium">
              {mapData.longDescription}
            </p>
          </header>

          {/* Nav Tab with Glassmorphism */}
          <nav className="flex gap-10 border-b border-white/5 mb-16 pb-4 sticky top-24 bg-black/20 backdrop-blur-2xl z-30 px-6 rounded-t-2xl">
            <a href="#mapa" className="text-white hover:text-[var(--brand-primary)] transition-colors font-bold uppercase tracking-widest text-[11px]">Directorio</a>
            <a href="#guia" className="text-white/60 hover:text-[var(--brand-primary)] transition-colors font-bold uppercase tracking-widest text-[11px]">Guía Estratégica</a>
            {mapData.faqs && mapData.faqs.length > 0 && (
              <a href="#faq" className="text-white/60 hover:text-[var(--brand-primary)] transition-colors font-bold uppercase tracking-widest text-[11px]">FAQ</a>
            )}
          </nav>

          {/* Directory: White Cards on Dark BG */}
          <section id="mapa" className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mapData.tools.map((tool) => (
                <div key={tool.id} className="relative group">
                  {/* Subtle Glow behind cards on hover */}
                  <div className="absolute inset-0 bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
                  <ToolCard 
                    tool={tool} 
                    gradientClass={mapData.gradientClass}
                    primaryColor={mapData.primaryColor}
                    secondaryColor={mapData.secondaryColor}
                    onOpenDetails={(t) => setSelectedTool(t)}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Guide with Dark High-End Aesthetic */}
          <section id="guia" className="mb-32">
            <StrategicBridge 
              content={mapData.guideContent}
              guideUrl={mapData.guideUrl}
              selectionUrl={mapData.selectionUrl}
              primaryColor={mapData.primaryColor}
              secondaryColor={mapData.secondaryColor}
            />
          </section>

          {mapData.faqs && mapData.faqs.length > 0 && (
            <FAQSection faqs={mapData.faqs} mapTitle={mapData.title} />
          )}

          {mapData.expertIdentity && (
            <ExpertIdentityBlock identity={mapData.expertIdentity} />
          )}

          {mapData.guideUrl && mapData.selectionUrl && (
            <AdditionalResources
              guideUrl={mapData.guideUrl}
              selectionUrl={mapData.selectionUrl}
              mapTitle={mapData.title}
            />
          )}

          <FixGeoCTA />

        </div>
      </main>

      {selectedTool && (
        <ToolModal 
          tool={selectedTool} 
          primaryColor={mapData.primaryColor}
          secondaryColor={mapData.secondaryColor}
          onClose={() => setSelectedTool(null)} 
        />
      )}

      <Footer />
    </div>
  );
}
