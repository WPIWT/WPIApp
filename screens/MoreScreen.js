/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet, Text, View, SectionList,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ScrollView } from 'react-native-gesture-handler';
import { Font, AppLoading } from 'expo';
import { Root } from 'native-base';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MyriadPro-Bold',
    alignContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SectionHeader: {
    backgroundColor: '#A9B0B7',
    fontSize: 20,
    height: 40,
    padding: 10,
    fontFamily: 'MyriadPro-Bold',
    color: '#fff',
  },
  SectionListItem: {
    fontSize: 18,
    padding: 12,
    color: '#000',
    backgroundColor: '#fff',
    fontFamily: 'MyriadPro-Regular',
  },
});

class MoreScreen extends React.Component {
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
        <ScrollView>
          <SectionList
            sections={[
              { title: 'Account', data: ['Login'] },
              { title: 'Features', data: ['About', 'Emergency Contacts', 'Report Bugs'] },
            ]}
            renderSectionHeader={({ section }) => (
              <Text style={styles.SectionHeader}>
                {' '}
                { section.title }
                {' '}
              </Text>
            )}
            renderItem={({ item }) => (
              <Text style={styles.SectionListItem}>
                {' '}
                { item }
                {' '}
              </Text>
            )}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </View>
    );
  }
}

export default MoreScreen;
