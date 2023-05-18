import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {
    //CONSTANTES UTILIZADAS NO DECORRER DO PROJETO E SÃO DADOS OBRIGATÓRIOS NO INPUT PELO USUÁRIO
    const [cpf, setCpf] = useState()
    const [senha, setSenha] = useState()

    //PARA REALIZAR O UPLOAD TODAS AS CONDIÇÕES DEVEM SER ATENDIDAS
    const login = (e) => {
        e.preventDefault()

        if (!cpf) {
            console.log('Preencha o campo cpf')
            return
        }
        else if (!senha) {
            console.log('Preencha o campo senha')
        }
        else {
            enter()
        }
    }
    const enter = async () => {
        await axios.post('http://127.0.0.1:8000/auth/jwt/create', {
            cpf: cpf,
            password: password,
        }).then((resposta) => {
            console.log(resposta)
            setToken(resposta.data.access)
            localStorage.setItem('token', JSON.stringify(resposta.data))
            navigation.navigate('Home')
        })
            .catch((erro) => {
                if (erro?.response?.data?.message) {
                    alert(erro.response.data.message)
                    console.log('console', erro.response.data.message)
                } else {
                    alert('Aconteceu um erro inesperado ao afetuar o seu login! Entre em contato com o suporte!')
                }
            })
    }

    //=================== O FRONT END SE INICIA AQUI ====================
    return (
        <View className="w-screen h-screen bg-white">
            <View>
                <Text className="font-serif">
                    Agora precisamos das suas informações pessoais
                </Text>
                <TextInput
                    placeholder='Nome completo'
                    value={nome}
                    onChangeText={e => {
                        setNome(e)
                    }}>
                </TextInput>
            </View>

        </View >
    );
}