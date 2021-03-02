import { CompetitionsInitialStateType } from './types';
import { FetchCompetitionsActionType, FETCH_COMPETITIONS_STRINGS } from '@root/actions/types';

const competitionsInitialState: CompetitionsInitialStateType = {
  isLoading: false,
  data: undefined,
  error: undefined,
};

export const competitionsReducer = (
  state = competitionsInitialState,
  action: FetchCompetitionsActionType,
) => {
  switch (action.type) {
    case FETCH_COMPETITIONS_STRINGS.FETCH_COMPETITIONS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case FETCH_COMPETITIONS_STRINGS.FETCH_COMPETITIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_COMPETITIONS_STRINGS.FETCH_COMPETITIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
  }
  return state;
};
