/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { MaterialIcons } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Root } from 'native-base';
import Call from 'react-native-phone-call';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ACB2B7',
    height: 45,
    textAlignVertical: 'center',
    justifyContent: 'center', // Centered vertically
    flex: 1,
  },
  headerText: {
    color: 'white',
    justifyContent: 'center',
    marginLeft: 20,
    fontSize: 20,
    textAlign: 'left',
    fontFamily: 'MyriadPro-Bold',
    textAlignVertical: 'center',
    alignItems: 'center',
    marginTop: 5,
    textTransform: 'capitalize',
  },
});

const campusPolice = [
  {
    title: 'WPI Police (Emergency)',
    phone: '5088315555',
    prompt: true,
  },
  {
    title: 'WPI Police (Non-Emergency)',
    phone: '5087998600',
    prompt: true,
  },
  {
    title: 'WPI Campus Police',
    phone: '5088315433',
    prompt: true,
  },
];

const medicalAssistance = [
  {
    title: 'WPI Health Services',
    phone: '5088315520',
  },
  {
    title: 'St. Vincent Hospital',
    phone: '5083635000',
  },
  {
    title: 'UMass Memorial Medical Center',
    phone: '5083341000',
  },
  {
    title: 'AdCare Hospital',
    phone: '5087999000',
  },
];

const crisisHelp = [
  {
    title: 'WPI Student Development and Counseling Center',
    phone: '5088315540',
  },
  {
    title: 'Pathways for Change',
    phone: '8008705905',
  },
];

const otherNumbers = [
  {
    title: 'Campus Shuttles & Escorts',
    phone: '5088316111',
  },
  {
    title: 'Environmental Health & Safety',
    phone: '5088315298',
  },
  {
    title: 'Residential Services',
    phone: '5088315645',
  },
  {
    title: 'Student Affairs & Campus Life',
    phone: '5088315201',
  },
  {
    title: 'WPI Closing/Delay Line',
    phone: '5088315744',
  },
];

class EmcScreen extends Component {
    static navigationOptions = {
      title: 'Back',
      headerStyle: {
        backgroundColor: '#AC2B37',
      },
      headerTintColor: 'white',
      headerBackTitle: null,
    }

    constructor(props) {
      super(props);
      this.state = { loading: true };
    }

    async componentDidMount() {
      await Font.loadAsync({
        'MyriadPro-Light': require('../../assets/fonts/MyriadPro-Light.ttf'),
        'MyriadPro-Regular': require('../../assets/fonts/MyriadPro-Regular.ttf'),
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
        <View>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Campus Police
              </Text>
            </View>
            {
            campusPolice.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                onPress={}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                topDivider
                leftIcon={<MaterialIcons name="phone" size={20} style={{ marginRight: 10 }} color="#ACB2B7" />}
                chevron
              />
            ))
          }

            <View style={styles.header}>
              <Text style={styles.headerText}>
                Medical Assistance
              </Text>
            </View>
            {
            medicalAssistance.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                topDivider
                leftIcon={<MaterialIcons name="phone" size={20} style={{ marginRight: 10 }} color="#ACB2B7" />}
                chevron
              />
            ))
          }

            <View style={styles.header}>
              <Text style={styles.headerText}>
                Crisis Help Lines
              </Text>
            </View>
            {
            crisisHelp.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                topDivider
                leftIcon={<MaterialIcons name="phone" size={20} style={{ marginRight: 10 }} color="#ACB2B7" />}
                chevron
              />
            ))
          }

            <View style={styles.header}>
              <Text style={styles.headerText}>
                Other Important Campus Numbers
              </Text>
            </View>
            {
              // change this to Collapse instead of listview rip.
            otherNumbers.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                topDivider
                leftIcon={<MaterialIcons name="phone" size={20} style={{ marginRight: 10 }} color="#ACB2B7" />}
                chevron
              />
            ))
          }
          </ScrollView>
        </View>
      );
    }
}

export default EmcScreen;
