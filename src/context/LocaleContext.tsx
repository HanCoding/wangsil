import { createContext, useContext } from 'react'
import ko from '../locales/ko'
import ja from '../locales/ja'
import en from '../locales/en'
import zh from '../locales/zh'
import vi from '../locales/vi'
import type { Translations } from '../locales/ko'
import type { ReactNode } from 'react'

export type Locale = 'ko' | 'ja' | 'en' | 'zh' | 'vi'

const resources: Record<Locale, Translations> = { ko, ja, en, zh, vi }

type LocaleContextType = { locale: Locale; t: Translations }

const LocaleContext = createContext<LocaleContextType>({ locale: 'ko', t: ko })

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <LocaleContext.Provider value={{ locale, t: resources[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocaleContext(): LocaleContextType {
  return useContext(LocaleContext)
}

export function useT(): Translations {
  return useContext(LocaleContext).t
}

export function useLocale(): Locale {
  return useContext(LocaleContext).locale
}
