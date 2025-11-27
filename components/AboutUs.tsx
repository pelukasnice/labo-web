"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="py-20 bg-gray-50" id="sobre-nosotros">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                        Sobre Nosotros
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 mb-12 items-center">
                        <div className="space-y-6 text-lg text-gray-700">
                            <p>
                                En <strong>Laboratorio de Citología Ginecológica Dra. Martínez</strong> trabajamos con un objetivo claro: ofrecer diagnósticos precisos, rápidos y confiables para cada una de nuestras pacientes y profesionales derivantes.
                            </p>
                            <p>
                                Combinamos experiencia médica, tecnología avanzada y un compromiso absoluto con la calidad.
                            </p>
                            <p>
                                Nos especializamos en estudios citológicos y anatomopatológicos orientados a la salud ginecológica, brindando un servicio moderno, ágil y centrado en la persona. Cada informe es analizado cuidadosamente para asegurar un diagnóstico personalizado, fundamentado y clínicamente útil.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-6">
                                Por qué elegirnos
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Entrega rápida de resultados sin comprometer la calidad del diagnóstico.",
                                    "Envío digital de informes, accesibles desde cualquier dispositivo.",
                                    "Validación electrónica con código QR, que garantiza autenticidad y seguridad.",
                                    "Profesionalismo y rigurosidad, respaldados por años de experiencia en citología ginecológica.",
                                    "Atención personalizada, con informes detallados y orientados al contexto clínico de cada paciente."
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-primary/5 rounded-2xl p-8 text-center border border-primary/10">
                        <p className="text-lg md:text-xl text-gray-800 font-medium italic">
                            "En nuestro laboratorio creemos que cada estudio es único y merece el máximo cuidado. Por eso combinamos la mejor tecnología con una mirada humana y profesional para ofrecer resultados confiables que ayudan a tomar decisiones médicas seguras."
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
