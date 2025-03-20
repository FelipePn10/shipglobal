"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
  const [expandAll, setExpandAll] = useState(false)

  const toggleAll = () => {
    setExpandAll(!expandAll)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Política de Privacidade</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta política
            explica como coletamos, usamos e protegemos seus dados.
          </p>
          <div className="mt-6">
            <Button variant="outline" onClick={toggleAll} className="flex items-center gap-2">
              {expandAll ? "Recolher todas seções" : "Expandir todas seções"}
              <ChevronDown className={`h-4 w-4 transition-transform ${expandAll ? "rotate-180" : ""}`} />
            </Button>
          </div>
        </div>

        <Accordion
          type="multiple"
          defaultValue={
            expandAll ? ["item-1", "item-2", "item-3", "item-4", "item-5", "item-6", "item-7", "item-8"] : ["item-1"]
          }
          className="space-y-4"
        >
          <AccordionItem value="item-1" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Visão Geral</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <p className="mb-3">
                Esta Política de Privacidade se aplica a todos os serviços oferecidos por nossa empresa de
                redirecionamento de compras internacionais, que atua em 17 países ao redor do mundo.
              </p>
              <p>
                Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta
                política. Respeitamos sua privacidade e estamos comprometidos em proteger suas informações pessoais em
                conformidade com as leis de proteção de dados aplicáveis, incluindo o Regulamento Geral de Proteção de
                Dados (GDPR) e a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Informações que Coletamos</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <p className="mb-3">Coletamos os seguintes tipos de informações:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Informações pessoais:</strong> Nome, endereço, e-mail, número de telefone e documentos de
                  identificação necessários para envios internacionais.
                </li>
                <li>
                  <strong>Informações de pagamento:</strong> Dados de cartão de crédito, informações bancárias e
                  histórico de transações.
                </li>
                <li>
                  <strong>Informações de envio:</strong> Endereços de origem e destino, detalhes de pacotes e
                  preferências de envio.
                </li>
                <li>
                  <strong>Informações de uso:</strong> Como você interage com nosso site, aplicativo e serviços.
                </li>
                <li>
                  <strong>Informações do dispositivo:</strong> Endereço IP, tipo de navegador, idioma, sistema
                  operacional e outras tecnologias em dispositivos que você usa.
                </li>
              </ul>
              <p>
                Estas informações são necessárias para fornecer nossos serviços de redirecionamento de compras
                internacionais e garantir que seus pacotes cheguem ao destino correto.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Como Usamos Suas Informações</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <p className="mb-3">Utilizamos suas informações para os seguintes fins:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Processar e entregar seus pedidos de redirecionamento de compras internacionais</li>
                <li>Gerenciar sua conta e fornecer suporte ao cliente</li>
                <li>Processar pagamentos e prevenir fraudes</li>
                <li>Cumprir obrigações legais, incluindo regulamentos alfandegários e de exportação</li>
                <li>Personalizar sua experiência e oferecer conteúdo e ofertas relevantes</li>
                <li>Melhorar nossos serviços, site e operações</li>
                <li>Comunicar-se com você sobre atualizações de serviço, promoções e novidades</li>
              </ul>
              <p>
                Processamos suas informações com base no contrato que temos com você, em nossos interesses legítimos, em
                conformidade com obrigações legais e, quando necessário, com seu consentimento.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Política de Cookies</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <p className="mb-3">
                Nosso site utiliza cookies e tecnologias similares para melhorar sua experiência de navegação, analisar
                o uso do site e auxiliar em nossos esforços de marketing.
              </p>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Tipos de cookies que utilizamos:</h3>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Cookies essenciais:</strong> Necessários para o funcionamento do site, permitindo recursos
                  básicos como navegação e acesso a áreas seguras.
                </li>
                <li>
                  <strong>Cookies de preferências:</strong> Permitem que o site lembre informações que mudam a aparência
                  ou comportamento do site, como seu idioma preferido.
                </li>
                <li>
                  <strong>Cookies estatísticos:</strong> Ajudam-nos a entender como os visitantes interagem com o site,
                  coletando e relatando informações anonimamente.
                </li>
                <li>
                  <strong>Cookies de marketing:</strong> Usados para rastrear visitantes em sites e coletar informações
                  para fornecer anúncios personalizados.
                </li>
              </ul>

              <h3 className="font-semibold text-slate-700 mt-4 mb-2">Gerenciamento de cookies:</h3>
              <p className="mb-3">
                Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos os cookies já em seu
                dispositivo e configurar a maioria dos navegadores para impedir que sejam colocados. No entanto, se você
                fizer isso, talvez seja necessário ajustar manualmente algumas preferências sempre que visitar um site,
                e alguns serviços e funcionalidades podem não funcionar.
              </p>

              <p>
                Para mais informações sobre como gerenciar cookies, visite{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  allaboutcookies.org
                </a>{" "}
                ou as páginas de ajuda do seu navegador.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Transferências Internacionais de Dados</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <p className="mb-3">
                Como uma empresa que opera em 17 países, podemos transferir suas informações pessoais entre diferentes
                jurisdições. Quando transferimos dados para fora de sua região, tomamos medidas para garantir que suas
                informações recebam um nível adequado de proteção.
              </p>
              <p className="mb-3">
                Implementamos salvaguardas apropriadas, como cláusulas contratuais padrão aprovadas pela Comissão
                Europeia ou mecanismos de certificação, para garantir que suas informações sejam protegidas de acordo
                com as leis de proteção de dados aplicáveis.
              </p>
              <p>
                Ao utilizar nossos serviços, você reconhece que suas informações pessoais podem ser transferidas para
                nossos servidores localizados fora de seu país de residência, onde os padrões de proteção de dados podem
                ser diferentes.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Seus Direitos de Privacidade</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <p className="mb-3">
                Dependendo de sua localização, você pode ter os seguintes direitos relacionados aos seus dados pessoais:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <strong>Acesso:</strong> Direito de solicitar acesso aos seus dados pessoais.
                </li>
                <li>
                  <strong>Retificação:</strong> Direito de solicitar a correção de informações imprecisas ou
                  incompletas.
                </li>
                <li>
                  <strong>Exclusão:</strong> Direito de solicitar a exclusão de seus dados pessoais em determinadas
                  circunstâncias.
                </li>
                <li>
                  <strong>Restrição:</strong> Direito de solicitar a restrição do processamento de seus dados pessoais.
                </li>
                <li>
                  <strong>Portabilidade:</strong> Direito de receber seus dados pessoais em formato estruturado e
                  transferi-los para outro controlador.
                </li>
                <li>
                  <strong>Objeção:</strong> Direito de se opor ao processamento de seus dados pessoais em determinadas
                  circunstâncias.
                </li>
                <li>
                  <strong>Retirada de consentimento:</strong> Direito de retirar seu consentimento a qualquer momento,
                  quando o processamento for baseado em consentimento.
                </li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, entre em contato conosco através dos canais indicados na seção
                "Contato" desta política. Responderemos à sua solicitação dentro do prazo exigido pela lei aplicável.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Segurança de Dados</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <p className="mb-3">
                Implementamos medidas de segurança técnicas, administrativas e físicas apropriadas para proteger suas
                informações pessoais contra acesso não autorizado, uso indevido, alteração ou destruição.
              </p>
              <p className="mb-3">Nossas medidas de segurança incluem:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>Criptografia de dados sensíveis</li>
                <li>Firewalls e sistemas de detecção de intrusão</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento regular de segurança</li>
                <li>Treinamento de funcionários em práticas de segurança de dados</li>
                <li>Avaliações periódicas de risco e testes de vulnerabilidade</li>
              </ul>
              <p>
                Embora nos esforcemos para proteger suas informações pessoais, nenhum método de transmissão pela
                Internet ou método de armazenamento eletrônico é 100% seguro. Portanto, não podemos garantir sua
                segurança absoluta.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-lg bg-white shadow-sm">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <h2 className="text-xl font-semibold text-slate-800 text-left">Alterações e Contato</h2>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-slate-600">
              <h3 className="font-semibold text-slate-700 mb-2">Alterações nesta Política</h3>
              <p className="mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas
                ou por outros motivos operacionais, legais ou regulatórios. Recomendamos que você revise esta política
                regularmente para estar ciente de quaisquer alterações. A data da última atualização será sempre
                indicada no início desta política.
              </p>

              <h3 className="font-semibold text-slate-700 mb-2">Entre em Contato</h3>
              <p className="mb-3">
                Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou ao
                processamento de suas informações pessoais, entre em contato conosco:
              </p>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="mb-1">
                  <strong>E-mail:</strong> privacidade@shipglobal.com
                </p>
                <p className="mb-1">
                  <strong>Telefone:</strong> +55 (44) 99180-5405
                </p>
                <p>
                  <strong>Endereço:</strong> Av. Lucio De Held, 1279 - Maringá, Paraná, Brasil
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center text-sm text-slate-500">
          <p>Última atualização: 20 de março de 2025</p>
        </div>
      </div>
    </div>
  )
}