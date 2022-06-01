import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import style from './style';

export default function Formulario({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>

            <View style={style.container}>
                <Text style={style.txtTitle}>Formulário</Text>
                
                <Text style={style.txts}>Nome:</Text>
                <TextInput
                    style={style.inputCadastro}
                    placeholder='Digite o nome do usuário..'
                />

                <Text style={style.txts}>Setor:</Text>
                <TextInput
                    style={style.inputCadastro}
                    placeholder='Digite o setor do usuário..'
                />

                <Text style={style.txts}>Matrícula:</Text>
                <TextInput
                    style={style.inputCadastro}
                    placeholder='Digite a matrícula do usuário..'
                    keyboardType="numeric"
                />

                <TouchableOpacity style={style.btnEnviar}>
                    <Text style={style.txtEnviar}>Enviar</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>


    )

}