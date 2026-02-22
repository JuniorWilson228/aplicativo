import {View, Text, Image, Button, TouchableOpacity, Alert} from "react-native"
import { router } from "expo-router"
function voltar(){
    router.navigate('/pag2')
}
function pag4(){
    router.navigate("/pag4")
}

function Alerta(){
       Alert.alert("clique aqui") 
    }
export default function Pag3(){
    return(
<View>
<Text>olá galeraaaa</Text>
<Image source={require('../assets/images/gato.jpg')}
style = {{width: 150, height: 150}}></Image>
<Button title="voltar" onPress={voltar}  ></Button>
<Button title="va para pagina 4" onPress={pag4}></Button>
</View>

    )
}

