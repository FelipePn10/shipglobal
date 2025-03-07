import Link from 'next/link'
import { Package } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

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

  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-800 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4 text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href} className=''>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Package className="h-6 w-6 text-white" />
            <span className="font-bold text-white text-xl">ShipGlobal</span>
          </div>

          <div className="flex space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground text-white">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-white">
              Instagram
            </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground text-white">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-white">
              Facebook
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p className='text-white'>&copy; {new Date().getFullYear()} ShipGlobal. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}