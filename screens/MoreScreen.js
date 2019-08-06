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
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

const account = [
  {
    title: 'Profile',
    page: 'ProfileScreen',
    icon: 'account',
  },
  {
    title: 'Login',
    page: 'AboutScreen',
    icon: 'lock',
  },
];

const list = [
  {
    title: 'Alerts',
    page: 'AlertScreen',
    icon: 'alert',
  },
  {
    title: 'WPI Contacts',
    page: 'EmcScreen',
    icon: 'contacts',
  },
  {
    title: 'About',
    page: 'AboutScreen',
    icon: 'information',
  },
];

class MoreScreen extends Component {
    static navigationOptions = {
      title: 'WPI',
      headerStyle: {
        backgroundColor: '#AC2B37',
      },
      headerTintColor: 'white',
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Account
              </Text>
            </View>
            {
            account.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                onPress={() => this.props.navigation.navigate(item.page)}
                topDivider
                leftIcon={<MaterialCommunityIcons name={item.icon} size={30} style={{ marginRight: 10 }} color="#ACB2B7" />}
                chevron
              />
            ))
          }
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Other
              </Text>
            </View>
            {
            list.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                onPress={() => this.props.navigation.navigate(item.page)}
                topDivider
                leftIcon={<MaterialCommunityIcons name={item.icon} size={30} style={{ marginRight: 10 }} color="#ACB2B7" />}
                chevron
              />
            ))
          }
          </ScrollView>
        </View>
      );
    }
}

export default MoreScreen;
