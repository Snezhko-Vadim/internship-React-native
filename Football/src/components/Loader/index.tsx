import React, { FC } from 'react';
import { Text, View } from 'react-native';

export const Loader: FC = () => {
  return (
    <View>
      <Text>{'Loading...'}</Text>
    </View>
  );
};
