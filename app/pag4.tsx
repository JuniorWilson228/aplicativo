import {View, Text, Image, Button, StyleSheet, TouchableOpacity, Alert} from "react-native"
import {router} from "expo-router"
import{Botao2} from "../components/botaoNovo"
import { TextInput } from "react-native"
function voltar(){
    router.navigate('/pag3')
}
function navegar(){
    router.navigate('https://www.youtube.com/watch?v=20WH5xB54Hc&list=LL&index=1&t=2791s')
}
function enviarMensagem(){
    Alert.alert('oi Júnior')
}
export default function Pag4(){
    return(
<View style = {style.container} >
<Text style = {style.Title} >bem - vincos  a página 4</Text>
<Image source={require('../assets/images/gato.jpg')}
 ></Image>

<Button  title=" voltar"  onPress={voltar} color={'red'}  ></Button>
<TouchableOpacity  style = {style.botao} onPress={enviarMensagem}><Text>oi</Text> </TouchableOpacity>
<Botao2></Botao2>
<TextInput placeholder="digite seu nome"></TextInput>
</View>
    )
}

const style =StyleSheet.create({
Title:{
    fontSize: 16,
    color: "blue",
},

container: {
flex: 1,
justifyContent:"center",
alignItems:"center",
gap: 16,
padding: 32,

},

container2: {
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
gap: 16,
padding: 32,
},
botao:{
    backgroundColor:"green",
    color:'blue',
    width: '20%',
    height: 52,
    borderRadius:10,
    justifyContent:"center",
    alignItems:"center",
    fontSize:26,
    

}

})