import { View, Text, TextInput } from 'react-native';

const CaixaInput = props => {
    return (
      <View className="w-[80%] mb-12 h-14 bg-slate-100 rounded-lg">
        <Text>{props.texto}</Text>
        <TextInput className="w-[90%] h-9 bg-black"
          placeholder={props.placeholder}
          keyboardType={props.tipoTeclado}
          value={props.valor}
          onChange={props.onChange}
        />
      </View>
    );
  };
  export default CaixaInput;  