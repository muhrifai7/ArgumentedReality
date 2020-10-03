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
  Alert,
} from 'react-native';
import {Formik, getIn} from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
import {Users} from '../../utils/Dumydata';
import {SIZES, FONTS, COLORS} from '../../constants';
import DebugFormik from '../../utils/DebugFormik';

const Login = ({navigation}) => {
  const initialState = {
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
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

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setUserInfo({
        ...userInfo,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setUserInfo({
        ...userInfo,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setUserInfo({
        ...userInfo,
        password: val,
        isValidPassword: true,
      });
    } else {
      setUserInfo({
        ...userInfo,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setUserInfo({
      ...userInfo,
      secureTextEntry: !userInfo.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setUserInfo({
        ...userInfo,
        isValidUser: true,
      });
    } else {
      setUserInfo({
        ...userInfo,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (email, password) => {
    const foundUser = Users.filter((item) => {
      return email == item.email && password == item.password;
    });
    console.log(foundUser, 'foundUser');

    if (userInfo.email.length == 0 || userInfo.password.length == 0) {
      Alert.alert('Wrong Input!', 'email or password field cannot be empty.', [
        {text: 'Okay'},
      ]);
      return;
    }

    // if (foundUser.length == 0) {
    //   Alert.alert('Invalid User!', 'email or password is incorrect.', [
    //     {text: 'Okay'},
    //   ]);
    //   return;
    // }
    navigation.navigate('MainApp');
  };

  const SignInSchema = Yup.object().shape({
    userInfo: Yup.object().shape({
      password: Yup.string()
        .min(6, 'Password To Short!')
        .max(50, 'Password To Long!')
        .required('Password is Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    }),
  });

  const onSubmit = (values) => {
    navigation.navigate('MainApp');
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" /> */}
      <View style={styles.header}>
        <Text style={styles.text_header}>Wellcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Formik
            initialValues={userInfo}
            onSubmit={onSubmit}
            validationSchema={SignInSchema}>
            {({
              values,
              touched,
              errors,
              dirty,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            }) => (
              <View>
                <View style={styles.action}>
                  <FontAwesome name="user-o" color={COLORS.text} size={20} />
                  <TextInput
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={handleChange('userInfo.email')}
                    onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                  />
                  {getIn(errors, 'userInfo.email') &&
                  getIn(touched, 'userInfo.email') ? null : (
                    <Animatable.View animation="bounceIn">
                      <Feather name="check-circle" color="green" size={20} />
                    </Animatable.View>
                  )}
                </View>
                {getIn(errors, 'userInfo.email') &&
                  getIn(touched, 'userInfo.email') && (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>
                        {errors.userInfo.email}
                      </Text>
                    </Animatable.View>
                  )}

                <View style={styles.action}>
                  <Feather name="lock" color={COLORS.text} size={20} />
                  <TextInput
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={userInfo.secureTextEntry ? true : false}
                    style={[
                      styles.textInput,
                      {
                        color: COLORS.text,
                      },
                    ]}
                    autoCapitalize="none"
                    onChangeText={handleChange('userInfo.password')}
                  />

                  <TouchableOpacity onPress={updateSecureTextEntry}>
                    {userInfo.secureTextEntry ? (
                      <Feather name="eye-off" color="grey" size={20} />
                    ) : (
                      <Feather name="eye" color="grey" size={20} />
                    )}
                  </TouchableOpacity>
                </View>
                {getIn(errors, 'userInfo.password') &&
                  getIn(touched, 'userInfo.password') && (
                    <Animatable.View animation="fadeInLeft" duration={500}>
                      <Text style={styles.errorMsg}>
                        {errors.userInfo.password}
                      </Text>
                    </Animatable.View>
                  )}

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Authentication', {
                      screen: 'ForgotPassword',
                    })
                  }>
                  <Text style={{color: COLORS.primary, marginTop: 15}}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>

                <View style={styles.button}>
                  <TouchableOpacity
                    style={styles.signIn}
                    onPress={handleSubmit}>
                    <LinearGradient
                      colors={[COLORS.primary, COLORS.primary]}
                      style={styles.signIn}>
                      <Text
                        style={[
                          styles.textSign,
                          {
                            color: '#fff',
                          },
                        ]}>
                        Sign In
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('MainApp')}
                    style={[
                      styles.signIn,
                      {
                        borderColor: COLORS.primary,
                        borderWidth: 1,
                        marginTop: 15,
                      },
                    ]}>
                    <Text
                      style={[
                        styles.textSign,
                        {
                          color: COLORS.primary,
                        },
                      ]}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
                <GoogleSigninButton
                  style={{height: 48}}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={_signIn}
                  disabled={loading}
                />
              </View>
            )}
          </Formik>

          {/* <DebugFormik /> */}
          {Platform.OS === 'ios' && <KeyboardSpacer />}
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
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
