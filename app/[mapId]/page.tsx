"use client";

import { MAP_REGISTRY, Tool } from "@/data/registry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FixGeoCTA from "@/components/FixGeoCTA";
import ToolCard from "@/components/ToolCard";
import ToolModal from "@/components/ToolModal";
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

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "headline": mapData.title,
    "description": mapData.longDescription,
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0B0D] text-white relative overflow-hidden">
      {/* Deep Dark Accents */}
      <div className="absolute top-0 left-0 w-full h-[1200px] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
      <div className="absolute top-[10%] -right-[10%] w-[800px] h-[800px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Pattern for authority feel */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

      <Navbar />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/<\/script>/g, '<\\/script>')
        }}
      />

      <main className="relative flex-grow pt-32 pb-20 z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header with White/Silver Text */}
          <header className="mb-16">
            <Link href="/" className="text-purple-400 hover:text-purple-300 mb-6 inline-flex items-center gap-2 font-bold text-sm transition-colors">
              <span>←</span> Volver al Mapa General
            </Link>
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter leading-none">
              {mapData.title}
            </h1>
            <p className="text-2xl text-gray-400 max-w-4xl leading-relaxed font-medium">
              {mapData.longDescription}
            </p>
          </header>

          {/* Nav Tab with Glassmorphism */}
          <nav className="flex gap-10 border-b border-white/5 mb-16 pb-4 sticky top-24 bg-black/20 backdrop-blur-2xl z-30 px-6 rounded-t-2xl">
            <a href="#mapa" className="text-white hover:text-purple-400 transition-colors font-bold uppercase tracking-widest text-[11px]">Directorio</a>
            <a href="#guia" className="text-white/60 hover:text-purple-400 transition-colors font-bold uppercase tracking-widest text-[11px]">Guía Estratégica</a>
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
                    onOpenDetails={(t) => setSelectedTool(t)}
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Guide with Dark High-End Aesthetic */}
          <section id="guia" className="mb-32">
            <article className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-[56px] p-10 md:p-24 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
              <h2 className="text-4xl font-black text-white mb-12 text-center">Protocolo de Autoridad</h2>
              <div 
                className="guide-content prose prose-invert prose-purple max-w-none text-gray-300 leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: mapData.guideContent }} 
              />
            </article>
          </section>

          <FixGeoCTA />

        </div>
      </main>

      {selectedTool && (
        <ToolModal 
          tool={selectedTool} 
          onClose={() => setSelectedTool(null)} 
        />
      )}

      <Footer />
    </div>
  );
}
