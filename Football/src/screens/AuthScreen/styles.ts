import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type AuthScreenStyles = {
  container: ViewStyle;
  text: TextStyle;
  signIn: TextStyle;
  inputs: TextStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<AuthScreenStyles>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {},
  title: {
    fontSize: 24,
    marginBottom: 40,
    textTransform: 'uppercase',
  },
  signIn: {
    backgroundColor: 'green',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 7,
    color: 'white',
    fontSize: 17,
  },
  inputs: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 50,
    marginBottom: 20,
    fontSize: 18,
    paddingHorizontal: 10,
  },
});
