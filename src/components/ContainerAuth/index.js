import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
const aspectRatio = 450 / 1125;

const height = width * aspectRatio;

const ContainerAuth = () => {
  console.log(height, width, 'ukurannan');
  return (
    <View style={styles.container}>
      <Text>Courses Screen</Text>
    </View>
  );
};

export default ContainerAuth;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height,
    backgroundColor: 'salmon',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
