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

import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import StudyScreen from '../screens/FirstLevel/StudyScreen';
import DiningScreen from '../screens/FirstLevel/DiningScreen';
import HelpfulScreen from '../screens/FirstLevel/HelpfulScreen';
import CalendarScreen from '../screens/FirstLevel/CalendarScreen';
import BookingScreen from '../screens/FirstLevel/BookingScreen';
import LaundryScreen from '../screens/FirstLevel/LaundryScreen';
import ClubScreen from '../screens/FirstLevel/ClubScreen';
import HoursScreen from '../screens/FirstLevel/HoursScreen';
import CatalogueScreen from '../screens/FirstLevel/CatalogueScreen';

const AppStackNavigator = new createStackNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
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
});

const ScreenNav = createAppContainer(AppStackNavigator);

export default ScreenNav;
