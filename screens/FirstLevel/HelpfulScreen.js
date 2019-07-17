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
    title: '25Live',
    link: 'https://25live.collegenet.com/wpi/#home_my25live[0]',
  },
  {
    title: 'BannerWeb',
    link: 'https://bannerweb.wpi.edu/pls/prod/twbkwbis.P_WWWLogin',
  },
  {
    title: 'Canvas',
    link: 'https://canvas.wpi.edu',
  },
  {
    title: 'Get Goatbucks',
    link: 'https://get.cbord.com/wpi/full/prelogin.php',
  },
  {
    title: 'Graduate Schedule',
    link: 'https://www.wpi.edu/sites/default/files/2019/03/21/GR_2019-20.pdf',
  },
  {
    title: 'Handshake',
    link: 'https://wpi.joinhandshake.com/login',
  },
  {
    title: 'Laundry',
    link: 'https://laundryconnect.net/wpi/wpi.html',
  },
  {
    title: 'Undergraduate Schedule',
    link: 'https://www.wpi.edu/sites/default/files/2019/03/21/UG_2019-20.pdf',
  },
  {
    title: 'WPI Offices',
    link: 'https://www.wpi.edu/offices',
  },
];

class HelpfulScreen extends Component {
  static navigationOptions = {
    title: 'Helpful Screen',
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
                onPress={() => this.props.navigation.navigate('HelpfulLinks', { link: item.link, name: item.title })}
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

export default HelpfulScreen;
