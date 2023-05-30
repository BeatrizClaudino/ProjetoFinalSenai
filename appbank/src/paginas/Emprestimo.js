import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Botao from '../componentes/Button';
import axios from 'axios';

export const ip = "192.168.0.104:8000"

const showAlert = () => {
  Alert.alert('Sucesso', 'Empréstimo realizado com sucesso!', [
    { text: 'OK', onPress: () => console.log('OK Pressed') }
  ]);
};
export default function Emprestimo({ route }) {
  // const { user } = useSession(navigation);
  const { valor } = route.params
  const aprovado = false

  const [parcelas, setParcelas] = useState(1);
  const [custoParcela, setCustoParcela] = useState(0);
  const [valorTotalJuros, setValorTotalJuros] = useState()
  const taxa = 5 / 100

  const atualizarCustoParcela = (parcelas) => {
    var taxaParcelas = (valor / parcelas) * taxa
    valorComJuros = (taxaParcelas * parcelas) + (valor / parcelas)
    valorformatado = parseFloat(valorComJuros).toFixed(2);
    valorTotalJuros = valorformatado*parcelas
    setValorTotalJuros(valorTotalJuros)
    setCustoParcela(valorformatado);
  };

  const enviarEmprestimo = () => {
    axios.post(`http://${ip}/app/emprestimo/`,{
      valorSolicitado: valor,
      juros:taxa,
      aprovado:true,
      valorTotalJuros: valorTotalJuros,
      valorParcelaJuros: custoParcela
    }).then((resposta) => {
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
        <Text className="text-[24px] text-[#4a1374] mb-4">Solicitar Empréstimo</Text>
        <Text className="text-[20px] pt-12">
          Empréstimo solicitado: R${valor},00
        </Text>
          <View className="">
              <Text className="text-[20px]">Selecione a quantidade de parcelas:</Text>
              <Picker
                selectedValue={parcelas}
                onValueChange={(itemValue) => {
                  atualizarCustoParcela(itemValue);
                  setParcelas(itemValue);
                }}
              >
                <Picker.Item label="Select the value" />
                <Picker.Item label="1x" value={1} />
                <Picker.Item label="2x" value={2} />
                <Picker.Item label="3x" value={3} />
                <Picker.Item label="4x" value={4} />
                <Picker.Item label="5x" value={5} />
                <Picker.Item label="6x" value={6} />
              </Picker>
            </View>
        <Text className="text-[18px]">Serão {parcelas} parcela(s) de {custoParcela}</Text>
        
        <Botao evento={() => enviarEmprestimo()} nomeBotao={"Confirmar solicitação"}/>  
        </View>
      </View>
  );
};
