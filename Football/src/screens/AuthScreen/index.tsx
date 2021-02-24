import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AuthScreenView } from './AuthScreenView';
import { AuthTokenType } from './types';

export const AuthScreen: FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signInAction = (type: 'SIGN_IN', token: AuthTokenType) =>
    dispatch({ type: type, token: token });

  return (
    <AuthScreenView
      signInAction={signInAction}
      onChangeName={setUsername}
      onChangePass={setPassword}
      name={username}
      password={password}
    />
  );
};
