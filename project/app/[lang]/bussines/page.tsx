"use client";

import React from "react";

import BenefitsSection from "./componentes/BenefitsSection";
import ComparisonTableSection from "./componentes/ComparisonTableSection";
import ContactSection from "./componentes/ContactSection";
import FAQSection from "./componentes/FAQSection";
import FeaturesSection from "./componentes/FeaturesSection";
import HowItWorksSection from "./componentes/HowItWorksSection";
import TestimonialsSection from "./componentes/TestimonialsSection";
import { content } from "./content/businessContent";
import { Pricing } from "./types/contentTypes";
import PricingSection from "./componentes/PricingSection";


// Explicitly type the PricingSection component
interface PricingSectionProps {
  pricing: Pricing;
}

interface BusinessPageProps {
  params: { lang: "en" | "pt" | "es" };
}

const BusinessPage: React.FC<BusinessPageProps> = ({ params }) => {
  const { lang } = params;
  const pageContent = content[lang];

  return (
    <div className="container mx-auto py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{pageContent.title}</h1>
        <h2 className="text-2xl text-gray-600 mb-8">{pageContent.subtitle}</h2>
        <p className="text-lg mb-8">{pageContent.description}</p>
        <div className="space-x-4">
          <a
            href="#create-account"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            {pageContent.cta}
          </a>
          <a
            href="#learn-more"
            className="inline-block px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300"
          >
            {pageContent.learnMore}
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">{pageContent.whyChooseUs}</h2>
        <BenefitsSection benefits={pageContent.benefits} />
      </section>

      {/* How It Works Section */}
      <HowItWorksSection
        title={pageContent.howItWorks.title}
        steps={pageContent.howItWorks.steps}
      />

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">{pageContent.features.title}</h2>
        <p className="text-lg mb-6 text-center">{pageContent.features.description}</p>
        <FeaturesSection features={pageContent.features.items} />
      </section>

      {/* Pricing Section */}
      {(PricingSection as React.FC<PricingSectionProps>)({ pricing: pageContent.pricing })}

      {/* Comparison Table Section */}
      <ComparisonTableSection comparisonTable={pageContent.comparisonTable} />

      {/* FAQ Section */}
      <FAQSection
        title={pageContent.faq.title}
        questions={pageContent.faq.questions}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title={pageContent.testimonials.title}
        items={pageContent.testimonials.items}
      />

      {/* Contact Section */}
      <ContactSection contact={pageContent.contact} />
    </div>
  );
};

export default BusinessPage;