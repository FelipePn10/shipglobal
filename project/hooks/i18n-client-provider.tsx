"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initI18nClient } from "../i18n";

// Instância global do i18next
let i18nInstance = i18next;
let initialized = false;

if (!initialized) {
  initI18nClient();
  initialized = true;
}

// Interface ajustada para usar "locale" em vez de "lang"
interface I18nProviderProps {
  children: ReactNode;
  locale: string; // Alterado de "lang" para "locale" para corresponder ao uso no layout.tsx
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (i18nInstance.language !== locale) {
      i18nInstance.changeLanguage(locale); // Usando "locale" aqui
    }
    setMounted(true);
  }, [locale]); // Dependência ajustada para "locale"

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{children}</div>;
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      {children}
    </I18nextProvider>
  );
}