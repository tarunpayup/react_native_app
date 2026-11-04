import { Button, Stack, Text, TextInput } from '@react-native-material/core';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Signup pressed', { name, email });
  };

  return (
    <View style={styles.container}>
      <Text variant="h4" style={styles.title}>
        Create Account
      </Text>

      <Stack spacing={4}>
        <TextInput
          variant="outlined"
          label="Full Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          variant="outlined"
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          variant="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          variant="outlined"
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignup} pressEffect="highlight" />
      </Stack>

      <View style={styles.footer}>
        <Text>Already have an account? </Text>
        <Text style={styles.link} onPress={() => router.replace('/login')}>
          Log In
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    marginBottom: 32,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
  },
  link: {
    color: '#6200EE',
    fontWeight: 'bold',
  },
});