"use client";
import { motion } from "framer-motion";
import { FROTA, Carro } from "@/constants/carros";
import { Fuel, Gauge, ArrowUpRight, Milestone } from "lucide-react";

type FrotaProps = {
  showHeader?: boolean;
  showDivider?: boolean;     // ✅ controla a linha de cima
  contactHref?: string;      // ✅ permite trocar o alvo do botão "RESERVAR"
  containerClassName?: string; // ✅ caso queira ajustar padding/margem em páginas específicas
};

export default function Frota({
  showHeader = true,
  showDivider = true,
  contactHref = "/contato",
  containerClassName = "",
}: FrotaProps) {
  return (
    <div className={`bg-brand-dark font-display ${showDivider ? "border-t border-white/5" : ""}`}>
      <div className={`max-w-[1400px] mx-auto px-2 md:px-0 ${containerClassName}`}>
        {/* Cabeçalho (opcional) */}
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <span className="pt-6 text-brand-blue font-bold text-[10px] uppercase tracking-[0.45em] mb-5 block">
              Curadoria de Veículos
            </span>

            <h2 className="text-6xl md:text-9xl font-black tracking-[-0.06em] leading-[0.85] text-white uppercase italic">
              Nossa <br />
              <span className="text-brand-blue">Seleção.</span>
            </h2>
          </motion.div>
        )}

        {/* Grid de Veículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-14 md:gap-y-20">
          {FROTA.map((carro: Carro, index: number) => (
            <motion.div
              key={carro.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Imagem */}
              <div className="relative aspect-[16/9] overflow-hidden bg-brand-gray/10 mb-8 transition-all duration-700 group-hover:bg-brand-gray/20">
                <img
                  src={carro.imagem}
                  alt={carro.nome}
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transform group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-blue text-brand-dark text-[8px] font-black px-3 py-1 uppercase tracking-widest">
                    {carro.categoria}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-7">
                <div className="space-y-3">
                  <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-brand-blue transition-colors">
                    {carro.nome}
                  </h3>

                  <div className="flex flex-wrap gap-5 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                    <span className="flex items-center gap-2">
                      <Gauge size={14} className="text-brand-blue" /> {carro.cambio}
                    </span>
                    <span className="flex items-center gap-2">
                      <Fuel size={14} className="text-brand-blue" /> {carro.combustivel}
                    </span>
                    <span className="flex items-center gap-2">
                      <Milestone size={14} className="text-brand-blue" /> {carro.lugares} Lugares
                    </span>
                  </div>
                </div>

                {/* Preços + CTA */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-7 pt-6 border-t border-white/5">
                  <div className="flex gap-10">
                    <div className="space-y-1">
                      <span className="text-gray-500 text-[8px] font-black uppercase tracking-widest block">
                        Diária até 300km
                      </span>
                      <p className="text-4xl font-black text-white tracking-tighter leading-none">
                        <span className="text-brand-blue text-sm mr-1 italic">R$</span>
                        {carro.preco300km}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-brand-blue text-[8px] font-black uppercase tracking-widest block">
                        Diária KM Livre
                      </span>
                      <p className="text-4xl font-black text-white tracking-tighter leading-none">
                        <span className="text-brand-blue text-sm mr-1 italic">R$</span>
                        {carro.precoKmLivre}
                      </p>
                    </div>
                  </div>

                  <a
                    href={contactHref}
                    className="inline-flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-[0.4em] group-hover:text-brand-blue transition-all"
                  >
                    RESERVAR{" "}
                    <ArrowUpRight
                      size={18}
                      className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
