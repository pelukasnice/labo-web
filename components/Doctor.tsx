"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Doctor() {
  return (
    <section id="dra-martinez" className="py-20 backdrop-blur-xl bg-white/40 relative overflow-hidden">
      {/* Formas decorativas circulares - violeta hematoxilina */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Círculo grande superior izquierda - ROSA */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 opacity-20 blur-3xl"></div>

        {/* Círculo mediano superior derecha */}
        <div className="absolute top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-br from-violet-500 to-purple-700 opacity-25 blur-2xl"></div>

        {/* Círculo grande inferior derecha - ROSA */}
        <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-500 to-rose-600 opacity-20 blur-3xl"></div>

        {/* Círculo mediano inferior izquierda */}
        <div className="absolute bottom-20 -left-16 w-72 h-72 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 opacity-30 blur-2xl"></div>

        {/* Círculo pequeño central superior - ROSA */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 opacity-15 blur-xl"></div>

        {/* Círculo pequeño central inferior */}
        <div className="absolute bottom-10 left-1/3 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-25 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl shadow-black/10 rounded-3xl p-4">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary-teal-300 via-primary-light to-primary rounded-2xl flex items-center justify-center overflow-hidden relative">
                {/* Imagen del microscopio */}
                <Image
                  src="/assets/microscopio.png"
                  alt="Microscopio - Tecnología de precisión para citología ginecológica"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-full shadow-medical">
                <span className="font-semibold">Especialista</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              La Dra. Maria del C. Nomi
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-primary">
                  Especialista en citología ginecológica
                </strong>{" "}
                con más de 15 años de experiencia en el diagnóstico y prevención
                de patologías ginecológicas.
              </p>
              <p>
                Su enfoque se centra en la{" "}
                <strong className="text-primary">
                  atención personalizada
                </strong>{" "}
                y el{" "}
                <strong className="text-primary">
                  enfoque preventivo
                </strong>
                , brindando a cada paciente el cuidado y la información
                necesaria para mantener una salud ginecológica óptima.
              </p>
            </div>

            {/* Certifications */}
            <div className="pt-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Certificaciones y Experiencia
              </h3>
              <ul className="space-y-2">
                {[
                  "Especialización en Citología Ginecológica",
                  "Certificación en Colposcopía",
                  "Miembro de la Sociedad Argentina de Citología",
                  "Más de 15 años de experiencia clínica",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

