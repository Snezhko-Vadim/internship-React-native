import React from 'react';
import { View, Text } from 'react-native';

const TxtComponent: React.FC<{ text: string }> = ({ text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};

export default TxtComponent;
