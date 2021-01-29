import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../styles/global';


export default function Home ({navigation}) {
        return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}></Text>
        </View>
    )
}