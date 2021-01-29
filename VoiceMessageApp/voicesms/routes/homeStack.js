import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import Header from '../shared/header';
import React from 'react';

const screens = {
 Home: {
     screen: Home,
     navigationOptions: {
      headerTitle: () => <Header/>,
     }
    },
}
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
        headerStyle: { backgroundColor : '#ffffff', height: 80}
    }
});

export default HomeStack;
