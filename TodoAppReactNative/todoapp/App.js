import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import  Header  from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';
import SandBox from './components/sandBox';
export default function App() {
  const [todos, setTodos] = useState([
      {text: 'buy coffee', key: '1'},
      {text: 'create an app', key: '2'},
      {text: 'go to gym', key: '3'},
      {text: 'go for running', key: '4'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.key != key);
    } ) 
  }

  const submitHandler = (text) => {
    if(text.length > 3 )
    {
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
        });
    }
    else {
      Alert.alert('OOpS', 'Todos must be over 3 characters long!', [
        {text: 'understood', onPress: () => console.log('alert closed')}
      ]);
     }
  }

  return (
   // <SandBox/>
     <TouchableWithoutFeedback onPress={() => {
       Keyboard.dismiss();
       console.log('dismissed keyboard');
     }}>
     <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
     <AddTodo submitHandler={submitHandler}/>
     <View style={styles.list}>
     <FlatList 
    data= {todos}
    renderItem={({item}) => (
     <TodoItem item= {item} pressHandler={pressHandler}/>
    )}
    />
    </View>
    </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
   padding: 40,
   flex: 1,
    
  },
  list: {
    marginTop: 40,
    flex: 1,
  }, 
});
