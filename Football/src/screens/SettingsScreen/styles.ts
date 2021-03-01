import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type SettingsScreenStyles = {
  container: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<SettingsScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});
