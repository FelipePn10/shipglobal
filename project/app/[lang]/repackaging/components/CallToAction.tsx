"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeIn, staggerContainer, slideIn, scaleIn, pulseAnimation } from "./animations";

const CallToAction: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer(0.2, 0.1)}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute rounded-full bg-white/10 w-64 h-64 -top-32 -left-32"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute rounded-full bg-white/10 w-96 h-96 -bottom-48 -right-48"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Título */}
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" 
          variants={slideIn("up", 20, 0.6, 0.2, "gentle")}
        >
          Pronto para economizar em seus fretes internacionais?
        </motion.h2>
        
        {/* Descrição */}
        <motion.p 
          className="text-xl mb-10 max-w-2xl mx-auto text-blue-100" 
          variants={slideIn("up", 20, 0.6, 0.3, "gentle")}
        >
          Junte-se a milhares de clientes satisfeitos que economizam até 70% em custos de envio com
          nosso serviço premium de reembalagem.
        </motion.p>
        
        {/* Botões */}
        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
          variants={staggerContainer(0.2, 0.1)}
        >
          <motion.button 
            className="group bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center justify-center"
            variants={scaleIn(0.9, 0.6, 0.2, "gentle")}
            whileHover={{ scale: 1.05 }}
          >
            Solicitar Reembalagem
            <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
          
          <motion.button 
            className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-bold py-4 px-8 rounded-full transform transition-all duration-300 hover:scale-105"
            variants={scaleIn(0.9, 0.6, 0.3, "gentle")}
            whileHover={{ scale: 1.05 }}
          >
            Falar com Especialista
          </motion.button>
        </motion.div>
        
        {/* Texto de rodapé */}
        <motion.p 
          className="mt-8 text-blue-200 text-sm"
          variants={fadeIn("up", 20, 0.6, 0.8, "gentle")}
        >
          Sem compromisso. Cancele a qualquer momento.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default CallToAction;