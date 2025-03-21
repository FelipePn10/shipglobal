import React, { useState } from "react";
import { FAQItem } from "../types/contentTypes";

interface FAQSectionProps {
  title: string;
  questions: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ title, questions }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-4 text-left font-semibold flex justify-between items-center"
            >
              {faq.question}
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;