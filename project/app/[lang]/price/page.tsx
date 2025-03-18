"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaShippingFast, FaPercentage, FaHeadset, FaGift, FaRegCreditCard } from "react-icons/fa";
import { HiCurrencyDollar, HiStar } from "react-icons/hi";

type BenefitType = {
  icon: React.ReactNode;
  text: string;
  description: string;
};

type PlanType = {
  id: string;
  name: string;
  price: number;
  period: string;
  color: string;
  popular?: boolean;
  benefits: BenefitType[];
  description: string;
};

const PricingSection: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isYearly, setIsYearly] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const shine = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    transition: { duration: 0.6 },
  };

  // Lista de planos
  const plans: PlanType[] = [
    {
      id: "free",
      name: "Básico",
      price: 0,
      period: "gratuito",
      color: "from-blue-400 to-blue-600",
      benefits: [
        {
          icon: <FaGlobe className="text-xl" />,
          text: "Acesso a todos os 17 países",
          description: "Compre em qualquer uma das nossas lojas internacionais",
        },
        {
          icon: <FaShippingFast className="text-xl" />,
          text: "Entrega mundial",
          description: "Envie para qualquer lugar do mundo",
        },
        {
          icon: <HiCurrencyDollar className="text-xl" />,
          text: "Taxas padrão",
          description: "Tarifas de envio e redirecionamento padrão",
        },
      ],
      description: "Ideal para quem está começando a fazer compras internacionais",
    },
    {
      id: "plus",
      name: "Plus",
      price: isYearly ? 29.9 * 10 : 29.9,
      period: isYearly ? "/ano" : "/mês",
      color: "from-purple-400 to-purple-600",
      popular: true,
      benefits: [
        {
          icon: <FaGlobe className="text-xl" />,
          text: "Acesso a todos os 17 países",
          description: "Compre em qualquer uma das nossas lojas internacionais",
        },
        {
          icon: <FaShippingFast className="text-xl" />,
          text: "Entrega mundial",
          description: "Envie para qualquer lugar do mundo",
        },
        {
          icon: <FaPercentage className="text-xl" />,
          text: "10% de desconto em fretes",
          description: "Economia em todas as suas remessas",
        },
        {
          icon: <FaHeadset className="text-xl" />,
          text: "Suporte prioritário",
          description: "Atendimento preferencial para suas dúvidas",
        },
        {
          icon: <FaGift className="text-xl" />,
          text: "Brindes exclusivos",
          description: "Receba brindes em datas especiais",
        },
      ],
      description: "Perfeito para quem faz compras internacionais com regularidade",
    },
    {
      id: "premium",
      name: "Premium",
      price: isYearly ? 59.9 * 10 : 59.9,
      period: isYearly ? "/ano" : "/mês",
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        {
          icon: <FaGlobe className="text-xl" />,
          text: "Acesso a todos os 17 países",
          description: "Compre em qualquer uma das nossas lojas internacionais",
        },
        {
          icon: <FaShippingFast className="text-xl" />,
          text: "Entrega mundial",
          description: "Envie para qualquer lugar do mundo",
        },
        {
          icon: <FaPercentage className="text-xl" />,
          text: "20% de desconto em fretes",
          description: "Economia máxima em todas as suas remessas",
        },
        {
          icon: <FaHeadset className="text-xl" />,
          text: "Suporte VIP 24/7",
          description: "Atendimento exclusivo a qualquer hora",
        },
        {
          icon: <FaRegCreditCard className="text-xl" />,
          text: "Cashback em compras",
          description: "3% de cashback em todas as suas compras",
        },
        {
          icon: <HiStar className="text-xl" />,
          text: "Benefícios exclusivos",
          description: "Descontos em parceiros e promoções exclusivas",
        },
      ],
      description: "A escolha definitiva para entusiastas de compras internacionais",
    },
  ];

  useEffect(() => {
    const popularPlan = plans.find((plan) => plan.popular);
    if (popularPlan) {
      setSelectedPlan(popularPlan.id);
    }
  }, [plans]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">Planos e Preços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades de compras internacionais. Assinantes desbloqueiam
            benefícios exclusivos.
          </p>

          {/* Seletor de período */}
          <div className="mt-8 flex justify-center items-center">
            <span className={`text-lg ${!isYearly ? "font-bold text-blue-700" : "text-gray-600"}`}>Mensal</span>
            <label className="relative inline-flex items-center cursor-pointer mx-4">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
              />
              <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span className={`text-lg ${isYearly ? "font-bold text-blue-700" : "text-gray-600"}`}>Anual</span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="ml-2 inline-flex items-center bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
              >
                Economize 20%
              </motion.span>
            )}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6 } },
              }}
              className={`relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ${
                selectedPlan === plan.id ? "transform scale-105 z-10" : "hover:scale-105"
              } ${plan.popular ? "border-4 border-pink-400" : "border border-gray-200"}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {plan.popular && (
                <motion.div
                  className="absolute top-0 right-0 bg-pink-500 text-white px-4 py-1 rounded-bl-lg font-semibold text-sm"
                  variants={shine}
                >
                  Mais Popular
                </motion.div>
              )}

              <div className={`p-1 bg-gradient-to-r ${plan.color}`}>
                <div className="bg-white p-6 rounded-t-xl">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>

                  <div className="flex items-end mb-8">
                    <span className="text-4xl font-bold">
                      {plan.price === 0 ? "Grátis" : `R$ ${plan.price.toFixed(2)}`}
                    </span>
                    {plan.price > 0 && <span className="text-gray-500 ml-1">{plan.period}</span>}
                  </div>

                  <button
                    className={`w-full py-3 rounded-lg transition-all duration-300 font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg`}
                  >
                    {plan.price === 0 ? "Começar Agora" : "Assinar Plano"}
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 p-6">
                <h4 className="font-semibold text-lg mb-4 text-gray-700">Benefícios Incluídos:</h4>
                <ul className="space-y-4">
                  {plan.benefits.map((benefit, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-start"
                    >
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${plan.color} text-white`}
                      >
                        {benefit.icon}
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold">{benefit.text}</p>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Restante do código... */}
      </div>
    </section>
  );
};

export default PricingSection;