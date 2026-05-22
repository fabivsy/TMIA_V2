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
  const [activeSubMapId, setActiveSubMapId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync submap state from query parameter on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const subMap = searchParams.get("subMap");
      if (subMap && mapData?.subMaps?.some(s => s.id === subMap)) {
        setActiveSubMapId(subMap);
      }
    }
  }, [mapData]);

  const handleSelectSubMap = (subMapId: string) => {
    setActiveSubMapId(subMapId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("subMap", subMapId);
      window.history.pushState({}, "", url.toString());
    }
  };

  const handleBackToHub = () => {
    setActiveSubMapId(null);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("subMap");
      window.history.pushState({}, "", url.toString());
    }
  };

  useEffect(() => {
    if (mapData) {
      const subMap = activeSubMapId ? mapData.subMaps?.find(s => s.id === activeSubMapId) : null;
      const titleSuffix = subMap ? ` - ${subMap.title}` : "";
      document.title = `${mapData.title}${titleSuffix} IA - Directorio Curado | Tu Mapa IA`;
    }
  }, [mapData, activeSubMapId]);

  if (!mapData) {
    notFound();
  }

  // Resolve values based on active subMap
  const isSplit = !!mapData.isSplitMap;
  const subMap = activeSubMapId ? mapData.subMaps?.find(s => s.id === activeSubMapId) : null;

  const displayTitle = subMap ? subMap.title : mapData.title;
  const displayPrimaryColor = subMap ? subMap.primaryColor : mapData.primaryColor;
  const displaySecondaryColor = subMap ? subMap.secondaryColor : mapData.secondaryColor;
  const displayHeroImage = subMap ? subMap.heroImage : mapData.heroImage;
  const displayLogo = subMap ? subMap.logo : mapData.logo;
  const displayGuideUrl = subMap ? subMap.guideUrl : mapData.guideUrl;
  const displaySelectionUrl = subMap ? subMap.selectionUrl : mapData.selectionUrl;
  
  // Custom guide content using authority statement
  const displayGuideContent = subMap && subMap.authorityStatement 
    ? `<h2>Soberanía de Ejecución en Campo</h2><p>${subMap.authorityStatement}</p>`
    : mapData.guideContent;

  const displayTools = subMap 
    ? mapData.tools.filter(t => t.subCategory === activeSubMapId) 
    : mapData.tools;

  const displayFaqs = mapData.faqs || [];

  const mainSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `https://tumapaia.com/${mapData.slug}${activeSubMapId ? `?subMap=${activeSubMapId}` : ''}`,
        "url": `https://tumapaia.com/${mapData.slug}${activeSubMapId ? `?subMap=${activeSubMapId}` : ''}`,
        "name": `${displayTitle} IA | Tu Mapa IA`,
        "headline": `${displayTitle} IA`,
        "description": subMap?.authorityStatement || mapData.longDescription,
        "author": {
          "@type": "Person",
          "name": mapData.expertIdentity?.name || "Fabio Yocco",
          "jobTitle": mapData.expertIdentity?.role || "Lead Curator & GEO Strategist",
          "affiliation": {
            "@type": "Organization",
            "name": mapData.expertIdentity?.entity || "The Curator Group LLC"
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
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Tu Mapa IA",
            "item": "https://tumapaia.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": `${displayTitle} IA`,
            "item": `https://tumapaia.com/${mapData.slug}${activeSubMapId ? `?subMap=${activeSubMapId}` : ''}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": displayFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      ...displayTools.map(tool => ({
        "@type": "SoftwareApplication",
        "name": tool.name,
        "description": tool.verdict || tool.shortDescription,
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

  // Choice Hub Rendering if no subMap is active
  if (isSplit && !activeSubMapId) {
    return (
      <div
        className="min-h-screen flex flex-col bg-[#0A0B0D] text-white relative overflow-hidden animate-in fade-in duration-700"
        style={{
          '--brand-primary': '#4ADE80', 
          '--brand-secondary': '#FFE4A0'
        } as React.CSSProperties}
      >
        {/* Ambient background glows */}
        <div className="absolute top-0 left-0 w-full h-[1200px] bg-gradient-to-b from-[var(--brand-primary)]/15 to-transparent pointer-events-none" />
        <div className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] bg-[var(--brand-primary)]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-[var(--brand-secondary)]/8 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

        <Navbar />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(mainSchema).replace(/<\/script>/g, '<\\/script>')
          }}
        />

        <main className="relative flex-grow z-10 flex flex-col justify-center items-center py-24 px-6">
          <div className="max-w-6xl w-full text-center mt-16">
            
            {/* Hero Image Parallax background */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 grayscale scale-105 pointer-events-none transition-transform duration-300"
              style={{
                backgroundImage: 'url("/heroes/agro_hub_hero.webp")',
                transform: `translateY(${scrollY * 0.2}px)`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D] via-transparent to-[#0A0B0D] pointer-events-none" />

            {/* Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none pb-4 bg-gradient-to-r from-[#4ADE80] via-[#86EFAC] to-[#FFE4A0] bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(74,222,128,0.15)]">
              {mapData.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-16 font-medium leading-relaxed drop-shadow-md">
              El Centro de Mando de IA para Agricultura: software para la gestión o robots para la automatización.
            </p>

            {/* Split Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-20">
              
              {/* Card 1: Software y Análisis de Datos */}
              <button
                onClick={() => handleSelectSubMap("software")}
                className="relative group rounded-[40px] overflow-hidden bg-[#16181d]/50 border border-white/10 p-10 flex flex-col text-left backdrop-blur-2xl transition-all duration-500 hover:border-[#4A90E2]/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 blur-[100px] opacity-15 bg-gradient-to-br from-[#4A90E2] to-[#98D8AA] pointer-events-none rounded-full group-hover:opacity-25 transition-opacity" />
                <div className="relative w-16 h-16 mb-6 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/heroes/agricultores_logo.webp"
                    alt="Software"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-4 w-full">
                  <h2 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-[#4A90E2] transition-colors">
                    Software y Análisis de Datos
                  </h2>
                  <span className="px-3 py-1 bg-[#4A90E2]/10 border border-[#4A90E2]/20 rounded-full text-[9px] uppercase tracking-wider text-[#4A90E2] font-bold">
                    Activo
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                  Plataformas de gestión de fincas, análisis satelital predictivo y optimización de recursos híbridos.
                </p>
                <div className="w-full px-6 py-4 bg-gradient-to-r from-[#4A90E2] to-[#98D8AA] text-white font-black rounded-2xl transition-all text-xs uppercase tracking-widest text-center shadow-[0_4px_20px_rgba(74,144,226,0.3)] group-hover:brightness-110 group-hover:shadow-[0_4px_30px_rgba(152,216,170,0.4)]">
                  Explorar Mapa de Software
                </div>
              </button>

              {/* Card 2: Robótica y Automatización */}
              <button
                onClick={() => handleSelectSubMap("robotica")}
                className="relative group rounded-[40px] overflow-hidden bg-[#1a1d24]/60 border border-white/15 p-10 flex flex-col text-left backdrop-blur-2xl transition-all duration-500 hover:border-[#FFA726]/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] cursor-pointer"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 blur-[100px] opacity-15 bg-gradient-to-br from-[#00695C] to-[#FFA726] pointer-events-none rounded-full group-hover:opacity-25 transition-opacity" />
                <div className="relative w-16 h-16 mb-6 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/heroes/agro_robot_logo.webp"
                    alt="Robotics"
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-between items-start mb-4 w-full">
                  <h2 className="text-2xl md:text-3xl font-black text-white leading-tight group-hover:text-[#FFA726] transition-colors">
                    Robótica y Automatización
                  </h2>
                  <span className="px-3 py-1 bg-[#FFA726]/10 border border-[#FFA726]/20 rounded-full text-[9px] uppercase tracking-wider text-[#FFA726] font-bold">
                    Activo
                  </span>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium mb-8 flex-grow group-hover:text-gray-300 transition-colors">
                  Robots deshierbadores por láser, drones de cosecha selectiva y tractores autónomos de alta fidelidad técnica.
                </p>
                <div className="w-full px-6 py-4 bg-gradient-to-r from-[#00695C] to-[#FFA726] text-white font-black rounded-2xl transition-all text-xs uppercase tracking-widest text-center shadow-[0_4px_20px_rgba(0,105,92,0.3)] group-hover:brightness-110 group-hover:shadow-[0_4px_30px_rgba(255,167,38,0.4)]">
                  Explorar Mapa Robótico
                </div>
              </button>

            </div>

            {/* Hub Curator Signatures */}
            <div className="mt-28 border-t border-white/5 pt-12 max-w-2xl mx-auto">
              <p className="text-xs text-white/30 uppercase tracking-widest font-bold mb-2">Curado por</p>
              <h3 className="text-xl font-bold text-white mb-1">Fabio Yocco</h3>
              <p className="text-xs text-[#E0C9A6] mb-3">Ag-Tech Systems Architect & GEO Strategist</p>
              <p className="text-sm text-white/40 leading-relaxed italic max-w-lg mx-auto">
                "Fabio integra arquitectura de datos y optimización generativa para transformar la agricultura tradicional en una industria de precisión soberana."
              </p>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col bg-[#0A0B0D] text-white relative overflow-hidden animate-in fade-in duration-500"
      style={{
        '--brand-primary': displayPrimaryColor || '#FFC107',
        '--brand-secondary': displaySecondaryColor || '#00BFFF'
      } as React.CSSProperties}
    >
      {/* Dynamic Background Glow. If Robotics map is active, we render Magenta/Teal glow! */}
      {activeSubMapId === "robotica" ? (
        <>
          <div className="absolute top-0 left-0 w-full h-[1200px] bg-gradient-to-b from-teal-900/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-fuchsia-500/5 blur-[130px] rounded-full pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-0 w-full h-[1200px] bg-gradient-to-b from-[var(--brand-primary)]/10 to-transparent pointer-events-none" />
          <div className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] bg-[var(--brand-primary)]/5 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-[var(--brand-secondary)]/5 blur-[130px] rounded-full pointer-events-none" />
        </>
      )}

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
          {displayHeroImage ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
              style={{
                backgroundImage: `url("/heroes/${displayHeroImage}")`,
                transform: `translateY(${scrollY * 0.4}px)`
              }}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-primary)]/20 to-transparent" />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D] via-transparent to-[#0A0B0D]" />

          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">

            {/* Return to Choice Hub dynamic button for split maps */}
            {isSplit && activeSubMapId && (
              <button
                onClick={handleBackToHub}
                className="mb-12 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all text-xs uppercase tracking-widest font-black text-white/60 hover:text-white active:scale-95 group/back"
              >
                <span className="group-hover/back:-translate-x-1 transition-transform">←</span>
                Volver al Centro de Mando
              </button>
            )}

            {displayLogo && (
              <div className="relative w-28 h-28 mx-auto mb-12 group/logo hover:scale-110 transition-transform duration-700">
                {/* Strategic Glow behind the logo */}
                <div
                  className="absolute inset-0 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"
                  style={{ backgroundColor: displayPrimaryColor || 'var(--brand-primary)' }}
                />
                <div className="relative w-full h-full">
                  <Image
                    src={`/heroes/${displayLogo}`}
                    alt={displayTitle}
                    fill
                    sizes="112px"
                    className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                  />
                </div>
              </div>
            )}

            <h1
              className="text-4xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[1.1] pb-4 bg-clip-text text-transparent px-4 animate-in fade-in duration-700"
              style={{ backgroundImage: `linear-gradient(to right, ${displayPrimaryColor || 'var(--brand-primary)'}, ${displaySecondaryColor || 'var(--brand-secondary)'})` }}
            >
              {displayTitle}
            </h1>

            <p className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-2xl animate-in fade-in duration-700 delay-200">
              {subMap?.description || mapData.longDescription}
            </p>

            <div className="mt-20 animate-in fade-in duration-700 delay-300">
              {displayGuideUrl && (
                <div className="relative inline-block group">
                  {/* Strategic Background Glow */}
                  <div
                    className="absolute -inset-8 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-1000 rounded-full"
                    style={{ backgroundColor: displayPrimaryColor || 'var(--brand-primary)' }}
                  />

                  <a
                    href={displayGuideUrl}
                    target="_blank"
                    rel="noopener"
                    className="relative flex flex-col items-center gap-5 bg-[#121417]/40 hover:bg-[#121417]/60 p-8 md:p-10 rounded-[2.5rem] border border-white/5 backdrop-blur-2xl transition-all hover:scale-[1.02] active:scale-[0.98] group/btn overflow-hidden"
                    style={{ borderBottom: `2px solid ${displayPrimaryColor || 'var(--brand-primary)'}44` }}
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
                          backgroundImage: `linear-gradient(to right, ${displayPrimaryColor || 'var(--brand-primary)'}, ${displaySecondaryColor || 'var(--brand-secondary)'})`
                        }}
                      >
                        Guía de IA para {displayTitle.replace(" IA", "")}
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
            {displayFaqs && displayFaqs.length > 0 && (
              <a href="#faq" className="text-white/60 hover:text-[var(--brand-primary)] transition-colors font-bold uppercase tracking-widest text-[11px]">FAQ</a>
            )}
          </nav>

          {/* Directory: White Cards on Dark BG */}
          <section id="mapa" className="mb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayTools.map((tool) => (
                <div key={tool.id} className="relative group">
                  {/* Subtle Glow behind cards on hover */}
                  <div
                    className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]"
                    style={{ backgroundColor: `${displayPrimaryColor || '#a855f7'}1A` }}
                  />
                  <ToolCard
                    tool={tool}
                    gradientClass={mapData.gradientClass}
                    primaryColor={displayPrimaryColor}
                    secondaryColor={displaySecondaryColor}
                    onOpenDetails={(t) => setSelectedTool(t)}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Guide with Dark High-End Aesthetic */}
          <section id="guia" className="mb-32">
            <StrategicBridge
              content={displayGuideContent}
              guideUrl={displayGuideUrl}
              selectionUrl={displaySelectionUrl}
              primaryColor={displayPrimaryColor}
              secondaryColor={displaySecondaryColor}
            />
          </section>

          {displayFaqs && displayFaqs.length > 0 && (
            <FAQSection faqs={displayFaqs} mapTitle={displayTitle} />
          )}

          {mapData.expertIdentity && (
            <ExpertIdentityBlock identity={mapData.expertIdentity} />
          )}

          {displayGuideUrl && displaySelectionUrl && (
            <AdditionalResources
              guideUrl={displayGuideUrl}
              selectionUrl={displaySelectionUrl}
              mapTitle={displayTitle}
            />
          )}

          <FixGeoCTA />

        </div>
      </main>

      {selectedTool && (
        <ToolModal
          tool={selectedTool}
          primaryColor={displayPrimaryColor}
          secondaryColor={displaySecondaryColor}
          onClose={() => setSelectedTool(null)}
        />
      )}

      <Footer />
    </div>
  );
}
