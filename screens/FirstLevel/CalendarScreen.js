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

class CalendarScreen extends Component {
  static navigationOptions = {
    title: 'Calendar',
    headerStyle: {
      backgroundColor: '#AC2B37',
    },
    headerTintColor: 'white',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> CalendarScreen!</Text>
      </View>
    );
  }
}

export default CalendarScreen;
