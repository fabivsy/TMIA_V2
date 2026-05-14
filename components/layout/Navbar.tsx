"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/80 backdrop-blur-md py-4 border-b border-white/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-90 transition-transform duration-700 ease-in-out">
            <svg viewBox="0 0 512 512" fill="none" className="w-full h-full drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              <circle cx="256" cy="256" r="200" stroke="#D4AF37" strokeWidth="32"/>
              <path d="M256 30L290 220H222L256 30Z" fill="#D4AF37"/>
              <path d="M256 482L222 292H290L256 482Z" fill="#D4AF37"/>
              <path d="M482 256L292 222V290L482 256Z" fill="#D4AF37"/>
              <path d="M30 256L220 290V222L30 256Z" fill="#D4AF37"/>
              <circle cx="256" cy="256" r="115" fill="#D4AF37" />
              <text x="256" y="302" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="120" fill="white" textAnchor="middle" style={{ letterSpacing: '-8px' }}>IA</text>
            </svg>
          </div>
          <span className="text-xl font-black tracking-tight text-white group-hover:text-[#D4AF37] transition-all">
            Tu Mapa <span className="text-[#D4AF37]">IA</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#mapas"
            className="font-medium text-white/80 hover:text-brand-primary transition-colors"
          >
            Mapas
          </Link>
          <Link
            href="https://tumapaia.com/blog/"
            className="font-medium text-white/80 hover:text-brand-primary transition-colors"
          >
            Guías
          </Link>
          <Link
            href="#newsletter"
            className="px-5 py-2.5 bg-brand-primary text-brand-dark rounded-full font-bold hover:scale-105 transition-all shadow-glow"
          >
            Unirme
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link
            href="#mapas"
            className="text-lg font-medium text-white/80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mapas
          </Link>
          <Link
            href="https://tumapaia.com/blog/"
            className="text-lg font-medium text-white/80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Guías
          </Link>
          <Link
            href="#newsletter"
            className="w-full text-center py-4 bg-brand-primary text-brand-dark rounded-xl font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Unirme a la comunidad
          </Link>
        </div>
      )}
    </nav>
  );
}
