import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PlanType } from '../data/plans';

interface PricingCardProps {
  plan: PlanType;
  isYearly: boolean;
  selectedPlan: string | null;
  setSelectedPlan: (id: string) => void;
  goToAuthPage: () => void;
  index: number;
}

const PricingCardComponent = React.memo<PricingCardProps>(
  ({ plan, isYearly, selectedPlan, setSelectedPlan, goToAuthPage, index }) => {
    const { t, i18n } = useTranslation('common');

    // Debugging: Log the language and a sample translation
    React.useEffect(() => {
      console.log('Current language in PricingCard:', i18n.language);
      console.log('Sample translation for plans.basic.name:', t('pricing.plans.basic.name'));
    }, [i18n.language, t]);

    const shine = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.2, duration: 0.6 },
          },
        }}
        className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 
          ${selectedPlan === plan.id ? 'transform scale-105 z-10' : 'hover:scale-105'}
          ${plan.popular ? 'border-4 border-pink-400' : 'border border-gray-200'}
        `}
        onClick={() => setSelectedPlan(plan.id)}
      >
        {plan.popular && (
          <motion.div
            className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-lg font-semibold text-sm"
            variants={shine}
          >
            {t(`pricing.plans.${plan.key}.popular`)}
          </motion.div>
        )}

        <div className={`p-1 bg-gradient-to-r ${plan.color}`}>
          <div className="bg-white p-6 rounded-t-xl">
            <h3 className="text-2xl font-bold mb-2">{t(`pricing.plans.${plan.key}.name`)}</h3>
            <p className="text-gray-600 mb-4">{t(`pricing.plans.${plan.key}.description`)}</p>

            <div className="flex items-end mb-8">
              <span className="text-4xl font-bold">
                {plan.price === 0 ? t(`pricing.plans.${plan.key}.period`) : `R$ ${plan.price.toFixed(2)}`}
              </span>
              {plan.price > 0 && (
                <span className="text-gray-500 ml-1">
                  {t(`pricing.plans.${plan.key}.period`, {
                    period: isYearly ? t('pricing.yearly').toLowerCase() : t('pricing.monthly').toLowerCase(),
                  })}
                </span>
              )}
            </div>

            <button
              className={`w-full py-3 rounded-lg transition-all duration-300 font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg`}
              onClick={goToAuthPage}
            >
              {plan.price === 0 ? t('pricing.startNow') : t('pricing.subscribe')}
            </button>
          </div>
        </div>

        <div className="bg-gray-50 p-6">
          <h4 className="font-semibold text-lg mb-4 text-gray-700">{t('pricing.benefits')}</h4>
          <ul className="space-y-4">
            {plan.benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + idx * 0.1 }}
                  className="flex items-start"
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${plan.color} text-white`}
                  >
                    <Icon className="text-xl" />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{t(`pricing.plans.${plan.key}.benefits.${benefit.key}`)}</p>
                    <p className="text-sm text-gray-600">{t(`pricing.plans.${plan.key}.benefits.${benefit.key}Desc`)}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    );
  }
);

PricingCardComponent.displayName = 'PricingCard';

export default PricingCardComponent;