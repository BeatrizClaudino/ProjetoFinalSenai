import { StatusBar } from 'expo-status-bar';
import { withExpoSnack } from 'nativewind';
import { TextInput, Text, View } from 'react-native';
import Routers from './routers';

function App() {
  return (
    <Routers/>
  );
}

export default withExpoSnack(App);