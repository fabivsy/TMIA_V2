import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MapCard from "@/components/MapCard";
import Footer from "@/components/Footer";

const MAPS = [
  {
    title: "Creadores",
    description: "Herramientas de IA para creación de contenido, diseño y arte.",
    href: "https://creadores.tumapaia.com/",
    gradientClass: "bg-gradient-creadores",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: Creadores",
      "description": "Curation of AI tools for content creators and designers.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
  {
    title: "Productividad",
    description: "Herramientas de IA para eficiencia y ahorro de tiempo.",
    href: "https://productividad.tumapaia.com/",
    gradientClass: "bg-gradient-productividad",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: Productividad",
      "description": "Curation of AI tools for productivity and efficiency.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
  {
    title: "Gratis",
    description: "Una lista curada de herramientas de IA con planes gratuitos.",
    href: "https://gratis.tumapaia.com/",
    gradientClass: "bg-gradient-gratis",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: Gratis",
      "description": "Curation of free AI tools and platforms.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
  {
    title: "Negocios",
    description: "Herramientas de IA para crecimiento, marketing y ventas.",
    href: "https://negocios.tumapaia.com/",
    gradientClass: "bg-gradient-negocios",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: Negocios",
      "description": "Curation of AI tools for business growth and marketing.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
  {
    title: "Viajeros",
    description: "IA para planificar viajes, encontrar ofertas e explorar el mundo.",
    href: "https://viajeros.tumapaia.com/",
    gradientClass: "bg-gradient-viajeros",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: Viajeros",
      "description": "Curation of AI tools for travelers and trip planning.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
  {
    title: "Finanzas",
    description: "Herramientas de IA para inversión, gestión y crecimiento financiero.",
    href: "https://finanzas.tumapaia.com/",
    gradientClass: "bg-gradient-finanzas",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: Finanzas",
      "description": "Curation of AI tools for financial management and investment.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
  {
    title: "No-Code",
    description: "Construye apps, webs y automations sin escribir código.",
    href: "https://nocode.tumapaia.com/",
    gradientClass: "bg-gradient-nocode",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: No-Code",
      "description": "Curation of AI-powered no-code development tools.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
  {
    title: "Académicos",
    description: "Herramientas de IA para estudio, investigación y escritura.",
    href: "https://academicos.tumapaia.com/",
    gradientClass: "bg-gradient-academicos",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Mapa IA: Académicos",
      "description": "Curation of AI tools for academic research and study.",
      "provider": { "@type": "Organization", "name": "Tu Mapa IA" }
    }
  },
];


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Maps Section */}
        <section id="mapas" className="py-32 bg-brand-dark relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Explora Nuestros <br />
                <span className="text-brand-primary text-shadow-glow">Mapas de IA</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Conectamos tus problemas específicos con las soluciones de IA correctas. 
                Navegación experta para un universo en expansión.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {MAPS.map((map) => (
                <MapCard key={map.title} {...map} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-32 bg-white/5 border-y border-white/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-primary/30">
                <svg
                  className="w-10 h-10 text-brand-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Tu Inteligencia, Nuestro Mapa
              </h2>
              <p className="text-xl md:text-2xl text-white/60 leading-relaxed mb-12">
                El mundo de la IA es ruidoso y complejo. Nosotros traemos la claridad. 
                No te ofrecemos solo una lista de herramientas; te ofrecemos un mapa curado 
                que respeta tu recurso más valioso: <span className="text-white font-bold italic">tu propia inteligencia.</span>
              </p>
              <div className="p-8 rounded-3xl bg-brand-primary text-brand-dark font-bold text-xl inline-block shadow-glow">
                Tú eres y siempre serás el piloto.
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section id="newsletter" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-primary/5" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto bg-brand-dark/50 backdrop-blur-xl border border-white/10 rounded-[40px] p-12 md:p-20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Únete a nuestra comunidad
              </h2>
              <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
                Recibe la mejor selección de noticias y herramientas de IA directamente en tu correo. 
                Sin ruido, solo valor puro.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="tu.email@ejemplo.com"
                  className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-brand-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-10 py-4 bg-brand-primary text-brand-dark font-bold rounded-2xl hover:scale-105 transition-all shadow-glow"
                >
                  Suscribirme
                </button>
              </form>
              <p className="mt-6 text-white/40 text-sm">
                Totalmente gratis. Puedes darte de baja en cualquier momento.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
