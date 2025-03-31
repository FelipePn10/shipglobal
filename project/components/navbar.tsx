"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Package, Menu, X, Globe, ChevronDown, User, Building2, ArrowRight } from "lucide-react";
import i18n from "@/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "@/components/Search";
import { footerSearchItems } from "@/components/Footer/footer";

interface NavbarProps {
  lang: string;
}

interface SearchItem {
  href: string;
  label: string;
}

interface MenuItem {
  href: string;
  label: string;
  hasSubmenu?: boolean;
  submenu?: SubmenuItem[];
}

interface SubmenuItem {
  href: string;
  label: string;
}

interface Language {
  code: string;
  name: string;
}

export function Navbar({ lang }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const languages: Language[] = [
    { code: "en", name: "English" },
    { code: "pt", name: "Português" },
    { code: "es", name: "Español" },
  ];

  const menuItems: MenuItem[] = [
    { href: `/${lang}/explanation`, label: "Como Funciona" },
    {
      href: `/${lang}/servicos`,
      label: "Serviços",
      hasSubmenu: true,
      submenu: [
        { href: `/${lang}/personalshopper`, label: "Personal Shopper" },
        { href: `/${lang}/consolidation`, label: "Consolidação" },
        { href: `/${lang}/repackaging`, label: "Reembalagem" },
        { href: `/${lang}/returns`, label: "Devoluções" },
      ],
    },
    { href: `/${lang}/price`, label: "Preços" },
    { href: `/${lang}/contact`, label: "Contato" },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code)
      .then(() => {
        router.push(`/${code}`);
        setIsLangOpen(false);
      })
      .catch((err) => {
        console.error("Erro ao trocar idioma:", err);
      });
  };

  const goToAuthPage = () => {
    router.push(`/${lang}/auth`);
  };
  
  const goToPageBussines = () => {
    router.push(`/${lang}/bussines`);
  };

  // Toggle submenu on mobile
  const toggleSubmenu = (label: string) => {
    setActiveSubmenu(activeSubmenu === label ? null : label);
  };

  // Detecta scroll para mudar a aparência da navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      setActiveSubmenu(null);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  const navbarSearchItems: SearchItem[] = menuItems.map((item) => ({
    href: item.href,
    label: item.label,
  }));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2" 
          : "bg-white/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center space-x-2 group">
              <div className="relative overflow-hidden rounded-lg p-1.5 bg-gradient-to-br from-blue-500 to-blue-700 transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-800">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">
                ShipGlobal<span className="text-blue-600">.</span>
              </span>
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <div className="mr-2 h-5 border-r border-gray-200"></div>
            
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.hasSubmenu ? (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 rounded-md group">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 rounded-md relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Submenu desktop */}
                {item.hasSubmenu && (
                  <div className="absolute left-0 mt-1 w-56 rounded-md overflow-hidden bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group/item"
                        >
                          <span>{subItem.label}</span>
                          <ArrowRight className="ml-auto h-4 w-4 opacity-0 group-hover/item:opacity-100 transition-opacity transform -translate-x-2 group-hover/item:translate-x-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="mx-2 h-5 border-r border-gray-200"></div>

            {/* Dropdown de idiomas desktop */}
            <div className="relative" ref={langMenuRef}>
              <button
                className="flex items-center space-x-1.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 rounded-md transition-colors"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find((l) => l.code === lang)?.name || "Language"}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden"
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        className={`flex items-center w-full px-4 py-2.5 text-sm text-left transition-colors ${
                          language.code === lang 
                            ? 'text-blue-600 bg-blue-50 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                        }`}
                        onClick={() => changeLanguage(language.code)}
                      >
                        {language.code === lang && (
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-2.5"></div>
                        )}
                        <span className={language.code === lang ? 'ml-0' : 'ml-4'}>
                          {language.name}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botão de busca */}
            <Search
              navbarItems={navbarSearchItems}
              footerItems={footerSearchItems}
              lang={lang}
            />

            <div className="mx-1 h-5 border-r border-gray-200"></div>

            {/* Botões de ação */}
            <div className="flex items-center space-x-2">
              <Button 
                className="bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:border-blue-300 shadow-sm transition-all duration-300" 
                size="sm"
                onClick={goToAuthPage}
              >
                <User className="mr-2 h-4 w-4" />
                Área do Cliente
              </Button>

              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-300" 
                size="sm"
                onClick={goToPageBussines}
              >
                <Building2 className="mr-2 h-4 w-4" />
                Para empresas
              </Button>
            </div>
          </div>

          {/* Botão de menu mobile */}
          <div className="md:hidden flex items-center space-x-2">
            <Search
              navbarItems={navbarSearchItems}
              footerItems={footerSearchItems}
              lang={lang}
            />

            <Button
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="outline"
              className={`p-1.5 rounded-md border ${isMenuOpen ? 'bg-gray-100' : 'bg-white'}`}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-0.5 bg-white shadow-lg divide-y divide-gray-100">
              {menuItems.map((item) => (
                <div key={item.href} className="py-1">
                  {item.hasSubmenu ? (
                    <div>
                      <button 
                        className={`flex items-center justify-between w-full py-3 text-base ${
                          activeSubmenu === item.label ? 'text-blue-600 font-medium' : 'text-gray-700'
                        }`}
                        onClick={() => toggleSubmenu(item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                          activeSubmenu === item.label ? 'rotate-180 text-blue-600' : ''
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {activeSubmenu === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-1 ml-4 pl-4 border-l-2 border-blue-100 space-y-0"
                          >
                            {item.submenu?.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="flex items-center py-3 text-sm text-gray-700 hover:text-blue-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-200 mr-3"></div>
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-3 text-base text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  )}
                </div>
              ))}

              {/* Dropdown de idiomas mobile */}
              <div className="py-1">
                <button
                  className={`flex items-center justify-between w-full py-3 text-base ${
                    isLangOpen ? 'text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    <span>{languages.find((l) => l.code === lang)?.name || "Language"}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                    isLangOpen ? 'rotate-180 text-blue-600' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1 ml-4 pl-4 border-l-2 border-blue-100 space-y-0"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          className={`flex items-center w-full py-3 text-left text-sm ${
                            language.code === lang 
                              ? 'text-blue-600 font-medium' 
                              : 'text-gray-700 hover:text-blue-600'
                          }`}
                          onClick={() => changeLanguage(language.code)}
                        >
                          {language.code === lang ? (
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3"></div>
                          ) : (
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-200 mr-3"></div>
                          )}
                          {language.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Botões no mobile */}
              <div className="pt-4 flex flex-col space-y-3">
                <Button 
                  className="w-full bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:border-blue-300" 
                  onClick={goToAuthPage}
                >
                  <User className="mr-2 h-4 w-4" />
                  Área do Cliente
                </Button>
                
                <Button 
                  className="w-full bg-blue-600 text-white hover:bg-blue-700" 
                  onClick={goToPageBussines}
                >
                  <Building2 className="mr-2 h-4 w-4" />
                  Para empresas
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay para o menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            style={{ marginTop: '64px' }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}