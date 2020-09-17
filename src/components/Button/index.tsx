import React from 'react';
import {Text, Animated, TouchableOpacity} from 'react-native';

import styles from './styles';

type PropsButton = {
  title?: String;
  type?: 'primary' | 'dark' | 'light';
  onPress?: () => void;
  style?: Object;
  children?: any;
};

const Button: React.FC<PropsButton> = ({
  type,
  style,
  title,
  onPress,
  children,
}) => {
  const [state] = React.useState({
    animated: new Animated.Value(1),
  });


  const inAnimate = (): void => {
    Animated.spring(state.animated, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const outAnimate = (): void => {
    Animated.spring(state.animated, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle: Object = {
    transform: [{scale: state.animated}],
  };

  const types: any = [
    type === 'dark' && styles.dark,
    type === 'primary' && styles.primary,
    type === 'light' && styles.light,
  ];

  const textStyles: any = [
    type === 'dark' && styles.textDark,
    type === 'primary' && styles.textPrimary,
    type === 'light' && styles.textLight,
  ];

  return (
    <TouchableOpacity
      activeOpacity={0.99}
      onPressIn={inAnimate}
      onPressOut={outAnimate}
      onPress={onPress}>
      <Animated.View style={[animatedStyle, types, style]}>
        {children ? children : <Text style={textStyles}>{title}</Text>}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;
