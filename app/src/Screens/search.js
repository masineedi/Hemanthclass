import React, { Component } from 'react';

import { Text, StyleSheet, View, TextInput, ActivityIndicator, Alert, FlatList } from 'react-native';

export default class Search extends Component {

    static navigationOptions={
     title:'Searchdd Page',
     
    }
 
  constructor(props) {

    super(props);

    this.state = {

      isLoading: true,
      text: '',
      dataSource:[]
    
    }

    this.arrayholder = [] ;
  }
 
  componentDidMount() {
 
     fetch('https://reactnativecode.000webhostapp.com/FruitsList.php')
      .then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          this.arrayholder = responseJson ;

        });
      })
      .catch((error) => {
        console.error(error);
      });
      
  }


  
   SearchFilterFunction(hemanth){
     
     const newData = this.arrayholder.filter(function(items){

         const itemData = items.fruit_name.toUpperCase()

         const textData = hemanth.toUpperCase()

         return itemData.indexOf(textData) > -1

     })
     this.setState({
         dataSource: newData,
         text: hemanth
     })
 }

 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>

      <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(aditya) => this.SearchFilterFunction(aditya)}
       value={this.state.text}
    //    underlineColorAndroid='transparent'
       placeholder="Search Here of fruits"
        />
        <FlatList
          data={this.state.dataSource} 
          renderItem={({item}) => (
            <View style={{flex:1,borderWidth:1,height:50,paddingHorizontal: 10, justifyContent:'center', marginBottom:10}}>
            <Text >{item.fruit_name}</Text>
            </View>
          )}
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
 MainContainer :{

  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },

  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 60,
   borderWidth: 2,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFF",
   marginTop:10,
   marginBottom:20
        
   }
 
});