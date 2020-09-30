import React, {useState} from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {State, TabGestureHandler} from 'react-native-gesture-handler';

import {SIZES, FONTS, COLORS} from '../../constants';

const {Value, event, block, cond, eq, set} = Animated;

const AuthScreen = () => {
  const buttonOpacity = new Value(1);

  const onSigninButtonChange = (event) => {
    Alert.alert("I'm touched");
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
        <TabGestureHandler onHandlerStateChange={onSigninButtonChange}>
          <Animated.View style={{...styles.button, opacity: buttonOpacity}}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}>
                <Text
                  style={[
                    {...styles.textSign, ...FONTS.body4},
                    {
                      color: '#fff',
                    },
                  ]}>
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </Animated.View>
        </TabGestureHandler>

        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => {}}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}>
              <Text
                style={[
                  {...styles.textSign, ...FONTS.body4},
                  {
                    color: '#fff',
                  },
                ]}>
                Sign Up
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text>Sign In </Text>
        </View>
        <View>
          <Text>Sign Up </Text>
        </View>
      </View>
      {/* <View styles={styles.header}>
          <Text> Logo </Text>
        </View> */}
      {/* <Formik initialValues={user} onSubmit={onSubmit}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={styles.formContainer}>
              <FontAwesome name="user-o" color="#009387" size={20} />
              <CustomTextInput
                handle={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Email"
              />
              <CustomTextInput
                handle={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="Password"
                isPassword={true}
              />
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik> */}
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  header: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  content: {
    height: SIZES.height / 7,
    marginVertical: 20,
  },
  button: {
    marginVertical: 5,
    paddingHorizontal: 20,
  },
  signIn: {
    width: '100%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
  },
  textSign: {
    fontSize: 18,
  },
});
