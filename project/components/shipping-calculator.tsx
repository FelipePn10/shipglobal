"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Tipos
interface Dimensions {
  length: string;
  width: string;
  height: string;
}

interface Country {
  value: string;
  label: string;
  flag: string;
}

interface ShippingMethod {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface DeliveryTime {
  min: number;
  max: number;
}

interface CalculationResult {
  price: string;
  currency: string;
  deliveryTime: DeliveryTime;
  weightUsed: string;
  isVolumetric: boolean;
}

export function ShippingCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [dimensions, setDimensions] = useState<Dimensions>({ length: '', width: '', height: '' });
  const [fromCountry, setFromCountry] = useState<string>('');
  const [toCountry, setToCountry] = useState<string>('');
  const [shippingMethod, setShippingMethod] = useState<string>('');
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [activeTab, setActiveTab] = useState<'weight' | 'dimensions'>('weight');
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const countries: Country[] = [
    { value: 'us', label: 'Estados Unidos', flag: '' },
    { value: 'uk', label: 'Reino Unido', flag: '' },
    { value: 'cn', label: 'China', flag: '' },
    { value: 'jp', label: 'Japão', flag: '' },
    { value: 'br', label: 'Brasil', flag: '' },
    { value: 'de', label: 'Alemanha', flag: '' },
    { value: 'fr', label: 'França', flag: '' },
    { value: 'it', label: 'Itália', flag: '' },
  ];

  const shippingMethods: ShippingMethod[] = [
    { 
      value: 'express', 
      label: 'Expresso (3-5 dias)',
      icon: (
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      value: 'priority', 
      label: 'Prioritário (5-7 dias)',
      icon: (
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
        </svg>
      )
    },
    { 
      value: 'economic', 
      label: 'Econômico (10-15 dias)',
      icon: (
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  // Validação do formulário
  useEffect(() => {
    if (activeTab === 'weight') {
      setIsFormValid(!!weight && !!fromCountry && !!toCountry && !!shippingMethod);
    } else {
      setIsFormValid(
        !!dimensions.length && 
        !!dimensions.width && 
        !!dimensions.height && 
        !!fromCountry && 
        !!toCountry && 
        !!shippingMethod
      );
    }
  }, [weight, dimensions, fromCountry, toCountry, shippingMethod, activeTab]);

  // Simulação de cálculo de frete
  const calculateShipping = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const baseRates: Record<string, number> = {
        express: 45.99,
        priority: 29.99,
        economic: 19.99
      };
      
      const countryMultipliers: Record<string, number> = {
        us: 1.2,
        uk: 1.3,
        cn: 1.4,
        jp: 1.5,
        br: 1.0,
        de: 1.3,
        fr: 1.2,
        it: 1.25
      };
      
      let volumetricWeight = 0;
      let actualWeight = parseFloat(weight) || 0;
      
      if (activeTab === 'dimensions') {
        volumetricWeight = (
          parseFloat(dimensions.length) * 
          parseFloat(dimensions.width) * 
          parseFloat(dimensions.height)
        ) / 5000;
      }
      
      const calculationWeight = activeTab === 'dimensions' 
        ? Math.max(volumetricWeight, 0.5) 
        : Math.max(actualWeight, 0.5);
      
      const basePrice = baseRates[shippingMethod] || 0;
      const originMultiplier = countryMultipliers[fromCountry] || 1;
      const destMultiplier = countryMultipliers[toCountry] || 1;
      
      const totalPrice = basePrice * calculationWeight * originMultiplier * destMultiplier;
      
      const deliveryTimes: Record<string, DeliveryTime> = {
        express: { min: 3, max: 5 },
        priority: { min: 5, max: 7 },
        economic: { min: 10, max: 15 }
      };
      
      const deliveryTime = deliveryTimes[shippingMethod];

      setCalculationResult({
        price: totalPrice.toFixed(2),
        currency: 'R$',
        deliveryTime,
        weightUsed: calculationWeight.toFixed(2),
        isVolumetric: activeTab === 'dimensions' && volumetricWeight > actualWeight
      });
      
      setIsCalculating(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Card className="shadow-lg border-0 overflow-hidden bg-white rounded-xl">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
          <CardTitle className="text-2xl flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Calculadora de Frete Internacional
          </CardTitle>
          <p className="text-blue-100 mt-2">
            Calcule o custo de envio internacional com base no peso ou dimensões do seu pacote
          </p>
        </CardHeader>
        
        <CardContent className="p-6">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'weight' | 'dimensions')} className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="weight">Por Peso</TabsTrigger>
              <TabsTrigger value="dimensions">Por Dimensões</TabsTrigger>
            </TabsList>
            <TabsContent value="weight">
              <Input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Peso em kg"
              />
            </TabsContent>
            <TabsContent value="dimensions">
              <div className="grid grid-cols-3 gap-4">
                <Input
                  type="number"
                  value={dimensions.length}
                  onChange={(e) => setDimensions(prev => ({ ...prev, length: e.target.value }))}
                  placeholder="Comprimento (cm)"
                />
                <Input
                  type="number"
                  value={dimensions.width}
                  onChange={(e) => setDimensions(prev => ({ ...prev, width: e.target.value }))}
                  placeholder="Largura (cm)"
                />
                <Input
                  type="number"
                  value={dimensions.height}
                  onChange={(e) => setDimensions(prev => ({ ...prev, height: e.target.value }))}
                  placeholder="Altura (cm)"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">País de Origem</label>
              <select
                value={fromCountry}
                onChange={(e) => setFromCountry(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Selecione o país</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">País de Destino</label>
              <select
                value={toCountry}
                onChange={(e) => setToCountry(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Selecione o país</option>
                {countries.map((country) => (
                  <option key={country.value} value={country.value}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Método de Envio</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {shippingMethods.map((method) => (
                <Button
                  key={method.value}
                  variant={shippingMethod === method.value ? "default" : "outline"}
                  className={`flex items-center justify-center py-6 ${
                    shippingMethod === method.value 
                      ? "bg-indigo-600 hover:bg-indigo-700" 
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setShippingMethod(method.value)}
                >
                  {method.icon}
                  <span>{method.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {calculationResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-gray-50 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultado do Cálculo</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Custo Total:</span> {calculationResult.currency} {calculationResult.price}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Tempo de Entrega:</span> {calculationResult.deliveryTime.min} a {calculationResult.deliveryTime.max} dias
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Peso Considerado:</span> {calculationResult.weightUsed} kg
                    {calculationResult.isVolumetric && " (volumétrico)"}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter className="p-6 bg-gray-50 flex justify-end">
          <Button
            onClick={calculateShipping}
            disabled={!isFormValid || isCalculating}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400"
          >
            {isCalculating ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Calculando...
              </span>
            ) : (
              "Calcular Frete"
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}