export interface Carro {
  id: string;
  nome: string;
  categoria: string;
  preco300km: number; // Nova diária para plano até 300km
  precoKmLivre: number; // Nova diária para plano KM Livre
  imagem: string;
  cambio: string;
  combustivel: string;
  lugares: number;
}

export const FROTA: Carro[] = [
  {
    id: "onix-2022",
    nome: "Onix 2022",
    categoria: "Econômico Premium",
    preco300km: 140, // R$ 140 até 300km
    precoKmLivre: 170, // R$ 170 KM Livre
    imagem: "/carros/onix.webp",
    cambio: "Automático",
    combustivel: "Flex",
    lugares: 5
  },
  {
    id: "polo-2022",
    nome: "Polo 2022",
    categoria: "Econômico Premium",
    preco300km: 170, // R$ 170 até 300km
    precoKmLivre: 210, // R$ 210 KM Livre
    imagem: "/carros/polo.webp",
    cambio: "Automático",
    combustivel: "Flex",
    lugares: 5
  }
];