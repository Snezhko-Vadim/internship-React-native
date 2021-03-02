import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListOfCompetitionsPropsType } from './types';

export const ListOfCompetitions: React.FC<ListOfCompetitionsPropsType> = (props) => {
  const { competitionsData, onPressListItem } = props;
  return (
    <View>
      <Text>List of competitions</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={competitionsData}
        renderItem={({ item }) => (
          <View>
            <Text onPress={() => onPressListItem(item.id.toString())}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
