import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';

export default function Ocorrencia({ navigation }) {

    const [comentario, setComentario] = useState('');
    const [descricao, setDescricao] = useState('');
    const [data, setData] = useState('');
    const [status, setStatus] = useState('');
    const [ocorrencia, setOcorrencia] = useState('');

    const enviar = () => {
        let comenter = {
            comentario: comentario,
            descricao: descricao,
            data: data,
            status: status,
            ocorrencia: ocorrencia

        }
        console.log(enviar)


        fetch('http://10.87.207.25:3000/chamado', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comenter),
        })

            .then(resp => { return resp.json(); })
            .then(async data => {
                if (data === undefined) {
                    ToastAndroid.show('Falha ao enviar', ToastAndroid.SHORT);

                } else {
                    console.log(data)
                    await AsyncStorage.setItem('userdata', JSON.stringify(data));
                    ToastAndroid.show('Enviado cadastrado com sucesso', ToastAndroid.SHORT);
                    navigation.navigate('Home');
                }
            });
    }
    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>

            <View style={style.telaOcorrencia}>
                <View style={style.titleOcorrencia}>
                    <Text
                        style={style.txtsTitlte}
                        value={ocorrencia}
                        onChangeText={setOcorrencia}
                    >
                        Impressora
                    </Text>
                </View>
                <View style={style.txtDesc}>
                    <Text style={style.txtsTitlte}
                        value={descricao}
                        onChangeText={setDescricao}
                    >
                        Descrição:
                    </Text>
                    <Text
                        value={data}
                        onChangeText={setData}
                    >
                        01/06/2022 09:13
                    </Text>
                    <Text
                        value={status}
                        onChangeText={setStatus}
                    >
                        1
                    </Text>
                </View>
                <TextInput
                    style={style.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Digite seu comentário sobre a ocorrência..."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    value={comentario}
                    onChangeText={setComentario}
                />
                <View style={style.viewBtn}>
                    <TouchableOpacity
                        style={style.btnEnviar}
                        onPress={() => enviar()}>
                        <Text style={style.btnTxt}> Enviar</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >


    )

}