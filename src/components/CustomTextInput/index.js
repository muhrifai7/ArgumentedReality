import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import {TextInput, Animated, View, StyleSheet} from 'react-native';
import Button from '../Button';
import {theme} from '../../constants';
const {COLORS, FONTS, SIZES} = theme;

const CustomTextInput = ({
  style,
  containerStyle,
  placeholder,
  handle,
  isPassword,
  autoCapitalizes,
}) => {
  const [state, setState] = React.useState({
    value: '',
    animated: new Animated.Value(0),
    hide: true,
  });

  const handleType = async (value) => {
    await setState({
      ...state,
      value,
    });
    await handle(value);
  };

  React.useEffect(() => {
    state.value !== '' ? animateText(15) : animateText(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.value]);

  const animateText = (toValue) => {
    Animated.timing(state.animated, {
      toValue,
      duration: 200,
    }).start();
  };

  const hidePassword = () => {
    setState({...state, hide: !state.hide});
  };

  const animate = {
      fontSize: state.animated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      fontFamily: 'Poppins-SemiBold',
    },
    styleTextInput = {
      width: isPassword ? '90%' : '100%',
      borderRadius: 15,
      padding: 0,
      fontFamily: 'Poppins-Light',
      marginVertical: 10,
      justifyContent: 'center',
    },
    line = {
      height: state.value !== '' ? 2 : 1,
      backgroundColor: state.value !== '' ? COLORS.blue : COLORS.gray,
      width: '100%',
    },
    container = [containerStyle];

  return (
    <View style={container}>
      <Animated.Text style={animate}>{`${placeholder}`}</Animated.Text>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          placeholder={`${placeholder}`}
          value={state.value}
          onChangeText={(value) => handleType(value)}
          style={[styleTextInput, style]}
          secureTextEntry={isPassword ? state.hide : false}
          placeholderTextColor="#003f5c"
        />
        {isPassword && (
          <Button onPress={hidePassword}>
            <Icon name={state.hide ? 'eye' : 'eye-off'} size={24} />
          </Button>
        )}
      </View>
      <View style={line} />
    </View>
  );
};

CustomTextInput.propTypes = {
  name: PropTypes.string,
};
export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'salmon',
  },
});
