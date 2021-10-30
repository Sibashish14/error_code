import * as React from 'react';
import DrawerNavigator from './Navigation.js/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigation.js/AppNavigator';

export default class App extends React.Component{
  render(){
    return(
    <NavigationContainer>
      <DrawerNavigator/> 
    </NavigationContainer>
    )
  }
}
