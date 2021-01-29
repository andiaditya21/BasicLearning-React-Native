import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import Foto from '../../Foto.jpeg';

const Flexbox = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'grey',
          justifyContent: 'space-between',
        }}>
        <View style={{backgroundColor: 'pink', height: 100, width: 50}} />
        <View style={{backgroundColor: 'orange', height: 150, width: 50}} />
        <View style={{backgroundColor: 'yellow', height: 200, width: 50}} />
        <View style={{backgroundColor: 'black', height: 250, width: 50}} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Beranda</Text>
        <Text>Product</Text>
        <Text>Contact</Text>
        <Text>About</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          justifyContent: 'center',
        }}>
        <Image
          source={Foto}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Andi Aditya Pratama
          </Text>
          <Text>1.200 Followers</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kotak: {},
});

export default Flexbox;
