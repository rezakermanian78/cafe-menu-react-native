import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LanguageContext } from './LanguageContext';
import { ThemeContext } from './ThemeContext';

const AboutUsScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const texts = {
    fa: {
      address: 'نشانی : آذربایجانشرقی ؛ تبریز',
      phone: 'تلفن تماس: 09145201378',
    },
    en: {
      address: 'Address: Azarbayjan Shargi ; Tabriz',
      phone: 'Phone: 09145201378',
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].address}</Text>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end', // راست چین کردن محتوا
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'right', // راست چین کردن متن
  },
});

export default AboutUsScreen;
