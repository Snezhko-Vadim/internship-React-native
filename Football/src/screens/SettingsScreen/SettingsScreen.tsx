import React from 'react';
import { View, Text } from 'react-native';

import ColorSchemeSwitcher from '../../components/ColorSchemeSwitcher';
import styles from './styles';
import { useTheme } from '@react-navigation/native';

const SettingsScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Settings</Text>
      <ColorSchemeSwitcher />
    </View>
  );
};

export default SettingsScreen;
