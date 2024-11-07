import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageProvider, LanguageContext } from './LanguageContext';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import AccountScreen from './AccountScreen';
import StoreScreen from './StoreScreen';
import MenuScreen from './MenuScreen';
import PizzaScreen from './PizzaScreen';
import BurgerScreen from './BurgerScreen';
import ColdBarScreen from './ColdBarScreen';
import HotBarScreen from './HotBarScreen';
import LoginScreen from './LoginScreen'; 
import SignupScreen from './SignupScreen'; 
import AboutUsScreen from './AboutUsScreen'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </LanguageProvider>
  );
};

const TabNavigator = () => {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  const texts = {
    fa: {
      menu: 'منو',
      store: 'فروشگاه',
      account: 'حساب',
    },
    en: {
      menu: 'Menu',
      store: 'Store',
      account: 'Account',
    },
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Menu') {
            iconName = 'menu-outline';
          } else if (route.name === 'Store') {
            iconName = 'storefront-outline';
          } else if (route.name === 'Account') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.textColor,
        tabBarInactiveTintColor: theme === 'light' ? '#808080' : theme.buttonBackgroundColor,
        tabBarStyle: { backgroundColor: theme.backgroundColor },
      })}
    >
      <Tab.Screen 
        name="Menu" 
        component={MenuStack} 
        options={{ tabBarLabel: texts[language].menu }} 
      />
      <Tab.Screen 
        name="Store" 
        component={StoreScreen} 
        options={{ tabBarLabel: texts[language].store }} 
      />
      <Tab.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{ tabBarLabel: texts[language].account }} 
      />
    </Tab.Navigator>
  );
};

const MenuStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainMenu" component={MenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Pizza" component={PizzaScreen} options={{ title: 'پیتزا' }} />
      <Stack.Screen name="Burger" component={BurgerScreen} options={{ title: 'برگر' }} />
      <Stack.Screen name="ColdBar" component={ColdBarScreen} options={{ title: 'بار سرد' }} />
      <Stack.Screen name="HotBar" component={HotBarScreen} options={{ title: 'بار گرم' }} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'ورود' }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'ثبت نام' }} />
      <Stack.Screen name="AboutUs" component={AboutUsScreen} options={{ title: 'درباره ما' }} />
    </Stack.Navigator>
  );
};

export default App;
