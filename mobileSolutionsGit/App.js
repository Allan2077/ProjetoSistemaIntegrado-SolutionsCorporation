import React, {useState} from "react";
import 'react-native-gesture-handler';
import { View, Text, Image} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from '@react-navigation/stack';


import Login from './src/Login';

import ContainerDrawer from "./src/ContainerDrawer/Index";

const Stack = createStackNavigator();



export default function App(){
  const [showLogin, setShowLogin] = useState(false);

    return(
      <NavigationContainer >
      <Stack.Navigator initialRouteName="Login"
         screenOptions={{
         headerShown: false
         }}>
        <Stack.Screen 
          name="Login" 
          component={Login}
          
        />         
        <Stack.Screen 
          name="Container"
          component={ContainerDrawer}
        />         
      </Stack.Navigator>
      </NavigationContainer>
    )
    
  
 
}