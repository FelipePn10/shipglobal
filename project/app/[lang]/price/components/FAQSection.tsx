import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaqItem, faqs } from '../data/faqs';

export const FAQSection: React.FC = () => {
  const { t, ready } = useTranslation('common', { useSuspense: false });

  // Fallback to an empty array if translations aren't ready (though not strictly needed with static faqs)
  const faqItems = faqs;

  // Show loading state if translations aren't ready
  if (!ready) {
    return (
      <div className="container mx-auto px-4 mt-24" id="faq">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">Loading...</h2>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: (index: number) => ({
      opacity: 1,
      transition: { delay: 1.4 + index * 0.1, duration: 0.6 },
    }),
  };

  return (
    <div className="container mx-auto px-4 mt-24" id="faq">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-800">{t('pricing.faq.title')}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('pricing.faq.description')}</p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {faqItems.map((faq: FaqItem, index) => (
          <motion.div
            key={faq.id}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="mb-6"
          >
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">
                {t(`pricing.faq.items.${faq.questionKey}`)}
              </h3>
              <p className="text-gray-700">{t(`pricing.faq.items.${faq.answerKey}`)}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;