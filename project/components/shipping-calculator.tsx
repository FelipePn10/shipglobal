"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Dimensions = {
  length: string;
  width: string;
  height: string;
};

type CalculationResult = {
  price: string;
  currency: string;
  deliveryTime: { min: number; max: number };
  weightUsed: string;
  isVolumetric: boolean;
};

// Lista de 17 países solicitados
const countries = [
  { value: 'US', label: 'United States (EUA)' },
  { value: 'GB', label: 'United Kingdom (Reino Unido)' },
  { value: 'CN', label: 'China' },
  { value: 'JP', label: 'Japan (Japão)' },
  { value: 'DE', label: 'Germany (Alemanha)' },
  { value: 'AU', label: 'Australia (Austrália)' },
  { value: 'CA', label: 'Canada (Canadá)' },
  { value: 'ES', label: 'Spain (Espanha)' },
  { value: 'FR', label: 'France (França)' },
  { value: 'IT', label: 'Italy (Itália)' },
  { value: 'PT', label: 'Portugal' },
  { value: 'PY', label: 'Paraguay (Paraguai)' },
  { value: 'TR', label: 'Turkey (Turquia)' },
  { value: 'BR', label: 'Brazil (Brasil)' },
  { value: 'TH', label: 'Thailand (Tailândia)' },
  { value: 'BE', label: 'Belgium (Bélgica)' },
];

const shippingMethods = [
  { value: 'standard', label: 'Standard Shipping', icon: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l1 2h13l1-2h1M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M9 21h6" /></svg> },
  { value: 'express', label: 'Express Shipping', icon: <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h1l1 2h13l1-2h1M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10M9 21h6" /></svg> },
];

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === 'weight') {
      setIsFormValid(!!weight && !!fromCountry && !!toCountry && !!shippingMethod);
    } else {
      setIsFormValid(
        !!dimensions.length && !!dimensions.width && !!dimensions.height && !!fromCountry && !!toCountry && !!shippingMethod
      );
    }
  }, [weight, dimensions, fromCountry, toCountry, shippingMethod, activeTab]);

  const handleCalculateShipping = async () => {
    setIsCalculating(true);
    setError(null);
    setCalculationResult(null); // Limpa o resultado anterior

    try {
      const fromAddress = {
        name: 'Remetente',
        street1: '123 Main St',
        city: 'San Francisco',
        state: 'CA',
        zip: '94107',
        country: fromCountry,
      };

      const toAddress = {
        name: 'Destinatário',
        street1: '456 Elm St',
        city: 'São Paulo',
        state: 'SP',
        zip: '01310-000',
        country: toCountry,
      };

      const parcel = {
        length: dimensions.length || '10',
        width: dimensions.width || '10',
        height: dimensions.height || '10',
        distance_unit: 'cm',
        weight: weight || '1',
        mass_unit: 'kg',
      };

      const response = await fetch('/api/shipping/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fromAddress,
          toAddress,
          parcel,
          shippingMethod,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCalculationResult(data);
      } else {
        setError(data.error || 'Erro ao calcular o frete');
      }
    } catch (error) {
      console.error('Erro ao calcular o frete:', error);
      setError('Erro ao conectar com o servidor');
    } finally {
      setIsCalculating(false);
    }
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {shippingMethods.map((method) => (
                <Button
                  key={method.value}
                  variant={shippingMethod === method.value ? "default" : "outline"}
                  className={`flex items-center justify-center py-6 ${shippingMethod === method.value ? "bg-indigo-600 hover:bg-indigo-700" : "hover:bg-gray-50"}`}
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
                className="mt-6 p-6 bg-indigo-50 rounded-lg border border-indigo-200"
              >
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">Resultado do Cálculo</h3>
                <div className="grid grid-cols-1 gap-3 text-gray-800">
                  <p className="flex justify-between">
                    <span className="font-medium">Custo:</span>
                    <span>{calculationResult.currency} {calculationResult.price}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Prazo de Entrega:</span>
                    <span>{calculationResult.deliveryTime.min} - {calculationResult.deliveryTime.max} dias</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Peso Considerado:</span>
                    <span>{calculationResult.weightUsed} kg {calculationResult.isVolumetric ? '(volumétrico)' : ''}</span>
                  </p>
                </div>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg"
              >
                <p>{error}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter className="p-6 bg-gray-50 flex justify-end">
          <Button
            onClick={handleCalculateShipping}
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