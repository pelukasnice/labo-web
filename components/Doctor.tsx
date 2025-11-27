"use client";

import { motion } from "framer-motion";

export default function Doctor() {
  return (
    <section id="dra-martinez" className="py-20 bg-gradient-to-br from-medical-soft to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl shadow-medical p-4">
              <div className="aspect-[3/4] bg-gradient-to-br from-primary-teal-300 via-primary-light to-primary rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Placeholder for doctor photo */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                  <svg
                    className="w-48 h-48 text-white opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
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
              La Dra. Martínez
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

