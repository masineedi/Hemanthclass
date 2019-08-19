import React, {Component} from 'react';
import {View,Text, StyleSheet,Image, AsyncStorage} from 'react-native';
export default class ScrollImage extends Component {

constructor(){
  super()
  this.state={
    name:'',
    city:'',
    password:''
  }
}



  componentDidMount(){
   
    AsyncStorage.getItem('nameid', (err,results) => {
    

      let result = JSON.parse(results)
      console.log(result);
      this.setState({
        name:result.name,
        city:result.city,
        password:result.password

      })
    });
  }

      render(){
        return(
          <View style={{ flex:1,borderWidth:5, borderColor:'yellow',}}>
               <Text style={{fontSize:25, color:'red'}}>{this.state.name}</Text>
            {/* <View style={{flex:1, margin:4}}>
          <Image style={{width:'100%', height:'100%', }}resizeMode={'center'} source={{uri:"https://onlinejpgtools.com/images/examples-onlinejpgtools/smile.jpg"}}/>
            <Text>this kjhkj is Image one</Text>
            <Button title="back to home" onPress={()=>this.props.navigation.navigate('Home')} />
          </View> */}
 
          <View style={{flex:1}}>
            <View style={{flexGrow:2, backgroundColor:'red'}}>
                <Text style={{fontSize:25}}>{this.state.name}</Text>
            </View>
            <View style={{flexShrink:1, backgroundColor:'yellow'}}>
                <Text>{this.state.city}</Text>
            </View>
            <View style={{flexGrow:2, backgroundColor:'green'}}>
                <Text>{this.state.password}</Text>
            </View>
          </View>


          </View>
        )
      }
}




