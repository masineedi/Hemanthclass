import React, { Component } from "react";
import { View, Button } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import ScrollImage from './app/src/Screens/ScrollImages'
import Home from './app/src/Screens/Home'

export default  class App extends Component {



  render() {
    return (
    <View style={{ flex:1}}>        
    <Appcontain/>
    </View>
    );
  }
}

const stacknav = createStackNavigator({
  Home:{
    screen:Home
  },
  ScrollImage:{
    screen:ScrollImage
  }

})

const Appcontain = createAppContainer(stacknav)




