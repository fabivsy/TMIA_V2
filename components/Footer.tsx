import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-top border-white/10 py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="w-6 h-6 text-brand-dark"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                Tu Mapa <span className="text-brand-primary">IA</span>
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
