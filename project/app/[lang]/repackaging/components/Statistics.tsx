import React from "react";
import { motion } from "framer-motion";
import { statistics } from "../data/statistics";
import { fadeIn, staggerContainer, slideIn, scaleIn } from "./animations";

const Statistics: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        {/* Título e divisor */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn("up", 20, 0.6, 0.2, "gentle")}
        >
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={slideIn("up", 20, 0.6, 0.3, "gentle")}
          >
            Nosso Impacto em Números
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-white/30 mx-auto rounded-full"
            variants={scaleIn(0.8, 0.6, 0.4, "gentle")}
          />
        </motion.div>

        {/* Estatísticas */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.2, 0.1)}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Valor e símbolo */}
              <motion.div
                className="inline-flex items-baseline"
                variants={scaleIn(0.8, 0.6, 0.2 + index * 0.1, "gentle")}
              >
                <span className="text-5xl font-bold mr-1">{stat.value}</span>
                <span className="text-2xl font-semibold">{stat.symbolSuffix}</span>
              </motion.div>

              {/* Descrição */}
              <motion.p
                className="text-blue-100 mt-2 text-lg"
                variants={fadeIn("up", 20, 0.6, 0.3 + index * 0.1, "gentle")}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;