import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './styles';
import { HomeScreenViewPropsType } from './types';
import { ListOfCompetitions } from '@root/components/ListOfCompetitions';

export const HomeScreenView: FC<HomeScreenViewPropsType> = (props) => {
  const { token, data, onPressListItem } = props;
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>{'Home'}</Text>
      {token !== undefined ? (
        <Text style={{ color: colors.text }}>{`Hello, ${token.name}`}</Text>
      ) : (
        <Text>{'Please, log in'}</Text>
      )}
      <ListOfCompetitions competitionsData={data} onPressListItem={onPressListItem} />
    </View>
  );
};
