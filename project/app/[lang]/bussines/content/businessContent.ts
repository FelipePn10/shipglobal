// app/[lang]/business/content/businessContent.ts

import { ContentMap } from "../types/contentTypes";

export const content: ContentMap = {
  en: {
    title: "Business Import Solutions",
    subtitle: "Streamlined International Logistics",
    description:
      "Specialized services for businesses importing products from around the world. Optimize your supply chain with our dedicated business solutions.",
    cta: "Create Business Account",
    learnMore: "Learn More",
    contactSales: "Contact Sales Team",
    whyChooseUs: "Why Choose Us",
    benefits: [
      {
        icon: "Building2",
        title: "Dedicated Business Support",
        description: "Specialized team for corporate clients with priority assistance",
      },
      {
        icon: "BarChart3",
        title: "Volume Discounts",
        description: "Progressive pricing structure based on import volume",
      },
      {
        icon: "TrendingUp",
        title: "Supply Chain Optimization",
        description: "Streamline your international procurement process",
      },
      {
        icon: "Briefcase",
        title: "Customs Expertise",
        description: "Specialized knowledge in business import regulations",
      },
    ],
    howItWorks: {
      title: "How It Works for Businesses",
      steps: [
        {
          number: "01",
          title: "Register Your Business",
          description: "Create a business account with your company details and documentation",
        },
        {
          number: "02",
          title: "Receive Your Dedicated Addresses",
          description: "Get exclusive shipping addresses in 17 countries for your business imports",
        },
        {
          number: "03",
          title: "Ship to Our Warehouses",
          description: "Have your suppliers ship products to our international facilities",
        },
        {
          number: "04",
          title: "Consolidation & Processing",
          description: "We'll consolidate, inspect, and prepare your shipments for international transit",
        },
        {
          number: "05",
          title: "Customs Clearance",
          description: "Our experts handle all import documentation and customs procedures",
        },
        {
          number: "06",
          title: "Final Delivery",
          description: "Receive your products at your business location in Brazil",
        },
      ],
    },
    features: {
      title: "Business Dashboard Features",
      description: "Powerful tools designed specifically for corporate import management",
      items: [
        {
          icon: "Package",
          title: "Shipment Management",
          description: "Track and manage all your international shipments in one place",
        },
        {
          icon: "FileText",
          title: "Documentation Center",
          description: "Store and access all import documentation and customs forms",
        },
        {
          icon: "Users",
          title: "Team Access Control",
          description: "Assign different access levels to your team members",
        },
        {
          icon: "CreditCard",
          title: "Billing Management",
          description: "View invoices, payment history, and manage payment methods",
        },
      ],
    },
    pricing: {
      title: "Business Pricing",
      description: "Transparent pricing structure designed for business imports",
      tabs: {
        standard: "Standard",
        premium: "Premium",
        enterprise: "Enterprise",
      },
      plans: {
        standard: {
          price: "$199",
          period: "/month",
          description: "For small businesses with occasional imports",
          features: [
            "Up to 50 packages per month",
            "Standard consolidation",
            "Basic customs assistance",
            "Standard shipping rates",
            "Email support",
          ],
        },
        premium: {
          price: "$499",
          period: "/month",
          description: "For growing businesses with regular import needs",
          features: [
            "Up to 200 packages per month",
            "Priority consolidation",
            "Advanced customs assistance",
            "Discounted shipping rates (10%)",
            "Priority email & phone support",
            "Dedicated account manager",
          ],
        },
        enterprise: {
          price: "Custom",
          period: "",
          description: "For large businesses with high-volume import requirements",
          features: [
            "Unlimited packages",
            "VIP consolidation service",
            "Complete customs handling",
            "Maximum shipping discounts (20%+)",
            "24/7 priority support",
            "Dedicated account team",
            "Custom integration options",
            "Quarterly business reviews",
          ],
        },
      },
    },
    comparisonTable: {
      title: "Service Comparison",
      description: "See how our business services compare to standard options",
      headers: ["Feature", "Standard Service", "Business Service"],
      rows: [
        ["Dedicated Addresses", "17 countries", "17 countries with priority handling"],
        ["Package Consolidation", "Standard", "Priority with business-specific options"],
        ["Customs Clearance", "Basic assistance", "Complete handling with specialized expertise"],
        ["Shipping Speed", "Standard", "Expedited options included"],
        ["Support", "Regular hours", "24/7 dedicated business support"],
        ["Account Management", "Self-service", "Dedicated account manager"],
        ["Volume Discounts", "None", "Progressive based on volume"],
        ["Reporting", "Basic", "Advanced analytics and reporting"],
        ["API Access", "Not available", "Full API integration available"],
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "What documentation do I need to register a business account?",
          answer:
            "You'll need your business registration documents, tax ID, and proof of address. For international businesses, additional documentation may be required depending on your country of origin.",
        },
        {
          question: "How are customs duties and taxes handled?",
          answer:
            "Our business service includes customs brokerage. We can either advance payment for duties and taxes and include them in your invoice, or you can choose to pay them directly. All customs documentation is prepared by our experts.",
        },
        {
          question: "Can I integrate your system with my ERP or inventory management software?",
          answer:
            "Yes, our Enterprise plan includes API access and custom integration options. Our technical team will work with you to ensure smooth integration with your existing systems.",
        },
        {
          question: "What are the volume discount thresholds?",
          answer:
            "Volume discounts start at 50 packages per month and increase progressively. For businesses importing more than 500 packages monthly, we offer custom pricing. Contact our sales team for a detailed quote based on your specific volume.",
        },
      ],
    },
    testimonials: {
      title: "What Our Business Clients Say",
      items: [
        {
          quote:
            "ShipGlobal has transformed our import process. We've reduced costs by 22% and delivery times by almost a week.",
          author: "Carlos Mendes",
          company: "TechImports Brazil",
          role: "Supply Chain Director",
        },
        {
          quote:
            "The dedicated business dashboard gives us complete visibility into our international shipments. The customs expertise alone is worth the investment.",
          author: "Ana Ferreira",
          company: "Fashion Retail Group",
          role: "Operations Manager",
        },
      ],
    },
    contact: {
      title: "Ready to Optimize Your Business Imports?",
      description:
        "Speak with our business solutions team to get a customized quote and learn how we can help streamline your international logistics.",
      cta: "Contact Sales Team",
    },
  },
  pt: {
    title: "Soluções de Importação para Empresas",
    subtitle: "Logística Internacional Simplificada",
    description:
      "Serviços especializados para empresas que importam produtos de todo o mundo. Otimize sua cadeia de suprimentos com nossas soluções dedicadas para negócios.",
    cta: "Criar Conta Empresarial",
    learnMore: "Saiba Mais",
    contactSales: "Contatar Equipe de Vendas",
    whyChooseUs: "Por Que Nos Escolher",
    benefits: [
      {
        icon: "Building2",
        title: "Suporte Empresarial Dedicado",
        description: "Equipe especializada para clientes corporativos com assistência prioritária",
      },
      {
        icon: "BarChart3",
        title: "Descontos por Volume",
        description: "Estrutura de preços progressiva baseada no volume de importação",
      },
      {
        icon: "TrendingUp",
        title: "Otimização da Cadeia de Suprimentos",
        description: "Simplifique seu processo de aquisição internacional",
      },
      {
        icon: "Briefcase",
        title: "Expertise em Alfândega",
        description: "Conhecimento especializado em regulamentações de importação para empresas",
      },
    ],
    howItWorks: {
      title: "Como Funciona para Empresas",
      steps: [
        {
          number: "01",
          title: "Registre Sua Empresa",
          description: "Crie uma conta empresarial com os detalhes e documentação da sua empresa",
        },
        {
          number: "02",
          title: "Receba Seus Endereços Dedicados",
          description: "Obtenha endereços exclusivos em 17 países para suas importações empresariais",
        },
        {
          number: "03",
          title: "Envie para Nossos Armazéns",
          description: "Peça aos seus fornecedores que enviem produtos para nossas instalações internacionais",
        },
        {
          number: "04",
          title: "Consolidação e Processamento",
          description: "Consolidamos, inspecionamos e preparamos seus envios para trânsito internacional",
        },
        {
          number: "05",
          title: "Desembaraço Aduaneiro",
          description: "Nossos especialistas cuidam de toda documentação de importação e procedimentos alfandegários",
        },
        {
          number: "06",
          title: "Entrega Final",
          description: "Receba seus produtos no local da sua empresa no Brasil",
        },
      ],
    },
    features: {
      title: "Recursos do Painel Empresarial",
      description: "Ferramentas poderosas projetadas especificamente para gestão de importação corporativa",
      items: [
        {
          icon: "Package",
          title: "Gestão de Remessas",
          description: "Acompanhe e gerencie todas as suas remessas internacionais em um só lugar",
        },
        {
          icon: "FileText",
          title: "Centro de Documentação",
          description: "Armazene e acesse toda documentação de importação e formulários aduaneiros",
        },
        {
          icon: "Users",
          title: "Controle de Acesso da Equipe",
          description: "Atribua diferentes níveis de acesso aos membros da sua equipe",
        },
        {
          icon: "CreditCard",
          title: "Gestão de Faturamento",
          description: "Visualize faturas, histórico de pagamentos e gerencie métodos de pagamento",
        },
      ],
    },
    pricing: {
      title: "Preços para Empresas",
      description: "Estrutura de preços transparente projetada para importações empresariais",
      tabs: {
        standard: "Padrão",
        premium: "Premium",
        enterprise: "Empresarial",
      },
      plans: {
        standard: {
          price: "R$999",
          period: "/mês",
          description: "Para pequenas empresas com importações ocasionais",
          features: [
            "Até 50 pacotes por mês",
            "Consolidação padrão",
            "Assistência aduaneira básica",
            "Tarifas de envio padrão",
            "Suporte por email",
          ],
        },
        premium: {
          price: "R$2.499",
          period: "/mês",
          description: "Para empresas em crescimento com necessidades regulares de importação",
          features: [
            "Até 200 pacotes por mês",
            "Consolidação prioritária",
            "Assistência aduaneira avançada",
            "Tarifas de envio com desconto (10%)",
            "Suporte prioritário por email e telefone",
            "Gerente de conta dedicado",
          ],
        },
        enterprise: {
          price: "Personalizado",
          period: "",
          description: "Para grandes empresas com requisitos de importação de alto volume",
          features: [
            "Pacotes ilimitados",
            "Serviço de consolidação VIP",
            "Tratamento aduaneiro completo",
            "Descontos máximos de envio (20%+)",
            "Suporte prioritário 24/7",
            "Equipe de conta dedicada",
            "Opções de integração personalizadas",
            "Revisões trimestrais de negócios",
          ],
        },
      },
    },
    comparisonTable: {
      title: "Comparação de Serviços",
      description: "Veja como nossos serviços empresariais se comparam às opções padrão",
      headers: ["Recurso", "Serviço Padrão", "Serviço Empresarial"],
      rows: [
        ["Endereços Dedicados", "17 países", "17 países com tratamento prioritário"],
        ["Consolidação de Pacotes", "Padrão", "Prioritária com opções específicas para empresas"],
        ["Desembaraço Aduaneiro", "Assistência básica", "Tratamento completo com expertise especializada"],
        ["Velocidade de Envio", "Padrão", "Opções expressas incluídas"],
        ["Suporte", "Horário comercial", "Suporte empresarial dedicado 24/7"],
        ["Gestão de Conta", "Autoatendimento", "Gerente de conta dedicado"],
        ["Descontos por Volume", "Nenhum", "Progressivos baseados no volume"],
        ["Relatórios", "Básicos", "Análises e relatórios avançados"],
        ["Acesso à API", "Não disponível", "Integração completa com API disponível"],
      ],
    },
    faq: {
      title: "Perguntas Frequentes",
      questions: [
        {
          question: "Qual documentação preciso para registrar uma conta empresarial?",
          answer:
            "Você precisará dos documentos de registro da empresa, CNPJ e comprovante de endereço. Para empresas internacionais, documentação adicional pode ser necessária dependendo do seu país de origem.",
        },
        {
          question: "Como são tratados os impostos e taxas alfandegárias?",
          answer:
            "Nosso serviço empresarial inclui despachante aduaneiro. Podemos adiantar o pagamento de impostos e taxas e incluí-los em sua fatura, ou você pode optar por pagá-los diretamente. Toda documentação aduaneira é preparada por nossos especialistas.",
        },
        {
          question: "Posso integrar seu sistema com meu ERP ou software de gestão de estoque?",
          answer:
            "Sim, nosso plano Empresarial inclui acesso à API e opções de integração personalizadas. Nossa equipe técnica trabalhará com você para garantir uma integração suave com seus sistemas existentes.",
        },
        {
          question: "Quais são os limites para descontos por volume?",
          answer:
            "Os descontos por volume começam em 50 pacotes por mês e aumentam progressivamente. Para empresas que importam mais de 500 pacotes mensais, oferecemos preços personalizados. Entre em contato com nossa equipe de vendas para uma cotação detalhada baseada em seu volume específico.",
        },
      ],
    },
    testimonials: {
      title: "O Que Dizem Nossos Clientes Empresariais",
      items: [
        {
          quote:
            "A ShipGlobal transformou nosso processo de importação. Reduzimos custos em 22% e os tempos de entrega em quase uma semana.",
          author: "Carlos Mendes",
          company: "TechImports Brasil",
          role: "Diretor de Cadeia de Suprimentos",
        },
        {
          quote:
            "O painel empresarial dedicado nos dá visibilidade completa sobre nossas remessas internacionais. Só a expertise aduaneira já vale o investimento.",
          author: "Ana Ferreira",
          company: "Fashion Retail Group",
          role: "Gerente de Operações",
        },
      ],
    },
    contact: {
      title: "Pronto para Otimizar suas Importações Empresariais?",
      description:
        "Fale com nossa equipe de soluções empresariais para obter uma cotação personalizada e saiba como podemos ajudar a simplificar sua logística internacional.",
      cta: "Contatar Equipe de Vendas",
    },
  },
  es: {
    title: "Soluciones de Importación para Empresas",
    subtitle: "Logística Internacional Simplificada",
    description:
      "Servicios especializados para empresas que importan productos de todo el mundo. Optimice su cadena de suministro con nuestras soluciones dedicadas para negocios.",
    cta: "Crear Cuenta Empresarial",
    learnMore: "Saber Más",
    contactSales: "Contactar Equipo de Ventas",
    whyChooseUs: "Por Qué Elegirnos",
    benefits: [
      {
        icon: "Building2",
        title: "Soporte Empresarial Dedicado",
        description: "Equipo especializado para clientes corporativos con asistencia prioritaria",
      },
      {
        icon: "BarChart3",
        title: "Descuentos por Volumen",
        description: "Estructura de precios progresiva basada en el volumen de importación",
      },
      {
        icon: "TrendingUp",
        title: "Optimización de la Cadena de Suministro",
        description: "Simplifique su proceso de adquisición internacional",
      },
      {
        icon: "Briefcase",
        title: "Experiencia en Aduanas",
        description: "Conocimiento especializado en regulaciones de importación para empresas",
      },
    ],
    howItWorks: {
      title: "Cómo Funciona para Empresas",
      steps: [
        {
          number: "01",
          title: "Registre Su Empresa",
          description: "Cree una cuenta empresarial con los detalles y documentación de su empresa",
        },
        {
          number: "02",
          title: "Reciba Sus Direcciones Dedicadas",
          description: "Obtenga direcciones exclusivas en 17 países para sus importaciones empresariales",
        },
        {
          number: "03",
          title: "Envíe a Nuestros Almacenes",
          description: "Pida a sus proveedores que envíen productos a nuestras instalaciones internacionales",
        },
        {
          number: "04",
          title: "Consolidación y Procesamiento",
          description: "Consolidamos, inspeccionamos y preparamos sus envíos para tránsito internacional",
        },
        {
          number: "05",
          title: "Despacho Aduanero",
          description:
            "Nuestros especialistas se encargan de toda la documentación de importación y procedimientos aduaneros",
        },
        {
          number: "06",
          title: "Entrega Final",
          description: "Reciba sus productos en la ubicación de su empresa en Brasil",
        },
      ],
    },
    features: {
      title: "Características del Panel Empresarial",
      description: "Herramientas potentes diseñadas específicamente para la gestión de importación corporativa",
      items: [
        {
          icon: "Package",
          title: "Gestión de Envíos",
          description: "Rastree y gestione todos sus envíos internacionales en un solo lugar",
        },
        {
          icon: "FileText",
          title: "Centro de Documentación",
          description: "Almacene y acceda a toda la documentación de importación y formularios aduaneros",
        },
        {
          icon: "Users",
          title: "Control de Acceso del Equipo",
          description: "Asigne diferentes niveles de acceso a los miembros de su equipo",
        },
        {
          icon: "CreditCard",
          title: "Gestión de Facturación",
          description: "Vea facturas, historial de pagos y gestione métodos de pago",
        },
      ],
    },
    pricing: {
      title: "Precios para Empresas",
      description: "Estructura de precios transparente diseñada para importaciones empresariales",
      tabs: {
        standard: "Estándar",
        premium: "Premium",
        enterprise: "Empresarial",
      },
      plans: {
        standard: {
          price: "$199",
          period: "/mes",
          description: "Para pequeñas empresas con importaciones ocasionales",
          features: [
            "Hasta 50 paquetes por mes",
            "Consolidación estándar",
            "Asistencia aduanera básica",
            "Tarifas de envío estándar",
            "Soporte por email",
          ],
        },
        premium: {
          price: "$499",
          period: "/mes",
          description: "Para empresas en crecimiento con necesidades regulares de importación",
          features: [
            "Hasta 200 paquetes por mes",
            "Consolidación prioritaria",
            "Asistencia aduanera avanzada",
            "Tarifas de envío con descuento (10%)",
            "Soporte prioritario por email y teléfono",
            "Gerente de cuenta dedicado",
          ],
        },
        enterprise: {
          price: "Personalizado",
          period: "",
          description: "Para grandes empresas con requisitos de importación de alto volumen",
          features: [
            "Paquetes ilimitados",
            "Servicio de consolidación VIP",
            "Tratamiento aduanero completo",
            "Descuentos máximos de envío (20%+)",
            "Soporte prioritario 24/7",
            "Equipo de cuenta dedicado",
            "Opciones de integración personalizadas",
            "Revisiones trimestrales de negocios",
          ],
        },
      },
    },
    comparisonTable: {
      title: "Comparación de Servicios",
      description: "Vea cómo nuestros servicios empresariales se comparan con las opciones estándar",
      headers: ["Característica", "Servicio Estándar", "Servicio Empresarial"],
      rows: [
        ["Direcciones Dedicadas", "17 países", "17 países con manejo prioritario"],
        ["Consolidación de Paquetes", "Estándar", "Prioritaria con opciones específicas para empresas"],
        ["Despacho Aduanero", "Asistencia básica", "Manejo completo con experiencia especializada"],
        ["Velocidad de Envío", "Estándar", "Opciones exprés incluidas"],
        ["Soporte", "Horario regular", "Soporte empresarial dedicado 24/7"],
        ["Gestión de Cuenta", "Autoservicio", "Gerente de cuenta dedicado"],
        ["Descuentos por Volumen", "Ninguno", "Progresivos basados en el volumen"],
        ["Informes", "Básicos", "Análisis e informes avanzados"],
        ["Acceso a API", "No disponible", "Integración completa con API disponible"],
      ],
    },
    faq: {
      title: "Preguntas Frecuentes",
      questions: [
        {
          question: "¿Qué documentación necesito para registrar una cuenta empresarial?",
          answer:
            "Necesitarás los documentos de registro de tu empresa, identificación fiscal y comprobante de dirección. Para empresas internacionales, puede ser necesaria documentación adicional dependiendo de tu país de origen.",
        },
        {
          question: "¿Cómo se manejan los impuestos y aranceles aduaneros?",
          answer:
            "Nuestro servicio empresarial incluye corretaje de aduanas. Podemos adelantar el pago de impuestos y aranceles e incluirlos en tu factura, o puedes optar por pagarlos directamente. Toda la documentación aduanera es preparada por nuestros expertos.",
        },
        {
          question: "¿Puedo integrar su sistema con mi ERP o software de gestión de inventario?",
          answer:
            "Sí, nuestro plan Empresarial incluye acceso a API y opciones de integración personalizadas. Nuestro equipo técnico trabajará contigo para garantizar una integración fluida con tus sistemas existentes.",
        },
        {
          question: "¿Cuáles son los umbrales de descuento por volumen?",
          answer:
            "Los descuentos por volumen comienzan en 50 paquetes por mes y aumentan progresivamente. Para empresas que importan más de 500 paquetes mensuales, ofrecemos precios personalizados. Contacta a nuestro equipo de ventas para una cotización detallada basada en tu volumen específico.",
        },
      ],
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Clientes Empresariales",
      items: [
        {
          quote:
            "ShipGlobal ha transformado nuestro proceso de importación. Hemos reducido costos en un 22% y los tiempos de entrega en casi una semana.",
          author: "Carlos Mendes",
          company: "TechImports Brasil",
          role: "Director de Cadena de Suministro",
        },
        {
          quote:
            "El panel empresarial dedicado nos da visibilidad completa sobre nuestros envíos internacionales. Solo la experiencia en aduanas ya vale la inversión.",
          author: "Ana Ferreira",
          company: "Fashion Retail Group",
          role: "Gerente de Operaciones",
        },
      ],
    },
    contact: {
      title: "¿Listo para Optimizar tus Importaciones Empresariales?",
      description:
        "Habla con nuestro equipo de soluciones empresariales para obtener una cotización personalizada y descubre cómo podemos ayudarte a simplificar tu logística internacional.",
      cta: "Contactar Equipo de Ventas",
    },
  },
};