"use client";

import Link from "next/link";
import { Package, Twitter, Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

export function Footer() {
  // Estado para armazenar as traduções
  const [translations, setTranslations] = useState({
    brandName: "ShipGlobal",
    newsletter: {
      title: "Assine nossa newsletter",
      subtitle: "Receba novidades e ofertas exclusivas diretamente no seu e-mail",
      placeholder: "Seu melhor e-mail",
      button: "Assinar"
    },
    about: {
      title: "Sobre",
      links: {
        aboutUs: "Sobre Nós",
        howItWorks: "Como Funciona",
        reviews: "Avaliações",
        jobs: "Trabalhe Conosco"
      }
    },
    services: {
      title: "Serviços",
      links: {
        personalShopper: "Personal Shopper",
        consolidation: "Consolidação",
        repackaging: "Reembalagem",
        returns: "Devoluções"
      }
    },
    support: {
      title: "Suporte",
      links: {
        faq: "Perguntas Frequentes",
        contact: "Contato",
        blog: "Blog",
        hours: "Horários"
      }
    },
    legal: {
      title: "Legal",
      links: {
        terms: "Termos de Uso",
        privacy: "Privacidade",
        cookies: "Cookies",
        lgpd: "LGPD"
      }
    },
    contact: {
      email: "contact@shipglobal.com",
      phone: "+55 (44) 99180-5405",
      address: "Maringá, PR - Brasil"
    },
    socialLinks: {
      twitter: "Twitter",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      facebook: "Facebook"
    },
    copyright: "ShipGlobal. Todos os direitos reservados."
  });
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Marcar como montado no cliente
    setMounted(true);
    
    // Detectar o idioma atual
    const detectLanguage = () => {
      const path = window.location.pathname;
      if (path.startsWith('/en/')) return 'en';
      if (path.startsWith('/es/')) return 'es';
      return 'pt'; // padrão
    };
    
    const lang = detectLanguage();
    
    // Carregar as traduções corretas baseadas no idioma detectado
    const loadTranslations = async () => {
      try {
        // Carregar o arquivo de tradução correspondente
        let translationData;
        
        if (lang === 'en') {
          translationData = {
            brandName: "ShipGlobal",
            newsletter: {
              title: "Subscribe to our newsletter",
              subtitle: "Receive news and exclusive offers directly in your email",
              placeholder: "Your best email",
              button: "Subscribe"
            },
            about: {
              title: "About",
              links: {
                aboutUs: "About Us",
                howItWorks: "How It Works",
                reviews: "Reviews",
                jobs: "Jobs"
              }
            },
            services: {
              title: "Services",
              links: {
                personalShopper: "Personal Shopper",
                consolidation: "Consolidation",
                repackaging: "Repackaging",
                returns: "Returns"
              }
            },
            support: {
              title: "Support",
              links: {
                faq: "FAQ",
                contact: "Contact",
                blog: "Blog",
                hours: "Hours"
              }
            },
            legal: {
              title: "Legal",
              links: {
                terms: "Terms of Use",
                privacy: "Privacy",
                cookies: "Cookies",
                lgpd: "LGPD"
              }
            },
            contact: {
              email: "contact@shipglobal.com",
              phone: "+55 (44) 99180-5405",
              address: "Maringá, PR - Brazil"
            },
            socialLinks: {
              twitter: "Twitter",
              instagram: "Instagram",
              linkedin: "LinkedIn",
              facebook: "Facebook"
            },
            copyright: "ShipGlobal. All rights reserved."
          };
        } else if (lang === 'es') {
          translationData = {
            brandName: "ShipGlobal",
            newsletter: {
              title: "Suscríbete a nuestro boletín",
              subtitle: "Recibe noticias y ofertas exclusivas directamente en tu correo",
              placeholder: "Tu mejor correo",
              button: "Suscribirse"
            },
            about: {
              title: "Acerca de",
              links: {
                aboutUs: "Sobre Nosotros",
                howItWorks: "Cómo Funciona",
                reviews: "Reseñas",
                jobs: "Trabajos"
              }
            },
            services: {
              title: "Servicios",
              links: {
                personalShopper: "Personal Shopper",
                consolidation: "Consolidación",
                repackaging: "Reempaque",
                returns: "Devoluciones"
              }
            },
            support: {
              title: "Soporte",
              links: {
                faq: "Preguntas Frecuentes",
                contact: "Contacto",
                blog: "Blog",
                hours: "Horarios"
              }
            },
            legal: {
              title: "Legal",
              links: {
                terms: "Términos de Uso",
                privacy: "Privacidad",
                cookies: "Cookies",
                lgpd: "LGPD"
              }
            },
            contact: {
              email: "contact@shipglobal.com",
              phone: "+55 (44) 99180-5405",
              address: "Maringá, PR - Brasil"
            },
            socialLinks: {
              twitter: "Twitter",
              instagram: "Instagram",
              linkedin: "LinkedIn",
              facebook: "Facebook"
            },
            copyright: "ShipGlobal. Todos los derechos reservados."
          };
        } else {
          // Português (padrão)
          translationData = {
            brandName: "ShipGlobal",
            newsletter: {
              title: "Assine nossa newsletter",
              subtitle: "Receba novidades e ofertas exclusivas diretamente no seu e-mail",
              placeholder: "Seu melhor e-mail",
              button: "Assinar"
            },
            about: {
              title: "Sobre",
              links: {
                aboutUs: "Sobre Nós",
                howItWorks: "Como Funciona",
                reviews: "Avaliações",
                jobs: "Trabalhe Conosco"
              }
            },
            services: {
              title: "Serviços",
              links: {
                personalShopper: "Personal Shopper",
                consolidation: "Consolidação",
                repackaging: "Reembalagem",
                returns: "Devoluções"
              }
            },
            support: {
              title: "Suporte",
              links: {
                faq: "Perguntas Frequentes",
                contact: "Contato",
                blog: "Blog",
                hours: "Horários"
              }
            },
            legal: {
              title: "Legal",
              links: {
                terms: "Termos de Uso",
                privacy: "Privacidade",
                cookies: "Cookies",
                lgpd: "LGPD"
              }
            },
            contact: {
              email: "contact@shipglobal.com",
              phone: "+55 (44) 99180-5405",
              address: "Maringá, PR - Brasil"
            },
            socialLinks: {
              twitter: "Twitter",
              instagram: "Instagram",
              linkedin: "LinkedIn",
              facebook: "Facebook"
            },
            copyright: "ShipGlobal. Todos os direitos reservados."
          };
        }
        
        setTranslations(translationData);
      } catch (error) {
        console.error("Failed to load translations:", error);
      }
    };
    
    loadTranslations();
  }, []);
  
  // Não renderizar nada significativo até estarmos no cliente
  if (!mounted) {
    return <footer className="bg-gradient-to-r from-blue-600 to-blue-900 h-96"></footer>;
  }
  
  // Preparar os dados para o footer com as traduções carregadas
  const footerSections = [
    {
      title: translations.about.title,
      links: [
        { label: translations.about.links.aboutUs, href: "/sobre" },
        { label: translations.about.links.howItWorks, href: "/como-funciona" },
        { label: translations.about.links.reviews, href: "/avaliacoes" },
        { label: translations.about.links.jobs, href: "/vagas" },
      ],
    },
    {
      title: translations.services.title,
      links: [
        { label: translations.services.links.personalShopper, href: "/servicos/personal-shopper" },
        { label: translations.services.links.consolidation, href: "/servicos/consolidacao" },
        { label: translations.services.links.repackaging, href: "/servicos/reembalagem" },
        { label: translations.services.links.returns, href: "/servicos/devolucoes" },
      ],
    },
    {
      title: translations.support.title,
      links: [
        { label: translations.support.links.faq, href: "/faq" },
        { label: translations.support.links.contact, href: "/contato" },
        { label: translations.support.links.blog, href: "/blog" },
        { label: translations.support.links.hours, href: "/horarios" },
      ],
    },
    {
      title: translations.legal.title,
      links: [
        { label: translations.legal.links.terms, href: "/termos" },
        { label: translations.legal.links.privacy, href: "/privacidade" },
        { label: translations.legal.links.cookies, href: "/cookies" },
        { label: translations.legal.links.lgpd, href: "/lgpd" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: translations.socialLinks.twitter },
    { icon: <Instagram size={20} />, href: "#", label: translations.socialLinks.instagram },
    { icon: <Linkedin size={20} />, href: "#", label: translations.socialLinks.linkedin },
    { icon: <Facebook size={20} />, href: "#", label: translations.socialLinks.facebook },
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: translations.contact.email },
    { icon: <Phone size={16} />, text: translations.contact.phone },
    { icon: <MapPin size={16} />, text: translations.contact.address },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 text-white">
      {/* Newsletter Section */}
      <div className="w-full bg-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">{translations.newsletter.title}</h3>
              <p className="text-blue-100 mt-1">{translations.newsletter.subtitle}</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder={translations.newsletter.placeholder}
                className="px-4 py-2 rounded-l-md w-full md:w-64 text-gray-900 focus:outline-none"
              />
              <Button variant="default" className="rounded-l-none bg-blue-900 hover:bg-blue-800">
                {translations.newsletter.button}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Package className="h-8 w-8 text-white" />
              <span className="font-bold text-white text-2xl">{translations.brandName}</span>
            </div>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-blue-100">
                  <span className="text-white">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 opacity-30" />

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-blue-100 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {translations.copyright}
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                href={social.href}
                aria-label={social.label}
                className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}