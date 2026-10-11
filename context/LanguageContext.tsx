'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import arDict from '@/dictionaries/ar.json';
import enDict from '@/dictionaries/en.json';

type Language = 'ar' | 'en';
type Dictionary = typeof arDict;

interface LanguageContextType {
  lang: Language;
  t: Dictionary;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('elite_lang') as Language;
    if (saved === 'ar' || saved === 'en') {
      setLangState(saved);
      document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = saved;
      if (saved === 'ar') {
        document.documentElement.classList.add('font-arabic');
        document.documentElement.classList.remove('font-sans');
      } else {
        document.documentElement.classList.add('font-sans');
        document.documentElement.classList.remove('font-arabic');
      }
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('elite_lang', newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
    if (newLang === 'ar') {
      document.documentElement.classList.add('font-arabic');
      document.documentElement.classList.remove('font-sans');
    } else {
      document.documentElement.classList.add('font-sans');
      document.documentElement.classList.remove('font-arabic');
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const t = lang === 'ar' ? arDict : enDict;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
