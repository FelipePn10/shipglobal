import React from 'react';
import { motion } from 'framer-motion';
import { countries } from '../data/countries';

export const CountriesSection: React.FC = () => {
  return (
    <section className="mt-16 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Cobertura Global</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Nossa rede de escritórios cobre 17 países ao redor do mundo, facilitando suas compras internacionais com qualidade e agilidade.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {countries.map((country, index) => (
          <motion.div
            key={country.code}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-50 transition-colors duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mb-3">
              <span className="text-xl">{country.code}</span>
            </div>
            <h3 className="font-bold text-blue-900">{country.localName}</h3>
            <p className="text-xs text-gray-500">{country.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};