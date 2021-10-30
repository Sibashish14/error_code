import * as React from 'react';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from '../Screens.js/HomeScreen';
import LoginScreen from '../Screens.js/LoginScreen';
//import LogoutScreen from '../Screens.js/LogoutScreen';

export default class AppNavigator extends React.Component{
    render(){
        <View>
            <AppContainer/>
        </View>
    }
}
const Navigator=createSwitchNavigator({
    LoginScreen:LoginScreen,
    HomeScreen:HomeScreen,
});
const AppContainer=createAppContainer(Navigator);