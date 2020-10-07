import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {Header} from 'react-native-elements';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomLeft = (navigation) => {
  console.log(navigation, 'oekekekeke');
  return (
    <View>
      <Icon
        name="menu"
        size={30}
        color="white"
        onPress={() => {
          navigation.openDrawer();
        }}></Icon>
    </View>
  );
};

const CustomRight = () => {
  return (
    <View>
      <Icon name="person" size={30} color="white" onPress={() => {}}></Icon>
    </View>
  );
};

const IdentitasToko = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Header
        backgroundColor={COLORS.primary}
        leftComponent={<CustomLeft navigation={navigation.navigate} />}
        centerComponent={{text: 'Identitas Toko', style: {color: '#fff'}}}
        rightComponent={<CustomRight />}
      />
      <Text>Toko Screen</Text>
    </View>
  );
};

export default IdentitasToko;

const styes = StyleSheet.create({});
