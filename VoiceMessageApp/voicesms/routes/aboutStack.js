import {createStackNavigator} from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
 About: {
     screen: About,
     navigationOptions: {
        headerTitle: () => <Header/>,
       }
 },
}
const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
        headerStyle: { backgroundColor : '#ffffff', height: 80}
    }
});

export default AboutStack;
