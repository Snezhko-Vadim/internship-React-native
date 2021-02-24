import React, { FC } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { styles } from './styles';
import { AuthScreenViewPropsType } from './types';

export const AuthScreenView: FC<AuthScreenViewPropsType> = (props) => {
  const { signInAction, onChangeName, onChangePass, name, password } = props;
  return (
    <View style={styles.container}>
      <Text>AuthenticationScreen</Text>
      <TextInput placeholder='Username' onChangeText={onChangeName} />
      <TextInput placeholder='Password' onChangeText={onChangePass} secureTextEntry />
      <Button
        title='Sign in'
        onPress={() => signInAction('SIGN_IN', { name: name, password: password })}
      />
    </View>
  );
};
