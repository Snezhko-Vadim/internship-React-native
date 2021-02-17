import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from '../TabNavigator';
import AuthenticationScreen from '../../screens/AuthenticationScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'bottomTabNavigator'} component={TabNavigator} />
      <Stack.Screen name={'Authentication'} component={AuthenticationScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
