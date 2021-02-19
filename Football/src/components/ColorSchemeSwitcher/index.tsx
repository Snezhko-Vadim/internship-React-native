import React from 'react';
import { Switch, View } from 'react-native';
import { ColorSchemeSwitcherPropsType } from './types';

export const ColorSchemeSwitcher: React.FC<ColorSchemeSwitcherPropsType> = ({
  colorSchemeSwitchAction,
  isEnabledDarkTheme,
}) => {
  return (
    <View>
      <Switch onValueChange={colorSchemeSwitchAction} value={isEnabledDarkTheme} />
    </View>
  );
};
