/* eslint-disable react/prop-types */
/* eslint-disable no-lone-blocks */
/* eslint-disable block-spacing */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';


// Zeroth Level
import WelcomeScreen from './screens/WelcomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import MoreScreen from './screens/MoreScreen';

// First Level
import StudyScreen from './screens/FirstLevel/StudyScreen';
import DiningScreen from './screens/FirstLevel/DiningScreen';
import HelpfulScreen from './screens/FirstLevel/HelpfulScreen';
import CalendarScreen from './screens/FirstLevel/CalendarScreen';
import BookingScreen from './screens/FirstLevel/BookingScreen';
import LaundryScreen from './screens/FirstLevel/LaundryScreen';
import ClubScreen from './screens/FirstLevel/ClubScreen';
import HoursScreen from './screens/FirstLevel/HoursScreen';
import CatalogueScreen from './screens/FirstLevel/CatalogueScreen';
import QRCodeScreen from './screens/FirstLevel/QRCodeScreen';
import CampusMap from './screens/FirstLevel/CampusMap';

// Second Level
import LaundryLinks from './screens/SecondLevel/LaundryLinks';
import HelpfulLinks from './screens/SecondLevel/HelpfulLinks';

const WelcomeStackNavigator = new createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      title: 'WPI',
      headerTitleStyle: {
        fontFamily: 'MinionPro-BoldDisp',
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
    },
  },
  StudyScreen: { screen: StudyScreen }, // 1
  DiningScreen: { screen: DiningScreen }, // 2
  HelpfulScreen: { screen: HelpfulScreen }, // 3
  CalendarScreen: { screen: CalendarScreen }, // 4
  BookingScreen: { screen: BookingScreen }, // 5
  LaundryScreen: { screen: LaundryScreen }, // 6
  ClubScreen: { screen: ClubScreen }, // 7
  HoursScreen: { screen: HoursScreen }, // 8
  CatalogueScreen: { // 9
    screen: CatalogueScreen,
    navigationOptions: {
      header: null,
    },
  },
  CampusMap: { // 10
    screen: CampusMap,
    navigationOptions: {
      header: null,
    },
  },
  LaundryLinks: { // 11
    screen: LaundryLinks,
    navigationOptions: {
      header: null,
    },
  },
  HelpfulLinks: { // 12
    screen: HelpfulLinks,
    navigationOptions: {
      header: null,
    },
  },
  AboutScreen: { screen: AboutScreen },
});

const AboutStackNavigator = new createStackNavigator({
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      title: 'WPI',
      headerTitleStyle: {
        fontFamily: 'MinionPro-BoldDisp',
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
    },
  },
});

const MoreStackNavigator = new createStackNavigator({
  MoreScreen: {
    screen: MoreScreen,
    navigationOptions: {
      title: 'WPI',
      headerTitleStyle: {
        fontFamily: 'MinionPro-BoldDisp',
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
    },
  },
});

const ProfileStackNavigator = new createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: 'WPI',
      headerTitleStyle: {
        fontFamily: 'MinionPro-BoldDisp',
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
    },
  },
  QRCodeScreen: {
    screen: QRCodeScreen,
    navigationOptions: {
      title: 'WPI',
      headerTitleStyle: {
        fontFamily: 'MinionPro-BoldDisp',
        fontSize: 30,
      },
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
    },
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    MoreScreen: {
      screen: MoreStackNavigator,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-more" />
          </View>
        ),
        activeColor: '#AC2B37',
        inactiveColor: '#696969',
        barStyle: { backgroundColor: '#f0edf6' },
      },
    },
    WelcomeScreen: {
      screen: WelcomeStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-home" />
          </View>
        ),
      },
    },
    Profile: {
      screen: ProfileStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-person" />
          </View>
        ),
        activeColor: '#AC2B37',
        inactiveColor: '#696969',
        barStyle: { backgroundColor: '#f0edf6' },
      },
    },
  },
  {
    initialRouteName: 'WelcomeScreen',
    activeColor: '#AC2B37',
    inactiveColor: '#696969',
    barStyle: { backgroundColor: '#f0edf6' },
  },
);

const InitialNavigator = createAppContainer(TabNavigator);

const AppContainer = createAppContainer(InitialNavigator);


export default class App extends Component {
  constructor(props) {
    super(props);
    // eslint-disable-next-line react/no-unused-state
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'MinionPro-BoldDisp': require('./assets/fonts/MinionPro-BoldDisp.ttf'),
      'MyriadPro-Light': require('./assets/fonts/MyriadPro-Light.ttf'),
      'MyriadPro-Regular': require('./assets/fonts/MyriadPro-Regular.ttf'),
      'SpaceMono-Regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    });
    // eslint-disable-next-line react/no-unused-state
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
      <AppContainer />
    );
  }
}
