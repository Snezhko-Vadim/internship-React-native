import React, {useEffect} from 'react';
import {
  View,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen'
import TxtComponent from './src/txt-component';

const App: React.FC = () => {
  useEffect(()=>{
    if(SplashScreen!==null){
      console.log(SplashScreen);
      setTimeout(() => {
        SplashScreen.hide();
        console.log(SplashScreen);
      }, 2000);
    }
  },[]);
  return(
    <View>
      <TxtComponent text = 'Hello World!'/>
    </View>
  )
}

export default App;