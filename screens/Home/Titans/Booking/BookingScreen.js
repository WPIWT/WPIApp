/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import {
  StyleSheet, View, TouchableOpacity, Image, ScrollView,
} from 'react-native';
import { Card, Divider } from 'react-native-elements';


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 20,
    marginTop: -10,
    padding: 0,
  },
});

class BookingScreen extends Component {
  static navigationOptions = {
    title: 'Book Tech Suites',
    headerStyle: {
      backgroundColor: '#AC2B37',
    },
    headerTintColor: 'white',
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Divider style={{ height: 30, backgroundColor: 'white' }} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CalendarScreen')}
          >
            <Card
              containerStyle={styles.card}
              image={require('../../../../assets/images/Location/OutsideFoisie.jpg')}
              imageStyle={{
                alignContent: 'center',
                borderRadius: 10,
                overflow: 'hidden',
              }}
              imageProps={<Image resizeMode="cover" />}
              featuredTitle="Foisie Innovation Studio"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HelpfulScreen')}
          >
            <Card
              containerStyle={styles.card}
              image={require('../../../../assets/images/Location/OutsideGordonLibrary.jpg')}
              imageStyle={{
                alignContent: 'center',
                borderRadius: 10,
                overflow: 'hidden',
              }}
              featuredTitle="Gordon Library"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('HelpfulScreen')}
          >
            <Card
              containerStyle={styles.card}
              image={require('../../../../assets/images/Location/CampusQuad.jpg')}
              imageStyle={{
                alignContent: 'center',
                borderRadius: 10,
                overflow: 'hidden',
              }}
              featuredTitle="Other"
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default BookingScreen;
