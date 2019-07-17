/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScrollView } from 'react-native-gesture-handler';
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';
import { Divider } from 'react-native-elements';

const styles = StyleSheet.create({
  titleText: {
    fontFamily: 'MyriadPro-Bold',
    fontSize: 24,
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
  image: {
    alignItems: 'center',
  },
  divContainer: {
    marginTop: 0,
    height: 70,
    fontSize: 20,
    backgroundColor: '#E8E8E8',
  },
  paraText: {
    fontSize: 16,
    fontFamily: 'MyriadPro-Light',
  },
  paragraph: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph1: {
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

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'MinionPro-BoldDisp': require('../assets/fonts/MinionPro-BoldDisp.ttf'),
      'MyriadPro-Light': require('../assets/fonts/MyriadPro-Light.ttf'),
      'MyriadPro-Regular': require('../assets/fonts/MyriadPro-Regular.ttf'),
      'MyriadPro-Bold': require('../assets/fonts/MyriadPro-Bold.ttf'),
      'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
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
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.image}>
            <Image
              style={{ marginTop: 20, width: 150, height: 150 }}
              source={require('../assets/images/WPI_logo.png')}
            />
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.paraText}>
              The idea for this app was conceived by Sydney Messey, Dennis Leary, and Anika Stundtner
              through the Stanford University Innovation Fellowship.
            </Text>
            <Divider style={{ backgroundColor: 'white', marginVertical: 10 }} />
            <Text style={styles.paraText}>
              This app was developed by Manjusha Chava, Elaine Chen, Isabelle Cordova, and Lucas Varella
              with the help of WPI Web Tech executives John Dyer, Chris Mercer, and Jake Scheide.
              Funding for the development of this app was provided by the KEEN Grant.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AboutScreen;
