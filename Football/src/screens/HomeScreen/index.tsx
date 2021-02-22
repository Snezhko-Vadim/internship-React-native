import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { allActions } from '../../actions';
import { ListOfCompetitions } from '../../components/ListOfCompetitions';
import styles from './styles';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.fetchCompetitionsActions.fetchCompetitions());
  }, [dispatch]);
  const { colors } = useTheme();
  const token = useSelector((state) => state.authReducer.userToken);
  const competitionsData = useSelector((state) => state.competitionsReducer.data);
  const onPress = (idOfCompetition) => {
    console.log(`touched competition id: ${idOfCompetition}`);
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Hello, {token.name}</Text>
      <ListOfCompetitions competitionsData={competitionsData} onPressFunction={onPress} />
    </View>
  );
};
