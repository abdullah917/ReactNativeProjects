import React from 'react';
import Home from './screens/Home';
import {useFonts} from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import RootDrawerNavigator from './routes/drawer';

export default function App() {
   let [fontsLoaded] = useFonts({
     'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
     'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
   });
   if(!fontsLoaded){
    return (
      <AppLoading/>
    );
    }
    else {
      return(
        <RootDrawerNavigator/>
      );
    }
}