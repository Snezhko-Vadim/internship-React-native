import React from 'react';
import { AuthorisationTokenType } from '../../actions/types';

export { AuthorisationTokenType };

export type AuthenticationScreenViewPropsType = {
  signInAction: any;
  onChangeName: React.Dispatch<React.SetStateAction<string>>;
  onChangePass: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  password: string;
};
