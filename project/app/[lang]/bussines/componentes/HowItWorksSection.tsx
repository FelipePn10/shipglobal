"use client";

import React from "react";
import { Step } from "../types/contentTypes";

interface HowItWorksSectionProps {
  title: string;
  steps: Step[];
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ title, steps }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md">
            <span className="text-4xl font-bold text-blue-600">{step.number}</span>
            <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;