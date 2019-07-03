/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  StyleSheet, View, Image, TouchableOpacity,
} from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 20,
  },
  name: {
    fontSize: 22,
    color: '#989898',
    textTransform: 'capitalize',
  },
  status: {
    fontSize: 18,
    color: '#A2D602',
    textTransform: 'uppercase',
  },
  hours: {
    fontSize: 18,
    color: '#989898',
  },
  time: {
    fontSize: 38,
    color: '#989898',
  },
  notes: {
    fontSize: 18,
    color: '#989898',
    textTransform: 'capitalize',
  },
});

class DiningScreen extends Component {
  static navigationOptions = {
    title: 'Dining',
    headerStyle: {
      backgroundColor: '#AC2B37',
    },
    headerTintColor: 'white',
  };

  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('CalendarScreen')}
      >
        <Card containerStyle={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Image style={{ width: 150, height: 100, borderRadius: 5 }} source={{ uri: 'https://i.kym-cdn.com/photos/images/newsfeed/001/439/881/ed5.png' }} />
            <Text style={styles.name}>   Pulse on Dining </Text>
          </View>

          <Divider style={{ backgroundColor: '#000', marginVertical: 20 }} />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.status}> open </Text>
            <Text style={styles.hours}> 11 - 2 | 5 - 8 </Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }
}

export default DiningScreen;
