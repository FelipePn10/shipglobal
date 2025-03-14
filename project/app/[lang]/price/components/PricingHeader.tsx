import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface PricingHeaderProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

export const PricingHeader: React.FC<PricingHeaderProps> = ({ isYearly, setIsYearly }) => {
  const { t } = useTranslation('common');
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4 text-blue-800">{t('pricing.title')}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('pricing.description')}</p>

      <div className="mt-8 flex justify-center items-center">
        <span className={`text-lg ${!isYearly ? 'font-bold text-blue-700' : 'text-gray-600'}`}>
          {t('pricing.monthly')}
        </span>
        <label className="relative inline-flex items-center cursor-pointer mx-4">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
        <span className={`text-lg ${isYearly ? 'font-bold text-blue-700' : 'text-gray-600'}`}>
          {t('pricing.yearly')}
        </span>
        {isYearly && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="ml-2 inline-flex items-center bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            {t('pricing.save20')}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};