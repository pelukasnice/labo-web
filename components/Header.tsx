"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#dra-martinez", label: "La Dra. Martínez" },
    { href: "/turnos", label: "Turnos" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled
        ? "backdrop-blur-xl bg-white/40 border-b border-white/30 shadow-xl shadow-black/10"
        : "bg-transparent"
        }`}
    >
      <nav
        className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"
          }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className={`transition-all duration-300 flex items-center ${isScrolled ? "w-auto h-[35px]" : "w-[150px] h-[100px]"
                }`}
            >
              {isScrolled ? (
                <span className="text-xl font-bold text-primary whitespace-nowrap">
                  Dra. Maria del carmen Nomi
                </span>
              ) : (
                <Image
                  src="/assets/logo-chico.png"
                  alt="Citología Ginecológica - Dra. Maria del Carmen Norni"
                  width={150}
                  height={150}
                  className="w-full h-full object-contain transition-all duration-300"
                  priority
                />
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center transition-all duration-300 ${isScrolled ? "space-x-6" : "space-x-8"
            }`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors duration-200 ${isScrolled ? "text-gray-700 text-sm font-medium" : "text-gray-800 font-medium"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/turnos"
              className={`bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all duration-200 shadow-medical hover:shadow-lg ${isScrolled ? "px-4 py-1.5 text-sm" : "px-6 py-2"
                }`}
            >
              Sacar turno
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-200 ${isScrolled ? "text-gray-700" : "text-gray-800"
              }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {
          isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-3 backdrop-blur-sm bg-white/60 rounded-2xl p-4 border border-white/30"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/turnos"
                className="block bg-primary text-white px-6 py-2 rounded-full font-semibold text-center hover:bg-primary-dark transition-all duration-200 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Sacar turno
              </Link>
            </motion.div>
          )
        }
      </nav >
    </header >
  );
}

