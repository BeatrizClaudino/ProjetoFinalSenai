import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../componentes/Header';
import Menu from '../componentes/Menu';
import Pix from '../../assets/pix.png'
import Barras from '../../assets/codigoBarras.png';
import Cell from '../../assets/cell.png';
import Transferencias from '../../assets/transferencia.png'

export default function Home() {
    return (
        <View className="w-screen h-screen">
            <Header/>
            <View className="flex w-screen pt-5 h-28">
                <View className="flex flex-row justify-evenly ">
                    <Menu textoFuncao='Pix' imagem={Pix} />
                    <Menu textoFuncao='Boleto' imagem={Barras} />
                    <Menu textoFuncao='Transferência' imagem={Transferencias} />
                    <Menu textoFuncao='Recarga' imagem={Cell} />
                </View>
                <View className="flex items-center w-screen pt-4" >
                    <View className="bg-[#bfd3e0] w-[80%] h-10 ">
                    </View>
                </View>
            </View>
        </View>
    )
}