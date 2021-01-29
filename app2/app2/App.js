import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
 /* const [name, setName] = useState('abdullah');
  const [person, setPerson] = useState({name: 'mario', age: 40});
  const clickHandler = () => {
    setName('Bubza G');
    setPerson({name: 'leo', age: 45});
  }
  return (
    <View style={styles.container}>
     <Text>My name is {name}</Text>
     <Text>His name is {person.name} and his age is {person.age}</Text>
     <View style={styles.buttonContainer}>
     <Button title='update state' onPress={clickHandler}/>
     </View>
     </View> */
     const [age, setAge] = useState('22');
     const [name, setName] = useState('Abdullah');
     return(
     <View style={styles.container}>
       <Text>Enter name:</Text>
       <TextInput 
       multiline
       style={styles.input}
       placeholder= 'e.g. John Doe'
       onChangeText={(val) => setName(val)}
       />
       <Text>Enter age:</Text>
       <TextInput 
       keyboardType= 'numeric'
       style={styles.input}
       placeholder= 'e.g. 30'
       onChangeText={(val) => setAge(val)}
       />
      <Text>name: {name}, age: {age}</Text>
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
 /* buttonContainer: {
    marginTop: 20,
  }, */
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});
