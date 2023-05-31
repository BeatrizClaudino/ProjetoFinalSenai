import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Alert } from 'react-native';
import Botao from '../componentes/Button';
import CaixaInput from '../componentes/CaixaInput';
import BotaoDinheiro from "../componentes/botaoDinheiro"
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ip = "192.168.0.104:8000"

export default function Emprestimo({ navigation }) {
    const opcoes = ["Número da conta", "CPF", "Telefone"]
    const [valor, setValor] = useState(0)
    const [destinatario, setDestinatario] = useState()
    const [token, setToken] = useState()

    const showAlert = () => {
        Alert.alert('Sucesso', 'Transferência realizada com sucesso!', [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]);
      };

    const [header, setHeader] = useState({})

  useEffect(() => {
    const testar = async () => {
      try {
        console.log('entrou')
        const token = await AsyncStorage.getItem("token");
        const tokenJSON = JSON.parse(token);
        const acessToken = tokenJSON.access;
        console.log(acessToken)
        axios.post(`http://${ip}/auth/jwt/refresh/`, { refresh: tokenJSON.refresh }) // DAR O REFRESH
          .then((res) => {
            const tokenAccess = res.data.access
            const testeToken = {
              headers: {
                Authorization: `JWT ${tokenAccess}`
              },
            }
            setHeader(testeToken)
          }
          ).catch((erro) => {
            console.log('entrou4');
            console.log('errooioioioio', erro)
          })
      }
      catch {
        console.log('se ferrou otário')
      }
    }
    testar();
  }, [])

    const Transferencia = () => {
        axios.post(`http://${ip}/app/movimentacao/`, {
            cliente: 1,
            destinatario:destinatario,
            valor: valor,
            operacao: "PIX"
        }, header).then((resposta) => {
          setToken(resposta.data.acess)
          AsyncStorage.setItem('token', JSON.stringify(resposta.data))
          showAlert()
          navigation.navigate('Home')
        }).catch((erro) => {
          Alert.alert(erro + "errinho")
        })
      }

    return (
        <View className="w-full h-full bg-white">
            <View className=" justify-center items-center text-center">
                <Text className="text-[24px] text-[#4a1374] mb-4">Realize transferencias</Text>

                <CaixaInput texto="Para quem você quer transferir?" placeholder="Nome, CPF ou chave PIX" onChangeText={(e) => setValor(e)}/>
                <CaixaInput texto="Valor" placeholder="Digite o valor que deseja transferir"/>
                <Botao evento={() => Transferencia()} nomeBotao={"Confirmar solicitação"} onChangeText={(e) => setDestinatario(e)}/>
            </View>
        </View>
    );
}