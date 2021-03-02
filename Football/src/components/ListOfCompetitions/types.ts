import { FetchCompetitionsDataType } from '@root/actions/types';

export type ListOfCompetitionsPropsType = {
  competitionsData: FetchCompetitionsDataType | undefined;
  onPressFunction: (competitionId: string) => void;
};
