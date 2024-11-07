import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LanguageContext } from './LanguageContext'; 
import { ThemeContext } from './ThemeContext'; 

const HotBarScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext); 

  const HotBar = [
    {
      id: '1',
      name: { fa: 'لاته', en: 'Latte' },
      price: language === 'fa' ? '50000 تومان' : '1 $',
      image: require('./assets/HotBars/latte.webp'),
    },
    {
      id: '2',
      name: { fa: 'اسپرسو', en: 'Espresso' },
      price: language === 'fa' ? '55000 تومان' : '1 $',
      image: require('./assets/HotBars/Espresso.webp'),
    },
    {
      id: '3',
      name: { fa: 'وایت چاکلت', en: 'White Chocolate' },
      price: language === 'fa' ? '110000 تومان' : '2 $',
      image: require('./assets/HotBars/White chocolate.webp'),
    },
    {
      id: '4',
      name: { fa: 'هات چاکلت', en: 'Hot Chocolate' },
      price: language === 'fa' ? '110000 تومان' : '2 $',
      image: require('./assets/HotBars/hot chocolate.webp'),
    },
  ];

  // متون عنوان
  const texts = {
    fa: { title: 'بار گرم' },
    en: { title: 'HotBar' },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].title}</Text>
      
      <FlatList
        data={HotBar}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.hotbarItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.hotbarName, { color: theme.textColor }]}>
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
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  hotbarItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  hotbarName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
  },
});

export default HotBarScreen;
