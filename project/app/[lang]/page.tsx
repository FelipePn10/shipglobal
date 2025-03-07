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
<section className="py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
  {/* Background decoration elements */}
  <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
    <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary/30 blur-3xl"></div>
    <div className="absolute -left-32 top-1/3 w-72 h-72 rounded-full bg-primary/20 blur-3xl"></div>
    <div className="absolute right-1/4 bottom-0 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full inline-block mb-4"
      >
        Por que nos escolher
      </motion.span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
        Benefícios Exclusivos
      </h2>
      <p className="text-muted-foreground text-lg">
        Oferecemos soluções inovadoras que transformam a maneira como você gerencia seus envios internacionais.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
        >
          <motion.div
            whileHover={{
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              backgroundColor: "var(--background-card-hover)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="h-full border bg-card rounded-2xl overflow-hidden"
          >
            <div className="h-2 bg-gradient-to-r from-primary to-primary/60"></div>
            <div className="p-8">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="mb-6 text-primary bg-primary/10 p-4 rounded-2xl inline-flex"
              >
                {benefit.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">{benefit.description}</p>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="mt-6"
              >
                <motion.a
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-primary"
                >
                  Saiba mais
                  <motion.svg
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>

    {/* Featured benefit or call to action */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.7 }}
      className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between"
    >
      <div className="md:w-2/3 mb-8 md:mb-0">
        <h3 className="text-2xl font-bold mb-4">Pronto para transformar sua logística?</h3>
        <p className="text-muted-foreground">
          Junte-se a milhares de empresas que já estão economizando tempo e dinheiro com nossas soluções.
        </p>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium transition-colors hover:bg-primary/90"
        >
          Comece agora
          <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </motion.div>

    {/* Social proof indicators */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="mt-12 flex flex-wrap justify-center gap-x-12 gap-y-4 text-muted-foreground text-sm"
    >
      <div className="flex items-center">
        <svg className="h-5 w-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Mais de 10.000 clientes satisfeitos</span>
      </div>
      <div className="flex items-center">
        <svg className="h-5 w-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Presença em 50+ países</span>
      </div>
      <div className="flex items-center">
        <svg className="h-5 w-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        <span>Suporte 24/7</span>
      </div>
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
