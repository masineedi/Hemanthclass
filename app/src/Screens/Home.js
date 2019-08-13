import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, Button, Image } from "react-native";
  export default  class Home extends Component {

    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#45d"
        />
      ),

    };
 

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
    const { params } = this.props.navigation.state
    console.log(params)
    return (
    <View style={{ flex:1, }}> 
        <View style={{ justifyContent:'center', alignItems:'center', margin: 20,borderWidth:2,borderColor: '#000', padding:10,backgroundColor:'#a33'}}>
            <Image style={{width:100, height:100,borderRadius:100,resizeMode:'contain' }}source={{uri:"https://bootdey.com/img/Content/avatar/avatar1.png"}}/>
            <View style={{alignItems:'flex-start', borderWidth:1, padding:4, margin:5, borderColor:'#fff', marginTop: 30,}}>
                <Text style={{fontSize:20}}>Email Id: <Text style={{fontSize:28, color:'#fff', }}> {" "}{params.name}</Text> </Text>
                <Text  style={{fontSize:20}}>City Id: <Text style={{fontSize:28, color:'#fff'}}>{"   "}{params.city}</Text> </Text>
                <Text  style={{fontSize:20}}>EmpID: <Text style={{fontSize:28, color:'#fff',}}>{"  " }{params.password}</Text> </Text>
            </View>

        </View>
        <View style={{height:100}}>

        </View>
      <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center', marginVertical: 20,}}>
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





