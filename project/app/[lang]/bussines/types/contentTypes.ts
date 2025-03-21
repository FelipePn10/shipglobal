export type Language = "en" | "pt" | "es";

export interface Benefit {
  icon: string; // Changed from React.ReactElement to string
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Feature {
  icon: string; // Changed from React.ReactElement to string
  title: string;
  description: string;
}

export interface PricingPlan {
  price: string;
  period: string;
  description: string;
  features: string[];
}

export interface Pricing {
  title: string;
  description: string;
  tabs: {
    standard: string;
    premium: string;
    enterprise: string;
  };
  plans: {
    standard: PricingPlan;
    premium: PricingPlan;
    enterprise: PricingPlan;
  };
}

export interface ComparisonTable {
  title: string;
  description: string;
  headers: string[];
  rows: string[][];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  role: string;
}

export interface Contact {
  title: string;
  description: string;
  cta: string;
}

export interface Content {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  learnMore: string;
  contactSales: string;
  whyChooseUs: string;
  benefits: Benefit[];
  howItWorks: {
    title: string;
    steps: Step[];
  };
  features: {
    title: string;
    description: string;
    items: Feature[];
  };
  pricing: Pricing;
  comparisonTable: ComparisonTable;
  faq: {
    title: string;
    questions: FAQItem[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  contact: Contact;
}

export interface ContentMap {
  [key: string]: Content;
}