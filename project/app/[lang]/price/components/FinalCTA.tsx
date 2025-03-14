import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const FinalCTA: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div className="relative mt-24 py-16 overflow-hidden bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 1.8 } },
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-6">{t('pricing.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{t('pricing.cta.description')}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300">
            {t('pricing.cta.tryFree')}
          </button>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <circle cx="500" cy="500" r="400" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="500" cy="500" r="300" fill="none" stroke="white" strokeWidth="2" />
            <circle cx="500" cy="500" r="200" fill="none" stroke="white" strokeWidth="2" />
            <path d="M100,500 Q500,200 900,500" fill="none" stroke="white" strokeWidth="2" />
            <path d="M100,500 Q500,800 900,500" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};