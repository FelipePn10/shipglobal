export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'Quais são os prazos de entrega?',
    answer:
      'Os prazos variam de acordo com o país de origem e o destino. Normalmente, entre 7 e 21 dias úteis após a confirmação da compra.',
  },
  {
    question: 'Como funciona o pagamento?',
    answer:
      'Aceitamos cartões de crédito, transferência bancária e PIX. O valor inclui o produto, taxas internacionais e nosso serviço.',
  },
  {
    question: 'E se o produto chegar com defeito?',
    answer:
      'Todos os produtos passam por inspeção antes do envio. Caso ocorra algum problema, nossa política de garantia cobre defeitos por até 30 dias.',
  },
  {
    question: 'Vocês redirecionam qualquer tipo de produto?',
    answer:
      'Redirecionamos a maioria dos produtos legais. Algumas restrições se aplicam a itens perecíveis, líquidos e produtos com restrições alfandegárias.',
  },
];