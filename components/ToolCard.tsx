import { Tool } from "@/data/registry";

interface ToolCardProps {
  tool: Tool;
  gradientClass: string;
  onOpenDetails: (tool: Tool) => void;
}

export default function ToolCard({ tool, onOpenDetails }: ToolCardProps) {
  return (
    <article className="bg-white rounded-[32px] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 flex flex-col h-full hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-all duration-500 hover:-translate-y-2 relative z-10">
      
      {/* Header: Compact */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-inner">
          <span className="text-xl font-black text-gray-200 uppercase tracking-tighter">
            {tool.name.substring(0, 2)}
          </span>
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 leading-none mb-1">{tool.name}</h3>
          <p className="text-gray-400 text-[11px] leading-tight font-medium uppercase tracking-wider">{tool.category}</p>
        </div>
      </div>

      <p className="text-gray-500 text-xs font-bold italic mb-4">
        {tool.slogan}
      </p>

      {/* Description: Professional size */}
      <p className="text-gray-600 text-[15px] leading-relaxed mb-8 flex-grow">
        {tool.shortDescription}
      </p>

      {/* Tags: Subtle */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="bg-gray-50 text-gray-400 px-3 py-1 rounded-lg text-[10px] font-bold border border-gray-100">
          #EstrategiaIA
        </span>
        <span className="bg-purple-50 text-purple-500 px-3 py-1 rounded-lg text-[10px] font-bold border border-purple-100">
          #Autoridad
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-50">
        <button 
          onClick={() => onOpenDetails(tool)}
          className="text-gray-900 font-bold hover:text-purple-600 transition-colors text-xs uppercase tracking-widest"
        >
          Detalles
        </button>
        <a 
          href={tool.url}
          target="_blank"
          rel="noopener nofollow"
          className="px-5 py-3 bg-[#BD00FF] text-white font-bold rounded-xl hover:bg-[#a000db] transition-all shadow-md shadow-purple-900/10 text-xs flex items-center gap-2"
        >
          Visitar ↗
        </a>
      </div>
    </article>
  );
}
