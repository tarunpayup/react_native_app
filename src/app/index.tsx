import { Text } from '@react-native-material/core';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    async function run() {
      await SplashScreen.hideAsync(); 
      setTimeout(() => {
        router.replace('/login');
      }, 2000); 
    }
    run();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/icon.png')}
      />
      <Text variant="h5" style={styles.title}>
        My App
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6200EE', // Material default primary purple
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    color: '#fff',
  },
});