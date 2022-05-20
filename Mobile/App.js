import React, { useState } from "react";
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';


import Login from './src/Login';

import ContainerDrawer from "./src/ContainerDrawer/Index";
import Ocorrencia from './src/ocorrencia';
import style from "./src/Login/style";

const Stack = createStackNavigator();



export default function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <NavigationContainer >
      <StatusBar backgroundColor = '#FFF' barStyle="dark-content"/>
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

          <Stack.Screen
            screenOptions={{
              headerShown: true
            }}
            name="Ocorrencia"
            component={Ocorrencia} />

        </Stack.Navigator>
      
    </NavigationContainer>
  )



}