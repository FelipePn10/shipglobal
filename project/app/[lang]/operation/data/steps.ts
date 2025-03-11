export interface Step {
  title: string;
  description: string;
  tipTitle: string;
  tipDescription: string;
  borderColor: string;
  bgColor: string;
}

export const steps: Step[] = [
  {
    title: 'Escolha seu país de compra',
    description:
      'Selecione o país onde deseja fazer suas compras. Temos presença em 17 países ao redor do mundo, permitindo que você tenha acesso às melhores lojas e produtos internacionais.',
    tipTitle: 'Dica:',
    tipDescription: 'Cada país tem produtos únicos e preços diferenciados. Compare antes de decidir!',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Envie o link do produto',
    description:
      'Encontrou o produto ideal? Compartilhe o link conosco através da nossa plataforma. Nossos especialistas verificarão a viabilidade da compra e os custos envolvidos.',
    tipTitle: 'Dica:',
    tipDescription: 'Envie links de produtos similares para que possamos comparar preços e qualidade.',
    borderColor: 'border-purple-300',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Receba seu orçamento',
    description:
      'Em até 24 horas, você receberá um orçamento detalhado incluindo o preço do produto, taxas de serviço, impostos estimados e custo de entrega. Tudo transparente, sem surpresas.',
    tipTitle: 'Dica:',
    tipDescription: 'Nosso orçamento inclui todos os custos, desde a compra até a entrega na sua porta.',
    borderColor: 'border-yellow-300',
    bgColor: 'bg-yellow-50',
  },
  {
    title: 'Aprove e pague',
    description:
      'Aprovando o orçamento, realize o pagamento seguro através da nossa plataforma. Aceitamos diversos métodos de pagamento para sua conveniência, incluindo cartões de crédito, transferências bancárias e métodos locais.',
    tipTitle: 'Dica:',
    tipDescription: 'Seus dados de pagamento são protegidos com criptografia de alta segurança.',
    borderColor: 'border-pink-300',
    bgColor: 'bg-pink-50',
  },
  {
    title: 'Receba seu produto',
    description:
      'Relaxe e aguarde! Cuidaremos da compra, verificação, embalagem e envio do seu produto. Você receberá atualizações em tempo real sobre o status da sua encomenda até a entrega final em seu endereço.',
    tipTitle: 'Dica:',
    tipDescription: 'Acompanhe sua entrega em tempo real através do nosso sistema de rastreamento.',
    borderColor: 'border-blue-400',
    bgColor: 'bg-blue-50',
  },
];