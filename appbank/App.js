import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { TextInput, Text, View } from 'react-native';
import Cadastro from './src/paginas/Cadastro'
import Routers from './routers';

function App() {
  return (
    <Cadastro/>
  );
}

export default withExpoSnack(App);