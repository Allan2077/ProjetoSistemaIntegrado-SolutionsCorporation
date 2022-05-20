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
        fontSize: 22,
        fontWeight: 'bold',
        color: '#808080',
        alignSelf: 'center',
        marginBottom: 15,
        marginTop: 20,
        borderBottomWidth: 1,

    },

    txts:
    {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#808080',
        alignSelf: 'flex-start',    
        marginBottom: 15,
        margin:50,

    },

    inputCadastro:
    {
        //backgroundColor: 'red',
        width: 300,
        height: 30,
        borderBottomWidth: 1,
       

    },

    btnEnviar:
    {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#708E67',
        width: 300,
        height: 40,
        borderRadius: 8,
        marginBottom: 30,
        marginTop: 60,
    },

    txtEnviar:
    {
        fontSize: 22,
        fontWeight: 'bold',
        color: "white",
        fontFamily: 'sans-serif',
    },

});