import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import {Appbar, TextInput} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import styles from "./style"

export default function Questions({navigation, route}) {
    
    const [answer, setAnswer] = useState('')

    const Test = ()=>{
    
        console.log(route.params.answer)
        if(route.params.answer == answer){

            Alert.alert("Certo")

        }else{
            Alert.alert("Errado")
        }

    }

 return (
   <>
   
    <Appbar style={styles.menu}>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Enigma App" />
    </Appbar>

    <View style={styles.container}>
        <Text style={styles.textQuestionTitle}>{route.params.title}</Text>
        <Image source={require("../../assets/images/Personagens-Os-16-Tipos-ISTP-1024x10241.png")} />
        <Text style={styles.textQuestion}>{route.params.Question} </Text>
        <TextInput style={styles.inputQuestion} onChangeText={e=>setAnswer(e)} />


        <View style={styles.buttonDown}>
            <TouchableOpacity onPress={()=> navigation.navigate("Fase")} style={styles.btnCheck}>
                <Icon color="#fff" size={36} name="chevron-left"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={Test} style={styles.btnCheck}>
                <Icon color="#fff" size={36} name="check"/>
            </TouchableOpacity>
        </View>
    </View>


    

   </>
  );
}