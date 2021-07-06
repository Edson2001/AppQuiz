import React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

//routs
import Home from "../pages/Home"
import Fase from "../pages/Fase"
import Questions from "../pages/Questions"


const Stack = createStackNavigator()

const Routes = ()=>{

    return(

        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Home"  component={Home}  options={{
                headerShown: false
            }} />
            <Stack.Screen name="Fase"  component={Fase}  options={{
                headerShown: false
            }} />
            <Stack.Screen name="Questions"  component={Questions}  options={{
                headerShown: false
            }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Routes