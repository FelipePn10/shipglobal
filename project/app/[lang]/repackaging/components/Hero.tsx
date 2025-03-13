import React from "react";
import { motion } from "framer-motion";
import { Package, Box } from "lucide-react";
import { fadeIn, slideIn, scaleIn, floatingAnimation, staggerContainer } from "./animations";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
        >
          {/* Conteúdo do lado esquerdo */}
          <motion.div 
            className="lg:w-1/2"
            variants={fadeIn("right", 20, 0.6, 0.2, "gentle")}
          >
            <motion.span 
              className="inline-block px-4 py-1 text-blue-600 bg-blue-50 rounded-full mb-6 font-medium text-sm border border-blue-100"
              variants={slideIn("left", 20, 0.6, 0.2, "gentle")}
            >
              Serviço Internacional Premium
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight"
              variants={slideIn("left", 20, 0.6, 0.3, "gentle")}
            >
              Economize em Frete com Nossa Reembalagem Profissional
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-700 mb-8 leading-relaxed"
              variants={slideIn("left", 20, 0.6, 0.4, "gentle")}
            >
              Reduza até 70% em seus custos de envio internacional com nosso serviço especializado 
              de reembalagem. Otimizamos seus pacotes, removemos volume desnecessário e garantimos 
              máxima proteção.
            </motion.p>
            
            <motion.div
              variants={slideIn("left", 20, 0.6, 0.5, "gentle")}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-300 flex items-center">
                <span>Solicitar Reembalagem</span>
                <span className="ml-2 text-lg">→</span>
              </button>
              <button className="bg-transparent text-blue-600 hover:bg-blue-50 border-2 border-blue-600 font-bold py-3 px-8 rounded-full transition hover:shadow-md duration-300">
                Ver Preços
              </button>
            </motion.div>
          </motion.div>

          {/* Conteúdo do lado direito */}
          <motion.div
            className="lg:w-1/2 relative h-96"
            initial="hidden"
            animate="visible"
            variants={scaleIn(0.8, 0.6, 0.2, "gentle")}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl transform -rotate-2"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Caixa flutuante 1 */}
                <motion.div
                  className="absolute w-44 h-44 bg-blue-100 rounded-xl shadow-lg flex items-center justify-center"
                  variants={{
                    visible: {
                      y: [0, -15, 0],
                      x: [0, 10, 0],
                      transition: {
                        repeat: Infinity,
                        repeatType: "mirror" as const, // Corrigido o tipo repeatType
                        duration: 6,
                        ease: "easeInOut",
                        delay: 1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  style={{ top: "15%", left: "15%" }}
                >
                  <Package className="w-16 h-16 text-blue-500" />
                </motion.div>

                {/* Caixa flutuante 2 */}
                <motion.div
                  className="absolute w-36 h-36 bg-purple-100 rounded-xl shadow-lg flex items-center justify-center"
                  variants={{
                    visible: {
                      y: [0, -12, 0],
                      x: [0, -8, 0],
                      transition: {
                        repeat: Infinity,
                        repeatType: "mirror" as const, // Corrigido o tipo repeatType
                        duration: 5,
                        ease: "easeInOut",
                        delay: 0.5,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  style={{ bottom: "20%", right: "20%" }}
                >
                  <Box className="w-12 h-12 text-purple-500" />
                </motion.div>

                {/* Caixa flutuante 3 */}
                <motion.div
                  className="absolute w-28 h-28 bg-amber-100 rounded-xl shadow-lg flex items-center justify-center"
                  variants={{
                    visible: {
                      y: [0, -8, 0],
                      x: [0, 5, 0],
                      transition: {
                        repeat: Infinity,
                        repeatType: "mirror" as const, // Corrigido o tipo repeatType
                        duration: 4,
                        ease: "easeInOut",
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  style={{ bottom: "35%", left: "35%" }}
                >
                  <Box className="w-10 h-10 text-amber-500" />
                </motion.div>

                {/* Tooltip de economia */}
                <motion.div
                  className="absolute bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  style={{ bottom: "10%", left: "10%" }}
                >
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm mb-1">
                    <span className="bg-blue-500 rounded-full w-2 h-2"></span>
                    Economia Garantida
                  </div>
                  <p className="text-xs text-gray-700">
                    Até 70% de redução nos custos de frete internacional
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;