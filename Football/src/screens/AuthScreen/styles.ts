import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

type AuthScreenStyles = {
  container: ViewStyle;
  inputs: TextStyle;
  signIn: TextStyle;
  text: TextStyle;
  title: TextStyle;
};

export const styles = StyleSheet.create<AuthScreenStyles>({
  container: {
    alignItems: 'center',
    flex: 1,
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
    borderRadius: 7,
    color: 'white',
    fontSize: 17,
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  inputs: {
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 18,
    height: 50,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 200,
  },
});
