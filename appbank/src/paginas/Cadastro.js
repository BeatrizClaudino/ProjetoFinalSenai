import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Botao from '../componentes/Button';

export default function Cadastro({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');

  //PARA REALIZAR O UPLOAD TODAS AS CONDIÇÕES DEVEM SER ATENDIDAS
  const upload = (e) => {
    e.preventDefault()

    if (!nome) {
      alert('Preencha o campo nome')
      return
    }
    else if (!email) {
      alert('Preencha o campo e-mail')
      return
    }
    else if (!cpf) {
      alert('Preencha o campo cpf')
      return
    }
    else if (!datanascimento) {
      alert('Preencha o campo dataNascimento')
      return
    }
    else if (!telefone) {
      alert('Preencha o campo celular')
      return
    }
    else {
      
      navigation.navigate('Cadastro2', {
        nome: nome, 
        email: email, 
        cpf: cpf, 
        datanascimento: datanascimento, 
        telefone: telefone
      })

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
  }


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
    <View className="flex-1 h-screen w-screen items-center justify-center text-center bg-slate-400">
      <View>
        <Text className="flex text-lg items-center text-center text-cyan-50">
          Agora precisamos das suas informações pessoais
        </Text>
        <View className="flex justify-center items-center">
          <View className="w-[90%]">
          <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu nome" keyboardType="text" onChange={(nome) => setNome(nome)} />
            <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu e-mail" keyboardType="email-address" onChange={(email) => setEmail(email)} />
            <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu CPF" keyboardType="phone-pad" onChange={(cpf) => setCpf(cpf)} />
            <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite a sua data de nascimento" keyboardType="phone-pad" onChange={(datanascimento) => setDatanascimento(datanascimento)} />
            <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu telefone" keyboardType="phone-pad" onChange={(telefone) => setTelefone(telefone)} />
          </View>
          <Botao evento={upload}/>
        </View>
      </View>
    </View>
  )
}
