import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import CaixaInput from '../componentes/CaixaInput';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');

  return (
    <View className="flex-1 h-screen w-screen items-center justify-center text-center bg-slate-400">
      <View>
        <Text className="flex text-lg text-cyan-50 text-center">
          Agora precisamos das suas informações pessoais
        </Text>
        <View className="flex ">
          <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu e-mail" keyboardType="email-address" value={email} onChange={(email) => setEmail(email)}/>
          <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu CPF" keyboardType="phone-pad" value={cpf} onChange={(cpf) => setCpf(cpf)}/>
          <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite a sua data de nascimento" keyboardType="phone-pad" value={datanascimento} onChange={(datanascimento) => setDatanascimento(datanascimento)}/>
          <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu telefone" keyboardType="phone-pad" value={telefone} onChange={(telefone) => setTelefone(telefone)}/>
          <TextInput className="mb-5 h-10 bg-slate-300 rounded-lg" placeholder="Digite o seu CEP" keyboardType="phone-pad" value={cep} onChange={(cep) => setCep(cep)}/>
          </View>
        </View>
      </View>
  )
}