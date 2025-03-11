import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../data/processSteps';

export const ProcessSteps: React.FC = () => {
  return (
    <div className="mt-20 mb-16">
      <h2 className="text-2xl font-bold text-center mb-12 text-blue-800">Como funciona nosso processo</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:-translate-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {step.icon}
            <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
            <p className="text-center text-blue-800">{step.description}</p>

            {index < 3 && (
              <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};