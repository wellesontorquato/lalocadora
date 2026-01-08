"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PaginaEmpresa() {
  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden">
      <Navbar />

      {/* Offset fixo do navbar */}
      <div className="h-24 md:h-28" />

      {/* HERO / CABEÇALHO DA PÁGINA */}
      <section className="px-6 md:px-12 pb-10 md:pb-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-[-0.06em] uppercase"
          >
            NOSSA <span className="text-brand-blue italic text-stroke">EMPRESA.</span>
          </motion.h1>
        </div>
      </section>

      {/* CONTEÚDO INSTITUCIONAL */}
      <section className="section-pad border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-blue text-[10px] uppercase tracking-[0.35em] font-black block mb-5">
              Sobre a L.A. Locadora
            </span>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
              Compromisso com o seu <br />
              <span className="text-brand-blue italic">destino e conforto.</span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              A L.A. Locadora nasceu para elevar o padrão de locação de veículos,
              oferecendo uma experiência premium, sem burocracia e com foco total
              em conforto, segurança e agilidade.
            </p>

            <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-black text-white mb-1">+10.000</h4>
                <p className="text-[10px] text-brand-blue uppercase tracking-widest font-semibold">
                  Clientes Atendidos
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-white mb-1">24h</h4>
                <p className="text-[10px] text-brand-blue uppercase tracking-widest font-semibold">
                  Suporte Dedicado
                </p>
              </div>
            </div>
          </motion.div>

          {/* IMAGEM / VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[360px] md:h-[520px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
                alt="L.A. Locadora"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
