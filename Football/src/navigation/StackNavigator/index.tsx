import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {AuthenticationScreen} from '../../screens/AuthenticationScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const userToken = useSelector((state) => state['authReducer'].userToken);
  return (
    <Stack.Navigator>
      {userToken == null ? (
        <Stack.Screen
          name={'Authentication'}
          component={AuthenticationScreen}
        />
      ) : (
        <Stack.Screen
          name={'bottomTabNavigator'}
          component={BottomTabNavigator}
        />
      )}
    </Stack.Navigator>
  );
};