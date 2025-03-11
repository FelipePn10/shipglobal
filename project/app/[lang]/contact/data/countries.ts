export interface Country {
  code: string;
  name: string;
  localName: string;
}

export const countries: Country[] = [
  { code: 'US', name: 'EUA', localName: 'United States' },
  { code: 'GB', name: 'Reino Unido', localName: 'United Kingdom' },
  { code: 'CN', name: 'China', localName: 'China' },
  { code: 'JP', name: 'Japão', localName: 'Japan' },
  { code: 'DE', name: 'Alemanha', localName: 'Germany' },
  { code: 'AU', name: 'Austrália', localName: 'Australia' },
  { code: 'CA', name: 'Canadá', localName: 'Canada' },
  { code: 'ES', name: 'Espanha', localName: 'Spain' },
  { code: 'FR', name: 'França', localName: 'France' },
  { code: 'IT', name: 'Itália', localName: 'Italy' },
  { code: 'PT', name: 'Portugal', localName: 'Portugal' },
  { code: 'PY', name: 'Paraguai', localName: 'Paraguay' },
  { code: 'TR', name: 'Turquia', localName: 'Turkey' },
  { code: 'BR', name: 'Brasil', localName: 'Brazil' },
  { code: 'TH', name: 'Tailândia', localName: 'Thailand' },
  { code: 'BE', name: 'Bélgica', localName: 'Belgium' },
  { code: 'OT', name: 'Outro', localName: 'Other' },
];