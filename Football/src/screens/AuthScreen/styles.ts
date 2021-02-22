import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type AuthScreenStyles = {
  container: ViewStyle;
  text: TextStyle;
};

export const styles = StyleSheet.create<AuthScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});
