"use client";

import { motion } from "framer-motion";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Sacar turno",
    description:
      "Agendá tu cita de forma rápida y sencilla a través de nuestro sistema online o por teléfono.",
  },
  {
    number: "02",
    title: "Realizar estudio",
    description:
      "En el día de tu cita, recibirás atención profesional en un ambiente cómodo y privado.",
  },
  {
    number: "03",
    title: "Procesamiento en laboratorio",
    description:
      "Nuestro equipo procesa tu muestra con tecnología de última generación y rigurosos controles de calidad.",
  },
  {
    number: "04",
    title: "Entrega de resultados digitales",
    description:
      "Recibí tus resultados de forma segura y rápida a través de nuestra plataforma digital.",
  },
];

export default function Steps() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proceso de Atención
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y transparente para tu tranquilidad
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-teal-300 via-primary to-primary-teal-300"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8"
                >
                  {/* Content Card - Left side for even, right side for odd */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isEven ? "lg:pr-8" : "lg:pl-8 lg:order-3"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medical transition-all duration-300 border border-gray-100">
                      {/* Desktop: Number badge */}
                      {isEven && (
                        <div className="hidden lg:flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      )}
                      {!isEven && (
                        <div className="hidden lg:flex items-center gap-4 mb-4">
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-right">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-right">
                              {step.description}
                            </p>
                          </div>
                          <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                            {step.number}
                          </div>
                        </div>
                      )}
                      {/* Mobile layout */}
                      <div className="lg:hidden">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - desktop only */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-medical z-10"></div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

