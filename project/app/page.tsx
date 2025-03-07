"use client"

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Package2, Truck, Clock, Shield } from 'lucide-react'
import { ShippingCalculator } from '@/components/shipping-calculator'
import { TestimonialSlider } from '@/components/testimonial-slider'
import { CoverageMap } from '@/components/coverage-map'

export default function Home() {
  const benefits = [
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
              Suas Compras Internacionais
              <br />
              <span className="text-primary">Sem Fronteiras</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Compre em qualquer lugar do mundo e receba no Brasil com facilidade.
              Endereços em 14 países, consolidação de pacotes e atendimento personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Como Funciona
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="section-container bg-accent/30">
        <div className="section-content">
          <div className="text-center mb-16">
            <h2 className="section-title">Cobertura Global</h2>
            <p className="section-description">
              Endereços dedicados nos principais mercados mundiais para suas compras internacionais
            </p>
          </div>
          <CoverageMap />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-container bg-background">
        <div className="section-content">
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

      {/* Shipping Calculator Section */}
      <section className="section-container bg-accent/30">
        <div className="section-content">
          <div className="text-center mb-16">
            <h2 className="section-title">Calcule o Envio</h2>
            <p className="section-description">
              Simule o custo do seu envio internacional em tempo real
            </p>
          </div>
          <ShippingCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container bg-background">
        <div className="section-content">
          <div className="text-center mb-16">
            <h2 className="section-title">O Que Dizem Nossos Clientes</h2>
            <p className="section-description">
              Histórias reais de clientes que confiam em nossos serviços
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>
    </div>
  )
}