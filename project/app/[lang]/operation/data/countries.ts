export interface Country {
  code: string;
  name: string;
  localName: string;
}

export const countries: Country[] = [
  { code: 'US', name: 'United States', localName: 'EUA' },
  { code: 'GB', name: 'United Kingdom', localName: 'Reino Unido' },
  { code: 'CN', name: 'China', localName: 'China' },
  { code: 'JP', name: 'Japan', localName: 'Japão' },
  { code: 'DE', name: 'Germany', localName: 'Alemanha' },
  { code: 'AU', name: 'Australia', localName: 'Austrália' },
  { code: 'CA', name: 'Canada', localName: 'Canadá' },
  { code: 'ES', name: 'Spain', localName: 'Espanha' },
  { code: 'FR', name: 'France', localName: 'França' },
  { code: 'IT', name: 'Italy', localName: 'Itália' },
  { code: 'PT', name: 'Portugal', localName: 'Portugal' },
  { code: 'PY', name: 'Paraguay', localName: 'Paraguai' },
  { code: 'TR', name: 'Turkey', localName: 'Turquia' },
  { code: 'BR', name: 'Brazil', localName: 'Brasil' },
  { code: 'TH', name: 'Thailand', localName: 'Tailândia' },
  { code: 'BE', name: 'Belgium', localName: 'Bélgica' },
];