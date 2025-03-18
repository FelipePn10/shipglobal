import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CallToActionProps {
  currentLanguage: string;
  router: any;
}

export const CallToAction: React.FC<CallToActionProps> = ({ currentLanguage, router }) => {
  return (
    <section className="bg-blue-600 py-12 rounded-xl text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4">Pronto para Começar?</h2>
        <p className="text-lg text-blue-100 mb-6">
          Cadastre-se agora e comece a aproveitar os benefícios de comprar em 17 países.
        </p>
        <Button
          className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-3 px-6 rounded-lg"
          onClick={() => router.push(`/${currentLanguage}/auth`)}
        >
          Criar Conta
        </Button>
      </motion.div>
    </section>
  );
};