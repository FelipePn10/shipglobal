"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslation } from 'next-i18next';

interface ServiceCardProps {
  color: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  path: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ color, icon, title, description, index, path }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const router = useRouter();
  const { t } = useTranslation('common');

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleLearnMore = () => {
    router.push(path);
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            delay: index * 0.2,
            ease: "easeOut" 
          }
        }
      }}
      className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${color}`}
    >
      <div className={`flex-shrink-0 rounded-full p-4 ${color.replace('border-l', 'bg')}`}>
        {icon}
      </div>
      
      <div className="flex flex-col">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 text-base text-gray-600">{t(description)}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLearnMore}
          className={`mt-4 self-start px-4 py-2 rounded-full text-sm font-medium text-white ${color.replace('border-l', 'bg')}`}
        >
          {t('service.learnMore')}
        </motion.button>
      </div>
    </motion.div>
  );
};

const OneStopService = () => {
  const headerControls = useAnimation();
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const { t } = useTranslation('common');

  useEffect(() => {
    if (isHeaderInView) {
      headerControls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
    }
  }, [isHeaderInView, headerControls]);

  const serviceItems = [
    {
      color: "border-l-blue-500",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: t('service.buyProducts'),
      description: "service.buyProductsDesc",
      path: "/purchase"
    },
    {
      color: "border-l-green-500",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: t('service.warehouseShipping'),
      description: "service.warehouseShippingDesc",
      path: "/warehouse-shipping"
    },
    {
      color: "border-l-yellow-500",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: t('service.qualityAssurance'),
      description: "service.qualityAssuranceDesc",
      path: "/quality"
    },
    {
      color: "border-l-red-500",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: t('service.economicalShipping'),
      description: "service.economicalShippingDesc",
      path: "/economical-shipping"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: -30 }} 
          animate={headerControls}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-3">
            {t('service.ourCompleteSolution')}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t('service.completeService')} <span className="text-blue-600">{t('service.buyAndShip')}</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            {t('service.fromClickToDoor')}
          </p>
        </motion.div>

        <div className="relative grid gap-8 lg:grid-cols-3">
          {/* Lado esquerdo */}
          <div className="space-y-12 lg:space-y-24">
            <ServiceCard {...serviceItems[0]} index={0} />
            <ServiceCard {...serviceItems[2]} index={2} />
          </div>
          
          {/* Conector central */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-1 bg-gradient-to-b from-blue-500 via-green-500 to-red-500 rounded-full"
            />
          </div>
          
          {/* Lado direito */}
          <div className="space-y-12 lg:space-y-24 lg:mt-32">
            <ServiceCard {...serviceItems[1]} index={1} />
            <ServiceCard {...serviceItems[3]} index={3} />
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {t('service.startImporting')}
          </motion.button>
          <p className="mt-4 text-sm text-gray-500">
            {t('service.successfulClients')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OneStopService;