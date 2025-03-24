'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package2, 
  ClipboardCheck, 
  Truck, 
  Shield, 
  ChevronDown,
  ArrowRight,
  PackageCheck,
  Sparkles,
  Clock,
  BadgeCheck
} from 'lucide-react';
import Link from 'next/link';

type Step = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

type FAQ = {
  question: string;
  answer: string;
};

const steps: Step[] = [
  {
    title: 'Initial Assessment',
    description: 'Our experts analyze your current packaging needs and challenges to develop a tailored solution.',
    icon: <ClipboardCheck className="w-8 h-8" />,
  },
  {
    title: 'Custom Solution Design',
    description: 'We create a customized repackaging strategy that optimizes costs and enhances product protection.',
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: 'Repackaging Process',
    description: 'Our skilled team carefully executes the repackaging plan using state-of-the-art materials and techniques.',
    icon: <Package2 className="w-8 h-8" />,
  },
  {
    title: 'Quality Control & Delivery',
    description: 'Rigorous quality checks ensure perfect packaging before swift delivery to your destination.',
    icon: <Truck className="w-8 h-8" />,
  },
];

const benefits: Benefit[] = [
  {
    title: 'Cost Efficiency',
    description: 'Reduce packaging costs while maintaining premium quality',
    icon: <PackageCheck className="w-6 h-6" />,
  },
  {
    title: 'Enhanced Protection',
    description: 'Superior materials and techniques for maximum product safety',
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: 'Quick Turnaround',
    description: 'Fast and efficient repackaging process with minimal delays',
    icon: <Clock className="w-6 h-6" />,
  },
  {
    title: 'Quality Assured',
    description: 'Comprehensive quality control at every step',
    icon: <BadgeCheck className="w-6 h-6" />,
  },
];

const faqs: FAQ[] = [
  {
    question: 'What types of products do you repackage?',
    answer: 'We handle a wide range of products from consumer goods to industrial equipment, ensuring each item receives appropriate packaging care.',
  },
  {
    question: 'How long does the repackaging process take?',
    answer: 'Typical turnaround time is 24-48 hours, depending on quantity and complexity. We offer expedited services for urgent needs.',
  },
  {
    question: 'Do you provide custom packaging solutions?',
    answer: 'Yes, we create tailored packaging solutions based on your specific product requirements and branding needs.',
  },
  {
    question: 'What quality standards do you follow?',
    answer: 'We adhere to international packaging standards and maintain strict quality control processes throughout the repackaging journey.',
  },
];

export default function RepackagingLanding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-500 to-green-400 bg-clip-text text-transparent mt-16">
            Transform Your Packaging Experience
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Professional repackaging solutions that enhance protection, reduce costs, and elevate your product presentation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={"/auth"}>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
          <Link href={"/explanation"}>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-300">
                Learn More
            </button>
          </Link>
          </div>
        </motion.div>

        {/* Process Visualizer */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="relative">
            <div className="h-2 bg-gray-200 rounded-full max-w-3xl mx-auto">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: currentStep === index ? 1 : 0.5,
                    y: 0,
                    scale: currentStep === index ? 1.05 : 1
                  }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-blue-600/20"
              >
                <div className="flex items-center justify-center mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="mb-4"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300"
                  aria-expanded={expandedFAQ === index}
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 bg-gray-50 rounded-b-lg">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}