import Image from "next/image";
import { Tool } from "@/data/registry";

interface ToolCardProps {
  tool: Tool;
  gradientClass: string;
  primaryColor?: string;
  secondaryColor?: string;
  onOpenDetails: (tool: Tool) => void;
}

export default function ToolCard({ tool, onOpenDetails, gradientClass, primaryColor, secondaryColor }: ToolCardProps) {
  
  // Generate SoftwareApplication JSON-LD schema for E-E-A-T
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://tumapaia.com/tool/${tool.id}`,
    "name": tool.name,
    "description": tool.longDescription || tool.shortDescription,
    "applicationCategory": tool.category,
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": tool.pricing.replace(/[^0-9.]/g, '') || "0",
      "priceCurrency": "USD",
      "url": tool.url
    },
    "author": {
      "@type": "Organization",
      "name": "The Curator Group LLC",
      "url": "https://tumapaia.com"
    },
    "maintainer": {
      "@type": "Organization",
      "@id": "https://tumapaia.com/#organization"
    },
    "reviewedBy": {
      "@type": "Person",
      "name": "Fabio Yocco",
      "jobTitle": "Arquitecto Principal GEO y Curador Técnico"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1"
    }
  };

  return (
    <article className="group relative bg-[#121417]/60 backdrop-blur-2xl rounded-[40px] p-8 border border-white/5 flex flex-col h-full transition-all duration-700 hover:border-white/20 hover:-translate-y-3 overflow-hidden shadow-2xl">

      {/* SoftwareApplication JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema).replace(/<\/script>/g, '<\\/script>')
        }}
      />

      {/* Dynamic Background Glow based on category */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-full ${gradientClass || 'bg-gradient-to-br from-brand-primary/50 to-brand-secondary/50'}`} />

      {/* Header Section */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-5">
          <div className="relative flex-shrink-0">
            <div
              className="absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-2xl"
              style={{ background: `linear-gradient(to bottom right, ${primaryColor || 'var(--brand-primary)'}, ${secondaryColor || 'var(--brand-secondary)'})` }}
            />
            <div className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center overflow-hidden shadow-inner ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-500 p-3">
              {tool.logoFileName ? (
                <div className="relative w-full h-full">
                  <Image
                    src={`/logos/${tool.logoFileName}`}
                    alt={tool.name}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="text-2xl font-black text-gray-400">
                  {tool.name.substring(0, 2).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white leading-tight">
              {tool.name}
            </h3>
            {tool.isFixGeoVerified && (
              <div className="relative inline-flex items-center mt-3 group/seal">
                <div 
                  className="absolute inset-0 rounded-full blur-md animate-pulse"
                  style={{ backgroundColor: secondaryColor || 'var(--brand-secondary, #FFD700)', opacity: 0.3 }}
                />
                <div 
                  className="relative flex items-center gap-1.5 px-3 py-1 rounded-full border bg-black/60 backdrop-blur-xl"
                  style={{ borderColor: `${secondaryColor || 'var(--brand-secondary, #FFD700)'}40` }}
                >
                  <svg className="w-3.5 h-3.5 drop-shadow-md" viewBox="0 0 24 24" fill="none" style={{ color: secondaryColor || 'var(--brand-secondary, #FFD700)' }}>
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span 
                    className="text-[9px] uppercase tracking-widest font-black"
                    style={{ color: secondaryColor || 'var(--brand-secondary, #FFD700)' }}
                  >
                    FIXGEO AUDITADO
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slogan & Description */}
      <div className="space-y-4 mb-8 flex-grow">
        <p 
          className="text-sm font-semibold italic leading-snug opacity-80"
          style={{ color: secondaryColor || 'var(--brand-secondary, #00BFFF)' }}
        >
          "{tool.slogan}"
        </p>
        <p className="text-gray-400 text-base leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
          {tool.shortDescription}
        </p>
      </div>

      {/* Functional Tags Section */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tool.tags?.map((tag, idx) => {
          const isCrypto = tool.category === 'crypto';
          const isAcademicos = tool.category === 'academicos';
          const isJuristas = tool.category === 'juristas';
          const isDesarrolladores = tool.category === 'desarrolladores';
          const isArquitectura = tool.category === 'arquitectura';
          const isAgentes = tool.category === 'agentes';
          const useSecondary = isCrypto || isDesarrolladores || isArquitectura || isAgentes;

          return (
            <span
              key={idx}
              className="px-4 py-1.5 rounded-xl text-[11px] font-bold transition-all border hover:opacity-80"
              style={{
                backgroundColor: useSecondary
                  ? `${secondaryColor || '#FFB700'}15`
                  : isAcademicos
                  ? 'rgba(165, 184, 206, 0.1)'
                  : isJuristas
                  ? 'rgba(205, 127, 50, 0.1)'
                  : `${primaryColor || '#007BFF'}15`,
                color: useSecondary
                  ? secondaryColor || '#FFB700'
                  : isAcademicos
                  ? '#A5B8CE'
                  : isJuristas
                  ? '#CD7F32'
                  : primaryColor || '#007BFF',
                borderColor: useSecondary
                  ? `${secondaryColor || '#FFB700'}30`
                  : isAcademicos
                  ? 'rgba(165, 184, 206, 0.25)'
                  : isJuristas
                  ? 'rgba(205, 127, 50, 0.25)'
                  : `${primaryColor || '#007BFF'}30`
              }}
            >
              {tag}
            </span>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="flex items-center gap-4 pt-8 border-t border-white/5">
        <button
          onClick={() => onOpenDetails(tool)}
          className="flex-1 px-4 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl transition-all border border-white/5 text-[11px] uppercase tracking-widest active:scale-95"
        >
          Detalles
        </button>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener nofollow"
          className="flex-1 px-4 py-4 text-white font-black rounded-2xl transition-all text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 group/btn hover:brightness-110"
          style={{ 
            background: `linear-gradient(to bottom right, ${primaryColor || 'var(--brand-primary, #007BFF)'}, ${secondaryColor || 'var(--brand-secondary, #00BFFF)'})`,
            boxShadow: `0 0 20px ${primaryColor || 'var(--brand-primary, #007BFF)'}40`
          }}
        >
          Visitar
          <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">↗</span>
        </a>
      </div>
    </article>
  );
}
