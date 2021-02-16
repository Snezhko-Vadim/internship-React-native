import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

import ColorSchemeSwitcher from '../../components/ColorSchemeSwitcher';
import styles from './styles';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <ColorSchemeSwitcher />
    </View>
  );
};

export default SettingsScreen;
