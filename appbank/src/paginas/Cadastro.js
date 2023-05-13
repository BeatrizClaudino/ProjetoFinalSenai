import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import Botao from '../componentes/Button';

export default function Cadastro({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
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
    else if (cpf.length < 11){
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
    else if(senha.length < 6){
      Alert.alert('Senha inválida, digite 6 números')
    }
    else if(confirmarSenha.length < 6){
      Alert.alert('As senhas não conferem')
      
    }
    else if(confirmarSenha != senha){
      Alert.alert('As senhas não conferem')
      
    }
    else{
    navigation.navigate('Home')
    }
  }


  // const storageRef = ref(
  //   storage,
  //   `images/${nome.replace(/ +/g, '') + '_' + image.name}`
  // )
  // const uploadTask = uploadBytesResumable(storageRef, file)

  // uploadTask.on('state_changed', snapshot => {
  //   const progress = Math.round(
  //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //   )
  //   setTimeout(() => {
  //     setProgressoPercent(progress), 1000
  //   })
  // })

  // function Calculo(){
  //   var data = datanascimento

  // }


  // const criarConta = (nome, email, cpf, datanascimento, telefone) =>{
  //   axios.post('http://127.0.0.1:8000/app/usuario/',
  //   {
  //     nome: nome,
  //     email: email,
  //     cpf: cpf,
  //     datanascimento: datanascimento,
  //     celular: telefone,
  //   })
  // }


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
              <Botao evento={() => upload()} nomeBotao={"Continuar"}/>
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
                <Botao evento={() => upload2()} nomeBotao={"Continuar"}/>
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
              passo == 5?
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
                    <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="Digite a sua senha" maxLength={6} keyboardType="phone-pad" secureTextEntry={true} onChangeText={(e) => setSenha(e)} />
                    <TextInput className="w-[80%] mb-16 h-12 bg-slate-50 rounded-lg" placeholder="confirmar senha" maxLength={6} keyboardType="phone-pad" onChangeText={(e) => setConfirmarSenha(e)} />
                    <Botao evento={() => upload4()} nomeBotao={"Finalizar Cadastro"}/>
                  </View>
                </View>
              </View>
              :
              null
      }
    </>

  )
}
