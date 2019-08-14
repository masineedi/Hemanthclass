import React, { Component } from 'react'
import { Text, View, FlatList, Image } from 'react-native'

const datasss =[
    {'email':'aditya@gmail.com'}, 
    {'email': 'Welcome@gmail.com'},
    {'email': 'Naveen@gmail.com'},
    {'email': 'Hemanth@gmail.com'}

]


export default class Flatlistt extends Component {



    cardMenu(item){
        return(
            <View style={{ justifyContent:'center', alignItems:'center', borderWidth:2,borderColor: '#000', padding:10,backgroundColor:'#a33',width:'95%', marginHorizontal: 10,margin:4}}>
            <Image style={{width:100, height:100,borderRadius:100,resizeMode:'contain' }}source={{uri:"https://bootdey.com/img/Content/avatar/avatar1.png"}}/>
            <View style={{alignItems:'flex-start', borderWidth:1, padding:4, margin:5, borderColor:'#fff', marginTop: 30,}}>
                <Text style={{fontSize:20}}>Email Id:  <Text style={{fontSize:20, color:'#fff', }}> {" "}{item.email}</Text> </Text>
                <Text  style={{fontSize:20}}>City Id: <Text style={{fontSize:20, color:'#fff'}}>{"   "}Bangalore</Text> </Text>
                <Text  style={{fontSize:20}}>EmpID: <Text style={{fontSize:20, color:'#fff',}}>{"  " }1111</Text> </Text>
            </View>

        </View>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                {/* {this.cardMenu()} */}

                <FlatList
                data={datasss}
                renderItem={({item}) => (
                    <View style={{flex:1}}>
                    {this.cardMenu(item)}

                    </View>
                )}
                />

       
            </View>
        )
    }
}
