import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (language: string) => {},
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: React.ReactNode
  initialLanguage: string
}) {
  const [language, setLanguage] = useState(initialLanguage)

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}