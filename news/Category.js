/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 200,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'MyriadPro-Regular',
    fontSize: 16,
  },
});

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'MinionPro-BoldDisp': require('../assets/fonts/MinionPro-BoldDisp.ttf'),
      'MyriadPro-Light': require('../assets/fonts/MyriadPro-Light.ttf'),
      'MyriadPro-Regular': require('../assets/fonts/MyriadPro-Regular.ttf'),
      'MyriadPro-Bold': require('../assets/fonts/MyriadPro-Bold.ttf'),
      'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
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
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 4, width: null, height: null, resizeMode: 'cover', borderRadius: 5, overflow: 'hidden', alignContent: 'center',
            }}
          />
          <View style={{
            flex: 1, paddingLeft: 10, paddingTop: 10, paddingBottom: 5, flexWrap: 'wrap',
          }}
          >
            <Text style={styles.text}>
              {this.props.name}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
