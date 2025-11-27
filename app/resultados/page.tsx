import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ResultadosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-medical-soft to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Consultar Estudios
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Accedé a tus resultados de forma segura ingresando tu número de
              estudio y DNI.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="numero-estudio"
                    className="block text-left text-gray-700 font-medium mb-2"
                  >
                    Número de Estudio
                  </label>
                  <input
                    type="text"
                    id="numero-estudio"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Ingresá tu número de estudio"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dni"
                    className="block text-left text-gray-700 font-medium mb-2"
                  >
                    DNI
                  </label>
                  <input
                    type="text"
                    id="dni"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="Ingresá tu DNI"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-medical hover:shadow-lg"
                >
                  Consultar
                </button>
              </form>
            </div>
            <Link
              href="/"
              className="inline-block mt-8 text-primary hover:text-primary-dark transition-colors"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

