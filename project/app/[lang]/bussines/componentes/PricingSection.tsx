"use client";

import React, { useState } from "react";
import { Pricing } from "../types/contentTypes";

interface PricingSectionProps {
  pricing: Pricing;
}

const PricingSection: React.FC<PricingSectionProps> = ({ pricing }) => {
  const [activeTab, setActiveTab] = useState<"standard" | "premium" | "enterprise">("standard");

  const plans = {
    standard: pricing.plans.standard,
    premium: pricing.plans.premium,
    enterprise: pricing.plans.enterprise,
  };

  const currentPlan = plans[activeTab];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6">{pricing.title}</h2>
      <p className="text-lg mb-6">{pricing.description}</p>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab("standard")}
          className={`px-6 py-2 font-semibold rounded-l-lg ${
            activeTab === "standard" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {pricing.tabs.standard}
        </button>
        <button
          onClick={() => setActiveTab("premium")}
          className={`px-6 py-2 font-semibold ${
            activeTab === "premium" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {pricing.tabs.premium}
        </button>
        <button
          onClick={() => setActiveTab("enterprise")}
          className={`px-6 py-2 font-semibold rounded-r-lg ${
            activeTab === "enterprise" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {pricing.tabs.enterprise}
        </button>
      </div>

      {/* Plan Details */}
      <div className="p-6 bg-white rounded-lg shadow-md text-center">
        <h3 className="text-4xl font-bold mb-2">
          {currentPlan.price}
          <span className="text-lg font-normal">{currentPlan.period}</span>
        </h3>
        <p className="text-gray-600 mb-6">{currentPlan.description}</p>
        <ul className="text-left space-y-2">
          {currentPlan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PricingSection;