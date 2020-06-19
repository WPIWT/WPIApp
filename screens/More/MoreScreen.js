/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable object-curly-newline */
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F5F5F5',
    height: 45,
    textAlignVertical: 'center',
    justifyContent: 'center', // Centered vertically
  },
  headerText: {
    color: '#707070',
    justifyContent: 'center',
    marginLeft: 20,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'MyriadPro-Bold',
    textAlignVertical: 'center',
    alignItems: 'center',
    marginTop: 5,
    textTransform: 'uppercase',
  },
});

const emergency = [
  {
    title: 'WPI Contacts',
    page: 'EmcScreen',
    icon: 'contacts',
  },
  {
    title: 'Alerts',
    page: 'AlertScreen',
    icon: 'alert',
  },
  {
    title: 'SNAP',
    page: 'AboutScreen',
    icon: 'bus',
  },
  {
    title: 'Emergency Procedures',
    page: 'AboutScreen',
    icon: 'alert-circle',
  },
];

const navigate = [
  {
    title: 'Campus Map',
    page: 'EmcScreen',
    icon: 'map',
  },
  {
    title: 'Parking',
    page: 'AlertScreen',
    icon: 'parking',
  },
  {
    title: 'Shuttle Info',
    page: 'AboutScreen',
    icon: 'van-passenger',
  },
];

const academics = [
  {
    title: 'University Calendar',
    page: 'EmcScreen',
    icon: 'calendar',
  },
  {
    title: 'Catalogs',
    page: 'AlertScreen',
    icon: 'book',
  },
  {
    title: 'Academic Advising Apt.',
    page: 'AboutScreen',
    icon: 'pencil',
  },
  {
    title: 'Course Catalog',
    page: 'AboutScreen',
    icon: 'book-open',
  },
  {
    title: 'Canvas',
    page: 'AboutScreen',
    icon: 'information',
  },
  {
    title: 'Library',
    page: 'AboutScreen',
    icon: 'library-books',
  },
];

const links = [
  {
    title: 'Goatbucks',
    page: 'EmcScreen',
    icon: 'currency-usd',
  },
  {
    title: 'ITS',
    page: 'AlertScreen',
    icon: 'wifi',
  },
  {
    title: 'Directory',
    page: 'AboutScreen',
    icon: 'contacts',
  },
  {
    title: 'WPI Offices',
    page: 'AboutScreen',
    icon: 'office-building',
  },
  {
    title: 'Handshake',
    page: 'EmcScreen',
    icon: 'human-handsup',
  },
  {
    title: 'About',
    page: 'AboutScreen',
    icon: 'information-outline',
  },
  {
    title: 'Report Bug',
    page: 'AboutScreen',
    icon: 'android-debug-bridge',
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
      <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Emergency
            </Text>
          </View>
          {
            emergency.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                onPress={() => this.props.navigation.navigate(item.page)}
                topDivider
                leftIcon={<MaterialCommunityIcons name={item.icon} size={35} style={{ marginRight: 10 }} color="#AC2B37" />}
                chevron
                titleStyle={{ fontSize: 17 }}
                containerStyle={{ height: 55, paddingBottom: 0, paddingTop: 0 }}
              />
            ))
          }

          <View style={styles.header}>
            <Text style={styles.headerText}>
              Navigate
            </Text>
          </View>
          {
            navigate.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                onPress={() => this.props.navigation.navigate(item.page)}
                topDivider
                leftIcon={<MaterialCommunityIcons name={item.icon} size={35} style={{ marginRight: 10 }} color="#AC2B37" />}
                chevron
                titleStyle={{ fontSize: 17 }}
                containerStyle={{ height: 55, paddingBottom: 0, paddingTop: 0 }}
              />
            ))
          }


          <View style={styles.header}>
            <Text style={styles.headerText}>
              Academics
            </Text>
          </View>
          {
            academics.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                onPress={() => this.props.navigation.navigate(item.page)}
                topDivider
                leftIcon={<MaterialCommunityIcons name={item.icon} size={35} style={{ marginRight: 10 }} color="#AC2B37" />}
                chevron
                titleStyle={{ fontSize: 17 }}
                containerStyle={{ height: 55, paddingBottom: 0, paddingTop: 0 }}
              />
            ))
          }

          <View style={styles.header}>
            <Text style={styles.headerText}>
              Links
            </Text>
          </View>
          {
            links.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                onPress={() => this.props.navigation.navigate(item.page)}
                topDivider
                leftIcon={<MaterialCommunityIcons name={item.icon} size={35} style={{ marginRight: 10 }} color="#AC2B37" />}
                chevron
                titleStyle={{ fontSize: 17 }}
                containerStyle={{ height: 55, paddingBottom: 0, paddingTop: 0 }}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

export default MoreScreen;
