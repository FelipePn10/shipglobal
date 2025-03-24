"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, Package, Truck, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [paymentOption, setPaymentOption] = useState("monthly");
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const plans = [
    {
      name: "Básico",
      monthlyPrice: 50,
      yearlyPrice: 500,
      discount: 17,
      features: [
        "Envios ilimitados",
        "Taxa de processamento reduzida (R$ 8 por pacote)",
        "Fotos e medidas detalhadas do produto",
        "Teste básico de funcionamento",
        "Armazenamento gratuito por 35 dias",
        "Consolidação de pacotes gratuita",
        "Suporte ao cliente padrão (até 24h)",
        "Seguro básico para mercadorias até R$ 1.000",
      ],
      recommended: false,
      badge: "",
      icon: Package,
      color: "#4361EE",
      bgGradient: "linear-gradient(135deg, #4361EE 0%, #3A0CA3 100%)",
    },
    {
      name: "Avançado",
      monthlyPrice: 100,
      yearlyPrice: 1000,
      discount: 17,
      features: [
        "Envios ilimitados",
        "Taxa de processamento gratuita",
        "Fotos e medidas detalhadas do produto",
        "Teste completo de funcionamento",
        "Desconto de 7% no custo de envio (frete)",
        "Armazenamento gratuito por 50 dias",
        "Consolidação e reembalagem parcial",
        "Suporte ao cliente prioritário (até 12h)",
        "Seguro ampliado para mercadorias até R$ 3.000",
      ],
      recommended: true,
      badge: "Mais Popular",
      icon: Truck,
      color: "#F72585",
      bgGradient: "linear-gradient(135deg, #F72585 0%, #7209B7 100%)",
    },
    {
      name: "Premium",
      monthlyPrice: 200,
      yearlyPrice: 2000,
      discount: 17,
      features: [
        "Envios ilimitados sem restrições",
        "Taxa de processamento gratuita",
        "Fotos em alta resolução e medidas precisas",
        "Teste avançado de funcionamento e qualidade",
        "Desconto de 12% no custo de envio (frete e taxas)",
        "Armazenamento gratuito por 70 dias",
        "Consolidação e reembalagem total gratuitas",
        "Suporte ao cliente dedicado (até a 6h)",
        "Seguro premium para mercadorias até R$ 10.000",
        "Assistência completa em processos alfandegários",
      ],
      recommended: false,
      badge: "Vantagem Máxima",
      icon: Star,
      color: "#4CC9F0",
      bgGradient: "linear-gradient(135deg, #4CC9F0 0%, #4361EE 100%)",
    },
  ];

  // Animação para o título principal
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  // Animação para os cards de planos
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.2,
        duration: 0.6, 
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Componente de partículas flutuantes
  const FloatingParticles = () => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              backgroundColor: ['#4361EE', '#F72585', '#4CC9F0', '#7209B7'][
                Math.floor(Math.random() * 4)
              ],
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Floating particles background */}
      <FloatingParticles />
      
      {/* Header decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden z-0">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-blue-100 opacity-50" />
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-pink-100 opacity-40" />
        <div className="absolute top-40 left-1/4 w-48 h-48 rounded-full bg-purple-100 opacity-30" />
      </div>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        {/* Planos e Preços */}
        <div className="mb-24 mt-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={titleVariants}
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-3 relative inline-block">
              Nossos Planos
              <motion.div 
                className="absolute -top-6 -right-8 text-2xl"
                animate={{ 
                  rotate: [0, 15, -15, 15, 0],
                  scale: [1, 1.2, 1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Escolha o plano ideal para suas necessidades de compras internacionais e aproveite benefícios exclusivos
            </p>
            
            <motion.div 
              className="flex justify-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="bg-white rounded-full p-1 inline-flex shadow-md">
                <Button
                  variant={paymentOption === "monthly" ? "default" : "ghost"}
                  className={`rounded-full px-6 ${paymentOption === "monthly" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-transparent text-blue-800"}`}
                  onClick={() => setPaymentOption("monthly")}
                >
                  Mensal
                </Button>
                <Button
                  variant={paymentOption === "yearly" ? "default" : "ghost"}
                  className={`rounded-full px-6 ${paymentOption === "yearly" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-transparent text-blue-800"}`}
                  onClick={() => setPaymentOption("yearly")}
                >
                  Anual (17% de desconto)
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoverCard(index)}
                onMouseLeave={() => setHoverCard(null)}
              >
                <Card className={`overflow-hidden h-full border-0 shadow-lg relative ${hoverCard === index ? 'glitter-card' : ''}`} style={{ 
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px'
                }}>
                  {/* Faixa de cor no topo do card */}
                  <div className="h-8" style={{ background: plan.bgGradient }}></div>
                  

                  
                  <CardHeader className={`${plan.recommended ? 'pb-4' : 'pb-4'}`}>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ background: plan.bgGradient }}>
                        <plan.icon className="w-5 h-5 text-white" />
                      </div>
                      <CardTitle className="text-2xl" style={{ color: plan.color }}>{plan.name}</CardTitle>
                    </div>
                    <div className="mt-4 flex items-end">
                      <span className="text-4xl font-bold" style={{ color: plan.color }}>
                        R$ {paymentOption === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      {paymentOption === "monthly" ? (
                        <span className="text-gray-600 ml-2 mb-1">/mês</span>
                      ) : (
                        <span className="text-gray-600 ml-2 mb-1">/ano</span>
                      )}
                    </div>
                    <CardDescription className="text-base mt-2 font-medium" style={{ color: plan.color }}>
                      {paymentOption === "yearly" && `Economia de ${plan.discount}%`}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                        >
                          <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0" style={{ background: plan.bgGradient }}>
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="flex justify-center pb-6 pt-4">
                    <Button 
                      className="w-full rounded-full py-6 text-white font-medium text-base shadow-lg relative overflow-hidden"
                      style={{ 
                        background: plan.bgGradient,
                      }}
                    >
                      <span className="relative z-10">Assinar Plano</span>
                      <motion.div
                        className="absolute inset-0 opacity-0"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.3 }}
                        style={{ 
                          background: "linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)",
                          backgroundSize: "200% 100%",
                        }}
                        animate={{
                          backgroundPosition: ["200% 0", "-200% 0"],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                        }}
                      />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}