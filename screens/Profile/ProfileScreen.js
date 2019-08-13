/* eslint-disable react/no-array-index-key */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { StyleSheet, Linking, View, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { Divider } from 'react-native-paper';

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

const list = [
  {
    option: 'Change Photo',
    screen: 'https://laundryconnect.net/wpidaniels.aspx',
  },
  {
    option: 'Privacy Settings',
    screen: 'https://laundryconnect.net/wpieasthall.aspx',
  },
  {
    option: 'Notification Settings',
    screen: 'https://laundryconnect.net/wpi16elbridge.aspx',
  },
  {
    option: 'Log Out',
    screen: 'https://laundryconnect.net/wpiellsworth.aspx',
  },
];

class ProfileScreen extends Component {
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
          <Divider style={{ height: 20, backgroundColor: 'white' }} />
          {
            list.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.option}
               // onPress={Linking.openURL(item.screen)}
                bottomDivider
              />
            ))
          }
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
