import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { countries } from '../data/countries';

export const GlobalCoverage: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.8 } },
      }}
      className="mt-16 text-center"
    >
      <h3 className="text-2xl font-semibold mb-4 text-blue-800">{t('pricing.globalCoverage.title')}</h3>
      <p className="text-lg text-gray-600 mb-8">{t('pricing.globalCoverage.description')}</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {countries.map((country, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + idx * 0.1 }}
            className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <p className="font-medium">{country}</p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + 12 * 0.1 }}
          className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        >
          <p className="font-medium">{t('pricing.globalCoverage.moreCountries')}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};