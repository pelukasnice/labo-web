"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 backdrop-blur-xl bg-white/40 relative overflow-hidden">
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

        {/* Carrusel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Contenedor del carrusel */}
          <div className="relative h-[400px] md:h-[350px] overflow-hidden rounded-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "tween", duration: 0.8, ease: "easeInOut" },
                  opacity: { duration: 0.8 },
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="backdrop-blur-xl bg-white/40 border border-white/30 shadow-xl shadow-black/10 rounded-2xl p-8 md:p-10 w-full max-w-3xl mx-4">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )
                    )}
                  </div>

                  {/* Text */}
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic text-center">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Name */}
                  <p className="text-gray-900 font-semibold text-center text-lg">
                    — {testimonials[currentIndex].name}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary hover:text-white group"
            aria-label="Testimonio anterior"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-primary hover:text-white group"
            aria-label="Siguiente testimonio"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? "bg-primary w-8 h-3"
                  : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                  }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

