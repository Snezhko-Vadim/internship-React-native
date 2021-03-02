import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@root/reducers/types';
import { fetchCompetitions } from '@root/actions/fetchCompetitionsActions';
import { HomeScreenView } from './HomeScreenView';

export const HomeScreen: FC = () => {
  const token = useSelector((state: RootState) => state.authReducer.userToken);
  const data = useSelector((state: RootState) => state.competitionsReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  const onPressListItem = (competitionId: string) => {
    console.log(competitionId);
  };

  return <HomeScreenView token={token} data={data} onPressListItem={onPressListItem} />;
};
