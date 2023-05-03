import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//===== PRECISA FAZER O DOWNLOAD =====
import {Feather} from '@expo/vector-icons'
import Home from './paginas/Home'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View } from "react-native";

const Pilha = createNativeStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar() {
    return (
        <Nav.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#000',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#f0f',
                tabBarInactiveTintColor: '#555',
            }}
        >
            <Nav.Screen name="Home" component={Home}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />

            <Nav.Screen name="Login" component={Login}
                options={{
                    tabBarStyle: { display: 'none' },
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
        </Nav.Navigator>
    )
}


//CRIANDO AS ROTAS DA APLICAÇÃO
export default function Routers({ navigation }) {
    return (
        // <View>
        //     aaaaaa
        // </View>
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false, headerShown: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: false }}
                />

                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: false }}
                />

                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}
