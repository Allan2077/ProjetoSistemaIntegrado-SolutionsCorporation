import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';

import style from './style';

export default function Ocorrencia({ navigation }) {

    const [Coment, setComent] = useState();

    return (
        <ScrollView style={{ backgroundColor: '#FFF' }}>

            <View style={style.telaOcorrencia}>
                <View style={style.titleOcorrencia}>
                    <Text style={style.txtsTitlte}>Impressora</Text>
                </View>
                <View style={style.txtDesc}>
                    <Text style={style.txtsTitlte}>Descrição:</Text>
                </View>
                <TextInput
                    style={style.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Digite seu comentário sobre a ocorrência..."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    value={Coment}
                    onChangeText={setComent}
                />
                <View style={style.viewBtn}>
                    <TouchableOpacity
                        style={style.btnEnviar}
                        onPress={() => {
                            if (setComent !== null)
                                navigation.navigate("Home", { setComent })
                            else {
                                Alert.alert('Seu chamado foi enviado com sucesso!')
                            }
                        }}
                    >
                        <Text style={style.btnTxt}> Enviar</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >


    )

}