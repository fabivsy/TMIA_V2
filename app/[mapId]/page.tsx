"use client";

import { MAP_REGISTRY, Tool } from "@/data/registry";
import Image from "next/image";
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
import { useState, use, useEffect } from "react";

interface PageProps {
  params: Promise<{ mapId: string }>;
}

export default function MapPage({ params }: PageProps) {
  const { mapId } = use(params);
  const mapData = MAP_REGISTRY.find((m) => m.slug.toLowerCase() === mapId.toLowerCase());

  console.log("DEBUG: Resolved mapId:", mapId);
  console.log("DEBUG: Found mapData:", !!mapData);
  console.log("DEBUG: Available slugs:", MAP_REGISTRY.map(m => m.slug));

  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      <main className="relative flex-grow z-10">

        {/* Premium Hero Section for the Map */}
        <div className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden py-24">
          {mapData.heroImage ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
              style={{
                backgroundImage: `url("/heroes/${mapData.heroImage}")`,
                transform: `translateY(${scrollY * 0.4}px)`
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-primary)]/20 to-transparent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D] via-transparent to-[#0A0B0D]" />

          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

            {mapData.logo && (
              <div className="relative w-28 h-28 mx-auto mb-12 group/logo hover:scale-110 transition-transform duration-700">
                {/* Strategic Glow behind the logo */}
                <div
                  className="absolute inset-0 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"
                  style={{ backgroundColor: mapData.primaryColor || 'var(--brand-primary)' }}
                />
                <div className="relative w-full h-full">
                  <Image
                    src={`/heroes/${mapData.logo}`}
                    alt={mapData.title}
                    fill
                    sizes="112px"
                    className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  />

                </div>
              </div>
            )}


            <h1
              className="text-4xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[1.1] pb-4 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000 px-4"
              style={{ backgroundImage: `linear-gradient(to right, ${mapData.primaryColor || 'var(--brand-primary)'}, ${mapData.secondaryColor || 'var(--brand-secondary)'})` }}
            >
              {mapData.title}
            </h1>


            <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-2xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
              {mapData.longDescription}
            </p>

            <div className="mt-20 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
              {mapData.guideUrl && (
                <div className="relative inline-block group">
                  {/* Strategic Background Glow */}
                  <div
                    className="absolute -inset-8 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 rounded-full"
                    style={{ backgroundColor: mapData.primaryColor || 'var(--brand-primary)' }}
                  />

                  <a
                    href={mapData.guideUrl}
                    target="_blank"
                    rel="noopener"
                    className="relative flex flex-col items-center gap-5 bg-[#121417]/40 hover:bg-[#121417]/60 p-8 md:p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-2xl transition-all hover:scale-[1.02] active:scale-[0.98] group/btn overflow-hidden"
                    style={{ borderBottom: `2px solid ${mapData.primaryColor || 'var(--brand-primary)'}44` }}
                  >
                    {/* Inner Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700" />

                    <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide opacity-50 group-hover/btn:opacity-80 transition-opacity">
                      ¿No sabes por dónde empezar? Aprende a elegir con nuestra
                    </p>

                    <div className="flex items-center gap-6">
                      <span
                        className="text-2xl md:text-4xl font-black tracking-tighter bg-clip-text text-transparent"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${mapData.primaryColor || 'var(--brand-primary)'}, ${mapData.secondaryColor || 'var(--brand-secondary)'})`
                        }}
                      >
                        Guía de IA para {mapData.title.replace(" IA", "")}
                      </span>

                    </div>
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

        <div id="directorio" className="max-w-7xl mx-auto px-6">



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
                  <div 
                    className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" 
                    style={{ backgroundColor: `${mapData.primaryColor || '#a855f7'}1A` }}
                  />
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
