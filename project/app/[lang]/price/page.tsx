"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PricingHeader } from './components/PricingHeader';
import PricingCard from './components/PricingCard';
import { ContactSection } from './components/ContactSection';
import FAQSection from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { getPlans } from './data/plans';
import i18next from 'i18next';
import { GlobalCoverage } from './components/GlobalCoverage';

interface PricingPageProps {
  params: Promise<{ lang: string }>;
}

export default function PricingPage({ params }: PricingPageProps) {
  const [lang, setLang] = useState<string>('en');
  const router = useRouter();

  useEffect(() => {
    params.then(({ lang }) => {
      setLang(lang);
      i18next.changeLanguage(lang).catch((err) => {
        console.error('Failed to change language:', err);
      });
    });
  }, [params]);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
  ];

  const changeLanguage = (code: string) => {
    router.push(`/${code}/price`);
  };

  const goToAuthPage = () => {
    router.push(`/${lang}/auth`);
  };

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState(false);

  const plans = getPlans(isYearly);

  useEffect(() => {
    const popularPlan = plans.find((plan) => plan.popular);
    if (popularPlan) {
      setSelectedPlan(popularPlan.id);
    }
  }, [plans]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <PricingHeader isYearly={isYearly} setIsYearly={setIsYearly} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              isYearly={isYearly}
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
              goToAuthPage={goToAuthPage}
              index={index}
            />
          ))}
        </div>
        <GlobalCoverage />
        <ContactSection />
      </div>
      <FAQSection />
      <FinalCTA />
    </section>
  );
}