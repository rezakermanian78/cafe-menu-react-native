import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { LanguageContext } from './LanguageContext';
import { ThemeContext } from './ThemeContext';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const texts = {
    fa: {
      mobile: 'شماره موبایل',
      password: 'رمز عبور',
      forgotPassword: 'فراموشی رمز عبور',
      signup: 'ثبت نام کنید',
    },
    en: {
      mobile: 'Mobile Number',
      password: 'Password',
      forgotPassword: 'Forgot Password?',
      signup: 'Sign Up',
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].mobile}</Text>
      <TextInput style={styles.input} placeholder={texts[language].mobile} placeholderTextColor="#aaa" />
      
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].password}</Text>
      <TextInput style={styles.input} placeholder={texts[language].password} placeholderTextColor="#aaa" secureTextEntry />
      
      <TouchableOpacity onPress={() => { /* Handle Login */ }} style={styles.button}>
        <Text style={styles.buttonText}>ورود</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => { /* Handle Forgot Password */ }}>
          <Text style={[styles.link, { color: theme.textColor }]}>{texts[language].forgotPassword}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.link, { color: theme.textColor }]}>{texts[language].signup}</Text>
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
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  link: {
    fontSize: 16,
  },
});

export default LoginScreen;
