// hooks/i18n-client-provider.tsx
"use client";

import { useEffect } from "react";
import i18next from "@/i18n";
import { I18nextProvider } from "react-i18next";

export function I18nProvider({ 
  children, 
  locale 
}: { 
  children: React.ReactNode; 
  locale: string;
}) {
  useEffect(() => {
    if (i18next.language !== locale) {
      i18next.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <I18nextProvider i18n={i18next}>
      {children}
    </I18nextProvider>
  );
}