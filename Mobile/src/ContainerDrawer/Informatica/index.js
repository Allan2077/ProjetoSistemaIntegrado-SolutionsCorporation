import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import style from './style';

export default function Informatica({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: '#FAF2F2' }}>

            <View style={style.telaCatalogo}>

                <View style={style.CatalogoGrid}>

                    <View style={style.catalogo}>

                        <TouchableOpacity
                            onPress={() => { navigation.navigate("Ocorrencia") }}
                        >
                            <Image style={style.ofert} source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/Impressora.svg' }} />
                            <Text style={style.textos}> Impressora</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.catalogo}>
                        <TouchableOpacity
                        >
                            <Image style={style.ofert} source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/Manutencao-Corretiva.jpg' }} />
                            <Text style={style.textos}> Manutenção</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={style.CatalogoGrid}>

                    <View style={style.catalogo}>

                        <TouchableOpacity>

                            <Image style={style.ofert} source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/Manutencao-Corretiva.jpg' }} />
                            <Text style={style.textos}> Recursos Humano</Text>

                        </TouchableOpacity>
                    </View>

                    <View style={style.catalogo}>
                        <TouchableOpacity>

                            <Image style={style.ofert} source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/Manutencao-Corretiva.jpg' }} />
                            <Text style={style.textos}> Marketing </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={style.CatalogoGrid}>

                    <View style={style.catalogo}>
                        <TouchableOpacity>

                            <Image style={style.ofert} source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/Manutencao-Corretiva.jpg' }} />
                            <Text style={style.textos}> Logística </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.catalogo}>
                        <TouchableOpacity>

                            <Image style={style.ofert} source={{ uri: 'https://raw.githubusercontent.com/Allan2077/Tcc/main/Assets/Manutencao-Corretiva.jpg' }} />
                            <Text style={style.textos}> Financeiro</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>


    )

}