import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ForgotPassword = () => {
  const [state, setState] = useState();

  return (
    <View style={styles.container}>
      <Text> ScrForgotPasswordeen</Text>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
