import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Index(){
  return(
    <View style = {styles.container}>
      <TextInput
        style = {styles.inputValue}
      />
      <Text style = {styles.text}>Text put by user will display here</Text>
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

