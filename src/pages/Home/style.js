import {StyleSheet} from "react-native"
import {bg, dark, textColor} from "../../colors"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: bg,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },

    menu:{
        backgroundColor: dark
    },
    titleText:{
        fontSize: 32,
        color: textColor
    },
    textIniti:{
        color: textColor,
        marginBottom: 12,
        marginTop: 12
    }
   

})
export default styles