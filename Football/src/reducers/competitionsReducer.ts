const competitionsInitialState = {
  isLoading: false,
  data: null,
  error: null,
};

export const competitionsReducer = (state = competitionsInitialState, action) => {
  switch (action.type) {
    case 'FETCH_COMPETITIONS_SUCCESS':
      return {
        ...state,
        data: action.data,
      };
    case 'FETCH_COMPETITIONS_REQUESTED':
      return {
        ...state,
        isLoading: true,
      };
    case 'FETCH_COMPETITIONS_FAILURE':
      return {
        ...state,
        error: action.error,
      };
  }
  return state;
};
