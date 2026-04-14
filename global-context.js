
import { createContext, useMemo, useContext, useState } from 'react'

const GlobalContext = createContext(null)
const fallbackLocale = { name: 'English', short: 'en' }

export const GlobalProvider = ({ initialLocales, children }) => {
  const [locales, setLocales] = useState(initialLocales ?? [fallbackLocale])
  const [locale, setLocale] = useState(fallbackLocale)

  const selectedLocale = useMemo(() => {
    if (!locales?.length) {
      return fallbackLocale
    }
    return locales.find((el) => el.short === locale.short) ?? locales[0]
  }, [locales, locale.short])

  const value = useMemo(() => {
    return {
      locales,
      locale: selectedLocale,
      setLocales,
      setLocale
    }
  }, [locales, selectedLocale])

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider')
  }

  return {
    ...context
  }
}
