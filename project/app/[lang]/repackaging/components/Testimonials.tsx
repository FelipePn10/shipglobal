"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { fadeIn, staggerContainer, slideIn, scaleIn } from "./animations";

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-blue-100", text: "text-blue-600" },
    purple: { bg: "bg-purple-100", text: "text-purple-600" },
    amber: { bg: "bg-amber-100", text: "text-amber-600" },
    green: { bg: "bg-green-100", text: "text-green-600" },
  };

  return colors[color] || colors.blue;
};

const Testimonials: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer(0.2, 0.1)}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16"
          variants={slideIn("up", 20, 0.6, 0.2, "easeOut")}
        >
          O que Nossos Clientes Dizem
        </motion.h2>

        {/* Depoimentos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.2, 0.1)}
        >
          {testimonials.map((testimonial, index) => {
            const colorClasses = getColorClasses(testimonial.color);

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                {/* Cabeçalho com ícone de aspas e avatar */}
                <div className={`${colorClasses.bg} p-4 relative`}>
                  <Quote
                    className={`${colorClasses.text} w-6 h-6 absolute top-3 left-3 opacity-50`}
                  />
                  <div className="flex items-center justify-center mt-6">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-white ${colorClasses.bg}`}
                      variants={scaleIn(0.8, 0.6, 0.2, "easeOut")}
                    >
                      <span className={`${colorClasses.text} font-bold text-lg`}>
                        {testimonial.initials}
                      </span>
                    </motion.div>
                  </div>
                </div>

                {/* Corpo do depoimento */}
                <div className="p-6 text-center">
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm mb-4">{testimonial.location}</p>

                  <motion.p
                    className="text-gray-700 italic mb-4"
                    variants={fadeIn("up", 20, 0.6, 0.3, "easeOut")}
                  >
                    &quot;{testimonial.quote}&quot;
                  </motion.p>

                  {/* Avaliação com estrelas */}
                  <motion.div
                    className="flex justify-center space-x-1"
                    variants={fadeIn("up", 20, 0.6, 0.4, "easeOut")}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Botão "Ver Mais Depoimentos" */}
        <motion.div
          className="text-center mt-12"
          variants={fadeIn("up", 20, 0.6, 0.5, "easeOut")}
        >
          <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
            Ver Mais Depoimentos →
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;