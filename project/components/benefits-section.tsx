import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  lang?: string;
  benefits: Benefit[];
  cta?: {
    primary?: string;
  };
}

const BenefitsSection = ({ lang = 'en', benefits = [], cta = {} }: BenefitsSectionProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const defaultCta = {
    primary: lang === 'en' ? 'Get Started' : lang === 'pt' ? 'Começar Agora' : 'Empezar Ahora',
  };
  
  const finalCta = { ...defaultCta, ...cta };
  
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
  };
  
  const iconVariants = {
    hover: {
      scale: 1.2, 
      rotate: 360,
      transition: { duration: 0.8, type: "spring", stiffness: 100 }
    }
  };
  
  // Paleta de cores mais vibrante (azul, amarelo, roxo, rosa)
  const backgroundColors = [
    'from-blue-500/20 to-cyan-400/20',
    'from-amber-400/20 to-yellow-300/20',
    'from-purple-500/20 to-violet-400/20',
    'from-pink-500/20 to-rose-400/20',
  ];
  
  const iconColors = [
    'text-blue-600 bg-blue-100',
    'text-amber-500 bg-amber-100',
    'text-purple-600 bg-purple-100',
    'text-pink-600 bg-pink-100',
  ];
  
  const getGradient = (index: number) => {
    return backgroundColors[index % backgroundColors.length];
  };
  
  const getIconStyle = (index: number) => {
    return iconColors[index % iconColors.length];
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Elementos de fundo decorativos */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          animate={{ 
            x: [0, 10, 0, -10, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
          className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-3xl opacity-30"
        />
        <motion.div 
          animate={{ 
            x: [0, -15, 0, 15, 0],
            y: [0, 10, 0, -10, 0],
          }}
          transition={{ repeat: Infinity, duration: 25, ease: "easeInOut", delay: 5 }}
          className="absolute -left-32 top-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-yellow-300/20 to-amber-400/20 blur-3xl opacity-30"
        />
        <motion.div 
          animate={{ 
            x: [0, 20, 0, -20, 0],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{ repeat: Infinity, duration: 30, ease: "easeInOut", delay: 10 }}
          className="absolute right-1/4 bottom-0 w-72 h-72 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-400/20 blur-3xl opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center space-x-1 mb-4"
          >
            <span className="h-px w-6 bg-blue-500/60"></span>
            <span className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 rounded-full">
              {lang === 'pt' ? 'Por que nos escolher' : lang === 'en' ? 'Why Choose Us' : 'Por qué elegirnos'}
            </span>
            <span className="h-px w-6 bg-blue-500/60"></span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
          >
            {lang === 'pt' ? 'Benefícios Exclusivos' : lang === 'en' ? 'Exclusive Benefits' : 'Beneficios Exclusivos'}
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 text-base md:text-lg"
          >
            {lang === 'pt'
              ? 'Oferecemos soluções inovadoras que transformam a maneira como você gerencia seus envios internacionais.'
              : lang === 'en'
              ? 'We offer innovative solutions that transform the way you manage your international shipments.'
              : 'Ofrecemos soluciones innovadoras que transforman la forma en que gestionas tus envíos internacionales.'}
          </motion.p>
        </motion.div>
        
        {/* Grid de benefícios */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="relative"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 200 }
                }}
                className="bg-white rounded-2xl overflow-hidden h-full flex flex-col relative z-10 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Gradiente de fundo do cartão */}
                <motion.div 
                  className={`absolute inset-0 opacity-0 bg-gradient-to-br ${getGradient(index)} rounded-2xl z-0`}
                  animate={{ opacity: hoveredIndex === index ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl ${getIconStyle(index)} border border-white/20`}
                  >
                    {React.cloneElement(benefit.icon as React.ReactElement, {
                      className: 'h-7 w-7',
                      strokeWidth: 1.75,
                    })}
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  
                  <p className="text-gray-600 text-base flex-grow">{benefit.description}</p>
                  
                  <motion.div
                    className="mt-6 group"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <Link href={`/${lang}/explanation`} className="group">
                      <motion.div
                        className={`inline-flex items-center font-medium ${index % 4 === 0 ? 'text-blue-600' : index % 4 === 1 ? 'text-amber-500' : index % 4 === 2 ? 'text-purple-600' : 'text-pink-600'}`}
                        whileHover={{ x: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {lang === 'pt' ? 'Saiba mais' : lang === 'en' ? 'Learn More' : 'Saber más'}
                        <motion.div 
                          className="ml-1.5"
                          animate={{ x: hoveredIndex === index ? 4 : 0 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Seção CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.5 }}
          className="mt-20 relative overflow-hidden rounded-3xl shadow-xl max-w-5xl mx-auto"
        >
          {/* Fundo animado */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-500 to-purple-600"
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{ 
                backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)'
              }}
              animate={{ 
                scale: [1, 1.2, 1], 
                rotate: [0, 15, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                {lang === 'pt' ? 'Pronto para transformar sua logística?' : lang === 'en' ? 'Ready to Transform Your Logistics?' : '¿Listo para transformar tu logística?'}
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-white/90 text-base md:text-lg max-w-xl"
              >
                {lang === 'pt'
                  ? 'Junte-se a milhares de empresas que já estão economizando tempo e dinheiro com nossas soluções.'
                  : lang === 'en'
                  ? 'Join thousands of businesses already saving time and money with our solutions.'
                  : 'Únete a miles de empresas que ya están ahorrando tiempo y dinero con nuestras soluciones.'}
              </motion.p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-white/20 blur-md transform scale-110" />
              <Link href={`/${lang}/auth`}>
                <span className="relative bg-white text-blue-600 font-medium px-8 py-4 rounded-full inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                  {finalCta.primary}
                  <motion.div 
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Indicadores de confiança */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-16 flex flex-wrap justify-center gap-x-10 gap-y-6"
        >
          {[
            lang === 'pt' ? 'Mais de 10.000 clientes satisfeitos' : lang === 'en' ? 'Over 10,000 satisfied customers' : 'Más de 10,000 clientes satisfechos',
            lang === 'pt' ? 'Presença em 50+ países' : lang === 'en' ? 'Presence in 50+ countries' : 'Presencia en más de 50 países',
            lang === 'pt' ? 'Suporte 24/7' : lang === 'en' ? '24/7 Support' : 'Soporte 24/7'
          ].map((text, index) => (
            <motion.div
              key={index}
              className="flex items-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  index === 0 ? 'bg-blue-100 text-blue-600' : 
                  index === 1 ? 'bg-amber-100 text-amber-600' : 
                  'bg-purple-100 text-purple-600'
                } mr-3`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Check className="h-4 w-4" />
              </motion.div>
              <span className="text-gray-700 font-medium">{text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;