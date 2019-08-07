import React, {Component} from 'react';
import {View,Text, StyleSheet,Image, ScrollView, Button} from 'react-native';
export default class ScrollImage extends Component {
      render(){
        return(
          <View style={{ flex:1,borderWidth:5, borderColor:'yellow', flexDirection:'row' }}>
            <ScrollView horizontal={true}>
            <View style={{flexDirection:'row', margin: 4,}}>
   
            <View style={{height:400, width:150, margin:4}}>
          <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={{uri:"https://onlinejpgtools.com/images/examples-onlinejpgtools/smile.jpg"}}/>
            <Text>this is Image one</Text>
            <Button title="back to home" onPress={()=>this.props.navigation.navigate('Home')} />
          </View>
            <View style={{height:400,width:150,margin:4}}>
          <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={{uri:"https://onlinejpgtools.com/images/examples-onlinejpgtools/smile.jpg"}}/>
            <Text>this is Image three</Text>
          </View>
            <View style={{height:400,width:150,margin:4}}>
            <Image style={{width:'100%', height:'100%', resizeMode:'contain'}} source={require('../../../assets/images/mini.jpeg')}/>
            <Text>this is Image four</Text>
            </View>
            </View>
  
            </ScrollView>
        

  
           
          </View>
        )
      }
}




