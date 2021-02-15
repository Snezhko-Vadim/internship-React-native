import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import AppNavigator from 'src/navigation';

import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    if (SplashScreen !== null) {
      SplashScreen.hide();
    }
  }, []);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
