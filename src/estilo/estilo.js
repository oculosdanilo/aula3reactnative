import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Tela completa
     container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#D3D3D3',
     },
     //Gradiente 
     background: {
       position: 'absolute',
       left:0,
       right: 0,
       top: 0,
       height: 300,
       alignItems:'center',
       justifyContent:'center'
     },
     // Caixa onde estão os inputs
     box: {
       marginTop:160,
       justifyContent:'flex-start',
       alignItems: 'center',
       borderRadius: 5,
       backgroundColor:'white',
       width:'85%',
       height:400
     },
   
    inputs:{
     borderRadius: 5,
     width:'80%',
     marginTop:35,
     padding:15,
     borderWidth:1
    },
    button :{
   padding:20,
   marginTop:60,
   alignItems:"center"
    },
    textLink:{
     color:'blue',
     fontSize:16,
     
     
    }
   
   
    //npx expo install expo-linear-gradient
   });

   export default styles;