import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import {Appbar, TextInput} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import QuestionsNext from "../../settings/quiz"

import styles from "./style"

export default function Questions({navigation, route}) {
    
    const [answer, setAnswer] = useState('')
    const Itens = QuestionsNext
    let nextQuestion  = 0
    const Test = ()=>{
    
        console.log(route.params.answer)
        if(route.params.answer == answer){

            Alert.alert("Certo")

            Itens.map(e=>{

                //verifica qual é a proxima pergunta
                if(e.id == route.params.id){

                    nextQuestion = e.id +1
                    

                } 

                //mostra a nova pergunta
                if(e.id == nextQuestion){
                  //  route.params = e
                  navigation.navigate("Questions", e)
                }

            })

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