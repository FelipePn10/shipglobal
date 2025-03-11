"use client";

import React from 'react';
import { useContact } from './hooks/useContact';
import { Header } from './components/Header';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';
import { ProcessSteps } from './components/ProcessSteps';
import { FaqSection } from './components/FaqSection';
import { countries } from './data/countries';

export default function ContactPage() {
  const {
    formData,
    selectedCountry,
    isSubmitted,
    isAnimating,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContact();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-blue-900">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo countries={countries} selectedCountry={selectedCountry} />
          <ContactForm
            formData={formData}
            selectedCountry={selectedCountry}
            isSubmitted={isSubmitted}
            isAnimating={isAnimating}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
            countries={countries}
          />
        </div>
        <ProcessSteps />
        <FaqSection />
      </main>
    </div>
  );
}