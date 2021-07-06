import {StyleSheet} from "react-native"
import {bg, dark, textColor} from "../../colors"
const styles = StyleSheet.create({
    menu: {
        backgroundColor: dark
    },
    container:{
        backgroundColor: bg,
        width: '100%',
        flex: 1,
        alignItems: 'center',
        paddingTop: 32
    },
    fases:{
        marginTop:40
    },
    textFase:{
        color: textColor,
        fontSize: 26,
        marginTop: 22
    },
    btnFase:{
        backgroundColor: dark,
        width: 180,
        padding: 10,
        borderRadius: 10,
        marginBottom: 16,
    },
    titleBtnFase:{
        color: textColor,
        textAlign: 'center',
        fontSize: 18
    }
}) 
export default styles