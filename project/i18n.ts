import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEN from './public/locales/en/common.json';
import commonPT from './public/locales/pt/common.json';
import commonES from './public/locales/es/common.json';

// Para carregamento estático dos recursos (melhor abordagem para Next.js)
const resources = {
  en: {
    common: commonEN
  },
  pt: {
    common: commonPT
  },
  es: {
    common: commonES
  }
};

const i18nConfig = {
  resources,
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt', 'es'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.NODE_ENV === 'development',
  detection: {
    order: ['path', 'cookie', 'htmlTag', 'navigator'],
    lookupFromPathIndex: 0,
    caches: ['cookie'],
  }
};

// Initialize i18next
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18next;