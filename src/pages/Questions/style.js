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
        justifyContent: 'center',
        padding: 30
    },
    textQuestionTitle:{
        color: textColor,
        fontSize: 20,
        marginBottom: 22
    },
    textQuestion:{
        color: textColor,
        width: 250,
        textAlign: 'center'
    },
    inputQuestion:{
        width: 300,
        borderRadius: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 22
    },
    buttonDown:{position: 'absolute', bottom: 12, flexDirection: 'row', justifyContent: 'space-between', width: '100%'},
    btnCheck:{
        backgroundColor: '#868686',    
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 10,
        borderRadius: 30
    }
    
}) 
export default styles