import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {Button, Appbar} from "react-native-paper"
import {} from "react-native-vector-icons/MaterialCommunityIcons"

import styles from "./style"


export default function Home({navigation}) {
 return (
   <>
   
   <Appbar style={styles.menu}>
      <Appbar.Action icon="menu" />
    </Appbar>
   <View  style={styles.container}>
     
    <Image style={{width: 150, height: 150}} source={require("../../assets/images/Personagens-Os-16-Tipos-ISTP-1024x10241.png")} />
    <Text style={styles.titleText}>Enigma Game</Text>

    <TouchableOpacity onPress={()=>navigation.navigate("Fase")}>
      <Text style={styles.textIniti}>Iniciar</Text>
    </TouchableOpacity>

    <TouchableOpacity >
      <Text style={styles.textIniti}>Sobre</Text>
    </TouchableOpacity>


   </View>

   </>
  );
}