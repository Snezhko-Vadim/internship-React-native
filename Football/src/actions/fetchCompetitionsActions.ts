const FETCH_COMPETITIONS_SUCCESS = 'FETCH_COMPETITIONS_SUCCESS';
const FETCH_COMPETITIONS_REQUEST = 'FETCH_COMPETITIONS_REQUESTED';
const FETCH_COMPETITIONS_FAILURE = 'FETCH_COMPETITIONS_FAILURE;';

const fetchCompetitionsLoaded = (data) => {
  return {
    type: FETCH_COMPETITIONS_SUCCESS,
    data: data,
  };
};

const fetchCompetitionsRequested = () => {
  return {
    type: FETCH_COMPETITIONS_REQUEST,
  };
};

const fetchCompetitionsFailure = (error) => {
  return {
    type: FETCH_COMPETITIONS_FAILURE,
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
                (competition) => competition.id === availableCompetitions[i],
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
