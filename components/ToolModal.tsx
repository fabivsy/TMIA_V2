"use client";

import { Tool } from "@/data/registry";

interface ToolModalProps {
  tool: Tool;
  onClose: () => void;
}

export default function ToolModal({ tool, onClose }: ToolModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-[#0A0A0A] border border-white/10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[32px] shadow-2xl animate-in zoom-in duration-300">
        
        {/* Header */}
        <div className="p-8 pb-4 flex justify-between items-center">
          <h2 className="text-3xl font-black text-white tracking-tight">{tool.name}</h2>
          <button 
            onClick={onClose}
            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors text-white/40 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 pt-0 space-y-8">
          {/* Main Description */}
          <p className="text-lg text-white/70 leading-relaxed">
            {tool.longDescription}
          </p>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <h4 className="text-[#00E096] font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Pros
              </h4>
              <ul className="space-y-3">
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
          <div className="border-2 border-[#BD00FF] rounded-2xl p-6 bg-[#BD00FF]/5">
            <p className="text-white text-base font-bold leading-relaxed">
              <span className="text-[#BD00FF] block text-[10px] uppercase tracking-widest mb-2">Ideal para:</span>
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
              className="w-full md:w-auto px-10 py-4 bg-[#BD00FF] text-white font-black text-center rounded-2xl hover:bg-[#a000db] transition-all shadow-lg shadow-purple-900/20"
            >
              Visitar Sitio ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
