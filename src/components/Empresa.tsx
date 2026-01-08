"use client";
import { motion } from "framer-motion";

export default function Empresa() {
  return (
    <div className="bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center px-2 md:px-0">
        {/* Lado do Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-[1px] bg-brand-blue" />
            <span className="text-brand-blue font-bold text-[10px] uppercase tracking-[0.35em] block">
              Sobre a L.A. Locadora
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-6 leading-tight">
            Compromisso com o seu <br />
            <span className="text-brand-blue italic">destino e conforto.</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8 text-lg">
            A L.A. Locadora nasceu para transformar o aluguel de carros em uma experiência exclusiva e sem burocracia.
            Focamos em uma frota selecionada e revisada para garantir que sua única preocupação seja aproveitar a viagem.
          </p>

          <div className="grid grid-cols-2 gap-10 border-t border-white/10 pt-8">
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">+10.000</h4>
              <p className="text-[10px] text-brand-blue uppercase tracking-widest font-semibold">
                Clientes Atendidos
              </p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-white mb-1">24h</h4>
              <p className="text-[10px] text-brand-blue uppercase tracking-widest font-semibold">
                Suporte Dedicado
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lado da Imagem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 border border-brand-blue/20 rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000 pointer-events-none" />

          <div className="relative h-[360px] md:h-[550px] overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
              alt="L.A. Locadora Premium Service"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-brand-blue p-8 hidden md:block">
            <p className="text-brand-dark font-black text-xs uppercase tracking-tighter leading-none">
              Qualidade <br /> Certificada
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
