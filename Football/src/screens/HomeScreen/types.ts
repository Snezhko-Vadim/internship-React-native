import { AuthorisationTokenType } from '../../actions/types';

export type RootState = {
  authReducer: { userToken: AuthorisationTokenType };
};
