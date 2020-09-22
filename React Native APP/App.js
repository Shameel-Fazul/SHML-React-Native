import React, { useState } from 'react';
import { PickerIOSComponent, StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('shameel');
  const [ age, setAge ] = useState(19);

  /*<View> component is more like a <div> tag, <Text> component is used to output text on the APP*/
  /* StyleSheet.create is used to emulate CSS styling on the APP */
  return (
    <View style={styles.container}>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
