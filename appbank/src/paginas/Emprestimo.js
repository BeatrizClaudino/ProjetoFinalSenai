import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CaixaInput from '../componentes/CaixaInput';
import SelectDropdown from 'react-native-select-dropdown';

export default function Emprestimo({ route }) {
  // const { user } = useSession(navigation);
  const { valor } = route.params

  const [numeroParcelas, setNumeroParcelas] = useState()
  const [taxaJuros, settaxaJuros] = useState()

  opcoes = ["1 parcela", "2 parcela", "3 parcela", "4 parcela", "5 parcela", "6 parcela"]

  const [juros, setJuros] = useState()
  const [Valorparcelas, setValorparcelas] = useState(1);
  const [valorComJuros, setValorComJuros] = useState()
  const [valorTotalEmprestimo, setValorTotalEmprestimo] = useState()


  function CalculoJuros() {
    taxaJuros = 0.05
    Valorparcelas = valor / numeroParcelas
    juros = Valorparcelas * taxaJuros
    valorComJuros = Valorparcelas + juros
    valorTotalEmprestimo = valorComJuros * numeroParcelas
  }
  return (
    <View className="flex-1 justify-center items-center bg-purple-500">
      <Text className="text-white text-2xl mb-4">Solicitar Empréstimo</Text>
      <Text>
        Valor passado da Primeira Tela: {valor}
      </Text>
      <SelectDropdown
        data={opcoes}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />
    </View>
  );
};
