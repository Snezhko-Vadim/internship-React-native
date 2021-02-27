import React, { FC } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { AuthScreenViewPropsType } from './types';

export const AuthScreenView: FC<AuthScreenViewPropsType> = (props) => {
  const { signInAction, onChangeName, onChangePass } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Football'}</Text>
      <TextInput onChangeText={onChangeName} placeholder='Username' style={styles.inputs} />
      <TextInput
        onChangeText={onChangePass}
        placeholder='Password'
        secureTextEntry
        style={styles.inputs}
      />
      <TouchableOpacity onPress={signInAction}>
        <Text style={styles.signIn}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};
