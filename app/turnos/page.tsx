import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TurnosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-medical-soft to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sacar Turno
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Próximamente podrás agendar tu turno online. Por ahora, contactanos
              por teléfono o WhatsApp.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-soft space-y-4">
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-lg">+54 11 1234-5678</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-700">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <a
                  href="https://wa.me/541112345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </div>
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

