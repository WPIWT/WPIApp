/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
});

export default class CatalogueScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PDFReader
          source={{ uri: this.props.navigation.getParam('link', 'https://www.google.com') }}
        />
      </View>
    );
  }
}

// http://samples.leanpub.com/thereactnativebook-sample.pdf'
