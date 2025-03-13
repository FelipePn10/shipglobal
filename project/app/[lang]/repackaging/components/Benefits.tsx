import React from "react";
import { motion } from "framer-motion";
import { benefits } from "../data/benefits";
import { fadeIn, staggerContainer, slideIn, scaleIn, rotateIn } from "./animations";

const Benefits: React.FC = () => {
  const getColorClass = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: "text-blue-500",
      indigo: "text-indigo-500",
      violet: "text-violet-500",
      amber: "text-amber-500",
      green: "text-green-500",
    };
    return colorMap[color] || "text-blue-500";
  };

  const getBgColorClass = (color: string) => {
    const bgColorMap: Record<string, string> = {
      blue: "bg-blue-100",
      indigo: "bg-indigo-100",
      violet: "bg-violet-100",
      amber: "bg-amber-100",
      green: "bg-green-100",
    };
    return bgColorMap[color] || "bg-blue-100";
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Título e descrição */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn("up", 20, 0.6, 0.2, "gentle")}
        >
          <motion.span
            className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full mb-4 text-sm font-medium"
            variants={slideIn("up", 20, 0.6, 0.3, "gentle")}
          >
            Por que escolher nosso serviço
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
            variants={slideIn("up", 20, 0.6, 0.4, "gentle")}
          >
            Benefícios da Reembalagem Profissional
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            variants={slideIn("up", 20, 0.6, 0.5, "gentle")}
          >
            Oferecemos um serviço completo que otimiza seus envios internacionais, economiza dinheiro
            e garante a segurança dos seus produtos.
          </motion.p>
        </motion.div>

        {/* Lista de benefícios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.2, 0.1)}
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="group bg-white border border-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-start">
                {/* Ícone com animação */}
                <motion.div
                  className={`mb-5 p-3 ${getBgColorClass(benefit.color)} rounded-lg transition-transform duration-300`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <benefit.icon className={`w-8 h-8 ${getColorClass(benefit.color)}`} />
                </motion.div>

                {/* Título e descrição */}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;