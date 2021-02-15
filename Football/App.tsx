import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  useEffect(() => {
    if (SplashScreen !== null) {
      SplashScreen.hide();
    }
  }, []);
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: styles.labelStyle,
          tabStyle: styles.tabStyle,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  labelStyle: { fontSize: 17 },
  tabStyle: { justifyContent: 'center', alignItems: 'center' },
});

export default App;
