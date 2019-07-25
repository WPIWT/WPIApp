/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScrollView } from 'react-native-gesture-handler';
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';
import { Divider, Avatar } from 'react-native-elements';

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
    textAlign: 'center',
  },
  paragraph: {
    flex: 1,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  header2: {
    fontFamily: 'MyriadPro-Bold',
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  avatarContainer: {
    flex: 1,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastAvatar: {
    flex: 1,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'white',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'black',
    fontFamily: 'MyriadPro-Light',
    fontSize: 14,
    textAlign: 'center',
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
      'MinionPro-BoldDisp': require('../../assets/fonts/MinionPro-BoldDisp.ttf'),
      'MyriadPro-Light': require('../../assets/fonts/MyriadPro-Light.ttf'),
      'MyriadPro-Regular': require('../../assets/fonts/MyriadPro-Regular.ttf'),
      'MyriadPro-Bold': require('../../assets/fonts/MyriadPro-Bold.ttf'),
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
              style={{ marginTop: 30, width: 140, height: 140 }}
              source={require('../../assets/images/WPI_logo.png')}
            />
          </View>
          <View style={styles.paragraph}>
            <Text style={styles.paraText}>
              The idea for this app was conceived by Sydney Messey, Dennis Leary, and Anika Stundtner
            </Text>
            <Divider style={{ backgroundColor: 'white', marginVertical: 0 }} />
            <Text style={styles.paraText}>
              through the Stanford University Innovation Fellowship.
            </Text>
            <Divider style={{ backgroundColor: 'white', marginVertical: 20 }} />
            <Text style={styles.paraText}>
              This app was developed by
            </Text>
            <Divider style={{ backgroundColor: 'white', marginVertical: 0 }} />
            <Text style={styles.paraText}>
              Manjusha Chava, Elaine Chen, Isabelle Cordova,
            </Text>
            <Divider style={{ backgroundColor: 'white', marginVertical: 0 }} />
            <Text style={styles.paraText}>
              and Lucas Varella with the help of WPI Web Tech
            </Text>
            <Text style={styles.paraText}>
              executives John Dyer, Chris Mercer, and Jake Scheide.
            </Text>
            <Divider style={{ backgroundColor: 'white', marginVertical: 20 }} />
            <Text style={{ fontSize: 13, fontFamily: 'MyriadPro-Light', textAlign: 'center' }}>
              Funding for the development of this app was provided by the KEEN Grant.
            </Text>

            <Divider style={{ backgroundColor: 'white', marginVertical: 20 }} />
            <Text style={styles.header2}>
              Meet the Team!
            </Text>
          </View>

          <View style={styles.avatarContainer}>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/DennisLeary.jpg')}
                  size="large"
                  rounded
                  title="DL"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Dennis Leary</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/AnikaStundtner.jpg')}
                  size="large"
                  rounded
                  title="AS"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Anika Stundtner</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/SydneyMessey.jpg')}
                  size="large"
                  rounded
                  title="SM"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Sydney Messey</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.avatarContainer}>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/ElaineChen.jpg')}
                  size="large"
                  rounded
                  title="EC"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Elaine Chen</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/ManjushaChava.jpg')}
                  size="large"
                  rounded
                  title="MC"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Manjusha Chava</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/IsabelleCordova.png')}
                  size="large"
                  rounded
                  title="IC"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Isabelle Cordova</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.avatarContainer}>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/LucasVarella.jpg')}
                  size="large"
                  rounded
                  title="LV"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Lucas Varella</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/images/Worcester.jpg')}
                  size="large"
                  rounded
                  title="CM"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Chris Mercer</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/teamPics/JohnDyer.jpg')}
                  size="large"
                  rounded
                  title="JD"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>John Dyer</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Divider style={{ backgroundColor: 'white', marginVertical: 10 }} />
            <Text style={styles.header2}>
              Our Alumni!
            </Text>
          </View>

          <View style={styles.lastAvatar}>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Avatar
                  source={require('../../assets/images/Worcester.jpg')}
                  size="large"
                  rounded
                  title="JS"
                  activeOpacity={1}
                />
                <Divider style={{ height: 10, backgroundColor: 'white' }} />
                <Text style={styles.avatarText}>Jake Scheide</Text>
              </View>
            </TouchableOpacity>
            <Divider style={{ backgroundColor: 'white', marginVertical: 10 }} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AboutScreen;
