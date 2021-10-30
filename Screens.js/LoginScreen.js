import * as React from 'react';
import firebase from 'firebase';
import {Text,View,ToastAndroid,Alert,TextInput,SafeAreaView,StyleSheet,Platform,StatusBar,
KeyboardAvoidingView,Keyboard} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            loggedIn:false
        }
    }
    signIn=(email,password)=>{
        firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then(()=>{
            ToastAndroid.show("Successfully signed in",ToastAndroid.SHORT);
            this.setState({loggedIn:true});
            this.props.navigation.navigate({HomeScreen});
        })
        .catch((e)=>{
            Alert.alert(
                'Cannot Sign In',
                e.message,
                [{
                    text:'Ok',
                    onPress:()=>null
                }],
                {cancelable:true}
            )
        });
    }
    render(){
        const email=this.state.email;
        const password=this.state.password;
        return(
            <KeyboardAvoidingView behaviour="padding"enabled >
                <SafeAreaView/>
                <View>
                <Image source={require('../book.png')}/>
                </View>
                <TextInput
                placeholder="Email"
                placeholderTextColor="#000"
                value={email}
                onChangeText={text=>{this.setState({email:text})}}
                style={styles.textinput}
                   />

                <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text=>{this.setState({password:text})}}
                secureTextEntry={true}
                style={styles.textinput}
                />
                
                <TouchableOpacity onPress={()=>{this.signIn(email,password)}} style={styles.button}>
                    <Text>Sign In</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        )
    }
}
const styles=StyleSheet.create({
    button:{
        marginTop:10,
        borderRadius:RFValue(30),
        backgroundColor:'blue'
    },
    textinput:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})