"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Frota from "@/components/Frota";
import Empresa from "@/components/Empresa";
import Formulario from "@/components/Formulario";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section id="home">
        <Hero />
      </section>

      {/* FROTA */}
      <section id="frota" className="section-pad">
        <Frota />
      </section>

      {/* EMPRESA */}
      <section id="empresa" className="section-pad">
        <Empresa />
      </section>

      {/* CONTATO (✅ agora vira um BLOCO padrão, igual os outros) */}
      <section id="contato" className="section-pad">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#0A0A0A] border border-white/5">
            <div className="py-10 md:py-12 px-6 md:px-10">
              <Formulario />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
