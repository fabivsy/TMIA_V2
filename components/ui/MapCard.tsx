import Link from "next/link";

interface MapCardProps {
  title: string;
  description: string;
  href: string;
  gradientClass: string;
  schema?: any;
}

export default function MapCard({
  title,
  description,
  href,
  gradientClass,
  schema,
}: MapCardProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[32px] p-10 border border-white/5 transition-all duration-700 hover:-translate-y-4 hover:border-white/20 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] flex flex-col h-full bg-[#121417]/40 backdrop-blur-3xl`}
    >
      {/* GEO-Injection: Hidden Schema */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/<\/script>/g, '<\\/script>')
          }}
        />
      )}

      {/* Localized Glow on Hover */}
      <div className={`absolute -bottom-24 -left-24 w-64 h-64 blur-[100px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none rounded-full ${gradientClass}`} />
      
      {/* Dynamic Overlay Gradient */}
      <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${gradientClass}`} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
           <h3 className="text-3xl font-black text-white tracking-tighter leading-none group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/30 transition-all">
             <svg className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
          </div>
        </div>

        <p className="text-gray-400 text-lg leading-relaxed font-medium mb-8 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
        
        <div className="mt-auto flex items-center gap-3">
          <div className="h-[2px] w-8 bg-purple-600/50 group-hover:w-16 transition-all duration-500" />
          <span className="text-white/40 group-hover:text-white font-black text-[10px] uppercase tracking-[0.3em] transition-colors">
            Explorar Mapa
          </span>
        </div>
      </div>

      {/* Decorative Brand Accent */}
      <div className={`absolute top-0 right-0 w-1/3 h-1 opacity-50 group-hover:w-full transition-all duration-700 ${gradientClass}`} />
    </Link>
  );
}
