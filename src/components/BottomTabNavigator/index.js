import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import TabItem from "../TabItem"

const MyTabBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            label={label}
            onLongPress={onLongPress}
            onPress={onPress}
            options={options}
            isFocused={isFocused}
          />
        );
      })}
    </View>
  );
}

export default MyTabBar

const styles = StyleSheet.create({
  container: { flexDirection: 'row', backgroundColor: "#FFFF", paddingVertical: 20,paddingHorizontal:20, justifyContent: "space-between" }
})