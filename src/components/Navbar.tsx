"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu as MenuIcon } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Frota", path: "/frota" },
    { name: "Empresa", path: "/empresa" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] px-6 md:px-12 transition-all duration-700 ${
          scrolled || isOpen
            ? "bg-brand-dark/95 backdrop-blur-xl py-4"
            : "bg-transparent py-6" // ✅ era py-10 (alto demais)
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center font-display">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 z-[70]">
            <img
              src="/logolalocadora.png"
              alt="Logo"
              className="w-10 h-10 rounded-full border border-white/10"
            />
            <span className="text-white font-extrabold text-xl md:text-2xl tracking-[-0.03em] uppercase italic">
              L.A. <span className="text-brand-blue">LOCADORA</span>
            </span>
          </Link>

          <div className="hidden lg:flex gap-16 text-white/40 text-[12px] uppercase tracking-[0.4em] font-bold">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.path} className="hover:text-white transition-all relative group">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-blue transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/contato"
              className="hidden sm:inline-flex bg-brand-blue text-brand-dark px-6 py-3 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg shadow-brand-blue/20"
            >
              Reservar Agora
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden z-[70] bg-white p-3 text-brand-dark hover:bg-brand-blue hover:text-white transition-all"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[50] bg-brand-dark flex flex-col justify-center px-10 lg:hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.02] text-[40vw] font-black font-display whitespace-nowrap">
              L.A.
            </div>

            <nav className="flex flex-col gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-[-0.05em] hover:text-brand-blue transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-brand-blue text-sm font-sans tracking-widest opacity-30 group-hover:opacity-100">
                      0{index + 1}
                    </span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 pt-10 border-t border-white/5"
            >
              <p className="text-[10px] uppercase tracking-[0.5em] text-gray-500 mb-4 font-display">
                Contato Imediato
              </p>
              <p className="text-2xl font-display font-bold text-white tracking-tighter">(00) 00000-0000</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
