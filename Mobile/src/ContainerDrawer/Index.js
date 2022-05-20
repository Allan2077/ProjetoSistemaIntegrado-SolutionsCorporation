import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Home from './Home/index';
import Informatica from './Informatica';
import Manutencao from './Manutencao';
import Cadastro from './cadastro';
import Financeiro from './financeiro';
import Formulario from './Formulario';
import Logistica from './logistica';
import Marketing from './marketing';
import Rh from './Rh';
import Sobre from './Sobre';

export default function ContainerDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} screenOptions={{
      headerShown: true,
      drawerHideStatusBarOnOpen: true
    }}
      drawerContent={(props) => {
        return (
          <DrawerContentScrollView {...props}>
            <View style={{
              margin: 10,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}>
              <Text >Felipe Reis</Text>
              <Text >Téc. Informática</Text>
              <Image source={require('../../assets/user.png')}
                style={{
                  width: 25,
                  height: 25,                  
                }} />

            </View>
            <DrawerItemList {...props} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Informatica" component={Informatica} />
      <Drawer.Screen name="Manutencao" component={Manutencao} />
      <Drawer.Screen name="Cadastro" component={Cadastro} />
      <Drawer.Screen name="Financeiro" component={Financeiro} />
      <Drawer.Screen name="Formulario" component={Formulario} />
      <Drawer.Screen name="Logistica" component={Logistica} />
      <Drawer.Screen name="Marketing" component={Marketing} />
      <Drawer.Screen name="Rh" component={Rh} />
      <Drawer.Screen name="Sobre" component={Sobre} />

    </Drawer.Navigator>
  );
}
