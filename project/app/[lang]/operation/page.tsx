"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useOperation } from './hooks/useOperation';
import { Header } from './components/Header';
import { StepProgress } from './components/StepProgress';
import { StepContent } from './components/StepContent';
import { Illustration } from './components/Illustration';
import { CountriesSection } from './components/CountriesSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { CallToAction } from './components/CallToAction';
import { steps } from './data/steps';
import { countries } from './data/countries';
import { advantages } from './data/advantages';

export default function ComoFunciona() {
  const { currentStep, totalSteps, currentLanguage, router, goToStep } = useOperation();

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <StepProgress currentStep={currentStep} totalSteps={totalSteps} goToStep={goToStep} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <StepContent currentStep={currentStep} steps={steps} />
          <Illustration currentStep={currentStep} />
        </div>
        <CountriesSection />
        <AdvantagesSection />
        <CallToAction currentLanguage={currentLanguage} router={router} />
      </main>
    </div>
  );
}