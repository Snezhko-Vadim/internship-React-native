import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@root/reducers/types';
import { fetchCompetitions } from '@root/actions/fetchCompetitionsActions';
import { HomeScreenView } from './HomeScreenView';
import { Loader } from '@root/components/Loader';

export const HomeScreen: FC = () => {
  const token = useSelector((state: RootState) => state.authReducer.userToken);
  const data = useSelector((state: RootState) => state.competitionsReducer.data);
  const isLoading = useSelector((state: RootState) => state.competitionsReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  const onPressListItem = (competitionId: string) => {
    console.log(competitionId);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <HomeScreenView token={token} data={data} onPressListItem={onPressListItem} />
  );
};
