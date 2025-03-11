import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Lock } from 'lucide-react';
import { advantages } from '../data/advantages';

export const AdvantagesSection: React.FC = () => {
  const iconMap = { Truck, Clock, Lock };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Por Que Escolher Nossos Serviços?</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
            className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500"
          >
            <div className={`${advantage.bgColor} w-16 h-16 flex items-center justify-center rounded-full mb-4`}>
              {React.createElement(iconMap[advantage.icon as keyof typeof iconMap], {
                className: `h-8 w-8 ${advantage.textColor}`,
              })}
            </div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{advantage.title}</h3>
            <p className="text-gray-700">{advantage.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};