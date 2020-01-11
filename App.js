
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
/* eslint-disable no-undef */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, HeaderBackButton } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Root } from 'native-base';


// Zeroth Level
import WelcomeScreen from './screens/Home/WelcomeScreen';

// Helpful Links
import HelpfulScreen from './screens/Home/HelpfulLinks/HelpfulScreen';
import HelpfulLinks from './screens/Home/HelpfulLinks/HelpfulLinks';

// Campus Map
import CampusMap from './screens/Home/CampusMap/CampusMap';

// Titans
import StudyScreen from './screens/Home/Titans/StudyMap/StudyScreen';

import DiningScreen from './screens/Home/Titans/Dining/DiningScreen';

import CalendarScreen from './screens/Home/Titans/Calendar/CalendarScreen';

import BookingScreen from './screens/Home/Titans/Booking/BookingScreen';

import LaundryScreen from './screens/Home/Titans/Laundry/LaundryScreen';
import LaundryLinks from './screens/Home/Titans/Laundry/LaundryLinks';

import ClubScreen from './screens/Home/Titans/Clubs/ClubScreen';

import HoursScreen from './screens/Home/Titans/HourOperation/HoursScreen';

import CatalogueScreen from './screens/Home/Titans/Catalog/CatalogueScreen';
import CatalogViewer from './screens/Home/Titans/Catalog/CatalogViewer';

// More Tab
import MoreScreen from './screens/More/MoreScreen';
import AboutScreen from './screens/More/AboutScreen';
import EmcScreen from './screens/More/EmcScreen';
import AlertScreen from './screens/More/AlertScreen';

// Profile
import ProfileScreen from './screens/Profile/ProfileScreen';
import QRCodeScreen from './screens/Profile/QRCodeScreen';

// News Tab
import NewsScreen from './screens/News/NewsScreen';

// Notification
import NotificationScreen from './screens/Notifications/NotificationScreen';

const WelcomeStackNavigator = new createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: ({ navigation }) => ({
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
      headerLeft: <Icon
        name="ios-person"
        type="font-awesome"
        color="#fff"
        style={{ marginLeft: 20 }}
        size={28}
        onPress={() => navigation.navigate('ProfileScreen')}
      />,
      headerRight: <Icon
        name="ios-notifications"
        type="font-awesome"
        color="#fff"
        style={{ marginRight: 20 }}
        size={28}
        onPress={() => navigation.navigate('NotificationScreen')}
      />,
    }),
  },
  NotificationScreen: {
    screen: NotificationScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 1
  StudyScreen: {
    screen: StudyScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 1
  DiningScreen: {
    screen: DiningScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 2
  HelpfulScreen: {
    screen: HelpfulScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 3
  CalendarScreen: {
    screen: CalendarScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 4
  BookingScreen: {
    screen: BookingScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 5
  LaundryScreen: {
    screen: LaundryScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 6
  ClubScreen: {
    screen: ClubScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 7
  HoursScreen: {
    screen: HoursScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 8
  CatalogueScreen: {
    screen: CatalogueScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  }, // 9
  CatalogViewer: { // 9
    screen: CatalogViewer,
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
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
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
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  },
  EmcScreen: {
    screen: EmcScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'WPI Contacts',
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
      headerTintColor: 'white',
    }),
  },
  AlertScreen: {
    screen: AlertScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Alerts',
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  },
  QRCodeScreen: {
    screen: QRCodeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerStyle: {
        backgroundColor: '#AC2B37',
        marginTop: 5,
      },
      headerTintColor: 'white',
      headerLeft: <HeaderBackButton
        tintColor="white"
        onPress={() => {
          navigation.goBack(null);
        }}
      />,
    }),
  },
});

const NewsStackNavigator = new createStackNavigator({
  NewsScreen: {
    screen: NewsScreen,
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
    NewsScreen: {
      screen: NewsStackNavigator,
      navigationOptions: {
        tabBarLabel: 'News',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-paper" />
          </View>
        ),
        activeColor: '#AC2B37',
        inactiveColor: '#696969',
        barStyle: { backgroundColor: '#f0edf6' },
      },
    },
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
