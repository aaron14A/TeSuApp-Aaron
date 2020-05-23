import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigatorMath } from './AppStackNavigatorMath';
import MTestScreen from '../screens/MTestScreen';
import MWorksheetScreen from '../screens/MathsScreens/MWorksheetScreen';
import MLearnScreen from '../screens/MathsScreens/MLearnScreen';

export const AppTabNavigatorMath = createBottomTabNavigator({
  MTestScreen : {
    screen: AppStackNavigatorMath,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/home.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "MathsTest",
    }
  },
  MWorksheetScreen: {
    screen: MWorksheetScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/settings.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "MathsWorksheets",
    }
  },
  MLearnScreen: {
    screen: MLearnScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/info.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Learn",
    }
  }
});
