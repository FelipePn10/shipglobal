// i18n.ts
import path from 'path'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

export const i18nConfig = {
  fallbackLng: 'en',
  supportedLngs: ['en', 'pt', 'es'],
  defaultNS: 'common',
  backend: {
    loadPath: path.resolve('./public/locales/{{lng}}/{{ns}}.json'),
  },
}

if (typeof window !== 'undefined') {
  i18next
    .use(Backend)
    .use(initReactI18next)
    .init(i18nConfig)
}

export default i18next