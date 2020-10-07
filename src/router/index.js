import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../constants';

import DrawerContent from '../drawerContent';
import {
  HomeScreen,
  Profiles,
  SplashScreen,
  Toko,
  Dashboard,
  Notifications,
  OnBoarding,
  Register,
  Login,
  ForgotPassword,
  HomeForm,
} from '../pages';
import {MyTabBar} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoardingScreen"
        component={BoardingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const BoardingScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Authentication"
        component={Authentication}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Profiles"
        component={Profiles}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
      <Stack.Screen
        name="Toko"
        component={Toko}
        options={{
          title: 'Toko',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="HomeForm" component={HomeForm} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Dashboard',
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const RootHome = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HomeForm" component={HomeForm} />
    </Stack.Navigator>
  );
};

const RootToko = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Toko"
        component={Toko}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen name="HomeForm" component={HomeForm} /> */}
    </Stack.Navigator>
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

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="RootHome" component={RootHome} />
      <Drawer.Screen name="Profiles" component={Profiles} />
      <Drawer.Screen name="RootToko" component={RootToko} />
    </Drawer.Navigator>
  );
};

export {MainApp};
