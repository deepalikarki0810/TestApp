import React, { Component } from 'react'
import {
  View, 
  FlatList, 
  Platform,
  TouchableHighlight, 
  TouchableNativeFeedback, 
  Text, 
  Dimensions,  
  Image,
  StatusBar
 }  from 'react-native'
import ImageSwiper from './ImageSwiper'
var scrwidth=Dimensions.get('window').width
    var scrheight=Dimensions.get('window').height
    const cardHeight = scrheight*.15;
    const image0 =  require('./images/images.png') 
var imageDate = {
    "elements":[
      {
       "image" : image0,
       "title"  : "React-Native"
      },
      {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
       {
        "image" : image0,
        "title"  : "React-Native"
       },
    ]
}


export default class Thumbnails extends Component {

    constructor(props){
      super(props);
      this.state={
        imageArray : imageDate.elements
      }
    }
    renderItem=(item)=>{
        if(Platform.OS == 'android'){
          return(
            <TouchableNativeFeedback onPress={()=>this.getItem(item)}>
                {this.commonView(item)}
            </TouchableNativeFeedback>
          )
        }else{
          return(
            <TouchableHighlight>
                {this.commonView(item)}
            </TouchableHighlight>
          )
        }
    }
    
    commonView=(item)=>{
      return(
        <View style={{
                        flex:1,
                        alignSelf:'center',
                        marginHorizontal:7,
                        marginBottom:10,
                       
                        }} pointerEvents='box-only'>

               <Image  resizeMode={'stretch'} style = {{ 
                 height: 200,
                 width:'100%',
                }} source={item.item.image}/> 
                <Text style={{fontSize:16,fontWeight:'bold',alignSelf:'center',color:'white'}}> {item.item.title}</Text>
        </View>
      )
    }


    getItem=(item)=>{
        var temp = this.imageSwiperObj;
        if(temp === undefined){

        }else{
          temp.ShowGalery(item.index,imageDate.elements)
        }
  }

  footerView = () => {
    return(
      <View style={{height:20, width: '100%'}}>

      </View>
    )
  }

  headerView = () => {
    return(
      <View style={{height:20, width: '100%'}}>

      </View>
    )
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}}>
      <StatusBar hidden />
        <ImageSwiper
          ref ={imageSwiperObj => {this.imageSwiperObj = imageSwiperObj}}
          onPress={selectedValue=>{
            this.setState({imageArray:selectedValue})
          }}
          imageArray={imageDate.elements}
        />
        <FlatList
                    extraData={this.state}
                    data={this.state.imageArray}
                    renderItem={this.renderItem}
                    numColumns={2}
                    keyExtractor = {(item, index) => index.toString()}
                    ListFooterComponent={this.footerView}
                    ListHeaderComponent={this.headerView}
                />  
        
        {/* <Text>Prem</Text> */}
      </View>
    )
  }
}
