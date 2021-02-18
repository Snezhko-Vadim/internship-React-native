import React from 'react';
import {useDispatch} from 'react-redux';
import {AuthenticationScreenView} from './AuthenticationScreenView';

export const AuthenticationScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signInAction = (type, token) => dispatch({type: type, token: token});

  return (
    <AuthenticationScreenView
      signInAction={signInAction}
      onChangeName={setUsername}
      onChangePass={setPassword}
      name={username}
      password={password}
    />
  );
};
