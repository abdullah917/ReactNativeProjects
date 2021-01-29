import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Text1}>Squid spell</Text>
      <Text style={styles.Text2}>Log in into your Account</Text>
      <TouchableOpacity onPress={() => alert('can\'t login')} style={styles.button}>
       <Text style={styles.buttonText}>Log in with facebook</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => alert('can\'t login')} style={styles.button1}>
       <Text style={styles.buttonText1}>Log in with google</Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={() => alert('can\'t login')} style={styles.button2}>
       <Text style={styles.buttonText2}>Log in with email</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    fontSize: 22,
    fontWeight: 'bold',
     margin: 15,
  },
  Text2: {
     fontSize: 22,
     margin: 15,
  },
  button: {
    backgroundColor: '#fdf5e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 5,
    marginBottom: 3,
    marginTop: 3,
    alignSelf: 'center',
    width: 250,
    margin: 5,
  },
  button1: {
    backgroundColor:'#fdf5e6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 3,
    alignSelf: 'center',
    width: 250,
    margin: 5,
  },
  button2: {
     backgroundColor: '#fdf5e6',
     alignItems: 'center',
     justifyContent: 'center',
     padding: 20,
    borderRadius: 5,
    marginBottom: 3,
    marginTop: 3,
    alignSelf: 'center',
    width: 250,
    margin: 5,
    
  },
  buttonText: {
    color: '#87ceeb',
    
  },
  buttonText1: {
    color: '#2e8b57',
    textAlign: 'left',
  },
  buttonText2: {
    color: '#ff4500',
    textAlign: 'left',
  },
});
