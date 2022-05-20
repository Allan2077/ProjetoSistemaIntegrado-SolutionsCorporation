import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    telaOcorrencia:
    {
        flex: 1,
        width: 350,
        height: 550,
        margin: 20,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: '#FFF',
        padding: 5,
    },
    viewBtn: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,

    },

    textArea: {
        height: 250,
        justifyContent: 'center',
        //backgroundColor: '#FFF',
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        margin: 5,
        padding: 5,
        marginTop: 5,
        outlineStyle:'none',
        borderBottomWidth:2,

    },

    titleOcorrencia: 
    {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        marginBottom:10,
        marginTop: 15,
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        borderBottomWidth:2,
    },

    txtDesc: 
    {
        flex: 1,
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        marginTop: 5,
        margin: 5,
        padding: 5,
        justifyContent: 'center',
        borderBottomWidth:2,
        
    },

    txtsTitlte: {
        fontSize: 15,
        marginBottom: 20,


    },

    btnEnviar: {
        width: 150,
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#708E67',
        marginLeft: 170,
        // marginBottom: 10

    },
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
    }

});