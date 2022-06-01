import { CurrentRenderContext } from '@react-navigation/native';
import { StyleSheet} from 'react-native';


export default StyleSheet.create({
    
    ofert:
{
    flex: 1,
    width:150,
    height:150,
    margin: 20,
    borderRadius:15,
    alignSelf:'center',
    marginBottom:10,
    marginTop:'5%',
    //backgroundColor:'blue',
},
CatalogoGrid:
{
    backgroundColor:'white',
   // alignItems:'center',
   justifyContent:'space-between',
   flexDirection:'row'

},
    
telaCatalogo:
{
    //backgroundColor:'blue',
   // alignItems:'center',    
    justifyContent:'space-around',
    flexDirection:'column'

},
catalogo:
{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    //flexDirection:'column',
   // backgroundColor:'red',
},

textos:{
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop:'-1%',
    color:'gray',
    //fontFamily:'Arial',
    fontSize:15,
},

});