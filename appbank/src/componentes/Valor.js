import { Alert, Text, View } from 'react-native';
import { useState } from 'react';
import CaixaInput from './CaixaInput';
import Botao from './Button';
import { useSession } from '../paginas/Home';

const Valor = ({ navigation }) => {
  const [valor, setValor] = useState();
//   const { user } = useSession(navigation);

  function solicitarEmprestimo() {
    if (valor < 10 * 5) {
      Alert.alert('Sua conta não cumpre os requisitos para solicitar esse valor!');
    } else {
      navigation.navigate('Emprestimo', { valor: valor });
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 24, marginBottom: 16 }}>Solicitar Empréstimo</Text>
      <CaixaInput placeholder="Digite o valor do seu empréstimo" tipoTeclado="phone-pad" onChangeText={(e) => setValor(e)} />
      <Botao nomeBotao="Confirmar valor" evento={solicitarEmprestimo} />
    </View>
  );
};

export default Valor;
