"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, MapPin, Mail, Phone, Clock, Package, Truck, Star, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [paymentOption, setPaymentOption] = useState("monthly");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("shipping");
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

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

        {/* Perguntas frequentes */}
        <motion.div 
          className="mb-24 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Perguntas Frequentes
          </motion.h2>
          
          <Tabs 
            defaultValue="shipping" 
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-3 rounded-full p-1 bg-white shadow-md">
                <TabsTrigger 
                  value="shipping" 
                  className={`text-blue-800 rounded-full transition-all duration-300 ${activeTab === "shipping" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : ""}`}
                >
                  Envios
                </TabsTrigger>
                <TabsTrigger 
                  value="payments" 
                  className={`text-blue-800 rounded-full transition-all duration-300 ${activeTab === "payments" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : ""}`}
                >
                  Pagamentos
                </TabsTrigger>
                <TabsTrigger 
                  value="customs" 
                  className={`text-blue-800 rounded-full transition-all duration-300 ${activeTab === "customs" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg" : ""}`}
                >
                  Alfândega
                </TabsTrigger>
              </TabsList>
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="shipping" className="space-y-6">
                  {[
                    {
                      title: "Qual é o prazo de entrega médio?",
                      content: "O prazo de entrega varia de acordo com o país de origem, destino e método de envio escolhido. Em média, os envios expressos levam de 5 a 10 dias úteis, enquanto os envios econômicos podem levar de 15 a 30 dias."
                    },
                    {
                      title: "Como acompanho meu pedido?",
                      content: "Todos os envios possuem código de rastreamento que pode ser acompanhado através da sua conta em nosso site ou aplicativo. Você também receberá atualizações automáticas por e-mail em cada etapa do processo."
                    },
                    {
                      title: "Quais são os métodos de envio disponíveis?",
                      content: "Oferecemos diversas opções de envio, incluindo serviços expressos (DHL, FedEx, UPS) e econômicos. As opções disponíveis são apresentadas no momento da finalização do envio, com os respectivos prazos e custos."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white border-0 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg mb-3">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                    </motion.div>
                  ))}
                </TabsContent>
                
                <TabsContent value="payments" className="space-y-6">
                  {[
                    {
                      title: "Quais formas de pagamento são aceitas?",
                      content: "Aceitamos cartões de crédito e débito internacionais, PayPal, transferência bancária, PIX (para clientes brasileiros) e outras formas de pagamento locais dependendo do país."
                    },
                    {
                      title: "Como funciona a cobrança dos planos?",
                      content: "Os planos são cobrados de forma recorrente (mensal ou anual). Você pode cancelar ou alterar seu plano a qualquer momento através da sua conta, sem taxas adicionais. Os benefícios ficam disponíveis imediatamente após a confirmação do pagamento."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white border-0 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg mb-3">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                    </motion.div>
                  ))}
                </TabsContent>
                
                <TabsContent value="customs" className="space-y-6">
                  {[
                    {
                      title: "Como são calculados os impostos de importação?",
                      content: "Os impostos e taxas alfandegárias variam de acordo com o país de destino, valor e natureza dos produtos. Nossa plataforma fornece uma estimativa desses custos antes da finalização do envio, mas o valor final é determinado pelas autoridades aduaneiras do país de destino."
                    },
                    {
                      title: "Vocês oferecem suporte em caso de retenção na alfândega?",
                      content: "Sim, oferecemos suporte para todos os casos de retenção alfandegária. Os clientes dos planos Avançado e Premium recebem assistência prioritária e dedicada, respectivamente, para agilizar o processo de liberação."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="bg-white border-0 shadow-md rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg mb-3">{item.title}</h3>
                      <p className="text-gray-700">{item.content}</p>
                    </motion.div>
                  ))}
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </motion.div>

        {/* Chamada para ação */}
        <motion.div 
          className="rounded-3xl overflow-hidden relative mt-16 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background animado */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-20 bg-white"
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 60 - 30],
                  y: [0, Math.random() * 60 - 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: Math.random() * 10 + 10,
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10 p-12 text-center mt-8 mb-8 pl-8 pr-8">
            <motion.h2 
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Pronto para simplificar suas compras internacionais?
            </motion.h2>
            
            <motion.p 
              className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Junte-se a milhares de clientes satisfeitos que utilizam nossos serviços para receber produtos de todo o mundo com praticidade e segurança.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-xl">
                Criar Conta Grátis
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-blue-600/20 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:border-opacity-80">
                Falar com Consultor
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Formulário de Contato */}
        <div className="mb-24">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
              Entre em Contato
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tem alguma dúvida sobre nossos serviços? Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-blue-800 font-medium">
                          Nome Completo
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="rounded-xl border-blue-200 focus:border-blue-400 h-12"
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2 -mt-2">
                        <label htmlFor="email" className="text-blue-800 font-medium">
                          E-mail
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="rounded-xl border-blue-200 focus:border-blue-400 h-12"
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <label htmlFor="phone" className="text-blue-800 font-medium">
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-xl border-blue-200 focus:border-blue-400 h-12"
                        placeholder="+55 (00) 00000-0000"
                      />
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <label htmlFor="subject" className="text-blue-800 font-medium">
                        Assunto
                      </label>
                      <Select 
                        value={formData.subject} 
                        onValueChange={(value) => setFormData({...formData, subject: value})}
                      >
                        <SelectTrigger className="rounded-xl border-blue-200 focus:border-blue-400 h-12">
                          <SelectValue placeholder="Selecione um assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Informações Gerais</SelectItem>
                          <SelectItem value="pricing">Planos e Preços</SelectItem>
                          <SelectItem value="shipping">Envios e Entregas</SelectItem>
                          <SelectItem value="support">Suporte Técnico</SelectItem>
                          <SelectItem value="partnership">Parcerias</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2 mt-2">
                      <label htmlFor="message" className="text-blue-800 font-medium">
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="rounded-xl border-blue-200 focus:border-blue-400 min-h-[120px]"
                        placeholder="Descreva sua dúvida ou solicitação em detalhes"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-6 hover:shadow-lg transition-all duration-300 mt-4"
                    >
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl h-full flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Informações de Contato</CardTitle>
                  <CardDescription className="text-blue-100">
                    Você também pode entrar em contato diretamente pelos canais abaixo
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Escritório Central</h4>
                      <p className="text-blue-100">Av. Paulista, 1000 - Bela Vista</p>
                      <p className="text-blue-100">São Paulo - SP, 01310-100</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">E-mail</h4>
                      <p className="text-blue-100">contato@shipfaster.com.br</p>
                      <p className="text-blue-100">suporte@shipfaster.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Telefone</h4>
                      <p className="text-blue-100">+55 (11) 4000-0000</p>
                      <p className="text-blue-100">+55 (11) 98765-4321 (WhatsApp)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Horário de Atendimento</h4>
                      <p className="text-blue-100">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-blue-100">Sábado: 9h às 13h</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-center pt-6">
                  <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                      </svg>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}