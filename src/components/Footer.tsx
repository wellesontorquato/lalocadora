"use client";
import { Instagram, Facebook, MessageCircle, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    /* Reduzi pt-32 para pt-16 e pb-12 para pb-8 */
    <footer className="bg-brand-dark pt-16 pb-8 px-6 md:px-12 border-t border-white/5 overflow-hidden relative">
      
      {/* Marca d'água Gigante - Ajustada para não empurrar o conteúdo */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none select-none w-full flex justify-center opacity-10">
        <h2 className="text-[20vw] font-black text-white/[0.02] leading-none tracking-[-0.08em] whitespace-nowrap uppercase">
          L.A. LOCADORA
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Reduzi mb-40 para mb-20 para aproximar o conteúdo do bottom bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          
          {/* Branding */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src="/logolalocadora.png" 
                  alt="L.A. Locadora" 
                  className="w-12 h-12 rounded-full border border-white/10 p-0.5"
                />
                <span className="text-white font-black text-2xl md:text-3xl tracking-[-0.06em] uppercase leading-none">
                  L.A. <span className="text-brand-blue italic">LOCADORA</span>
                </span>
              </div>
              <p className="text-gray-500 max-w-sm text-base md:text-lg tracking-tight leading-snug">
                Redefinindo a liberdade sobre rodas em Maceió. <br />
                <span className="text-white/40 italic text-sm">Exclusividade em cada destino.</span>
              </p>
            </div>

            <div className="flex gap-3">
              {[
                { Icon: Instagram, link: "#" },
                { Icon: Facebook, link: "#" },
                { Icon: MessageCircle, link: "https://wa.me/5582996906585" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link} 
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-white/5 text-white/20 hover:text-brand-blue hover:border-brand-blue transition-all duration-500"
                >
                  <item.Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navegação */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black text-[9px] uppercase tracking-[0.5em] opacity-30">Navegação</h4>
            <ul className="space-y-3">
              {["Início", "Frota", "Empresa", "Contato"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-white text-[11px] uppercase tracking-widest font-black transition-all group flex items-center gap-2"
                  >
                    <span className="w-0 h-[1px] bg-brand-blue group-hover:w-3 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato Editorial Atualizado */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-black text-[9px] uppercase tracking-[0.5em] opacity-30">Direto</h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-[8px] text-brand-blue uppercase font-black tracking-widest mb-1 opacity-70">WhatsApp</p>
                <p className="text-white text-lg font-black tracking-tighter group-hover:text-brand-blue transition-colors">
                  (82) 99690-6585
                </p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[8px] text-brand-blue uppercase font-black tracking-widest mb-1 opacity-70">Atendimento</p>
                <p className="text-white text-base font-black tracking-tighter italic group-hover:text-brand-blue transition-colors">
                  contato@lalocadora.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar mais compacto */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-black text-gray-600 uppercase tracking-[0.3em]">
          <div className="flex items-center gap-4">
            <p>© 2026 L.A. LOCADORA.</p>
            <span className="w-1 h-1 bg-gray-800 rounded-full"></span>
            <p>Maceió - AL</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 text-white/20 hover:text-brand-blue transition-all group"
          >
            BACK TO TOP <ArrowUp size={10} className="group-hover:-translate-y-1 transition-transform" />
          </button>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}