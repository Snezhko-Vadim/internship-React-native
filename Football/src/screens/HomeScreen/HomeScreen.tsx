import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';

const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Home</Text>
    </View>
  );
};

export default HomeScreen;
