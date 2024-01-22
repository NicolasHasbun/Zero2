import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailScreen, HomeScreen, RecipesScreen } from "../screens";
import { colors } from "../constants/colors";
import {fonts} from "../global/fonts"

const Stack = createNativeStackNavigator()
function StackNavigator() {
    return (
            <Stack.Navigator initialRouteName="Home" screenOptions={({route}) =>({
                headerShown: true,
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerTitleStyle: {
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 22,
                  fontFamily: "LatoBold"
                },
    
                })}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Recetas" component={RecipesScreen} />
                <Stack.Screen name="Detalle" component={DetailScreen} />
            </Stack.Navigator>
    )
}

export default StackNavigator 