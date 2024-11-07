import React, { createContext, useState } from 'react';
import { View, Text } from 'react-native';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fa' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <View>
        <Text>Current Language: {language}</Text> {/* این متن باید درون کامپوننت <Text> باشد */}
        {children}
      </View>
    </LanguageContext.Provider>
  );
};
