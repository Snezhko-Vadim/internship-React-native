import React from 'react';
import { View, Text, FlatList } from 'react-native';

export const ListOfCompetitions: React.FC = (props) => {
  const { competitionsData, onPressFunction } = props;
  return (
    <View>
      <Text>List of competitions</Text>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={competitionsData}
        renderItem={({ item }) => (
          <View>
            <Text onPress={() => onPressFunction(item.id)}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};
