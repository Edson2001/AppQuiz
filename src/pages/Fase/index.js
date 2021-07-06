import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {Appbar} from "react-native-paper"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Questions from "../../settings/quiz"

import styles from "./style"

export default function Fase({navigation}) {

    const Itens = Questions
   

 return (
   <>
   
    <Appbar style={styles.menu}>
        <Appbar.Action icon="menu" />
        <Appbar.Content title="Enigma App" />
    </Appbar>

    <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.textFase}>Onde paraste?</Text>

        <View style={styles.fases}>

            {
                Itens.map((e)=>{
                    return(
                        <TouchableOpacity key={e.id} onPress={()=> navigation.navigate("Questions", e)} style={styles.btnFase}>
                            <Text style={styles.titleBtnFase}>Fase {e.id} {e.id != 1 ? <Icon name="lock" />: ''}  </Text>
                        </TouchableOpacity>
                    )
                })
                
            }

        </View>

        </ScrollView>
        

    </View>

   </>
  );
}