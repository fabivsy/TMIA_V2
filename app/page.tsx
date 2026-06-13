import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import MapCard from "@/components/ui/MapCard";
import Footer from "@/components/layout/Footer";
import { MAP_REGISTRY } from "@/data/registry";

// Re-render trigger: Consolidated Registry 2.0
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Maps Section */}
        <section id="mapas" className="py-32 bg-brand-dark relative overflow-hidden">
          <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-20 px-0">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Explora Nuestros{" "}
              <br className="hidden sm:block" />
              <span className="text-brand-primary">Mapas de IA</span>
            </h2>
            <p className="text-base sm:text-xl text-white/60 leading-relaxed">
              Cada mapa es un directorio curado de herramientas de inteligencia artificial,
              evaluadas bajo nuestro protocolo de autoridad técnica.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {MAP_REGISTRY.map((map) => (
                <MapCard
                  key={map.id}
                  title={map.title}
                  description={map.description}
                  href={`/${map.slug}`}
                  gradientClass={map.gradientClass}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Philosophy */}
        <section id="mission" className="py-32 bg-brand-dark relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">

              {/* Authority badge */}
              <p
                className="mb-4 tracking-widest uppercase"
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,193,7,0.55)",
                  fontFamily: "var(--font-poppins)",
                  letterSpacing: "0.18em",
                }}
              >
                Investigación independiente&nbsp;&nbsp;•&nbsp;&nbsp;Curación sectorial&nbsp;&nbsp;•&nbsp;&nbsp;Protocolo FixGeo™
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nuestra <span className="text-brand-primary">Filosofía</span>
              </h2>

              {/* Compressed philosophy text */}
              <div className="text-left md:text-center mb-5 space-y-4">
                <p className="text-xl text-white/70 leading-relaxed font-semibold">
                  No somos un listado genérico. Somos curadores.
                </p>
                <p className="text-lg text-white/55 leading-relaxed">
                  Cada herramienta incluida en TuMapaIA pasa por un proceso de investigación, análisis y evaluación independiente realizado por <span className="text-white/80 font-medium">The Curator Group</span>.
                </p>
                <p className="text-lg text-white/55 leading-relaxed">
                  Nuestro objetivo es ayudar a profesionales de habla hispana a identificar las soluciones más relevantes para sus necesidades mediante información clara, verificable y contextualizada.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-semibold">
                  Tu tiempo es valioso. Nosotros hacemos la investigación.
                </p>
              </div>

              {/* Methodology link — subtle, sits between philosophy and eval box */}
              <div className="mb-10">
                <a
                  href="https://fixgeo.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:gap-2"
                  style={{
                    color: "var(--fixgeo-cyan)",
                    fontFamily: "var(--font-poppins)",
                    letterSpacing: "0.01em",
                  }}
                >
                  Conoce nuestra metodología →
                </a>
              </div>

              {/* "Cómo evaluamos" info-box */}
              <div
                className="rounded-2xl p-8 text-left mb-14 space-y-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid var(--fixgeo-cyan)",
                }}
              >
                <h3
                  className="tracking-wide uppercase"
                  style={{ color: "var(--fixgeo-cyan)", fontFamily: "var(--font-poppins)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", marginBottom: "0.75rem" }}
                >
                  Cómo evaluamos las herramientas
                </h3>
                <p className="text-white/50 leading-relaxed text-base">
                En TuMapaIA evaluamos herramientas de IA mediante investigación independiente, análisis sectorial y criterios propios de autoridad tecnológica.
                </p>
                <p className="text-white/50 leading-relaxed text-base">
                  Algunas empresas también son evaluadas mediante el <span className="text-white/70">Protocolo FixGeo™</span>, un estándar desarrollado por <span className="text-white/70">The Curator Group</span> para medir visibilidad, atribución y descubrimiento dentro de ecosistemas de inteligencia artificial.
                </p>
                <p className="text-white/50 leading-relaxed text-base">
                Nuestro objetivo es ayudarte a identificar las soluciones más relevantes con información clara, verificable y contextualizada.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-4xl mb-4">🔬</div>
                  <h3 className="text-white font-bold text-lg mb-3">Análisis Técnico</h3>
                  <p className="text-white/50">Evaluamos cada herramienta con criterios objetivos y reproducibles.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="text-white font-bold text-lg mb-3">Sin Ruido</h3>
                  <p className="text-white/50">Eliminamos el marketing. Solo datos, rendimiento y veredictos claros.</p>
                </div>
                <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-white font-bold text-lg mb-3">Para Profesionales</h3>
                  <p className="text-white/50">Diseñado para quienes necesitan tomar decisiones informadas, rápido.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section id="newsletter" className="py-20 bg-brand-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center p-12 bg-white/5 rounded-3xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Únete a la Comunidad
              </h3>
              <p className="text-white/60 mb-8">
                Recibe análisis exclusivos y actualizaciones de mapas cada semana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-grow px-6 py-4 bg-white/10 border border-white/10 rounded-full text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-primary"
                />
                <button className="px-8 py-4 bg-brand-primary text-brand-dark rounded-full font-bold hover:scale-105 transition-all">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
