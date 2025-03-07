"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Package, Menu, X, Globe } from 'lucide-react'
import i18n from '@/i18n'
import { motion } from 'framer-motion'

interface NavbarProps {
  currentLanguage: string
}

export function Navbar({ currentLanguage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // Idiomas suportados
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'pt', name: 'Português' },
    { code: 'es', name: 'Español' },
  ]

  // Função para trocar o idioma
  const changeLanguage = (code: string) => {
    router.push(`/${code}`) // Redireciona para a rota do idioma selecionado
    setIsOpen(false) // Fecha o dropdown
  }

  // Itens do menu
  const menuItems = [
    { href: `/${currentLanguage}/como-funciona`, label: 'Como Funciona' },
    { href: `/${currentLanguage}/servicos`, label: 'Serviços' },
    { href: `/${currentLanguage}/precos`, label: 'Preços' },
    { href: `/${currentLanguage}/localizacoes`, label: 'Localizações' },
    { href: `/${currentLanguage}/contato`, label: 'Contato' },
  ]

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={`/${i18n.language}`} className="flex items-center space-x-2">
              <Package className="h-6 w-6" />
              <span className="font-bold text-xl">ShipGlobal</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}

            {/* Dropdown de idiomas */}
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-sm font-medium hover:text-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Globe className="h-5 w-5" />
                <span>{languages.find((lang) => lang.code === currentLanguage)?.name}</span>
              </button>

              {/* Menu suspenso de idiomas */}
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <Button>Área do Cliente</Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Dropdown de idiomas para mobile */}
          <div className="px-3 py-2">
            <div className="relative">
              <button
                className="flex items-center space-x-2 text-base font-medium hover:text-primary"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Globe className="h-5 w-5" />
                <span>{languages.find((lang) => lang.code === currentLanguage)?.name}</span>
              </button>

              {/* Menu suspenso de idiomas para mobile */}
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          <div className="px-3 py-2">
            <Button className="w-full">Área do Cliente</Button>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}