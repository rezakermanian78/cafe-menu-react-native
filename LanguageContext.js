import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fa'); // زبان پیش‌فرض فارسی

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'fa' ? 'en' : 'fa'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
