import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laboratorio de Citología Ginecológica - Dra. Martínez",
  description: "Estudios citológicos confiables, precisos y con entrega rápida. Papanicolaou, citología en base líquida, colposcopía y más. Atención profesional y personalizada.",
  keywords: [
    "citología ginecológica",
    "papanicolaou",
    "PAP",
    "colposcopía",
    "detección HPV",
    "laboratorio médico",
    "estudios ginecológicos",
    "Dra. Martínez",
  ],
  authors: [{ name: "Laboratorio de Citología Ginecológica" }],
  openGraph: {
    title: "Laboratorio de Citología Ginecológica - Dra. Martínez",
    description: "Estudios citológicos confiables, precisos y con entrega rápida.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratorio de Citología Ginecológica",
    description: "Estudios citológicos confiables, precisos y con entrega rápida.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen">{children}</body>
    </html>
  );
}

