import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button} from 'react-native-elements'
export default function App() {
  console.log('Hello World!!');
  return (
    <View style={styles.container}>
      <Text>Welcome to the FItnessApp...</Text>
      <Button> title='My fitness button'  icon= {{name:'code'}}</Button>
      <StatusBar style="auto" />
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
