"use client";

import Navbar from "@/components/Navbar";
import Frota from "@/components/Frota";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PaginaFrota() {
  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden">
      <Navbar />

      <div className="h-24 md:h-28" />

      {/* HERO */}
      <section className="px-6 md:px-12 pb-6 md:pb-8">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-[-0.06em] uppercase"
          >
            NOSSA <span className="text-brand-blue italic text-stroke">FROTA.</span>
          </motion.h1>
        </div>
      </section>

      {/* CONTEÚDO (linha full width + respiro pequeno) */}
      <section className="pt-4 md:pt-6 pb-16 md:pb-20">
        {/* Linha FULL-WIDTH */}
        <div className="border-t border-white/5" />

        {/* Conteúdo alinhado com max-width */}
        <div className="px-6 md:px-12">
          <div className="max-w-[1400px] mx-auto pt-6 md:pt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Frota showHeader={false} showDivider={false} contactHref="/contato" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
