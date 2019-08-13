/* eslint-disable react/sort-comp */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable object-curly-newline */

import React, { Component } from 'react';
import { StyleSheet, View, Button, ScrollView, Image, TouchableOpacity, Linking, StatusBar } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';
import { FontAwesome, Feather, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import CardSlider from 'react-native-cards-slider';

// import Category from '../News/Category';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: '#fff',
    borderRadius: 20,
    marginTop: 13,
    padding: 0,
  },
  cardText: {
    fontFamily: 'MyriadPro-Bold',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonFirstRow: {
    flex: 1,
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    backgroundColor: '#AC2B37',
    borderRadius: 10,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'MyriadPro-Regular',
    fontSize: 17,
    textAlignVertical: 'center',
    textAlign: 'center',
    lineHeight: 20,
  },
  helpfulButton: {
    flex: 1,
    height: 70,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: '#E8E8E8',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  helpfulText: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
  },
  cardNews: {
    backgroundColor: '#fff',
    borderWidth: 0,
    borderRadius: 20,
  },
  hours: {
    color: 'white',
    fontFamily: 'MyriadPro-Regular',
    fontSize: 17,
    textAlignVertical: 'center',
    textAlign: 'center',
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
});

export default class WelcomeScreen extends Component {
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
      'SpaceMono-Regular': require('../../assets/fonts/SpaceMono-Regular.ttf'),
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
          <View style={{ height: 150, marginTop: 20 }}>
            <CardSlider>
              <View style={{
                height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightsalmon', borderRadius: 10,
              }}
              >
               <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', fontFamily: 'MyriadPro-Regular' }}>
                  Hello
               </Text>
              </View>
              <View style={{
                height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink', borderRadius: 10,
              }}
              >
              <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                上海
              </Text>
              </View>
            </CardSlider>
          </View>

          <View style={styles.buttonFirstRow}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('StudyScreen'); }}>
                <View style={styles.buttonContainer}>
                    <FontAwesome name="pencil" size={40} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.buttonText}>Study Group</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('DiningScreen'); }}>
                <View style={styles.buttonContainer}>
                    <MaterialIcons name="local-dining" size={42} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.buttonText}>Dining</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('https://bannerweb.wpi.edu/pls/prod/twbkwbis.P_WWWLogin')}>
                <View style={styles.buttonContainer}>
                    <FontAwesome name="link" size={37} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.buttonText}>Bannerweb</Text>
                </View>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CalendarScreen'); }}>
                <View style={styles.buttonContainer}>
                    <FontAwesome name="calendar" size={40} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.buttonText}>Calendar</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('BookingScreen'); }}>
                <View style={styles.buttonContainer}>
                    <Divider style={{ height: 2, backgroundColor: '#AC2B37' }} />
                    <MaterialCommunityIcons name="calendar-clock" size={46} color="white" />
                    <Text style={styles.buttonText}>Tech Suites</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('LaundryScreen'); }}>
                <View style={styles.buttonContainer}>
                    <MaterialIcons name="local-laundry-service" size={42} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.buttonText}>Laundry</Text>
                </View>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ClubScreen'); }}>
                <View style={styles.buttonContainer}>
                    <MaterialIcons name="people-outline" size={42} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.buttonText}>Clubs</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('HoursScreen'); }}>
                <View style={styles.buttonContainer}>
                    <FontAwesome name="building-o" size={37} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.hours}>Hours of Operation</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('CatalogueScreen'); }}>
                <View style={styles.buttonContainer}>
                    <Feather name="book" size={40} color="white" />
                    <Divider style={{ height: 10, backgroundColor: '#AC2B37' }} />
                    <Text style={styles.buttonText}>Catalog</Text>
                </View>
            </TouchableOpacity>
          </View>


          <TouchableOpacity onPress={() => this.props.navigation.navigate('HelpfulScreen')}>
            <View style={styles.helpfulButton}>
                    <Text style={styles.helpfulText}>Helpful Links</Text>
                    <MaterialIcons name="chevron-right" size={30} color="#585858" style={{ textAlign: 'right', marginBottom: 20 }} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('CampusMap')}>
            <View style={styles.helpfulButton}>
                    <Text style={styles.helpfulText}>Campus Map</Text>
                    <MaterialIcons name="chevron-right" size={30} color="#585858" style={{ textAlign: 'right', marginBottom: 20 }} />
            </View>
          </TouchableOpacity>


          <Card
            containerStyle={styles.card}
            image={require('../../assets/images/Worcester.jpg')}
            imageStyle={{
              alignContent: 'center',
              borderRadius: 10,
              overflow: 'hidden',
            }}
            featuredTitle="Weather"
            featuredTitleStyle={styles.cardText}
          />

        </ScrollView>
          <View>
            <StatusBar barStyle="light-content" />
          </View>
      </View>
    );
  }
}
