import { View, Text, TextInput } from 'react-native';

const CaixaInput = props => {
    return (
      <View className={"bg-cyan-300 w-full h-full"}>
        <Text>{props.texto}</Text>
        <TextInput className="w-full h-9 bg-black"
          placeholder={props.placeholder}
          keyboardType={props.tipoTeclado}
          value={props.valor}
          onChange={props.onChange}
        />
      </View>
    );
  };
  export default CaixaInput;  