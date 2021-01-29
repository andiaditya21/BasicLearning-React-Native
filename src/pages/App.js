import React from 'react';
import {ScrollView, View} from 'react-native';
import Flexbox from '../flexbox/Flexbox';
import Product from '../product/Product';

const App = () => {
  return (
    <View>
      <ScrollView>
        <Product />
        <Product />
        <Flexbox />
      </ScrollView>
    </View>
  );
};

export default App;
