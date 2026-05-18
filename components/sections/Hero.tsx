import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Dynamic Background Grid & Visual Nodes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        {/* Subtle Diagonal Scanlines */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.01)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.01)_50%,rgba(255,255,255,0.01)_75%,transparent_75%,transparent)] bg-[size:8px_8px] pointer-events-none opacity-40" />

        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 grayscale transition-all duration-1000"
          style={{ backgroundImage: 'url("/hero_pic_final.webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/70 to-[#050505]" />

        {/* Ambient Glowing Nodes with Parallax Floating Keyframes */}
        <div className="absolute top-1/4 left-1/12 w-64 h-64 md:w-96 md:h-96 bg-[#D4AF37]/15 rounded-full blur-[100px] md:blur-[140px] animate-float-slow pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/12 w-64 h-64 md:w-[450px] md:h-[450px] bg-brand-primary/8 rounded-full blur-[110px] md:blur-[160px] animate-float-reverse pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-purple-600/10 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Premium Pill Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-sm font-semibold mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:border-[#D4AF37]/30 transition-all cursor-default group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary"></span>
          </span>
          <span className="tracking-wide text-xs uppercase text-white/95">Ecosistema V2.0 Activo</span>
        </div>

        {/* Title: Sleek Shimmering Text Gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 leading-[1.05]">
          Tu Curador de Confianza{" "}
          <br className="hidden sm:block" />
          <span className="text-shine-gold font-extrabold pb-2 inline-block">en Inteligencia Artificial</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-3xl text-white/60 max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 font-medium tracking-wide">
          La herramienta es artificial. <span className="text-white font-semibold italic border-b border-[#D4AF37]/40 pb-0.5">La inteligencia es tuya.</span>
        </p>

        {/* Buttons with Shimmer Sweeps and Custom Glows */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <Link
            href="#mapas"
            className="shine-sweep px-10 py-5 bg-[#D4AF37] hover:bg-[#ffe27c] text-black rounded-full font-black text-lg transition-all shadow-[0_0_40px_rgba(212,175,55,0.25)] hover:shadow-[0_0_60px_rgba(212,175,55,0.45)] hover:scale-[1.04] active:scale-[0.98] w-full sm:w-auto text-center"
          >
            Explorar los Mapas
          </Link>
          <Link
            href="#mission"
            className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 rounded-full font-bold text-lg transition-all hover:scale-[1.04] active:scale-[0.98] w-full sm:w-auto text-center backdrop-blur-md"
          >
            Nuestra Filosofía
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
        <span className="text-xs font-bold uppercase tracking-widest">Scroll</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
