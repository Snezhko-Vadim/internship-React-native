import { AuthTokenType } from '../../actions/types';

export type RootState = {
  authReducer: { userToken: AuthTokenType };
};
