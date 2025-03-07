"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Package2, Truck, Clock, Shield, ArrowRight } from 'lucide-react';
import { ShippingCalculator } from '@/components/shipping-calculator';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { CoverageMap } from '@/components/coverage-map';
import OneStopService from '@/components/onetopservice';
import BrandsCarousel from '@/components/brand-carousel';
import ShippingServices from '@/components/shipping-service';

export default function Home({ params }: { params: { lang: string } }) {
  const { lang } = params;

  // Defina os textos com base no idioma
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
      title: "Your International Purchases",
      subtitle: "Without Borders",
      description: "Shop anywhere in the world and receive in Brazil with ease. Addresses in 14 countries, package consolidation, and personalized service.",
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: "Addresses in 14 Countries",
          description: "Receive your purchases at dedicated addresses in major global markets"
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: "Fast and Secure Shipping",
          description: "Express delivery with full tracking and included insurance"
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: "24/7 Support",
          description: "Specialized support available every day, anytime"
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Guaranteed Protection",
          description: "Your packages protected with full insurance and delivery guarantee"
        }
      ]
    },
    pt: {
      title: "Suas Compras Internacionais",
      subtitle: "Sem Fronteiras",
      description: "Compre em qualquer lugar do mundo de qualquer marca e receba no Brasil com facilidade. Endereços em 14 países, consolidação de pacotes e atendimento personalizado.",
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: "Endereços em 14 Países",
          description: "Receba suas compras em endereços dedicados nos principais mercados globais"
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: "Envio Rápido e Seguro",
          description: "Entrega expressa com rastreamento completo e seguro incluso"
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: "Atendimento 24/7",
          description: "Suporte especializado disponível todos os dias, a qualquer hora"
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Proteção Garantida",
          description: "Seus pacotes protegidos com seguro completo e garantia de entrega"
        }
      ]
    },
    es: {
      title: "Sus Compras Internacionales",
      subtitle: "Sin Fronteras",
      description: "Compre en cualquier lugar del mundo y reciba en Brasil con facilidad. Direcciones en 14 países, consolidación de paquetes y atención personalizada.",
      benefits: [
        {
          icon: <Package2 className="h-8 w-8" />,
          title: "Direcciones en 14 Países",
          description: "Reciba sus compras en direcciones dedicadas en los principales mercados globales"
        },
        {
          icon: <Truck className="h-8 w-8" />,
          title: "Envío Rápido y Seguro",
          description: "Entrega expresa con seguimiento completo y seguro incluido"
        },
        {
          icon: <Clock className="h-8 w-8" />,
          title: "Atención 24/7",
          description: "Soporte especializado disponible todos los días, a cualquier hora"
        },
        {
          icon: <Shield className="h-8 w-8" />,
          title: "Protección Garantizada",
          description: "Sus paquetes protegidos con seguro completo y garantía de entrega"
        }
      ]
    }
  };


const { title, subtitle, description, benefits } = content[lang] || content.en;

const cta = {
  primary: lang === 'en' ? 'Get Started' : lang === 'pt' ? 'Começar Agora' : 'Comenzar Ahora'
};

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {title}
              <br />
              <span className="text-primary">{subtitle}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                {lang === 'en' ? 'Get Started' : lang === 'pt' ? 'Começar Agora' : 'Comenzar Ahora'}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                {lang === 'en' ? 'How It Works' : lang === 'pt' ? 'Como Funciona' : 'Cómo Funciona'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section>
        <div>
          <BrandsCarousel />
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Cobertura Global</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Endereços dedicados nos principais mercados mundiais para suas compras internacionais
          </p>
          <CoverageMap />
        </div>
      </section>

      <section>
        <div>
          <ShippingServices />
        </div>
      </section>

      {/* OneStopService Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <OneStopService />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6 text-primary bg-primary/5 p-4 rounded-2xl">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-6">
              {lang === 'en' ? 'Ready to Start Shopping Globally?' : 
               lang === 'pt' ? 'Pronto para Comprar Globalmente?' : 
               '¿Listo para Comprar Globalmente?'}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {lang === 'en' ? 'Join thousands of customers enjoying hassle-free international shopping' : 
               lang === 'pt' ? 'Junte-se a milhares de clientes aproveitando compras internacionais sem complicações' : 
               'Únete a miles de clientes disfrutando de compras internacionales sin complicaciones'}
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-xl hover:bg-white/90 transition-all">
              {cta.primary} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Shipping Calculator Section */}
      <section className="bg-accent/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Calcule o Envio</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Simule o custo do seu envio internacional em tempo real
          </p>
          <ShippingCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">O Que Dizem Nossos Clientes</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Histórias reais de clientes que confiam em nossos serviços
          </p>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  );
}
