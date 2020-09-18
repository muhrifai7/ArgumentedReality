import React, { Component, useEffect } from 'react';
import { StyleSheet,View, Text } from 'react-native';

const SplashScreen = ({navigation})=> {

  useEffect(()=> {
      setTimeout(()=> {
        navigation.replace("OnBoarding")
      },300)
  },[navigation])
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Splash Screen</Text>
        </View>
      );
}

export default SplashScreen;

const styes = StyleSheet.create({

})