import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Botao from '../componentes/Button';

export default function Cadastro({ navigation }) {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [passo, setPasso] = useState(1);
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
  function Calculo(){
    var data = datanascimento
    
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
              <TextInput className="w-[80%] mb-12 h-10 bg-slate-50 rounded-lg" placeholder="Digite o seu nome" keyboardType="default" onChange={(nome) => setNome(nome)} />
              <TextInput className="w-[80%] mb-16 h-10 bg-slate-50 rounded-lg" placeholder="Digite a sua data de nascimento" keyboardType="phone-pad" onChange={(datanascimento) => setDatanascimento(datanascimento)} />
              <Botao evento={() => setPasso(2)} />
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
          <TextInput className="w-[80%] mb-16 h-10 bg-slate-50 rounded-lg" placeholder="Digite o seu CPF" maxLength={11} keyboardType="phone-pad" onChange={(cpf) => setCpf(cpf)} />
            <Botao evento={() => setPasso(2)} />
          </View>
        </View>
      </View>
          :
          null
      }

    </>

  )
}
