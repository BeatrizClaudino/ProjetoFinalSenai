import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Menu from '../componentes/Menu';
import Pix from '../../assets/pix.png'
import Barras from '../../assets/codigoBarras.png';
import Cell from '../../assets/cell.png';
import Transferencias from '../../assets/transferencia.png'
import Card from '../../assets/card.png';
import Header1 from '../componentes/Header'
import { ScrollView } from 'react-native';

export default function Home({ navigation }) {
    const [saldo, setSaldo] = useState('')

    const saldoAtual = () => {
        setSaldo(saldo)
    }
    const teste = () => {
        navigation.navigate('Pix')
    }

    return (
        <ScrollView className="flex-1">
            <Header1 />
            <View className="flex w-screen pt-5">
                <View className="flex flex-row justify-evenly h-20">
                    <Menu textoFuncao='Pix' imagem={Pix} evento={teste} />
                    <Menu textoFuncao='Boleto' imagem={Barras} />
                    <Menu textoFuncao='Transferência' imagem={Transferencias} />
                    <Menu textoFuncao='Recarga' imagem={Cell} />
                </View>
                <TouchableOpacity>
                    <View className="flex items-center w-screen pt-6 pb-6" >
                        <View className="flex flex-row items-center justify-center space-x-7 bg-[#bfd3e0] w-[80%] h-11 rounded-full">
                            <Image source={Card} />

                            <Text className="">
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