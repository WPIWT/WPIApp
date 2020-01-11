/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity,
} from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import { Right, Body, Root } from 'native-base';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

var diningData = require('./Dining.json');

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
    fontFamily: 'MyriadPro-Regular',
  },
  status: {
    fontSize: 18,
    color: '#A2D602',
    textTransform: 'uppercase',
    fontFamily: 'MyriadPro-Regular',
  },
  hours: {
    fontSize: 18,
    color: '#989898',
    fontFamily: 'MyriadPro-Regular',
  },
  time: {
    fontSize: 38,
    color: '#989898',
    fontFamily: 'MyriadPro-Regular',
  },
  notes: {
    fontSize: 18,
    color: '#989898',
    textTransform: 'capitalize',
    fontFamily: 'MyriadPro-Regular',
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

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'MinionPro-BoldDisp': require('../../../../assets/fonts/MinionPro-BoldDisp.ttf'),
      'MyriadPro-Light': require('../../../../assets/fonts/MyriadPro-Light.ttf'),
      'MyriadPro-Regular': require('../../../../assets/fonts/MyriadPro-Regular.ttf'),
      'MyriadPro-Bold': require('../../../../assets/fonts/MyriadPro-Bold.ttf'),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('CalendarScreen')}
      >
        <Card containerStyle={styles.card}
              image={require('../../../../assets/images/Location/Worcester.jpg')}
              imageStyle={{
                alignContent: 'center',
                borderRadius: 10,
                overflow: 'hidden',
              }}>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={styles.name}>Pulse on Dining</Text>
            <Text note>OPEN</Text>
            <Text note>11-2 | 5-8</Text>
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
