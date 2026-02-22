import { View, Text, Button} from "react-native"
import { StyleSheet } from "react-native"
import { router } from "expo-router"
function voltar(){
    router.navigate('/')
}


export default function Pag2(){
return(
<View>
<Text style = {style.title} >oi pessoal</Text>
<Button title="voltar" onPress={voltar}></Button>



</View>


)
}

const style = StyleSheet.create({
title: {
    fontSize: 14,

}

})