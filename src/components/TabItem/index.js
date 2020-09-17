import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Course, courseActive, Home, HomeActive, Message, MessageActive, User, UserActive } from "../../assets"

const TabItem = ({ onPress, onLongPress, options, isFocused, label }) => {
  const Icon = () => {
    
    // if (label === "Discover") return (<SvgUri
    //   uri={Course}
    // />)
    //  if(label === "Messages") return <Message />
    //  if(label === "Courses") return <Course />
    //  if(label === "Profiles") return <User />

  }
  return (
    <TouchableOpacity
    style={styles.container}
      accessibilityRole="button"
      accessibilityStates={isFocused ? ['selected'] : []}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
    >
      {/* <Icon
      /> */}
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default TabItem;


const styles = StyleSheet.create({
  container : { alignContent: 'center' }
})