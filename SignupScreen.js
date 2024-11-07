import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LanguageContext } from './LanguageContext';
import { ThemeContext } from './ThemeContext';

const SignupScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const texts = {
    fa: {
      mobile: 'شماره موبایل',
      password: 'رمز عبور',
      signup: 'ثبت نام',
    },
    en: {
      mobile: 'Mobile Number',
      password: 'Password',
      signup: 'Sign Up',
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].mobile}</Text>
      <TextInput style={styles.input} placeholder={texts[language].mobile} placeholderTextColor="#aaa" />

      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].password}</Text>
      <TextInput style={styles.input} placeholder={texts[language].password} placeholderTextColor="#aaa" secureTextEntry />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{texts[language].signup}</Text>
      </TouchableOpacity>
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
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignupScreen;
