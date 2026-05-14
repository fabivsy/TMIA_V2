"use client";

import Link from "next/link";

interface AdditionalResourcesProps {
  guideUrl: string;
  selectionUrl: string;
  mapTitle: string;
}

export default function AdditionalResources({ guideUrl, selectionUrl, mapTitle }: AdditionalResourcesProps) {
  return (
    <section id="recursos" className="mb-32" aria-label={`Recursos adicionales sobre ${mapTitle}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] bg-white/[0.04] text-gray-400 border border-white/[0.06] mb-6">
            Profundización
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Recursos Estratégicos
          </h2>
        </div>

        {/* Two CTA Blocks */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Guide CTA */}
          <Link
            href={guideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_50px_-15px_rgba(168,85,247,0.15)]"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-purple-400">
                  <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-purple-400 mb-2">Guía Estratégica</p>
                <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-purple-200 transition-colors">
                  Cómo elegir herramientas de {mapTitle}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Metodología completa de evaluación y criterios de selección para profesionales.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6 text-purple-400 text-sm font-semibold">
              <span>Leer guía completa</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* Selection CTA */}
          <Link
            href={selectionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.07] rounded-2xl p-8 transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.05] hover:shadow-[0_0_50px_-15px_rgba(168,85,247,0.15)]"
          >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-purple-400">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-purple-400 mb-2">Selección Curada</p>
                <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-purple-200 transition-colors">
                  Las 7 herramientas clave de 2026
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Nuestra selección definitiva con veredictos técnicos y comparativas de rendimiento.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6 text-purple-400 text-sm font-semibold">
              <span>Ver selección completa</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
