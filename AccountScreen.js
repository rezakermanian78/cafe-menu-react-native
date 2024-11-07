import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LanguageContext } from './LanguageContext';
import { ThemeContext } from './ThemeContext';
import { useNavigation } from '@react-navigation/native';

const AccountScreen = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const texts = {
    fa: {
      title: 'تنظیمات حساب',
      changeLanguage: 'تغییر زبان',
      loginSignup: 'ورود / ثبت نام',
      aboutUs: 'درباره ما',
      changeTheme: 'تغییر تم',
    },
    en: {
      title: 'Account Settings',
      changeLanguage: 'Change Language',
      loginSignup: 'Login / Signup',
      aboutUs: 'About Us',
      changeTheme: 'Change Theme',
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].title}</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: theme.buttonBackgroundColor }]} 
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Ionicons name="person-outline" size={24} color={theme.textColor} />
          <Text style={[styles.buttonText, { color: theme.textColor }]}>{texts[language].loginSignup}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackgroundColor }]} 
          onPress={() => navigation.navigate('AboutUs')} // تغییر مسیر به AboutUs
        >
          <Ionicons name="information-circle-outline" size={24} color={theme.textColor} />
          <Text style={[styles.buttonText, { color: theme.textColor }]}>{texts[language].aboutUs}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackgroundColor }]} onPress={toggleLanguage}>
          <Ionicons name="language-outline" size={24} color={theme.textColor} />
          <Text style={[styles.buttonText, { color: theme.textColor }]}>{texts[language].changeLanguage}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: theme.buttonBackgroundColor }]} onPress={toggleTheme}>
          <Ionicons name="moon-outline" size={24} color={theme.textColor} />
          <Text style={[styles.buttonText, { color: theme.textColor }]}>{texts[language].changeTheme}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default AccountScreen;
