import React, {useState} from 'react';
import {StyleSheet,View, Text,ImageBackground, TouchableHighlight, Image, TextInput} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


export default function Home () {
    const openMenu = () => {
        alert('can\'t do anything at the moment');
    }
    const pressHandler = () => {
        alert('can\'t send anything right now');
    }
    const selectLanguage = () => {
        alert('english uk is selected');
    }
        return(
            <ImageBackground source={require('../assets/Rectangle1.png')} style={styles.container}>
           <MaterialIcons name='menu' size={28} 
            onPress={ openMenu }
             style={styles.icon} />
            <Text style={styles.titleText1}>Voice SMS</Text>
            <Text style={styles.titleText2}>Send Messages Via Voice</Text>
            <TouchableHighlight onPress={selectLanguage}>
                <View style={styles.langButton}>
                 <Text style={styles.langText}>UK</Text>
                 <Image source={require('../assets/united-kingdom.png')} style={styles.ukImage}/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonImage} onLongPress={() => alert('can\'t record anything')}>
            <Image source={require('../assets/record.png')}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={pressHandler}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>Send</Text>
                <Image source={require('../assets/send.png')} style={styles.sendImage}/>
                </View>
            </TouchableHighlight>
            </ImageBackground>
       

    )
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: '#FAFAFA',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  marginLeft: 25,
  marginTop: 20,
  marginVertical: 20,
  position: 'relative',
  height: '66%',
  right: 10,
 },
 titleText1: {
     color: '#FAFAFA',
     flexDirection: 'row',
     fontSize: 22,
     fontWeight: 'bold',
     margin: 10,
     marginLeft: 0,
     letterSpacing: 1,
 },
 titleText2: {
    color: '#FAFAFA',
     flexDirection: 'row',
     fontSize: 16,
     marginLeft: 6,
     letterSpacing: 1,
 },
 icon: {
     color: '#FAFAFA',
     marginTop: 20,
     position: 'absolute',
     right: 16,
     marginLeft: 20,
 },
 buttonImage: {
     
     flexDirection: 'row',
     alignItems: 'center',
     alignSelf: 'center',
     width: 50,
     height: 50,
     marginRight: 50,
     marginTop: 300,
 },
 button: {
     borderRadius: 20,
     paddingVertical: 14,
     paddingHorizontal: 40,
     backgroundColor: '#F6F6F6',
     borderColor:'#F6F6F6',
     borderWidth: 1, 
     flexDirection: 'row',
     marginLeft: 230,
     marginTop: 2,
     marginBottom: 5,
     borderStyle: 'solid',
 },
 buttonText: {
     fontWeight: 'bold',
     textAlign: 'left',
     marginRight: 10,
     fontSize: 14,
     flexDirection: 'row',
 },
sendImage: {
width: 20, 
height: 20, 
marginHorizontal: 5,
},
langButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginLeft: 140,
    borderStyle: 'solid',
    borderWidth: 1, 
    backgroundColor: '#F6F6F6',
    borderColor:'#F6F6F6',
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 20,
},
langText: {
    fontWeight: 'bold',
    textAlign: 'left',
    marginRight: 10,
    fontSize: 14,
    flexDirection: 'row',
},
ukImage: {
    width: 20, 
height: 20, 
marginHorizontal: 5,
},
inputContainer: {
  height: 40,
  borderColor: '#F6F6F6',
  borderWidth: 1,
},
});