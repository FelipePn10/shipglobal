import React from "react";
import { motion } from "framer-motion";
import { Package, Box } from "lucide-react";
import { processSteps } from "../data/process-steps";
import { fadeIn, staggerContainer, slideIn, rotateIn, scaleIn } from "./animations";

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
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
            className="inline-block px-4 py-1 bg-indigo-50 text-indigo-600 rounded-full mb-4 text-sm font-medium"
            variants={slideIn("up", 20, 0.6, 0.3, "gentle")}
          >
            Processo simplificado
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-800 mb-6"
            variants={slideIn("up", 20, 0.6, 0.4, "gentle")}
          >
            Como Funciona
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            variants={slideIn("up", 20, 0.6, 0.5, "gentle")}
          >
            Nosso processo de reembalagem é transparente e eficiente, garantindo que você acompanhe
            cada etapa do serviço.
          </motion.p>
        </motion.div>

        {/* Passos do processo */}
        <div className="relative">
          {/* Linha vertical central */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-purple-300 transform -translate-x-1/2 rounded-full"></div>

          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer(0.2, 0.1)}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                className="flex flex-col md:flex-row items-center relative"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
              >
                {/* Conteúdo do lado esquerdo ou direito (alternado) */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:order-last"
                  }`}
                >
                  <motion.div
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                    variants={scaleIn(0.9, 0.6, 0.2, "gentle")}
                  >
                    <span className="inline-block text-xs font-semibold text-indigo-500 mb-2">
                      ETAPA {step.number}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                </div>

                {/* Número do passo (círculo central) */}
                <div className="md:w-0 flex items-center justify-center my-6 md:my-0">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md relative z-10"
                    variants={rotateIn(-10, 0.6, 0.2, "elastic")}
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Conteúdo do lado direito ou esquerdo (alternado) */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-16 md:order-last" : "md:pr-16"
                  }`}
                >
                  <motion.div
                    className="h-52 rounded-lg flex items-center justify-center shadow-sm border"
                    style={{
                      background: index % 2 === 0 ? "linear-gradient(to right, #EBF4FF, #C3DAFE)" : "linear-gradient(to right, #F5F3FF, #DDD6FE)",
                      borderColor: index % 2 === 0 ? "#BFDBFE" : "#D4D4D8",
                    }}
                    variants={fadeIn("up", 20, 0.6, 0.3, "gentle")}
                  >
                    <motion.div
                      className="w-24 h-24 bg-white rounded-lg flex items-center justify-center shadow"
                      animate={{
                        rotate: index % 2 === 0 ? [0, 5, 0, -5, 0] : [0, 0],
                        scale: index % 2 === 0 ? 1 : [1, 1.05, 1],
                      }}
                      transition={{
                        duration: index % 2 === 0 ? 6 : 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {index % 2 === 0 ? (
                        <Package className="w-12 h-12 text-blue-500" />
                      ) : (
                        <Box className="w-12 h-12 text-purple-500" />
                      )}
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;