"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Translations object
const translations = {
  English: {
    title: "Terms of Use",
    lastUpdated: "Last updated",
    intro:
      "Please read these Terms of Use carefully before using our international purchase redirection services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our services.",
    section1: {
      title: "1. Introduction",
      content:
        'Welcome to our international purchase redirection service. These Terms of Use govern your use of our website, mobile applications, and services (collectively, the "Services") operated by [Company Name] ("we," "us," or "our"). Our Services are available in 17 countries worldwide, allowing customers to purchase products from retailers that don\'t ship to their location.',
    },
    section2: {
      title: "2. Definitions",
      user: '"User," "You," or "Your" refers to the individual or entity accessing or using our Services.',
      warehouse: '"Warehouse Address" refers to the physical address we provide to you for receiving packages.',
      redirection:
        '"Redirection" refers to the process of receiving, processing, and forwarding packages from our warehouse to your designated address.',
      origin: '"Origin Country" refers to the country where the retailer is located.',
      destination: '"Destination Country" refers to the country where you want your packages delivered.',
    },
    section3: {
      title: "3. Acceptance of Terms",
      content1:
        "By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, our Privacy Policy, and any additional terms that may apply.",
      content2:
        "If you are using our Services on behalf of a business or other entity, you represent and warrant that you have the authority to bind that entity to these Terms.",
      content3:
        "We reserve the right to modify these Terms at any time. Your continued use of our Services after any changes indicates your acceptance of the modified Terms.",
    },
    section4: {
      title: "4. Eligibility",
      content1:
        "You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this requirement.",
      content2:
        "Our Services are available in the following 17 countries: [List of Countries]. If you are not located in one of these countries, you may not use our Services.",
      content3: "We reserve the right to refuse service to anyone for any reason at any time.",
    },
    section5: {
      title: "5. Service Description",
      content1:
        "Our Services enable you to purchase products from retailers that do not ship to your location. We provide you with a local address in the origin country, receive your packages, and forward them to your address in the destination country.",
      content2: "Our Services include:",
      services: [
        "Providing a unique warehouse address for receiving your packages",
        "Notification when your packages arrive at our warehouse",
        "Package consolidation (combining multiple packages into one shipment)",
        "Package inspection and photos upon request",
        "Customs declaration assistance",
        "International shipping and tracking",
      ],
    },
    section6: {
      title: "6. User Accounts",
      content1:
        "To use our Services, you must create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      content2:
        "You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
      content3:
        "We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, not current, or incomplete.",
    },
    section7: {
      title: "7. User Responsibilities",
      content1: "You are responsible for:",
      responsibilities: [
        "Ensuring that the items you purchase and ship comply with all applicable laws and regulations in both the origin and destination countries",
        "Providing accurate shipping information",
        "Paying all applicable fees, including shipping costs, customs duties, and taxes",
        "Complying with customs requirements and providing necessary documentation",
        "Tracking your packages and promptly reporting any issues",
      ],
    },
    section8: {
      title: "8. Prohibited Items",
      content1: "You may not use our Services to ship:",
      prohibited: [
        "Illegal items or contraband",
        "Hazardous materials",
        "Firearms, weapons, or ammunition",
        "Drugs or controlled substances",
        "Counterfeit goods",
        "Perishable items",
        "Live animals",
        "Any items prohibited by law in either the origin or destination country",
      ],
      content2:
        "We reserve the right to refuse to ship any item at our discretion. If we discover prohibited items, we may dispose of them and report to relevant authorities.",
    },
    section9: {
      title: "9. Fees and Payment",
      content1: "Our fee structure is available on our website and may be updated from time to time. Fees may include:",
      fees: [
        "Registration fee",
        "Monthly subscription fee (if applicable)",
        "Shipping and handling fees",
        "Package consolidation fees",
        "Storage fees for packages held beyond the free storage period",
        "Additional services fees (e.g., package photos, special handling)",
      ],
      content2:
        "You are responsible for all customs duties, taxes, and other charges imposed by customs or other authorities in the destination country.",
      content3: "All payments are non-refundable unless otherwise specified.",
    },
    section10: {
      title: "10. Limitation of Liability",
      content1: "To the maximum extent permitted by law, we shall not be liable for:",
      limitations: [
        "Any indirect, incidental, special, consequential, or punitive damages",
        "Loss of profits, revenue, data, or business opportunities",
        "Damages resulting from delays in shipping or customs clearance",
        "Damages resulting from loss, damage, or theft of packages while in transit",
        "Damages resulting from force majeure events",
      ],
      content2:
        "Our liability for any claim arising out of or relating to these Terms shall not exceed the amount you paid to us for the specific shipment giving rise to such claim.",
    },
    section11: {
      title: "11. Dispute Resolution",
      content1:
        "Any dispute arising out of or relating to these Terms shall first be attempted to be resolved through good-faith negotiations.",
      content2:
        "If negotiations fail, the dispute shall be resolved through binding arbitration in accordance with the rules of [Arbitration Association] in [Location]. The arbitration shall be conducted in English.",
      content3:
        "Any arbitration shall be confidential, and neither party shall disclose the existence, content, or results of any arbitration without the prior written consent of the other party.",
    },
    section12: {
      title: "12. Governing Law",
      content1:
        "These Terms shall be governed by and construed in accordance with the laws of [Country], without regard to its conflict of law provisions.",
      content2:
        "Your use of our Services may also be subject to other local, state, national, or international laws, particularly those related to customs, import/export, and shipping.",
    },
    section13: {
      title: "13. Modifications to Terms",
      content1:
        'We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated Terms on our website and updating the "Last Updated" date.',
      content2:
        "Your continued use of our Services after any changes to these Terms constitutes your acceptance of the modified Terms.",
    },
    section14: {
      title: "14. Contact Information",
      content1: "If you have any questions about these Terms, please contact us at:",
      content2: "[Company Name]\n[Address]\n[Email]\n[Phone]",
    },
    acceptButton: "I Accept the Terms of Use",
    acceptDisclaimer:
      'By clicking "I Accept the Terms of Use," you acknowledge that you have read, understood, and agree to be bound by these Terms.',
  },
  "Português (Brasil)": {
    title: "Termos de Uso",
    lastUpdated: "Última atualização",
    intro:
      "Por favor, leia estes Termos de Uso cuidadosamente antes de utilizar nossos serviços de redirecionamento de compras internacionais. Ao acessar ou utilizar nossos serviços, você concorda em estar vinculado a estes Termos. Se você não concordar com qualquer parte destes Termos, não poderá utilizar nossos serviços.",
    section1: {
      title: "1. Introdução",
      content:
        'Bem-vindo ao nosso serviço de redirecionamento de compras internacionais. Estes Termos de Uso regem o uso do nosso site, aplicativos móveis e serviços (coletivamente, os "Serviços") operados por [Nome da Empresa] ("nós", "nos" ou "nosso"). Nossos Serviços estão disponíveis em 17 países em todo o mundo, permitindo que os clientes comprem produtos de varejistas que não enviam para sua localização.',
    },
    section2: {
      title: "2. Definições",
      user: '"Usuário", "Você" ou "Seu" refere-se ao indivíduo ou entidade que acessa ou utiliza nossos Serviços.',
      warehouse: '"Endereço do Armazém" refere-se ao endereço físico que fornecemos para você receber pacotes.',
      redirection:
        '"Redirecionamento" refere-se ao processo de receber, processar e encaminhar pacotes do nosso armazém para o seu endereço designado.',
      origin: '"País de Origem" refere-se ao país onde o varejista está localizado.',
      destination: '"País de Destino" refere-se ao país para onde você deseja que seus pacotes sejam entregues.',
    },
    section3: {
      title: "3. Aceitação dos Termos",
      content1:
        "Ao acessar ou utilizar nossos Serviços, você reconhece que leu, entendeu e concorda em estar vinculado a estes Termos de Uso, nossa Política de Privacidade e quaisquer termos adicionais que possam ser aplicáveis.",
      content2:
        "Se você estiver usando nossos Serviços em nome de uma empresa ou outra entidade, você declara e garante que tem autoridade para vincular essa entidade a estes Termos.",
      content3:
        "Reservamo-nos o direito de modificar estes Termos a qualquer momento. Seu uso continuado de nossos Serviços após quaisquer alterações indica sua aceitação dos Termos modificados.",
    },
    section4: {
      title: "4. Elegibilidade",
      content1:
        "Você deve ter pelo menos 18 anos de idade para utilizar nossos Serviços. Ao utilizar nossos Serviços, você declara e garante que atende a este requisito.",
      content2:
        "Nossos Serviços estão disponíveis nos seguintes 17 países: [Lista de Países]. Se você não estiver localizado em um desses países, não poderá utilizar nossos Serviços.",
      content3:
        "Reservamo-nos o direito de recusar o serviço a qualquer pessoa por qualquer motivo a qualquer momento.",
    },
    section5: {
      title: "5. Descrição do Serviço",
      content1:
        "Nossos Serviços permitem que você compre produtos de varejistas que não enviam para sua localização. Fornecemos a você um endereço local no país de origem, recebemos seus pacotes e os encaminhamos para seu endereço no país de destino.",
      content2: "Nossos Serviços incluem:",
      services: [
        "Fornecimento de um endereço único de armazém para receber seus pacotes",
        "Notificação quando seus pacotes chegam ao nosso armazém",
        "Consolidação de pacotes (combinação de vários pacotes em um único envio)",
        "Inspeção de pacotes e fotos mediante solicitação",
        "Assistência na declaração aduaneira",
        "Envio internacional e rastreamento",
      ],
    },
    section6: {
      title: "6. Contas de Usuário",
      content1:
        "Para utilizar nossos Serviços, você deve criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de conta e por todas as atividades que ocorrem em sua conta.",
      content2:
        "Você concorda em fornecer informações precisas, atuais e completas durante o processo de registro e em atualizar essas informações para mantê-las precisas, atuais e completas.",
      content3:
        "Reservamo-nos o direito de suspender ou encerrar sua conta se qualquer informação fornecida se mostrar imprecisa, desatualizada ou incompleta.",
    },
    section7: {
      title: "7. Responsabilidades do Usuário",
      content1: "Você é responsável por:",
      responsibilities: [
        "Garantir que os itens que você compra e envia estejam em conformidade com todas as leis e regulamentos aplicáveis tanto no país de origem quanto no país de destino",
        "Fornecer informações de envio precisas",
        "Pagar todas as taxas aplicáveis, incluindo custos de envio, taxas alfandegárias e impostos",
        "Cumprir com os requisitos aduaneiros e fornecer a documentação necessária",
        "Rastrear seus pacotes e relatar prontamente quaisquer problemas",
      ],
    },
    section8: {
      title: "8. Itens Proibidos",
      content1: "Você não pode usar nossos Serviços para enviar:",
      prohibited: [
        "Itens ilegais ou contrabando",
        "Materiais perigosos",
        "Armas de fogo, armas ou munição",
        "Drogas ou substâncias controladas",
        "Produtos falsificados",
        "Itens perecíveis",
        "Animais vivos",
        "Quaisquer itens proibidos por lei no país de origem ou no país de destino",
      ],
      content2:
        "Reservamo-nos o direito de recusar o envio de qualquer item a nosso critério. Se descobrirmos itens proibidos, poderemos descartá-los e relatar às autoridades relevantes.",
    },
    section9: {
      title: "9. Taxas e Pagamento",
      content1:
        "Nossa estrutura de taxas está disponível em nosso site e pode ser atualizada de tempos em tempos. As taxas podem incluir:",
      fees: [
        "Taxa de registro",
        "Taxa de assinatura mensal (se aplicável)",
        "Taxas de envio e manuseio",
        "Taxas de consolidação de pacotes",
        "Taxas de armazenamento para pacotes mantidos além do período de armazenamento gratuito",
        "Taxas de serviços adicionais (por exemplo, fotos de pacotes, manuseio especial)",
      ],
      content2:
        "Você é responsável por todas as taxas alfandegárias, impostos e outros encargos impostos pelas alfândegas ou outras autoridades no país de destino.",
      content3: "Todos os pagamentos são não reembolsáveis, a menos que especificado de outra forma.",
    },
    section10: {
      title: "10. Limitação de Responsabilidade",
      content1: "Na extensão máxima permitida por lei, não seremos responsáveis por:",
      limitations: [
        "Quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos",
        "Perda de lucros, receita, dados ou oportunidades de negócios",
        "Danos resultantes de atrasos no envio ou desembaraço aduaneiro",
        "Danos resultantes de perda, dano ou roubo de pacotes durante o trânsito",
        "Danos resultantes de eventos de força maior",
      ],
      content2:
        "Nossa responsabilidade por qualquer reclamação decorrente ou relacionada a estes Termos não excederá o valor que você nos pagou pelo envio específico que deu origem a tal reclamação.",
    },
    section11: {
      title: "11. Resolução de Disputas",
      content1:
        "Qualquer disputa decorrente ou relacionada a estes Termos deverá primeiro ser tentada a ser resolvida através de negociações de boa fé.",
      content2:
        "Se as negociações falharem, a disputa será resolvida através de arbitragem vinculativa de acordo com as regras da [Associação de Arbitragem] em [Local]. A arbitragem será conduzida em inglês.",
      content3:
        "Qualquer arbitragem será confidencial, e nenhuma das partes divulgará a existência, conteúdo ou resultados de qualquer arbitragem sem o consentimento prévio por escrito da outra parte.",
    },
    section12: {
      title: "12. Lei Aplicável",
      content1:
        "Estes Termos serão regidos e interpretados de acordo com as leis de [País], sem considerar suas disposições sobre conflitos de leis.",
      content2:
        "O uso de nossos Serviços também pode estar sujeito a outras leis locais, estaduais, nacionais ou internacionais, particularmente aquelas relacionadas a alfândega, importação/exportação e envio.",
    },
    section13: {
      title: "13. Modificações nos Termos",
      content1:
        'Reservamo-nos o direito de modificar estes Termos a qualquer momento. Forneceremos aviso de alterações significativas publicando os Termos atualizados em nosso site e atualizando a data de "Última Atualização".',
      content2:
        "Seu uso continuado de nossos Serviços após quaisquer alterações nestes Termos constitui sua aceitação dos Termos modificados.",
    },
    section14: {
      title: "14. Informações de Contato",
      content1: "Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em:",
      content2: "[Nome da Empresa]\n[Endereço]\n[Email]\n[Telefone]",
    },
    acceptButton: "Eu Aceito os Termos de Uso",
    acceptDisclaimer:
      'Ao clicar em "Eu Aceito os Termos de Uso", você reconhece que leu, entendeu e concorda em estar vinculado a estes Termos.',
  },
}

export default function TermsOfUse() {
  const [language, setLanguage] = useState("English")
  const currentYear = new Date().getFullYear()
  const t = translations[language as keyof typeof translations]

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-6">
        <div className="text-center space-y-3 mt-16">
          <h1 className="text-3xl font-bold tracking-tight">{t.title}</h1>
          <p className="text-muted-foreground">
            {t.lastUpdated}: {language === "English" ? "March" : "Março"} 20, {currentYear}
          </p>
          <div className="flex justify-center">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="English">English</option>
              <option value="Português (Brasil)">Português (Brasil)</option>
              <option value="Español">Español</option>
              <option value="Français">Français</option>
              <option value="Deutsch">Deutsch</option>
              <option value="中文">中文</option>
            </select>
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <p className="text-sm">{t.intro}</p>
        </div>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.section1.title}</h2>
            <p>{t.section1.content}</p>
          </section>

          <Separator />

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{t.section2.title}</h2>
            <div className="space-y-2">
              <p>
                <strong>{t.section2.user}</strong>
              </p>
              <p>
                <strong>{t.section2.warehouse}</strong>
              </p>
              <p>
                <strong>{t.section2.redirection}</strong>
              </p>
              <p>
                <strong>{t.section2.origin}</strong>
              </p>
              <p>
                <strong>{t.section2.destination}</strong>
              </p>
            </div>
          </section>

          <Separator />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section3.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section3.content1}</p>
                  <p>{t.section3.content2}</p>
                  <p>{t.section3.content3}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section4.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section4.content1}</p>
                  <p>{t.section4.content2}</p>
                  <p>{t.section4.content3}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section5.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section5.content1}</p>
                  <p>{t.section5.content2}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {t.section5.services.map((service, index) => (
                      <li key={index}>{service}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section6.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section6.content1}</p>
                  <p>{t.section6.content2}</p>
                  <p>{t.section6.content3}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section7.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section7.content1}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {t.section7.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section8.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section8.content1}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {t.section8.prohibited.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p>{t.section8.content2}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section9.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section9.content1}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {t.section9.fees.map((fee, index) => (
                      <li key={index}>{fee}</li>
                    ))}
                  </ul>
                  <p>{t.section9.content2}</p>
                  <p>{t.section9.content3}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section10.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section10.content1}</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {t.section10.limitations.map((limitation, index) => (
                      <li key={index}>{limitation}</li>
                    ))}
                  </ul>
                  <p>{t.section10.content2}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section11.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section11.content1}</p>
                  <p>{t.section11.content2}</p>
                  <p>{t.section11.content3}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section12.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section12.content1}</p>
                  <p>{t.section12.content2}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section13.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section13.content1}</p>
                  <p>{t.section13.content2}</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>
                <h2 className="text-2xl font-semibold text-left">{t.section14.title}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2 pl-4">
                  <p>{t.section14.content1}</p>
                  <p className="whitespace-pre-line">{t.section14.content2}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

