import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//===== PRECISA FAZER O DOWNLOAD =====
import { Feather } from '@expo/vector-icons'
import Home from './src/paginas/Home'
import Login from './src/paginas/Login'
import Cadastro from './src/paginas/Cadastro'
import Pix from "./src/paginas/Pix";
import TelaInicial from "./src/paginas/TelaInicial"

const Pilha = createStackNavigator()
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
export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ title: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ title: false, headerShown: false }}
                />
                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ title: 'Boas-vindas' }}
                />
                <Pilha.Screen
                    name="Pix"
                    component={Pix}
                    options={{ title: false, headerShown: false }}
                />
                 <Pilha.Screen
                    name="TelaInicial"
                    component={TelaInicial}
                    options={{ title: 'Boas-vindas' }}
                />


                <Pilha.Screen
                    name="NavBar"
                    component={NavBar}
                    options={{ title: false, headerShown: false }}
                />


            </Pilha.Navigator>
        </NavigationContainer>
    )
}
