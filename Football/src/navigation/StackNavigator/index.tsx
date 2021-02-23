import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from '../BottomTabNavigator';
import { AuthScreen } from '../../screens/AuthScreen';
import { rootState } from './types';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const userToken = useSelector((state: rootState) => state.authReducer.userToken);
  return (
    <Stack.Navigator>
      {userToken == null ? (
        <Stack.Screen name={'Authentication'} component={AuthScreen} />
      ) : (
        <Stack.Screen name={'bottomTabNavigator'} component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
};
