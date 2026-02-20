import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations } from '@/i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tSub: (subcategory: string) => string;
  tSystemName: (systemId: string, systemName: string) => string;
  tBrandDesc: (brandId: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// System name key mapping from config system names to translation keys
const systemIdToKey: Record<string, string> = {
  'addressable': 'system.name.addressable',
  'conventional': 'system.name.conventional',
  'wireless': 'system.name.wireless',
  'linear-heat': 'system.name.linear-heat',
  'asd': 'system.name.asd',
  'firecell': 'system.name.firecell',
  'fusion': 'system.name.fusion',
  'smartcell': 'system.name.smartcell',
  'high-end-addressable': 'system.name.high-end-addressable',
  'pava': 'system.name.pava',
};

// For AirSense's ASD which uses a different display name
const systemNameOverrides: Record<string, Record<string, string>> = {
  'airsense': { 'asd': 'system.name.asd-full' },
  'edwards': { 'asd': 'system.name.asd-full' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? key;
  };

  const tSub = (subcategory: string): string => {
    const key = `subcategory.${subcategory}`;
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? subcategory;
  };

  const tSystemName = (systemId: string, _systemName: string): string => {
    // Check for brand-specific overrides
    const key = systemIdToKey[systemId] || '';
    if (!key) return _systemName;
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? _systemName;
  };

  const tBrandDesc = (brandId: string): string => {
    const key = `brand.desc.${brandId}`;
    const dict = translations[language] as Record<string, string>;
    return dict[key] ?? '';
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tSub, tSystemName, tBrandDesc }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
