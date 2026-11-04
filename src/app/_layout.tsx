import { Provider } from '@react-native-material/core';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import type { ComponentType, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';


SplashScreen.preventAutoHideAsync();
const MaterialProvider = Provider as unknown as ComponentType<PropsWithChildren>;

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MaterialProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="dashboard" />
      </Stack>
      </MaterialProvider>
    </ThemeProvider>
  );
}