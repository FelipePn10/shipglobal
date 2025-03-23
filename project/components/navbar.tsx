"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Package, Menu, X, Globe, ChevronDown, User, Building2 } from "lucide-react";
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
    { href: `/${lang}/location`, label: "Localizações" },
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

  const navbarSearchItems: SearchItem[] = menuItems.map((item) => ({
  href: item.href,
  label: item.label,
}));

  return (
    <nav
      className={`navbar ${
        isScrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl">ShipGlobal</span>
            </Link>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item) => (
              <div key={item.href} className="relative group">
                {item.hasSubmenu ? (
                  <button className="flex items-center px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 hover:bg-gray-50 rounded-md">
                    {item.label}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium transition-colors hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Submenu desktop */}
                {item.hasSubmenu && (
                  <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {item.submenu?.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Dropdown de idiomas desktop */}
            <div className="relative" ref={langMenuRef}>
              <button
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsLangOpen(!isLangOpen)}
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find((l) => l.code === lang)?.name || "Language"}</span>
                <ChevronDown className="h-3 w-3" />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50"
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => changeLanguage(language.code)}
                      >
                        {language.name}
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

            {/* Botão da área do cliente */}
            <Button className="ml-2 bg-blue-600 text-white hover:bg-blue-700" onClick={goToAuthPage}>
              <User className="mr-2 h-4 w-4" />
              Área do Cliente
            </Button>

            <Button className="ml-2 bg-green-600 text-white hover:bg-green-700" onClick={goToPageBussines}>
              <Building2 className="mr-2 h-4 w-4" />
              Para empresas
            </Button>
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
              className="px-2"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 shadow-lg">
              {menuItems.map((item) => (
                <div key={item.href}>
                  {item.hasSubmenu ? (
                    <div className="px-3 py-2">
                      <button className="flex items-center justify-between w-full text-base font-medium">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="mt-2 pl-4 border-l-2 border-gray-200 space-y-1">
                        {item.submenu?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Dropdown de idiomas mobile */}
              <div className="px-3 py-2">
                <button
                  className="flex items-center justify-between w-full text-base font-medium"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    <span>{languages.find((l) => l.code === lang)?.name || "Language"}</span>
                  </div>
                  <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 border-l-2 border-gray-200 pl-4"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          className="block w-full py-2 text-left text-sm text-gray-700 hover:text-blue-600"
                          onClick={() => changeLanguage(language.code)}
                        >
                          {language.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Botão da área do cliente no mobile */}
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={goToAuthPage}>
                  <User className="mr-2 h-4 w-4" />
                  Área do Cliente
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}