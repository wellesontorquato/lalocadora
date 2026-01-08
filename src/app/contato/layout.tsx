import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservas | L.A. Locadora",
  description: "Solicite sua reserva e fale com um consultor exclusivo via WhatsApp.",
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}