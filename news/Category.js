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

const styles = StyleSheet.create({
  container: {
    height: 130,
    width: 200,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
  },
});

class Category extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 4, width: null, height: null, resizeMode: 'cover',
            }}
          />
          <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            <Text>{this.props.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Category;
