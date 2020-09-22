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

const Login = ({navigation}) => {
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
    setUserInfo({
      ...userInfo,
      secureTextEntry: !userInfo.secureTextEntry,
    });
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const onSubmit = (values) => {
    console.log(values, 'onSubmitonSubmit');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Wellcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalIndicator={false}>
          <Formik initialValues={userInfo} onSubmit={onSubmit}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <View>
                <View style={styles.action}>
                  <CustomTextInput
                    icon="user-o"
                    placeholder="Your Username"
                    style={styles.textInput}
                    autoCapitalize=""
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('username')}
                    errors={errors.email}
                    touched={touched.email}
                  />
                </View>
                <View style={styles.action}>
                  <CustomTextInput
                    icon="lock"
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    errors={errors.password}
                    touched={touched.password}
                  />
                </View>

                <TouchableOpacity>
                  <Text style={{color: COLORS.blue, marginTop: 15}}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>

                <View style={styles.button}>
                  <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {
                      handleSubmit();
                    }}>
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
                        Sign In
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
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
                      Sign Up
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

//  <View style={styles.footer}>
//    <View>
//      <GoogleSigninButton
//        style={{width: SIZES.width * 0.45, height: 48}}
//        size={GoogleSigninButton.Size.Standard}
//        color={GoogleSigninButton.Color.Dark}
//        onPress={_signIn}
//        disabled={loading}
//      />
//    </View>
//    {loading && (
//      <View>
//        <Text>{error}</Text>
//      </View>
//    )}
//  </View>;
