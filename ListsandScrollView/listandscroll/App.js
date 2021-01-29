import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'Abdullah', id: '1'},
    {name:'yoshi', id: '2'},
    {name: 'Bublu', id: '3'},
    {name: 'Tunda', id: '4'},
    {name: 'Blackiya', id: '5'},
    {name: 'Kaancha', id: '6'},
    {name: 'langra', id: '7'},
    {name: 'kaana', id: '8'},
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id);
    })
  }
  return (
    <View style={styles.container}>

      <FlatList
      numColumns={2}
      keyExtractor={(item) => item.id}
       data = {people}
       renderItem = {({item}) => (
         <TouchableOpacity onPress={() => pressHandler(item.id)}>
        <Text style= {styles.item}>{item.name}</Text>
        </TouchableOpacity>
       )}
      />

      {/* <ScrollView>
      {people.map((item) => {
        return(
        <View key={item.key}>
          <Text style= {styles.item}>{item.name}</Text>
        </View>
        )
      })}
      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
   paddingTop: 40,
   paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
});
