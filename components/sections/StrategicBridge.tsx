import React from 'react';

interface StrategicBridgeProps {
  content: string;
  guideUrl?: string;
  selectionUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default function StrategicBridge({ content, guideUrl, selectionUrl, primaryColor, secondaryColor }: StrategicBridgeProps) {
  return (
    <section className="max-w-4xl mx-auto my-20 p-8 md:p-12 bg-white/5 border border-white/10 rounded-3xl relative overflow-hidden group">
      {/* Dynamic Background Glow */}
      <div 
        className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 transition-opacity group-hover:opacity-30"
        style={{ backgroundColor: primaryColor || 'var(--brand-primary)' }}
      />
      
      <div className="relative z-10">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-6 border"
          style={{ 
            color: primaryColor || 'var(--brand-primary)',
            borderColor: `${primaryColor || 'var(--brand-primary)'}33`
          }}
        >
          Protocolo de Autoridad
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight
          prose-p:text-white/70 prose-p:leading-relaxed
          prose-strong:text-white prose-a:text-[var(--brand-primary)]"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {(guideUrl || selectionUrl) && (
          <div className="mt-12 flex flex-wrap gap-12 pt-8 border-t border-white/10">
            {guideUrl && (
              <a 
                href={guideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest hover:opacity-80 transition-all group/link"
                style={{ color: primaryColor || 'var(--brand-primary)' }}
              >
                <svg className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Guía Técnica de Implementación
              </a>
            )}
            {selectionUrl && (
              <a 
                href={selectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[11px] font-black uppercase tracking-widest hover:opacity-80 transition-all group/link"
                style={{ color: secondaryColor || 'var(--brand-secondary)' }}
              >
                <svg className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Criterios de Selección y Curaduría
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
