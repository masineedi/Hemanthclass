import React, { Component } from "react";
import { View, Button } from "react-native";
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import ScrollImage from './app/src/Screens/ScrollImages'
import Home from './app/src/Screens/Home'
import Icon from 'react-native-vector-icons/FontAwesome'
import Login from './app/src/Screens/Login'
import Flatlistt from './app/src/Screens/Flatlist'


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
  },
  Login:{
    screen:Login,

    navigationOptions:{
      title:'Login Page',
        headerStyle:{
            // tintColor:'white',
            backgroundColor:'red',
        },
        headerTintColor:'white',
        
    }
  },
  Flat:{
    screen:Flatlistt
  },


},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor:'#00f'
    }
  },
  initialRouteName:'Flat'
})

const tabs = createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      tabBarIcon: (({tintColor})=> <Icon color={tintColor} name={'lock'} size={20}/>)
    }
  },
  ScrollImage:{
    screen:ScrollImage,
    navigationOptions:{
      tabBarIcon: (({tintColor})=> <Icon color={tintColor} name={'home'} size={20}/>)
    }

  },
  Welcome:{
    screen:Home,
    navigationOptions:{
      tabBarIcon: (({tintColor})=> <Icon color={tintColor} name={'music'} size={20}/>)
    }
  }, 
},
{
  tabBarOptions:{
  activeTintColor:'red',
  inactiveTintColor:'green'
 }
}
)



// const drawer = createDrawerNavigator({

//   Home:{
//     screen:Home
//   },
//   ScrollImage:{
//     screen:ScrollImage
//   },
//   // styles:{
//   //   screen:Home
//   // },

// })

const Appcontain = createAppContainer(stacknav)




