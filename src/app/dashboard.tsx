import { Button, Text } from '@react-native-material/core';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text variant="h4" style={styles.title}>
        Dashboard
      </Text>
      <Text style={styles.subtitle}>You&apos;re logged in!</Text>
      <Button
        title="Log Out"
        onPress={() => router.replace('/login')}
        pressEffect="highlight"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 24,
    color: 'gray',
  },
});