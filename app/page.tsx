import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctor from "@/components/Doctor";
import Steps from "@/components/Steps";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Doctor />
      <Steps />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}

