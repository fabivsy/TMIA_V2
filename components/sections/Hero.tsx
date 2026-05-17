import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Gradients */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 grayscale"
          style={{ backgroundImage: 'url("/hero_pic_final.webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark" />
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-brand-primary/20 rounded-full blur-[80px] md:blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-[500px] md:h-[500px] bg-brand-primary/10 rounded-full blur-[80px] md:blur-[160px]" />
      </div>


      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-primary text-sm font-semibold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
          </span>
          V2.0 Lanzada
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Tu Curador de Confianza{" "}
          <br className="hidden sm:block" />
          <span className="text-brand-primary">en Inteligencia Artificial</span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
          La herramienta es artificial. <span className="text-white italic">La inteligencia es tuya.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
          <Link
            href="#mapas"
            className="px-8 py-4 bg-brand-primary text-brand-dark rounded-full font-bold text-lg hover:scale-105 transition-all shadow-glow w-full sm:w-auto"
          >
            Explorar los Mapas
          </Link>
          <Link
            href="#mission"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all w-full sm:w-auto"
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
