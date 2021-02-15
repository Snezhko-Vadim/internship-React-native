import React, { useEffect } from 'react';
import { Switch, View } from 'react-native';
import { connect } from 'react-redux';
import { appStateType } from '../../store';
import { Dispatch } from 'react';
import { IColorSchemeSwitcherProps } from './types';

import { colorSchemeSwitch } from '../../actions/actions';

const ColorSchemeSwitcher: React.FC<IColorSchemeSwitcherProps> = ({
  isEnabledDarkTheme,
  colorSchemeSwitch,
}) => {
  useEffect(() => {
    console.log(isEnabledDarkTheme);
  });
  return (
    <View>
      <Switch onValueChange={colorSchemeSwitch} value={isEnabledDarkTheme} />
    </View>
  );
};

const mapStateToProps = (state: appStateType) => {
  return {
    isEnabledDarkTheme: state.settingsReducer.isEnabledDarkTheme,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    colorSchemeSwitch: () => dispatch(colorSchemeSwitch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorSchemeSwitcher);
