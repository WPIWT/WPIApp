/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'Optima',
    fontSize: 36,
    fontWeight: 'bold',
  },
  header: {
    marginTop: 35,
    marginLeft: 25,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  divContainer: {
    marginTop: 0,
    height: 100,
    fontSize: 20,
    backgroundColor: '#E8E8E8',
  },
  paraText: {
    fontSize: 20,
    fontFamily: 'Optima',
  },
  paragraph: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AboutScreen extends React.Component {
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
            <Text style={styles.titleText}>About</Text>
          </View>
        </View>
        <View style={styles.paragraph}>
          <ScrollView>
            <Text style={styles.paraText}>
              {' '}
              The idea for this app was conceived by Sydney Messey, Dennis Leary, and Anika Stundtner
              through the Stanford University Innovation Fellowship as a means to unite resources in a
              centralized accessible hub for the WPI community.
              This app was developed by Manjusha Chava, Elaine Chen, Isabelle Cordova, and Lucas Varella
              with the help of WPI Web Tech executives John Dyer, Chris Mercer, and Jake Scheide.
              Funding for the development of this app was provided by the KEEN Grant.
            </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default AboutScreen;
