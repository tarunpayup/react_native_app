import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function Index(){
  return(
    <View style={styles.container}>
      <TouchableHighlight
        style = {styles.button}
        onPress={()=> Alert.alert('Button Pressed')}
      >
        <Text style={styles.text}>Tap me</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
    flex:1,justifyContent:'center', alignItems:'center'
   },
   button:{
    backgroundColor:'#0D1E2A', padding:15, borderRadius:10
   },
   text:{
    color:'#fff', fontWeight:'bold'
   }
});