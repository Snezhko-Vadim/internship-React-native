import React, { FC, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles';
import { RootState } from '@root/reducers/types';
import { ListOfCompetitions } from '@root/components/ListOfCompetitions';
import { fetchCompetitions } from '@root/actions/fetchCompetitionsActions';

export const HomeScreen: FC = () => {
  const { colors } = useTheme();
  const token = useSelector((state: RootState) => state.authReducer.userToken);
  const data = useSelector((state: RootState) => state.competitionsReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompetitions());
  }, [dispatch]);

  const onPressListItem = (competitionId: string) => {
    console.log(competitionId);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>{'Home'}</Text>
      {token !== undefined ? (
        <Text style={{ color: colors.text }}>{`Hello, ${token.name}`}</Text>
      ) : (
        <Text>{'Please, log in'}</Text>
      )}
      <ListOfCompetitions competitionsData={data} onPressFunction={onPressListItem} />
    </View>
  );
};
