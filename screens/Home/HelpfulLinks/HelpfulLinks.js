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
  navBar: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#AC2B37',
    marginTop: 10,
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#AC2B37',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#AC2B37',
  },
  rightIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    backgroundColor: '#AC2B37',
  },
  MainContainer: {
    backgroundColor: '#AC2B37',
    flex: 1,
  },
  TextStyle: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: '#fff',
  },
  icon: {
    textAlign: 'left',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop: 10,
  },
});

export default class HelpfulLinks extends Component {
  render() {
    return (

      <View style={styles.MainContainer}>
        <View style={styles.navBar}>
          <View style={styles.leftContainer}>
            <Text style={[styles.text, { textAlign: 'left' }]}>
              <MaterialIcons name="chevron-left" size={42} color="white" style={styles.icon} onPress={() => this.props.navigation.navigate('HelpfulScreen')} />
            </Text>
          </View>
          <Text style={styles.TextStyle}>
            {this.props.navigation.getParam('name', 'Helpful Links')}
          </Text>
          <View style={styles.rightContainer}>
            <View style={styles.rightIcon} />
          </View>
        </View>
        <WebView
          source={{ uri: this.props.navigation.getParam('link', 'https://www.google.com') }}
        />
      </View>
    );
  }
}
