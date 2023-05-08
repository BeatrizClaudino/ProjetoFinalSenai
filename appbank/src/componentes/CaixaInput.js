import { View, Text, TextInput } from 'react-native';

const CaixaInput = props => {
    return (
      <View>
        <Text>{props.texto}</Text>
        <TextInput
          placeholder={props.placeholder}
          keyboardType={props.tipoTeclado}
          value={props.valor}
          onChange={props.onChange}
        />
      </View>
    );
  };
  export default CaixaInput;  