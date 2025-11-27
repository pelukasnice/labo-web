"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
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
            Papanicolaou (PAP)
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Información completa sobre este estudio fundamental para tu salud
            ginecológica
          </p>
        </motion.div>

        {/* Qué es el PAP y para qué sirve */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Qué es el Papanicolaou?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              El Papanicolaou, también conocido como PAP, es un estudio
              citológico que consiste en la toma de una muestra de células del
              cuello del útero (cérvix) para su análisis microscópico. Es un
              procedimiento simple, rápido y fundamental en la prevención del
              cáncer de cuello uterino.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Este examen permite detectar cambios celulares anormales antes de
              que se conviertan en cáncer, lo que lo convierte en una herramienta
              esencial para la salud ginecológica de todas las mujeres.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-light/20 to-primary/10 rounded-2xl p-8 border border-primary-light/30"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Para qué sirve?
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Detectar células anormales en el cuello uterino
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Identificar lesiones precancerosas tempranamente
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      Prevenir el desarrollo de cáncer de cuello uterino
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Detectar infecciones y otras alteraciones</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cuándo y con qué frecuencia */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-medical-soft to-white rounded-3xl p-8 md:p-12 shadow-soft">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Cuándo y con qué frecuencia realizarlo?
              </h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-light text-2xl font-bold">21</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Edad de inicio
                </h4>
                <p className="text-gray-600">
                  Se recomienda comenzar a partir de los 21 años o cuando
                  inicies tu vida sexual
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-light text-2xl font-bold">1</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Frecuencia inicial
                </h4>
                <p className="text-gray-600">
                  Anualmente durante los primeros 3 años si los resultados son
                  normales
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-light text-2xl font-bold">3</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Frecuencia posterior
                </h4>
                <p className="text-gray-600">
                  Cada 3 años si los resultados anteriores fueron normales
                </p>
              </div>
            </div>
            <div className="mt-8 bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <p className="text-gray-700 text-center">
                <strong className="text-primary">Importante:</strong> Si tienes
                factores de riesgo o resultados anormales previos, tu médico
                puede recomendar una frecuencia diferente. Consulta siempre con
                un profesional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cómo se realiza el procedimiento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            ¿Cómo se realiza el procedimiento?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Preparación",
                description:
                  "Te recostarás en la camilla ginecológica en posición adecuada",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Inserción del espéculo",
                description:
                  "Se introduce un espéculo suavemente para visualizar el cuello uterino",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Toma de muestra",
                description:
                  "Se obtienen células del cuello uterino con una espátula y cepillo especial",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Análisis",
                description:
                  "La muestra se envía al laboratorio para análisis microscópico",
                icon: (
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-medical transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-light">
                  {item.icon}
                </div>
                <div className="text-sm font-bold text-primary mb-2">
                  Paso {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
            <p className="text-gray-700 text-center">
              <strong className="text-primary">Duración:</strong> El
              procedimiento completo toma aproximadamente{" "}
              <strong>5 a 10 minutos</strong>. Es rápido, seguro y generalmente
              no causa dolor, aunque puede haber una leve molestia.
            </p>
          </div>
        </motion.div>

        {/* Preparación previa y recomendaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-light/10 to-white rounded-3xl p-8 md:p-12 shadow-soft"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Preparación previa y recomendaciones
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Antes del estudio
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    Evitar relaciones sexuales 48 horas antes del estudio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    No usar tampones, óvulos o cremas vaginales 48 horas antes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    Evitar duchas vaginales al menos 48 horas antes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">✓</span>
                  <span>
                    Programar el estudio fuera del período menstrual
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Información importante
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>
                    No es necesario estar en ayunas para este estudio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>
                    Puedes continuar con tus actividades normales después del
                    estudio
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>
                    Los resultados suelen estar disponibles en 7 a 15 días
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1">•</span>
                  <span>
                    Si tienes dudas, consulta con tu médico antes del estudio
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-primary/10 rounded-2xl p-6 border border-primary/20">
            <p className="text-gray-700 text-center">
              <strong className="text-primary">Recuerda:</strong> El PAP es un
              estudio preventivo fundamental. Realizarlo regularmente puede
              salvar tu vida al detectar problemas de forma temprana.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
