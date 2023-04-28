import { Text, View, StyleSheet } from 'react-native';
import Header from './componentes/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Header do app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }

}

)
