import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LanguageContext } from './LanguageContext'; 
import { ThemeContext } from './ThemeContext'; 

const MenuScreen = () => {
  const navigation = useNavigation();
  const { language } = useContext(LanguageContext); 
  const { theme } = useContext(ThemeContext); 

  // متون بر اساس زبان انتخاب شده
  const texts = {
    fa: {
      title: 'منو',
      pizza: 'پیتزا',
      burger: 'برگر',
      coldBar: 'بار سرد',
      hotBar: 'بار گرم',
    },
    en: {
      title: 'Menu',
      pizza: 'Pizza',
      burger: 'Burger',
      coldBar: 'Cold Bar',
      hotBar: 'Hot Bar',
    },
  };

  const images = {
    pizza: require('./assets/Pizza.webp'),
    burger: require('./assets/Burger.webp'),
    coldBar: require('./assets/ColdBar.webp'),
    hotBar: require('./assets/HotBar.webp'),
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].title}</Text>
      
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: theme.buttonBackgroundColor }]} 
          onPress={() => navigation.navigate('Pizza')}>
          <Image source={images.pizza} style={styles.menuImage} />
          <Text style={[styles.menuText, { color: theme.textColor }]}>{texts[language].pizza}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: theme.buttonBackgroundColor }]} 
          onPress={() => navigation.navigate('Burger')}>
          <Image source={images.burger} style={styles.menuImage} />
          <Text style={[styles.menuText, { color: theme.textColor }]}>{texts[language].burger}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: theme.buttonBackgroundColor }]} 
          onPress={() => navigation.navigate('ColdBar')}>
          <Image source={images.coldBar} style={styles.menuImage} />
          <Text style={[styles.menuText, { color: theme.textColor }]}>{texts[language].coldBar}</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.menuItem, { backgroundColor: theme.buttonBackgroundColor }]} 
          onPress={() => navigation.navigate('HotBar')}>
          <Image source={images.hotBar} style={styles.menuImage} />
          <Text style={[styles.menuText, { color: theme.textColor }]}>{texts[language].hotBar}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  menuItem: {
    width: '45%', 
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center', 
    marginBottom: 10, 
  },
  menuImage: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MenuScreen;
