import {createStackNavigator} from 'react-navigation-stack';
import Contact from '../screens/contacts';
import Header from '../shared/header';
import React from 'react';

const screens = {
 Contacts: {
     screen: Contact,
     navigationOptions: {
        headerTitle: () => <Header/>,
       }
 },

}
const ContactStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
    headerTintColor: '#444',
        headerStyle: { backgroundColor : '#ffffff', height: 80}
    }
});

export default ContactStack;
