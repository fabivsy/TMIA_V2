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
            ¿Cómo te encuentra una IA?
          </h2>
          
          <div className="text-xl text-white/60 mb-8 max-w-3xl mx-auto leading-relaxed space-y-6">
            <p>
              Hoy las personas ya no buscan únicamente en Google. Preguntan directamente a sistemas de inteligencia artificial qué proveedor contratar, qué herramienta utilizar o qué empresa recomendar.
            </p>
            <p>
              FixGeo analiza cómo tu organización es descubierta, comprendida y citada dentro de estos nuevos ecosistemas de búsqueda.
            </p>
            <p className="text-base text-white/50 border-t border-white/5 pt-6 mt-6">
              Esta nueva disciplina se conoce como GEO (Generative Engine Optimization). Mientras el SEO tradicional busca generar tráfico hacia una web, GEO busca que una organización sea comprendida, atribuida y recomendada directamente dentro de respuestas generadas por inteligencia artificial.
            </p>
          </div>

          <div className="mb-12">
            <Link 
              href="https://fixgeo.io/#protocolo" 
              target="_blank"
              className="hover:underline font-semibold text-sm transition-all"
              style={{ color: "#00D1FF", fontFamily: "var(--font-poppins)" }}
            >
              ¿Qué es GEO? →
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link 
              href="https://cal.com/fixgeo/geo-forensic-briefing" 
              target="_blank"
              className="px-12 py-5 bg-brand-primary text-brand-dark font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,193,7,0.3)] hover:shadow-[0_0_60px_rgba(255,193,7,0.5)]"
            >
              Solicitar evaluación →
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
