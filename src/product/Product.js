/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Photo from '../../Foto.jpeg';

class Product extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.wrapper}>
          <Image
            source={Photo}
            style={{width: 200, height: 200, borderRadius: 8}}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
            New Macbook Pro 2019
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              marginTop: 12,
              color: '#f2994a',
            }}>
            Rp. 25.000.000
          </Text>
          <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
            Jakarta Barat
          </Text>
          <View
            style={{
              backgroundColor: '#6fcf97',
              marginTop: 24,
              paddingVertical: 6,
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: 'white',
                textAlign: 'center',
              }}>
              BELI
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 4,
    width: 224,
  },
});

export default Product;
