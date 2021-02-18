import React from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {styles} from './styles';

export const AuthenticationScreenView: React.FC = ({
  signInAction,
  onChangeName,
  onChangePass,
  name,
  password,
}) => {
  return (
    <View style={styles.container}>
      <Text>AuthenticationScreen</Text>
      <TextInput placeholder="Username" onChangeText={onChangeName} />
      <TextInput
        placeholder="Password"
        onChangeText={onChangePass}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() =>
          signInAction('SIGN_IN', {name: name, password: password})
        }
      />
    </View>
  );
};
