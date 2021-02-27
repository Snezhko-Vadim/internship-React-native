import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { SettingsScreenViewPropsType } from './types';
import { ColorSchemeSwitcher } from 'components/ColorSchemeSwitcher';
import { useTheme } from '@react-navigation/native';

export const SettingsScreenView: FC<SettingsScreenViewPropsType> = (props) => {
  const { colorSchemeSwitchAction, isEnabledDarkTheme } = props;
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Settings</Text>
      <ColorSchemeSwitcher
        colorSchemeSwitchAction={colorSchemeSwitchAction}
        isEnabledDarkTheme={isEnabledDarkTheme}
      />
    </View>
  );
};
