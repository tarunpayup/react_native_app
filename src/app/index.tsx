import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Index(){

  const router = useRouter();

  useEffect(()=>{
    async function run(){
      await SplashScreen.hideAsync();
      setTimeout(
        ()=>{
          router.replace('/login');
        },2000
      );
    }
    run();
  }
  );

  return(
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    color:'#000'
  }
});