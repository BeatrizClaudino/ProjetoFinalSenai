import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CaixaInput from '../componentes/CaixaInput';
import SelectDropdown from 'react-native-select-dropdown';
import { Picker } from '@react-native-picker/picker';

export default function Emprestimo({ route }) {
  // const { user } = useSession(navigation);
  const { valor } = route.params

  const [parcelas, setParcelas] = useState(1);
  const [custoParcela, setCustoParcela] = useState(0);
  const taxa = 5 /100 

  const atualizarCustoParcela = (parcelas) => {
    var taxaParcelas = (valor / parcelas) * taxa 
    valorComJuros = (taxaParcelas * parcelas) + (valor/parcelas)
    setCustoParcela(valorComJuros);
  };

  // function CalculoParcelas(){
  //   var taxaParcelas = (valor/parcelas)*taxa
  //   valorComJuros = taxaParcelas + parcelas
  // }
 
  return (
    <View className="flex-1 justify-center items-center bg-purple-500">
      <Text className="text-white text-2xl mb-4">Solicitar Empréstimo</Text>
      <Text>
        Valor passado da Primeira Tela: {valor}
      </Text>
      <View>
  <Text>Selecione a quantidade de parcelas:</Text>
  <Picker
    selectedValue={parcelas}
    onValueChange={(itemValue) => {
      atualizarCustoParcela(itemValue);
      setParcelas(itemValue);
    }}
  >
    <Picker.Item label="Select the value"/>
    <Picker.Item label="1x" value={1} />
    <Picker.Item label="2x" value={2} />
    <Picker.Item label="3x" value={3} />
    <Picker.Item label="4x" value={4} />
    <Picker.Item label="5x" value={5} />
    <Picker.Item label="6x" value={6} />
  </Picker>
</View>
<View>
  <Text>{parcelas}</Text>
  <Text>{custoParcela}</Text>
</View>
    </View>
  );
};
