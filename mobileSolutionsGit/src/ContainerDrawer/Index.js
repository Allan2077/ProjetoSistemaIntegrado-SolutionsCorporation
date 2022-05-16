import * as React from 'react';
import {View, Text, Image} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from './Home/index';
import Informatica from './Informatica';
import Manutencao from './Manutencao';

export default function ContainerDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} screenOptions={{ headerShown: true,
      drawerHideStatusBarOnOpen: true
      }}
      drawerContent={(props) => {
        return(
          <DrawerContentScrollView {...props}>
            <View>
              <Image source={require('../../assets/user2.svg')} 
              style={{width: 50,
                 height: 50,
                 marginTop: 20,
                marginLeft: 10,
                marginBottom: 10
                }} />
              <Text >FELIPE REIS</Text>
              <Text >Téc. Informática</Text>
            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }}
      >
      <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Informatica" component={Informatica}/>
      <Drawer.Screen name="Manutencao" component={Manutencao}/>
    </Drawer.Navigator>
  );
}
