import React from 'react';
import { motion } from 'framer-motion';
import { Package, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BrandingSectionProps {
  currentLanguage: string;
}

export const BrandingSection: React.FC<BrandingSectionProps> = ({ currentLanguage }) => {
  return (
    <motion.div
      className="hidden lg:flex flex-col space-y-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex items-center space-x-2">
        <Package className="h-8 w-8 text-blue-600" />
        <span className="font-bold text-2xl">ShipGlobal</span>
      </div>

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Seu endereço global em 17 países</h1>
        <p className="text-gray-600">
          Compre em lojas internacionais e receba produtos onde você estiver. Serviço completo de redirecionamento de compras.
        </p>

        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Endereços em 17 países</h3>
              <p className="text-sm text-gray-500">Acesso a lojas online exclusivas em todo o mundo</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
              <Package className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Consolidação de pacotes</h3>
              <p className="text-sm text-gray-500">Economize em frete combinando múltiplas compras</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">Entrega internacional</h3>
              <p className="text-sm text-gray-500">Envio rápido e seguro para seu endereço</p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="relative h-64 w-full rounded-xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 opacity-90 rounded-xl"></div>
        <div className="absolute inset-0 flex flex-col justify-center p-8">
          <h3 className="text-white text-xl font-medium mb-2">Cadastre-se hoje</h3>
          <p className="text-blue-100">
            Receba um endereço exclusivo em cada um dos 17 países disponíveis.
          </p>
          <Link
            href={`/${currentLanguage}/explanation`}
            className="mt-4 inline-block text-white underline hover:text-blue-200"
          >
            Saiba mais
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};