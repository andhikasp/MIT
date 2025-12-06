'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Locale, translations } from '@/lib/translations'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
)

const STORAGE_KEY = 'moxelle-locale'
const defaultLocale: Locale = 'id'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const saved =
      typeof window !== 'undefined'
        ? (localStorage.getItem(STORAGE_KEY) as Locale | null)
        : null
    if (saved === 'id' || saved === 'en') {
      setLocaleState(saved)
    }
  }, [])

  const setLocale = (loc: Locale) => {
    setLocaleState(loc)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, loc)
    }
  }

  const t = useMemo(() => {
    return (key: string) => translations[locale][key] ?? translations.id[key] ?? key
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
    }),
    [locale, setLocale, t]
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

