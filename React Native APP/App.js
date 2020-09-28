import React, { useState } from 'react';
import { PickerIOSComponent, StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('shameel');
  const [ age, setAge ] = useState(19);
  const [people, setPeople] = useState([
    { name: 'shameel', key: '1' },
    { name: 'yoshi', key: '2' },
    { name: 'mario', key: '3' },
    { name: 'luigi', key: '4' },
    { name: 'peach', key: '5' },
    { name: 'toad', key: '6' },
    { name: 'bowser', key: '7' },
  ]);

  const pressHandler = (key) => {
    setPeople((prevPeople) => { // Callback function takes the current state as the parameter.
      return prevPeople.filter(person => person.key != key);
    });
  }

  /*<View> component is more like a <div> tag, <Text> component is used to output text on the APP*/
  /* StyleSheet.create is used to emulate CSS styling on the APP */
  /* <ScrollView> component is used wrap parts of our code, so we could scoll on the APP. */
  /* 
  <FlatList> - Another way to output list instead of using the map() method.
  - It comes with the Scrolling feature, so we don't need to add it.
  - We destructute; renderItem= { ({item}) } because item is a property in the callback function's paramter object.
  - It automatically looks for a key property in our array, so we don't need to define it; key={item.key}.
  - It's optimised because it doesn't load all the data in the list at once, but load one by one while you scoll down.
  - <TouchableOpacity> - Adds a touch opacity, and we can use the onPress Event Handler.
  */
  return (
    <FlatList 
      numColumns = { 2 } // - Add Columns
      //keyExtractor = { (item) => item.id } - Manually assign a key if you don't want <FlatList> to do it automatically.
      data = { people }
      renderItem = { ({item}) => (
        <TouchableOpacity onPress={ () => pressHandler(item.key) }>
          <Text style={ styles.item }> { item.name } </Text>
        </TouchableOpacity>
      ) }
    />


    /*
      // OUTPUTTING DATA FROM AN ARRAY - EXAMPLE 1

    <View style={styles.container}>
    <ScrollView>
      { people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={ styles.item }> { item.name } </Text>
          </View>
        );
      }) }
      </ScrollView>

      // INPUT EXAMPLE
    <View>
      <Text>Enter name:</Text>
      <TextInput
      multiline 
      style={styles.input} 
      placeholder='e.g. John Doe' 
      onChangeText={(val) => setName(val)}/>

      <Text>Enter age:</Text>
      <TextInput
      keyboardType='numeric' 
      style={styles.input} 
      placeholder='e.g. 99' 
      onChangeText={(val) => setAge(val)}/> 
    </View>
    */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#777',
  //   padding: 8,
  //   margin: 10,
  //   width: 200,
  // }
});
