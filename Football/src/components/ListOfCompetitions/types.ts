import { CompetitionsDataType } from '@root/actions/types';

export type ListOfCompetitionsPropsType = {
  competitionsData: CompetitionsDataType | undefined;
  onPressListItem: (competitionId: string) => void;
};
