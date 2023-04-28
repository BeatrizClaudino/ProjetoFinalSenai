import { withExpoSnack } from 'nativewind';
import Home from './src/pages/Home/index'
import { Text, View } from 'react-native';


export default withExpoSnack(function App() {
  return (
    <View>
      <Home/>
      <Text>XXX</Text>
    </View>
  );
})