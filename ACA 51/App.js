import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login'
import SignUp from './components/SignUp';
export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>    
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
});
