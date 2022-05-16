import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import style from './style';

export default function Login({ navigation }) {
    return (
        <View style={style.container}>
            <View style={style.viewlogo}>
                <Image style={{ width: 285, height: 80, marginBottom:30 }}
                    source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/logoMobo2.png' }}
                />
            
                <TextInput style={style.inputlogin}
                    placeholder="Digite seu usuário..."
                    autoCorrect={false}
                    onChangeText={() => { }}
                />

                <TextInput style={style.inputSenha}
                    placeholder="Digite sua senha..."
                    autoCorrect={false}
                    onChangeText={() => { }}
                    keyboardType="numeric"
                />
           
                <TouchableOpacity
                    onPress={() => { navigation.navigate("Container") }}
                    style={style.btnacessar}>
                    <Text style={style.txtAcessar}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { Alert.alert('Entre em contato com o Help Desk  ramal 190') }}
                    style={style.btnResetSenha}>
                    <Text>Esqueceu seu Login?</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}