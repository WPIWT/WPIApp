/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, WebView,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#AC2B37',
  },
  TextStyle: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#fff',
  },
  icon: {
    textAlign: 'left',
  },
});


export default class LaundryLinks extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.TextStyle}>
          {this.props.navigation.getParam('name', 'Laundry Links')}
          <MaterialIcons name="chevron-left" size={42} color="white" style={styles.icon} onPress={() => this.props.navigation.navigate('LaundryScreen')} />
        </Text>
        <WebView
          source={{ uri: this.props.navigation.getParam('link', 'https://www.google.com') }}
          style={{ marginTop: 20 }}
        />
      </View>
    );
  }
}
