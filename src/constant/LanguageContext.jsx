import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [activeLang, setActiveLang] = useState('en'); // Set the initial language to 'en' (English)

  const handleLangClick = (lang) => {
    setActiveLang(lang);
  };

  return (
    <LanguageContext.Provider value={{ activeLang, handleLangClick }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);