import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';


import style from './style';

export default function Login({ navigation }) {

    const [usuario, setUsuario] = useState('');
    const [matricula, setMatricula] = useState('');
   


    const autenticar = () => {
        let usuarios = {
            usuario: usuario,
            matricula: md5(matricula),
        }
        console.log(autenticar)

        fetch('http://10.87.207.25:3000/login', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(usuarios),
        })
            .then(resp => { return resp.json() })
            .then(async data => {
                if (data.length > 0) {
                    await AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                    navigation.navigate('Container');
                } else {
                    ToastAndroid.show('Usuario ou matricula Invalidos', ToastAndroid.SHORT);
                }
            })
    }

    return (
        <View style={style.container}>
            <View style={style.viewlogo}>
                <Image style={{ width: 285, height: 80, marginBottom: 30 }}
                    source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/logoMobo2.png' }}
                />

                <TextInput style={style.inputlogin}
                    placeholder="Digite seu usuário..."
                    autoCorrect={false}
                    value={usuario}
                    onChangeText={setUsuario}
                    keyboardType='visible-password'
                />

                <TextInput style={style.inputSenha}
                    placeholder="Digite sua senha..."
                    autoCorrect={false}
                    value={matricula}
                    onChangeText={setMatricula}
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    onPress={() => { autenticar () }}
                    style={style.btnacessar}>
                    <Text style={style.txtAcessar}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { Alert.alert('Entre em contato com o Help Desk  ramal 190') }}
                    style={style.btnResetSenha}>
                    <Text style={style.txtReset}>Esqueceu seu Login?</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}