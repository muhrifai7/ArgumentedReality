import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {Header} from 'react-native-elements';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomLeft = (navigation) => {
  return (
    <View>
      <Icon
        name="arrow-back-outline"
        size={30}
        color="white"
        onPress={() => {
          navigation.navigate('MainApp');
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

const Setting = ({navigation}) => {
  console.log(navigation, 'oekekekeke');
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.primary} />
      <Header
        backgroundColor={COLORS.primary}
        leftComponent={<CustomLeft navigation={navigation} />}
        centerComponent={{text: 'User Management', style: {color: '#fff'}}}
        rightComponent={<CustomRight />}
      />
      <Text>Profiles Screen</Text>
    </View>
  );
};

export default Setting;

const styes = StyleSheet.create({});
