import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type HomeScreenStyles = {
  container: ViewStyle;
  text: TextStyle;
};

const styles = StyleSheet.create<HomeScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
});

export default styles;
