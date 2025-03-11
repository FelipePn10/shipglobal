import React from 'react';
import { faqs } from '../data/faqs';

export const FaqSection: React.FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">Perguntas Frequentes</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-blue-700">{faq.question}</h3>
            <p className="text-blue-800">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};