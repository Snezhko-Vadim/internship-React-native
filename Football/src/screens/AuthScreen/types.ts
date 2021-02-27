import { AuthTokenType, AuthActionType } from 'actions/types';

export { AuthTokenType };

export type AuthScreenViewPropsType = {
  onChangeName: (text: string) => void;
  onChangePass: (text: string) => void;
  signInAction(): AuthActionType;
};
