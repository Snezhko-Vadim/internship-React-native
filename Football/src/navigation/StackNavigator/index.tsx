import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigator } from 'navigation/BottomTabNavigator';
import { AuthScreen } from 'screens/AuthScreen';
import { RootState } from 'reducers/types';

const Stack = createStackNavigator();

export const StackNavigator: FC = () => {
  const userToken = useSelector((state: RootState) => state.authReducer.userToken);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#277D38',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      {userToken === undefined ? (
        <Stack.Screen
          name={'Authentication'}
          component={AuthScreen}
          options={{
            title: 'Authentication',
          }}
        />
      ) : (
        <Stack.Screen name={'bottomTabNavigator'} component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
};
