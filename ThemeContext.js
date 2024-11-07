// ThemeContext.js
import React, { createContext, useState } from 'react';

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
  //buttonBackgroundColor: '#f0f0f0',
};

const darkTheme = {
  backgroundColor: '#000',
  textColor: '#fff',
  //buttonBackgroundColor: '#333',
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
