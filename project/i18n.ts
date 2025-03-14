import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const i18nConfig = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt', 'es'],
  defaultNS: 'common',
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  interpolation: {
    escapeValue: false,
  },
  debug: process.env.NODE_ENV === 'development',
  preload: ['en', 'pt', 'es'],
  detection: {
    order: ['path', 'cookie', 'htmlTag', 'navigator'],
    lookupFromPathIndex: 0,
    caches: ['cookie'],
  },
  requestOptions: {
    cache: 'no-store',
  },
};

// Initialize i18next
i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18next;