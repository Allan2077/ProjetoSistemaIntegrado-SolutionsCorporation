import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',

    },

    txtTitle:
    {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#808080',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 10,
        borderBottomWidth: 1,

    },


    txts:
    {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#808080',
        alignSelf: 'flex-start',       
        marginBottom: 10,
        margin: 45,

    },

    inputCadastro:
    {
        //backgroundColor: 'red',
        width: 300,
        height: 30,
        borderBottomWidth: 1,
        

    },

    btnCadastrar:
    {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#708E67',
        width: 300,
        height: 40,
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 50,
    },

    txtCadastrar:
    {
        fontSize: 22,
        fontWeight: 'bold',
        color: "white",
        fontFamily: 'sans-serif',
    },

});