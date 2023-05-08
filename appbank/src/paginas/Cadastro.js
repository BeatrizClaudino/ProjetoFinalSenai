import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CaixaInput from '../componentes/CaixaInput';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [datanascimento, setDatanascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cep, setCep] = useState('');

  return (
    <View className="flex-1 items-center justify-center bg-slate-600">
      <View>
        <Text className="flex text-lg text-cyan-50 text-center">
          Agora precisamos das suas informações pessoais
        </Text>
        <View>
          <View>
          <CaixaInput className="bg-black w-[90%] h-8" texto="Nome" placeholder="Digite o seu nome" tipoTeclado="default" valor={nome} onChange={(nome) => setNome(nome)}/>
          </View>
         
          <CaixaInput texto="E-mail" placeholder="Digite o seu e-mail" tipoTeclado="email-address" valor={email} onChange={(email) => setEmail(email)}/>
          <CaixaInput texto="CPF" placeholder="Digite o seu CPF" tipoTeclado="phone-pad" valor={cpf} onChange={(cpf) => setCpf(cpf)}/>
          <CaixaInput texto="Data de nascimento" placeholder="Digite a sua data de nascimento" tipoTeclado="phone-pad" valor={datanascimento} onChange={(datanascimento) => setDatanascimento(datanascimento)}/>
          <CaixaInput texto="Telefone" placeholder="Digite o seu telefone" tipoTeclado="phone-pad" valor={telefone} onChange={(telefone) => setTelefone(telefone)}/>
          <CaixaInput texto="CEP" placeholder="Digite o seu CEP" tipoTeclado="phone-pad" valor={cep} onChange={(cep) => setCep(cep)}/>
        </View>
      </View>
    </View>
  )
}