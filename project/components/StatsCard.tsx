"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslation } from 'react-i18next'; // Corrigido de 'next-i18next' para 'react-i18next'

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
        <p className="mt-3 text-base text-gray-600">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLearnMore}
          className={`mt-4 self-start px-4 py-2 rounded-full text-sm font-medium text-white ${color.replace('border-l', 'bg')}`}
        >
          {t('service.learnMore', 'Learn More')} {/* Adicionando fallback text */}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;