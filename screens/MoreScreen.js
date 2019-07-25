/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { MaterialIcons } from '@expo/vector-icons';

const list = [
  {
    title: 'Login',
    page: 'AboutScreen',
    icon: 'lock',
  },
  {
    title: 'WPI Contacts',
    page: 'AboutScreen',
    icon: 'contact-phone',
  },
  {
    title: 'About',
    page: 'AboutScreen',
    icon: 'info',
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
                onPress={() => this.props.navigation.navigate('AboutScreen')}
                topDivider
                bottomDivider
                leftIcon={<MaterialIcons name={item.icon} size={42} style={{ marginRight: 10 }} color="#ACB2B7" />}
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
