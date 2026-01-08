import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nós | L.A. Locadora",
  description: "Conheça a história da L.A. Locadora e nosso compromisso com a exclusividade e segurança.",
};

export default function EmpresaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}