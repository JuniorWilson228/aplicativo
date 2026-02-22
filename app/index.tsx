
import { styleText } from "node:util"
import { Image, StyleSheet, Text, View, Button  } from "react-native"
import {router} from "expo-router"
function proximo(){
    router.navigate('/pag3')
}

export default function Index(){
return (
<View style = {style.cointeiner} >
<Text style = {style.title} >Olá galerassss</Text>
<Image source={require('../assets/images/gato.jpg')}
style = {{width: 150, height: 150}} />
<Button title="entrar" onPress={proximo}></Button>
</View>
)
}


const style = StyleSheet.create({
    title: {
        color:"red",
        fontSize: 24,

    },

    cointeiner: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
        alignItems:"center",
        gap:16,
    }


})