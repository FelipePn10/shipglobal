import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const i18nConfig = {
  fallbackLng: 'en', // Default language if detection fails
  supportedLngs: ['en', 'pt', 'es'], // Supported languages
  defaultNS: 'common', // Default namespace
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
  },
};

// Initialize i18next
i18next
  .use(Backend)
  .use(LanguageDetector) // Detect language from URL, cookie, etc.
  .use(initReactI18next) // Bind i18next to react-i18next
  .init({
    ...i18nConfig,
    debug: process.env.NODE_ENV === 'development', // Enable debug logs in development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    preload: ['en', 'pt', 'es'], // Preload all supported languages
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'navigator'], // Order of language detection
      lookupFromPathIndex: 0, // Use the first segment of the URL (e.g., /en/price)
      caches: ['cookie'], // Cache the language in a cookie
    },
    backend: {
      ...i18nConfig.backend,
      requestOptions: {
        cache: 'no-store', // Avoid caching issues
      },
    },
  });

export default i18next;