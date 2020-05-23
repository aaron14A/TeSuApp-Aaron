import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';

export const AppTabNavigator = createBottomTabNavigator({
  MainScreen : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/home.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "Home",
    }
  },
  SettingScreen: {
    screen: SettingScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/settings.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Settings",
    }
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/info.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "About",
    }
  }
});
