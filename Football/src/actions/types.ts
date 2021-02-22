export const SIGN_IN = 'SIGN_IN';
export const RESTORE_TOKEN = 'RESTORE_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';
export const SWITCH_COLOR_SCHEME = 'SWITCH_COLOR_SCHEME';

export type AuthTokenType = {
  name: string;
  password: string;
};

export type SettingsActionType = {
  type: typeof SWITCH_COLOR_SCHEME;
};

export type AuthActionType = {
  type: typeof SIGN_IN | typeof SIGN_OUT | typeof RESTORE_TOKEN;
  token?: AuthTokenType;
};
