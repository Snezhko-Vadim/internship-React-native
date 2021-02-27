import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type HomeScreenStyles = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<HomeScreenStyles>({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  text: {},
});

export default styles;
