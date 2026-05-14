import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-top border-white/10 py-20">
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
            <p className="text-white/60 max-w-sm text-lg leading-relaxed">
              Navegando el universo de la Inteligencia Artificial, juntos. La herramienta es artificial, la inteligencia es tuya.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Explorar</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#mapas" className="text-white/60 hover:text-brand-primary transition-colors">
                  Mapas de IA
                </Link>
              </li>
              <li>
                <Link href="https://tumapaia.com/blog/" className="text-white/60 hover:text-brand-primary transition-colors">
                  Guías y Tutoriales
                </Link>
              </li>
              <li>
                <Link href="#newsletter" className="text-white/60 hover:text-brand-primary transition-colors">
                  Comunidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2025 The Curator Group LLC. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="https://x.com/tumapaia" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">X</Link>
            <Link href="https://linkedin.com/company/tumapaia/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">LinkedIn</Link>
            <Link href="https://www.instagram.com/tumapaia/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
