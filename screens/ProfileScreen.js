/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

const styles = StyleSheet.create({
  titleText: {
    marginTop: 15,
    fontSize: 20,
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divContainer: {
    marginTop: 0,
    height: 100,
    fontSize: 20,
    backgroundColor: '#E8E8E8',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'WPI',
    headerStyle: {
      backgroundColor: '#AC2B37',
    },
    headerTintColor: 'white',
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.divContainer}>
          <View style={styles.header}>
            <Avatar
              source={{
                uri:
                'https://i.kym-cdn.com/photos/images/newsfeed/001/439/881/ed5.png',
              }}
              size="xlarge"
              rounded
              title="TS"
              onPress={() => this.props.navigation.navigate('QRCodeScreen')}
              activeOpacity={0.7}
            />
            <Text style={styles.titleText}>this is how lil kids cough</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
