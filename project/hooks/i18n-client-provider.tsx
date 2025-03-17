"use client";

import { useEffect, useState, ReactNode } from "react";
import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { CookiesProvider, useCookies } from "react-cookie";

// Inicialize o i18next no lado do cliente
i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) =>
      import(`../public/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    lng: "pt",
    fallbackLng: "en",
    ns: ["common"],
    defaultNS: "common",
    react: { useSuspense: false },
  });

interface I18nProviderProps {
  children: ReactNode;
  locale: string;
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if (locale) {
      i18next.changeLanguage(locale);
    }
  }, [locale]);
  
  // Não usamos cookies para evitar erro de hydration
  // Apenas renderizamos quando o componente estiver montado
  if (!mounted) {
    return <>{children}</>;
  }
  
  return (
    <CookiesProvider>
      {children}
    </CookiesProvider>
  );
}

export function useTranslation(ns: string = "common") {
  return useTranslationOrg(ns);
}