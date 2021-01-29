import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import ContactStack from './contactStack';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Contacts: {
        screen: ContactStack,
       },
     About: {
         screen: AboutStack,
     }
});

export default createAppContainer(RootDrawerNavigator);