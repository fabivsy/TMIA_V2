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
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-brand-dark"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Tu Mapa <span className="text-brand-primary">IA</span>
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
