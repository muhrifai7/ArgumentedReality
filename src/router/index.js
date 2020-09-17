import React from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
    HomeScreen,
    Profiles,
    SplashScreen,
    Courses,
    Messages,
    Notifications
} from "../pages";
import { MyTabBar } from "../components"


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />} tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
            <Tab.Screen name="Discover" component={HomeScreen} />
            <Tab.Screen name="Courses" component={Courses} />
            <Tab.Screen name="Messages" component={Messages} />
            {/* <Tab.Screen name="Notifications" component={Notifications} /> */}
            <Tab.Screen name="Profiles" component={Profiles} />
        </Tab.Navigator>
    )
}


const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="MainApp">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp}  options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Routes;

const styes = StyleSheet.create({

})