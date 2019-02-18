 import React, { Component } from 'react'
 import PropTypes from 'prop-types';
import {TouchableOpacity, Dimensions, StyleSheet, Modal,View,Image,Text,TextInput} from'react-native'
let { height, width } = Dimensions.get('window');
export default class ImageSwiper extends Component {
 
  constructor(props) {
    super(props)
     this.state = {
      index: 0,
      modalVisible: false,
      imageScrollArray: this.props.imageArray,
      textNewVal :''
    };
  }
  
  changeValue=(text)=>{
    this.setState({textNewVal:text});
    this.state.imageScrollArray[this.state.index].title=text;
  }

  renderImages = () => {
        return(
        <View style={{flex:1}} >
          <Image resizeMode={'contain'} source={this.state.imageScrollArray[this.state.index].image } style={[styles.welcome, { width: width }]} />
          <TextInput onChangeText={(text)=>this.changeValue(text)} style={{fontSize:16,fontWeight:'bold',alignSelf:'center',color:'white'}}> {this.state.imageScrollArray[this.state.index].title}</TextInput>
        </View>);
  }
  
  ShowGalery(currentIndex, ImageArray) {
    this.setState({
      index: currentIndex,
      imageScrollArray: ImageArray,
      modalVisible: true
    })
  }
  handleSwipeDown = (index) => {
    this.setState({ modalVisible: false })
    let OnPress = this.props.onPress;
    if(OnPress){
        OnPress(this.state.imageScrollArray,index)
    }
  }

  render() {
    return (
      <Modal
        animationType="slide"
        visible={this.state.modalVisible}
        backdropOpacity={0.7}
        backgroundColor={'black'}
        transparent={false}
        onBackdropPress ={() => this.setState({ modalVisible: false })} 
        onRequestClose ={() =>  this.setState({ modalVisible: false })}>
        <View style={{ width: width,justifyContent:'center',alignItems:"center",flexDirection: 'row',height:45, backgroundColor: 'black'}}>
        <View >
        <Text style ={{color:'white',fontSize:16,}}>{this.state.index + 1}/{this.state.imageScrollArray.length}</Text>
       </View>
          <TouchableOpacity style={{position:'absolute', width: 40, height: 40,right:8 }} onPress={() => { this.handleSwipeDown() }}>
            <Image
              style={{
                height: 40,
                width: 40,
                borderColor: "#F2F2F2",
              }}
              source={require('./images/cross_icon_white.png')} />
            </TouchableOpacity>

        </View>
        <View style={{flex:1,backgroundColor:'red'}}> 
          {this.renderImages()}
        </View>
      </Modal>
    );
  }
}
const styles = StyleSheet.create({

  contentContainer: {
    marginTop: 0,
    paddingVertical: 0,
    backgroundColor: 'black',
  },
  welcome: {
    flex: 1,
    backgroundColor: 'black',
    margin: 0
  }
});


ImageSwiper.propTypes = {
  onPress : PropTypes.func
}