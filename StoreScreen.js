import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LanguageContext } from './LanguageContext'; 
import { ThemeContext } from './ThemeContext'; 

const StoreScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext); 

  
  const store = [
    {
      id: '1',
      name: { fa: 'دستگاه اسپرسو ساز', en: 'Espresso Machie' },
      price: language === 'fa' ? '25000000 تومان' : '50 $',
      image: require('./assets/Store/EspressoMachie.webp'),
    },
    {
      id: '2',
      name: { fa: 'آسیاب قهوه', en: 'Coffe Grinder' },
      price: language === 'fa' ? '15000000 تومان' : '300 $',
      image: require('./assets/Store/CoffeGrinder.webp'),
    },
    {
      id: '3',
      name: { fa: 'موکاپاد', en: 'Mokapad' },
      price: language === 'fa' ? '550000 تومان' : '10 $',
      image: require('./assets/Store/Mokapad.webp'),
    },
    {
      id: '4',
      name: { fa: 'پودر قهوه', en: 'Coffe Powder' },
      price: language === 'fa' ? '250000 تومان' : '5 $',
      image: require('./assets/Store/CoffePowder.webp'),
    },


  ];

  const texts = {
    fa: { title: 'فروشگاه' },
    en: { title: 'store' },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].title}</Text>
      
      <FlatList
        data={store}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.storeItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.storeName, { color: theme.textColor }]}>
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
  storeItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  storeName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
  },
});

export default StoreScreen;
