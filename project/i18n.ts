// i18n.ts
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Configuração base compartilhada
const i18nConfig = {
  fallbackLng: "pt",
  supportedLngs: ["en", "pt", "es"],
  defaultNS: "common",
  fallbackNS: "common",
  interpolation: {
    escapeValue: false,
  },
};

// Inicialização para o lado do cliente
export const initI18nClient = () => {
  return i18next
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) =>
        import(`@/public/locales/${language}/${namespace}.json`)
      )
    )
    .use(LanguageDetector)
    .init({
      ...i18nConfig,
      detection: {
        order: ["path", "cookie", "localStorage", "navigator"],
        lookupFromPathIndex: 0,
        caches: ["localStorage", "cookie"],
      },
      react: {
        useSuspense: false, // Desativa suspense no lado do cliente
      },
    });
};

// Para uso no lado do servidor
export async function getTranslation(lang: string | undefined, ns = "common") {
  const instance = i18next.createInstance();
  await instance
    .use(initReactI18next)
    .use(
      resourcesToBackend((language: string, namespace: string) =>
        import(`@/public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      ...i18nConfig,
      lng: lang,
      ns,
    });

  return {
    t: instance.getFixedT(lang || "pt", ns),
    i18n: instance,
  };
}

// Exporta a instância padrão para uso no cliente
const i18n = i18next;
initI18nClient(); // Inicializa automaticamente no lado do cliente
export default i18n;