import React from "react";
import { motion } from "framer-motion";

const BrandsCarousel: React.FC = () => {
  // Lista de marcas (substitua pelos logos reais)
  const brands = [
    "Gucci",
    "Louis Vuitton",
    "Chanel",
    "Prada",
    "Hermès",
    "Rolex",
    "Tiffany & Co.",
    "Dior",
    "Cartier",
    "Burberry",
  ];

  return (
    <div className="bg-transparent py-12 overflow-hidden">
      <motion.div
        className="flex space-x-12"
        animate={{
          x: ["0%", "-100%"], // Animação de rolagem da esquerda para a direita
        }}
        transition={{
          duration: 20, // Duração da animação
          repeat: Infinity, // Repetir infinitamente
          ease: "linear", // Movimento linear
        }}
      >
        {/* Duplicar as marcas para criar um efeito de loop contínuo */}
        {[...brands, ...brands].map((brand, index) => (
          <div key={index} className="flex-shrink-0">
            <p className="text-2xl font-bold text-gray-800">{brand}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandsCarousel;