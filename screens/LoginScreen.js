/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> LoginScreen!</Text>
      </View>
    );
  }
}

export default LoginScreen;
