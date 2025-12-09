"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="sobre-nosotros" className="py-20 overflow-hidden">
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

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm md:max-w-none mx-auto">
                        {[
                            {
                                title: "Rapidez y Precisión",
                                desc: "Entrega de resultados optimizada sin comprometer la rigurosidad diagnóstica.",
                                icon: null,
                                hasBackgroundImage: true,
                                backgroundImageSrc: "/assets/iconos_servicios/relog_nuevo_SF.png"
                            },
                            {
                                title: "Tecnología Digital",
                                desc: "Informes digitales accesibles desde cualquier dispositivo, en cualquier momento.",
                                icon: null,
                                hasBackgroundImage: true,
                                backgroundImageSrc: "/assets/iconos_servicios/informe_pixel_SF.png"
                            },
                            {
                                title: "Seguridad QR",
                                desc: "Validación electrónica única que garantiza la autenticidad de cada informe.",
                                icon: null,
                                hasBackgroundImage: true,
                                backgroundImageSrc: "/assets/iconos_servicios/QR_SF_new.png"
                            },
                            {
                                title: "Atención Humana",
                                desc: "Trato cálido y personalizado, entendiendo el contexto de cada paciente.",
                                icon: null,
                                hasBackgroundImage: true,
                                backgroundImageSrc: "/assets/iconos_servicios/corazon_SF.png"
                            },
                            {
                                title: "Experiencia",
                                desc: "Años de trayectoria dedicados exclusivamente a la citología ginecológica.",
                                icon: null,
                                hasBackgroundImage: true,
                                backgroundImageSrc: "/assets/iconos_servicios/exp_SF.png"
                            },
                            {
                                title: "Confidencialidad",
                                desc: "Manejo seguro y privado de toda tu información médica.",
                                icon: null,
                                hasBackgroundImage: true,
                                backgroundImageSrc: "/assets/iconos_servicios/candado_SF.png"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-white/20 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg border border-white/30 group transition-all duration-500 hover:bg-white/30 hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center h-full ${item.hasBackgroundImage ? 'relative overflow-hidden' : ''}`}
                            >
                                {item.hasBackgroundImage && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-50 pointer-events-none transition-transform duration-500 group-hover:scale-110">
                                        <Image
                                            src={item.backgroundImageSrc || "/assets/relog_SF.png"}
                                            alt={item.title}
                                            width={256}
                                            height={256}
                                            className="w-64 h-64 object-contain"
                                        />
                                    </div>
                                )}
                                <h4 className="text-xl font-bold text-gray-900 mb-6 relative z-10">{item.title}</h4>
                                {item.icon && (
                                    <div className="flex items-center justify-center text-primary mb-6 transition-colors duration-300 relative z-10">
                                        {item.icon}
                                    </div>
                                )}
                                <p className="text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. SECCIÓN INNOVACIÓN DIGITAL */}
                <div className="rounded-[3rem] overflow-hidden relative min-h-[600px] flex items-center">
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/assets/mujer_celu.png"
                            alt="Resultados digitales siempre con vos"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay oscuro para mejorar legibilidad */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
                    </div>

                    {/* Card glassmorphism con texto */}
                    <div className="container mx-auto px-8 md:px-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-8 md:p-12 space-y-8"
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                                Tus resultados, <br />
                                <span className="text-pink-300">siempre con vos</span>
                            </h3>
                            <p className="text-lg text-white/95 leading-relaxed drop-shadow">
                                Olvídate de los papeles y las esperas. Accede a tus informes completos directamente desde tu celular, con la misma validez que el formato físico.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Acceso inmediato apenas está listo el informe",
                                    "Historial médico digitalizado",
                                    "Fácil de compartir con tu médico"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-white font-medium drop-shadow">
                                        <div className="w-6 h-6 rounded-full bg-pink-400/80 flex items-center justify-center text-white text-sm flex-shrink-0">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-4">
                                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors shadow-lg">
                                    Ver cómo funciona
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
