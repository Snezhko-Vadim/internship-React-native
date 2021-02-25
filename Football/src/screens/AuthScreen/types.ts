import React from 'react';
import { AuthTokenType, AuthActionType } from 'actions/types';

export { AuthTokenType };

export type AuthScreenViewPropsType = {
  signInAction(): AuthActionType;
  onChangeName: React.Dispatch<React.SetStateAction<string>>;
  onChangePass: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  password: string;
};
