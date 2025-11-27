"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-light via-primary to-primary-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Cuidá tu salud ginecológica con estudios confiables y atención
            profesional
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Agendá tu turno hoy y recibí la atención que tu salud merece
          </p>
          <Link
            href="/turnos"
            className="inline-block bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-teal-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Sacar turno
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

