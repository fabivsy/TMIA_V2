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
  return (
    <article className="group relative bg-[#121417]/60 backdrop-blur-2xl rounded-[40px] p-8 border border-white/5 flex flex-col h-full transition-all duration-700 hover:border-white/20 hover:-translate-y-3 overflow-hidden shadow-2xl">

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
        {tool.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-1.5 rounded-xl text-[11px] font-bold transition-all border hover:opacity-80"
            style={{
              backgroundColor: `${primaryColor || '#007BFF'}15`,
              color: primaryColor || '#007BFF',
              borderColor: `${primaryColor || '#007BFF'}30`
            }}
          >
            {tag}
          </span>
        ))}
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
