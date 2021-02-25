import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AuthScreenView } from './AuthScreenView';
import { allActions } from 'actions';

export const AuthScreen: FC = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signInAction = () =>
    dispatch(allActions.authorisationActions.signIn({ password: password, name: username }));

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
