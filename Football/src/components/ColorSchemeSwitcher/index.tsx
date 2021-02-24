import React, { FC } from 'react';
import { Switch, View } from 'react-native';
import { ColorSchemeSwitcherPropsType } from './types';

export const ColorSchemeSwitcher: FC<ColorSchemeSwitcherPropsType> = (props) => {
  const { colorSchemeSwitchAction, isEnabledDarkTheme } = props;
  return (
    <View>
      <Switch onValueChange={colorSchemeSwitchAction} value={isEnabledDarkTheme} />
    </View>
  );
};
