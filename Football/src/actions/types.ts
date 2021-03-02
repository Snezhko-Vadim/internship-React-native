export enum SETTINGS_STRINGS {
  SWITCH_COLOR_SCHEME = 'SWITCH_COLOR_SCHEME',
}
export enum AUTH_STRINGS {
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
}

export enum FETCH_COMPETITIONS_STRINGS {
  FETCH_COMPETITIONS_SUCCESS = 'FETCH_COMPETITIONS_SUCCESS',
  FETCH_COMPETITIONS_REQUEST = 'FETCH_COMPETITIONS_REQUESTED',
  FETCH_COMPETITIONS_FAILURE = 'FETCH_COMPETITIONS_FAILURE;',
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

export type CompetitionType = {
  area: any;
  code: any;
  currentSeason: any;
  emblemUrl: string | null;
  id: number;
  lastUpdated: string;
  name: string;
  numberOfAvailableSeasons: number;
  plan: any;
};

export type CompetitionsDataType = Array<CompetitionType>;
export type CompetitionsErrorType = string; // what type is it ?

export type FetchCompetitionsActionType = {
  type: FETCH_COMPETITIONS_STRINGS;

  data?: CompetitionsDataType;
  error?: CompetitionsErrorType;
};
