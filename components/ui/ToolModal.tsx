"use client";

import { Tool } from "@/data/registry";

interface ToolModalProps {
  tool: Tool;
  primaryColor?: string;
  secondaryColor?: string;
  onClose: () => void;
}

export default function ToolModal({ tool, onClose, primaryColor, secondaryColor }: ToolModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay with deep blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-[#121417]/90 backdrop-blur-3xl border border-white/10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[48px] shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 fade-in duration-500 overflow-x-hidden">
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#BD00FF] to-transparent opacity-50" />
        
        {/* Header */}
        <div className="p-10 pb-6 flex justify-between items-start relative z-10">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-2xl ring-1 ring-white/10">
              {tool.logoFileName ? (
                <img 
                  src={`/logos/${tool.logoFileName}`} 
                  alt={tool.name}
                  className="w-full h-full object-contain p-3.5 rounded-3xl"
                />
              ) : (
                <span className="text-4xl font-black text-[#1a1c20] uppercase tracking-tighter opacity-80">
                  {tool.name.substring(0, 2)}
                </span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-purple-400 text-[10px] font-black uppercase tracking-[0.2em] block">Análisis de Autoridad</span>
                <div 
                  className="text-[9px] font-black bg-white/5 px-3 py-1 rounded-full border uppercase tracking-widest whitespace-nowrap"
                  style={{ 
                    color: secondaryColor || 'var(--brand-secondary)',
                    borderColor: `${secondaryColor || 'var(--brand-secondary)'}33`
                  }}
                >
                  {tool.pricing}
                </div>
              </div>
              <h2 className="text-4xl font-black text-white tracking-tight">{tool.name}</h2>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center justify-center transition-all text-white/40 hover:text-white active:scale-90"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-10 pb-10 space-y-10 relative z-10">
          {/* Main Description */}
          <div className="bg-white/5 border border-white/5 rounded-3xl p-8">
            <p className="text-xl text-white/80 leading-relaxed font-medium">
              {tool.longDescription}
            </p>
          </div>

          {/* Pros & Cons Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-[#00E096]/5 border border-[#00E096]/10 rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-16 h-16 text-[#00E096]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <h4 className="text-[#00E096] font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
                Ventajas Competitivas
              </h4>
              <ul className="space-y-4">
                {tool.pros.map((pro, i) => (
                  <li key={i} className="text-white/60 text-sm flex gap-2">
                    <span className="text-[#00E096]">•</span> {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h4 className="text-[#FF4B4B] font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Contras
              </h4>
              <ul className="space-y-3">
                {tool.cons.map((con, i) => (
                  <li key={i} className="text-white/60 text-sm flex gap-2">
                    <span className="text-[#FF4B4B]">•</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ideal Para */}
          <div 
            className="border-2 rounded-2xl p-6"
            style={{ 
              borderColor: primaryColor || 'var(--brand-primary)',
              backgroundColor: `${primaryColor || 'var(--brand-primary)'}0D`
            }}
          >
            <p className="text-white text-base font-bold leading-relaxed">
              <span 
                className="block text-[10px] uppercase tracking-widest mb-2"
                style={{ color: primaryColor || 'var(--brand-primary)' }}
              >
                Ideal para:
              </span>
              {tool.idealPara}
            </p>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-white/30 text-[10px] uppercase tracking-widest font-bold block mb-1">Inversión</span>
              <p className="text-lg font-black text-white">{tool.pricing}</p>
            </div>
            <a 
              href={tool.url}
              target="_blank"
              rel="noopener nofollow"
              className="w-full md:w-auto px-10 py-4 text-white font-black text-center rounded-2xl transition-all shadow-lg hover:brightness-110 active:scale-95"
              style={{ 
                backgroundColor: primaryColor || 'var(--brand-primary)',
                boxShadow: `0 10px 30px -10px ${primaryColor || 'var(--brand-primary)'}66`
              }}
            >
              Visitar Sitio ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
