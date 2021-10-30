import * as React from 'react';
import {Text,View,Dimensions,StyleSheet,Modal,TextInput} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import YoutubePlayer from 'react-native-youtube-iframe';

export default class VideoContentScreen extends React.Component{
    constructor(){
        super();
        this.state={
            modalVisible:false,
            text:''
        }
    }
    render(){
        
        return(
            <View style={styles.view}>
            <YoutubePlayer
               height={300}
               videoId={'3Ice_3jSiQ4'}
               play={true}
               />
            <Modal
            style={styles.modal}
             animationType="none"
             visible={this.state.modalVisible}
             onRequestClose={()=>{
                 this.setState({modalVisible:false});
             }}
            >
               <TextInput
               placeholder={"Write"}
               value={this.state.text}
               onChangeText={text=>this.setState({text:text})}
               />
               <TouchableOpacity onPress={()=>{this.setState({modalVisible:false})}} style={styles.button}>
                   <Text>Submit</Text>
               </TouchableOpacity>
            </Modal>
            <TouchableOpacity onPress={()=>{this.setState({modalVisible:true})}} style={[styles.button,{
                marginTop:20
            }]}>
                <Text>What You Learnt</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:'#ffffff',
        alignItems:'center',
        justifyContent:'center'
    },
    modal:{
        margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,  
        backgroundColor: "#F194FF",
   }
});