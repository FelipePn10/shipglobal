'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  lang?: string;
  className?: string;
}

const CallToAction = ({
  title,
  description,
  buttonText,
  lang = 'en',
  className = '',
}: CallToActionProps) => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.1)',
    },
    tap: { scale: 0.98 },
  };

  return (
    <section
      className={`relative py-20 overflow-hidden ${className}`}
    >
      {/* Fundo animado em tons de azul e roxo como na imagem */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 40% 60%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Camada de ruído sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%\" height=\"100%\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Tag decorativa com frase impactante */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center space-x-2 mb-6"
          >
            <span className="h-px w-6 bg-white/40"></span>
            <span className="px-4 py-1 text-sm font-medium bg-white/10 text-white rounded-full backdrop-blur-sm shadow-sm">
              {lang === 'pt'
                ? 'Faça a Diferença Hoje'
                : lang === 'en'
                ? 'Make an Impact Today'
                : 'Haz un Impacto Hoy'}
            </span>
            <span className="h-px w-6 bg-white/40"></span>
          </motion.div>

          {/* Título */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            {title}
          </motion.h2>

          {/* Descrição */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* Botão CTA */}
          <motion.div variants={itemVariants}>
            <Link href={`/${lang}/auth`}>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="relative inline-block"
              >
                {/* Efeito de fundo do botão */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20 blur-md transform scale-110"
                  animate={{ scale: [1.1, 1.15, 1.1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                
                <Button
                  size="lg"
                  className="relative group bg-white text-blue-600 font-semibold px-8 py-6 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 text-lg border border-blue-200/50"
                >
                  {buttonText}
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                  >
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;