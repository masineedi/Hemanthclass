import React, { Component } from "react";
import { View, Button, Text } from "react-native";


export default  class Home extends Component {



  render() {
    return (
    <View style={{ flex:1}}> 
        <Text>This Home page</Text>       
        <Button onPress={()=>this.props.navigation.navigate("ScrollImage")} title="Clicke here"/>
    </View>
    );
  }
}





