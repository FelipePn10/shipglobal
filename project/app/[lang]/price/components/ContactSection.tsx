import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { delay: 1.2 } },
      }}
      className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl max-w-4xl mx-auto"
    >
      <h3 className="text-2xl font-semibold mb-2 text-blue-800">{t('pricing.contact.title')}</h3>
      <p className="text-lg text-gray-600 mb-6">{t('pricing.contact.description')}</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#contato"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          {t('pricing.contact.contactUs')}
        </a>
        <a
          href="#faq"
          className="px-6 py-3 bg-white border border-blue-500 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
        >
          {t('pricing.contact.viewFAQ')}
        </a>
      </div>
    </motion.div>
  );
};