import React, {Component, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Logo} from '../../assets/icons';
import {SIZES, FONTS, COLORS} from '../../constants';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 300);
  }, [navigation]);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Logo width={120} height={120} />
      </View>
    </View>
  );
};

export default SplashScreen;

const styes = StyleSheet.create({});
