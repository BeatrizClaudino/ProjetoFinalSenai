import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Botao from '../componentes/Button';
import axios, { Axios } from 'axios';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const ip = "10.109.72.36:8000"

export default function Login({navigation}) {
    //CONSTANTES UTILIZADAS NO DECORRER DO PROJETO E SÃO DADOS OBRIGATÓRIOS NO INPUT PELO USUÁRIO
    const [cpf, setCpf] = useState()
    const [senha, setSenha] = useState()
    const [token, setToken] = useState('')

    //PARA REALIZAR O UPLOAD TODAS AS CONDIÇÕES DEVEM SER ATENDIDAS
    const login = () => {
        if (!cpf) {
            Alert.alert('Preencha o campo cpf')
            return
        }
        else if (cpf < 11){
            Alert.alert('CPF inválido!' )
        }   
        else if (!senha) {
            Alert.alert('Preencha o campo senha')
        }
        else {
            enter()
        }
    }
    const enter = async () => {
        const resposta = axios.post(`http://${ip}/auth/jwt/create`, {
            cpf: cpf,
            password: senha,
        }).then((resposta) => {
            console.log(resposta)
            Alert.alert(resposta.data.access)
            setToken(resposta.data.access)
            AsyncStorage.setItem('token', JSON.stringify(resposta.data))
            navigation.navigate('Home')
        })
            .catch((erro) => {
                Alert.alert(erro + "errinho")
                // if (erro?.response?.data?.message) {
                //     alert(erro.response.data.message)
                //     console.log('console', erro.response.data.message)
                // } else {
                //     alert('Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!')
                // }
            })
    }

    //=================== O FRONT END SE INICIA AQUI ====================
    return (
        <View className="w-screen h-screen bg-white">
          <View className="pt-24 flex-1 items-center">
            <View className="flex text-center items-center justify-center w-[80%]">
              <Text className="text-[24px] text-[#4a1374] pb-14">
                CashBank 
              </Text>
            </View>
            <View className="flex w-[100%] items-center">
              <TextInput className="w-[80%] mb-12 h-14 bg-slate-100 rounded-lg" placeholder="000.000.000-01" keyboardType="phone-pad" onChangeText={(e) => setCpf(e)} />
              <TextInput className="w-[80%] mb-16 h-14 bg-slate-100 rounded-lg" placeholder="password" keyboardType="phone-pad" onChangeText={(e) => setSenha(e)} />
              <Botao evento={() => login()} nomeBotao={"Login"} />
            </View>
          </View>
        </View>
    );
}