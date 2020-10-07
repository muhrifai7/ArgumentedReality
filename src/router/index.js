import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import DrawerContent from '../drawerContent';
import {
  HomeScreen,
  Profiles,
  SplashScreen,
  Courses,
  Messages,
  Notifications,
  OnBoarding,
  Register,
  Login,
  ForgotPassword,
} from '../pages';
import {MyTabBar} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Discover"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Course" component={Courses} />
      <Drawer.Screen name="Message" component={Messages} />
      <Drawer.Screen name="Profile" component={Profiles} />
    </Drawer.Navigator>
  );
};

const Authentication = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profiles"
        component={Profiles}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const styes = StyleSheet.create({});
