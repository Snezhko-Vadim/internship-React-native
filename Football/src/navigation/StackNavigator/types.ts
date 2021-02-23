import { AuthTokenType } from '../../actions/types';

export type rootState = {
  authReducer: { userToken: AuthTokenType };
};
