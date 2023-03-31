import * as React from 'react';
import {View,Image,TouchableOpacity,Text,TextInput} from 'react-native';
import styles from './src/estilo/estilo';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>

<LinearGradient
        // Background Linear Gradient
        colors={['black', '#FF4500']}
        style={styles.background}

      >

        <Image 
        source={{uri:'https://brazucadesign.files.wordpress.com/2020/03/virtuspro_logo_sports.png?w=375'}}
        style={{width:180,height:180,marginTop:-80}}
        ></Image>
      </LinearGradient>
     
      <View
// Button Linear Gradient
style={styles.box}>

  <TextInput style={styles.inputs} placeholder= 'e-mail' />
  
  <TextInput style={styles.inputs}   placeholder= 'senha' />

  <TouchableOpacity style={{width:'80%'}}> 
      <LinearGradient
      // Background Linear Gradient
       colors={['#D2691E','#FF4500']}
       style={styles.button}
      >
          <Text style={{fontWeight:'bold',color:'white'}}>LOGAR</Text>
       </LinearGradient>
  </TouchableOpacity>
  </View>
    
  <View style= {{flexDirection:'row', marginTop:30}}>
<Text style= {styles.textLink}>  Esqueceu sua senha ?     </Text>
<Text style= {styles.textLink}>  Cadastra-se já !    </Text>
</View>
       
      
    </View>
  );
}

