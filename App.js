import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Circle from './components/Circle';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Circle />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
