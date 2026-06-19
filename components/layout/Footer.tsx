import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 512 512" fill="none" className="w-full h-full">
                  <circle cx="256" cy="256" r="200" stroke="#D4AF37" strokeWidth="32"/>
                  <path d="M256 30L290 220H222L256 30Z" fill="#D4AF37"/>
                  <path d="M256 482L222 292H290L256 482Z" fill="#D4AF37"/>
                  <path d="M482 256L292 222V290L482 256Z" fill="#D4AF37"/>
                  <path d="M30 256L220 290V222L30 256Z" fill="#D4AF37"/>
                  <circle cx="256" cy="256" r="115" fill="#D4AF37" />
                  <text x="256" y="302" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="120" fill="white" textAnchor="middle" style={{ letterSpacing: '-8px' }}>IA</text>
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Tu Mapa <span className="text-[#D4AF37]">IA</span>
              </span>
            </Link>
            <div className="space-y-4 max-w-sm">
              <p className="text-white/90 font-semibold text-lg leading-relaxed">
                Inteligencia Aplicada para la Era de la IA.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Mapas, análisis y estrategias para profesionales que buscan aplicar la Inteligencia Artificial con criterio, no seguir tendencias.
              </p>
              <p className="text-brand-primary text-sm font-medium italic">
                La herramienta es artificial. La inteligencia es tuya.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Explorar</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-brand-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="https://tumapaia.com/indice-de-guias/" className="text-white/60 hover:text-brand-primary transition-colors">
                  Índice de Guías
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="https://tumapaia.com/terminos-y-condiciones/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="https://tumapaia.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-brand-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2026 The Curator Group LLC. Investigación, Curaduría y Protocolo FixGeo™.</p>
        </div>
      </div>
    </footer>
  );
}
