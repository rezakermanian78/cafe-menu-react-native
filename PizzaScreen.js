import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LanguageContext } from './LanguageContext'; 
import { ThemeContext } from './ThemeContext'; 

const PizzaScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext); 

  const pizzas = [
    {
      id: '1',
      name: { fa: 'پیتزا مارگاریتا', en: 'Margherita Pizza' },
      price: language === 'fa' ? '200000 تومان' : '4 $ ',
      image: require('./assets/Pizza/margherita.webp'), // مسیر عکس پیتزا
    },
    {
      id: '2',
      name: { fa: 'پیتزا پپرونی', en: 'Pepperoni Pizza' },
      price: language === 'fa' ? '400000 تومان' : '8 $',
      image: require('./assets/Pizza/peperoni.webp'), // مسیر عکس پیتزا
    },
    {
      id: '3',
      name: { fa: 'پیتزا سبزیجات', en: 'Veggie Pizza' },
      price: language === 'fa' ? '200000 تومان' : '4 $',
      image: require('./assets/Pizza/sabzijat.webp'), // مسیر عکس پیتزا
    },
    {
      id: '4',
      name: { fa: 'پیتزا چهار پنیر', en: 'Four Cheese Pizza' },
      price: language === 'fa' ? '400000 تومان' : '8 $',
      image: require('./assets/Pizza/chaharfasl.webp'), // مسیر عکس پیتزا
    },
    /*
    {
      id: '5',
      name: { fa: 'پیتزا تند', en: 'Spicy Pizza' },
      price: language === 'fa' ? '52000 تومان' : '52000 Toman',
      image: require('./assets/Pizza/mekzik.webp'), // مسیر عکس پیتزا
    },
    */
  ];

  const texts = {
    fa: {
      title: 'پیتزا',
    },
    en: {
      title: 'Pizza ',
    },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].title}</Text>
      
      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        numColumns={2} // تنظیم تعداد ستون‌ها
        renderItem={({ item }) => (
          <View style={styles.pizzaItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.pizzaName, { color: theme.textColor }]}>
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
  pizzaItem: {
    flex: 1,
    margin: 10, 
    alignItems: 'center',
  },
  image: {
    width: '100%', 
    height: 160,
    borderRadius: 10,
  },
  pizzaName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
  },
});

export default PizzaScreen;
