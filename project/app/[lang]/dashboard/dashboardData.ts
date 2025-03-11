// dashboardData.ts
export type CurrencyCode = 'EUR' | 'USD' | 'BRL' | 'CNY' | 'JPY' | 'AUD';

export const currencies: { code: CurrencyCode; name: string; symbol: string }[] = [
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
];

export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export const countryAddresses: { [key: string]: Address } = {
  'United States': {
    street: '123 Ship Global Blvd, Suite',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
  },
};

export const countries = [
  'United States',
  'United Kingdom',
  'China',
  'Japan',
  'Germany',
  'Australia',
  'Canada',
  'Spain',
  'France',
  'Italy',
  'Portugal',
  'Paraguay',
  'Turkey',
  'Brazil',
  'Thailand',
  'Belgium',
];

// Definindo languages como const para LanguageCode
export const languages = [
  { code: 'pt', name: 'Português' },
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'zh', name: '中文' },
] as const;

export type LanguageCode = typeof languages[number]['code'];

// Interface mutável para Language
export interface Language {
  code: string;
  name: string;
}

// Versão mutável de languages para componentes
export const mutableLanguages: Language[] = languages.map(lang => ({ ...lang }));

type Translation = {
    [key in LanguageCode]: string;
};

export interface Translations {
  [key: string]: Translation;
}

export const translations: Translations = {
  dashboard: { pt: 'Painel', es: 'Panel', en: 'Dashboard', fr: 'Tableau de bord', de: 'Dashboard', it: 'Pannello', zh: '仪表盘' },
  products: { pt: 'Produtos', es: 'Productos', en: 'Products', fr: 'Produits', de: 'Produkte', it: 'Prodotti', zh: '产品' },
  packages: { pt: 'Caixas', es: 'Paquetes', en: 'Packages', fr: 'Paquets', de: 'Pakete', it: 'Pacchetti', zh: '包裹' },
  services: { pt: 'Serviços', es: 'Servicios', en: 'Services', fr: 'Services', de: 'Dienste', it: 'Servizi', zh: '服务' },
  shipments: { pt: 'Envios', es: 'Envíos', en: 'Shipments', fr: 'Expéditions', de: 'Sendungen', it: 'Spedizioni', zh: '运输' },
  yourAddress: {
    pt: 'Seu Endereço para Compras',
    es: 'Su Dirección para Compras',
    en: 'Your Shopping Address',
    fr: 'Votre adresse d’achat',
    de: 'Ihre Einkaufsadresse',
    it: 'Il tuo indirizzo per gli acquisti',
    zh: '您的购物地址',
  },
  currencies: { pt: 'Cotações', es: 'Cotizaciones', en: 'Exchange Rates', fr: 'Taux de change', de: 'Wechselkurse', it: 'Tassi di cambio', zh: '汇率' },
  latestShipments: {
    pt: 'Últimos Envios',
    es: 'Últimos Envíos',
    en: 'Latest Shipments',
    fr: 'Dernières expéditions',
    de: 'Letzte Sendungen',
    it: 'Ultime spedizioni',
    zh: '最新运输',
  },
  selectCountry: {
    pt: 'Selecionar País',
    es: 'Seleccionar País',
    en: 'Select Country',
    fr: 'Sélectionner un pays',
    de: 'Land auswählen',
    it: 'Seleziona paese',
    zh: '选择国家',
  },
  myWallet: { pt: 'Minha Carteira', es: 'Mi Cartera', en: 'My Wallet', fr: 'Mon portefeuille', de: 'Meine Brieftasche', it: 'Il mio portafoglio', zh: '我的钱包' },
  myAccount: { pt: 'Minha Conta', es: 'Mi Cuenta', en: 'My Account', fr: 'Mon compte', de: 'Mein Konto', it: 'Il mio account', zh: '我的账户' },
  store: { pt: 'Loja', es: 'Tienda', en: 'Store', fr: 'Magasin', de: 'Geschäft', it: 'Negozio', zh: '商店' },
  purchaseGroup: {
    pt: 'Grupo de Compras',
    es: 'Grupo de Compras',
    en: 'Purchase Group',
    fr: 'Groupe d’achat',
    de: 'Kaufgruppe',
    it: 'Gruppo di acquisto',
    zh: '购买组',
  },
  contractedServices: {
    pt: 'Serviços Contratados',
    es: 'Servicios Contratados',
    en: 'Contracted Services',
    fr: 'Services sous contrat',
    de: 'Vertraglich vereinbarte Dienste',
    it: 'Servizi contrattati',
    zh: '签约服务',
  },
  mySuite: { pt: 'Minha Suite', es: 'Mi Suite', en: 'My Suite', fr: 'Ma suite', de: 'Meine Suite', it: 'La mia suite', zh: '我的套房' },
  freeStorage: {
    pt: 'dia(s) de armazenamento gratuito',
    es: 'día(s) de almacenamiento gratuito',
    en: 'day(s) of free storage',
    fr: 'jour(s) de stockage gratuit',
    de: 'Tag(e) kostenloser Lagerung',
    it: 'giorno(i) di stoccaggio gratuito',
    zh: '免费存储天数',
  },
  noShipments: {
    pt: 'Nenhum envio recente encontrado',
    es: 'No se encontraron envíos recientes',
    en: 'No recent shipments found',
    fr: 'Aucune expédition récente trouvée',
    de: 'Keine kürzlichen Sendungen gefunden',
    it: 'Nessuna spedizione recente trovata',
    zh: '未找到最近的运输',
  },
};