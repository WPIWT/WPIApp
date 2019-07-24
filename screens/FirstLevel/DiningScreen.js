/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import { Right, Body } from 'native-base';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 20,
    shadowColor: '#585858',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
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
            <Text style={styles.name}>Pulse on Dining</Text>
            <Text note>OPEN</Text>
            <Text note>11-2 | 5-8</Text>
          </View>
          <Right>
            <Body>
              <Text style={styles.name}>Pulse on Dining</Text>
              <Text style={{ color: 'green' }} note>OPEN</Text>
              <Text style={{ color: '#989898' }} note>11-2 | 5-8</Text>
            </Body>
          </Right>

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
