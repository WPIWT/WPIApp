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
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#ACB2B7',
    height: 45,
    textAlignVertical: 'center',
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
  },
});

const police = [
  {
    title: 'Login',
    phone: '978-677-8867',
  },
  {
    title: 'WPI Contacts',
    phone: '978-677-8867',
  },
  {
    title: 'About',
    phone: '978-677-8867',
  },
];

class EmcScreen extends Component {
    static navigationOptions = {
      title: 'WPI',
      headerStyle: {
        backgroundColor: '#AC2B37',
      },
      headerTintColor: 'white',
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
                Police
              </Text>
            </View>
            {
            police.map((item, i) => (
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
