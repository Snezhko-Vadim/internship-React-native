import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';

import { useSelector } from 'react-redux';

export const HomeScreen = () => {
  const { colors } = useTheme();
  const token = useSelector((state) => state.authReducer.userToken);
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Home</Text>
      <Text style={{ color: colors.text }}>Hello, {token.name}</Text>
    </View>
  );
};
