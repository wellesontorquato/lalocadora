import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google"; // Importando Syne para o visual premium
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

// Inter para textos corridos e leitura
const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter", 
});

// Syne para Navbar e Títulos imponentes
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: {
    default: "L.A. LOCADORA | Experiência Premium em Locação",
    template: "%s | L.A. LOCADORA" 
  },
  description: "Elevando o padrão de locação de veículos exclusivos. Conforto, agilidade e segurança em cada quilômetro.",
  icons: {
    icon: "/logolalocadora.jpg", // Verifique se o arquivo na pasta public é .jpg ou .png
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased bg-brand-dark text-white`}>
        <NextTopLoader 
          color="#87CEEB" 
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #87CEEB,0 0 5px #87CEEB"
        />
        
        {children}
      </body>
    </html>
  );
}