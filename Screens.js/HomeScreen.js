import * as React from 'react';
import {Text,View,StyleSheet,Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class HomeScreen extends React.Component{
    render(){
        return(
            <>
            <View style={styles.container}>
            <Text style={styles.text}>Begin</Text>
            <Text style={styles.text}>Your</Text>
            <Text style={styles.text}>Journey</Text>
            <Ionicons name={"exit"} size={RFValue(60)} color="red" style={styles.icon}/>
            </View>
            </>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        alignSelf:'center',
        marginTop:Dimensions.get('window').height/2
    },
    text:{
      fontSize:RFValue(30)
    },
    icon:{
        transform:[
            {rotate:"180deg"}
        ]
    }
})