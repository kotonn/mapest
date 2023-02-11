import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/frontScreen/RegisterScreen';
import LoginScreen from './components/frontScreen/LoginScreen';
import { View, Text, StyleSheet } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      } else {
        setUser('');
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View
        style={styles.container}
      >
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: '#A5C3CF' }, title: "", headerShadowVisible: false, headerBackVisible: false }} />
          ) : (
            <>
              <Stack.Screen name="Register" component={RegisterScreen} options={{ headerStyle: { backgroundColor: '#A5C3CF' }, title: "", headerShadowVisible: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerStyle: { backgroundColor: '#F8D8B7' }, title: "", headerShadowVisible: false, headerBackVisible: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#A5C3CF',
  }
});
