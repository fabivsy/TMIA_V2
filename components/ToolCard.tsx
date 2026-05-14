import { Tool } from "@/data/registry";

interface ToolCardProps {
  tool: Tool;
  gradientClass: string;
  onOpenDetails: (tool: Tool) => void;
}

export default function ToolCard({ tool, onOpenDetails, gradientClass }: ToolCardProps) {
  return (
    <article className="group relative bg-[#121417]/60 backdrop-blur-2xl rounded-[40px] p-8 border border-white/5 flex flex-col h-full transition-all duration-700 hover:border-white/20 hover:-translate-y-3 overflow-hidden shadow-2xl">
      
      {/* Dynamic Background Glow based on category */}
      <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none rounded-full ${gradientClass}`} />
      
      {/* Header Section */}
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className={`absolute inset-0 blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-2xl ${gradientClass}`} />
            <div className="relative w-16 h-16 bg-[#1a1c20] rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden shadow-inner ring-1 ring-white/5">
              {tool.logoFileName ? (
                <img 
                  src={`/logos/${tool.logoFileName}`} 
                  alt={tool.name}
                  className="w-full h-full object-cover p-2 group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <span className="text-2xl font-black text-white uppercase tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity">
                  {tool.name.substring(0, 2)}
                </span>
              )}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white leading-none mb-2 tracking-tight group-hover:text-purple-400 transition-colors">
              {tool.name}
            </h3>
            <span className="inline-block px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {tool.category}
            </span>
          </div>
        </div>
        
        {/* Pricing Badge */}
        <div className="text-[10px] font-black text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 uppercase tracking-tighter">
          {tool.pricing}
        </div>
      </div>

      {/* Slogan & Description */}
      <div className="space-y-4 mb-8 flex-grow">
        <p className="text-purple-300/80 text-sm font-semibold italic leading-snug">
          "{tool.slogan}"
        </p>
        <p className="text-gray-400 text-base leading-relaxed font-medium line-clamp-3 group-hover:text-gray-300 transition-colors">
          {tool.shortDescription}
        </p>
      </div>

      {/* Tags / Ideal Para */}
      <div className="flex flex-wrap gap-2 mb-10">
        <span className="bg-white/5 text-gray-500 px-4 py-1.5 rounded-xl text-[11px] font-bold border border-white/5 hover:border-white/10 transition-colors">
          #EstrategiaIA
        </span>
        <span className="bg-purple-500/5 text-purple-400 px-4 py-1.5 rounded-xl text-[11px] font-bold border border-purple-500/10 hover:border-purple-500/20 transition-colors">
          #Autoridad
        </span>
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
          className="flex-1 px-4 py-4 bg-gradient-to-br from-[#BD00FF] to-[#8A00B8] hover:from-[#d547ff] hover:to-[#BD00FF] text-white font-black rounded-2xl transition-all shadow-[0_0_20px_rgba(189,0,255,0.2)] hover:shadow-[0_0_30px_rgba(189,0,255,0.4)] text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 group/btn"
        >
          Visitar 
          <span className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform">↗</span>
        </a>
      </div>
    </article>
  );
}
