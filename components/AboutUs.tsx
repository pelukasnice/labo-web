"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="sobre-nosotros" className="py-20 bg-white">
            <div className="container mx-auto px-4">

                {/* 1. SECCIÓN INTRODUCCIÓN */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    {/* Texto Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-2">
                            Nuestra Trayectoria
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Compromiso con tu <span className="text-primary">Salud Femenina</span>
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                En <strong>Laboratorio de Citología Ginecológica Dra. Martínez</strong>, combinamos experiencia médica y tecnología avanzada con un objetivo claro: brindar diagnósticos precisos y tranquilidad a cada paciente.
                            </p>
                            <p>
                                Nos especializamos exclusivamente en estudios citológicos y anatomopatológicos, lo que nos permite mantener un estándar de calidad superior y una actualización constante en nuestra especialidad.
                            </p>
                        </div>
                    </motion.div>

                    {/* Imagen Intro */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl">
                            <Image
                                src="/assets/flor_cristal_SF.png"
                                alt="Laboratorio Dra. Nomi"
                                width={1000}
                                height={800}
                                className="w-full h-auto object-cover transform scale-125"
                            />
                        </div>

                    </motion.div>
                </div>

                {/* 2. SECCIÓN CARACTERÍSTICAS (GRID) */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Por qué elegirnos</h3>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            La excelencia en el diagnóstico es nuestra prioridad
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Rapidez y Precisión",
                                desc: "Entrega de resultados optimizada sin comprometer la rigurosidad diagnóstica.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Tecnología Digital",
                                desc: "Informes digitales accesibles desde cualquier dispositivo, en cualquier momento.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Seguridad QR",
                                desc: "Validación electrónica única que garantiza la autenticidad de cada informe.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4h2v-4zM6 6h2v2H6V6zm0 12h2v2H6v-2zm12-12h2v2h-2V6z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Atención Humana",
                                desc: "Trato cálido y personalizado, entendiendo el contexto de cada paciente.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Experiencia",
                                desc: "Años de trayectoria dedicados exclusivamente a la citología ginecológica.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Confidencialidad",
                                desc: "Manejo seguro y privado de toda tu información médica.",
                                icon: (
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                )
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-medical transition-all duration-300 border border-gray-100 group"
                            >
                                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. SECCIÓN INNOVACIÓN DIGITAL */}
                <div className="bg-gradient-to-br from-medical-soft to-white rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Texto Digital */}
                        <div className="order-2 md:order-1 space-y-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                                Tus resultados, <br />
                                <span className="text-primary">siempre con vos</span>
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Olvídate de los papeles y las esperas. Accede a tus informes completos directamente desde tu celular, con la misma validez que el formato físico.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Acceso inmediato apenas está listo el informe",
                                    "Historial médico digitalizado",
                                    "Fácil de compartir con tu médico"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg">
                                    Ver cómo funciona
                                </button>
                            </div>
                        </div>

                        {/* Imagen Celular */}
                        <div className="order-1 md:order-2 flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="relative"
                            >
                                {/* Glow effect behind phone */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-3xl rounded-full"></div>

                                <Image
                                    src="/assets/celular.jpeg"
                                    alt="Resultados digitales en tu celular"
                                    width={400}
                                    height={800}
                                    className="relative w-72 md:w-80 h-auto object-contain [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent),linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-composite:intersect] [-webkit-mask-composite:source-in]"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
