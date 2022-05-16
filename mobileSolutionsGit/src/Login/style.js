import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({   
    container:{
        flex:1,        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'space-around',
        flexDirection: 'column',   
               
    },
    viewlogo:{
        flex:1,        
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:1       
    },

    inputlogin:
   {  
        width:270,     
        height:50,           
        borderBottomWidth:2,  
        borderColor: '#DCDCDC',
        marginBottom:30,    
        fontSize:14,
        fontWeight: 'bold',
        backgroundColor:'#F8F8F8',        
        padding:5,
        color: '#363636',  
        outlineStyle: 'none'            
    },
    inputSenha:
   {  
        width:270,     
        height:50,   
        borderColor: '#DCDCDC',
        borderBottomWidth:2,  
        marginBottom: 30,
        //marginTop:18,    
        fontSize:14,
        fontWeight: 'bold',
        backgroundColor:'#F8F8F8',       
        padding:5,
        color: '#363636',  
        outlineStyle: 'none',    
    },
    btnacessar: 
    {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#708E67',
        width: 150,
        height: 50,
        borderRadius: 8,
        marginBottom: 30,
    },
    txtAcessar: 
    {
        fontSize:22,
        fontWeight: 'bold',
        color:"white",
        fontFamily: 'sans-serif',
    },
    btnResetSenha: 
    {
        alignItems: 'center',
        justifyContent:'center',  
        marginBottom: 15,
        borderBottomWidth:1,
        borderBottomColor:'GRAY'
        
        },

});