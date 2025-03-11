import React from 'react';
import { motion } from 'framer-motion';
import { Step } from '../data/steps';

interface StepContentProps {
  currentStep: number;
  steps: Step[];
}

export const StepContent: React.FC<StepContentProps> = ({ currentStep, steps }) => {
  const step = steps[currentStep - 1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white p-8 rounded-xl shadow-lg ${step.borderColor}`}
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-4">{currentStep}. {step.title}</h2>
      <p className="text-lg text-gray-700 mb-6">{step.description}</p>
      <div className={`mt-6 p-4 ${step.bgColor} rounded-lg`}>
        <h3 className="font-bold text-blue-800 mb-2">{step.tipTitle}</h3>
        <p className="text-gray-700">{step.tipDescription}</p>
      </div>
    </motion.div>
  );
};