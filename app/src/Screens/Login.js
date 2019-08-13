
import React, {Component } from 'react';
import {  View, Text, TextInput, Button } from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    signup(){

        if ( this.state.text.length > 1 && this.state.pass.length > 1) {
            this.props.navigation.navigate('Home')
            console.log( this.state.text)
        } else {
            alert("Please fill the details")
        }       
    }

  render() {
    return (
      <View style={{flex:1, marginHorizontal:4}}>
        <View style={{  borderWidth: 1,margin:4}}>
            <Text style={{fontSize:20, color:'#00f'}}>Enter EMail:</Text>
            <TextInput onChangeText={(text)=>{this.setState({text})}} value={this.state.text} placeholder='enter email Id'/>
        </View>
        <View style={{ borderWidth: 1,margin:4}}>
            <Text style={{fontSize:20, color:'#00f'}}>Enter Password:</Text>
            <TextInput  onChangeText={(pass)=>{this.setState({pass})}} value={this.state.pass}   secureTextEntry  placeholder='enter password'/>
        </View>

        <Button onPress={this.signup.bind(this)} title={'signup'} />

        
      </View>
    );
  }
}

