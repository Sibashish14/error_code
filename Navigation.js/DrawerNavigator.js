import * as React from 'react';
import BiologyScreen from '../Screens.js/Biology';
import PhysicsScreen from '../Screens.js/Physics';
import ChemistryScreen from '../Screens.js/Chemistry';
import MathScreen from '../Screens.js/Math';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../Screens.js/HomeScreen';
import VideoContentScreen from '../Screens.js/VideoContent';
//import LogoutScreen from '../Screens.js/LogoutScreen';

const Drawer=createDrawerNavigator();
export default class DrawerNavigator extends React.Component{
    render(){
        return(
      <Drawer.Navigator>
          <Drawer.Screen name={"Home"} component={HomeScreen}/>
          <Drawer.Screen name="Physics" component={PhysicsScreen}/>
          <Drawer.Screen name="Chemistry" component={ChemistryScreen}/>
          <Drawer.Screen name="Math" component={MathScreen}/>
          <Drawer.Screen name="Biology" component={BiologyScreen}/>
          <Drawer.Screen name="Video" component={VideoContentScreen} options={{headerShown:false}}/>
      </Drawer.Navigator>
        )
    }
}