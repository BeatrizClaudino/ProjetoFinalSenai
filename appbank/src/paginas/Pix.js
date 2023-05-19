import React, { Component, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '../componentes/Button';

export default function Pix({navigation}) {
    const [pix, setPix] = useState('')
    return(
        <SafeAreaView className="flex-1 h-screen w-screen bg-slate-400">
            <View className="h-screen p-10 bg-white">
                <Text className="text-3xl font-bold text-gray-800">Àrea pix </Text>
                <Text className="pt-6 text-lg">Digite a chave pix do destinatário</Text>
                <TextInput className="pt-4" type="text" placeholder="Chave pix do destinatário"/>
                <Botao nomeBotao="Enviar"/>
                <Botao nomeBotao="Voltar" evento={() => navigation.navigate('Home')}/>
            </View>
        </SafeAreaView>
    )
}