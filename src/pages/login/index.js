import React, {useState} from 'react';
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

GoogleSignin.configure(
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    webClientId: `${process.env.GOOGLE_CLIENT_ID}`, // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    hostedDomain: '', // specifies a hosted domain restriction
    loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    accountName: '', // [Android] specifies an account name on the device that should be used
    iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  }),
);

import CustomTextInput from '../../components/CustomTextInput';
import ContainerAuth from '../../components/ContainerAuth';

import {SIZES, FONTS, COLORS} from '../../constants';

const Login = () => {
  console.log(process.env, '{process.env');
  const initialState = {};
  const [userInfo, setUserInfo] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  // Somewhere in your code
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo({userInfo});
      setLoading(true);
    } catch (error) {
      console.log(error.message, 'reoeoeooeoe');
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        setError(error.message);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        setLoading(true);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        setError(error.message);
      } else {
        setError('Something Error');
        // some other error happened
      }
    }
    setLoading(false);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.content}>
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
                Sign In
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
          <GoogleSigninButton
            style={{width: SIZES.width * 0.45, height: 48}}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Dark}
            onPress={_signIn}
            disabled={loading}
          />
        </View>
        {loading && (
          <View>
            <Text>{error}</Text>
          </View>
        )}
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

export default Login;

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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 19,
  },
  textSign: {
    fontSize: 18,
  },
});
