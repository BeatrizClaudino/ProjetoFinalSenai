import React, { useEffect, useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Menu from '../componentes/Menu';
import Pix from '../../assets/pix.png'
import Barras from '../../assets/codigoBarras.png';
import Cell from '../../assets/cell.png';
import Transferencias from '../../assets/transferencia.png'
import Card from '../../assets/card.png';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import olhoAberto from '../../assets/eye.png'
import olhoFechado  from '../../assets/closeeye.png'
import axios from 'axios';


//Colocando o ip da máquina dentro de uma variável para poder utilizar no codigo todo
export const ip = "10.109.72.36:8000"


export default function Home({ navigation }) {
    const [exibirSaldo, setExibirSaldo] = useState(false)

    //Passando os dados que eu quero pegar do usuário
    const [user, setUser] = useState({
        nome: "Carregando...",
        conta: {
            agencia: "Carregando...",
            numero: "Carregando...",
            limite: "Carregando"
        },
        email: "Carregando...",
        data_nascimento: "Carregando...",
        cpf: "Carregando..."
    });

    useEffect(() => {
        const getToken = async () => {
            try {
                const token = await AsyncStorage.getItem("token");
                const acessToken = JSON.parse(token).access;
                console.log(token + "testando ....");
                if (!token) {
                    Alert.alert('Opa, parece que você não está logado!');
                    return navigation.navigate('Login');
                }

                axios.get(`http://${ip}/auth/users/`, {
                    headers: {
                        "Authorization": `JWT ${acessToken}`
                        }
                    })
                    .then(res => {
                            console.log(res.data[0].id)
                            axios.get(`http://${ip}/app/conta/${res.data[0].id}/`, 
                                {headers: {
                                    "Authorization": `JWT ${acessToken}`
                                }})
                                .then(resConta => {
                                    console.log(resConta);
                                    setUser({ ...res.data, conta: { ...resConta.data } })
                                }).catch((error) => {
                                    console.log(error)
                                })
                    })
                    .catch(err => {
                        console.log(err);
                        //token experiou, fazer o refresh dele e repetir a função

                    });
            } catch (error) {
                console.log(error);
                // Trate o erro adequadamente
            }
        };
    
        getToken();
        return () => {
            // Função de cleanup, se necessário
        };
    }, []);

    // FUNÇÃO PARA FAZER LOGOUT DA CONTA
    async function logout() {
        await AsyncStorage.removeItem("token");
        navigation.navigate('Login')
    }

    const saldoAtual = () => {
        setSaldo(saldo)
    }
    const teste = () => {
        navigation.navigate('Pix')
    }

    function trocarolho() {
        setExibirSaldo(!exibirSaldo)
    }

    return (
        <ScrollView className="flex-1">
            <LinearGradient className="h-52" colors={['#6300B0', '#021249']}>
                <View className="p-5 flex flex-row space-x-28">
                    <View className="flex flex-row">
                        <TouchableOpacity onPress={() => (useSession())}>
                            <Image source={require('../../assets/User.png')} />
                        </TouchableOpacity>
                        <Text className="text-cyan-50 pt-6 pl-2 text-[15px]">{`hello ${user.data_nascimento}`}</Text>
                    </View>
                    <View className="flex flex-row space-x-5 pt-5">
                        <TouchableOpacity onPress={trocarolho}>
                            <Image source={exibirSaldo ? olhoAberto : olhoFechado} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/interrogacao.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('../../assets/mensagem.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="w-screen flex items-center">
                    <View className="flex justify-center pl-8 bg-white w-[90%] h-14 rounded-lg">
                        <Text>Saldo em conta</Text>
                    <Text>{exibirSaldo ? `R$ ${user.conta.limite}` : "****"}</Text>
                    </View>
                </View>
            </LinearGradient>
            <View className="flex w-screen pt-5">
                <View className="flex flex-row justify-evenly h-20">
                    <Menu textoFuncao='Pix' imagem={Pix} evento={teste} />
                    <Menu textoFuncao='Boleto' imagem={Barras} />
                    <Menu textoFuncao='Transferência' imagem={Transferencias} />
                    <Menu textoFuncao='Recarga' imagem={Cell} />
                </View>
                <TouchableOpacity>
                    <View className="flex items-center w-screen pt-6 pb-6" >
                        <View className="flex flex-row items-center justify-center space-x-7 bg-[#D0CFFF] w-[80%] h-11 rounded-lg">
                            <Image source={Card} />
                            <Text>
                                Meus Cartões
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View className="flex items-center justify-center w-screen h-48 border-t-2 border-b-2 border-[#dfe5e7]">
                    <View className="flex justify-center w-[80%] h-[100%]">
                        <Text className="text-[22px] pb-3">
                            Cartão de crédito
                        </Text>
                        <Text className="text-base pb-2 text-[#4D4F51]">
                            Fatura atual
                        </Text>
                        <Text className="text-sm h-7 bg-indigo-800 w-[30%] text-center text-white font-semibold">
                            R$ 500,00
                        </Text>
                        <Text className="text-sm pt-2 text-[#4D4F51]">
                            Limite disponível de 200,00
                        </Text>
                    </View>
                </View>
                <View>
                    <Text className="text-lg">Transações recentes</Text>
                    <View className="flex flex-row justify-evenly h-20">
                        <Menu textoFuncao='Transação pix' imagem={Pix} />
                        <Menu textoFuncao='Pagamento boleto' imagem={Barras} />
                        <Menu textoFuncao='Recarga' imagem={Cell} />
                    </View>
                </View>
                <View className="h-80 bg-slate-300">

                </View>
            </View>
        </ScrollView>
    )
}