export interface Advantage {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

export const advantages: Advantage[] = [
  {
    title: 'Preços Transparentes',
    description:
      'Sem taxas ocultas. Orçamentos detalhados com todos os custos incluídos desde a compra até a entrega.',
    icon: 'Truck',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
  },
  {
    title: 'Agilidade',
    description:
      'Processo de compra e entrega otimizado para garantir que seus produtos cheguem o mais rápido possível.',
    icon: 'Clock',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-600',
  },
  {
    title: 'Segurança',
    description:
      'Transações seguras e proteção de dados garantidas com criptografia de ponta a ponta.',
    icon: 'Lock',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
  },
];