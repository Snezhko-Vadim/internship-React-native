import React from 'react';
import {Switch, View} from 'react-native';

export const ColorSchemeSwitcher: React.FC = ({
  colorSchemeSwitchAction,
  isEnabledDarkTheme,
}) => {
  return (
    <View>
      <Switch
        onValueChange={colorSchemeSwitchAction}
        value={isEnabledDarkTheme}
      />
    </View>
  );
};
