import React, {useState} from 'react';
import {
  Button,
  TextInput,
  Platform,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

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

import {SIZES, FONTS, COLORS} from '../../constants';

const Register = ({navigation}) => {
  const initialState = {
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  };
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

  const updateSecureTextEntry = () => {
    setData({
      ...userInfo,
      secureTextEntry: !userInfo.secureTextEntry,
    });
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Formik initialValues={userInfo} onSubmit={onSubmit}>
            {({handleChange, handleBlur, handleSubmit, values}) => (
              <View>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => textInputChange(val)}
                  />
                  {userInfo.check_textInputChange ? (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  ) : null}
                </View>
                <View style={styles.action}>
                  <Feather name="lock" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Your Password"
                    secureTextEntry={userInfo.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => handlePasswordChange(val)}
                  />
                  <TouchableOpacity onPress={updateSecureTextEntry}>
                    {userInfo.secureTextEntry ? (
                      <Feather name="eye-off" color="grey" size={20} />
                    ) : (
                      <Feather name="eye" color="grey" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.action}>
                  <Feather name="lock" color="#05375a" size={20} />
                  <TextInput
                    placeholder="Confirm Your Password"
                    secureTextEntry={
                      userInfo.confirm_secureTextEntry ? true : false
                    }
                    style={styles.textInput}
                    autoCapitalize="none"
                    // onChangeText={(val) => handleConfirmPasswordChange(val)}
                  />
                  <TouchableOpacity onPress={updateSecureTextEntry}>
                    {userInfo.secureTextEntry ? (
                      <Feather name="eye-off" color="grey" size={20} />
                    ) : (
                      <Feather name="eye" color="grey" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.textPrivate}>
                  <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                  </Text>
                  <Text
                    style={{...styles.color_textPrivate, fontWeight: 'bold'}}>
                    {' '}
                    Terms of service
                  </Text>
                  <Text style={styles.color_textPrivate}> and</Text>
                  <Text
                    style={{...styles.color_textPrivate, fontWeight: 'bold'}}>
                    {' '}
                    Privacy policy
                  </Text>
                </View>

                <View style={styles.button}>
                  <TouchableOpacity style={styles.signIn} onPress={() => {}}>
                    <LinearGradient
                      colors={[COLORS.blue, COLORS.blue]}
                      style={styles.signIn}>
                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: '#fff',
                          },
                        ]}>
                        Sign Up
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.replace('Login')}
                    style={[
                      styles.signIn,
                      {
                        borderColor: COLORS.blue,
                        borderWidth: 1,
                        marginTop: 15,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: COLORS.blue,
                        },
                      ]}>
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
                <GoogleSigninButton
                  style={{width: SIZES.width * 0.45, height: 48}}
                  size={GoogleSigninButton.Size.Standard}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={_signIn}
                  disabled={loading}
                />
              </View>
            )}
          </Formik>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: COLORS.gray,
  },
});
