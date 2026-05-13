import Link from "next/link";

export default function FixGeoCTA() {
  return (
    <section className="mt-32 relative group">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-brand-primary/10 blur-[120px] rounded-full group-hover:bg-brand-primary/20 transition-all duration-700" />
      
      <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[48px] p-12 md:p-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
        
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-brand-primary/20 text-brand-primary px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-8 border border-brand-primary/30">
            Powered by FixGeo.io
          </span>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            ¿Quieres que tu herramienta aparezca <span className="text-brand-primary">citada por IAs</span> como esta?
          </h2>
          
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            En FixGeo ayudamos a las marcas a monitorear y mejorar su visibilidad en las respuestas de motores generativos (ChatGPT, Gemini, Perplexity).
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="https://fixgeo.io" 
              target="_blank"
              className="px-12 py-5 bg-brand-primary text-brand-dark font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,193,7,0.3)] hover:shadow-[0_0_60px_rgba(255,193,7,0.5)]"
            >
              Descubre FixGeo.io
            </Link>
            <span className="text-white/40 font-medium italic">
              El Gold Standard en Generative Engine Optimization.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
