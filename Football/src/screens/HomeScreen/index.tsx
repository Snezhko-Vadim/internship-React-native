import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { RootState } from './types';

export const HomeScreen: FC = () => {
  const { colors } = useTheme();
  const token = useSelector((state: RootState) => state.authReducer.userToken);
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Home</Text>
      <Text style={{ color: colors.text }}>Hello, {token.name}</Text>
    </View>
  );
};
