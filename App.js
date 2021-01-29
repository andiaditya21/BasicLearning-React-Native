import React from 'react';
import {Image, Text, View, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{backgroundColor: 'blue', width: 100, height: 100}} />
      <Text>Andi</Text>
      <Text>Aditya</Text>
      <Text>Mega</Text>
      <Anita />
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Anita = () => {
  return <Text>Anita</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/200/200/people'}}
      style={{width: 200, height: 200}}
    />
  );
};

export default App;
