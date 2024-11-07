import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { LanguageContext } from './LanguageContext';
import { ThemeContext } from './ThemeContext'; 

const ColdBarScreen = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext); 

  const ColdBar = [
    {
      id: '1',
      name: { fa: 'قهوه سرد دم', en: 'Cold Brew' },
      price: language === 'fa' ? '55000 تومان' : '1 $',
      image: require('./assets/ColdBars/ColdBrow.webp'),
    },
    {
      id: '2',
      name: { fa: 'لیموناد', en: 'Soda' },
      price: language === 'fa' ? '55000 تومان' : '1 $',
      image: require('./assets/ColdBars/Soda.webp'),
    },
    {
      id: '3',
      name: { fa: 'شیک بادام زمینی', en: 'Peanut Shake' },
      price: language === 'fa' ? '110000 تومان' : '2 $',
      image: require('./assets/ColdBars/Peanut Shake.webp'),
    },
    {
      id: '4',
      name: { fa: 'شیک توت فرنگی نوتلا', en: 'Nutella Shake' },
      price: language === 'fa' ? '110000 تومان' : '2 $',
      image: require('./assets/ColdBars/Strawberry Nutella Shake.webp'),
    },
  ];

  const texts = {
    fa: { title: 'بار سرد' },
    en: { title: 'ColdBar' },
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={[styles.title, { color: theme.textColor }]}>{texts[language].title}</Text>
      
      <FlatList
        data={ColdBar}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.coldbarItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.coldbarName, { color: theme.textColor }]}>
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
  coldbarItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
  coldbarName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  price: {
    fontSize: 15,
  },
});

export default ColdBarScreen;
