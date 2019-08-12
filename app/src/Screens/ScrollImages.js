import React, {Component} from 'react';
import {View,Text, StyleSheet,Image, ScrollView, Button} from 'react-native';
export default class ScrollImage extends Component {
      render(){
        return(
          <View style={{ flex:1,borderWidth:5, borderColor:'yellow',}}>
            {/* <View style={{flex:1, margin:4}}>
          <Image style={{width:'100%', height:'100%', }}resizeMode={'center'} source={{uri:"https://onlinejpgtools.com/images/examples-onlinejpgtools/smile.jpg"}}/>
            <Text>this kjhkj is Image one</Text>
            <Button title="back to home" onPress={()=>this.props.navigation.navigate('Home')} />
          </View> */}

          <View style={{flex:1}}>
            <View style={{flexGrow:2, backgroundColor:'red'}}>
                <Text>One</Text>
            </View>
            <View style={{flexShrink:1, backgroundColor:'yellow'}}>
                <Text>Two</Text>
            </View>
            <View style={{flexGrow:2, backgroundColor:'green'}}>
                <Text>Three</Text>
            </View>
          </View>


          </View>
        )
      }
}




