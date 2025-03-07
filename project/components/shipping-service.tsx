import React, { useState } from "react";
import { motion } from "framer-motion";

const ShippingServices: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Lista de serviços de envio com descrições
  const services = [
    { 
      name: "FedEx", 
      logo: "project/public/image/R.png",
      description: "Entrega expressa internacional com rastreamento em tempo real",
      color: "#4d148c" // Roxo da FedEx
    },
    { 
      name: "DHL", 
      logo: "/logos/dhl.png",
      description: "Logística global com prazos de entrega garantidos",
      color: "#ffcc00" // Amarelo da DHL
    },
    { 
      name: "Express", 
      logo: "/logos/express.png",
      description: "Serviço econômico com ampla cobertura internacional",
      color: "#007bff" // Azul genérico
    },
    { 
      name: "DPD", 
      logo: "/logos/dpd.png",
      description: "Especialistas em logística com grande cobertura europeia",
      color: "#dc0032" // Vermelho da DPD
    },
    { 
      name: "ARS", 
      logo: "/logos/ars.png",
      description: "Soluções de envio flexíveis para diferentes necessidades",
      color: "#ff6b00" // Laranja genérico
    },
    { 
      name: "Aramex", 
      logo: "/logos/aramex.png",
      description: "Serviço premium com foco em mercados emergentes",
      color: "#ee1c25" // Vermelho da Aramex
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-3">
            Parceiros Globais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nossas Soluções de <span className="text-indigo-600">Envio</span>
          </h2>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Parcerias estratégicas com as melhores transportadoras para garantir que seus 
            produtos cheguem em segurança, no prazo e com o melhor custo-benefício.
          </p>
        </motion.div>

        <div className="relative">
          {/* Onda decorativa superior */}
          <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                fill="#4f46e5"
              ></path>
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                fill="#4f46e5"
              ></path>
              <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                fill="#4f46e5"
              ></path>
            </svg>
          </div>

          <div className="pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative overflow-hidden rounded-2xl bg-white shadow-lg group"
                >
                  <div 
                    className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                    style={{ 
                      backgroundColor: service.color,
                      backgroundImage: `radial-gradient(circle at 30% 107%, ${service.color} 0%, ${service.color}88 5%, ${service.color}55 45%, ${service.color}00 60%, transparent 90%)`
                    }}
                  />
                  
                  <div className="px-6 py-8 flex flex-col items-center relative z-10">
                    <div className="relative mb-4">
                      <div 
                        className="absolute inset-0 rounded-full blur-md opacity-20"
                        style={{ backgroundColor: service.color }}
                      />
                      <div 
                        className={`h-20 w-20 rounded-full flex items-center justify-center border-2`}
                        style={{ borderColor: service.color }}
                      >
                        <img
                          src={service.logo}
                          alt={service.name}
                          className="h-12 w-auto object-contain"
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                    
                    <p className="text-gray-600 text-center">{service.description}</p>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        scale: hoveredIndex === index ? 1 : 0.8
                      }}
                      className="mt-6"
                    >
                      <a 
                        href="#" 
                        className="inline-flex items-center text-sm font-medium"
                        style={{ color: service.color }}
                      >
                        Ver detalhes
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-4 w-4 ml-1" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Onda decorativa inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden transform rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                fill="#4f46e5"
              ></path>
            </svg>
          </div>
        </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500"></span>
          <p className="text-sm text-gray-600">
            Rastreamento em tempo real disponível para todas as transportadoras
          </p>
          </div>
          </motion.div>
        </div>
    </section>
  );
};

export default ShippingServices;