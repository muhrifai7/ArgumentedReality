import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar, Button} from 'react-native';
import {Header} from 'react-native-elements';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomLeft = ({navigation}) => {
  console.log(navigation, 'teesss');
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

const Setting = ({navigation}) => {
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
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={() => navigation.openDrawer()} title="Go back home" />
      </View>
    </View>
  );
};

export default Setting;

const styes = StyleSheet.create({});
