import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nossa Frota | L.A. Locadora",
  description: "Explore nossa seleção exclusiva de veículos premium e luxo para locação.",
};

export default function FrotaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}