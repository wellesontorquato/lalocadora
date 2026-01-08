"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Formulario from "@/components/FormularioContato";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

type InfoItem = {
  icon: React.ElementType;
  label: string;
  valor: string;
  href?: string;
  external?: boolean;
};

export default function PaginaContato() {
  const endereco = "R. Dezoito, 04 - Antares, Maceió - AL, 57084-018";

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    endereco
  )}`;

  const infoContato: InfoItem[] = [
    {
      icon: Phone,
      label: "TELEFONE",
      valor: "(82) 99690-6585",
      href: "tel:+5582996906585",
    },
    {
      icon: Mail,
      label: "E-MAIL",
      valor: "contato@lalocadora.com",
      href: "mailto:contato@lalocadora.com",
    },
    {
      icon: MapPin,
      label: "ENDEREÇO",
      valor: "R. Dezoito, 04 - Antares",
      href: mapsLink,
      external: true,
    },
    {
      icon: Clock,
      label: "HORÁRIO",
      valor: "SEG-SEX: 08-12H / 14-18H | SÁB: 08-12H",
    },
  ];

  return (
    <main className="bg-brand-dark min-h-screen overflow-x-hidden font-display">
      <Navbar />

      {/* Offset fixo do navbar */}
      <div className="h-24 md:h-28" />

      {/* HERO / CABEÇALHO */}
      <section className="px-6 md:px-12 pb-10 md:pb-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black leading-none tracking-[-0.06em] uppercase"
          >
            FALE{" "}
            <span className="text-brand-blue italic text-stroke">
              CONOSCO.
            </span>
          </motion.h1>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="section-pad border-t border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">

          {/* LADO ESQUERDO – INFORMAÇÕES */}
          <motion.div
            className="lg:col-span-5 space-y-8 md:space-y-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {infoContato.map((item, i) => {
                const Wrapper = item.href ? "a" : "div";

                return (
                  <Wrapper
                    key={i}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`group block transition-all duration-500 ease-out ${
                      item.href ? "cursor-pointer hover:translate-x-2" : ""
                    }`}
                  >
                    {/* Label e Ícone */}
                    <div className="flex items-center gap-3 mb-2 opacity-40 group-hover:opacity-100 transition-all duration-500">
                      <item.icon
                        size={14}
                        className="text-brand-blue group-hover:scale-110 transition-transform"
                      />
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase text-white/70 group-hover:text-white">
                        {item.label}
                      </span>
                    </div>

                    {/* Valor e Seta */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-white font-black text-lg tracking-tighter uppercase group-hover:text-brand-blue transition-colors duration-500">
                        {item.valor}
                      </div>

                      {item.href && (
                        <span className="text-white/20 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 text-xs">
                          ↗
                        </span>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Localização */}
            <div className="pt-4 space-y-4">
              <span className="text-[9px] font-black tracking-[0.35em] uppercase text-brand-blue/80">
                Nossa localização
              </span>

              <div className="relative h-[360px] md:h-[400px] border border-white/5 grayscale contrast-125 brightness-50 hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.456!2d-35.7!3d-9.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzYnMDAuMCJTIDM1wrA0MicwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="opacity-60 hover:opacity-100 transition-opacity duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO – FORMULÁRIO */}
          <motion.div
            className="lg:col-span-7 bg-[#080808] border border-white/5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="[&>div]:py-10 md:[&>div]:py-12 [&>div]:px-8">
              <Formulario />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}