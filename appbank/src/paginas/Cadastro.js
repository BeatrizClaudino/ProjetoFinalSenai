import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Botao from '../componentes/Button';
import axios, { Axios } from 'axios';

export default function Cadastro({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [token, setToken] = useState('');
  const [dataCorreta, setDataCorreta] = useState('')
  const [passo, setPasso] = useState(1);

  
  //PARA REALIZAR O UPLOAD TODAS AS CONDIÇÕES DEVEM SER ATENDIDAS
  const upload = () => {
    if (!nome) {
      Alert.alert('Preencha o campo nome')
      return
    }
    else if (!datanascimento) {
      Alert.alert('Preencha o campo dataNascimento')
      return
    }
    else {
      
      setPasso(2)
    }
  }
  const upload2 = () => {
    if (!cpf) {
      Alert.alert('Preencha o campo cpf')
    }
    else if (cpf.length < 11) {
      Alert.alert('CPF inválido')
    }
    else {
      setPasso(3)
    }
  }
  const upload3 = () => {
    if (!email) {
      Alert.alert('Preencha o campo e-mail')
    }
    else if (!telefone) {
      Alert.alert('Preencha o campo celular')
    }
    else {
      setPasso(5)
    }
  }
  const upload4 = () => {
    if (!senha) {
      Alert.alert('Preencha o campo senha')
    }
    else if (senha.length < 8) {
      Alert.alert('Senha inválida, digite 8 números')
    }
    else if (confirmarSenha.length < 8) {
      Alert.alert('As senhas não conferem')

    }
    else if (confirmarSenha != senha) {
      Alert.alert('As senhas não conferem')
    }
    else {
      criarConta()
      
    }
  }

  const criarConta = () => {
    var data = datanascimento.split('/')
      let dataCorreta = data[2] + "-" + data[1] + "-" + data[0] 
      alert(dataCorreta)
    alert('Entrou mermao')
    alert("aaaaaa" + dataCorreta)
    axios.post('http://10.109.72.36:8000/auth/users/',
      {
        nome: nome,
        email: email,
        cpf: cpf,
        data_nascimento: dataCorreta,
        celular: telefone,
        password: senha
      })
      .then((res) => {
        axios.post('http://10.109.72.36:8000/auth/jwt/create', {
          cpf:cpf,
          password:senha
        }).then((res) =>{
          setToken(JSON.stringify(res.data))
          navigation.navigate('Home')
        })
      }).catch((err) => {
        console.error(err)
      })
  }
  return (
    <>
      {passo == 1 ?
        <View className="w-screen h-screen bg-black">
          <View className="pt-24 flex-1 items-center">
            <View className="flex text-center items-center justify-center w-[80%]">
              <Text className="text-[24px] text-[#5a5d68] pb-16">
                Bem-vindo ao Cashbank!
              </Text>
              <Text className="text-[15px] pb-12 text-[#5a5d68] text-justify">
                Para iniciarmos precisaremos do seu CPF, e lembrando, caso seja menor de idade preencha com os dados de um responsável.
              </Text>
            </View>
            <View className="flex w-[100%] items-center">
              <TextInput className="w-[80%] mb-12 h-12 bg-slate-50 rounded-lg" placeholder="Digite o seu nome" keyboardType="default" onChangeText={(e) => setNome(e)} />
              <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="Digite a sua data de nascimento" keyboardType="phone-pad" onChangeText={(e) => setDatanascimento(e)} />
              <Botao evento={() => upload()} nomeBotao={"Continuar"} />
            </View>
          </View>
        </View>
        :
        passo == 2 ?
          <View className="w-screen h-screen bg-black">
            <View className="w-full pt-24 flex-1 items-center">
              <View className="flex text-center items-center justify-center w-[90%]">
                <Text className="text-[24px] text-[#5a5d68] pb-12">
                  Agora precisamos do seu CPF
                </Text>
                <Text className="text-[15px] pb-12 text-[#5a5d68] text-justify">
                  Suas informações estão seguras conosco!
                </Text>
              </View>
              <View className="flex w-[100%] items-center">
                <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="Digite o seu CPF" maxLength={11} keyboardType="phone-pad" onChangeText={(e) => setCpf(e)} />
                <Botao evento={() => upload2()} nomeBotao={"Continuar"} />
              </View>
            </View>
          </View>
          :
          passo == 3 ?
            <View className="w-screen h-screen bg-black">
              <View className="w-full pt-24 flex-1 items-center">
                <View className="flex text-center items-center justify-center w-[90%]">
                  <Text className="text-[24px] text-[#5a5d68] pb-12">
                    Em qual telefone e e-mail podemos falar com você?
                  </Text>
                  <Text className="text-[15px] pb-12 text-[#5a5d68] text-justify">
                    Será utilizado para informar sobre suas transações e novidades do nosso banco.
                  </Text>
                </View>
                <View className="flex w-[100%] items-center">
                  <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="Digite o seu E-mail" keyboardType="default" onChangeText={(e) => setEmail(e)} />
                  <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="(00) 00000-0000" keyboardType="phone-pad" onChangeText={(e) => setTelefone(e)} />
                  <Botao evento={() => upload3()} nomeBotao={"Continuar"} />
                </View>
              </View>
            </View>
            :
            passo == 5 ?
              <View className="w-screen h-screen bg-black">
                <View className="w-full pt-24 flex-1 items-center">
                  <View className="flex text-center items-center justify-center w-[90%]">
                    <Text className="text-[24px] text-[#5a5d68] pb-12">
                      Estamos quase lá! Crie a sua senha.
                    </Text>
                    <Text className="text-[15px] pb-12 text-[#5a5d68] text-justify">
                      Lembrando que a senha precisa conter 8 números e números sortidos.
                    </Text>
                  </View>
                  <View className="flex w-[100%] items-center">
                    <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="Digite a sua senha" secureTextEntry={true} maxLength={8} keyboardType="phone-pad" onChangeText={(e) => setSenha(e)} />
                    <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="confirmar senha" secureTextEntry={true} maxLength={8} keyboardType="phone-pad" onChangeText={(e) => setConfirmarSenha(e)} />
                    <Botao evento={() => upload4()} nomeBotao={"Finalizar Cadastro"} />
                  </View>
                </View>
              </View>
              :
              null
      }
    </>

  )
}
