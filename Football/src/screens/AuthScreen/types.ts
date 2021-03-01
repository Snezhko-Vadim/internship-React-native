import { AuthTokenType, AuthActionType } from '@root/actions/types';

export { AuthTokenType };

export type AuthScreenViewPropsType = {
  onChangeName: (text: string) => void;
  onChangePass: (text: string) => void;
  signInAction(): AuthActionType;
};
