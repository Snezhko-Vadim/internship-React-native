import { AuthTokenType, CompetitionsDataType } from '@root/actions/types';

export type HomeScreenViewPropsType = {
  token: AuthTokenType | undefined;
  data: CompetitionsDataType | undefined;
  onPressListItem: (competitionId: string) => void;
};
