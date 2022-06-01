
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import md5 from 'md5';

import style from './style';

export default function Cadastro({ navigation }) {

    const [usuario, setUsuario] = useState('');
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [setor, setSetor] = useState('');

    const cadastrar = () => {
        let usuarios = {
            usuario: usuario,
            matricula: md5(matricula),
            nome: nome,
            setor: setor
        }

        fetch('http://10.87.207.25:3000/cadastro', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuarios),
        })
            .then(resp => { return resp.json(); })
            .then(async data => {
                if (data === undefined) {
                    ToastAndroid.show('Falha ao cadastrar', ToastAndroid.SHORT);

                } else {
                    console.log(data)
                    await AsyncStorage.setItem('userdata', JSON.stringify(data));
                    ToastAndroid.show('Usuario cadastrado com sucesso', ToastAndroid.SHORT);
                    navigation.navigate('Home');
                }
            });
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
            <View style={style.container}>
                <Text style={style.txtTitle}>Cadastro de Funcionário</Text>

                <Text
                    style={style.txts}
                    value={usuario}
                    onChangeText={setUsuario}
                >
                    {setor}{nome}@solutions.com
                    </Text>
                <TextInput
                    style={style.inputCadastro}
                    placeholder='@solutions.com'
                    
                />

                <Text style={style.txts}>Nome:</Text>
                <TextInput
                    style={style.inputCadastro}
                    placeholder='Digite o nome do usuário..'
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={style.txts}>Setor:</Text>
                <TextInput
                    style={style.inputCadastro}
                    placeholder='Digite o setor do usuário..'
                    value={setor}
                    onChangeText={setSetor}
                />

                <Text style={style.txts}>Matrícula:</Text>
                <TextInput
                    style={style.inputCadastro}
                    placeholder='Digite a matrícula do usuário..'
                    keyboardType="numeric"
                    value={matricula}
                    onChangeText={setMatricula}
                />

                <TouchableOpacity
                    style={style.btnCadastrar}
                    onPress={() => {
                        cadastrar()
                    }}
                >
                    <Text style={style.txtCadastrar}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>


    )

}