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
    title: 'Undergraduate Catalog',
    link: 'https://www.wpi.edu/sites/default/files/WPI_UGCat2019-20_FinalWEB.pdf',
  },
  {
    title: 'Graduate Catalog',
    link: 'https://www.wpi.edu/sites/default/files/docs/Academic-Resources/GradCat2019-20_WEB-Final.pdf',
  },
];

class CatalogueScreen extends Component {
  static navigationOptions = {
    title: 'Catalogs',
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
                onPress={() => this.props.navigation.navigate('CatalogViewer', { link: item.link })}
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

export default CatalogueScreen;
