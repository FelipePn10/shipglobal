'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Package2, Truck, Clock, Shield, ArrowRight } from 'lucide-react';
import { ShippingCalculator } from '@/components/shipping-calculator';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { CoverageMap } from '@/components/coverage-map';
import OneStopService from '@/components/onetopservice';
import BrandsCarousel from '@/components/brand-carousel';
import ShippingServices from '@/components/shipping-service';
import BenefitsSection from '@/components/benefits-section';
import Link from 'next/link';
import StatsSection from '@/components/hero-section';
import CallToAction from '@/components/callToAction';

export default function Home() {
  const params = useParams();
  const lang = (params?.lang as string) || 'pt';

  type ContentType = {
    [key: string]: {
      title: string;
      subtitle: string;
      description: string;
      benefits: {
        icon: JSX.Element;
        title: string;
        description: string;
      }[];
    };
  };

  const content: ContentType = {
    en: {
      title: 'Your International Purchases',
      subtitle: 'Without Borders',
      description: 'Shop anywhere in the world and receive in Brazil with ease. Addresses in 17 countries, package consolidation, and personalized service.',
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: 'Addresses in 17 Countries',
          description: 'Receive your purchases at dedicated addresses in major global markets',
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: 'Fast and Secure Shipping',
          description: 'Express delivery with full tracking and included insurance',
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: '24/7 Support',
          description: 'Specialized support available every day, anytime',
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: 'Guaranteed Protection',
          description: 'Your packages protected with full insurance and delivery guarantee',
        },
      ],
    },
    pt: {
      title: 'Suas Compras Internacionais',
      subtitle: 'Sem Fronteiras',
      description: 'Compre em qualquer lugar do mundo de qualquer marca e receba no Brasil com facilidade. Endereços em 17 países, consolidação de pacotes e atendimento personalizado.',
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: 'Endereços em 17 Países',
          description: 'Receba suas compras em endereços dedicados nos principais mercados globais',
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: 'Envio Rápido e Seguro',
          description: 'Entrega expressa com rastreamento completo e seguro incluso',
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: 'Atendimento 24/7',
          description: 'Suporte especializado disponível todos os dias, a qualquer hora',
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: 'Proteção Garantida',
          description: 'Seus pacotes protegidos com seguro completo e garantia de entrega',
        },
      ],
    },
    es: {
      title: 'Sus Compras Internacionales',
      subtitle: 'Sin Fronteiras',
      description: 'Compre en cualquier lugar del mundo y reciba en Brasil con facilidad. Direcciones en 17 países, consolidación de paquetes y atención personalizada.',
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: 'Direcciones en 17 Países',
          description: 'Reciba sus compras en direcciones dedicadas en los principales mercados globales',
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: 'Envío Rápido y Seguro',
          description: 'Entrega expresa con seguimiento completo y seguro incluido',
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: 'Atención 24/7',
          description: 'Soporte especializado disponible todos los días, a qualquer hora',
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: 'Protección Garantizada',
          description: 'Sus paquetes protegidos con seguro completo y garantía de entrega',
        },
      ],
    },
  };

  const { title, subtitle, description, benefits } = content[lang] || content.en;

  const cta = {
    primary: lang === 'en' ? 'Get Started' : lang === 'pt' ? 'Começar Agora' : 'Comenzar Ahora',
    howItWorks: lang === 'en' ? 'How It Works' : lang === 'pt' ? 'Como Funciona' : 'Cómo Funciona',
    calculateShipping: lang === 'en' ? 'Calculate Your Shipping' : lang === 'pt' ? 'Calcule o Envio' : 'Calcula tu Envío',
    shippingDescription: lang === 'en'
      ? 'Simulate your international shipping cost in real-time'
      : lang === 'pt'
      ? 'Simule o custo do seu envio internacional em tempo real'
      : 'Simula el costo de tu envío internacional en tiempo real',
    readyTitle: lang === 'en' ? 'Ready to Start Shopping Globally?' : lang === 'pt' ? 'Pronto para Comprar Globalmente?' : '¿Listo para Comprar Globalmente?',
    readyDescription: lang === 'en'
      ? 'Join thousands of customers enjoying hassle-free international shopping'
      : lang === 'pt'
      ? 'Junte-se a milhares de clientes aproveitando compras internacionais sem complicações'
      : 'Únete a miles de clientes disfrutando de compras internacionales sin complicaciones',
    testimonialsTitle: lang === 'en' ? 'What Our Clients Say' : lang === 'pt' ? 'O Que Dizem Nossos Clientes' : 'Qué Dicen Nuestros Clientes',
    testimonialsDescription: lang === 'en'
      ? 'Real stories from clients who trust our services'
      : lang === 'pt'
      ? 'Histórias reais de clientes que confiam em nossos serviços'
      : 'Historias reales de clientes que confían en nuestros servicios',
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <StatsSection />

      {/* Brands Carousel Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <BrandsCarousel />
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            {lang === 'en' ? 'Global Coverage' : lang === 'pt' ? 'Cobertura Global' : 'Cobertura Global'}
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            {lang === 'en'
              ? 'Dedicated addresses in major global markets for your international purchases'
              : lang === 'pt'
              ? 'Endereços dedicados nos principais mercados mundiais para suas compras internacionais'
              : 'Direcciones dedicadas en los principales mercados globales para tus compras internacionales'}
          </p>
          <CoverageMap />
        </div>
      </section>

      {/* Shipping Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <ShippingServices />
        </div>
      </section>

      {/* One Stop Service Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <OneStopService />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection lang={lang} benefits={benefits} />

      {/* Shipping Calculator Section */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">{cta.calculateShipping}</h2>
          <p className="text-xl text-muted-foreground mb-12">{cta.shippingDescription}</p>
          <ShippingCalculator />
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction 
        title={cta.readyTitle}
        description={cta.readyDescription}
        buttonText={cta.primary}
        lang={lang}
      />

      {/* Testimonials Section */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">{cta.testimonialsTitle}</h2>
          <p className="text-xl text-muted-foreground mb-12">{cta.testimonialsDescription}</p>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
}