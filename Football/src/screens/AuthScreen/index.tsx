import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { AuthScreenView } from './AuthScreenView';
import { allActions } from '@root/actions';

export const AuthScreen: FC = () => {
  const dispatch = useDispatch();
  const [name, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const signInAction = () => dispatch(allActions.authorisationActions.signIn({ password, name }));

  return (
    <AuthScreenView
      onChangeName={setUsername}
      onChangePass={setPassword}
      signInAction={signInAction}
    />
  );
};
