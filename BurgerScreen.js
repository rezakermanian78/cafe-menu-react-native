import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LanguageContext } from './LanguageContext'; 
import { ThemeContext } from './ThemeContext'; 

const BurgerScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext); 

  const Burger = [
    {
      id: '1',
      name: { fa: 'برگر کلاسیک', en: 'Classic Burger' },
      price: language === 'fa' ? '200000 تومان' : '4 $',
      image: require('./assets/Burgers/clasicburger.webp'),
    },
    {
      id: '2',
      name: { fa: 'دوبل برگر', en: 'Double Burger' },
      price: language === 'fa' ? '400000 تومان' : '8 $',
      image: require('./assets/Burgers/dobleburger.webp'),
    },
    {
      id: '3',
      name: { fa: 'برگر مرغ', en: 'Chicken Burger' },
      price: language === 'fa' ? '150000 تومان' : '3 $',
      image: require('./assets/Burgers/morqburger.webp'),
    },
  ];

  const texts = {
    fa: { title: 'برگر' },
    en: { title: 'Burger' },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].title}</Text>
      
      <FlatList
        data={Burger}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.burgerItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.burgerName, { color: theme.textColor }]}>
              {language === 'fa' ? item.name.fa : item.name.en}
            </Text>
            <Text style={[styles.price, { color: theme.textColor }]}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  burgerItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  burgerName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
  },
});

export default BurgerScreen;
