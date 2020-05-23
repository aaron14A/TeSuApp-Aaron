import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';

export const AppStackNavigator = createStackNavigator({
   MainScreen : {
    screen : MainScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  SettingScreen : {
    screen : SettingScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  AboutScreen :{
    screen : AboutScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'MainScreen'
  }
);
