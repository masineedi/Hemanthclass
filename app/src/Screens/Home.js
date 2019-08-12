import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
  export default  class Home extends Component {

  constructor(){
    super();

    this.state={
      count_value:0
    }

  }

  increment(){
      this.setState({
        count_value:this.state.count_value +1
      })  
      console.log('welcome')    
  }

  decrement(){
    this.setState({
      count_value:this.state.count_value -1
    })
  }

  render() {
    return (
    <View style={{ flex:1, justifyContent:'center'}}> 
      <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
            <TouchableNativeFeedback onPress={this.decrement.bind(this)}>
            <View style={{borderWidth:1, height:50, width:100, justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.fname, styles.nameq]}>Dec(-)</Text>  
            </View>
            </TouchableNativeFeedback>

             <View style={{borderWidth:1, height:50, width:100, justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.fname, styles.nameq]}>{this.state.count_value}</Text>  
             </View>

             <TouchableNativeFeedback onPress={this.increment.bind(this)}>
              <View style={{borderWidth:1, height:50, width:100, justifyContent:'center',alignItems:'center'}}>
              <Text style={[styles.fname, styles.nameq]}>inc(+)</Text>  
              </View>
              </TouchableNativeFeedback>
  
        </View>

    </View>
    );
  }
}


const styles = StyleSheet.create({
  fname:{
    color:'red'
  },
  nameq:{
    fontSize:20
  }
})





