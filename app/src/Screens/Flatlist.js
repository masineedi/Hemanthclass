import React, { Component } from 'react'
import { Text, View, FlatList, Image,Button, ActivityIndicator } from 'react-native'

// const datasss =[
//     {
//       "email": "aditya@gmail.com",
//       "City": "Bangalore",
//       "Image": "https://www.holidify.com/images/bgImages/BANGALORE.jpg",
//       "ID": "1001"
//     },
//     {
//       "email": "Welcome@gmail.com",
//       "City": "Hyderabad",
//       "Image": "https://media.architecturaldigest.in/wp-content/uploads/2018/08/Hyderabad-skyline-Charminar-Getty-866x487.jpg",
//       "ID": "10012"
//     },
//     {
//       "email": "Naveen@gmail.com",
//       "City": "Vizag",
//       "Image": "http://i.ytimg.com/vi/kQPhefaNyLw/hqdefault.jpg",
//       "ID": "1003"
//     },
//     {
//       "email": "Hemanth@gmail.com",
//       "City": "Tirupathi",
//       "Image": "https://www.hlimg.com/images/places2see/738X538/hyderabad.jpg",
//       "ID": "1004"
//     }
//   ]

export default class Flatlistt extends Component {

    constructor(){
        super()
        this.state={
            data:[],
            name:"Adityaaa",
            Id:"123",
            isLoading:true
        }
    }

    componentWillMount(){

        this.setState({
            name:"Welcome"
        })
        fetch("https://api.myjson.com/bins/18hn27").then((Response)=>(Response.json().then((res)=>{
            console.log(res)
            this.setState({
                data:res,
                isLoading:false
             
            })

        }))).catch((error)=>console.log(error))
    }

    componentDidMount(){
        this.setState({
            name:"Welcome11"
        })
    }




    geyData(){
        // fetch("https://api.myjson.com/bins/18hn27").then((Response)=>(Response.json().then((res)=>{
        //     console.log(res)
        //     this.setState({
        //         data:res,
        //         name:"Welcome"
        //     })

        // }))).catch((error)=>console.log(error))
    }

    



    cardMenu(item){
        return(
            <View style={{ justifyContent:'center', alignItems:'center', borderWidth:2,borderColor: '#099', padding:10,backgroundColor:'#f99',width:'98%', margin:4}}>
            <Image style={{width:150, height:150,borderRadius:150, }}source={{uri:item.Image}}/>
            <View style={{alignItems:'flex-start', borderWidth:1, padding:4, margin:5, borderColor:'#fff', marginTop: 30,backgroundColor:'#f55'}}>
                <Text style={{fontSize:20}}>Email Id:  <Text style={{fontSize:20, color:'#fff', }}> {" "}{item.email}</Text> </Text>
                <Text  style={{fontSize:20}}>City Id: <Text style={{fontSize:20, color:'#fff'}}>{"   "}{item.City}</Text> </Text>
                <Text  style={{fontSize:20}}>EmpID: <Text style={{fontSize:20, color:'#fff',}}>{"  " }{item.ID}</Text> </Text>
            </View>

        </View>
        )
    }

    render() {
        return (
            <View style={{flex:1, marginHorizontal:10, marginTop:10}}>
                <View style={{padding:4}}>
                    <Text style={{color:'green', fontSize:25}}>Flat List: {this.state.name} </Text>
                    <Button onPress={()=>this.geyData()} title="get JSON Data"/>
                </View>
                {this.state.isLoading ? 
                <View style={{flex:1,height:100, justifyContent:'center',alignItems:'center'}} >
                <ActivityIndicator style={{flex:1, height:100}} color={'red'}/>
                </View> :
                <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                    <View style={{flex:1, marginBottom:10}}>
                    {this.cardMenu(item)}
                    </View>
                )}
                />}

       
            </View>
        )
    }
}
