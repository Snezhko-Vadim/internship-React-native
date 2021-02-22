import React from 'react';
import { AuthTokenType } from '../../actions/types';

export { AuthTokenType };

export type AuthScreenViewPropsType = {
  signInAction: (
    type: 'SIGN_IN',
    token: AuthTokenType,
  ) => { type: 'SIGN_IN'; token: AuthTokenType };
  onChangeName: React.Dispatch<React.SetStateAction<string>>;
  onChangePass: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  password: string;
};
