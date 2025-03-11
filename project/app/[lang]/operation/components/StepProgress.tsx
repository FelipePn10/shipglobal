import React from 'react';
import { motion } from 'framer-motion';

interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
  goToStep: (step: number) => void;
}

export const StepProgress: React.FC<StepProgressProps> = ({ currentStep, totalSteps, goToStep }) => {
  return (
    <div className="relative mb-24">
      {/* Progress Bar */}
      <div className="h-2 bg-gray-200 rounded-full mb-8 relative">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Step Indicators */}
      <div className="flex justify-between items-center relative -mt-12">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => goToStep(index + 1)}
          >
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                currentStep >= index + 1 ? 'bg-blue-600' : 'bg-gray-400'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {index + 1}
            </motion.div>
            <span className="text-xs mt-2 text-gray-600 hidden md:block">Passo {index + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};