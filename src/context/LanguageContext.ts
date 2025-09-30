import { createContext } from 'react';

export type Language = 'TR' | 'EN';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'TR',
  setLanguage: () => {},
});
