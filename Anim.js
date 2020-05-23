import React from 'react';
import LottieView from 'lottie-react-native';
import {View, Image} from 'react-native';

export default class TeacherAnimation extends React.Component {
  render() {
    return (

      <Image
      source={require('../assets/Anim1.json')}
      style={{width:"60%"}}
       />
    )
  }
}
