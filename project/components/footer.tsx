import Link from 'next/link'
import { Package, Twitter, Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

export function Footer() {
  const footerSections = [
    {
      title: "Sobre",
      links: [
        { label: "Sobre Nós", href: "/sobre" },
        { label: "Como Funciona", href: "/como-funciona" },
        { label: "Avaliações", href: "/avaliacoes" },
        { label: "Vagas", href: "/vagas" }
      ]
    },
    {
      title: "Serviços",
      links: [
        { label: "Personal Shopper", href: "/servicos/personal-shopper" },
        { label: "Consolidação", href: "/servicos/consolidacao" },
        { label: "Reembalagem", href: "/servicos/reembalagem" },
        { label: "Devoluções", href: "/servicos/devolucoes" }
      ]
    },
    {
      title: "Suporte",
      links: [
        { label: "FAQ", href: "/faq" },
        { label: "Contato", href: "/contato" },
        { label: "Blog", href: "/blog" },
        { label: "Horários", href: "/horarios" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "/termos" },
        { label: "Privacidade", href: "/privacidade" },
        { label: "Cookies", href: "/cookies" },
        { label: "LGPD", href: "/lgpd" }
      ]
    }
  ]

  const socialLinks = [
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" }
  ]

  const contactInfo = [
    { icon: <Mail size={16} />, text: "contato@shipglobal.com.br" },
    { icon: <Phone size={16} />, text: "+55 (44) 99180-5405" },
    { icon: <MapPin size={16} />, text: "Maringá, PR - Brasil" }
  ]

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-900 text-white">
      {/* Newsletter Section */}
      <div className="w-full bg-blue-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">Assine nossa newsletter</h3>
              <p className="text-blue-100 mt-1">Receba novidades e ofertas exclusivas diretamente no seu email</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                className="px-4 py-2 rounded-l-md w-full md:w-64 text-gray-900 focus:outline-none" 
              />
              <Button variant="default" className="rounded-l-none bg-blue-900 hover:bg-blue-800">
                Assinar
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
              <span className="font-bold text-white text-2xl">ShipGlobal</span>
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
            &copy; {new Date().getFullYear()} ShipGlobal. Todos os direitos reservados.
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
  )
}