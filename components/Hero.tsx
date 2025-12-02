"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image - se extiende hacia arriba para cubrir el navbar */}
      <div className="absolute inset-0 z-0 top-[-120px] h-[calc(100%+120px)]">
        <Image
          src="/assets/fondo_hero.png"
          alt="Fondo laboratorio"
          fill
          className="object-cover object-[50%_20%]"
          priority
        />
        {/* Overlay para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 pt-[120px] pb-20 relative z-10">
        <div className="max-w-3xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Laboratorio de{" "}
              <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                Citología Ginecológica
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Estudios citológicos confiables, precisos y con entrega rápida.
            </p>
            <p className="text-lg text-gray-500">
              Atención profesional y personalizada para el cuidado de tu salud
              ginecológica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/turnos"
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-medical hover:shadow-lg text-center"
              >
                Sacar turno
              </Link>
              <Link
                href="/resultados"
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg border-2 border-primary hover:bg-primary-light/10 transition-all duration-200 shadow-soft hover:shadow-medical text-center"
              >
                Consultar estudios
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

