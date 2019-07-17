/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';


const list = [
  {
    title: 'Daniels Hall',
    link: 'https://laundryconnect.net/wpidaniels.aspx',
  },
  {
    title: 'East Hall',
    link: 'https://laundryconnect.net/wpieasthall.aspx',
  },
  {
    title: 'Elbridge House',
    link: 'https://laundryconnect.net/wpi16elbridge.aspx',
  },
  {
    title: 'Ellsworth Apartment',
    link: 'https://laundryconnect.net/wpiellsworth.aspx',
  },
  {
    title: 'Faraday Hall',
    link: 'https://laundryconnect.net/wpifarraday.aspx',
  },
  {
    title: 'Founders Hall',
    link: 'https://laundryconnect.net/wpifounders.aspx',
  },
  {
    title: 'Hackfield House',
    link: 'https://laundryconnect.net/wpi26hackfeld.aspx',
  },
  {
    title: 'Institute Hall',
    link: 'https://laundryconnect.net/wpi_institute.aspx',
  },
  {
    title: 'Messenger Hall',
    link: 'https://laundryconnect.net/wpimessenger.aspx',
  },
  {
    title: 'Schussler House',
    link: 'https://laundryconnect.net/wpi22schussler.aspx',
  },
  {
    title: 'Trowbridge House',
    link: 'https://laundryconnect.net/wpi25trowbridge.aspx',
  },
];

class LaundryScreen extends Component {
  static navigationOptions = {
    title: 'Helpful Links',
    headerStyle: {
      backgroundColor: '#AC2B37',
    },
    headerTintColor: 'white',
  };

  render() {
    return (
      <View>
        <ScrollView>
          {
            list.map((item, i) => (
              <ListItem
                Component={TouchableScale}
                friction={90}
                tension={100} // here TouchableScale
                activeScale={0.95}
                key={i}
                title={item.title}
                onPress={() => this.props.navigation.navigate('LaundryLinks', { link: item.link, name: item.title })}
                topDivider
                chevron
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

export default LaundryScreen;
