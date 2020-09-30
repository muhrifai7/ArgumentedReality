import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {
  TextInput,
  Animated,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

import {theme} from '../../constants';
const {COLORS, FONTS, SIZES} = theme;

const CustomTextInput = ({
  icon,
  style,
  containerStyle,
  placeholder,
  handleChange,
  isPassword,
  errors,
  secureTextEntry,
  handlesecureTextEntry,
  touched,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        {icon && <FontAwesome name={icon} color="#05375a" size={20} />}
      </View>
      <View>
        <TextInput
          placeholder={placeholder}
          autoCapitalize="none"
          // style={style}
          onChangeText={() => handleChange()}
        />
      </View>
      {touched && <Text style={styles.error}>{errors.email}</Text>}
    </View>
  );
};

CustomTextInput.propTypes = {
  name: PropTypes.string,
};
export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    marginRight: 9,
  },
  error: {
    color: 'red',
  },
});
