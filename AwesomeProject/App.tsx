import React from 'react';
import {
  View,
} from 'react-native';
import TxtComponent from './src/txt-component';

const App: React.FC = () => {
  return(
    <View>
      <TxtComponent text = 'Hello World!'/>
    </View>
  )
}

export default App;