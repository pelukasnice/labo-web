"use client";

import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "María G.",
    text: "Excelente atención y profesionalismo. Los resultados llegaron rápido y la explicación fue muy clara. Me sentí muy cómoda durante todo el proceso.",
    rating: 5,
  },
  {
    name: "Laura S.",
    text: "La Dra. Martínez es muy profesional y empática. El laboratorio tiene tecnología moderna y los resultados son confiables. Totalmente recomendable.",
    rating: 5,
  },
  {
    name: "Ana M.",
    text: "Proceso muy sencillo desde el turno hasta la entrega de resultados. Atención personalizada y ambiente muy acogedor. Muy satisfecha con el servicio.",
    rating: 5,
  },
  {
    name: "Carmen R.",
    text: "Llevo años confiando en este laboratorio. La calidad del servicio y la atención de la Dra. Martínez son excepcionales. Siempre me siento bien cuidada.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-medical-soft to-white">
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
            Testimonios de Pacientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La confianza de nuestras pacientes es nuestra mejor recomendación
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medical transition-all duration-300 border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Name */}
              <p className="text-gray-900 font-semibold">— {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

