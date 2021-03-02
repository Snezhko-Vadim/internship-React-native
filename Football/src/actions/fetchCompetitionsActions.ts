import {
  FETCH_COMPETITIONS_STRINGS,
  CompetitionsDataType,
  CompetitionsErrorType,
  CompetitionType,
} from './types';

const fetchCompetitionsLoaded = (data: CompetitionsDataType) => {
  return {
    type: FETCH_COMPETITIONS_STRINGS.FETCH_COMPETITIONS_SUCCESS,
    data: data,
  };
};

const fetchCompetitionsRequested = () => {
  return {
    type: FETCH_COMPETITIONS_STRINGS.FETCH_COMPETITIONS_REQUEST,
  };
};

const fetchCompetitionsFailure = (error: CompetitionsErrorType) => {
  return {
    type: FETCH_COMPETITIONS_STRINGS.FETCH_COMPETITIONS_FAILURE,
    error: error,
  };
};

export const fetchCompetitions = () => {
  return (dispatch) => {
    dispatch(fetchCompetitionsRequested());
    const availableCompetitions = [
      2000,
      2001,
      2002,
      2003,
      2013,
      2014,
      2015,
      2016,
      2017,
      2018,
      2019,
      2021,
    ];
    return fetch('https://api.football-data.org/v2/competitions/', {
      headers: {
        'X-Auth-Token': '7d9c12f5860048e2b3a48176691a5ece',
      },
    })
      .then((response) => response.json())
      .then(
        (response) => {
          let availableCompetitionsArray = [];
          for (let i = 0; i < availableCompetitions.length; i++) {
            availableCompetitionsArray.push(
              response.competitions.find(
                (competition: CompetitionType) => competition.id === availableCompetitions[i],
              ),
            );
          }
          dispatch(fetchCompetitionsLoaded(availableCompetitionsArray));
        },
        (error) => {
          dispatch(fetchCompetitionsFailure(error));
        },
      );
  };
};
