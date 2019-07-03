/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from '../screens/WelcomeScreen';
import CatalogueScreen from '../screens/FirstLevel/CatalogueScreen';
import DiningScreen from '../screens/FirstLevel/DiningScreen';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    About: {
      screen: DiningScreen,
      navigationOptions: {
        tabBarLabel: 'About',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name="ios-information-circle-outline" />
          </View>
        ),
        activeColor: '#AC2B37',
        inactiveColor: '#696969',
        barStyle: { backgroundColor: '#f0edf6' },
      },
    },
    WelcomeScreen: {
      screen: WelcomeScreen,
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
      screen: CatalogueScreen,
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

const BottomNavigator = createAppContainer(TabNavigator);

export default BottomNavigator;
