import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {
  Course,
  CourseActive,
  HomeActive,
  Message,
  MessageActive,
  User,
  UserActive,
} from '../../assets';

const TabItem = ({onPress, onLongPress, options, isFocused, label}) => {
  const Icon = () => {
    if (label === 'Discover') return <HomeActive width={20} height={20} />;
    if (label === 'Messages') return <MessageActive width={20} height={20} />;
    if (label === 'Courses') return <CourseActive width={20} height={20} />;
    if (label === 'Profiles') return <UserActive width={20} height={20} />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
        {!isFocused && label}
      </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
