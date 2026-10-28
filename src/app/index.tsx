import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Index(){

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');


  return(
    <View style = {styles.container}>
      <TextInput
        style = {styles.inputValue}
        onChangeText = {setName}
        value={name}
        placeholder='Enter your name'
      />
      <TextInput
        style = {styles.inputValue}
        onChangeText = {setPassword}
        value={password}
        secureTextEntry
        placeholder='Enter your Password'
      />
      <TextInput
        style = {styles.inputValue}
        onChangeText = {setPhone}
        value={phone}
        placeholder='Enter your Phone Number'
        keyboardType='numeric'
      />
      <TextInput
        style = {[styles.inputValue, {height:80}]}
        onChangeText = {setNotes}
        value={notes}
        placeholder='Enter your Notes'
        multiline
        numberOfLines={5}
      />                  
      <Text style = {styles.text}>You typed: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:'center',
      padding:20
    },
    inputValue:{
      borderWidth:1,
      borderColor:'#000',
      borderRadius:10,
      padding:10,
      marginBottom:10
    },
    text:{
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
      color:'#ff0000'
    }
  }
);

