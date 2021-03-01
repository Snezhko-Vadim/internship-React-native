export enum SETTINGS_STRINGS {
  SWITCH_COLOR_SCHEME = 'SWITCH_COLOR_SCHEME',
}
export enum AUTH_STRINGS {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export type AuthTokenType = {
  name: string;
  password: string;
};

export type SettingsActionType = {
  type: SETTINGS_STRINGS.SWITCH_COLOR_SCHEME;
};

export type AuthActionType = {
  type: AUTH_STRINGS;

  token?: AuthTokenType;
};
